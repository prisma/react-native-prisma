#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { minify } = require('terser');

const files = [];
const collect = (target) => {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const name of fs.readdirSync(target)) collect(path.join(target, name));
  } else if (/\.(?:c?js|mjs)$/.test(target)) {
    files.push(target);
  } else if (target.endsWith('.map')) {
    fs.unlinkSync(target);
  }
};

for (const target of process.argv.slice(2)) collect(path.resolve(target));

Promise.all(
  files.map(async (file) => {
    const result = await minify(fs.readFileSync(file, 'utf8'), {
      compress: { passes: 2 },
      mangle: { toplevel: true },
      module: file.includes(`${path.sep}module${path.sep}`),
      format: { comments: false },
    });
    if (!result.code) throw new Error(`Failed to obfuscate ${file}`);
    fs.writeFileSync(file, result.code);
  })
).then(() => console.log(`Obfuscated ${files.length} JavaScript files`));
