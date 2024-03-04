import { NativeModules } from 'react-native';
// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const PrismaModule = isTurboModuleEnabled
    ? require('./NativePrisma').default
    : NativeModules.Prisma;
if (!PrismaModule) {
    throw new Error('🟥 react-native-prisma failed to initialize');
}
PrismaModule.install();
if (!global.__PrismaProxy) {
    throw new Error('🟥 react-native-prisma C++ bindings failed to initialize');
}
// Wrap the create function to stringify the env variables if necessary
const ogCreate = __PrismaProxy.create;
global.__PrismaProxy = {
    ...global.__PrismaProxy,
    create: (options) => {
        if (typeof options.env !== 'string') {
            options.env = JSON.stringify(options.env);
        }
        if (typeof options.datasourceOverrides !== 'string') {
            options.datasourceOverrides = JSON.stringify(options.datasourceOverrides);
        }
        return ogCreate(options);
    },
};
