import type { HybridObject } from 'react-native-nitro-modules';

export interface PrismaQueryCompiler extends HybridObject<{ ios: 'swift' }> {
  create(params: string): number;
  compile(handle: number, request: string): string;
  compileBatch(handle: number, request: string): string;
  free(handle: number): void;
  openDatabase(name: string, directory?: string): number;
  closeDatabase(handle: number): void;
  queryDatabase(handle: number, sql: string, args: string): string;
  executeScript(handle: number, sql: string): void;
}
