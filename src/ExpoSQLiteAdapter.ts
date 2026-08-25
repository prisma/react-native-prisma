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
import {
  openDatabaseSync,
  type SQLiteBindValue,
  type SQLiteDatabase,
} from 'expo-sqlite';

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

const mapArg = (value: unknown, type: ArgType): SQLiteBindValue => {
  if (value == null) return null;
  if (typeof value === 'boolean') return value;
  if (value instanceof Uint8Array || value instanceof ArrayBuffer) return value;
  if (value instanceof Date) return value.toISOString().replace('Z', '+00:00');
  if (typeof value === 'bigint') {
    const number = Number(value);
    return Number.isSafeInteger(number) ? number : value.toString();
  }
  if (typeof value === 'string') {
    if (type.scalarType === 'int' || type.scalarType === 'float') {
      return Number(value);
    }
    if (type.scalarType === 'bigint') {
      const number = Number(value);
      return Number.isSafeInteger(number) ? number : value;
    }
    if (type.scalarType === 'datetime') {
      return new Date(value).toISOString().replace('Z', '+00:00');
    }
    if (type.scalarType === 'bytes') {
      return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
    }
    return value;
  }
  if (typeof value === 'number') return value;
  throw new TypeError(`Unsupported SQLite argument: ${typeof value}`);
};

const inferType = (rows: unknown[][], column: number) => {
  const value = rows.find((row) => row[column] != null)?.[column];
  if (value instanceof Uint8Array || value instanceof ArrayBuffer) {
    return ColumnTypeEnum.Bytes;
  }
  switch (typeof value) {
    case 'boolean':
      return ColumnTypeEnum.Boolean;
    case 'number':
    case 'bigint':
      return ColumnTypeEnum.UnknownNumber;
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
            .map((field) => field.split('.').at(-1)!) ?? [],
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
            .map((field) => field.split('.').at(-1)!) ?? [],
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

  constructor(protected readonly db: SQLiteDatabase) {}

  queryRawSync(query: SqlQuery): SqlResultSet {
    const statement = this.db.prepareSync(query.sql);
    try {
      const result = statement.executeForRawResultSync(
        query.args.map((arg, index) => mapArg(arg, query.argTypes[index]))
      );
      const rows = result.getAllSync() as unknown[][];
      const columnNames = statement.getColumnNamesSync();
      return {
        columnNames,
        columnTypes: columnNames.map((_, index) => inferType(rows, index)),
        rows,
        lastInsertId: String(result.lastInsertRowId),
      };
    } catch (error) {
      throw convertError(error);
    } finally {
      statement.finalizeSync();
    }
  }

  executeRawSync(query: SqlQuery): number {
    try {
      return this.db.runSync(
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

class ExpoSQLiteTransaction
  extends Queryable
  implements DriverTransaction
{
  readonly options = { usePhantomQuery: false };

  commitSync() {
    this.db.execSync('COMMIT');
  }

  commit() {
    this.commitSync();
    return Promise.resolve();
  }

  rollbackSync() {
    this.db.execSync('ROLLBACK');
  }

  rollback() {
    this.rollbackSync();
    return Promise.resolve();
  }
}

class ExpoSQLiteAdapter
  extends Queryable
  implements DriverAdapter
{
  constructor(db: SQLiteDatabase, private readonly onDispose: () => void) {
    super(db);
  }

  executeScript(script: string) {
    this.db.execSync(script);
    return Promise.resolve();
  }

  startTransactionSync(isolationLevel?: IsolationLevel) {
    if (isolationLevel && isolationLevel !== 'SERIALIZABLE') {
      throw new DriverAdapterError({
        kind: 'InvalidIsolationLevel',
        level: isolationLevel,
      });
    }
    this.db.execSync('BEGIN IMMEDIATE');
    return new ExpoSQLiteTransaction(this.db);
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
    this.db.execSync(`
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

    for (const migration of migrations) {
      const applied = this.db.getFirstSync<{ checksum: string }>(
        `SELECT "checksum" FROM "_prisma_migrations"
         WHERE "migration_name" = ?
           AND "finished_at" IS NOT NULL
           AND "rolled_back_at" IS NULL`,
        migration.name
      );
      if (applied) {
        if (applied.checksum !== migration.checksum) {
          throw new Error(`Migration ${migration.name} was modified after applying`);
        }
        continue;
      }

      this.db.execSync('BEGIN IMMEDIATE');
      try {
        this.db.execSync(migration.sql);
        this.db.runSync(
          `INSERT INTO "_prisma_migrations"
            ("id", "checksum", "finished_at", "migration_name", "applied_steps_count")
           VALUES (?, ?, CURRENT_TIMESTAMP, ?, 1)`,
          [migration.name, migration.checksum, migration.name]
        );
        this.db.execSync('COMMIT');
      } catch (error) {
        this.db.execSync('ROLLBACK');
        throw error;
      }
    }
  }

  dispose() {
    this.db.closeSync();
    this.onDispose();
    return Promise.resolve();
  }
}

export class PrismaExpoSQLite implements SqlDriverAdapterFactory {
  readonly provider = 'sqlite' as const;
  readonly adapterName = '@prisma/react-native';
  #adapter?: ExpoSQLiteAdapter;
  #migrations: readonly Migration[] = [];

  constructor(private readonly config: Config | string) {}

  private connectAdapter() {
    if (this.#adapter) return this.#adapter;
    const url = typeof this.config === 'string' ? this.config : this.config.url;
    const directory =
      typeof this.config === 'string' ? undefined : this.config.directory;
    const path = url.replace(/^file:/, '');
    const slash = path.lastIndexOf('/');
    const databaseName = slash < 0 ? path : path.slice(slash + 1);
    this.#adapter = new ExpoSQLiteAdapter(
      openDatabaseSync(
        databaseName || 'app.db',
        {},
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

  connect() {
    return Promise.resolve(this.connectAdapter());
  }
}
