import fs from 'node:fs/promises';
import { $ } from 'zx';
import pRetry from 'p-retry';
import { NPM_TAGS, type NpmTag, readVersionFile } from './utils';

async function main() {
  for (let tag of NPM_TAGS) {
    await checkUpdate(tag);
  }
}

async function checkUpdate(tag: NpmTag) {
  console.log(`Checking update for npm tag: ${tag}`);
  const currentVersion = await readVersionFile(`prisma-${tag}`);
  const npmVersion = await getNpmVersion(tag);
  console.log(`Current version ${currentVersion}`);
  console.log(`npm version ${npmVersion}`);
  if (currentVersion !== npmVersion) {
    console.log('Update needed');
    const ghOut = process.env.GITHUB_OUTPUT;
    if (ghOut) {
      await fs.appendFile(ghOut, `${tag}=${npmVersion}\n`);
    }
  } else {
    console.log('Up to date');
  }
}

async function getNpmVersion(tag: NpmTag) {
  const content = await pRetry(
    () => $`yarn npm info prisma@${tag} --json -f version`,
    {
      retries: 3,
    }
  );

  const parsed = JSON.parse(content.stdout);
  if (typeof parsed?.version !== 'string') {
    throw new Error(`Can not get npm version for prisma@${tag}`);
  }
  return parsed.version;
}

main();
