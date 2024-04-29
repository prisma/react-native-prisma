import { PrismaClient } from '@prisma/client/react-native';
import {
  reactiveHooksExtension,
  reactiveQueriesExtension,
} from '@prisma/react-native';
import Chance from 'chance';

const chance = new Chance();

const basePrisma = new PrismaClient({
  log: [{ emit: 'event', level: 'query' }],
});

export async function initializeDB() {
  try {
    await basePrisma.$applyPendingMigrations();
  } catch (e) {
    console.error(`failed to apply migrations: ${e}`);
    throw new Error(
      'Applying migrations failed, your app is now in an inconsistent state. We cannot guarantee safety, it is now your responsability to reset the database or tell the user to re-install the app'
    );
  }
}
// You should always call this at the start of the application
// failure to migrate might leave you with a non working app version

// Examples of a reactive client for REACT
export const hooksPrisma = basePrisma.$extends(reactiveHooksExtension());

export async function createRandomUser() {
  await hooksPrisma.user.create({
    data: {
      email: chance.email(),
      name: chance.name(),
    },
  });
}

export async function deleteUsers() {
  return await hooksPrisma.user.deleteMany();
}

// A generic reactive client
const reactivePrisma = basePrisma.$extends(reactiveQueriesExtension());

// create a reactive query
const unsubscriber = reactivePrisma.user.findMany((data) => {
  console.log(data);
});

export async function createRandomUserGeneric() {
  return await reactivePrisma.user.create({
    data: {
      email: chance.email(),
      name: chance.name(),
    },
  });
}

export async function runE2EQuery() {
  const createdUser = await basePrisma.user.create({
    data: {
      email: chance.email(),
      name: chance.name(),
    },
  });
  const foundUser = await basePrisma.user.findFirst({
    where: {
      id: createdUser.id,
    },
  });
  await basePrisma.user.delete({
    where: {
      id: foundUser?.id,
    },
  });
}

// @ts-expect-error
module.hot?.dispose(() => {
  unsubscriber();
});
