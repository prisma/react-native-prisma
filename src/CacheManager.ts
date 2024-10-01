import { useCallback, useEffect, useSyncExternalStore } from 'react';

export default class CacheManager {
  private queue = new Map<string, NodeJS.Timeout>();
  private listeners = new Map<string, Set<() => void>>();
  private cache = new Map<string, Record<string, { data: any }>>();

  private get(model: string) {
    return this.cache.get(model);
  }

  set(model: string, key: string, data: any) {
    const cache = this.get(model);
    this.cache.set(model, { ...cache, [key]: { data } });
  }

  getSnapshot(model: string, key: string) {
    const cache = this.get(model) || {};
    return cache[key]?.data;
  }

  exist(model: string, key: string) {
    const cache = this.get(model) || {};
    return Boolean(cache[key]);
  }

  subscribe(model: string, listener: () => Promise<void>) {
    if (!this.listeners.has(model)) {
      this.listeners.set(model, new Set());
    }

    const listeners = this.listeners.get(model);
    listeners?.add(listener);

    return () => listeners?.delete(listener);
  }

  notifySubscribers(model: string) {
    if (this.queue.has(model)) {
      clearTimeout(this.queue.get(model)!);
    }

    const timer = setTimeout(() => {
      const listeners = this.listeners.get(model);
      listeners?.forEach((listener) => listener());
    }, 100); // 100ms debounce, we can adjust this value as needed

    this.queue.set(model, timer);
  }
}

export const cache = new CacheManager();

// A custom hook for reading data from cache and subscribing to updates
export const usePrismaCache = <T>(
  model: string,
  key: string,
  queryFn: () => Promise<T>
) => {
  const listener = useCallback(
    (callback: () => void) => async () => {
      const data = await queryFn();
      cache.set(model, key, data);
      callback();
    },
    []
  );

  const store = useSyncExternalStore<Awaited<T>>(
    (cb) => cache.subscribe(model, listener(cb)),
    () => cache.getSnapshot(model, key)
  );

  useEffect(() => {
    if (!cache.exist(model, key)) {
      cache.notifySubscribers(model);
    }
  }, []);

  return store;
};
