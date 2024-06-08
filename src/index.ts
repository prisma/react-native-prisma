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

const errorResolutions = [
  `1. Ensure @prisma/react-native is added to the plugins section in app.json`,

  `2. Ensure at least one migration exists:

    $ prisma migrate dev`,

  `3. Try removing the node_modules/ folder and running the prebuild command:

    $ rm -rf node_modules/
    $ npx expo prebuild --clean
`,
  `4. If in a monorepo, ensure the application's package.json also has the required Prisma dependencies:

    $ npm i @prisma/client@latest @prisma/react-native@latest react-native-quick-base64
    $ yarn add @prisma/client@latest @prisma/react-native@latest react-native-quick-base64
`,
];

const makeErrorMessage = (message: string) => {
  return [message, errorResolutions.join('\n\n')].join('\n\n');
};

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const PrismaModule = isTurboModuleEnabled
  ? require('./NativePrisma').default
  : NativeModules.Prisma;

if (!PrismaModule) {
  throw new Error(
    makeErrorMessage('🟥 @prisma/react-native failed to initialize')
  );
}

try {
  PrismaModule.install();
} catch {
  throw new Error(
    makeErrorMessage(`🟥 @prisma/react-native failed to install`)
  );
}

if (!global.__PrismaProxy) {
  throw new Error(
    makeErrorMessage('🟥 prisma/react-native C++ bindings failed to initialize')
  );
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
};

type QueryEngineObject = object;

type PrismaProxy = {
  create: (options: PrismaCreateOptions) => QueryEngineObject;
  connect: (engine: QueryEngineObject, trace: string) => void;
  execute: (
    engine: QueryEngineObject,
    body: string,
    headers: string,
    txId: string
  ) => Promise<string>;
  startTransaction: (
    engine: QueryEngineObject,
    body: string,
    hdears: string
  ) => string;
  commitTransaction: (
    engine: QueryEngineObject,
    txId: string,
    headers: string
  ) => string;
  rollbackTransaction: (
    engine: QueryEngineObject,
    txId: string,
    headers: string
  ) => string;
  disconnect: (engine: QueryEngineObject, headers: string) => void;
  pushSchema: (engine: QueryEngineObject, schema: string) => void;
  applyPendingMigrations: (engine: QueryEngineObject) => void;
};
