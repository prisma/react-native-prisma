#!/usr/bin/env node

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

require('./patch-prisma-runtime.cjs');

const directory = path.resolve(process.argv[2] ?? 'generated/prisma');
const migrationsDirectory = path.resolve(
  process.argv[3] ?? 'prisma/migrations'
);
const clientPath = path.join(directory, 'client.ts');
const classPath = path.join(directory, 'internal/class.ts');
const migrations = fs.existsSync(migrationsDirectory)
  ? fs
      .readdirSync(migrationsDirectory, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => {
        const source = fs.readFileSync(
          path.join(migrationsDirectory, entry.name, 'migration.sql')
        );
        return {
          name: entry.name,
          checksum: crypto.createHash('sha256').update(source).digest('hex'),
          sql: source.toString(),
        };
      })
  : [];

let client = fs.readFileSync(clientPath, 'utf8');
client = client.replace(
  /import \* as process from 'node:process'\nimport \* as path from 'node:path'\nimport \{ fileURLToPath \} from 'node:url'\nglobalThis\['__dirname'\] = path\.dirname\(fileURLToPath\(import\.meta\.url\)\)/,
  "globalThis['__dirname'] = '/'"
);
if (/from 'node:/.test(client)) {
  throw new Error(`Unsupported Node import in Prisma client: ${clientPath}`);
}
fs.writeFileSync(clientPath, client);

let runtime = fs
  .readFileSync(classPath, 'utf8')
  .replace('import { Buffer } from "buffer"\n', '');
if (!runtime.includes('import { NativeQueryCompiler }')) {
  runtime = runtime.replace(
    'import * as runtime from "@prisma/client/runtime/client"',
    'import * as runtime from "@prisma/client/runtime/client"\nimport { NativeQueryCompiler } from "@prisma/react-native"'
  );
}
if (!runtime.includes('getNativeQueryCompiler')) {
  const functionStart = runtime.indexOf('function decodeBase64AsWasm');
  const start = runtime.lastIndexOf('\n', functionStart) + 1;
  const end = runtime.indexOf('\n\n\nexport type ', start);
  if (functionStart < 0 || end < 0) {
    throw new Error(`Unsupported Prisma client: ${classPath}`);
  }
  runtime =
    runtime.slice(0, start) +
    `config.compilerWasm = {
  getNativeQueryCompiler: async () => NativeQueryCompiler
} as any` +
    runtime.slice(end);
}
const migrationBlock = `// @prisma/react-native migrations:start
const migrations = ${JSON.stringify(migrations)}
// @prisma/react-native migrations:end`;
runtime = runtime.replace(
  /\/\/ @prisma\/react-native migrations:start[\s\S]*?\/\/ @prisma\/react-native migrations:end\n*/,
  ''
);
runtime = runtime.replace(
  'config.compilerWasm = {',
  `${migrationBlock}\n\nconfig.compilerWasm = {`
);

if (!runtime.includes('$applyPendingMigrations():')) {
  runtime = runtime.replace(
    '  $connect(): runtime.Types.Utils.JsPromise<void>;',
    `  $connect(): runtime.Types.Utils.JsPromise<void>;

  $applyPendingMigrations(): runtime.Types.Utils.JsPromise<void>;`
  );
}
if (!runtime.includes('adapter?.setMigrations?.(migrations)')) {
  runtime = runtime.replace(
    `export function getPrismaClientClass(): PrismaClientConstructor {
  return runtime.getPrismaClient(config) as unknown as PrismaClientConstructor
}`,
    `export function getPrismaClientClass(): PrismaClientConstructor {
  const PrismaClient = runtime.getPrismaClient(config)
  return class extends PrismaClient {
    constructor(options: any) {
      options?.adapter?.setMigrations?.(migrations)
      super(options)
    }

    async $applyPendingMigrations() {
      await this.$connect()
      const adapter = this._engineConfig.adapter
      if (typeof adapter?.applyPendingMigrations !== 'function') {
        throw new Error('The Prisma adapter does not support migrations')
      }
      adapter.applyPendingMigrations()
    }
  } as unknown as PrismaClientConstructor
}`
  );
}
if (
  !runtime.includes('getNativeQueryCompiler') ||
  !runtime.includes('adapter?.setMigrations?.(migrations)')
) {
  throw new Error(`Unsupported Prisma client: ${classPath}`);
}
fs.writeFileSync(classPath, runtime);

console.log(
  `Prepared generated Prisma 7 client with ${migrations.length} migration(s): ${directory}`
);
