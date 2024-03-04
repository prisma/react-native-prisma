
#ifndef query_engine_host_object_h
#define query_engine_host_object_h

#include "query_engine.h"
#include <jsi/jsi.h>
#include <memory>
#include <string>

namespace prisma {
namespace jsi = facebook::jsi;

class JSI_EXPORT QueryEngineHostObject : public jsi::HostObject {
public:
  QueryEngineHostObject(std::string id,
                        std::function<void(std::string)> log_callback);

  void setEngine(QueryEngine *ptr);

  std::string id;
  std::function<void(std::string)> log_callback;
  QueryEngine *engine;
};
} // namespace prisma

#endif
