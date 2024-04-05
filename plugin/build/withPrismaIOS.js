'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.addPrismMigrationScriptCopy =
  exports.modifyExistingXcodeBuildScript =
  exports.withPrismaIOS =
    void 0;
const config_plugins_1 = require('expo/config-plugins');
const withPrismaIOS = (config) => {
  const cfg = (0, config_plugins_1.withXcodeProject)(config, (config) => {
    const xcodeProject = config.modResults;
    const bundleReactNativePhase = xcodeProject.pbxItemByComment(
      'Bundle React Native code and images',
      'PBXShellScriptBuildPhase'
    );
    modifyExistingXcodeBuildScript(bundleReactNativePhase);
    return config;
  });
  return cfg;
};
exports.withPrismaIOS = withPrismaIOS;
function modifyExistingXcodeBuildScript(script) {
  const code = JSON.parse(script.shellScript);
  script.shellScript = JSON.stringify(addPrismMigrationScriptCopy(code));
}
exports.modifyExistingXcodeBuildScript = modifyExistingXcodeBuildScript;
function addPrismMigrationScriptCopy(script) {
  return (
    script +
    `
    
    PRISMA_MIGRATIONS="../node_modules/react-native-prisma/copy-migrations.sh"

    /bin/sh -c "$PRISMA_MIGRATIONS"`
  );
}
exports.addPrismMigrationScriptCopy = addPrismMigrationScriptCopy;
