import Foundation
import NitroModules

public final class HybridPrismaQueryCompiler: HybridPrismaQueryCompilerSpec {
  private var compilers: [Double: OpaquePointer] = [:]
  private var databases: [Double: PrismaSQLiteDatabase] = [:]
  private var nextHandle = 1.0

  public func create(params: String) throws -> Double {
    var error: UnsafeMutablePointer<CChar>?
    guard let compiler = prisma_query_compiler_create(params, &error) else {
      throw nativeError(error)
    }
    let handle = nextHandle
    nextHandle += 1
    compilers[handle] = compiler
    return handle
  }

  public func compile(handle: Double, request: String) throws -> String {
    try call(handle, request, prisma_query_compiler_compile)
  }

  public func compileBatch(handle: Double, request: String) throws -> String {
    try call(handle, request, prisma_query_compiler_compile_batch)
  }

  public func free(handle: Double) {
    if let compiler = compilers.removeValue(forKey: handle) {
      prisma_query_compiler_destroy(compiler)
    }
  }

  public func openDatabase(name: String, directory: String?) throws -> Double {
    let database = try PrismaSQLiteDatabase(name: name, directory: directory)
    let handle = nextHandle
    nextHandle += 1
    databases[handle] = database
    return handle
  }

  public func closeDatabase(handle: Double) throws {
    try database(handle).close()
    databases.removeValue(forKey: handle)
  }

  public func queryDatabase(handle: Double, sql: String, args: String) throws -> String {
    try database(handle).query(sql, args: args)
  }

  public func executeScript(handle: Double, sql: String) throws {
    try database(handle).executeScript(sql)
  }

  public func dispose() {
    compilers.values.forEach(prisma_query_compiler_destroy)
    compilers.removeAll()
    databases.values.forEach { try? $0.close() }
    databases.removeAll()
  }

  deinit {
    dispose()
  }

  private func database(_ handle: Double) throws -> PrismaSQLiteDatabase {
    guard let database = databases[handle] else {
      throw NSError(
        domain: "PrismaSQLiteError",
        code: 1,
        userInfo: [NSLocalizedDescriptionKey: "Invalid SQLite database handle"]
      )
    }
    return database
  }

  private func call(
    _ handle: Double,
    _ request: String,
    _ function: (OpaquePointer?, UnsafePointer<CChar>?, UnsafeMutablePointer<UnsafeMutablePointer<CChar>?>?) -> UnsafeMutablePointer<CChar>?
  ) throws -> String {
    guard let compiler = compilers[handle] else {
      throw NSError(
        domain: "PrismaQueryCompilerError",
        code: 1,
        userInfo: [NSLocalizedDescriptionKey: "Invalid query compiler"]
      )
    }
    var error: UnsafeMutablePointer<CChar>?
    guard let result = function(compiler, request, &error) else {
      throw nativeError(error)
    }
    defer { prisma_query_compiler_free_string(result) }
    return String(cString: result)
  }

  private func nativeError(_ value: UnsafeMutablePointer<CChar>?) -> NSError {
    defer { prisma_query_compiler_free_string(value) }
    return NSError(
      domain: "PrismaQueryCompilerError",
      code: 1,
      userInfo: [
        NSLocalizedDescriptionKey: value.map { String(cString: $0) } ?? "Unknown query compiler error"
      ]
    )
  }
}
