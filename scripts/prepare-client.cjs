#!/usr/bin/env node

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const _realPath = _value =>
  fs.existsSync(_value)
    ? fs.realpathSync(_value)
    : path.join(_realPath(path.dirname(_value)), path.basename(_value));
const _contains = (_parent, _child) => {
  const _relative = path.relative(_parent, _child);
  return (
    !_relative ||
    (_relative !== '..' &&
      !_relative.startsWith(`..${path.sep}`) &&
      !path.isAbsolute(_relative))
  );
};

const validateOutput = (_output, _schemaPath) => {
  const _schema = _realPath(path.resolve(_schemaPath));
  const _paths = { paths: [path.dirname(_schema)] };
  const _client = require.resolve('@prisma/client/package.json', _paths);
  const _library = require.resolve('@prisma/react-native', _paths);
  const _packages = [
    path.dirname(_client),
    path.resolve(path.dirname(_library), '../..'),
  ].map(_realPath);
  const _directory = _realPath(path.resolve(_output));
  if (
    _packages.some(
      _package =>
        _contains(_directory, _package) ||
        (_package === _packages[0] && _contains(_package, _directory))
    )
  ) {
    throw new Error('output 必须是独立生成目录，不能覆盖已安装的 Prisma 包');
  }
  try {
    if (
      _realPath(
        require.resolve('@prisma/client/package.json', {
          paths: [_directory],
        })
      ) !== _realPath(_client) ||
      _realPath(
        require.resolve('@prisma/react-native', {
          paths: [_directory],
        })
      ) !== _realPath(_library)
    ) {
      throw new Error('依赖不一致');
    }
  } catch (_error) {
    throw new Error('output 必须能解析当前工程的 Prisma 依赖', {
      cause: _error,
    });
  }
  const _modules = path.resolve(_packages[0], '../..');
  const _project = path.dirname(_modules);
  if (
    path.basename(_modules) !== 'node_modules' ||
    !_contains(_project, _schema)
  ) {
    throw new Error(
      '自动入口需要工程内安装的 @prisma/client，不能写入依赖缓存'
    );
  }
  const _entry = path.join(_modules, '.prisma/client');
  const _owner = path.relative(_project, _schema).split(path.sep).join('/');
  const _default = path.join(_entry, 'default.js');
  const _existing = fs.existsSync(_default)
    ? fs
        .readFileSync(_default, 'utf8')
        .match(/^\/\/ (?:expo-prisma|react-native-prisma) schema: (.+)$/m)
    : undefined;
  if (_existing && JSON.parse(_existing[1]) !== _owner) {
    throw new Error(
      '@prisma/client 已绑定其他 schema；多个 Client 请使用独立的依赖安装'
    );
  }
  return { entry: _entry, owner: _owner };
};

module.exports = { validateOutput };

if (require.main === module) {
  require('./patch-prisma-runtime.cjs');

  const directory = path.resolve(process.argv[2] ?? 'generated/prisma');
  const migrationsDirectory = path.resolve(
    process.argv[3] ?? 'prisma/migrations'
  );
  const _schemaPath =
    process.argv[4] ??
    path.join(path.dirname(migrationsDirectory), 'schema.prisma');
  const _binding = validateOutput(directory, _schemaPath);
  const clientPath = path.join(directory, 'client.ts');
  const classPath = path.join(directory, 'internal/class.ts');
  const namespacePath = path.join(directory, 'internal/prismaNamespace.ts');
  const migrations = fs.existsSync(migrationsDirectory)
    ? fs
        .readdirSync(migrationsDirectory, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(entry => {
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
  client += `\nexport { PrismaSQLite } from '@prisma/react-native/adapter';\nexport { queriesExtension } from '@prisma/react-native/queries';\n`;
  fs.writeFileSync(clientPath, client);

  let runtime = fs
    .readFileSync(classPath, 'utf8')
    .replace('import { Buffer } from "buffer"\n', '')
    .replace(
      /import \{ NativeQueryCompiler \} from ["']@prisma\/react-native["']/g,
      'import { NativeQueryCompiler } from "@prisma/react-native/native"'
    );
  if (!runtime.includes('import { NativeQueryCompiler }')) {
    runtime = runtime.replace(
      'import * as runtime from "@prisma/client/runtime/client"',
      'import * as runtime from "@prisma/client/runtime/client"\nimport { NativeQueryCompiler } from "@prisma/react-native/native"'
    );
  }
  if (!runtime.includes('import { PrismaSQLite }')) {
    runtime = runtime.replace(
      'import * as runtime from "@prisma/client/runtime/client"',
      'import * as runtime from "@prisma/client/runtime/client"\nimport { PrismaSQLite } from "@prisma/react-native/adapter"'
    );
  }
  runtime = runtime.replace(
    '>(options: Prisma.PrismaClientConstructorArgs<Options>)',
    '>(options?: Prisma.PrismaClientConstructorArgs<Options>)'
  );
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
  if (!runtime.includes('adapter: options.adapter ?? new PrismaSQLite()')) {
    runtime = runtime.replace(
      `export function getPrismaClientClass(): PrismaClientConstructor {
  return runtime.getPrismaClient(config) as unknown as PrismaClientConstructor
}`,
      `export function getPrismaClientClass(): PrismaClientConstructor {
  const PrismaClient = runtime.getPrismaClient(config)
  return class extends PrismaClient {
    constructor(options: any = {}) {
      const _options = { ...options, adapter: options.adapter ?? new PrismaSQLite() }
      _options.adapter.setMigrations?.(migrations)
      super(_options)
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
    !runtime.includes('adapter: options.adapter ?? new PrismaSQLite()') ||
    !runtime.includes(
      '>(options?: Prisma.PrismaClientConstructorArgs<Options>)'
    )
  ) {
    throw new Error(`Unsupported Prisma client: ${classPath}`);
  }
  fs.writeFileSync(classPath, runtime);

  const _namespace = fs
    .readFileSync(namespacePath, 'utf8')
    .replace(
      'adapter: runtime.SqlDriverAdapterFactory',
      'adapter?: runtime.SqlDriverAdapterFactory'
    )
    .replace(
      'A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).',
      'Defaults to the native SQLite adapter using app.db.'
    )
    .replace(
      'A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**.',
      'The native SQLite adapter using app.db is provided by default.'
    );
  if (!_namespace.includes('adapter?: runtime.SqlDriverAdapterFactory')) {
    throw new Error(`Unsupported Prisma client: ${namespacePath}`);
  }
  fs.writeFileSync(namespacePath, _namespace);

  fs.mkdirSync(_binding.entry, { recursive: true });
  if (_realPath(directory) !== _realPath(_binding.entry)) {
    const _target = `./${path
      .relative(_binding.entry, path.join(directory, 'client'))
      .split(path.sep)
      .join('/')}`;
    fs.writeFileSync(
      path.join(_binding.entry, 'client.ts'),
      `export * from ${JSON.stringify(_target)};\n`
    );
  }
  for (const _directory of new Set([directory, _binding.entry])) {
    for (const _name of ['default', 'index', 'index-browser']) {
      fs.writeFileSync(
        path.join(_directory, `${_name}.js`),
        `// react-native-prisma schema: ${JSON.stringify(_binding.owner)}\nmodule.exports = require('./client');\n`
      );
      fs.writeFileSync(
        path.join(_directory, `${_name}.d.ts`),
        `export * from './client';\n`
      );
    }
    fs.writeFileSync(
      path.join(_directory, 'package.json'),
      `${JSON.stringify({ type: 'commonjs', main: 'index.js', types: 'index.d.ts' }, null, 2)}\n`
    );
  }

  console.log(
    `Prepared generated Prisma 7 client with ${migrations.length} migration(s): ${directory}`
  );

  const _packageRoot = path.resolve(__dirname, '..');
  for (const _file of [
    'lib/module/index.js',
    'lib/commonjs/index.js',
    'lib/typescript/module/index.d.ts',
    'lib/typescript/commonjs/index.d.ts',
  ]) {
    const _index = path.join(_packageRoot, _file);
    const _content = fs.readFileSync(_index, 'utf8');
    const _clean = _content.replace(
      /\n\/\/ generated-(?:models|client):start[\s\S]*?\/\/ generated-(?:models|client):end\n?/g,
      ''
    );
    if (_clean !== _content) fs.writeFileSync(_index, _clean);
  }
}
