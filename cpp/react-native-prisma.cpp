#include "react-native-prisma.h"
#include "QueryEngineHostObject.h"
#include "ThreadPool.h"
#include "macros.h"
#include "query_engine.h"
#include "utils.h"
#include <iostream>
#include <unordered_map>

namespace prisma {

namespace jsi = facebook::jsi;

static std::string base_path;
std::string migrations_path;
std::shared_ptr<react::CallInvoker> call_invoker;
std::unordered_map<std::string, std::shared_ptr<QueryEngineHostObject>>
    engine_map;
ThreadPool thread_pool;

// Pure C function that is used by Rust to call the log callback
extern void log_callback(const char *id, const char *msg) {
  if (engine_map.count(id)) {
    auto engine = engine_map[id];
    engine->log_callback(msg);
  }
}

void install_cxx(jsi::Runtime &rt,
                 std::shared_ptr<react::CallInvoker> call_invoker_param,
                 const char *base_path_param,
                 const char *migrations_path_param) {
  base_path = std::string(base_path_param);
  migrations_path = std::string(migrations_path_param);
  call_invoker = call_invoker_param;

  auto create = HOSTFN("create", 1) {
    // Rust will return a pointer to the internal struct, C++ has nothing to do
    // with this it will only be passed to the stateless functions
    QueryEngine *ptr;
    // Each query engine requires a unique id to route the logging messages
    std::string id = get_uuid();

    jsi::Object params = args[0].asObject(rt);

    std::string datamodel =
        params.getProperty(rt, "datamodel").asString(rt).utf8(rt);
    std::string log_level =
        params.getProperty(rt, "logLevel").asString(rt).utf8(rt);
    bool log_queries = params.getProperty(rt, "logQueries").asBool();
    bool enable_tracing = params.getProperty(rt, "enableTracing").asBool();
    std::shared_ptr<jsi::Value> js_log_callback =
        std::make_shared<jsi::Value>(params.getProperty(rt, "logCallback"));
    bool ignore_env_var_errors =
        params.getProperty(rt, "ignoreEnvVarErrors").asBool();
    std::string env = params.getProperty(rt, "env").asString(rt).utf8(rt);
    std::string datasource_overrides =
        params.getProperty(rt, "datasourceOverrides").asString(rt).utf8(rt);

    ConstructorOptionsNative nativeOptions = ConstructorOptionsNative{""};
    ConstructorOptions options =
        ConstructorOptions{.id = id.c_str(),
                           .datamodel = datamodel.c_str(),
                           .base_path = base_path.c_str(),
                           .log_level = log_level.c_str(),
                           .log_queries = log_queries,
                           .enable_tracing = enable_tracing,
                           .datasource_overrides = datasource_overrides.c_str(),
                           .env = env.c_str(),
                           .ignore_env_var_errors = ignore_env_var_errors,
                           .native = nativeOptions,
                           .log_callback = &log_callback};

    char *error_ptr;

    int prisma_res = prisma_create(options, &ptr, &error_ptr);

    if (prisma_res != PRISMA_OK) {
      auto error_string = std::string(error_ptr);
      free(error_ptr);
      throw std::runtime_error("Failed to create prisma engine: " +
                               error_string);
    }

    auto log_callback_fn = [&rt, js_log_callback](std::string msg) {
      call_invoker->invokeAsync([&rt, msg, &js_log_callback] {
        js_log_callback->asObject(rt).asFunction(rt).call(
            rt, jsi::String::createFromUtf8(rt, msg));
      });
    };

    QueryEngineHostObject engineHostObject =
        QueryEngineHostObject(id, log_callback_fn);

    engineHostObject.setEngine(ptr);

    auto engine = std::make_shared<QueryEngineHostObject>(engineHostObject);
    engine_map[id] = engine;

    return jsi::Object::createFromHostObject(rt, engine);
  });

  auto connect = HOSTFN("connect", 3) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    std::string trace = args[1].asString(rt).utf8(rt);
    std::string request_id = args[2].asString(rt).utf8(rt);
    char *error_ptr;

    int result = prisma_connect(queryEngineHostObject->engine, trace.c_str(),
                                request_id.c_str(), &error_ptr);
    if (result != PRISMA_OK) {
      std::string error_message(error_ptr);
      free(error_ptr);
      throw std::runtime_error(error_message);
    }
    return {};
  });

  auto execute = HOSTFN("execute", 5) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    std::string body = args[1].asString(rt).utf8(rt);
    std::string trace = args[2].asString(rt).utf8(rt);
    std::string tx_id;
    if (args[3].isString()) {
      tx_id = args[3].asString(rt).utf8(rt);
    }
    std::string request_id = args[4].asString(rt).utf8(rt);

    auto promise_constructor = rt.global().getPropertyAsFunction(rt, "Promise");

    auto promise = promise_constructor.callAsConstructor(rt, HOSTFN("executor", 2) {
      auto resolve = std::make_shared<jsi::Value>(rt, args[0]);
      auto reject = std::make_shared<jsi::Value>(rt, args[1]);

      auto task = [&rt, &queryEngineHostObject, body = std::move(body),
                   trace = std::move(trace), tx_id = std::move(tx_id),
                   request_id = std::move(request_id), resolve, reject]() {
        const char *response;
        char *error_ptr;

        if (!tx_id.empty()) {
          response = prisma_query(queryEngineHostObject->engine, body.c_str(),
                                  trace.c_str(), tx_id.c_str(),
                                  request_id.c_str(), &error_ptr);
        } else {
          response = prisma_query(queryEngineHostObject->engine, body.c_str(),
                                  trace.c_str(), nullptr, request_id.c_str(),
                                  &error_ptr);
        }

        call_invoker->invokeAsync([&rt, response = std::move(response),
                                   error_ptr, resolve, reject]() {
          if (error_ptr == nullptr) {
            resolve->asObject(rt).asFunction(rt).call(
                rt, jsi::String::createFromUtf8(rt, response));
          } else {
            auto errCtr = rt.global().getPropertyAsFunction(rt, "Error");
            std::string error_message(error_ptr);
            free(error_ptr);

            auto error = errCtr.callAsConstructor(
                rt, jsi::String::createFromUtf8(rt, error_message));

            reject->asObject(rt).asFunction(rt).call(rt, error);
          }
        });
      };

      thread_pool.queueWork(task);

      return {};
    }));

    return promise;
  });

  auto start_transaction = HOSTFN("startTransaction", 4) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    std::string body = args[1].asString(rt).utf8(rt);
    std::string trace = args[2].asString(rt).utf8(rt);
    std::string request_id = args[3].asString(rt).utf8(rt);

    const char *response =
        prisma_start_transaction(queryEngineHostObject->engine, body.c_str(),
                                 trace.c_str(), request_id.c_str());

    if (response == nullptr) {
      throw std::runtime_error("prisma engine did not start transaction");
    }

    return jsi::String::createFromUtf8(rt, std::string(response));
  });

  auto commit_transaction = HOSTFN("commitTransaction", 4) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    std::string body = args[1].asString(rt).utf8(rt);
    std::string trace = args[2].asString(rt).utf8(rt);
    std::string request_id = args[3].asString(rt).utf8(rt);

    const char *response =
        prisma_commit_transaction(queryEngineHostObject->engine, body.c_str(),
                                  trace.c_str(), request_id.c_str());

    if (response == nullptr) {
      throw std::runtime_error("prisma engine did not commit transaction");
    }

    return jsi::String::createFromUtf8(rt, std::string(response));
  });

  auto rollback_transaction = HOSTFN("rollbackTransaction", 4) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    std::string body = args[1].asString(rt).utf8(rt);
    std::string trace = args[2].asString(rt).utf8(rt);
    std::string request_id = args[3].asString(rt).utf8(rt);

    const char *response =
        prisma_rollback_transaction(queryEngineHostObject->engine, body.c_str(),
                                    trace.c_str(), request_id.c_str());

    if (response == nullptr) {
      throw std::runtime_error("prisma engine did not rollback transaction");
    }

    return jsi::String::createFromUtf8(rt, std::string(response));
  });

  auto disconnect = HOSTFN("disconnect", 3) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    std::string trace = args[1].asString(rt).utf8(rt);
    std::string request_id = args[2].asString(rt).utf8(rt);

    engine_map.erase(queryEngineHostObject->id);

    int res = prisma_disconnect(queryEngineHostObject->engine, trace.c_str(),
                                request_id.c_str());

    if (res != PRISMA_OK) {
      throw std::runtime_error("Could not disconnect from prisma query engine");
    }
    return {};
  });

  auto apply_pending_migrations = HOSTFN("applyPendingMigrations", 1) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    char *error_ptr;
    int res = prisma_apply_pending_migrations(
        queryEngineHostObject->engine, migrations_path.c_str(), &error_ptr);

    if (res != PRISMA_OK) {
      auto error_string = std::string(error_ptr);
      free(error_ptr);
      throw std::runtime_error(error_string);
    }

    return {};
  });

  auto trace = HOSTFN("trace", 1) {
    std::shared_ptr<QueryEngineHostObject> queryEngineHostObject =
        args[0].asObject(rt).asHostObject<QueryEngineHostObject>(rt);
    std::string request_id = args[0].asString(rt).utf8(rt);
    char *error_ptr;

    const char *response = prisma_trace(queryEngineHostObject->engine,
                                        request_id.c_str(), &error_ptr);

    if (error_ptr != nullptr) {
      auto error_string = std::string(error_ptr);
      free(error_ptr);
      throw std::runtime_error(error_string);
    }

    std::string response_string;

    if (response != nullptr) {
      response_string = std::string(response);
      free((void *)response);
    } else {
      response_string = std::string("{traces:[],logs:[]}");
    }

    return jsi::String::createFromUtf8(rt, response_string);
  });

  jsi::Object module = jsi::Object(rt);
  module.setProperty(rt, "create", std::move(create));
  module.setProperty(rt, "connect", std::move(connect));
  module.setProperty(rt, "execute", std::move(execute));
  module.setProperty(rt, "startTransaction", std::move(start_transaction));
  module.setProperty(rt, "commitTransaction", std::move(commit_transaction));
  module.setProperty(rt, "rollbackTransaction",
                     std::move(rollback_transaction));
  module.setProperty(rt, "disconnect", std::move(disconnect));
  module.setProperty(rt, "applyPendingMigrations",
                     std::move(apply_pending_migrations));
  module.setProperty(rt, "trace", std::move(trace));

  rt.global().setProperty(rt, "__PrismaProxy", std::move(module));
}

void invalidate() {
  for (auto &engine : engine_map) {
    prisma_destroy(engine.second->engine);
  }
  engine_map.clear();
}

} // namespace prisma
