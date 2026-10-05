#!/usr/bin/env node
const e = require('node:fs'),
  r = [
    ...new Set(
      [process.env.INIT_CWD, process.cwd()].filter(Boolean).flatMap(e =>
        ['client.js', 'client.mjs'].flatMap(r => {
          try {
            return [
              require.resolve(`@prisma/client/runtime/${r}`, { paths: [e] }),
            ];
          } catch {
            return [];
          }
        })
      )
    ),
  ],
  t =
    'var PrismaReactNativeCrypto=(()=>{let getRandomValues=value=>{if(globalThis.crypto?.getRandomValues)return globalThis.crypto.getRandomValues(value);for(let i=0;i<value.length;i++)value[i]=Math.random()*256|0;return value},randomBytes=size=>getRandomValues(Buffer.allocUnsafe(size));return{getRandomValues,randomBytes,randomUUID:globalThis.crypto?.randomUUID?.bind(globalThis.crypto)??(()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,value=>{let random=Math.random()*16|0;return(value==="x"?random:random&3|8).toString(16)})),webcrypto:{getRandomValues}}})();',
  a =
    'var process=globalThis.process??{env:{},pid:0,stdout:{isTTY:false},release:{},cwd:()=>"/"};',
  n =
    'var PrismaReactNativeProcess=globalThis.process??{},process={env:PrismaReactNativeProcess.env??{},pid:PrismaReactNativeProcess.pid??0,stdout:PrismaReactNativeProcess.stdout??{isTTY:false},release:PrismaReactNativeProcess.release??{},cwd:typeof PrismaReactNativeProcess.cwd==="function"?PrismaReactNativeProcess.cwd.bind(PrismaReactNativeProcess):()=>"/" ,nextTick:typeof PrismaReactNativeProcess.nextTick==="function"?PrismaReactNativeProcess.nextTick.bind(PrismaReactNativeProcess):(callback,...args)=>Promise.resolve().then(()=>callback(...args))};',
  o = `var {Buffer}=require("buffer");${a}${t}`,
  s = `var {Buffer}=require("buffer");${n}${t}`,
  i = 'class{runInAsyncScope(callback){return callback()}}',
  c =
    'class{constructor(){this.listeners={}}on(name,listener){(this.listeners[name]??=[]).push(listener);return this}emit(name,...args){for(let listener of this.listeners[name]??[])listener(...args)}}';
function l(e, r) {
  e = e.replace(
    'var PrismaReactNativeProcess=globalThis.process??{},process={env:PrismaReactNativeProcess.env??{},pid:PrismaReactNativeProcess.pid??0,stdout:PrismaReactNativeProcess.stdout??{isTTY:false},release:PrismaReactNativeProcess.release??{},cwd:typeof PrismaReactNativeProcess.cwd==="function"?PrismaReactNativeProcess.cwd.bind(PrismaReactNativeProcess):()=>"/"};',
    n
  );
  if (r.endsWith('.mjs'))
    e = (e = e
      .replace(
        /^import \* as __banner_node_module from "node:module";\nimport \* as __banner_node_path from "node:path";\nimport \* as process from "node:process";\nimport \* as __banner_node_url from "node:url";\nconst __filename = __banner_node_url\.fileURLToPath\(import\.meta\.url\);\nglobalThis\['__dirname'\] = __banner_node_path\.dirname\(__filename\);\nconst require = __banner_node_module\.createRequire\(import\.meta\.url\);\n/,
        `import { Buffer } from "buffer";\n${n}\nglobalThis['__dirname']='/';\n${t}\nconst require=()=>PrismaReactNativeCrypto;\n`
      )
      .replace(
        /import ([A-Za-z_$][\w$]*) from"node:path";/g,
        'var $1={sep:"/",posix:{sep:"/"}};'
      )
      .replace(
        /import ([A-Za-z_$][\w$]*) from"node:fs";/g,
        'var $1={readFileSync:()=>{throw new Error("File access is unavailable")}};'
      )
      .replace(
        /import ([A-Za-z_$][\w$]*) from"node:os";/g,
        'var $1={hostname:()=>"react-native"};'
      )
      .replace(
        /import\{AsyncResource as ([A-Za-z_$][\w$]*)\}from"node:async_hooks";import\{EventEmitter as ([A-Za-z_$][\w$]*)\}from"node:events";/g,
        `var $1=${i},$2=${c};`
      )
      .replace(
        /import\{webcrypto as ([A-Za-z_$][\w$]*)\}from"node:crypto";/g,
        'var $1=PrismaReactNativeCrypto.webcrypto;'
      )
      .replace(
        /import ([A-Za-z_$][\w$]*) from"node:crypto";/g,
        'var $1=PrismaReactNativeCrypto;'
      )).replace(
      'const process=globalThis.process??{env:{},pid:0,stdout:{isTTY:false},release:{},cwd:()=>"/"};',
      n
    );
  else {
    let r = e.replace(/^"use strict";/, '');
    for (const e of [o, s]) for (; r.startsWith(e);) r = r.slice(e.length);
    e = (e = `"use strict";${s}${r}`)
      .replace(
        /var ([A-Za-z_$][\w$]*)=[A-Za-z_$][\w$]*\(require\("node:path"\)(?:,1)?\);/g,
        'var $1={default:{sep:"/",posix:{sep:"/"}}};'
      )
      .replace(
        /var ([A-Za-z_$][\w$]*)=[A-Za-z_$][\w$]*\(require\("node:fs"\)(?:,1)?\);/g,
        'var $1={default:{readFileSync:()=>{throw new Error("File access is unavailable")}}};'
      )
      .replace(
        /var ([A-Za-z_$][\w$]*)=[A-Za-z_$][\w$]*\(require\("node:os"\)(?:,1)?\);/g,
        'var $1={default:{hostname:()=>"react-native"}};'
      )
      .replace(
        /var ([A-Za-z_$][\w$]*)=require\("node:async_hooks"\),([A-Za-z_$][\w$]*)=require\("node:events"\);/g,
        `var $1={AsyncResource:${i}},$2={EventEmitter:${c}};`
      );
  }
  e = e
    .replace(/[A-Za-z_$][\w$]*\("node:crypto"\)/g, 'PrismaReactNativeCrypto')
    .replace(/import\("node:crypto"\)/g, 'PrismaReactNativeCrypto')
    .replace(
      'globalThis.crypto??await PrismaReactNativeCrypto',
      'PrismaReactNativeCrypto'
    )
    .replace(
      /Buffer\.from\(([A-Za-z_$][\w$]*),"base64url"\)/g,
      'Buffer.from($1.replace(/-/g,"+").replace(/_/g,"/"),"base64")'
    );
  e = e.replace(
    /(?<![\w$&])([A-Za-z_$][\w$]*) instanceof SharedArrayBuffer/g,
    '(typeof SharedArrayBuffer!=="undefined"&&$1 instanceof SharedArrayBuffer)'
  );
  const a = e.match(
    /["']node:(?:module|path|process|url|crypto|fs|os|async_hooks|events)["']/
  )?.[0];
  if (a) throw new Error(`Unsupported Node runtime import ${a}: ${r}`);
  return e;
}
function u(r) {
  let t = e.readFileSync(r, 'utf8');
  const a = t;
  if (!t.includes('7.9.1'))
    throw new Error(`Unsupported @prisma/client runtime: ${r}`);
  if (
    ((t = l(t, r)),
    t.includes('getNativeQueryCompiler') ||
      (t = t.replace(
        'async loadQueryCompiler(e){let{clientVersion:t,compilerWasm:r}=e;if(r===void 0)',
        'async loadQueryCompiler(e){let{clientVersion:t,compilerWasm:r}=e;if(r?.getNativeQueryCompiler)return r.getNativeQueryCompiler();if(r===void 0)'
      )),
    !t.includes('r?.getNativeQueryCompiler'))
  )
    throw new Error(`Could not patch Prisma native query compiler: ${r}`);
  if (!t.includes('react-native-prisma.client')) {
    const _context = t.match(
      /([A-Za-z_$][\w$]*)\("\$parent",\(\)=>([A-Za-z_$][\w$]*)\._appliedParent\)\];return [A-Za-z_$][\w$]*\(\{\},[A-Za-z_$][\w$]*\)/
    );
    if (!_context)
      throw new Error(`Could not patch Prisma model client context: ${r}`);
    t = t.replace(
      _context[0],
      _context[0].replace(
        ')];return ',
        `),${_context[1]}(Symbol.for("react-native-prisma.client"),()=>${_context[2]})];return `
      )
    );
  }
  if (!t.includes('mapSyncQueryEngineResult(')) {
    const _apply = t.match(
      /function ([A-Za-z_$][\w$]*)\(\{result:e,modelName:t,args:r,extensions:n,runtimeDataModel:i,globalOmit:o\}\)/
    )?.[1];
    const _method = 'mapQueryEngineResult({dataPath:t,unpacker:r},n){';
    if (!_apply || !t.includes(_method))
      throw new Error(`Could not patch Prisma result extensions: ${r}`);
    t = t.replace(
      _method,
      `mapSyncQueryEngineResult(t,r){return ${_apply}({result:this.mapQueryEngineResult(t,r),modelName:t.modelName,args:t.args,extensions:t.extensions,runtimeDataModel:this.client._runtimeDataModel,globalOmit:t.globalOmit})}${_method}`
    );
  }
  const n = t !== a;
  if (t.includes('sending synchronous request'))
    return (n && e.writeFileSync(r, t), n);
  const o = t.search(
      /var [A-Za-z_$][\w$]*=class e\{#e;#t=new [A-Za-z_$][\w$]*;#r;#n;#i;#o;#s;constructor/
    ),
    s = t.indexOf('};function', o) + 2;
  if (o < 0 || s < 2)
    throw new Error(`Could not locate Prisma QueryInterpreter: ${r}`);
  let i = t
    .slice(o, s)
    .replace(
      /^var [A-Za-z_$][\w$]*=class e\{/,
      'var PrismaSyncQueryInterpreter=class PrismaSyncQueryInterpreter{'
    )
    .replace(
      /static forSql\(t\)\{return new e\(/,
      'static forSql(t){return new PrismaSyncQueryInterpreter('
    );
  const c = i.indexOf('async run(t,r){'),
    u = i.indexOf('async interpretNode(t,r){', c),
    p = i.slice(c, u).match(/\.catch\(i=>([A-Za-z_$][\w$]*)\(i\)\)/)?.[1];
  if (!p) throw new Error(`Could not patch Prisma QueryInterpreter.run: ${r}`);
  if (
    ((i =
      i.slice(0, c) +
      `run(t,r){try{let{value:n}=this.interpretNode(t,{...r,generators:this.#t.snapshot()});return n}catch(i){throw ${p}(i)}}` +
      i.slice(u).replace('async interpretNode(t,r){', 'interpretNode(t,r){')),
    (i = i
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
      )),
    i.includes('await ') || i.includes('Promise.all('))
  )
    throw new Error(
      `Prisma synchronous interpreter still contains async work: ${r}`
    );
  t = t.slice(0, s) + i + t.slice(s);
  const m = t.search(
      /var [A-Za-z_$][\w$]*=class e\{#e;#t;#r;#n;#i;constructor\(t,r,n\)/
    ),
    d = t.indexOf('async startTransaction(t){', m);
  if (m < 0 || d < 0)
    throw new Error(`Could not locate Prisma LocalExecutor: ${r}`);
  t =
    t.slice(0, d) +
    'executeSync({plan:t,placeholderValues:r,transaction:n,queryInfo:i}){if(n)throw new Error("Synchronous queries cannot run inside an interactive transaction");let o=this.#t;if(typeof o.queryRawSync!=="function"||typeof o.executeRawSync!=="function")throw new Error("The Prisma driver adapter does not support synchronous queries");let s=t=>({provider:t.provider,queryRaw:r=>({catch:n=>{try{return t.queryRawSync(r)}catch(i){return n(i)}}}),executeRaw:r=>({catch:n=>{try{return t.executeRawSync(r)}catch(i){return n(i)}}})}),a,l={startInternalTransaction:()=>{if(typeof o.startTransactionSync!=="function")throw new Error("The Prisma driver adapter does not support synchronous transactions");return a=o.startTransactionSync(),{id:"sync"}},getTransaction:()=>s(a),commitTransaction:()=>{a.commitSync();a=void 0},rollbackTransaction:()=>{a.rollbackSync();a=void 0}};return PrismaSyncQueryInterpreter.forSql({onQuery:this.#e.onQuery,tracingHelper:this.#e.tracingHelper,provider:this.#e.provider,connectionInfo:this.#n}).run(t,{queryable:s(o),transactionManager:{enabled:!0,manager:l},scope:r,sqlCommenter:this.#e.sqlCommenters&&{plugins:this.#e.sqlCommenters,queryInfo:i}})}' +
    t.slice(d);
  const h = t.indexOf(
      'async request(t,{interactiveTransaction:r,customDataProxyFetch:n}){'
    ),
    y = t.indexOf('async requestBatch(', h);
  if (h < 0 || y < 0)
    throw new Error(`Could not locate Prisma ClientEngine.request: ${r}`);
  const f = t.slice(h, y),
    w = f.match(
      /^async request\(t,\{interactiveTransaction:r,customDataProxyFetch:n\}\)\{([A-Za-z_$][\w$]*)\("sending request"\);let\{executor:i,queryCompiler:o\}=await this\.#a\(\)\.catch\(u=>\{throw this\.#c\(u,JSON\.stringify\(t\)\)\}\),s,a=\{\},l=t\.query;/
    );
  if (!w) throw new Error(`Could not patch Prisma ClientEngine.request: ${r}`);
  const $ = w[1],
    v = f
      .replace(
        w[0],
        `requestSync(t,{interactiveTransaction:r}={}){${$}("sending synchronous request");if(r)throw new Error("Synchronous queries require a connected Prisma client");if(this.#t.type!=="connected")throw new Error("Connect Prisma before using synchronous queries");let{executor:i,queryCompiler:o}=this.#t.engine,s,a={},l=t.query;`
      )
      .replace('let u=await i.execute({', 'let u=i.executeSync({')
      .replace('customFetch:n?.(globalThis.fetch),', '');
  if (v.includes('await ') || v.includes('customDataProxyFetch'))
    throw new Error(
      `Prisma synchronous request still contains async work: ${r}: ${v.match(/.{0,40}(?:await |customDataProxyFetch).{0,80}/g)?.join(' | ')}`
    );
  return ((t = t.slice(0, h) + v + t.slice(h)), e.writeFileSync(r, t), !0);
}
if (0 === r.length)
  console.warn('Could not find @prisma/client 7 runtime to patch');
else
  for (const e of r)
    u(e) && console.log(`Patched Prisma 7 synchronous runtime: ${e}`);

const _path = require('node:path');
for (const _directory of new Set(
  [process.env.INIT_CWD, process.cwd()].filter(Boolean)
)) {
  let _package;
  try {
    _package = require.resolve('prisma/package.json', {
      paths: [_directory],
    });
  } catch (_error) {
    if (_error.code === 'MODULE_NOT_FOUND') continue;
    throw _error;
  }
  if (JSON.parse(e.readFileSync(_package, 'utf8')).version !== '7.9.1') {
    throw new Error(`Unsupported Prisma generator: ${_package}`);
  }
  const _cli = _path.join(_path.dirname(_package), 'build/cli.js');
  const _original = e.readFileSync(_cli, 'utf8');
  const _source = _original
    .replace(
      /;\/\* (?:@song-react\/(?:expo-prisma|react-native-prisma)|@prisma\/react-native) prepare \*\/\{[\s\S]*?\n  \}/g,
      ''
    )
    .replace(
      /\/\* (?:@song-react\/(?:expo-prisma|react-native-prisma)|@prisma\/react-native) validate:start \*\/[\s\S]*?\/\* (?:@song-react\/(?:expo-prisma|react-native-prisma)|@prisma\/react-native) validate:end \*\//g,
      ''
    );
  const _start = 'await i3e({datamodel:r.datamodel,';
  const _target =
    'compilerBuild:S8t(r.generator.config.compilerBuild,a)})}};function S8t';
  if (
    _source.split(_target).length !== 2 ||
    _source.split(_start).length !== 2
  ) {
    throw new Error(`Could not patch Prisma client generator: ${_cli}`);
  }
  const _resolve = `const _path=require("node:path");
    let _root;
    try {
      _root=_path.resolve(_path.dirname(require.resolve("@prisma/react-native",{paths:[_path.dirname(r.schemaPath)]})),"../..");
    } catch(_error) {
      if(_error.code!=="MODULE_NOT_FOUND")throw _error;
    }`;
  const _validation = `/* @prisma/react-native validate:start */{
    ${_resolve}
    if(_root&&r.datasources[0]?.activeProvider==="sqlite") {
      if(r.otherGenerators?.some(_generator=>_generator.provider.value==="prisma-client"))throw new Error("自动 @prisma/client 入口只支持一个 Client generator");
      require(_path.join(_root,"scripts/prepare-client.cjs")).validateOutput(o,r.schemaPath);
    }
  }/* @prisma/react-native validate:end */`;
  const _hook = `;/* @prisma/react-native prepare */{
    ${_resolve}
    if(_root&&r.datasources[0]?.activeProvider==="sqlite") {
      require("node:child_process").execFileSync(process.execPath,[_path.join(_root,"scripts/prepare-client.cjs"),o,_path.join(_path.dirname(r.schemaPath),"migrations"),r.schemaPath],{stdio:"inherit"});
    }
  }`;
  const _patched = _source
    .replace(_start, `${_validation}${_start}`)
    .replace(
      _target,
      `compilerBuild:S8t(r.generator.config.compilerBuild,a)})${_hook}}};function S8t`
    );
  if (_patched === _original) continue;
  e.writeFileSync(_cli, _patched);
  console.log(`Patched Prisma client generator: ${_cli}`);
}
