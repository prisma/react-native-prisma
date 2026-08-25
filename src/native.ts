import { requireNativeModule } from 'expo-modules-core';

const native = requireNativeModule<{
  create(params: string): number;
  compile(handle: number, request: string): string;
  compileBatch(handle: number, request: string): string;
  free(handle: number): void;
}>('PrismaQueryCompiler');

export class NativeQueryCompiler {
  readonly #handle: number;

  constructor(params: unknown) {
    this.#handle = native.create(JSON.stringify(params));
  }

  compile(request: string) {
    return JSON.parse(native.compile(this.#handle, request));
  }

  compileBatch(request: string) {
    return JSON.parse(native.compileBatch(this.#handle, request));
  }

  free() {
    native.free(this.#handle);
  }
}
