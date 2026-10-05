import Foundation
import SQLite3

final class PrismaSQLiteDatabase {
  private var pointer: OpaquePointer?
  private let safeInteger: Int64 = 9_007_199_254_740_991
  private let transient = unsafeBitCast(-1, to: sqlite3_destructor_type.self)

  init(name: String, directory: String?) throws {
    guard !name.isEmpty, !name.contains("\0"), directory?.contains("\0") != true else {
      throw Self.error("Invalid SQLite database path")
    }
    let path: String
    if name == ":memory:" {
      path = name
    } else {
      let root: URL
      if let directory {
        if directory.hasPrefix("file:") {
          guard let url = URL(string: directory), url.isFileURL else {
            throw Self.error("Invalid SQLite directory")
          }
          root = url
        } else {
          root = URL(fileURLWithPath: directory, isDirectory: true)
        }
      } else {
        root = try FileManager.default.url(
          for: .libraryDirectory,
          in: .userDomainMask,
          appropriateFor: nil,
          create: true
        )
      }
      let url = root.appendingPathComponent(name)
      try FileManager.default.createDirectory(
        at: url.deletingLastPathComponent(),
        withIntermediateDirectories: true
      )
      path = url.path
    }
    let result = sqlite3_open_v2(
      path,
      &pointer,
      SQLITE_OPEN_READWRITE | SQLITE_OPEN_CREATE | SQLITE_OPEN_FULLMUTEX,
      nil
    )
    guard result == SQLITE_OK else {
      let error = databaseError()
      sqlite3_close_v2(pointer)
      pointer = nil
      throw error
    }
    sqlite3_extended_result_codes(pointer, 1)
    do {
      try check(sqlite3_busy_timeout(pointer, 5_000))
      try executeScript("PRAGMA foreign_keys = ON")
    } catch {
      sqlite3_close_v2(pointer)
      pointer = nil
      throw error
    }
  }

  deinit {
    if let pointer {
      sqlite3_close_v2(pointer)
    }
  }

  func close() throws {
    guard let pointer else {
      throw Self.error("SQLite database is closed")
    }
    try check(sqlite3_close_v2(pointer))
    self.pointer = nil
  }

  func executeScript(_ sql: String) throws {
    guard let pointer else {
      throw Self.error("SQLite database is closed")
    }
    guard !sql.contains("\0") else {
      throw Self.error("SQLite SQL cannot contain NUL")
    }
    try check(sqlite3_exec(pointer, sql, nil, nil, nil))
  }

  func query(_ sql: String, args: String) throws -> String {
    guard let pointer else {
      throw Self.error("SQLite database is closed")
    }
    guard !sql.contains("\0"), let data = args.data(using: .utf8),
      let values = try JSONSerialization.jsonObject(with: data) as? [Any]
    else {
      throw Self.error("Invalid SQLite query arguments")
    }
    return try sql.withCString { source in
      var statement: OpaquePointer?
      var tail: UnsafePointer<CChar>?
      try check(sqlite3_prepare_v2(pointer, source, -1, &statement, &tail))
      guard let statement else {
        throw Self.error("SQLite query requires one statement")
      }
      defer { sqlite3_finalize(statement) }
      while let remaining = tail, remaining.pointee != 0 {
        var extra: OpaquePointer?
        var next: UnsafePointer<CChar>?
        try check(sqlite3_prepare_v2(pointer, remaining, -1, &extra, &next))
        if let extra {
          sqlite3_finalize(extra)
          throw Self.error("SQLite query accepts only one statement")
        }
        guard next != remaining else { break }
        tail = next
      }
      guard values.count == Int(sqlite3_bind_parameter_count(statement)) else {
        throw Self.error("SQLite query argument count does not match")
      }
      for (index, value) in values.enumerated() {
        try bind(value, to: statement, at: Int32(index + 1))
      }
      let columnCount = sqlite3_column_count(statement)
      let columnNames = (0..<columnCount).map {
        String(cString: sqlite3_column_name(statement, $0))
      }
      var rows: [[Any]] = []
      while true {
        let result = sqlite3_step(statement)
        if result == SQLITE_DONE { break }
        guard result == SQLITE_ROW else { throw databaseError() }
        rows.append(try (0..<columnCount).map { try column(statement, at: $0) })
      }
      let result: [String: Any] = [
        "columnNames": columnNames,
        "rows": rows,
        "changes": Int(sqlite3_changes(pointer)),
        "lastInsertId": String(sqlite3_last_insert_rowid(pointer)),
      ]
      return String(
        decoding: try JSONSerialization.data(withJSONObject: result),
        as: UTF8.self
      )
    }
  }

  private func bind(_ value: Any, to statement: OpaquePointer, at index: Int32) throws {
    let result: Int32
    switch value {
    case is NSNull:
      result = sqlite3_bind_null(statement, index)
    case let value as String:
      result = try bindText(value, to: statement, at: index)
    case let value as NSNumber:
      if CFGetTypeID(value) == CFBooleanGetTypeID() {
        result = sqlite3_bind_int(statement, index, value.boolValue ? 1 : 0)
      } else {
        let number = value.doubleValue
        if number.rounded(.towardZero) == number && abs(number) <= Double(safeInteger) {
          result = sqlite3_bind_int64(statement, index, Int64(number))
        } else {
          result = sqlite3_bind_double(statement, index, number)
        }
      }
    case let value as [String: Any]:
      guard let type = value["$type"] as? String,
        let text = value["value"] as? String
      else {
        throw Self.error("Invalid SQLite typed argument")
      }
      switch type {
      case "BigInt":
        guard let integer = Int64(text) else {
          throw Self.error("SQLite BigInt is outside the signed Int64 range")
        }
        result = sqlite3_bind_int64(statement, index, integer)
      case "Bytes":
        guard let bytes = Data(base64Encoded: text), bytes.count <= Int(Int32.max) else {
          throw Self.error("Invalid SQLite Bytes argument")
        }
        if bytes.isEmpty {
          result = sqlite3_bind_zeroblob(statement, index, 0)
        } else {
          result = bytes.withUnsafeBytes {
            sqlite3_bind_blob(statement, index, $0.baseAddress, Int32(bytes.count), transient)
          }
        }
      default:
        throw Self.error("Unsupported SQLite typed argument: \(type)")
      }
    default:
      throw Self.error("Unsupported SQLite query argument")
    }
    try check(result)
  }

  private func bindText(
    _ value: String,
    to statement: OpaquePointer,
    at index: Int32
  ) throws -> Int32 {
    let bytes = value.utf8CString
    guard bytes.count - 1 <= Int(Int32.max) else {
      throw Self.error("SQLite text argument is too large")
    }
    return bytes.withUnsafeBufferPointer {
      sqlite3_bind_text(statement, index, $0.baseAddress, Int32(bytes.count - 1), transient)
    }
  }

  private func column(_ statement: OpaquePointer, at index: Int32) throws -> Any {
    switch sqlite3_column_type(statement, index) {
    case SQLITE_INTEGER:
      let value = sqlite3_column_int64(statement, index)
      return value > safeInteger || value < -safeInteger
        ? ["$type": "BigInt", "value": String(value)]
        : value
    case SQLITE_FLOAT:
      return sqlite3_column_double(statement, index)
    case SQLITE_TEXT:
      guard let bytes = sqlite3_column_text(statement, index) else {
        throw databaseError()
      }
      return String(
        decoding: UnsafeBufferPointer(
          start: bytes,
          count: Int(sqlite3_column_bytes(statement, index))
        ),
        as: UTF8.self
      )
    case SQLITE_BLOB:
      let count = Int(sqlite3_column_bytes(statement, index))
      let bytes: Data
      if count == 0 {
        bytes = Data()
      } else {
        guard let pointer = sqlite3_column_blob(statement, index) else {
          throw databaseError()
        }
        bytes = Data(bytes: pointer, count: count)
      }
      return ["$type": "Bytes", "value": bytes.base64EncodedString()]
    case SQLITE_NULL:
      return NSNull()
    default:
      throw Self.error("Unsupported SQLite column type")
    }
  }

  private func check(_ result: Int32) throws {
    guard result == SQLITE_OK else { throw databaseError() }
  }

  private func databaseError() -> NSError {
    Self.error(
      pointer.map { String(cString: sqlite3_errmsg($0)) } ?? "Could not open SQLite database",
      code: pointer.map { sqlite3_extended_errcode($0) } ?? SQLITE_CANTOPEN
    )
  }

  private static func error(_ message: String, code: Int32 = SQLITE_MISUSE) -> NSError {
    NSError(
      domain: "PrismaSQLiteError",
      code: Int(code),
      userInfo: [NSLocalizedDescriptionKey: message]
    )
  }
}
