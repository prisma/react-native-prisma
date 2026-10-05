#pragma once

#ifdef __cplusplus
extern "C" {
#endif

typedef struct Compiler PrismaQueryCompiler;

PrismaQueryCompiler *prisma_query_compiler_create(const char *params, char **error);
char *prisma_query_compiler_compile(const PrismaQueryCompiler *compiler, const char *request, char **error);
char *prisma_query_compiler_compile_batch(const PrismaQueryCompiler *compiler, const char *request, char **error);
void prisma_query_compiler_destroy(PrismaQueryCompiler *compiler);
void prisma_query_compiler_free_string(char *value);

#ifdef __cplusplus
}
#endif
