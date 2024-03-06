import { Prisma } from '@prisma/client';
import { useEffect, useState } from 'react';

export const ReactiveQueriesExtension = Prisma.defineExtension((client) => {
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
        useFindMany(args?: any) {
          const ctx = Prisma.getExtensionContext(this);
          const model = (ctx.$parent as any)[ctx.$name!];
          const prismaPromise = model.findMany(args);

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
                query: () => model.findMany(args),
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
