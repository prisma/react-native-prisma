import type { ConfigPlugin } from 'expo/config-plugins';
type BuildPhase = {
  shellScript: string;
};
export declare const withPrismaIOS: ConfigPlugin<void>;
export declare function modifyExistingXcodeBuildScript(
  script: BuildPhase
): void;
export declare function addPrismMigrationScriptCopy(script: string): string;
export {};
