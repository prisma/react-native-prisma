import { Prisma } from '@prisma/client/extension';

export const reactiveQueriesExtension = () =>
  Prisma.defineExtension((client) => {
    const subscribedQueries: Record<
      string,
      {
        callbacks: Record<string, (data: any) => void>;
        query: () => Promise<any>;
      }
    > = {};

    const refreshSubscriptions = async () => {
      for (const key in subscribedQueries) {
        const subscription = subscribedQueries[key]!;

        const data = await subscription.query();

        for (const callbackKey in subscription.callbacks) {
          const callback = subscription.callbacks[callbackKey]!;
          callback(data);
        }
      }
    };

    return client.$extends({
      name: 'prisma-reactive-queries-extension',
      client: {
        $refreshSubscriptions: async () => {
          await refreshSubscriptions();
        }
      },
      model: {
        $allModels: {
          findMany<T, A>(
            this: T,
            cb: (data: Prisma.Result<T, A, 'findMany'>) => void,
            args?: Prisma.Exact<A, Prisma.Args<T, 'findMany'>>
          ): () => void {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];

            const key = `${model} :: findMany :: ${JSON.stringify(args)}`;
            const callbackKey = `${model} :: findMany :: ${JSON.stringify(
              args
            )} :: ${Math.random()}`;

            if (subscribedQueries[key] != null) {
              subscribedQueries[key]!.callbacks[callbackKey] = cb;
            } else {
              subscribedQueries[key] = {
                callbacks: {
                  [callbackKey]: cb,
                },
                query: () => model.findMany(args),
              };
            }

            refreshSubscriptions();

            return () => {
              delete subscribedQueries[key]!.callbacks[callbackKey];
            };
          },
          aggregate<T, A>(
            this: T,
            cb: (data: Prisma.Result<T, A, 'aggregate'>) => void,
            args?: Prisma.Exact<A, Prisma.Args<T, 'aggregate'>>
          ): () => void {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];

            const key = `${model} :: aggregate :: ${JSON.stringify(args)}`;
            const callbackKey = `${model} :: aggregate :: ${JSON.stringify(
              args
            )} :: ${Math.random()}`;

            if (subscribedQueries[key] != null) {
              subscribedQueries[key]!.callbacks[callbackKey] = cb;
            } else {
              subscribedQueries[key] = {
                callbacks: {
                  [callbackKey]: cb,
                },
                query: () => model.aggregate(args),
              };
            }

            return () => {
              delete subscribedQueries[key]!.callbacks[callbackKey];
            };
          },
          groupBy<T, A>(
            this: T,
            cb: (data: Prisma.Result<T, A, 'groupBy'>) => void,
            args?: Prisma.Exact<A, Prisma.Args<T, 'groupBy'>>
          ): () => void {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];

            const key = `${model} :: groupBy :: ${JSON.stringify(args)}`;
            const callbackKey = `${model} :: groupBy :: ${JSON.stringify(
              args
            )} :: ${Math.random()}`;

            if (subscribedQueries[key] != null) {
              subscribedQueries[key]!.callbacks[callbackKey] = cb;
            } else {
              subscribedQueries[key] = {
                callbacks: {
                  [callbackKey]: cb,
                },
                query: () => model.groupBy(args),
              };
            }

            return () => {
              delete subscribedQueries[key]!.callbacks[callbackKey];
            };
          },
          findUnique<T, A>(
            this: T,
            cb: (data: Prisma.Result<T, A, 'findMany'>) => void,
            args?: Prisma.Exact<A, Prisma.Args<T, 'findUnique'>>
          ): () => void {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];

            const key = `${model} :: findUnique :: ${JSON.stringify(args)}`;
            const callbackKey = `${model} :: findUnique :: ${JSON.stringify(
              args
            )} :: ${Math.random()}`;
            if (subscribedQueries[key] != null) {
              subscribedQueries[key]!.callbacks[callbackKey] = cb;
            } else {
              subscribedQueries[key] = {
                callbacks: {
                  [callbackKey]: cb,
                },
                query: () => model.findUnique(args),
              };
            }

            return () => {
              delete subscribedQueries[key]!.callbacks[callbackKey];
            };
          },
          findFirst<T, A>(
            this: T,
            cb: (data: Prisma.Result<T, A, 'findMany'>) => void,
            args?: Prisma.Exact<A, Prisma.Args<T, 'findFirst'>>
          ): () => void {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];

            const key = `${model} :: findUnique :: ${JSON.stringify(args)}`;
            const callbackKey = `${model} :: findUnique :: ${JSON.stringify(
              args
            )} :: ${Math.random()}`;
            if (subscribedQueries[key] != null) {
              subscribedQueries[key]!.callbacks[callbackKey] = cb;
            } else {
              subscribedQueries[key] = {
                callbacks: {
                  [callbackKey]: cb,
                },
                query: () => model.findUnique(args),
              };
            }

            return () => {
              delete subscribedQueries[key]!.callbacks[callbackKey];
            };
          },
          async create<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'create'>>
          ): Promise<Prisma.Result<T, A, 'create'>> {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];
            const prismaPromise = model.create(args);
            const data = await prismaPromise;
            await refreshSubscriptions();

            return data;
          },
          async createMany<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'createMany'>>
          ): Promise<Prisma.Result<T, A, 'createMany'>> {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];
            const prismaPromise = model.createMany(args);
            const data = await prismaPromise;
            await refreshSubscriptions();

            return data;
          },
          async delete<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'delete'>>
          ): Promise<Prisma.Result<T, A, 'delete'>> {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];
            const prismaPromise = model.delete(args);
            const data = await prismaPromise;
            await refreshSubscriptions();

            return data;
          },
          async deleteMany<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'deleteMany'>>
          ): Promise<Prisma.Result<T, A, 'deleteMany'>> {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];
            const prismaPromise = model.deleteMany(args);
            const data = await prismaPromise;
            await refreshSubscriptions();

            return data;
          },
          async update<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'update'>>
          ): Promise<Prisma.Result<T, A, 'update'>> {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];
            const prismaPromise = model.update(args);
            const data = await prismaPromise;
            await refreshSubscriptions();

            return data;
          },
          async updateMany<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'updateMany'>>
          ): Promise<Prisma.Result<T, A, 'updateMany'>> {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];
            const prismaPromise = model.updateMany(args);
            const data = await prismaPromise;
            await refreshSubscriptions();

            return data;
          },
          async upsert<T, A>(
            this: T,
            args?: Prisma.Exact<A, Prisma.Args<T, 'upsert'>>
          ): Promise<Prisma.Result<T, A, 'upsert'>> {
            const ctx = Prisma.getExtensionContext(this);
            const model = (ctx.$parent as any)[ctx.$name!];
            const prismaPromise = model.upsert(args);
            const data = await prismaPromise;
            await refreshSubscriptions();

            return data;
          },
        },
      },
    });
  });
