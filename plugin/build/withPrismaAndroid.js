'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.withPrismaAndroid = void 0;
const config_plugins_1 = require('expo/config-plugins');
const SCRIPT_LINE =
  'apply from: "../../node_modules/react-native-prisma/react-native-prisma.gradle"';
const withPrismaAndroid = (config) => {
  const cfg = (0, config_plugins_1.withAppBuildGradle)(config, (config) => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = modifyAppBuildGradle(
        config.modResults.contents
      );
    } else {
      throw new Error(
        'Cannot configure prisma because app/Build.gradle because it is not groovy'
      );
    }
    return config;
  });
  return cfg;
};
exports.withPrismaAndroid = withPrismaAndroid;
function modifyAppBuildGradle(gradleContent) {
  if (gradleContent.includes('react-native-prisma.gradle')) {
    return gradleContent;
  }
  return gradleContent + '\n' + SCRIPT_LINE;
}
