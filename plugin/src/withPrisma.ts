import type { ConfigPlugin } from 'expo/config-plugins';
import { createRunOncePlugin, WarningAggregator } from 'expo/config-plugins';

import { withPrismaAndroid } from './withPrismaAndroid';
import { withPrismaIOS } from './withPrismaIOS';

const pkg = require('../../package.json');

const withPrismaPlugin: ConfigPlugin<void> = (config) => {
  let cfg = config;
  try {
    cfg = withPrismaAndroid(cfg);
  } catch (e) {
    WarningAggregator.addWarningAndroid(
      'prisma-expo',
      `There was a problem configuring prisma for expo in your native Android project ${e}`
    );
  }

  try {
    cfg = withPrismaIOS(cfg);
  } catch (e) {
    WarningAggregator.addWarningAndroid(
      'prisma-expo',
      `There was a problem configuring prisma for expo in your native iOS project ${e}`
    );
  }

  return cfg;
};

const withPrisma = createRunOncePlugin(withPrismaPlugin, pkg.name, pkg.version);

export { withPrisma };
