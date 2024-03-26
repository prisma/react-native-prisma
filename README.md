# React Native Prisma

A Prisma engine adaptation for React Native.

## Installation

```
yarn add --exact react-native-prisma react-native-quick-base64 react-native-url-polyfill @prisma/client@5.9.0-integration-react-native.5 @op-engineering/react-native-prisma@0.1.9
npx pod-install
```

### Bare react native projects

For bare project you will need to modify the building process to run a couple of scripts that take care of bundling the migrations you generate inside the final app bundle.

#### iOS

Go into `XCode` → `Build Phases` → `Bundle React Native Code and images` and modify it so that it looks like this:

![xcode_build_phases](xcode.png)

```bash
set -e

WITH_ENVIRONMENT="../node_modules/react-native/scripts/xcode/with-environment.sh"
REACT_NATIVE_XCODE="../node_modules/react-native/scripts/react-native-xcode.sh"
PRISMA_MIGRATIONS="../node_modules/@op-engineering/react-native-prisma/copy-migrations.sh" # Add this

/bin/sh -c "$WITH_ENVIRONMENT $PRISMA_MIGRATIONS $REACT_NATIVE_XCODE" # Add it to the list of running scripts
```

#### Android

For Android you need to modify your apps `app/Build.gradle`. Add the following at the top of the file.

```groovy
apply from: "../../node_modules/@op-engineering/react-native-prisma/react-native-prisma.gradle"
```

### Expo

For expo this process is automated into prebuild. Modify your `app.json` by adding the react-native-prisma plugin.

```json
{
  "expo": {
    // ... The rest of your expo config
    "plugins": ["@op-engineering/react-native-prisma"]
  }
}
```

## Reactive queries

This packages contains an extension to the prisma client that allows you to use reactive queries. Use at your own convinience and care since it might introduce large re-renders in your app.

```ts
import { PrismaClient } from '@prisma/client/rn';
import { reactiveHooksExtension } from 'react-native-prisma';

const baseClient = new PrismaClient();

export const extendedClient = baseClient.$extends(reactiveHooksExtension);
```

Then in your React component you can use the hook:

```tsx
import {Text} from 'react-native';
import {extendedClient} from './myDbModule';

export default function App {

  // Will automatically re-render the component with new data
  const users = extendedClient.user.useFindMany();

  return (
    <Text>{users}</Text>
  )
}
```

Bare in mind, for the reactive queries to work you have to use the extended client to modify the data:

```ts
extendedClient.user.create({ ...userData });
```

There are several hooks you can use for your reactive queries:

```ts
useFindMany();
useFindFirst();
useFindUnique();
```

### Non hook reactive queries

It is also possible to use callbacks for this queries in case you are not using hooks, but you still want to get notified when data changes

```ts
import { PrismaClient } from '@prisma/client/rn';
import { reactiveQueriesExtension } from 'react-native-prisma';

const baseClient = new PrismaClient();

export const extendedClient = baseClient.$extends(reactiveQueriesExtension);
```

## Applying migrations

On application start you need to run the migrations to make sure the database is in a consistent state with your prisma generated client:

```ts
import 'react-native-prisma';
import { PrismaClient } from '@prisma/client/rn';
import Chance from 'chance';
const chance = new Chance();

const prisma = new PrismaClient();

async function initializeDb() {
  try {
    basePrisma.$applyPendingMigrations();
  } catch (e) {
    console.error(`failed to apply migrations: ${e}`);
    throw new Error(
      'Applying migrations failed, your app is now in an inconsistent state. We cannot guarantee safety, it is now your responsability to reset the database or tell the user to re-install the app'
    );
  }
}
```

Prisma being born for server workloads has a different philosophy regarding migrations. Since the client types are generated based on the schema, a failed migration is dangereous and will most likely fail on runtime. Therefore, if a migration has failed, we consider this a catasthropic fail which will need a complete reset of the database or re-install on part of the user.

// TODO add more documentation or a link to how to properly do and test migrations
