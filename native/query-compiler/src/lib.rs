use psl::{ConnectorRegistry, parser_database::NoExtensionTypes};
use quaint::prelude::{ConnectionInfo, ExternalConnectionInfo, SqlFamily};
use query_compiler::Expression;
use query_core::{
    BatchDocument, QueryDocument, protocol::EngineProtocol, with_sync_unevaluated_request_context,
};
use request_handlers::RequestBody;
use serde::{Deserialize, Serialize};
use std::{
    ffi::{CStr, CString, c_char},
    ptr,
    sync::Arc,
};

const CONNECTORS: ConnectorRegistry<'_> = &[psl::builtin_connectors::SQLITE];

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct Params {
    datamodel: String,
    provider: String,
    connection_info: Connection,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct Connection {
    max_bind_values: Option<u32>,
    supports_relation_joins: bool,
}

pub struct Compiler {
    schema: Arc<schema::QuerySchema>,
    connection: ConnectionInfo,
}

impl Compiler {
    fn new(params: Params) -> Result<Self, String> {
        if params.provider != "sqlite" {
            return Err(format!("Unsupported provider: {}", params.provider));
        }
        let schema =
            psl::parse_without_validation(params.datamodel.into(), CONNECTORS, &NoExtensionTypes);
        let schema = Arc::new(
            schema::build(Arc::new(schema), true).with_db_version_supports_join_strategy(
                params.connection_info.supports_relation_joins,
            ),
        );
        Ok(Self {
            schema,
            connection: ConnectionInfo::External(ExternalConnectionInfo::new(
                SqlFamily::Sqlite,
                Some("main".to_owned()),
                params
                    .connection_info
                    .max_bind_values
                    .map(|value| value as usize),
                params.connection_info.supports_relation_joins,
            )),
        })
    }

    fn compile(&self, request: &str) -> Result<String, String> {
        with_sync_unevaluated_request_context(|| {
            let request = RequestBody::try_from_str(request, EngineProtocol::Json)
                .map_err(|error| error.to_string())?;
            let QueryDocument::Single(operation) = request
                .into_doc(&self.schema)
                .map_err(|error| error.to_string())?
            else {
                return Err("Unexpected batch request".to_owned());
            };
            serde_json::to_string(
                &query_compiler::compile(&self.schema, operation, &self.connection)
                    .map_err(|error| error.to_string())?,
            )
            .map_err(|error| error.to_string())
        })
    }

    fn compile_batch(&self, request: &str) -> Result<String, String> {
        with_sync_unevaluated_request_context(|| {
            let request = RequestBody::try_from_str(request, EngineProtocol::Json)
                .map_err(|error| error.to_string())?;
            let response = match request
                .into_doc(&self.schema)
                .map_err(|error| error.to_string())?
            {
                QueryDocument::Single(operation) => BatchResponse::Multi {
                    plans: vec![
                        query_compiler::compile(&self.schema, operation, &self.connection)
                            .map_err(|error| error.to_string())?,
                    ],
                },
                QueryDocument::Multi(batch) => match batch.compact(&self.schema) {
                    BatchDocument::Multi(operations, _) => BatchResponse::Multi {
                        plans: operations
                            .into_iter()
                            .map(|operation| {
                                query_compiler::compile(&self.schema, operation, &self.connection)
                            })
                            .collect::<Result<_, _>>()
                            .map_err(|error| error.to_string())?,
                    },
                    BatchDocument::Compact(compacted) => {
                        let expect_non_empty = compacted.throw_on_empty();
                        BatchResponse::Compacted {
                            plan: query_compiler::compile(
                                &self.schema,
                                compacted.operation,
                                &self.connection,
                            )
                            .map_err(|error| error.to_string())?
                            .into(),
                            arguments: compacted.arguments,
                            nested_selection: compacted.nested_selection,
                            keys: compacted.keys,
                            expect_non_empty,
                        }
                    }
                },
            };
            serde_json::to_string(&response).map_err(|error| error.to_string())
        })
    }
}

#[derive(Serialize)]
#[serde(tag = "type", rename_all = "camelCase")]
enum BatchResponse {
    Multi {
        plans: Vec<Expression>,
    },
    #[serde(rename_all = "camelCase")]
    Compacted {
        plan: Box<Expression>,
        arguments: Vec<std::collections::HashMap<String, query_core::ArgumentValue>>,
        nested_selection: Vec<String>,
        keys: Vec<String>,
        expect_non_empty: bool,
    },
}

unsafe fn string(value: *const c_char) -> Result<&'static str, String> {
    if value.is_null() {
        return Err("Missing string argument".to_owned());
    }
    unsafe { CStr::from_ptr(value) }
        .to_str()
        .map_err(|error| error.to_string())
}

fn output(value: Result<String, String>, error: *mut *mut c_char) -> *mut c_char {
    match value {
        Ok(value) => CString::new(value).unwrap().into_raw(),
        Err(message) => {
            if !error.is_null() {
                unsafe { *error = CString::new(message).unwrap().into_raw() };
            }
            ptr::null_mut()
        }
    }
}

#[unsafe(no_mangle)]
pub unsafe extern "C" fn prisma_query_compiler_create(
    params: *const c_char,
    error: *mut *mut c_char,
) -> *mut Compiler {
    let result = unsafe { string(params) }
        .and_then(|params| serde_json::from_str(params).map_err(|error| error.to_string()))
        .and_then(Compiler::new);
    match result {
        Ok(compiler) => Box::into_raw(Box::new(compiler)),
        Err(message) => {
            output(Err(message), error);
            ptr::null_mut()
        }
    }
}

#[unsafe(no_mangle)]
pub unsafe extern "C" fn prisma_query_compiler_compile(
    compiler: *const Compiler,
    request: *const c_char,
    error: *mut *mut c_char,
) -> *mut c_char {
    output(
        if compiler.is_null() {
            Err("Invalid query compiler".to_owned())
        } else {
            unsafe { string(request) }.and_then(|request| unsafe { &*compiler }.compile(request))
        },
        error,
    )
}

#[unsafe(no_mangle)]
pub unsafe extern "C" fn prisma_query_compiler_compile_batch(
    compiler: *const Compiler,
    request: *const c_char,
    error: *mut *mut c_char,
) -> *mut c_char {
    output(
        if compiler.is_null() {
            Err("Invalid query compiler".to_owned())
        } else {
            unsafe { string(request) }
                .and_then(|request| unsafe { &*compiler }.compile_batch(request))
        },
        error,
    )
}

#[unsafe(no_mangle)]
pub unsafe extern "C" fn prisma_query_compiler_destroy(compiler: *mut Compiler) {
    if !compiler.is_null() {
        drop(unsafe { Box::from_raw(compiler) });
    }
}

#[unsafe(no_mangle)]
pub unsafe extern "C" fn prisma_query_compiler_free_string(value: *mut c_char) {
    if !value.is_null() {
        drop(unsafe { CString::from_raw(value) });
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn compiles_sqlite_query() {
        let compiler = Compiler::new(Params {
            datamodel: r#"
                datasource db {
                  provider = "sqlite"
                }
                model User {
                  id Int @id @default(autoincrement())
                  name String
                }
            "#
            .to_owned(),
            provider: "sqlite".to_owned(),
            connection_info: Connection {
                max_bind_values: Some(999),
                supports_relation_joins: false,
            },
        })
        .unwrap();
        let plan = compiler
            .compile(
                r#"{"modelName":"User","action":"findMany","query":{"arguments":{},"selection":{"$composites":true,"$scalars":true}}}"#,
            )
            .unwrap();
        assert!(plan.contains("SELECT"));
    }
}
