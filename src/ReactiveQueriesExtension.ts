import { Prisma } from '@prisma/client/rn';
import { useEffect, useState } from 'react';

export const reactiveQueriesExtension = Prisma.defineExtension((client) => {
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
    name: 'prisma-reactive-queries',
    model: {
      $allModels: {
        useFindMany<T>(this: T, args?: Prisma.Args<T, 'findMany'>) {
          const ctx = Prisma.getExtensionContext(this);
          const model = ctx.$name!;
          // const model = ctx.$parent[ctx.$name!];
          const prismaPromise = (ctx as any).findMany(args);

          const [engineResponse, setEngineResponse] = useState<any>();

          useEffect(() => {
            const key = `${model} :: findMany :: ${JSON.stringify(args)}`;
            const callbackKey = `${model} :: findMany :: ${JSON.stringify(
              args
            )} :: ${Math.random()}`;
            if (subscribedQueries[key] != null) {
              subscribedQueries[key]!.callbacks[callbackKey] =
                setEngineResponse;
            } else {
              subscribedQueries[key] = {
                callbacks: {
                  [callbackKey]: setEngineResponse,
                },
                query: () => (ctx as any).findMany(args),
              };
            }

            prismaPromise.then(setEngineResponse);

            return () => {
              delete subscribedQueries[key]!.callbacks[callbackKey];
            };
          }, []);

          return engineResponse;
        },
        async create(args: any) {
          const ctx = Prisma.getExtensionContext(this);
          const model = (ctx.$parent as any)[ctx.$name!];
          const prismaPromise = model.create(args);
          const data = await prismaPromise;
          await refreshSubscriptions();

          return data;
        },
        async delete(args: any) {
          const ctx = Prisma.getExtensionContext(this);
          const model = (ctx.$parent as any)[ctx.$name!];
          const prismaPromise = model.delete(args);
          const data = await prismaPromise;
          await refreshSubscriptions();

          return data;
        },
        async deleteMany(args?: any) {
          const ctx = Prisma.getExtensionContext(this);
          const model = (ctx.$parent as any)[ctx.$name!];
          const prismaPromise = model.deleteMany(args);
          const data = await prismaPromise;
          await refreshSubscriptions();

          return data;
        },
      },
    },
  });
});
