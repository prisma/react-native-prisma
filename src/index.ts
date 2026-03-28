import 'react-native-url-polyfill/auto';
import { NativeModules } from 'react-native';
import { atob, btoa } from 'react-native-quick-base64';

global.atob = atob;
global.btoa = btoa;

export { reactiveHooksExtension } from './ReactiveHooksExtension';
export { reactiveQueriesExtension } from './ReactiveQueriesExtension';

declare global {
  // eslint-disable-next-line no-var
  var __PrismaProxy: PrismaProxy | undefined;
}

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const PrismaModule = isTurboModuleEnabled
  ? require('./NativePrisma').default
  : NativeModules.Prisma;

if (!PrismaModule) {
  throw new Error('🟥 @prisma/react-native failed to initialize');
}

PrismaModule.install();

if (!global.__PrismaProxy) {
  throw new Error('🟥 prisma/react-native C++ bindings failed to initialize');
}

// Wrap the create function to stringify the env variables if necessary
const ogCreate = __PrismaProxy!.create;
global.__PrismaProxy = {
  ...global.__PrismaProxy,
  create: (options: PrismaCreateOptions): QueryEngineObject => {
    if (typeof options.env !== 'string') {
      options.env = JSON.stringify(options.env);
    }
    if (typeof options.datasourceOverrides !== 'string') {
      options.datasourceOverrides = JSON.stringify(options.datasourceOverrides);
    }
    return ogCreate(options);
  },
};

type PrismaCreateOptions = {
  datamodel: string;
  logLevel: string;
  logQueries: boolean;
  logCallback: (msg: string) => void;
  ignoreEnvVarErrors: boolean;
  datasourceOverrides: object | string;
  env: object | string;
  enableTracing: boolean;
};

type QueryEngineObject = object;

type PrismaProxy = {
  create: (options: PrismaCreateOptions) => QueryEngineObject;
  connect: (
    engine: QueryEngineObject,
    trace: string,
    requestId: string
  ) => void;
  execute: (
    engine: QueryEngineObject,
    body: string,
    headers: string,
    txId: string,
    requestId: string
  ) => Promise<string>;
  startTransaction: (
    engine: QueryEngineObject,
    body: string,
    hdears: string,
    requestId: string
  ) => string;
  commitTransaction: (
    engine: QueryEngineObject,
    txId: string,
    headers: string,
    requestId: string
  ) => string;
  rollbackTransaction: (
    engine: QueryEngineObject,
    txId: string,
    headers: string,
    requestId: string
  ) => string;
  disconnect: (
    engine: QueryEngineObject,
    headers: string,
    requestId: string
  ) => void;
  pushSchema: (engine: QueryEngineObject, schema: string) => void;
  applyPendingMigrations: (engine: QueryEngineObject) => void;
  trace: (requestId: string) => string | null;
};
