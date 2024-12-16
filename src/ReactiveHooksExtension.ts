import { Prisma } from '@prisma/client/extension';

import { cache, usePrismaCache } from './CacheManager';

export const reactiveHooksExtension = () =>
  Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'prisma-reactive-hooks-extension',
      model: {
        $allModels: {
          useFindMany<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'findMany'>>
          ): Prisma.Result<T, A, 'findMany'> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const key = `${table} :: findMany :: ${JSON.stringify(args)}`;

            const queryFn = (): Promise<Prisma.Result<T, A, 'findMany'>> =>
              model.findMany(args);

            return usePrismaCache(table, key, queryFn);
          },

          useFindUnique<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'findUnique'>>
          ): Prisma.Result<T, A, 'findUnique'> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const key = `${table} :: findUnique :: ${JSON.stringify(args)}`;

            const queryFn = (): Promise<Prisma.Result<T, A, 'findUnique'>> =>
              model.findUnique(args);

            return usePrismaCache(table, key, queryFn);
          },

          useFindFirst<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'findFirst'>>
          ): Prisma.Result<T, A, 'findFirst'> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const key = `${table} :: findFirst :: ${JSON.stringify(args)}`;

            const queryFn = (): Promise<Prisma.Result<T, A, 'findFirst'>> =>
              model.findFirst(args);

            return usePrismaCache(table, key, queryFn);
          },

          useAggregate<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'aggregate'>>
          ): Prisma.Result<T, A, 'aggregate'> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const key = `${table} :: aggregate :: ${JSON.stringify(args)}`;

            const queryFn = (): Promise<Prisma.Result<T, A, 'aggregate'>> =>
              model.aggregate(args);

            return usePrismaCache(table, key, queryFn);
          },

          useGroupBy<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'groupBy'>>
          ): Prisma.Result<T, A, 'groupBy'> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const key = `${table} :: groupBy :: ${JSON.stringify(args)}`;

            const queryFn = (): Promise<Prisma.Result<T, A, 'groupBy'>> =>
              model.groupBy(args);

            return usePrismaCache(table, key, queryFn);
          },

          async create<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'create'>>
          ): Promise<Prisma.Result<T, A, 'create'>> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const prismaPromise = model.create(args);
            const data = await prismaPromise;
            cache.notifySubscribers(table);

            return data;
          },

          async createMany<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'createMany'>>
          ): Promise<Prisma.Result<T, A, 'createMany'>> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const prismaPromise = model.createMany(args);
            const data = await prismaPromise;
            cache.notifySubscribers(table);

            return data;
          },

          async delete<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'delete'>>
          ): Promise<Prisma.Result<T, A, 'delete'>> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const prismaPromise = model.delete(args);
            const data = await prismaPromise;
            cache.notifySubscribers(table);

            return data;
          },

          async deleteMany<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'deleteMany'>>
          ): Promise<Prisma.Result<T, A, 'deleteMany'>> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const prismaPromise = model.deleteMany(args);
            const data = await prismaPromise;
            cache.notifySubscribers(table);

            return data;
          },

          async update<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'update'>>
          ): Promise<Prisma.Result<T, A, 'update'>> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const prismaPromise = model.update(args);
            const data = await prismaPromise;
            cache.notifySubscribers(table);

            return data;
          },

          async updateMany<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'updateMany'>>
          ): Promise<Prisma.Result<T, A, 'updateMany'>> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const prismaPromise = model.updateMany(args);
            const data = await prismaPromise;
            cache.notifySubscribers(table);

            return data;
          },

          async upsert<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'upsert'>>
          ): Promise<Prisma.Result<T, A, 'upsert'>> {
            const ctx = Prisma.getExtensionContext(this);
            const table = ctx.$name!;
            const model = (ctx.$parent as any)[table];
            const prismaPromise = model.upsert(args);
            const data = await prismaPromise;
            cache.notifySubscribers(table);

            return data;
          },
        },
      },
    });
  });
