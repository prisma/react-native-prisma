"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPrisma = void 0;
const config_plugins_1 = require("expo/config-plugins");
const withPrismaAndroid_1 = require("./withPrismaAndroid");
const withPrismaIOS_1 = require("./withPrismaIOS");
const pkg = require('../../package.json');
const withPrismaPlugin = (config) => {
    let cfg = config;
    try {
        cfg = (0, withPrismaAndroid_1.withPrismaAndroid)(cfg);
    }
    catch (e) {
        config_plugins_1.WarningAggregator.addWarningAndroid('prisma-expo', `There was a problem configuring prisma for expo in your native Android project ${e}`);
    }
    try {
        cfg = (0, withPrismaIOS_1.withPrismaIOS)(cfg);
    }
    catch (e) {
        config_plugins_1.WarningAggregator.addWarningAndroid('prisma-expo', `There was a problem configuring prisma for expo in your native iOS project ${e}`);
    }
    return cfg;
};
const withPrisma = (0, config_plugins_1.createRunOncePlugin)(withPrismaPlugin, pkg.name, pkg.version);
exports.withPrisma = withPrisma;
