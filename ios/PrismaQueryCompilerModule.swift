import ExpoModulesCore

public final class PrismaQueryCompilerModule: Module {
  private var compilers: [Int: OpaquePointer] = [:]
  private var nextHandle = 1

  public func definition() -> ModuleDefinition {
    Name("PrismaQueryCompiler")

    Function("create") { (params: String) throws -> Int in
      var error: UnsafeMutablePointer<CChar>?
      guard let compiler = prisma_query_compiler_create(params, &error) else {
        throw nativeError(error)
      }
      let handle = nextHandle
      nextHandle += 1
      compilers[handle] = compiler
      return handle
    }

    Function("compile") { (handle: Int, request: String) throws -> String in
      try call(handle, request, prisma_query_compiler_compile)
    }

    Function("compileBatch") { (handle: Int, request: String) throws -> String in
      try call(handle, request, prisma_query_compiler_compile_batch)
    }

    Function("free") { (handle: Int) in
      if let compiler = compilers.removeValue(forKey: handle) {
        prisma_query_compiler_destroy(compiler)
      }
    }

    OnDestroy {
      compilers.values.forEach(prisma_query_compiler_destroy)
      compilers.removeAll()
    }
  }

  private func call(
    _ handle: Int,
    _ request: String,
    _ function: (OpaquePointer?, UnsafePointer<CChar>?, UnsafeMutablePointer<UnsafeMutablePointer<CChar>?>?) -> UnsafeMutablePointer<CChar>?
  ) throws -> String {
    guard let compiler = compilers[handle] else {
      throw Exception(name: "PrismaQueryCompilerError", description: "Invalid query compiler")
    }
    var error: UnsafeMutablePointer<CChar>?
    guard let result = function(compiler, request, &error) else {
      throw nativeError(error)
    }
    defer { prisma_query_compiler_free_string(result) }
    return String(cString: result)
  }

  private func nativeError(_ value: UnsafeMutablePointer<CChar>?) -> Exception {
    defer { prisma_query_compiler_free_string(value) }
    return Exception(
      name: "PrismaQueryCompilerError",
      description: value.map { String(cString: $0) } ?? "Unknown query compiler error"
    )
  }
}
