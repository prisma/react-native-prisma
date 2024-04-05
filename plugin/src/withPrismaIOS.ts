/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { ConfigPlugin, XcodeProject } from 'expo/config-plugins';
import { withXcodeProject } from 'expo/config-plugins';

type BuildPhase = { shellScript: string };

export const withPrismaIOS: ConfigPlugin<void> = (config) => {
  const cfg = withXcodeProject(config, (config) => {
    const xcodeProject: XcodeProject = config.modResults;

    const bundleReactNativePhase = xcodeProject.pbxItemByComment(
      'Bundle React Native code and images',
      'PBXShellScriptBuildPhase'
    );
    modifyExistingXcodeBuildScript(bundleReactNativePhase);

    return config;
  });

  return cfg;
};

export function modifyExistingXcodeBuildScript(script: BuildPhase): void {
  const code = JSON.parse(script.shellScript);
  script.shellScript = JSON.stringify(addPrismMigrationScriptCopy(code));
}

export function addPrismMigrationScriptCopy(script: string): string {
  return (
    script +
    `
    
    PRISMA_MIGRATIONS="../node_modules/react-native-prisma/copy-migrations.sh"

    /bin/sh -c "$PRISMA_MIGRATIONS"`
  );
}
