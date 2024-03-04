import type { ConfigPlugin } from 'expo/config-plugins';
import { withAppBuildGradle } from 'expo/config-plugins';

const SCRIPT_LINE =
  'apply from: "../../node_modules/@op-engineering/react-native-prisma/react-native-prisma.gradle"';

export const withPrismaAndroid: ConfigPlugin<void> = (config) => {
  const cfg = withAppBuildGradle(config, (config) => {
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

function modifyAppBuildGradle(gradleContent: string): string {
  if (gradleContent.includes('react-native-prisma.gradle')) {
    return gradleContent;
  }

  return gradleContent + '\n' + SCRIPT_LINE;
}
