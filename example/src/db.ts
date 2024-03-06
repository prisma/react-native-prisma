import { reactiveQueriesExtension } from '@op-engineering/react-native-prisma';
import Chance from 'chance';

// metro crawls through the parent folder first, which means it doesn't find the generated classes
// Fixed by directly importing from this modules generated node modules client
import { PrismaClient } from '../node_modules/.prisma/client/rn';

const chance = new Chance();

const basePrisma = new PrismaClient({
  log: [{ emit: 'event', level: 'query' }],
});

// You should always call this at the start of the application
// failure to migrate might leave you with a non working app version
basePrisma.$applyPendingMigrations();

export const prisma = basePrisma.$extends(reactiveQueriesExtension());

export async function queryAllPosts() {
  return await prisma.post.findMany();
}

export async function createRandomUser() {
  await prisma.user.create({
    data: {
      email: chance.email(),
      name: chance.name(),
    },
  });
}

export async function createPost() {
  const user = await prisma.user.findFirst();

  return await prisma.post.create({
    data: {
      title: chance.string(),
      authorId: user!.id,
    },
  });
}

export async function queryAllUsers() {
  return await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      nick: true,
    },
  });
}

export async function transactionTest() {
  return await prisma.$transaction([
    prisma.user.findMany(),
    prisma.user.count(),
  ]);
}

// export async function rollbackTest() {
//   return await prisma.$transaction([
//     prisma.user.create({
//       data: {
//         email: chance.email(),
//       },
//     }),
//     prisma.user.create({
//       data: {
//         id: 1,
//         email: 'ospfranco@gmail.com',
//       },
//     }),
//   ]);
// }

export async function deleteUsers() {
  return await prisma.user.deleteMany();
}
