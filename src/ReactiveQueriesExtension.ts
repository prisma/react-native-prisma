import PrismaDefault from '@prisma/client/scripts/default-index';
import { useEffect, useState } from 'react';

const Prisma = PrismaDefault.Prisma;

export function reactiveQueriesExtension() {
  return PrismaDefault.Prisma.defineExtension((client: any) => {
    const subscribedQueries = new Map<
      string,
      { query: () => any; callbacks: ((value: any) => any)[] }
    >();

    const refreshSubscriptions = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const [_, { callbacks, query }] of subscribedQueries) {
        const data = await query();
        callbacks.forEach((c) => c(data));
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

            const [engineResponse, setEngineResponse] = useState([]);

            useEffect(() => {
              const key = `${model} :: findMany :: ${JSON.stringify(args)}`;
              if (!subscribedQueries.has(key)) {
                subscribedQueries.set(key, {
                  callbacks: [setEngineResponse],
                  query: () => model.findMany(args),
                });
              }

              prismaPromise.then(setEngineResponse);

              return () => {};
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
}
