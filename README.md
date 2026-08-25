# React Native Prisma 7.9

面向 Expo 与 React Native 新架构的 Prisma 7.9 同步本地数据库方案。

- 将 Prisma 7.9 Query Compiler 精简为 SQLite 原生库，通过 Expo Modules JSI 同步调用。
- 通过 `expo-sqlite` 的 JSI 同步接口直接读写 SQLite。
- CRUD、聚合、关联查询和查询计划事务直接返回结果，不为每次本地查询额外创建 Promise。
- 避免数据库已经返回、界面仍等待 Promise 调度后才更新的问题。
- 支持 Expo 默认 Hermes，不在运行时加载 WebAssembly，也不携带旧版完整 Query Engine。
- 当前 iOS 开发基线为 Expo 58、React Native 0.87、Prisma 7.9.1。

`release` 已包含 iPhone 与 arm64/x86_64 模拟器的原生 Query Compiler；安装后需要重新生成原生工程或执行 `bun ios`。

## 安装

`prisma`、`@prisma/client` 与本包版本必须一致：

```sh
bun add @prisma/client@7.9.1 expo-sqlite github:song-react/react-native-prisma#release
bun add -d prisma@7.9.1
```

生成器配置：

```prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}

model User {
  id   Int    @id @default(autoincrement())
  name String
}
```

每次生成 Prisma Client 后执行准备脚本：

```json
{
  "scripts": {
    "db:generate": "prisma generate && prisma-react-native generated/prisma",
    "db:migrate": "prisma migrate dev && bun db:generate",
    "db:push": "prisma db push && bun db:generate",
    "db:studio": "prisma studio",
    "postinstall": "bun db:generate && prisma-react-native generated/prisma"
  }
}
```

`prisma-react-native` 会移除生成客户端中的 Node 与 WebAssembly 依赖，并接入 Hermes 可用的同步原生 Query Compiler。
它还会把 `prisma/migrations/*/migration.sql` 嵌入生成的 Client，供设备端首次启动和版本升级时执行。

## Demo

```ts
import { PrismaClient } from './generated/prisma/client';
import {
  PrismaExpoSQLite,
  queriesExtension,
} from '@prisma/react-native';

export const db = new PrismaClient({
  adapter: new PrismaExpoSQLite('app.db'),
}).$extends(queriesExtension());

// 自动应用尚未执行的迁移，并完成首次连接。
export const databaseReady = db.$applyPendingMigrations();
```

连接完成后直接同步调用：

```ts
const start = async () => {
  await databaseReady;

  const user = db.user.create({ data: { name: 'Ada' } });
  const users = db.user.findMany({ orderBy: { id: 'desc' } });
  const count = db.user.count();

  console.log(user, users, count);
};
```

## API

```ts
import { queriesExtension } from '@prisma/react-native';
import { PrismaExpoSQLite } from '@prisma/react-native';
```

开发时使用 `prisma migrate dev` 生成迁移；`prisma db push` 只更新开发机数据库，不会更新用户设备。App 启动时调用一次 `$applyPendingMigrations()`，之后 CRUD、聚合和查询计划事务均同步返回。

## 发布分支

- `main`：完整 TypeScript 源码。
- `release`：iOS 原生 Query Compiler、CommonJS、ESM、类型声明及混淆 JS，可直接作为 Git 依赖安装。
