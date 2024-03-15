#ifndef query_engine_h
#define query_engine_h

/* Warning, this file is autogenerated by cbindgen. Don't modify this manually.
 */

#include <stdarg.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

#ifdef __cplusplus
namespace prisma {
#endif // __cplusplus

/**
 * This struct holds an instance of the prisma query engine
 * You can instanciate as many as you want
 */
typedef struct QueryEngine QueryEngine;

typedef struct ConstructorOptionsNative {
  const char *config_dir;
} ConstructorOptionsNative;

/**
 * Parameters defining the construction of an engine.
 * Unlike the Node version, this doesn't support the GraphQL protocol for
 * talking with the prisma/client, since it is deprecated and going forward
 * everything should be done via JSON rpc.
 */
typedef struct ConstructorOptions {
  const char *id;
  const char *datamodel;
  const char *base_path;
  const char *log_level;
  bool log_queries;
  const char *datasource_overrides;
  const char *env;
  bool ignore_env_var_errors;
  struct ConstructorOptionsNative native;
  void (*log_callback)(const char *, const char *);
} ConstructorOptions;

#ifdef __cplusplus
extern "C" {
#endif // __cplusplus

extern const int32_t PRISMA_OK;

extern const int32_t PRISMA_UNKNOWN_ERROR;

extern const int32_t PRISMA_MISSING_POINTER;

int prisma_create(struct ConstructorOptions options,
                  struct QueryEngine **qe_ptr);

int prisma_connect(struct QueryEngine *qe, const char *trace,
                   char **error_string_ptr);

const char *prisma_query(struct QueryEngine *qe, const char *body_str,
                         const char *header_str, const char *tx_id_str,
                         char **error_string_ptr);

const char *prisma_start_transaction(struct QueryEngine *qe,
                                     const char *options_str,
                                     const char *header_str);

const char *prisma_commit_transaction(struct QueryEngine *qe,
                                      const char *tx_id_str,
                                      const char *header_str);

const char *prisma_rollback_transaction(struct QueryEngine *qe,
                                        const char *tx_id_str,
                                        const char *header_str);

int prisma_disconnect(struct QueryEngine *qe, const char *header_str);

int prisma_apply_pending_migrations(struct QueryEngine *qe,
                                    const char *migration_folder_path,
                                    char **error_string_ptr);

int prisma_destroy(struct QueryEngine *qe);

#ifdef __cplusplus
} // extern "C"
#endif // __cplusplus

#ifdef __cplusplus
} // namespace prisma
#endif // __cplusplus

#endif /* query_engine_h */
