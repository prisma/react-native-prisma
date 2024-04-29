import fs from 'node:fs/promises';
import path from 'node:path';
import { $ } from 'zx';
import { downloadEngine, ensureNpmTag, writeVersionFile } from './utils';

async function main() {
  const tag = process.argv[2];
  ensureNpmTag(tag);
  const version = process.argv[3];
  if (!version) {
    console.error(`Usage: bump-engines <tag> <version>`);
    process.exitCode = 1;
    return;
  }
  await updatePkgJsonVersion(version);
  await $`yarn up prisma@${version} @prisma/client@${version}`;
  const enginesVersion = require('@prisma/engines-version').enginesVersion;

  await writeVersionFile('engine', enginesVersion);
  await writeVersionFile(`prisma-${tag}`, version);
  // downloading updated engine
  await downloadEngine();
}

async function updatePkgJsonVersion(version: string) {
  const pkgJsonPath = path.resolve(__dirname, '..', 'package.json');
  const content = JSON.parse(await fs.readFile(pkgJsonPath, 'utf8'));
  content.version = version;

  await fs.writeFile(pkgJsonPath, JSON.stringify(content, null, 2));
}

main();
