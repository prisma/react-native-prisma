import { NitroModules } from 'react-native-nitro-modules';
import type { PrismaQueryCompiler } from './PrismaQueryCompiler.nitro';

const native = NitroModules.createHybridObject<PrismaQueryCompiler>(
  'PrismaQueryCompiler'
);

export class NativeSQLiteDatabase {
  readonly #handle: number;

  constructor(name: string, directory?: string) {
    this.#handle = native.openDatabase(name, directory);
  }

  query(sql: string, args: unknown[] = []) {
    const _result = JSON.parse(
      native.queryDatabase(this.#handle, sql, JSON.stringify(args))
    ) as {
      columnNames: string[];
      rows: unknown[][];
      changes: number;
      lastInsertId: string;
    };
    _result.rows = _result.rows.map(_row =>
      _row.map((_value: any) =>
        _value?.$type === 'BigInt'
          ? BigInt(_value.value)
          : _value?.$type === 'Bytes'
            ? Uint8Array.from(atob(_value.value), _char => _char.charCodeAt(0))
            : _value
      )
    );
    return _result;
  }

  all<T>(sql: string, args: unknown[] = []): T[] {
    const _result = this.query(sql, args);
    return _result.rows.map(_row =>
      Object.fromEntries(
        _result.columnNames.map((_name, _index) => [_name, _row[_index]])
      )
    ) as T[];
  }

  exec(sql: string) {
    native.executeScript(this.#handle, sql);
  }

  close() {
    native.closeDatabase(this.#handle);
  }
}

export class NativeQueryCompiler {
  readonly #handle: number;

  constructor(params: unknown) {
    this.#handle = native.create(JSON.stringify(params));
  }

  compile(request: string) {
    return JSON.parse(native.compile(this.#handle, request));
  }

  compileBatch(request: string) {
    return JSON.parse(native.compileBatch(this.#handle, request));
  }

  free() {
    native.free(this.#handle);
  }
}
