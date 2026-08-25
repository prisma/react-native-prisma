#!/usr/bin/env node

const fs = require('node:fs');

const runtimeFiles = [...new Set(
  [process.env.INIT_CWD, process.cwd()].filter(Boolean).flatMap((root) =>
    ['client.js', 'client.mjs'].flatMap((file) => {
      try {
        return [require.resolve(`@prisma/client/runtime/${file}`, { paths: [root] })];
      } catch {
        return [];
      }
    })
  )
)];

const cryptoShim = `var PrismaReactNativeCrypto=(()=>{let getRandomValues=value=>{if(globalThis.crypto?.getRandomValues)return globalThis.crypto.getRandomValues(value);for(let i=0;i<value.length;i++)value[i]=Math.random()*256|0;return value},randomBytes=size=>getRandomValues(Buffer.allocUnsafe(size));return{getRandomValues,randomBytes,randomUUID:globalThis.crypto?.randomUUID?.bind(globalThis.crypto)??(()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,value=>{let random=Math.random()*16|0;return(value==="x"?random:random&3|8).toString(16)})),webcrypto:{getRandomValues}}})();`;
const legacyProcess = 'var process=globalThis.process??{env:{},pid:0,stdout:{isTTY:false},release:{},cwd:()=>"/"};';
const processShim = 'var PrismaReactNativeProcess=globalThis.process??{},process={env:PrismaReactNativeProcess.env??{},pid:PrismaReactNativeProcess.pid??0,stdout:PrismaReactNativeProcess.stdout??{isTTY:false},release:PrismaReactNativeProcess.release??{},cwd:typeof PrismaReactNativeProcess.cwd==="function"?PrismaReactNativeProcess.cwd.bind(PrismaReactNativeProcess):()=>"/"};';
const legacyCjsPrefix = `var {Buffer}=require("buffer");${legacyProcess}${cryptoShim}`;
const cjsPrefix = `var {Buffer}=require("buffer");${processShim}${cryptoShim}`;
const asyncResource = 'class{runInAsyncScope(callback){return callback()}}';
const eventEmitter = 'class{constructor(){this.listeners={}}on(name,listener){(this.listeners[name]??=[]).push(listener);return this}emit(name,...args){for(let listener of this.listeners[name]??[])listener(...args)}}';

function patchPortability(source, runtimePath) {
  if (runtimePath.endsWith('.mjs')) {
    source = source
      .replace(
        /^import \* as __banner_node_module from "node:module";\nimport \* as __banner_node_path from "node:path";\nimport \* as process from "node:process";\nimport \* as __banner_node_url from "node:url";\nconst __filename = __banner_node_url\.fileURLToPath\(import\.meta\.url\);\nglobalThis\['__dirname'\] = __banner_node_path\.dirname\(__filename\);\nconst require = __banner_node_module\.createRequire\(import\.meta\.url\);\n/,
        `import { Buffer } from "buffer";\n${processShim}\nglobalThis['__dirname']='/';\n${cryptoShim}\nconst require=()=>PrismaReactNativeCrypto;\n`
      )
      .replace(/import ([A-Za-z_$][\w$]*) from"node:path";/g, 'var $1={sep:"/",posix:{sep:"/"}};')
      .replace(/import ([A-Za-z_$][\w$]*) from"node:fs";/g, 'var $1={readFileSync:()=>{throw new Error("File access is unavailable")}};')
      .replace(/import ([A-Za-z_$][\w$]*) from"node:os";/g, 'var $1={hostname:()=>"react-native"};')
      .replace(
        /import\{AsyncResource as ([A-Za-z_$][\w$]*)\}from"node:async_hooks";import\{EventEmitter as ([A-Za-z_$][\w$]*)\}from"node:events";/g,
        `var $1=${asyncResource},$2=${eventEmitter};`
      )
      .replace(/import\{webcrypto as ([A-Za-z_$][\w$]*)\}from"node:crypto";/g, 'var $1=PrismaReactNativeCrypto.webcrypto;')
      .replace(/import ([A-Za-z_$][\w$]*) from"node:crypto";/g, 'var $1=PrismaReactNativeCrypto;');
    source = source.replace(
      'const process=globalThis.process??{env:{},pid:0,stdout:{isTTY:false},release:{},cwd:()=>"/"};',
      processShim
    );
  } else {
    let body = source.replace(/^"use strict";/, '');
    for (const prefix of [legacyCjsPrefix, cjsPrefix]) {
      while (body.startsWith(prefix)) body = body.slice(prefix.length);
    }
    source = `"use strict";${cjsPrefix}${body}`;
    source = source
      .replace(/var ([A-Za-z_$][\w$]*)=[A-Za-z_$][\w$]*\(require\("node:path"\)(?:,1)?\);/g, 'var $1={default:{sep:"/",posix:{sep:"/"}}};')
      .replace(/var ([A-Za-z_$][\w$]*)=[A-Za-z_$][\w$]*\(require\("node:fs"\)(?:,1)?\);/g, 'var $1={default:{readFileSync:()=>{throw new Error("File access is unavailable")}}};')
      .replace(/var ([A-Za-z_$][\w$]*)=[A-Za-z_$][\w$]*\(require\("node:os"\)(?:,1)?\);/g, 'var $1={default:{hostname:()=>"react-native"}};')
      .replace(
        /var ([A-Za-z_$][\w$]*)=require\("node:async_hooks"\),([A-Za-z_$][\w$]*)=require\("node:events"\);/g,
        `var $1={AsyncResource:${asyncResource}},$2={EventEmitter:${eventEmitter}};`
      );
  }

  source = source
    .replace(/[A-Za-z_$][\w$]*\("node:crypto"\)/g, 'PrismaReactNativeCrypto')
    .replace(/import\("node:crypto"\)/g, 'PrismaReactNativeCrypto')
    .replace('globalThis.crypto??await PrismaReactNativeCrypto', 'PrismaReactNativeCrypto')
    .replace(
      /Buffer\.from\(([A-Za-z_$][\w$]*),"base64url"\)/g,
      'Buffer.from($1.replace(/-/g,"+").replace(/_/g,"/"),"base64")'
    );
  const unsupported = source.match(/["']node:(?:module|path|process|url|crypto|fs|os|async_hooks|events)["']/)?.[0];
  if (unsupported) throw new Error(`Unsupported Node runtime import ${unsupported}: ${runtimePath}`);
  return source;
}

function patchRuntime(runtimePath) {
  let source = fs.readFileSync(runtimePath, 'utf8');
  const original = source;
  if (!source.includes('7.9.1')) {
    throw new Error(`Unsupported @prisma/client runtime: ${runtimePath}`);
  }
  const portableSource = patchPortability(source, runtimePath);
  source = portableSource;
  if (!source.includes('getNativeQueryCompiler')) {
    source = source.replace(
      'async loadQueryCompiler(e){let{clientVersion:t,compilerWasm:r}=e;if(r===void 0)',
      'async loadQueryCompiler(e){let{clientVersion:t,compilerWasm:r}=e;if(r?.getNativeQueryCompiler)return r.getNativeQueryCompiler();if(r===void 0)'
    );
  }
  if (!source.includes('r?.getNativeQueryCompiler')) {
    throw new Error(`Could not patch Prisma native query compiler: ${runtimePath}`);
  }
  const changed = source !== original;
  if (source.includes('sending synchronous request')) {
    if (changed) fs.writeFileSync(runtimePath, source);
    return changed;
  }

  const queryStart = source.search(
    /var [A-Za-z_$][\w$]*=class e\{#e;#t=new [A-Za-z_$][\w$]*;#r;#n;#i;#o;#s;constructor/
  );
  const queryEnd = source.indexOf('};function', queryStart) + 2;
  if (queryStart < 0 || queryEnd < 2) {
    throw new Error(`Could not locate Prisma QueryInterpreter: ${runtimePath}`);
  }

  const queryClass = source.slice(queryStart, queryEnd);
  let syncClass = queryClass
    .replace(/^var [A-Za-z_$][\w$]*=class e\{/, 'var PrismaSyncQueryInterpreter=class PrismaSyncQueryInterpreter{')
    .replace(/static forSql\(t\)\{return new e\(/, 'static forSql(t){return new PrismaSyncQueryInterpreter(');

  const runStart = syncClass.indexOf('async run(t,r){');
  const runEnd = syncClass.indexOf('async interpretNode(t,r){', runStart);
  const errorMapper = syncClass.slice(runStart, runEnd).match(/\.catch\(i=>([A-Za-z_$][\w$]*)\(i\)\)/)?.[1];
  if (!errorMapper) {
    throw new Error(`Could not patch Prisma QueryInterpreter.run: ${runtimePath}`);
  }
  syncClass =
    syncClass.slice(0, runStart) +
    `run(t,r){try{let{value:n}=this.interpretNode(t,{...r,generators:this.#t.snapshot()});return n}catch(i){throw ${errorMapper}(i)}}` +
    syncClass.slice(runEnd).replace('async interpretNode(t,r){', 'interpretNode(t,r){');

  syncClass = syncClass
    .replace(
      /await Promise\.all\(t\.args\.map\(i=>this\.interpretNode\(i,r\)\.then\(o=>o\.value\)\)\)/g,
      't.args.map(i=>this.interpretNode(i,r).value)'
    )
    .replace(
      /await Promise\.all\(t\.args\.children\.map\(async s=>\(\{joinExpr:s,childRecords:\(await this\.interpretNode\(s\.child,r\)\)\.value\}\)\)\)/g,
      't.args.children.map(s=>({joinExpr:s,childRecords:this.interpretNode(s.child,r).value}))'
    )
    .replaceAll('await ', '')
    .replace(
      /#u\(t,r,n\)\{return [A-Za-z_$][\w$]*\(\{query:t,execute:n,provider:this\.#o\?\?r\.provider,tracingHelper:this\.#r,onQuery:this\.#e\}\)\}/,
      '#u(t,r,n){let i=new Date,o=performance.now(),s=n();return this.#e?.({timestamp:i,duration:performance.now()-o,query:t.sql,params:t.args}),s}'
    );

  if (syncClass.includes('await ') || syncClass.includes('Promise.all(')) {
    throw new Error(`Prisma synchronous interpreter still contains async work: ${runtimePath}`);
  }
  source = source.slice(0, queryEnd) + syncClass + source.slice(queryEnd);

  const localStart = source.search(
    /var [A-Za-z_$][\w$]*=class e\{#e;#t;#r;#n;#i;constructor\(t,r,n\)/
  );
  const transactionMarker = source.indexOf('async startTransaction(t){', localStart);
  if (localStart < 0 || transactionMarker < 0) {
    throw new Error(`Could not locate Prisma LocalExecutor: ${runtimePath}`);
  }
  const executeSync =
    'executeSync({plan:t,placeholderValues:r,transaction:n,queryInfo:i}){' +
    'if(n)throw new Error("Synchronous queries cannot run inside an interactive transaction");' +
    'let o=this.#t;if(typeof o.queryRawSync!=="function"||typeof o.executeRawSync!=="function")throw new Error("The Prisma driver adapter does not support synchronous queries");' +
    'let s=t=>({provider:t.provider,queryRaw:r=>({catch:n=>{try{return t.queryRawSync(r)}catch(i){return n(i)}}}),executeRaw:r=>({catch:n=>{try{return t.executeRawSync(r)}catch(i){return n(i)}}})}),a,l={startInternalTransaction:()=>{if(typeof o.startTransactionSync!=="function")throw new Error("The Prisma driver adapter does not support synchronous transactions");return a=o.startTransactionSync(),{id:"sync"}},getTransaction:()=>s(a),commitTransaction:()=>{a.commitSync();a=void 0},rollbackTransaction:()=>{a.rollbackSync();a=void 0}};' +
    'return PrismaSyncQueryInterpreter.forSql({onQuery:this.#e.onQuery,tracingHelper:this.#e.tracingHelper,provider:this.#e.provider,connectionInfo:this.#n}).run(t,{queryable:s(o),transactionManager:{enabled:!0,manager:l},scope:r,sqlCommenter:this.#e.sqlCommenters&&{plugins:this.#e.sqlCommenters,queryInfo:i}})}';
  source = source.slice(0, transactionMarker) + executeSync + source.slice(transactionMarker);

  const requestStart = source.indexOf(
    'async request(t,{interactiveTransaction:r,customDataProxyFetch:n}){'
  );
  const requestEnd = source.indexOf('async requestBatch(', requestStart);
  if (requestStart < 0 || requestEnd < 0) {
    throw new Error(`Could not locate Prisma ClientEngine.request: ${runtimePath}`);
  }
  const request = source.slice(requestStart, requestEnd);
  const requestPrefix = request.match(
    /^async request\(t,\{interactiveTransaction:r,customDataProxyFetch:n\}\)\{([A-Za-z_$][\w$]*)\("sending request"\);let\{executor:i,queryCompiler:o\}=await this\.#a\(\)\.catch\(u=>\{throw this\.#c\(u,JSON\.stringify\(t\)\)\}\),s,a=\{\},l=t\.query;/
  );
  if (!requestPrefix) {
    throw new Error(`Could not patch Prisma ClientEngine.request: ${runtimePath}`);
  }
  const debug = requestPrefix[1];
  const syncRequest = request
    .replace(
      requestPrefix[0],
      `requestSync(t,{interactiveTransaction:r}={}){${debug}("sending synchronous request");if(r)throw new Error("Synchronous queries require a connected Prisma client");if(this.#t.type!=="connected")throw new Error("Connect Prisma before using synchronous queries");let{executor:i,queryCompiler:o}=this.#t.engine,s,a={},l=t.query;`
    )
    .replace('let u=await i.execute({', 'let u=i.executeSync({')
    .replace('customFetch:n?.(globalThis.fetch),', '');
  if (syncRequest.includes('await ') || syncRequest.includes('customDataProxyFetch')) {
    throw new Error(
      `Prisma synchronous request still contains async work: ${runtimePath}: ${
        syncRequest.match(/.{0,40}(?:await |customDataProxyFetch).{0,80}/g)?.join(' | ')
      }`
    );
  }
  source = source.slice(0, requestStart) + syncRequest + source.slice(requestStart);

  fs.writeFileSync(runtimePath, source);
  return true;
}

if (runtimeFiles.length === 0) {
  console.warn('Could not find @prisma/client 7 runtime to patch');
} else {
  for (const runtimePath of runtimeFiles) {
    if (patchRuntime(runtimePath)) {
      console.log(`Patched Prisma 7 synchronous runtime: ${runtimePath}`);
    }
  }
}
