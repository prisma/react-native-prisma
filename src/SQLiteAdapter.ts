import {
  ColumnTypeEnum,
  DriverAdapterError,
  type ArgType,
  type IsolationLevel,
  type SqlDriverAdapter,
  type SqlDriverAdapterFactory,
  type SqlQuery,
  type SqlResultSet,
  type Transaction,
} from '@prisma/driver-adapter-utils';
import { Buffer } from 'buffer';
import { NativeSQLiteDatabase } from './native';

type Config = { url: string; directory?: string };
type Migration = { name: string; checksum: string; sql: string };

interface QueryableDriver {
  queryRawSync(query: SqlQuery): SqlResultSet;
  executeRawSync(query: SqlQuery): number;
}

interface DriverTransaction extends Transaction, QueryableDriver {
  commitSync(): void;
  rollbackSync(): void;
}

interface DriverAdapter extends SqlDriverAdapter, QueryableDriver {
  startTransactionSync(isolationLevel?: IsolationLevel): DriverTransaction;
}

const mapArg = (value: unknown, type: ArgType): unknown => {
  if (value == null) return null;
  if (typeof value === 'boolean') return value;
  if (value instanceof Uint8Array || value instanceof ArrayBuffer)
    return {
      $type: 'Bytes',
      value: Buffer.from(
        value instanceof Uint8Array ? value : new Uint8Array(value)
      ).toString('base64'),
    };
  if (value instanceof Date) return value.toISOString().replace('Z', '+00:00');
  if (typeof value === 'bigint') {
    return { $type: 'BigInt', value: value.toString() };
  }
  if (typeof value === 'string') {
    if (type.scalarType === 'int' || type.scalarType === 'float') {
      return Number(value);
    }
    if (type.scalarType === 'bigint') {
      return { $type: 'BigInt', value };
    }
    if (type.scalarType === 'datetime') {
      return new Date(value).toISOString().replace('Z', '+00:00');
    }
    if (type.scalarType === 'bytes') {
      return { $type: 'Bytes', value };
    }
    return value;
  }
  if (typeof value === 'number') return value;
  throw new TypeError(`Unsupported SQLite argument: ${typeof value}`);
};

const inferType = (rows: unknown[][], column: number) => {
  const value = rows.find(row => row[column] != null)?.[column];
  if (value instanceof Uint8Array || value instanceof ArrayBuffer) {
    return ColumnTypeEnum.Bytes;
  }
  switch (typeof value) {
    case 'boolean':
      return ColumnTypeEnum.Boolean;
    case 'number':
      return ColumnTypeEnum.UnknownNumber;
    case 'bigint':
      return ColumnTypeEnum.Int64;
    default:
      return ColumnTypeEnum.Text;
  }
};

const convertError = (error: any) => {
  const message = String(error?.message ?? error);
  if (message.includes('UNIQUE constraint failed')) {
    return new DriverAdapterError({
      kind: 'UniqueConstraintViolation',
      constraint: {
        fields:
          message
            .split(': ')
            .at(1)
            ?.split(', ')
            .map(field => field.split('.').at(-1)!) ?? [],
      },
    });
  }
  if (message.includes('NOT NULL constraint failed')) {
    return new DriverAdapterError({
      kind: 'NullConstraintViolation',
      constraint: {
        fields:
          message
            .split(': ')
            .at(1)
            ?.split(', ')
            .map(field => field.split('.').at(-1)!) ?? [],
      },
    });
  }
  if (message.includes('FOREIGN KEY constraint failed')) {
    return new DriverAdapterError({
      kind: 'ForeignKeyConstraintViolation',
      constraint: { foreignKey: {} },
    });
  }
  if (message.includes('no such table:')) {
    return new DriverAdapterError({
      kind: 'TableDoesNotExist',
      table: message.split('no such table:').at(1)!.trim(),
    });
  }
  return error;
};

class Queryable {
  readonly provider = 'sqlite' as const;
  readonly adapterName = '@prisma/react-native';

  constructor(protected readonly db: NativeSQLiteDatabase) {}

  queryRawSync(query: SqlQuery): SqlResultSet {
    try {
      const result = this.db.query(
        query.sql,
        query.args.map((arg, index) => mapArg(arg, query.argTypes[index]))
      );
      return {
        columnNames: result.columnNames,
        columnTypes: result.columnNames.map((_, index) =>
          inferType(result.rows, index)
        ),
        rows: result.rows.map(_row =>
          _row.map(_value =>
            typeof _value === 'bigint' ? _value.toString() : _value
          )
        ),
        lastInsertId: result.lastInsertId,
      };
    } catch (error) {
      throw convertError(error);
    }
  }

  executeRawSync(query: SqlQuery): number {
    try {
      return this.db.query(
        query.sql,
        query.args.map((arg, index) => mapArg(arg, query.argTypes[index]))
      ).changes;
    } catch (error) {
      throw convertError(error);
    }
  }

  queryRaw(query: SqlQuery) {
    return Promise.resolve(this.queryRawSync(query));
  }

  executeRaw(query: SqlQuery) {
    return Promise.resolve(this.executeRawSync(query));
  }
}

class SQLiteTransaction extends Queryable implements DriverTransaction {
  readonly options = { usePhantomQuery: true };

  constructor(
    db: NativeSQLiteDatabase,
    private readonly savepoint: string
  ) {
    super(db);
  }

  commitSync() {
    this.db.exec(`RELEASE SAVEPOINT "${this.savepoint}"`);
  }

  commit() {
    this.commitSync();
    return Promise.resolve();
  }

  rollbackSync() {
    this.db.exec(`ROLLBACK TO SAVEPOINT "${this.savepoint}"`);
    this.db.exec(`RELEASE SAVEPOINT "${this.savepoint}"`);
  }

  rollback() {
    this.rollbackSync();
    return Promise.resolve();
  }
}

const _upgradeLegacyMigrations = (
  _db: NativeSQLiteDatabase,
  _migrations: readonly Migration[]
) => {
  const _columns = _db.all<{ name: string }>(
    'PRAGMA table_info("_prisma_migrations")'
  );
  if (_columns.some(_column => _column.name === 'checksum')) return;
  if (!_columns.some(_column => _column.name === 'failed_at')) return;
  const _rows = _db.all<{
    id: string;
    migration_name: string;
    finished_at: string | null;
    failed_at: string | null;
  }>('SELECT * FROM "_prisma_migrations"');
  _db.exec('BEGIN IMMEDIATE');
  try {
    _db.exec(`
      ALTER TABLE "_prisma_migrations" ADD COLUMN "checksum" TEXT NOT NULL DEFAULT '';
      ALTER TABLE "_prisma_migrations" ADD COLUMN "rolled_back_at" DATETIME;
      ALTER TABLE "_prisma_migrations" ADD COLUMN "logs" TEXT;
      ALTER TABLE "_prisma_migrations" ADD COLUMN "applied_steps_count" INTEGER NOT NULL DEFAULT 0;
    `);
    for (const _row of _rows) {
      const _migration = _migrations.find(
        _item => _item.name === _row.migration_name
      );
      if (!_migration)
        throw new Error(
          `Missing SQL for legacy migration ${_row.migration_name}`
        );
      _db.query(
        'UPDATE "_prisma_migrations" SET "checksum" = ?, "rolled_back_at" = ?, "applied_steps_count" = ? WHERE "id" = ?',
        [
          _migration.checksum,
          _row.failed_at,
          _row.finished_at && !_row.failed_at ? 1 : 0,
          _row.id,
        ]
      );
    }
    _db.exec('COMMIT');
  } catch (_error) {
    _db.exec('ROLLBACK');
    throw _error;
  }
};

class SQLiteAdapter extends Queryable implements DriverAdapter {
  private transactionId = 0;

  constructor(
    db: NativeSQLiteDatabase,
    private readonly onDispose: () => void
  ) {
    super(db);
  }

  executeScript(script: string) {
    this.db.exec(script);
    return Promise.resolve();
  }

  startTransactionSync(isolationLevel?: IsolationLevel) {
    if (isolationLevel && isolationLevel !== 'SERIALIZABLE') {
      throw new DriverAdapterError({
        kind: 'InvalidIsolationLevel',
        level: isolationLevel,
      });
    }
    const _savepoint = `prisma_${++this.transactionId}`;
    this.db.exec(`SAVEPOINT "${_savepoint}"`);
    return new SQLiteTransaction(this.db, _savepoint);
  }

  startTransaction(isolationLevel?: IsolationLevel) {
    try {
      return Promise.resolve(this.startTransactionSync(isolationLevel));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getConnectionInfo() {
    return { maxBindValues: 999, supportsRelationJoins: false };
  }

  applyPendingMigrations(migrations: readonly Migration[]) {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "checksum" TEXT NOT NULL,
        "finished_at" DATETIME,
        "migration_name" TEXT NOT NULL,
        "logs" TEXT,
        "rolled_back_at" DATETIME,
        "started_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "applied_steps_count" INTEGER UNSIGNED NOT NULL DEFAULT 0
      )
    `);
    _upgradeLegacyMigrations(this.db, migrations);

    for (const migration of migrations) {
      const applied = this.db.all<{ checksum: string }>(
        `SELECT "checksum" FROM "_prisma_migrations"
         WHERE "migration_name" = ?
           AND "finished_at" IS NOT NULL
           AND "rolled_back_at" IS NULL`,
        [migration.name]
      )[0];
      if (applied) {
        if (applied.checksum !== migration.checksum) {
          throw new Error(
            `Migration ${migration.name} was modified after applying`
          );
        }
        continue;
      }

      this.db.exec('BEGIN IMMEDIATE');
      try {
        this.db.exec(migration.sql);
        this.db.query(
          `INSERT INTO "_prisma_migrations"
            ("id", "checksum", "finished_at", "migration_name", "applied_steps_count")
           VALUES (?, ?, CURRENT_TIMESTAMP, ?, 1)`,
          [migration.name, migration.checksum, migration.name]
        );
        this.db.exec('COMMIT');
      } catch (error) {
        this.db.exec('ROLLBACK');
        throw error;
      }
    }
  }

  dispose() {
    this.db.close();
    this.onDispose();
    return Promise.resolve();
  }
}

export class PrismaSQLite implements SqlDriverAdapterFactory {
  readonly provider = 'sqlite' as const;
  readonly adapterName = '@prisma/react-native';
  #adapter?: SQLiteAdapter;
  #migrations: readonly Migration[] = [];

  constructor(private readonly config: Config | string = 'app.db') {}

  private connectAdapter() {
    if (this.#adapter) return this.#adapter;
    const url = typeof this.config === 'string' ? this.config : this.config.url;
    const directory =
      typeof this.config === 'string' ? undefined : this.config.directory;
    const path = url.replace(/^file:/, '');
    const slash = path.lastIndexOf('/');
    const databaseName = slash < 0 ? path : path.slice(slash + 1);
    this.#adapter = new SQLiteAdapter(
      new NativeSQLiteDatabase(
        databaseName || 'app.db',
        directory ?? (slash < 0 ? undefined : path.slice(0, slash))
      ),
      () => {
        this.#adapter = undefined;
      }
    );
    return this.#adapter;
  }

  setMigrations(migrations: readonly Migration[]) {
    this.#migrations = migrations;
  }

  applyPendingMigrations() {
    this.connectAdapter().applyPendingMigrations(this.#migrations);
  }

  transactionSync<R>(_callback: () => R): R {
    const _transaction = this.connectAdapter().startTransactionSync();
    try {
      const _result = _callback();
      if (
        _result != null &&
        (typeof _result === 'object' || typeof _result === 'function') &&
        'then' in _result &&
        typeof _result.then === 'function'
      ) {
        throw new Error(
          'Synchronous transaction callbacks cannot return a Promise or use await'
        );
      }
      _transaction.commitSync();
      return _result;
    } catch (_error) {
      try {
        _transaction.rollbackSync();
      } catch {}
      throw _error;
    }
  }

  connect() {
    return Promise.resolve(this.connectAdapter());
  }
}
