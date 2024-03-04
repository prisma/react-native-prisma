"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// ../../helpers/compile/plugins/fill-plugin/fillers/process.ts
function noop(v) {
  return () => v;
}
function getProcess() {
  return process;
}
var process;
var init_process = __esm({
  "../../helpers/compile/plugins/fill-plugin/fillers/process.ts"() {
    "use strict";
    process = {
      abort: noop(void 0),
      addListener: noop(getProcess()),
      allowedNodeEnvironmentFlags: /* @__PURE__ */ new Set(),
      arch: "x64",
      argv: ["/bin/node"],
      argv0: "node",
      chdir: noop(void 0),
      config: {
        target_defaults: {
          cflags: [],
          default_configuration: "",
          defines: [],
          include_dirs: [],
          libraries: []
        },
        variables: {
          clang: 0,
          host_arch: "x64",
          node_install_npm: false,
          node_install_waf: false,
          node_prefix: "",
          node_shared_openssl: false,
          node_shared_v8: false,
          node_shared_zlib: false,
          node_use_dtrace: false,
          node_use_etw: false,
          node_use_openssl: false,
          target_arch: "x64",
          v8_no_strict_aliasing: 0,
          v8_use_snapshot: false,
          visibility: ""
        }
      },
      connected: false,
      cpuUsage: () => ({ user: 0, system: 0 }),
      cwd: () => "/",
      debugPort: 0,
      disconnect: noop(void 0),
      constrainedMemory: () => void 0,
      emit: noop(getProcess()),
      emitWarning: noop(void 0),
      env: {},
      eventNames: () => [],
      execArgv: [],
      execPath: "/",
      exit: noop(void 0),
      features: {
        inspector: false,
        debug: false,
        uv: false,
        ipv6: false,
        tls_alpn: false,
        tls_sni: false,
        tls_ocsp: false,
        tls: false
      },
      getMaxListeners: noop(0),
      getegid: noop(0),
      geteuid: noop(0),
      getgid: noop(0),
      getgroups: noop([]),
      getuid: noop(0),
      hasUncaughtExceptionCaptureCallback: noop(false),
      hrtime: noop([0, 0]),
      platform: "linux",
      kill: noop(true),
      listenerCount: noop(0),
      listeners: noop([]),
      memoryUsage: noop({
        arrayBuffers: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
        rss: 0
      }),
      nextTick: (fn2, ...args) => {
        setTimeout(() => {
          fn2(...args);
        }, 0);
      },
      off: noop(getProcess()),
      on: noop(getProcess()),
      once: noop(getProcess()),
      openStdin: noop({}),
      pid: 0,
      ppid: 0,
      prependListener: noop(getProcess()),
      prependOnceListener: noop(getProcess()),
      rawListeners: noop([]),
      release: {
        name: "node"
      },
      removeAllListeners: noop(getProcess()),
      removeListener: noop(getProcess()),
      resourceUsage: noop({
        fsRead: 0,
        fsWrite: 0,
        involuntaryContextSwitches: 0,
        ipcReceived: 0,
        ipcSent: 0,
        majorPageFault: 0,
        maxRSS: 0,
        minorPageFault: 0,
        sharedMemorySize: 0,
        signalsCount: 0,
        swappedOut: 0,
        systemCPUTime: 0,
        unsharedDataSize: 0,
        unsharedStackSize: 0,
        userCPUTime: 0,
        voluntaryContextSwitches: 0
      }),
      setMaxListeners: noop(getProcess()),
      setUncaughtExceptionCaptureCallback: noop(void 0),
      setegid: noop(void 0),
      seteuid: noop(void 0),
      setgid: noop(void 0),
      setgroups: noop(void 0),
      setuid: noop(void 0),
      // See https://nodejs.org/api/process.html#processsourcemapsenabled
      // Added in: v20.7.0
      sourceMapsEnabled: false,
      stderr: {
        fd: 2
      },
      stdin: {
        fd: 0
      },
      stdout: {
        fd: 1
      },
      title: "node",
      traceDeprecation: false,
      umask: noop(0),
      uptime: noop(0),
      version: "",
      versions: {
        http_parser: "",
        node: "",
        v8: "",
        ares: "",
        uv: "",
        zlib: "",
        modules: "",
        openssl: ""
      }
    };
  }
});

// ../../helpers/compile/plugins/fill-plugin/fillers/perf_hooks.ts
var _a, performance;
var init_perf_hooks = __esm({
  "../../helpers/compile/plugins/fill-plugin/fillers/perf_hooks.ts"() {
    "use strict";
    performance = (_a = globalThis["performance"]) != null ? _a : (() => {
      const origin = Date.now();
      return {
        now: () => Date.now() - origin
      };
    })();
  }
});

// ../../helpers/compile/plugins/fill-plugin/fillers/function.ts
var fn;
var init_function = __esm({
  "../../helpers/compile/plugins/fill-plugin/fillers/function.ts"() {
    "use strict";
    fn = () => {
    };
    fn.prototype = fn;
  }
});

// ../../helpers/compile/plugins/fill-plugin/fillers/weakref.ts
var WeakRef;
var init_weakref = __esm({
  "../../helpers/compile/plugins/fill-plugin/fillers/weakref.ts"() {
    "use strict";
    WeakRef = class {
      constructor(value) {
        this.value = value;
      }
      deref() {
        return this.value;
      }
    };
  }
});

// ../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/buffer4d28b58e.js
var require_buffer4d28b58e = __commonJS({
  "../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/buffer4d28b58e.js"(exports2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var q = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
    var H = q((C) => {
      "use strict";
      C.byteLength = sr;
      C.toByteArray = ar;
      C.fromByteArray = xr;
      var B = [], w = [], pr = typeof Uint8Array < "u" ? Uint8Array : Array, N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (m = 0, W = N.length; m < W; ++m)
        B[m] = N[m], w[N.charCodeAt(m)] = m;
      var m, W;
      w[45] = 62;
      w[95] = 63;
      function j(i) {
        var r = i.length;
        if (r % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var t = i.indexOf("=");
        t === -1 && (t = r);
        var n = t === r ? 0 : 4 - t % 4;
        return [t, n];
      }
      function sr(i) {
        var r = j(i), t = r[0], n = r[1];
        return (t + n) * 3 / 4 - n;
      }
      function lr(i, r, t) {
        return (r + t) * 3 / 4 - t;
      }
      function ar(i) {
        var r, t = j(i), n = t[0], e = t[1], o = new pr(lr(i, n, e)), u = 0, f = e > 0 ? n - 4 : n, c;
        for (c = 0; c < f; c += 4)
          r = w[i.charCodeAt(c)] << 18 | w[i.charCodeAt(c + 1)] << 12 | w[i.charCodeAt(c + 2)] << 6 | w[i.charCodeAt(c + 3)], o[u++] = r >> 16 & 255, o[u++] = r >> 8 & 255, o[u++] = r & 255;
        return e === 2 && (r = w[i.charCodeAt(c)] << 2 | w[i.charCodeAt(c + 1)] >> 4, o[u++] = r & 255), e === 1 && (r = w[i.charCodeAt(c)] << 10 | w[i.charCodeAt(c + 1)] << 4 | w[i.charCodeAt(c + 2)] >> 2, o[u++] = r >> 8 & 255, o[u++] = r & 255), o;
      }
      function yr(i) {
        return B[i >> 18 & 63] + B[i >> 12 & 63] + B[i >> 6 & 63] + B[i & 63];
      }
      function wr(i, r, t) {
        for (var n, e = [], o = r; o < t; o += 3)
          n = (i[o] << 16 & 16711680) + (i[o + 1] << 8 & 65280) + (i[o + 2] & 255), e.push(yr(n));
        return e.join("");
      }
      function xr(i) {
        for (var r, t = i.length, n = t % 3, e = [], o = 16383, u = 0, f = t - n; u < f; u += o)
          e.push(wr(i, u, u + o > f ? f : u + o));
        return n === 1 ? (r = i[t - 1], e.push(B[r >> 2] + B[r << 4 & 63] + "==")) : n === 2 && (r = (i[t - 2] << 8) + i[t - 1], e.push(B[r >> 10] + B[r >> 4 & 63] + B[r << 2 & 63] + "=")), e.join("");
      }
    });
    var V = q((M) => {
      M.read = function(i, r, t, n, e) {
        var o, u, f = e * 8 - n - 1, c = (1 << f) - 1, l = c >> 1, s = -7, p = t ? e - 1 : 0, F = t ? -1 : 1, x = i[r + p];
        for (p += F, o = x & (1 << -s) - 1, x >>= -s, s += f; s > 0; o = o * 256 + i[r + p], p += F, s -= 8)
          ;
        for (u = o & (1 << -s) - 1, o >>= -s, s += n; s > 0; u = u * 256 + i[r + p], p += F, s -= 8)
          ;
        if (o === 0)
          o = 1 - l;
        else {
          if (o === c)
            return u ? NaN : (x ? -1 : 1) * (1 / 0);
          u = u + Math.pow(2, n), o = o - l;
        }
        return (x ? -1 : 1) * u * Math.pow(2, o - n);
      };
      M.write = function(i, r, t, n, e, o) {
        var u, f, c, l = o * 8 - e - 1, s = (1 << l) - 1, p = s >> 1, F = e === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = n ? 0 : o - 1, L = n ? 1 : -1, cr = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
        for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, u = s) : (u = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -u)) < 1 && (u--, c *= 2), u + p >= 1 ? r += F / c : r += F * Math.pow(2, 1 - p), r * c >= 2 && (u++, c /= 2), u + p >= s ? (f = 0, u = s) : u + p >= 1 ? (f = (r * c - 1) * Math.pow(2, e), u = u + p) : (f = r * Math.pow(2, p - 1) * Math.pow(2, e), u = 0)); e >= 8; i[t + x] = f & 255, x += L, f /= 256, e -= 8)
          ;
        for (u = u << e | f, l += e; l > 0; i[t + x] = u & 255, x += L, u /= 256, l -= 8)
          ;
        i[t + x - L] |= cr * 128;
      };
    });
    var k = H();
    var U = V();
    var X = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    exports2.Buffer = h;
    exports2.SlowBuffer = Ir;
    exports2.INSPECT_MAX_BYTES = 50;
    var S = 2147483647;
    exports2.kMaxLength = S;
    h.TYPED_ARRAY_SUPPORT = Br();
    !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Br() {
      try {
        let i = new Uint8Array(1), r = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i, r), i.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(h.prototype, "parent", { enumerable: true, get: function() {
      if (h.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(h.prototype, "offset", { enumerable: true, get: function() {
      if (h.isBuffer(this))
        return this.byteOffset;
    } });
    function d(i) {
      if (i > S)
        throw new RangeError('The value "' + i + '" is invalid for option "size"');
      let r = new Uint8Array(i);
      return Object.setPrototypeOf(r, h.prototype), r;
    }
    function h(i, r, t) {
      if (typeof i == "number") {
        if (typeof r == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return P2(i);
      }
      return Z(i, r, t);
    }
    h.poolSize = 8192;
    function Z(i, r, t) {
      if (typeof i == "string")
        return dr(i, r);
      if (ArrayBuffer.isView(i))
        return gr(i);
      if (i == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
      if (E(i, ArrayBuffer) || i && E(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (E(i, SharedArrayBuffer) || i && E(i.buffer, SharedArrayBuffer)))
        return $2(i, r, t);
      if (typeof i == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = i.valueOf && i.valueOf();
      if (n != null && n !== i)
        return h.from(n, r, t);
      let e = mr(i);
      if (e)
        return e;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function")
        return h.from(i[Symbol.toPrimitive]("string"), r, t);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
    }
    h.from = function(i, r, t) {
      return Z(i, r, t);
    };
    Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(h, Uint8Array);
    function Q(i) {
      if (typeof i != "number")
        throw new TypeError('"size" argument must be of type number');
      if (i < 0)
        throw new RangeError('The value "' + i + '" is invalid for option "size"');
    }
    function Er(i, r, t) {
      return Q(i), i <= 0 ? d(i) : r !== void 0 ? typeof t == "string" ? d(i).fill(r, t) : d(i).fill(r) : d(i);
    }
    h.alloc = function(i, r, t) {
      return Er(i, r, t);
    };
    function P2(i) {
      return Q(i), d(i < 0 ? 0 : O(i) | 0);
    }
    h.allocUnsafe = function(i) {
      return P2(i);
    };
    h.allocUnsafeSlow = function(i) {
      return P2(i);
    };
    function dr(i, r) {
      if ((typeof r != "string" || r === "") && (r = "utf8"), !h.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
      let t = v(i, r) | 0, n = d(t), e = n.write(i, r);
      return e !== t && (n = n.slice(0, e)), n;
    }
    function D(i) {
      let r = i.length < 0 ? 0 : O(i.length) | 0, t = d(r);
      for (let n = 0; n < r; n += 1)
        t[n] = i[n] & 255;
      return t;
    }
    function gr(i) {
      if (E(i, Uint8Array)) {
        let r = new Uint8Array(i);
        return $2(r.buffer, r.byteOffset, r.byteLength);
      }
      return D(i);
    }
    function $2(i, r, t) {
      if (r < 0 || i.byteLength < r)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (i.byteLength < r + (t || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return r === void 0 && t === void 0 ? n = new Uint8Array(i) : t === void 0 ? n = new Uint8Array(i, r) : n = new Uint8Array(i, r, t), Object.setPrototypeOf(n, h.prototype), n;
    }
    function mr(i) {
      if (h.isBuffer(i)) {
        let r = O(i.length) | 0, t = d(r);
        return t.length === 0 || i.copy(t, 0, 0, r), t;
      }
      if (i.length !== void 0)
        return typeof i.length != "number" || Y(i.length) ? d(0) : D(i);
      if (i.type === "Buffer" && Array.isArray(i.data))
        return D(i.data);
    }
    function O(i) {
      if (i >= S)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + S.toString(16) + " bytes");
      return i | 0;
    }
    function Ir(i) {
      return +i != i && (i = 0), h.alloc(+i);
    }
    h.isBuffer = function(r) {
      return r != null && r._isBuffer === true && r !== h.prototype;
    };
    h.compare = function(r, t) {
      if (E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), E(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(r) || !h.isBuffer(t))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (r === t)
        return 0;
      let n = r.length, e = t.length;
      for (let o = 0, u = Math.min(n, e); o < u; ++o)
        if (r[o] !== t[o]) {
          n = r[o], e = t[o];
          break;
        }
      return n < e ? -1 : e < n ? 1 : 0;
    };
    h.isEncoding = function(r) {
      switch (String(r).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    h.concat = function(r, t) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0)
        return h.alloc(0);
      let n;
      if (t === void 0)
        for (t = 0, n = 0; n < r.length; ++n)
          t += r[n].length;
      let e = h.allocUnsafe(t), o = 0;
      for (n = 0; n < r.length; ++n) {
        let u = r[n];
        if (E(u, Uint8Array))
          o + u.length > e.length ? (h.isBuffer(u) || (u = h.from(u)), u.copy(e, o)) : Uint8Array.prototype.set.call(e, u, o);
        else if (h.isBuffer(u))
          u.copy(e, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += u.length;
      }
      return e;
    };
    function v(i, r) {
      if (h.isBuffer(i))
        return i.length;
      if (ArrayBuffer.isView(i) || E(i, ArrayBuffer))
        return i.byteLength;
      if (typeof i != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
      let t = i.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && t === 0)
        return 0;
      let e = false;
      for (; ; )
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return t;
          case "utf8":
          case "utf-8":
            return b(i).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return t * 2;
          case "hex":
            return t >>> 1;
          case "base64":
            return fr(i).length;
          default:
            if (e)
              return n ? -1 : b(i).length;
            r = ("" + r).toLowerCase(), e = true;
        }
    }
    h.byteLength = v;
    function Fr(i, r, t) {
      let n = false;
      if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
        return "";
      for (i || (i = "utf8"); ; )
        switch (i) {
          case "hex":
            return Mr(this, r, t);
          case "utf8":
          case "utf-8":
            return tr(this, r, t);
          case "ascii":
            return Lr(this, r, t);
          case "latin1":
          case "binary":
            return Nr(this, r, t);
          case "base64":
            return Sr(this, r, t);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return kr(this, r, t);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + i);
            i = (i + "").toLowerCase(), n = true;
        }
    }
    h.prototype._isBuffer = true;
    function I(i, r, t) {
      let n = i[r];
      i[r] = i[t], i[t] = n;
    }
    h.prototype.swap16 = function() {
      let r = this.length;
      if (r % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t = 0; t < r; t += 2)
        I(this, t, t + 1);
      return this;
    };
    h.prototype.swap32 = function() {
      let r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t = 0; t < r; t += 4)
        I(this, t, t + 3), I(this, t + 1, t + 2);
      return this;
    };
    h.prototype.swap64 = function() {
      let r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t = 0; t < r; t += 8)
        I(this, t, t + 7), I(this, t + 1, t + 6), I(this, t + 2, t + 5), I(this, t + 3, t + 4);
      return this;
    };
    h.prototype.toString = function() {
      let r = this.length;
      return r === 0 ? "" : arguments.length === 0 ? tr(this, 0, r) : Fr.apply(this, arguments);
    };
    h.prototype.toLocaleString = h.prototype.toString;
    h.prototype.equals = function(r) {
      if (!h.isBuffer(r))
        throw new TypeError("Argument must be a Buffer");
      return this === r ? true : h.compare(this, r) === 0;
    };
    h.prototype.inspect = function() {
      let r = "", t = exports2.INSPECT_MAX_BYTES;
      return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
    };
    X && (h.prototype[X] = h.prototype.inspect);
    h.prototype.compare = function(r, t, n, e, o) {
      if (E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), !h.isBuffer(r))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
      if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), e === void 0 && (e = 0), o === void 0 && (o = this.length), t < 0 || n > r.length || e < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (e >= o && t >= n)
        return 0;
      if (e >= o)
        return -1;
      if (t >= n)
        return 1;
      if (t >>>= 0, n >>>= 0, e >>>= 0, o >>>= 0, this === r)
        return 0;
      let u = o - e, f = n - t, c = Math.min(u, f), l = this.slice(e, o), s = r.slice(t, n);
      for (let p = 0; p < c; ++p)
        if (l[p] !== s[p]) {
          u = l[p], f = s[p];
          break;
        }
      return u < f ? -1 : f < u ? 1 : 0;
    };
    function rr(i, r, t, n, e) {
      if (i.length === 0)
        return -1;
      if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Y(t) && (t = e ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
        if (e)
          return -1;
        t = i.length - 1;
      } else if (t < 0)
        if (e)
          t = 0;
        else
          return -1;
      if (typeof r == "string" && (r = h.from(r, n)), h.isBuffer(r))
        return r.length === 0 ? -1 : z(i, r, t, n, e);
      if (typeof r == "number")
        return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? e ? Uint8Array.prototype.indexOf.call(i, r, t) : Uint8Array.prototype.lastIndexOf.call(i, r, t) : z(i, [r], t, n, e);
      throw new TypeError("val must be string, number or Buffer");
    }
    function z(i, r, t, n, e) {
      let o = 1, u = i.length, f = r.length;
      if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (i.length < 2 || r.length < 2)
          return -1;
        o = 2, u /= 2, f /= 2, t /= 2;
      }
      function c(s, p) {
        return o === 1 ? s[p] : s.readUInt16BE(p * o);
      }
      let l;
      if (e) {
        let s = -1;
        for (l = t; l < u; l++)
          if (c(i, l) === c(r, s === -1 ? 0 : l - s)) {
            if (s === -1 && (s = l), l - s + 1 === f)
              return s * o;
          } else
            s !== -1 && (l -= l - s), s = -1;
      } else
        for (t + f > u && (t = u - f), l = t; l >= 0; l--) {
          let s = true;
          for (let p = 0; p < f; p++)
            if (c(i, l + p) !== c(r, p)) {
              s = false;
              break;
            }
          if (s)
            return l;
        }
      return -1;
    }
    h.prototype.includes = function(r, t, n) {
      return this.indexOf(r, t, n) !== -1;
    };
    h.prototype.indexOf = function(r, t, n) {
      return rr(this, r, t, n, true);
    };
    h.prototype.lastIndexOf = function(r, t, n) {
      return rr(this, r, t, n, false);
    };
    function Ar(i, r, t, n) {
      t = Number(t) || 0;
      let e = i.length - t;
      n ? (n = Number(n), n > e && (n = e)) : n = e;
      let o = r.length;
      n > o / 2 && (n = o / 2);
      let u;
      for (u = 0; u < n; ++u) {
        let f = parseInt(r.substr(u * 2, 2), 16);
        if (Y(f))
          return u;
        i[t + u] = f;
      }
      return u;
    }
    function Ur(i, r, t, n) {
      return _(b(r, i.length - t), i, t, n);
    }
    function Rr(i, r, t, n) {
      return _(Pr(r), i, t, n);
    }
    function Tr(i, r, t, n) {
      return _(fr(r), i, t, n);
    }
    function Cr(i, r, t, n) {
      return _(Or(r, i.length - t), i, t, n);
    }
    h.prototype.write = function(r, t, n, e) {
      if (t === void 0)
        e = "utf8", n = this.length, t = 0;
      else if (n === void 0 && typeof t == "string")
        e = t, n = this.length, t = 0;
      else if (isFinite(t))
        t = t >>> 0, isFinite(n) ? (n = n >>> 0, e === void 0 && (e = "utf8")) : (e = n, n = void 0);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - t;
      if ((n === void 0 || n > o) && (n = o), r.length > 0 && (n < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      e || (e = "utf8");
      let u = false;
      for (; ; )
        switch (e) {
          case "hex":
            return Ar(this, r, t, n);
          case "utf8":
          case "utf-8":
            return Ur(this, r, t, n);
          case "ascii":
          case "latin1":
          case "binary":
            return Rr(this, r, t, n);
          case "base64":
            return Tr(this, r, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Cr(this, r, t, n);
          default:
            if (u)
              throw new TypeError("Unknown encoding: " + e);
            e = ("" + e).toLowerCase(), u = true;
        }
    };
    h.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function Sr(i, r, t) {
      return r === 0 && t === i.length ? k.fromByteArray(i) : k.fromByteArray(i.slice(r, t));
    }
    function tr(i, r, t) {
      t = Math.min(i.length, t);
      let n = [], e = r;
      for (; e < t; ) {
        let o = i[e], u = null, f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (e + f <= t) {
          let c, l, s, p;
          switch (f) {
            case 1:
              o < 128 && (u = o);
              break;
            case 2:
              c = i[e + 1], (c & 192) === 128 && (p = (o & 31) << 6 | c & 63, p > 127 && (u = p));
              break;
            case 3:
              c = i[e + 1], l = i[e + 2], (c & 192) === 128 && (l & 192) === 128 && (p = (o & 15) << 12 | (c & 63) << 6 | l & 63, p > 2047 && (p < 55296 || p > 57343) && (u = p));
              break;
            case 4:
              c = i[e + 1], l = i[e + 2], s = i[e + 3], (c & 192) === 128 && (l & 192) === 128 && (s & 192) === 128 && (p = (o & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | s & 63, p > 65535 && p < 1114112 && (u = p));
          }
        }
        u === null ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), n.push(u), e += f;
      }
      return _r(n);
    }
    var J = 4096;
    function _r(i) {
      let r = i.length;
      if (r <= J)
        return String.fromCharCode.apply(String, i);
      let t = "", n = 0;
      for (; n < r; )
        t += String.fromCharCode.apply(String, i.slice(n, n += J));
      return t;
    }
    function Lr(i, r, t) {
      let n = "";
      t = Math.min(i.length, t);
      for (let e = r; e < t; ++e)
        n += String.fromCharCode(i[e] & 127);
      return n;
    }
    function Nr(i, r, t) {
      let n = "";
      t = Math.min(i.length, t);
      for (let e = r; e < t; ++e)
        n += String.fromCharCode(i[e]);
      return n;
    }
    function Mr(i, r, t) {
      let n = i.length;
      (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
      let e = "";
      for (let o = r; o < t; ++o)
        e += Gr[i[o]];
      return e;
    }
    function kr(i, r, t) {
      let n = i.slice(r, t), e = "";
      for (let o = 0; o < n.length - 1; o += 2)
        e += String.fromCharCode(n[o] + n[o + 1] * 256);
      return e;
    }
    h.prototype.slice = function(r, t) {
      let n = this.length;
      r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
      let e = this.subarray(r, t);
      return Object.setPrototypeOf(e, h.prototype), e;
    };
    function a(i, r, t) {
      if (i % 1 !== 0 || i < 0)
        throw new RangeError("offset is not uint");
      if (i + r > t)
        throw new RangeError("Trying to access beyond buffer length");
    }
    h.prototype.readUintLE = h.prototype.readUIntLE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
      let e = this[r], o = 1, u = 0;
      for (; ++u < t && (o *= 256); )
        e += this[r + u] * o;
      return e;
    };
    h.prototype.readUintBE = h.prototype.readUIntBE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
      let e = this[r + --t], o = 1;
      for (; t > 0 && (o *= 256); )
        e += this[r + --t] * o;
      return e;
    };
    h.prototype.readUint8 = h.prototype.readUInt8 = function(r, t) {
      return r = r >>> 0, t || a(r, 1, this.length), this[r];
    };
    h.prototype.readUint16LE = h.prototype.readUInt16LE = function(r, t) {
      return r = r >>> 0, t || a(r, 2, this.length), this[r] | this[r + 1] << 8;
    };
    h.prototype.readUint16BE = h.prototype.readUInt16BE = function(r, t) {
      return r = r >>> 0, t || a(r, 2, this.length), this[r] << 8 | this[r + 1];
    };
    h.prototype.readUint32LE = h.prototype.readUInt32LE = function(r, t) {
      return r = r >>> 0, t || a(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    };
    h.prototype.readUint32BE = h.prototype.readUInt32BE = function(r, t) {
      return r = r >>> 0, t || a(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    };
    h.prototype.readBigUInt64LE = g(function(r) {
      r = r >>> 0, R(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && T(r, this.length - 8);
      let e = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
      return BigInt(e) + (BigInt(o) << BigInt(32));
    });
    h.prototype.readBigUInt64BE = g(function(r) {
      r = r >>> 0, R(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && T(r, this.length - 8);
      let e = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
      return (BigInt(e) << BigInt(32)) + BigInt(o);
    });
    h.prototype.readIntLE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
      let e = this[r], o = 1, u = 0;
      for (; ++u < t && (o *= 256); )
        e += this[r + u] * o;
      return o *= 128, e >= o && (e -= Math.pow(2, 8 * t)), e;
    };
    h.prototype.readIntBE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
      let e = t, o = 1, u = this[r + --e];
      for (; e > 0 && (o *= 256); )
        u += this[r + --e] * o;
      return o *= 128, u >= o && (u -= Math.pow(2, 8 * t)), u;
    };
    h.prototype.readInt8 = function(r, t) {
      return r = r >>> 0, t || a(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    };
    h.prototype.readInt16LE = function(r, t) {
      r = r >>> 0, t || a(r, 2, this.length);
      let n = this[r] | this[r + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    h.prototype.readInt16BE = function(r, t) {
      r = r >>> 0, t || a(r, 2, this.length);
      let n = this[r + 1] | this[r] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    h.prototype.readInt32LE = function(r, t) {
      return r = r >>> 0, t || a(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    };
    h.prototype.readInt32BE = function(r, t) {
      return r = r >>> 0, t || a(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    };
    h.prototype.readBigInt64LE = g(function(r) {
      r = r >>> 0, R(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && T(r, this.length - 8);
      let e = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
      return (BigInt(e) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
    });
    h.prototype.readBigInt64BE = g(function(r) {
      r = r >>> 0, R(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && T(r, this.length - 8);
      let e = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
      return (BigInt(e) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n);
    });
    h.prototype.readFloatLE = function(r, t) {
      return r = r >>> 0, t || a(r, 4, this.length), U.read(this, r, true, 23, 4);
    };
    h.prototype.readFloatBE = function(r, t) {
      return r = r >>> 0, t || a(r, 4, this.length), U.read(this, r, false, 23, 4);
    };
    h.prototype.readDoubleLE = function(r, t) {
      return r = r >>> 0, t || a(r, 8, this.length), U.read(this, r, true, 52, 8);
    };
    h.prototype.readDoubleBE = function(r, t) {
      return r = r >>> 0, t || a(r, 8, this.length), U.read(this, r, false, 52, 8);
    };
    function y(i, r, t, n, e, o) {
      if (!h.isBuffer(i))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > e || r < o)
        throw new RangeError('"value" argument is out of bounds');
      if (t + n > i.length)
        throw new RangeError("Index out of range");
    }
    h.prototype.writeUintLE = h.prototype.writeUIntLE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
        let f = Math.pow(2, 8 * n) - 1;
        y(this, r, t, n, f, 0);
      }
      let o = 1, u = 0;
      for (this[t] = r & 255; ++u < n && (o *= 256); )
        this[t + u] = r / o & 255;
      return t + n;
    };
    h.prototype.writeUintBE = h.prototype.writeUIntBE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
        let f = Math.pow(2, 8 * n) - 1;
        y(this, r, t, n, f, 0);
      }
      let o = n - 1, u = 1;
      for (this[t + o] = r & 255; --o >= 0 && (u *= 256); )
        this[t + o] = r / u & 255;
      return t + n;
    };
    h.prototype.writeUint8 = h.prototype.writeUInt8 = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
    };
    h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
    };
    h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    function ir(i, r, t, n, e) {
      hr(r, n, e, i, t, 7);
      let o = Number(r & BigInt(4294967295));
      i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o;
      let u = Number(r >> BigInt(32) & BigInt(4294967295));
      return i[t++] = u, u = u >> 8, i[t++] = u, u = u >> 8, i[t++] = u, u = u >> 8, i[t++] = u, t;
    }
    function nr(i, r, t, n, e) {
      hr(r, n, e, i, t, 7);
      let o = Number(r & BigInt(4294967295));
      i[t + 7] = o, o = o >> 8, i[t + 6] = o, o = o >> 8, i[t + 5] = o, o = o >> 8, i[t + 4] = o;
      let u = Number(r >> BigInt(32) & BigInt(4294967295));
      return i[t + 3] = u, u = u >> 8, i[t + 2] = u, u = u >> 8, i[t + 1] = u, u = u >> 8, i[t] = u, t + 8;
    }
    h.prototype.writeBigUInt64LE = g(function(r, t = 0) {
      return ir(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeBigUInt64BE = g(function(r, t = 0) {
      return nr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeIntLE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, !e) {
        let c = Math.pow(2, 8 * n - 1);
        y(this, r, t, n, c - 1, -c);
      }
      let o = 0, u = 1, f = 0;
      for (this[t] = r & 255; ++o < n && (u *= 256); )
        r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
      return t + n;
    };
    h.prototype.writeIntBE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, !e) {
        let c = Math.pow(2, 8 * n - 1);
        y(this, r, t, n, c - 1, -c);
      }
      let o = n - 1, u = 1, f = 0;
      for (this[t + o] = r & 255; --o >= 0 && (u *= 256); )
        r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
      return t + n;
    };
    h.prototype.writeInt8 = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
    };
    h.prototype.writeInt16LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h.prototype.writeInt16BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h.prototype.writeInt32LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
    };
    h.prototype.writeInt32BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    h.prototype.writeBigInt64LE = g(function(r, t = 0) {
      return ir(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    h.prototype.writeBigInt64BE = g(function(r, t = 0) {
      return nr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function er(i, r, t, n, e, o) {
      if (t + n > i.length)
        throw new RangeError("Index out of range");
      if (t < 0)
        throw new RangeError("Index out of range");
    }
    function or(i, r, t, n, e) {
      return r = +r, t = t >>> 0, e || er(i, r, t, 4, 34028234663852886e22, -34028234663852886e22), U.write(i, r, t, n, 23, 4), t + 4;
    }
    h.prototype.writeFloatLE = function(r, t, n) {
      return or(this, r, t, true, n);
    };
    h.prototype.writeFloatBE = function(r, t, n) {
      return or(this, r, t, false, n);
    };
    function ur(i, r, t, n, e) {
      return r = +r, t = t >>> 0, e || er(i, r, t, 8, 17976931348623157e292, -17976931348623157e292), U.write(i, r, t, n, 52, 8), t + 8;
    }
    h.prototype.writeDoubleLE = function(r, t, n) {
      return ur(this, r, t, true, n);
    };
    h.prototype.writeDoubleBE = function(r, t, n) {
      return ur(this, r, t, false, n);
    };
    h.prototype.copy = function(r, t, n, e) {
      if (!h.isBuffer(r))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !e && e !== 0 && (e = this.length), t >= r.length && (t = r.length), t || (t = 0), e > 0 && e < n && (e = n), e === n || r.length === 0 || this.length === 0)
        return 0;
      if (t < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (e < 0)
        throw new RangeError("sourceEnd out of bounds");
      e > this.length && (e = this.length), r.length - t < e - n && (e = r.length - t + n);
      let o = e - n;
      return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, e) : Uint8Array.prototype.set.call(r, this.subarray(n, e), t), o;
    };
    h.prototype.fill = function(r, t, n, e) {
      if (typeof r == "string") {
        if (typeof t == "string" ? (e = t, t = 0, n = this.length) : typeof n == "string" && (e = n, n = this.length), e !== void 0 && typeof e != "string")
          throw new TypeError("encoding must be a string");
        if (typeof e == "string" && !h.isEncoding(e))
          throw new TypeError("Unknown encoding: " + e);
        if (r.length === 1) {
          let u = r.charCodeAt(0);
          (e === "utf8" && u < 128 || e === "latin1") && (r = u);
        }
      } else
        typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= t)
        return this;
      t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
      let o;
      if (typeof r == "number")
        for (o = t; o < n; ++o)
          this[o] = r;
      else {
        let u = h.isBuffer(r) ? r : h.from(r, e), f = u.length;
        if (f === 0)
          throw new TypeError('The value "' + r + '" is invalid for argument "value"');
        for (o = 0; o < n - t; ++o)
          this[o + t] = u[o % f];
      }
      return this;
    };
    var A = {};
    function G(i, r, t) {
      A[i] = class extends t {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: r.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${i}]`, this.stack, delete this.name;
        }
        get code() {
          return i;
        }
        set code(e) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e, writable: true });
        }
        toString() {
          return `${this.name} [${i}]: ${this.message}`;
        }
      };
    }
    G("ERR_BUFFER_OUT_OF_BOUNDS", function(i) {
      return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    G("ERR_INVALID_ARG_TYPE", function(i, r) {
      return `The "${i}" argument must be of type number. Received type ${typeof r}`;
    }, TypeError);
    G("ERR_OUT_OF_RANGE", function(i, r, t) {
      let n = `The value of "${i}" is out of range.`, e = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? e = K(String(t)) : typeof t == "bigint" && (e = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e = K(e)), e += "n"), n += ` It must be ${r}. Received ${e}`, n;
    }, RangeError);
    function K(i) {
      let r = "", t = i.length, n = i[0] === "-" ? 1 : 0;
      for (; t >= n + 4; t -= 3)
        r = `_${i.slice(t - 3, t)}${r}`;
      return `${i.slice(0, t)}${r}`;
    }
    function Dr(i, r, t) {
      R(r, "offset"), (i[r] === void 0 || i[r + t] === void 0) && T(r, i.length - (t + 1));
    }
    function hr(i, r, t, n, e, o) {
      if (i > t || i < r) {
        let u = typeof r == "bigint" ? "n" : "", f;
        throw o > 3 ? r === 0 || r === BigInt(0) ? f = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}` : f = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}` : f = `>= ${r}${u} and <= ${t}${u}`, new A.ERR_OUT_OF_RANGE("value", f, i);
      }
      Dr(n, e, o);
    }
    function R(i, r) {
      if (typeof i != "number")
        throw new A.ERR_INVALID_ARG_TYPE(r, "number", i);
    }
    function T(i, r, t) {
      throw Math.floor(i) !== i ? (R(i, t), new A.ERR_OUT_OF_RANGE(t || "offset", "an integer", i)) : r < 0 ? new A.ERR_BUFFER_OUT_OF_BOUNDS() : new A.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${r}`, i);
    }
    var $r = /[^+/0-9A-Za-z-_]/g;
    function br(i) {
      if (i = i.split("=")[0], i = i.trim().replace($r, ""), i.length < 2)
        return "";
      for (; i.length % 4 !== 0; )
        i = i + "=";
      return i;
    }
    function b(i, r) {
      r = r || 1 / 0;
      let t, n = i.length, e = null, o = [];
      for (let u = 0; u < n; ++u) {
        if (t = i.charCodeAt(u), t > 55295 && t < 57344) {
          if (!e) {
            if (t > 56319) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (u + 1 === n) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            e = t;
            continue;
          }
          if (t < 56320) {
            (r -= 3) > -1 && o.push(239, 191, 189), e = t;
            continue;
          }
          t = (e - 55296 << 10 | t - 56320) + 65536;
        } else
          e && (r -= 3) > -1 && o.push(239, 191, 189);
        if (e = null, t < 128) {
          if ((r -= 1) < 0)
            break;
          o.push(t);
        } else if (t < 2048) {
          if ((r -= 2) < 0)
            break;
          o.push(t >> 6 | 192, t & 63 | 128);
        } else if (t < 65536) {
          if ((r -= 3) < 0)
            break;
          o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
        } else if (t < 1114112) {
          if ((r -= 4) < 0)
            break;
          o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function Pr(i) {
      let r = [];
      for (let t = 0; t < i.length; ++t)
        r.push(i.charCodeAt(t) & 255);
      return r;
    }
    function Or(i, r) {
      let t, n, e, o = [];
      for (let u = 0; u < i.length && !((r -= 2) < 0); ++u)
        t = i.charCodeAt(u), n = t >> 8, e = t % 256, o.push(e), o.push(n);
      return o;
    }
    function fr(i) {
      return k.toByteArray(br(i));
    }
    function _(i, r, t, n) {
      let e;
      for (e = 0; e < n && !(e + t >= r.length || e >= i.length); ++e)
        r[e + t] = i[e];
      return e;
    }
    function E(i, r) {
      return i instanceof r || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === r.name;
    }
    function Y(i) {
      return i !== i;
    }
    var Gr = function() {
      let i = "0123456789abcdef", r = new Array(256);
      for (let t = 0; t < 16; ++t) {
        let n = t * 16;
        for (let e = 0; e < 16; ++e)
          r[n + e] = i[t] + i[e];
      }
      return r;
    }();
    function g(i) {
      return typeof BigInt > "u" ? Yr : i;
    }
    function Yr() {
      throw new Error("BigInt not supported");
    }
  }
});

// ../../helpers/compile/plugins/fill-plugin/fillers/buffer.ts
var import_buffer;
var init_buffer = __esm({
  "../../helpers/compile/plugins/fill-plugin/fillers/buffer.ts"() {
    "use strict";
    import_buffer = __toESM(require_buffer4d28b58e());
  }
});

// ../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/util18b0155d.js
var require_util18b0155d = __commonJS({
  "../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/util18b0155d.js"(exports2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var c = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
    var cr = c((oo, $r) => {
      "use strict";
      $r.exports = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
          return false;
        if (typeof Symbol.iterator == "symbol")
          return true;
        var e = {}, t = Symbol("test"), n = Object(t);
        if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
          return false;
        var o = 42;
        e[t] = o;
        for (t in e)
          return false;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
          return false;
        var i = Object.getOwnPropertySymbols(e);
        if (i.length !== 1 || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
          return false;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var a = Object.getOwnPropertyDescriptor(e, t);
          if (a.value !== o || a.enumerable !== true)
            return false;
        }
        return true;
      };
    });
    var k = c((io, qr) => {
      "use strict";
      var ft = cr();
      qr.exports = function() {
        return ft() && !!Symbol.toStringTag;
      };
    });
    var Wr = c((ao, _r) => {
      "use strict";
      var Gr = typeof Symbol < "u" && Symbol, ut = cr();
      _r.exports = function() {
        return typeof Gr != "function" || typeof Symbol != "function" || typeof Gr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : ut();
      };
    });
    var Jr = c((fo, Vr) => {
      "use strict";
      var zr = { foo: {} }, st = Object;
      Vr.exports = function() {
        return { __proto__: zr }.foo === zr.foo && !({ __proto__: null } instanceof st);
      };
    });
    var Zr = c((uo, Lr) => {
      "use strict";
      var yt = "Function.prototype.bind called on incompatible ", ct = Object.prototype.toString, pt = Math.max, lt = "[object Function]", Hr = function(e, t) {
        for (var n = [], o = 0; o < e.length; o += 1)
          n[o] = e[o];
        for (var i = 0; i < t.length; i += 1)
          n[i + e.length] = t[i];
        return n;
      }, gt = function(e, t) {
        for (var n = [], o = t || 0, i = 0; o < e.length; o += 1, i += 1)
          n[i] = e[o];
        return n;
      }, dt = function(r, e) {
        for (var t = "", n = 0; n < r.length; n += 1)
          t += r[n], n + 1 < r.length && (t += e);
        return t;
      };
      Lr.exports = function(e) {
        var t = this;
        if (typeof t != "function" || ct.apply(t) !== lt)
          throw new TypeError(yt + t);
        for (var n = gt(arguments, 1), o, i = function() {
          if (this instanceof o) {
            var g = t.apply(this, Hr(n, arguments));
            return Object(g) === g ? g : this;
          }
          return t.apply(e, Hr(n, arguments));
        }, a = pt(0, t.length - n.length), f = [], y = 0; y < a; y++)
          f[y] = "$" + y;
        if (o = fn("binder", "return function (" + dt(f, ",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
          var p = function() {
          };
          p.prototype = t.prototype, o.prototype = new p(), p.prototype = null;
        }
        return o;
      };
    });
    var _ = c((so, Yr) => {
      "use strict";
      var bt = Zr();
      Yr.exports = fn.prototype.bind || bt;
    });
    var Qr = c((yo, Kr) => {
      "use strict";
      var At = _();
      Kr.exports = At.call(fn.call, Object.prototype.hasOwnProperty);
    });
    var V = c((co, ne) => {
      "use strict";
      var s, B = SyntaxError, te = fn, F = TypeError, pr = function(r) {
        try {
          return te('"use strict"; return (' + r + ").constructor;")();
        } catch (e) {
        }
      }, v = Object.getOwnPropertyDescriptor;
      if (v)
        try {
          v({}, "");
        } catch (e) {
          v = null;
        }
      var lr = function() {
        throw new F();
      }, mt = v ? function() {
        try {
          return arguments.callee, lr;
        } catch (e) {
          try {
            return v(arguments, "callee").get;
          } catch (e2) {
            return lr;
          }
        }
      }() : lr, E = Wr()(), ht = Jr()(), l = Object.getPrototypeOf || (ht ? function(r) {
        return r.__proto__;
      } : null), T = {}, vt = typeof Uint8Array > "u" || !l ? s : l(Uint8Array), S = { "%AggregateError%": typeof AggregateError > "u" ? s : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? s : ArrayBuffer, "%ArrayIteratorPrototype%": E && l ? l([][Symbol.iterator]()) : s, "%AsyncFromSyncIteratorPrototype%": s, "%AsyncFunction%": T, "%AsyncGenerator%": T, "%AsyncGeneratorFunction%": T, "%AsyncIteratorPrototype%": T, "%Atomics%": typeof Atomics > "u" ? s : Atomics, "%BigInt%": typeof BigInt > "u" ? s : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? s : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? s : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? s : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": void 0, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? s : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? s : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? s : FinalizationRegistry, "%Function%": te, "%GeneratorFunction%": T, "%Int8Array%": typeof Int8Array > "u" ? s : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? s : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? s : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": E && l ? l(l([][Symbol.iterator]())) : s, "%JSON%": typeof JSON == "object" ? JSON : s, "%Map%": typeof Map > "u" ? s : Map, "%MapIteratorPrototype%": typeof Map > "u" || !E || !l ? s : l((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? s : Promise, "%Proxy%": typeof Proxy > "u" ? s : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? s : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? s : Set, "%SetIteratorPrototype%": typeof Set > "u" || !E || !l ? s : l((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? s : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": E && l ? l(""[Symbol.iterator]()) : s, "%Symbol%": E ? Symbol : s, "%SyntaxError%": B, "%ThrowTypeError%": mt, "%TypedArray%": vt, "%TypeError%": F, "%Uint8Array%": typeof Uint8Array > "u" ? s : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? s : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? s : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? s : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? s : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? s : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? s : WeakSet };
      if (l)
        try {
          null.error;
        } catch (r) {
          Xr = l(l(r)), S["%Error.prototype%"] = Xr;
        }
      var Xr, St = function r(e) {
        var t;
        if (e === "%AsyncFunction%")
          t = pr("async function () {}");
        else if (e === "%GeneratorFunction%")
          t = pr("function* () {}");
        else if (e === "%AsyncGeneratorFunction%")
          t = pr("async function* () {}");
        else if (e === "%AsyncGenerator%") {
          var n = r("%AsyncGeneratorFunction%");
          n && (t = n.prototype);
        } else if (e === "%AsyncIteratorPrototype%") {
          var o = r("%AsyncGenerator%");
          o && l && (t = l(o.prototype));
        }
        return S[e] = t, t;
      }, re = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, x = _(), W = Qr(), Ot = x.call(fn.call, Array.prototype.concat), jt = x.call(fn.apply, Array.prototype.splice), ee = x.call(fn.call, String.prototype.replace), z = x.call(fn.call, String.prototype.slice), Pt = x.call(fn.call, RegExp.prototype.exec), wt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Et = /\\(\\)?/g, Tt = function(e) {
        var t = z(e, 0, 1), n = z(e, -1);
        if (t === "%" && n !== "%")
          throw new B("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && t !== "%")
          throw new B("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return ee(e, wt, function(i, a, f, y) {
          o[o.length] = f ? ee(y, Et, "$1") : a || i;
        }), o;
      }, Ft = function(e, t) {
        var n = e, o;
        if (W(re, n) && (o = re[n], n = "%" + o[0] + "%"), W(S, n)) {
          var i = S[n];
          if (i === T && (i = St(n)), typeof i > "u" && !t)
            throw new F("intrinsic " + e + " exists, but is not available. Please file an issue!");
          return { alias: o, name: n, value: i };
        }
        throw new B("intrinsic " + e + " does not exist!");
      };
      ne.exports = function(e, t) {
        if (typeof e != "string" || e.length === 0)
          throw new F("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof t != "boolean")
          throw new F('"allowMissing" argument must be a boolean');
        if (Pt(/^%?[^%]*%?$/, e) === null)
          throw new B("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n = Tt(e), o = n.length > 0 ? n[0] : "", i = Ft("%" + o + "%", t), a = i.name, f = i.value, y = false, p = i.alias;
        p && (o = p[0], jt(n, Ot([0, 1], p)));
        for (var g = 1, h = true; g < n.length; g += 1) {
          var d = n[g], w = z(d, 0, 1), q = z(d, -1);
          if ((w === '"' || w === "'" || w === "`" || q === '"' || q === "'" || q === "`") && w !== q)
            throw new B("property names with quotes must have matching quotes");
          if ((d === "constructor" || !h) && (y = true), o += "." + d, a = "%" + o + "%", W(S, a))
            f = S[a];
          else if (f != null) {
            if (!(d in f)) {
              if (!t)
                throw new F("base intrinsic for " + e + " exists, but the property is not available.");
              return;
            }
            if (v && g + 1 >= n.length) {
              var G = v(f, d);
              h = !!G, h && "get" in G && !("originalValue" in G.get) ? f = G.get : f = f[d];
            } else
              h = W(f, d), f = f[d];
            h && !y && (S[a] = f);
          }
        }
        return f;
      };
    });
    var se = c((po, J) => {
      "use strict";
      var gr = _(), I = V(), ae = I("%Function.prototype.apply%"), fe = I("%Function.prototype.call%"), ue = I("%Reflect.apply%", true) || gr.call(fe, ae), oe = I("%Object.getOwnPropertyDescriptor%", true), O = I("%Object.defineProperty%", true), Bt = I("%Math.max%");
      if (O)
        try {
          O({}, "a", { value: 1 });
        } catch (e) {
          O = null;
        }
      J.exports = function(e) {
        var t = ue(gr, fe, arguments);
        if (oe && O) {
          var n = oe(t, "length");
          n.configurable && O(t, "length", { value: 1 + Bt(0, e.length - (arguments.length - 1)) });
        }
        return t;
      };
      var ie = function() {
        return ue(gr, ae, arguments);
      };
      O ? O(J.exports, "apply", { value: ie }) : J.exports.apply = ie;
    });
    var H = c((lo, pe) => {
      "use strict";
      var ye = V(), ce = se(), It = ce(ye("String.prototype.indexOf"));
      pe.exports = function(e, t) {
        var n = ye(e, !!t);
        return typeof n == "function" && It(e, ".prototype.") > -1 ? ce(n) : n;
      };
    });
    var de = c((go, ge) => {
      "use strict";
      var Ut = k()(), Rt = H(), dr = Rt("Object.prototype.toString"), L = function(e) {
        return Ut && e && typeof e == "object" && Symbol.toStringTag in e ? false : dr(e) === "[object Arguments]";
      }, le = function(e) {
        return L(e) ? true : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && dr(e) !== "[object Array]" && dr(e.callee) === "[object Function]";
      }, Dt = function() {
        return L(arguments);
      }();
      L.isLegacyArguments = le;
      ge.exports = Dt ? L : le;
    });
    var me = c((bo, Ae) => {
      "use strict";
      var kt = Object.prototype.toString, xt = fn.prototype.toString, Mt = /^\s*(?:function)?\*/, be = k()(), br = Object.getPrototypeOf, Nt = function() {
        if (!be)
          return false;
        try {
          return fn("return function*() {}")();
        } catch (e) {
        }
      }, Ar;
      Ae.exports = function(e) {
        if (typeof e != "function")
          return false;
        if (Mt.test(xt.call(e)))
          return true;
        if (!be) {
          var t = kt.call(e);
          return t === "[object GeneratorFunction]";
        }
        if (!br)
          return false;
        if (typeof Ar > "u") {
          var n = Nt();
          Ar = n ? br(n) : false;
        }
        return br(e) === Ar;
      };
    });
    var Oe = c((Ao, Se) => {
      "use strict";
      var ve = fn.prototype.toString, U = typeof Reflect == "object" && Reflect !== null && Reflect.apply, hr, Z;
      if (typeof U == "function" && typeof Object.defineProperty == "function")
        try {
          hr = Object.defineProperty({}, "length", { get: function() {
            throw Z;
          } }), Z = {}, U(function() {
            throw 42;
          }, null, hr);
        } catch (r) {
          r !== Z && (U = null);
        }
      else
        U = null;
      var Ct = /^\s*class\b/, vr = function(e) {
        try {
          var t = ve.call(e);
          return Ct.test(t);
        } catch (e2) {
          return false;
        }
      }, mr = function(e) {
        try {
          return vr(e) ? false : (ve.call(e), true);
        } catch (e2) {
          return false;
        }
      }, Y = Object.prototype.toString, $t = "[object Object]", qt = "[object Function]", Gt = "[object GeneratorFunction]", _t = "[object HTMLAllCollection]", Wt = "[object HTML document.all class]", zt = "[object HTMLCollection]", Vt = typeof Symbol == "function" && !!Symbol.toStringTag, Jt = !(0 in [,]), Sr = function() {
        return false;
      };
      typeof document == "object" && (he = document.all, Y.call(he) === Y.call(document.all) && (Sr = function(e) {
        if ((Jt || !e) && (typeof e > "u" || typeof e == "object"))
          try {
            var t = Y.call(e);
            return (t === _t || t === Wt || t === zt || t === $t) && e("") == null;
          } catch (e2) {
          }
        return false;
      }));
      var he;
      Se.exports = U ? function(e) {
        if (Sr(e))
          return true;
        if (!e || typeof e != "function" && typeof e != "object")
          return false;
        try {
          U(e, null, hr);
        } catch (t) {
          if (t !== Z)
            return false;
        }
        return !vr(e) && mr(e);
      } : function(e) {
        if (Sr(e))
          return true;
        if (!e || typeof e != "function" && typeof e != "object")
          return false;
        if (Vt)
          return mr(e);
        if (vr(e))
          return false;
        var t = Y.call(e);
        return t !== qt && t !== Gt && !/^\[object HTML/.test(t) ? false : mr(e);
      };
    });
    var Or = c((mo, Pe) => {
      "use strict";
      var Ht = Oe(), Lt = Object.prototype.toString, je = Object.prototype.hasOwnProperty, Zt = function(e, t, n) {
        for (var o = 0, i = e.length; o < i; o++)
          je.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
      }, Yt = function(e, t, n) {
        for (var o = 0, i = e.length; o < i; o++)
          n == null ? t(e.charAt(o), o, e) : t.call(n, e.charAt(o), o, e);
      }, Kt = function(e, t, n) {
        for (var o in e)
          je.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
      }, Qt = function(e, t, n) {
        if (!Ht(t))
          throw new TypeError("iterator must be a function");
        var o;
        arguments.length >= 3 && (o = n), Lt.call(e) === "[object Array]" ? Zt(e, t, o) : typeof e == "string" ? Yt(e, t, o) : Kt(e, t, o);
      };
      Pe.exports = Qt;
    });
    var Pr = c((ho, we) => {
      "use strict";
      var jr = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], Xt = typeof globalThis > "u" ? global : globalThis;
      we.exports = function() {
        for (var e = [], t = 0; t < jr.length; t++)
          typeof Xt[jr[t]] == "function" && (e[e.length] = jr[t]);
        return e;
      };
    });
    var wr = c((vo, Ee) => {
      "use strict";
      var rn = V(), K = rn("%Object.getOwnPropertyDescriptor%", true);
      if (K)
        try {
          K([], "length");
        } catch (e) {
          K = null;
        }
      Ee.exports = K;
    });
    var Fr = c((So, Ue) => {
      "use strict";
      var Te = Or(), en = Pr(), Tr = H(), tn = Tr("Object.prototype.toString"), Fe = k()(), Q = wr(), nn = typeof globalThis > "u" ? global : globalThis, Be = en(), on = Tr("Array.prototype.indexOf", true) || function(e, t) {
        for (var n = 0; n < e.length; n += 1)
          if (e[n] === t)
            return n;
        return -1;
      }, an = Tr("String.prototype.slice"), Ie = {}, Er = Object.getPrototypeOf;
      Fe && Q && Er && Te(Be, function(r) {
        var e = new nn[r]();
        if (Symbol.toStringTag in e) {
          var t = Er(e), n = Q(t, Symbol.toStringTag);
          if (!n) {
            var o = Er(t);
            n = Q(o, Symbol.toStringTag);
          }
          Ie[r] = n.get;
        }
      });
      var fn2 = function(e) {
        var t = false;
        return Te(Ie, function(n, o) {
          if (!t)
            try {
              t = n.call(e) === o;
            } catch (e2) {
            }
        }), t;
      };
      Ue.exports = function(e) {
        if (!e || typeof e != "object")
          return false;
        if (!Fe || !(Symbol.toStringTag in e)) {
          var t = an(tn(e), 8, -1);
          return on(Be, t) > -1;
        }
        return Q ? fn2(e) : false;
      };
    });
    var Ce = c((Oo, Ne) => {
      "use strict";
      var De = Or(), un = Pr(), ke = H(), Br = wr(), sn = ke("Object.prototype.toString"), xe = k()(), Re = typeof globalThis > "u" ? global : globalThis, yn = un(), cn = ke("String.prototype.slice"), Me = {}, Ir = Object.getPrototypeOf;
      xe && Br && Ir && De(yn, function(r) {
        if (typeof Re[r] == "function") {
          var e = new Re[r]();
          if (Symbol.toStringTag in e) {
            var t = Ir(e), n = Br(t, Symbol.toStringTag);
            if (!n) {
              var o = Ir(t);
              n = Br(o, Symbol.toStringTag);
            }
            Me[r] = n.get;
          }
        }
      });
      var pn = function(e) {
        var t = false;
        return De(Me, function(n, o) {
          if (!t)
            try {
              var i = n.call(e);
              i === o && (t = i);
            } catch (e2) {
            }
        }), t;
      }, ln2 = Fr();
      Ne.exports = function(e) {
        return ln2(e) ? !xe || !(Symbol.toStringTag in e) ? cn(sn(e), 8, -1) : pn(e) : false;
      };
    });
    var Qe = c((u) => {
      "use strict";
      var gn = de(), dn = me(), A = Ce(), $e = Fr();
      function R(r) {
        return r.call.bind(r);
      }
      var qe = typeof BigInt < "u", Ge = typeof Symbol < "u", b = R(Object.prototype.toString), bn = R(Number.prototype.valueOf), An = R(String.prototype.valueOf), mn = R(Boolean.prototype.valueOf);
      qe && (_e = R(BigInt.prototype.valueOf));
      var _e;
      Ge && (We = R(Symbol.prototype.valueOf));
      var We;
      function N(r, e) {
        if (typeof r != "object")
          return false;
        try {
          return e(r), true;
        } catch (e2) {
          return false;
        }
      }
      u.isArgumentsObject = gn;
      u.isGeneratorFunction = dn;
      u.isTypedArray = $e;
      function hn(r) {
        return typeof Promise < "u" && r instanceof Promise || r !== null && typeof r == "object" && typeof r.then == "function" && typeof r.catch == "function";
      }
      u.isPromise = hn;
      function vn(r) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(r) : $e(r) || Ve(r);
      }
      u.isArrayBufferView = vn;
      function Sn(r) {
        return A(r) === "Uint8Array";
      }
      u.isUint8Array = Sn;
      function On(r) {
        return A(r) === "Uint8ClampedArray";
      }
      u.isUint8ClampedArray = On;
      function jn(r) {
        return A(r) === "Uint16Array";
      }
      u.isUint16Array = jn;
      function Pn(r) {
        return A(r) === "Uint32Array";
      }
      u.isUint32Array = Pn;
      function wn(r) {
        return A(r) === "Int8Array";
      }
      u.isInt8Array = wn;
      function En(r) {
        return A(r) === "Int16Array";
      }
      u.isInt16Array = En;
      function Tn(r) {
        return A(r) === "Int32Array";
      }
      u.isInt32Array = Tn;
      function Fn(r) {
        return A(r) === "Float32Array";
      }
      u.isFloat32Array = Fn;
      function Bn(r) {
        return A(r) === "Float64Array";
      }
      u.isFloat64Array = Bn;
      function In(r) {
        return A(r) === "BigInt64Array";
      }
      u.isBigInt64Array = In;
      function Un(r) {
        return A(r) === "BigUint64Array";
      }
      u.isBigUint64Array = Un;
      function X(r) {
        return b(r) === "[object Map]";
      }
      X.working = typeof Map < "u" && X(/* @__PURE__ */ new Map());
      function Rn(r) {
        return typeof Map > "u" ? false : X.working ? X(r) : r instanceof Map;
      }
      u.isMap = Rn;
      function rr(r) {
        return b(r) === "[object Set]";
      }
      rr.working = typeof Set < "u" && rr(/* @__PURE__ */ new Set());
      function Dn(r) {
        return typeof Set > "u" ? false : rr.working ? rr(r) : r instanceof Set;
      }
      u.isSet = Dn;
      function er(r) {
        return b(r) === "[object WeakMap]";
      }
      er.working = typeof WeakMap < "u" && er(/* @__PURE__ */ new WeakMap());
      function kn(r) {
        return typeof WeakMap > "u" ? false : er.working ? er(r) : r instanceof WeakMap;
      }
      u.isWeakMap = kn;
      function Rr(r) {
        return b(r) === "[object WeakSet]";
      }
      Rr.working = typeof WeakSet < "u" && Rr(/* @__PURE__ */ new WeakSet());
      function xn(r) {
        return Rr(r);
      }
      u.isWeakSet = xn;
      function tr(r) {
        return b(r) === "[object ArrayBuffer]";
      }
      tr.working = typeof ArrayBuffer < "u" && tr(new ArrayBuffer());
      function ze(r) {
        return typeof ArrayBuffer > "u" ? false : tr.working ? tr(r) : r instanceof ArrayBuffer;
      }
      u.isArrayBuffer = ze;
      function nr(r) {
        return b(r) === "[object DataView]";
      }
      nr.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && nr(new DataView(new ArrayBuffer(1), 0, 1));
      function Ve(r) {
        return typeof DataView > "u" ? false : nr.working ? nr(r) : r instanceof DataView;
      }
      u.isDataView = Ve;
      var Ur = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function M(r) {
        return b(r) === "[object SharedArrayBuffer]";
      }
      function Je(r) {
        return typeof Ur > "u" ? false : (typeof M.working > "u" && (M.working = M(new Ur())), M.working ? M(r) : r instanceof Ur);
      }
      u.isSharedArrayBuffer = Je;
      function Mn(r) {
        return b(r) === "[object AsyncFunction]";
      }
      u.isAsyncFunction = Mn;
      function Nn(r) {
        return b(r) === "[object Map Iterator]";
      }
      u.isMapIterator = Nn;
      function Cn(r) {
        return b(r) === "[object Set Iterator]";
      }
      u.isSetIterator = Cn;
      function $n(r) {
        return b(r) === "[object Generator]";
      }
      u.isGeneratorObject = $n;
      function qn(r) {
        return b(r) === "[object WebAssembly.Module]";
      }
      u.isWebAssemblyCompiledModule = qn;
      function He(r) {
        return N(r, bn);
      }
      u.isNumberObject = He;
      function Le(r) {
        return N(r, An);
      }
      u.isStringObject = Le;
      function Ze(r) {
        return N(r, mn);
      }
      u.isBooleanObject = Ze;
      function Ye(r) {
        return qe && N(r, _e);
      }
      u.isBigIntObject = Ye;
      function Ke(r) {
        return Ge && N(r, We);
      }
      u.isSymbolObject = Ke;
      function Gn(r) {
        return He(r) || Le(r) || Ze(r) || Ye(r) || Ke(r);
      }
      u.isBoxedPrimitive = Gn;
      function _n(r) {
        return typeof Uint8Array < "u" && (ze(r) || Je(r));
      }
      u.isAnyArrayBuffer = _n;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(r) {
        Object.defineProperty(u, r, { enumerable: false, value: function() {
          throw new Error(r + " is not supported in userland");
        } });
      });
    });
    var rt = c((Po, Xe) => {
      Xe.exports = function(e) {
        return e instanceof import_buffer.Buffer;
      };
    });
    var et = c((wo, Dr) => {
      typeof Object.create == "function" ? Dr.exports = function(e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
      } : Dr.exports = function(e, t) {
        if (t) {
          e.super_ = t;
          var n = function() {
          };
          n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
        }
      };
    });
    var tt = Object.getOwnPropertyDescriptors || function(e) {
      for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++)
        n[t[o]] = Object.getOwnPropertyDescriptor(e, t[o]);
      return n;
    };
    var Wn = /%[sdj%]/g;
    exports2.format = function(r) {
      if (!yr(r)) {
        for (var e = [], t = 0; t < arguments.length; t++)
          e.push(m(arguments[t]));
        return e.join(" ");
      }
      for (var t = 1, n = arguments, o = n.length, i = String(r).replace(Wn, function(f) {
        if (f === "%%")
          return "%";
        if (t >= o)
          return f;
        switch (f) {
          case "%s":
            return String(n[t++]);
          case "%d":
            return Number(n[t++]);
          case "%j":
            try {
              return JSON.stringify(n[t++]);
            } catch (e2) {
              return "[Circular]";
            }
          default:
            return f;
        }
      }), a = n[t]; t < o; a = n[++t])
        sr(a) || !D(a) ? i += " " + a : i += " " + m(a);
      return i;
    };
    exports2.deprecate = function(r, e) {
      if (typeof process < "u" && process.noDeprecation === true)
        return r;
      if (typeof process > "u")
        return function() {
          return exports2.deprecate(r, e).apply(this, arguments);
        };
      var t = false;
      function n() {
        if (!t) {
          if (process.throwDeprecation)
            throw new Error(e);
          process.traceDeprecation ? console.trace(e) : console.error(e), t = true;
        }
        return r.apply(this, arguments);
      }
      return n;
    };
    var or = {};
    var nt = /^$/;
    process.env.NODE_DEBUG && (ir = process.env.NODE_DEBUG, ir = ir.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), nt = new RegExp("^" + ir + "$", "i"));
    var ir;
    exports2.debuglog = function(r) {
      if (r = r.toUpperCase(), !or[r])
        if (nt.test(r)) {
          var e = process.pid;
          or[r] = function() {
            var t = exports2.format.apply(exports2, arguments);
            console.error("%s %d: %s", r, e, t);
          };
        } else
          or[r] = function() {
          };
      return or[r];
    };
    function m(r, e) {
      var t = { seen: [], stylize: Vn };
      return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), Nr(e) ? t.showHidden = e : e && exports2._extend(t, e), P2(t.showHidden) && (t.showHidden = false), P2(t.depth) && (t.depth = 2), P2(t.colors) && (t.colors = false), P2(t.customInspect) && (t.customInspect = true), t.colors && (t.stylize = zn), fr(t, r, t.depth);
    }
    exports2.inspect = m;
    m.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
    m.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
    function zn(r, e) {
      var t = m.styles[e];
      return t ? "\x1B[" + m.colors[t][0] + "m" + r + "\x1B[" + m.colors[t][1] + "m" : r;
    }
    function Vn(r, e) {
      return r;
    }
    function Jn(r) {
      var e = {};
      return r.forEach(function(t, n) {
        e[t] = true;
      }), e;
    }
    function fr(r, e, t) {
      if (r.customInspect && e && ar(e.inspect) && e.inspect !== exports2.inspect && !(e.constructor && e.constructor.prototype === e)) {
        var n = e.inspect(t, r);
        return yr(n) || (n = fr(r, n, t)), n;
      }
      var o = Hn(r, e);
      if (o)
        return o;
      var i = Object.keys(e), a = Jn(i);
      if (r.showHidden && (i = Object.getOwnPropertyNames(e)), $2(e) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
        return kr(e);
      if (i.length === 0) {
        if (ar(e)) {
          var f = e.name ? ": " + e.name : "";
          return r.stylize("[Function" + f + "]", "special");
        }
        if (C(e))
          return r.stylize(RegExp.prototype.toString.call(e), "regexp");
        if (ur(e))
          return r.stylize(Date.prototype.toString.call(e), "date");
        if ($2(e))
          return kr(e);
      }
      var y = "", p = false, g = ["{", "}"];
      if (ot(e) && (p = true, g = ["[", "]"]), ar(e)) {
        var h = e.name ? ": " + e.name : "";
        y = " [Function" + h + "]";
      }
      if (C(e) && (y = " " + RegExp.prototype.toString.call(e)), ur(e) && (y = " " + Date.prototype.toUTCString.call(e)), $2(e) && (y = " " + kr(e)), i.length === 0 && (!p || e.length == 0))
        return g[0] + y + g[1];
      if (t < 0)
        return C(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special");
      r.seen.push(e);
      var d;
      return p ? d = Ln(r, e, t, a, i) : d = i.map(function(w) {
        return Mr(r, e, t, a, w, p);
      }), r.seen.pop(), Zn(d, y, g);
    }
    function Hn(r, e) {
      if (P2(e))
        return r.stylize("undefined", "undefined");
      if (yr(e)) {
        var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return r.stylize(t, "string");
      }
      if (it(e))
        return r.stylize("" + e, "number");
      if (Nr(e))
        return r.stylize("" + e, "boolean");
      if (sr(e))
        return r.stylize("null", "null");
    }
    function kr(r) {
      return "[" + Error.prototype.toString.call(r) + "]";
    }
    function Ln(r, e, t, n, o) {
      for (var i = [], a = 0, f = e.length; a < f; ++a)
        at(e, String(a)) ? i.push(Mr(r, e, t, n, String(a), true)) : i.push("");
      return o.forEach(function(y) {
        y.match(/^\d+$/) || i.push(Mr(r, e, t, n, y, true));
      }), i;
    }
    function Mr(r, e, t, n, o, i) {
      var a, f, y;
      if (y = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }, y.get ? y.set ? f = r.stylize("[Getter/Setter]", "special") : f = r.stylize("[Getter]", "special") : y.set && (f = r.stylize("[Setter]", "special")), at(n, o) || (a = "[" + o + "]"), f || (r.seen.indexOf(y.value) < 0 ? (sr(t) ? f = fr(r, y.value, null) : f = fr(r, y.value, t - 1), f.indexOf(`
`) > -1 && (i ? f = f.split(`
`).map(function(p) {
        return "  " + p;
      }).join(`
`).slice(2) : f = `
` + f.split(`
`).map(function(p) {
        return "   " + p;
      }).join(`
`))) : f = r.stylize("[Circular]", "special")), P2(a)) {
        if (i && o.match(/^\d+$/))
          return f;
        a = JSON.stringify("" + o), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.slice(1, -1), a = r.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = r.stylize(a, "string"));
      }
      return a + ": " + f;
    }
    function Zn(r, e, t) {
      var n = 0, o = r.reduce(function(i, a) {
        return n++, a.indexOf(`
`) >= 0 && n++, i + a.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return o > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + r.join(`,
  `) + " " + t[1] : t[0] + e + " " + r.join(", ") + " " + t[1];
    }
    exports2.types = Qe();
    function ot(r) {
      return Array.isArray(r);
    }
    exports2.isArray = ot;
    function Nr(r) {
      return typeof r == "boolean";
    }
    exports2.isBoolean = Nr;
    function sr(r) {
      return r === null;
    }
    exports2.isNull = sr;
    function Yn(r) {
      return r == null;
    }
    exports2.isNullOrUndefined = Yn;
    function it(r) {
      return typeof r == "number";
    }
    exports2.isNumber = it;
    function yr(r) {
      return typeof r == "string";
    }
    exports2.isString = yr;
    function Kn(r) {
      return typeof r == "symbol";
    }
    exports2.isSymbol = Kn;
    function P2(r) {
      return r === void 0;
    }
    exports2.isUndefined = P2;
    function C(r) {
      return D(r) && Cr(r) === "[object RegExp]";
    }
    exports2.isRegExp = C;
    exports2.types.isRegExp = C;
    function D(r) {
      return typeof r == "object" && r !== null;
    }
    exports2.isObject = D;
    function ur(r) {
      return D(r) && Cr(r) === "[object Date]";
    }
    exports2.isDate = ur;
    exports2.types.isDate = ur;
    function $2(r) {
      return D(r) && (Cr(r) === "[object Error]" || r instanceof Error);
    }
    exports2.isError = $2;
    exports2.types.isNativeError = $2;
    function ar(r) {
      return typeof r == "function";
    }
    exports2.isFunction = ar;
    function Qn(r) {
      return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || typeof r == "symbol" || typeof r > "u";
    }
    exports2.isPrimitive = Qn;
    exports2.isBuffer = rt();
    function Cr(r) {
      return Object.prototype.toString.call(r);
    }
    function xr(r) {
      return r < 10 ? "0" + r.toString(10) : r.toString(10);
    }
    var Xn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function ro() {
      var r = /* @__PURE__ */ new Date(), e = [xr(r.getHours()), xr(r.getMinutes()), xr(r.getSeconds())].join(":");
      return [r.getDate(), Xn[r.getMonth()], e].join(" ");
    }
    exports2.log = function() {
      console.log("%s - %s", ro(), exports2.format.apply(exports2, arguments));
    };
    exports2.inherits = et();
    exports2._extend = function(r, e) {
      if (!e || !D(e))
        return r;
      for (var t = Object.keys(e), n = t.length; n--; )
        r[t[n]] = e[t[n]];
      return r;
    };
    function at(r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }
    var j = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    exports2.promisify = function(e) {
      if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (j && e[j]) {
        var t = e[j];
        if (typeof t != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, j, { value: t, enumerable: false, writable: false, configurable: true }), t;
      }
      function t() {
        for (var n, o, i = new Promise(function(y, p) {
          n = y, o = p;
        }), a = [], f = 0; f < arguments.length; f++)
          a.push(arguments[f]);
        a.push(function(y, p) {
          y ? o(y) : n(p);
        });
        try {
          e.apply(this, a);
        } catch (y) {
          o(y);
        }
        return i;
      }
      return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), j && Object.defineProperty(t, j, { value: t, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t, tt(e));
    };
    exports2.promisify.custom = j;
    function eo(r, e) {
      if (!r) {
        var t = new Error("Promise was rejected with a falsy value");
        t.reason = r, r = t;
      }
      return e(r);
    }
    function to(r) {
      if (typeof r != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function e() {
        for (var t = [], n = 0; n < arguments.length; n++)
          t.push(arguments[n]);
        var o = t.pop();
        if (typeof o != "function")
          throw new TypeError("The last argument must be of type Function");
        var i = this, a = function() {
          return o.apply(i, arguments);
        };
        r.apply(this, t).then(function(f) {
          process.nextTick(a.bind(null, null, f));
        }, function(f) {
          process.nextTick(eo.bind(null, f, a));
        });
      }
      return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Object.defineProperties(e, tt(r)), e;
    }
    exports2.callbackify = to;
  }
});

// ../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
var require_ms = __commonJS({
  "../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse2(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse2(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js
var require_common = __commonJS({
  "../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug7(...args) {
          if (!debug7.enabled) {
            return;
          }
          const self = debug7;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug7.namespace = namespace;
        debug7.useColors = createDebug.useColors();
        debug7.color = createDebug.selectColor(namespace);
        debug7.extend = extend;
        debug7.destroy = createDebug.destroy;
        Object.defineProperty(debug7, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug7);
        }
        return debug7;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// ../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error2) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug");
      } catch (error2) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error2) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error2) {
        return "[UnexpectedJSONParseError]: " + error2.message;
      }
    };
  }
});

// ../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/tty-browserifyd99728dc.js
var require_tty_browserifyd99728dc = __commonJS({
  "../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/tty-browserifyd99728dc.js"(exports2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    exports2.isatty = function() {
      return false;
    };
    function t() {
      throw new Error("tty.ReadStream is not implemented");
    }
    exports2.ReadStream = t;
    function e() {
      throw new Error("tty.WriteStream is not implemented");
    }
    exports2.WriteStream = e;
  }
});

// fill-plugin:os
var require_os = __commonJS({
  "fill-plugin:os"() {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
  }
});

// ../../node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// ../../node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var os = require_os();
    var tty = require_tty_browserifyd99728dc();
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min2 = forceColor || 0;
      if (env.TERM === "dumb") {
        return min2;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign2) => sign2 in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min2;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version2 = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version2 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min2;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// ../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/node.js
var require_node = __commonJS({
  "../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/node.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var tty = require_tty_browserifyd99728dc();
    var util = require_util18b0155d();
    exports2.init = init2;
    exports2.log = log3;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error2) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log3(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init2(debug7) {
      debug7.inspectOpts = {};
      const keys2 = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys2.length; i++) {
        debug7.inspectOpts[keys2[i]] = exports2.inspectOpts[keys2[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// ../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// ../../helpers/compile/plugins/fill-plugin/fillers/fs.ts
function existsSync() {
  return false;
}
var promises, fs, fs_default;
var init_fs = __esm({
  "../../helpers/compile/plugins/fill-plugin/fillers/fs.ts"() {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    promises = {};
    fs = {
      existsSync,
      promises
    };
    fs_default = fs;
  }
});

// ../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/path-browserify26d6a5bb.js
var require_path_browserify26d6a5bb = __commonJS({
  "../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/path-browserify26d6a5bb.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    function c(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    function A(o, e) {
      for (var r = "", i = 0, l = -1, t = 0, n, f = 0; f <= o.length; ++f) {
        if (f < o.length)
          n = o.charCodeAt(f);
        else {
          if (n === 47)
            break;
          n = 47;
        }
        if (n === 47) {
          if (!(l === f - 1 || t === 1))
            if (l !== f - 1 && t === 2) {
              if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
                if (r.length > 2) {
                  var s = r.lastIndexOf("/");
                  if (s !== r.length - 1) {
                    s === -1 ? (r = "", i = 0) : (r = r.slice(0, s), i = r.length - 1 - r.lastIndexOf("/")), l = f, t = 0;
                    continue;
                  }
                } else if (r.length === 2 || r.length === 1) {
                  r = "", i = 0, l = f, t = 0;
                  continue;
                }
              }
              e && (r.length > 0 ? r += "/.." : r = "..", i = 2);
            } else
              r.length > 0 ? r += "/" + o.slice(l + 1, f) : r = o.slice(l + 1, f), i = f - l - 1;
          l = f, t = 0;
        } else
          n === 46 && t !== -1 ? ++t : t = -1;
      }
      return r;
    }
    function b(o, e) {
      var r = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
      return r ? r === e.root ? r + i : r + o + i : i;
    }
    var g = { resolve: function() {
      for (var e = "", r = false, i, l = arguments.length - 1; l >= -1 && !r; l--) {
        var t;
        l >= 0 ? t = arguments[l] : (i === void 0 && (i = process.cwd()), t = i), c(t), t.length !== 0 && (e = t + "/" + e, r = t.charCodeAt(0) === 47);
      }
      return e = A(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    }, normalize: function(e) {
      if (c(e), e.length === 0)
        return ".";
      var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
      return e = A(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
    }, isAbsolute: function(e) {
      return c(e), e.length > 0 && e.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var e, r = 0; r < arguments.length; ++r) {
        var i = arguments[r];
        c(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
      }
      return e === void 0 ? "." : g.normalize(e);
    }, relative: function(e, r) {
      if (c(e), c(r), e === r || (e = g.resolve(e), r = g.resolve(r), e === r))
        return "";
      for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
        ;
      for (var l = e.length, t = l - i, n = 1; n < r.length && r.charCodeAt(n) === 47; ++n)
        ;
      for (var f = r.length, s = f - n, v = t < s ? t : s, u = -1, a = 0; a <= v; ++a) {
        if (a === v) {
          if (s > v) {
            if (r.charCodeAt(n + a) === 47)
              return r.slice(n + a + 1);
            if (a === 0)
              return r.slice(n + a);
          } else
            t > v && (e.charCodeAt(i + a) === 47 ? u = a : a === 0 && (u = 0));
          break;
        }
        var m = e.charCodeAt(i + a), C = r.charCodeAt(n + a);
        if (m !== C)
          break;
        m === 47 && (u = a);
      }
      var d = "";
      for (a = i + u + 1; a <= l; ++a)
        (a === l || e.charCodeAt(a) === 47) && (d.length === 0 ? d += ".." : d += "/..");
      return d.length > 0 ? d + r.slice(n + u) : (n += u, r.charCodeAt(n) === 47 && ++n, r.slice(n));
    }, _makeLong: function(e) {
      return e;
    }, dirname: function(e) {
      if (c(e), e.length === 0)
        return ".";
      for (var r = e.charCodeAt(0), i = r === 47, l = -1, t = true, n = e.length - 1; n >= 1; --n)
        if (r = e.charCodeAt(n), r === 47) {
          if (!t) {
            l = n;
            break;
          }
        } else
          t = false;
      return l === -1 ? i ? "/" : "." : i && l === 1 ? "//" : e.slice(0, l);
    }, basename: function(e, r) {
      if (r !== void 0 && typeof r != "string")
        throw new TypeError('"ext" argument must be a string');
      c(e);
      var i = 0, l = -1, t = true, n;
      if (r !== void 0 && r.length > 0 && r.length <= e.length) {
        if (r.length === e.length && r === e)
          return "";
        var f = r.length - 1, s = -1;
        for (n = e.length - 1; n >= 0; --n) {
          var v = e.charCodeAt(n);
          if (v === 47) {
            if (!t) {
              i = n + 1;
              break;
            }
          } else
            s === -1 && (t = false, s = n + 1), f >= 0 && (v === r.charCodeAt(f) ? --f === -1 && (l = n) : (f = -1, l = s));
        }
        return i === l ? l = s : l === -1 && (l = e.length), e.slice(i, l);
      } else {
        for (n = e.length - 1; n >= 0; --n)
          if (e.charCodeAt(n) === 47) {
            if (!t) {
              i = n + 1;
              break;
            }
          } else
            l === -1 && (t = false, l = n + 1);
        return l === -1 ? "" : e.slice(i, l);
      }
    }, extname: function(e) {
      c(e);
      for (var r = -1, i = 0, l = -1, t = true, n = 0, f = e.length - 1; f >= 0; --f) {
        var s = e.charCodeAt(f);
        if (s === 47) {
          if (!t) {
            i = f + 1;
            break;
          }
          continue;
        }
        l === -1 && (t = false, l = f + 1), s === 46 ? r === -1 ? r = f : n !== 1 && (n = 1) : r !== -1 && (n = -1);
      }
      return r === -1 || l === -1 || n === 0 || n === 1 && r === l - 1 && r === i + 1 ? "" : e.slice(r, l);
    }, format: function(e) {
      if (e === null || typeof e != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
      return b("/", e);
    }, parse: function(e) {
      c(e);
      var r = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0)
        return r;
      var i = e.charCodeAt(0), l = i === 47, t;
      l ? (r.root = "/", t = 1) : t = 0;
      for (var n = -1, f = 0, s = -1, v = true, u = e.length - 1, a = 0; u >= t; --u) {
        if (i = e.charCodeAt(u), i === 47) {
          if (!v) {
            f = u + 1;
            break;
          }
          continue;
        }
        s === -1 && (v = false, s = u + 1), i === 46 ? n === -1 ? n = u : a !== 1 && (a = 1) : n !== -1 && (a = -1);
      }
      return n === -1 || s === -1 || a === 0 || a === 1 && n === s - 1 && n === f + 1 ? s !== -1 && (f === 0 && l ? r.base = r.name = e.slice(1, s) : r.base = r.name = e.slice(f, s)) : (f === 0 && l ? (r.name = e.slice(1, n), r.base = e.slice(1, s)) : (r.name = e.slice(f, n), r.base = e.slice(f, s)), r.ext = e.slice(n, s)), f > 0 ? r.dir = e.slice(0, f - 1) : l && (r.dir = "/"), r;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    g.posix = g;
    module2.exports = g;
  }
});

// fill-plugin:crypto
var require_crypto = __commonJS({
  "fill-plugin:crypto"() {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
  }
});

// ../../node_modules/.pnpm/min-indent@1.0.1/node_modules/min-indent/index.js
var require_min_indent = __commonJS({
  "../../node_modules/.pnpm/min-indent@1.0.1/node_modules/min-indent/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    module2.exports = (string) => {
      const match = string.match(/^[ \t]*(?=\S)/gm);
      if (!match) {
        return 0;
      }
      return match.reduce((r, a) => Math.min(r, a.length), Infinity);
    };
  }
});

// ../../node_modules/.pnpm/strip-indent@3.0.0/node_modules/strip-indent/index.js
var require_strip_indent = __commonJS({
  "../../node_modules/.pnpm/strip-indent@3.0.0/node_modules/strip-indent/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var minIndent = require_min_indent();
    module2.exports = (string) => {
      const indent = minIndent(string);
      if (indent === 0) {
        return string;
      }
      const regex = new RegExp(`^[ \\t]{${indent}}`, "gm");
      return string.replace(regex, "");
    };
  }
});

// ../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/eventemitter3c79249dd.js
var require_eventemitter3c79249dd = __commonJS({
  "../../../../../../var/folders/5g/h3b3z1wn259g8qh2fj9z_v7w0000gn/T/esbuild/eventemitter3c79249dd.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var d = Object.prototype.hasOwnProperty;
    var c = "~";
    function _() {
    }
    Object.create && (_.prototype = /* @__PURE__ */ Object.create(null), new _().__proto__ || (c = false));
    function g(s, t, n) {
      this.fn = s, this.context = t, this.once = n || false;
    }
    function w(s, t, n, r, l) {
      if (typeof n != "function")
        throw new TypeError("The listener must be a function");
      var f = new g(n, r || s, l), o = c ? c + t : t;
      return s._events[o] ? s._events[o].fn ? s._events[o] = [s._events[o], f] : s._events[o].push(f) : (s._events[o] = f, s._eventsCount++), s;
    }
    function y(s, t) {
      --s._eventsCount === 0 ? s._events = new _() : delete s._events[t];
    }
    function u() {
      this._events = new _(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var t = [], n, r;
      if (this._eventsCount === 0)
        return t;
      for (r in n = this._events)
        d.call(n, r) && t.push(c ? r.slice(1) : r);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(n)) : t;
    };
    u.prototype.listeners = function(t) {
      var n = c ? c + t : t, r = this._events[n];
      if (!r)
        return [];
      if (r.fn)
        return [r.fn];
      for (var l = 0, f = r.length, o = new Array(f); l < f; l++)
        o[l] = r[l].fn;
      return o;
    };
    u.prototype.listenerCount = function(t) {
      var n = c ? c + t : t, r = this._events[n];
      return r ? r.fn ? 1 : r.length : 0;
    };
    u.prototype.emit = function(t, n, r, l, f, o) {
      var a = c ? c + t : t;
      if (!this._events[a])
        return false;
      var e = this._events[a], h = arguments.length, p, i;
      if (e.fn) {
        switch (e.once && this.removeListener(t, e.fn, void 0, true), h) {
          case 1:
            return e.fn.call(e.context), true;
          case 2:
            return e.fn.call(e.context, n), true;
          case 3:
            return e.fn.call(e.context, n, r), true;
          case 4:
            return e.fn.call(e.context, n, r, l), true;
          case 5:
            return e.fn.call(e.context, n, r, l, f), true;
          case 6:
            return e.fn.call(e.context, n, r, l, f, o), true;
        }
        for (i = 1, p = new Array(h - 1); i < h; i++)
          p[i - 1] = arguments[i];
        e.fn.apply(e.context, p);
      } else {
        var x = e.length, v;
        for (i = 0; i < x; i++)
          switch (e[i].once && this.removeListener(t, e[i].fn, void 0, true), h) {
            case 1:
              e[i].fn.call(e[i].context);
              break;
            case 2:
              e[i].fn.call(e[i].context, n);
              break;
            case 3:
              e[i].fn.call(e[i].context, n, r);
              break;
            case 4:
              e[i].fn.call(e[i].context, n, r, l);
              break;
            default:
              if (!p)
                for (v = 1, p = new Array(h - 1); v < h; v++)
                  p[v - 1] = arguments[v];
              e[i].fn.apply(e[i].context, p);
          }
      }
      return true;
    };
    u.prototype.on = function(t, n, r) {
      return w(this, t, n, r, false);
    };
    u.prototype.once = function(t, n, r) {
      return w(this, t, n, r, true);
    };
    u.prototype.removeListener = function(t, n, r, l) {
      var f = c ? c + t : t;
      if (!this._events[f])
        return this;
      if (!n)
        return y(this, f), this;
      var o = this._events[f];
      if (o.fn)
        o.fn === n && (!l || o.once) && (!r || o.context === r) && y(this, f);
      else {
        for (var a = 0, e = [], h = o.length; a < h; a++)
          (o[a].fn !== n || l && !o[a].once || r && o[a].context !== r) && e.push(o[a]);
        e.length ? this._events[f] = e.length === 1 ? e[0] : e : y(this, f);
      }
      return this;
    };
    u.prototype.removeAllListeners = function(t) {
      var n;
      return t ? (n = c ? c + t : t, this._events[n] && y(this, n)) : (this._events = new _(), this._eventsCount = 0), this;
    };
    u.prototype.off = u.prototype.removeListener;
    u.prototype.addListener = u.prototype.on;
    u.prefixed = c;
    u.EventEmitter = u;
    typeof module2 < "u" && (module2.exports = u);
  }
});

// ../../node_modules/.pnpm/indent-string@4.0.0/node_modules/indent-string/index.js
var require_indent_string = __commonJS({
  "../../node_modules/.pnpm/indent-string@4.0.0/node_modules/indent-string/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    module2.exports = (string, count2 = 1, options) => {
      options = {
        indent: " ",
        includeEmptyLines: false,
        ...options
      };
      if (typeof string !== "string") {
        throw new TypeError(
          `Expected \`input\` to be a \`string\`, got \`${typeof string}\``
        );
      }
      if (typeof count2 !== "number") {
        throw new TypeError(
          `Expected \`count\` to be a \`number\`, got \`${typeof count2}\``
        );
      }
      if (typeof options.indent !== "string") {
        throw new TypeError(
          `Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
        );
      }
      if (count2 === 0) {
        return string;
      }
      const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return string.replace(regex, options.indent.repeat(count2));
    };
  }
});

// ../../node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "../../node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    module2.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// ../../node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "../../node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    var ansiRegex = require_ansi_regex();
    module2.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
  }
});

// ../../node_modules/.pnpm/new-github-issue-url@0.2.1/node_modules/new-github-issue-url/index.js
var require_new_github_issue_url = __commonJS({
  "../../node_modules/.pnpm/new-github-issue-url@0.2.1/node_modules/new-github-issue-url/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    module2.exports = (options = {}) => {
      let repoUrl;
      if (options.repoUrl) {
        repoUrl = options.repoUrl;
      } else if (options.user && options.repo) {
        repoUrl = `https://github.com/${options.user}/${options.repo}`;
      } else {
        throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
      }
      const url = new URL(`${repoUrl}/issues/new`);
      const types = [
        "body",
        "title",
        "labels",
        "template",
        "milestone",
        "assignee",
        "projects"
      ];
      for (const type of types) {
        let value = options[type];
        if (value === void 0) {
          continue;
        }
        if (type === "labels" || type === "projects") {
          if (!Array.isArray(value)) {
            throw new TypeError(`The \`${type}\` option should be an array`);
          }
          value = value.join(",");
        }
        url.searchParams.set(type, value);
      }
      return url.toString();
    };
    module2.exports.default = module2.exports;
  }
});

// fill-plugin:async_hooks
var require_async_hooks = __commonJS({
  "fill-plugin:async_hooks"() {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
  }
});

// ../../node_modules/.pnpm/js-levenshtein@1.1.6/node_modules/js-levenshtein/index.js
var require_js_levenshtein = __commonJS({
  "../../node_modules/.pnpm/js-levenshtein@1.1.6/node_modules/js-levenshtein/index.js"(exports2, module2) {
    "use strict";
    init_buffer();
    init_process();
    init_perf_hooks();
    init_function();
    init_weakref();
    module2.exports = /* @__PURE__ */ function() {
      function _min(d0, d1, d2, bx, ay) {
        return d0 < d1 || d2 < d1 ? d0 > d2 ? d2 + 1 : d0 + 1 : bx === ay ? d1 : d1 + 1;
      }
      return function(a, b) {
        if (a === b) {
          return 0;
        }
        if (a.length > b.length) {
          var tmp = a;
          a = b;
          b = tmp;
        }
        var la = a.length;
        var lb = b.length;
        while (la > 0 && a.charCodeAt(la - 1) === b.charCodeAt(lb - 1)) {
          la--;
          lb--;
        }
        var offset = 0;
        while (offset < la && a.charCodeAt(offset) === b.charCodeAt(offset)) {
          offset++;
        }
        la -= offset;
        lb -= offset;
        if (la === 0 || lb < 3) {
          return lb;
        }
        var x = 0;
        var y;
        var d0;
        var d1;
        var d2;
        var d3;
        var dd;
        var dy;
        var ay;
        var bx0;
        var bx1;
        var bx2;
        var bx3;
        var vector = [];
        for (y = 0; y < la; y++) {
          vector.push(y + 1);
          vector.push(a.charCodeAt(offset + y));
        }
        var len = vector.length - 1;
        for (; x < lb - 3; ) {
          bx0 = b.charCodeAt(offset + (d0 = x));
          bx1 = b.charCodeAt(offset + (d1 = x + 1));
          bx2 = b.charCodeAt(offset + (d2 = x + 2));
          bx3 = b.charCodeAt(offset + (d3 = x + 3));
          dd = x += 4;
          for (y = 0; y < len; y += 2) {
            dy = vector[y];
            ay = vector[y + 1];
            d0 = _min(dy, d0, d1, bx0, ay);
            d1 = _min(d0, d1, d2, bx1, ay);
            d2 = _min(d1, d2, d3, bx2, ay);
            dd = _min(d2, d3, dd, bx3, ay);
            vector[y] = dd;
            d3 = d2;
            d2 = d1;
            d1 = d0;
            d0 = dy;
          }
        }
        for (; x < lb; ) {
          bx0 = b.charCodeAt(offset + (d0 = x));
          dd = ++x;
          for (y = 0; y < len; y += 2) {
            dy = vector[y];
            vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
            d0 = dy;
          }
        }
        return dd;
      };
    }();
  }
});

// src/runtime/index.ts
var runtime_exports = {};
__export(runtime_exports, {
  DMMF: () => DMMF,
  DMMFClass: () => DMMFHelper,
  Debug: () => Debug,
  Decimal: () => decimal_default,
  Extensions: () => extensions_exports,
  MetricsClient: () => MetricsClient,
  NotFoundError: () => NotFoundError,
  ObjectEnumValue: () => ObjectEnumValue,
  PrismaClientInitializationError: () => PrismaClientInitializationError,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError,
  PrismaClientValidationError: () => PrismaClientValidationError,
  Public: () => public_exports,
  Sql: () => Sql,
  Types: () => types_exports,
  defineDmmfProperty: () => defineDmmfProperty,
  detectRuntime: () => detectRuntime,
  empty: () => empty,
  getPrismaClient: () => getPrismaClient,
  itxClientDenyList: () => itxClientDenyList,
  join: () => join,
  makeStrictEnum: () => makeStrictEnum,
  objectEnumNames: () => objectEnumNames,
  objectEnumValues: () => objectEnumValues,
  raw: () => raw,
  sqltag: () => sql,
  warnEnvConflicts: () => void 0,
  warnOnce: () => warnOnce
});
module.exports = __toCommonJS(runtime_exports);
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/extensions/index.ts
var extensions_exports = {};
__export(extensions_exports, {
  defineExtension: () => defineExtension,
  getExtensionContext: () => getExtensionContext
});
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/extensions/defineExtension.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function defineExtension(ext) {
  if (typeof ext === "function") {
    return ext;
  }
  return (client) => client.$extends(ext);
}

// src/runtime/core/extensions/getExtensionContext.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getExtensionContext(that) {
  return that;
}

// src/runtime/core/public/index.ts
var public_exports = {};
__export(public_exports, {
  validator: () => validator
});
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/public/validator.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function validator(..._args) {
  return (args) => args;
}

// src/runtime/core/types/index.ts
var types_exports = {};
__export(types_exports, {
  Extensions: () => Extensions_exports,
  Public: () => Public_exports,
  Result: () => Result_exports,
  Utils: () => Utils_exports
});
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/types/exported/Extensions.ts
var Extensions_exports = {};
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/types/exported/Public.ts
var Public_exports = {};
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/types/exported/Result.ts
var Result_exports = {};
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/types/exported/Utils.ts
var Utils_exports = {};
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/generation/dmmf.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/generation/utils/common.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var keyBy = (collection, prop) => {
  const acc = {};
  for (const obj of collection) {
    const key = obj[prop];
    acc[key] = obj;
  }
  return acc;
};
function lowerCase(name) {
  return name.substring(0, 1).toLowerCase() + name.substring(1);
}

// src/generation/dmmf.ts
var DMMFHelper = class {
  constructor(document2) {
    this.document = document2;
    this.compositeNames = new Set(this.datamodel.types.map((t) => t.name));
    this.typeAndModelMap = this.buildTypeModelMap();
    this.mappingsMap = this.buildMappingsMap();
    this.outputTypeMap = this.buildMergedOutputTypeMap();
    this.rootFieldMap = this.buildRootFieldMap();
    this.inputTypesByName = this.buildInputTypesMap();
  }
  get datamodel() {
    return this.document.datamodel;
  }
  get mappings() {
    return this.document.mappings;
  }
  get schema() {
    return this.document.schema;
  }
  get inputObjectTypes() {
    return this.schema.inputObjectTypes;
  }
  get outputObjectTypes() {
    return this.schema.outputObjectTypes;
  }
  isComposite(modelOrTypeName) {
    return this.compositeNames.has(modelOrTypeName);
  }
  getOtherOperationNames() {
    return [
      Object.values(this.mappings.otherOperations.write),
      Object.values(this.mappings.otherOperations.read)
    ].flat();
  }
  hasEnumInNamespace(enumName, namespace) {
    var _a3;
    return ((_a3 = this.schema.enumTypes[namespace]) == null ? void 0 : _a3.find((schemaEnum) => schemaEnum.name === enumName)) !== void 0;
  }
  resolveInputObjectType(ref) {
    return this.inputTypesByName.get(fullyQualifiedName(ref.type, ref.namespace));
  }
  resolveOutputObjectType(ref) {
    var _a3;
    if (ref.location !== "outputObjectTypes") {
      return void 0;
    }
    return this.outputObjectTypes[(_a3 = ref.namespace) != null ? _a3 : "prisma"].find((outputObject) => outputObject.name === ref.type);
  }
  buildModelMap() {
    return keyBy(this.datamodel.models, "name");
  }
  buildTypeMap() {
    return keyBy(this.datamodel.types, "name");
  }
  buildTypeModelMap() {
    return { ...this.buildTypeMap(), ...this.buildModelMap() };
  }
  buildMappingsMap() {
    return keyBy(this.mappings.modelOperations, "model");
  }
  buildMergedOutputTypeMap() {
    return {
      model: keyBy(this.schema.outputObjectTypes.model, "name"),
      prisma: keyBy(this.schema.outputObjectTypes.prisma, "name")
    };
  }
  buildRootFieldMap() {
    return {
      ...keyBy(this.outputTypeMap.prisma.Query.fields, "name"),
      ...keyBy(this.outputTypeMap.prisma.Mutation.fields, "name")
    };
  }
  buildInputTypesMap() {
    const result = /* @__PURE__ */ new Map();
    for (const type of this.inputObjectTypes.prisma) {
      result.set(fullyQualifiedName(type.name, "prisma"), type);
    }
    if (!this.inputObjectTypes.model) {
      return result;
    }
    for (const type of this.inputObjectTypes.model) {
      result.set(fullyQualifiedName(type.name, "model"), type);
    }
    return result;
  }
};
function fullyQualifiedName(typeName, namespace) {
  if (namespace) {
    return `${namespace}.${typeName}`;
  }
  return typeName;
}

// src/generation/dmmf-types.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../generator-helper/src/index.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../generator-helper/src/dmmf.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var DMMF;
((DMMF2) => {
  let ModelAction;
  ((ModelAction2) => {
    ModelAction2["findUnique"] = "findUnique";
    ModelAction2["findUniqueOrThrow"] = "findUniqueOrThrow";
    ModelAction2["findFirst"] = "findFirst";
    ModelAction2["findFirstOrThrow"] = "findFirstOrThrow";
    ModelAction2["findMany"] = "findMany";
    ModelAction2["create"] = "create";
    ModelAction2["createMany"] = "createMany";
    ModelAction2["update"] = "update";
    ModelAction2["updateMany"] = "updateMany";
    ModelAction2["upsert"] = "upsert";
    ModelAction2["delete"] = "delete";
    ModelAction2["deleteMany"] = "deleteMany";
    ModelAction2["groupBy"] = "groupBy";
    ModelAction2["count"] = "count";
    ModelAction2["aggregate"] = "aggregate";
    ModelAction2["findRaw"] = "findRaw";
    ModelAction2["aggregateRaw"] = "aggregateRaw";
  })(ModelAction = DMMF2.ModelAction || (DMMF2.ModelAction = {}));
})(DMMF || (DMMF = {}));

// ../debug/src/index.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_debug = __toESM(require_src());
var MAX_LOGS = 100;
var debugArgsHistory = [];
var _a2, _b;
if (typeof process !== "undefined" && typeof ((_a2 = process.stderr) == null ? void 0 : _a2.write) !== "function") {
  import_debug.default.log = (_b = console.debug) != null ? _b : console.log;
}
function debugCall(namespace) {
  const debugNamespace = (0, import_debug.default)(namespace);
  const call = Object.assign((...args) => {
    debugNamespace.log = call.log;
    if (args.length !== 0) {
      debugArgsHistory.push([namespace, ...args]);
    }
    if (debugArgsHistory.length > MAX_LOGS) {
      debugArgsHistory.shift();
    }
    return debugNamespace("", ...args);
  }, debugNamespace);
  return call;
}
var Debug = Object.assign(debugCall, import_debug.default);
function getLogs(numChars = 7500) {
  const output = debugArgsHistory.map(
    (c) => c.map((item) => {
      if (typeof item === "string") {
        return item;
      }
      return JSON.stringify(item);
    }).join(" ")
  ).join("\n");
  if (output.length < numChars) {
    return output;
  }
  return output.slice(-numChars);
}
function clearLogs() {
  debugArgsHistory.length = 0;
}
var src_default = Debug;

// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);

// src/runtime/core/errors/NotFoundError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../internals/src/index.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../get-platform/src/index.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../get-platform/src/binaryTargets.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var binaryTargets = [
  "darwin",
  "darwin-arm64",
  "debian-openssl-1.0.x",
  "debian-openssl-1.1.x",
  "debian-openssl-3.0.x",
  "rhel-openssl-1.0.x",
  "rhel-openssl-1.1.x",
  "rhel-openssl-3.0.x",
  "linux-arm64-openssl-1.1.x",
  "linux-arm64-openssl-1.0.x",
  "linux-arm64-openssl-3.0.x",
  "linux-arm-openssl-1.1.x",
  "linux-arm-openssl-1.0.x",
  "linux-arm-openssl-3.0.x",
  "linux-musl",
  "linux-musl-openssl-3.0.x",
  "linux-musl-arm64-openssl-1.1.x",
  "linux-musl-arm64-openssl-3.0.x",
  "linux-nixos",
  "linux-static-x64",
  "linux-static-arm64",
  "windows",
  "freebsd11",
  "freebsd12",
  "freebsd13",
  "freebsd14",
  "openbsd",
  "netbsd",
  "arm"
];

// ../internals/src/client/getClientEngineType.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var DEFAULT_CLIENT_ENGINE_TYPE = "library" /* Library */;
function getClientEngineType(generatorConfig) {
  const engineTypeFromEnvVar = getEngineTypeFromEnvVar();
  if (engineTypeFromEnvVar)
    return engineTypeFromEnvVar;
  if ((generatorConfig == null ? void 0 : generatorConfig.config.engineType) === "library" /* Library */) {
    return "library" /* Library */;
  } else if ((generatorConfig == null ? void 0 : generatorConfig.config.engineType) === "binary" /* Binary */) {
    return "binary" /* Binary */;
  } else if ((generatorConfig == null ? void 0 : generatorConfig.config.engineType) === "wasm" /* Wasm */) {
    return "wasm" /* Wasm */;
  } else {
    return DEFAULT_CLIENT_ENGINE_TYPE;
  }
}
function getEngineTypeFromEnvVar() {
  const engineType = process.env.PRISMA_CLIENT_ENGINE_TYPE;
  if (engineType === "library" /* Library */) {
    return "library" /* Library */;
  } else if (engineType === "binary" /* Binary */) {
    return "binary" /* Binary */;
  } else if (engineType === "wasm" /* Wasm */) {
    return "wasm" /* Wasm */;
  } else {
    return void 0;
  }
}

// ../internals/src/utils/path.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_path = __toESM(require_path_browserify26d6a5bb());
function pathToPosix(filePath) {
  if (import_path.default.sep === import_path.default.posix.sep) {
    return filePath;
  }
  return filePath.split(import_path.default.sep).join(import_path.default.posix.sep);
}

// ../internals/src/logger.ts
var logger_exports = {};
__export(logger_exports, {
  error: () => error,
  info: () => info,
  log: () => log,
  query: () => query,
  should: () => should,
  tags: () => tags,
  warn: () => warn
});
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var tags = {
  error: red("prisma:error"),
  warn: yellow("prisma:warn"),
  info: cyan("prisma:info"),
  query: blue("prisma:query")
};
var should = {
  warn: () => !process.env.PRISMA_DISABLE_WARNINGS
};
function log(...data) {
  console.log(...data);
}
function warn(message, ...optionalParams) {
  if (should.warn()) {
    console.warn(`${tags.warn} ${message}`, ...optionalParams);
  }
}
function info(message, ...optionalParams) {
  console.info(`${tags.info} ${message}`, ...optionalParams);
}
function error(message, ...optionalParams) {
  console.error(`${tags.error} ${message}`, ...optionalParams);
}
function query(message, ...optionalParams) {
  console.log(`${tags.query} ${message}`, ...optionalParams);
}

// ../internals/src/utils/assertAlways.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function assertAlways(condition, message) {
  if (!condition) {
    throw new Error(
      `${message}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`
    );
  }
}

// ../internals/src/utils/assertNever.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function assertNever(arg, errorMessage) {
  throw new Error(errorMessage);
}

// ../internals/src/utils/hasOwnProperty.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

// ../internals/src/utils/keyBy.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var keyBy2 = (collection, iteratee) => {
  return collection.reduce((acc, curr) => {
    acc[iteratee(curr)] = curr;
    return acc;
  }, {});
};

// ../internals/src/utils/mapObjectValues.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function mapObjectValues(object, mapper) {
  const result = {};
  for (const key of Object.keys(object)) {
    result[key] = mapper(object[key], key);
  }
  return result;
}

// ../internals/src/utils/max.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function maxWithComparator(items, comparator) {
  if (items.length === 0) {
    return void 0;
  }
  let result = items[0];
  for (let i = 1; i < items.length; i++) {
    const compareValue = comparator(result, items[i]);
    if (compareValue < 0) {
      result = items[i];
    }
  }
  return result;
}

// ../internals/src/utils/setClassName.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function setClassName(classObject, name) {
  Object.defineProperty(classObject, "name", {
    value: name,
    configurable: true
  });
}

// ../internals/src/warnOnce.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var alreadyWarned = /* @__PURE__ */ new Set();
var warnOnce = (key, message, ...args) => {
  if (!alreadyWarned.has(key)) {
    alreadyWarned.add(key);
    warn(message, ...args);
  }
};

// src/runtime/core/errors/PrismaClientKnownRequestError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var PrismaClientKnownRequestError = class extends Error {
  constructor(message, { code, clientVersion: clientVersion2, meta, batchRequestIdx }) {
    super(message);
    this.name = "PrismaClientKnownRequestError";
    this.code = code;
    this.clientVersion = clientVersion2;
    this.meta = meta;
    Object.defineProperty(this, "batchRequestIdx", {
      value: batchRequestIdx,
      enumerable: false,
      writable: true
    });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
setClassName(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");

// src/runtime/core/errors/NotFoundError.ts
var NotFoundError = class extends PrismaClientKnownRequestError {
  constructor(message, clientVersion2) {
    super(message, { code: "P2025", clientVersion: clientVersion2 });
    this.name = "NotFoundError";
  }
};
setClassName(NotFoundError, "NotFoundError");

// src/runtime/core/errors/PrismaClientInitializationError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var PrismaClientInitializationError = class _PrismaClientInitializationError extends Error {
  constructor(message, clientVersion2, errorCode) {
    super(message);
    this.name = "PrismaClientInitializationError";
    this.clientVersion = clientVersion2;
    this.errorCode = errorCode;
    Error.captureStackTrace(_PrismaClientInitializationError);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
setClassName(PrismaClientInitializationError, "PrismaClientInitializationError");

// src/runtime/core/errors/PrismaClientRustPanicError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var PrismaClientRustPanicError = class extends Error {
  constructor(message, clientVersion2) {
    super(message);
    this.name = "PrismaClientRustPanicError";
    this.clientVersion = clientVersion2;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
setClassName(PrismaClientRustPanicError, "PrismaClientRustPanicError");

// src/runtime/core/errors/PrismaClientUnknownRequestError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var PrismaClientUnknownRequestError = class extends Error {
  constructor(message, { clientVersion: clientVersion2, batchRequestIdx }) {
    super(message);
    this.name = "PrismaClientUnknownRequestError";
    this.clientVersion = clientVersion2;
    Object.defineProperty(this, "batchRequestIdx", {
      value: batchRequestIdx,
      writable: true,
      enumerable: false
    });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
setClassName(PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError");

// src/runtime/core/errors/PrismaClientValidationError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var PrismaClientValidationError = class extends Error {
  constructor(message, { clientVersion: clientVersion2 }) {
    super(message);
    this.name = "PrismaClientValidationError";
    this.clientVersion = clientVersion2;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
setClassName(PrismaClientValidationError, "PrismaClientValidationError");

// src/runtime/core/metrics/MetricsClient.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var MetricsClient = class {
  constructor(engine) {
    this._engine = engine;
  }
  /**
   * Returns all metrics gathered up to this point in prometheus format.
   * Result of this call can be exposed directly to prometheus scraping endpoint
   *
   * @param options
   * @returns
   */
  prometheus(options) {
    return this._engine.metrics({ format: "prometheus", ...options });
  }
  /**
   * Returns all metrics gathered up to this point in prometheus format.
   *
   * @param options
   * @returns
   */
  json(options) {
    return this._engine.metrics({ format: "json", ...options });
  }
};

// src/runtime/core/runtimeDataModel.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/generation/lazyProperty.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function lazyProperty(compute) {
  let resultContainer;
  return {
    get() {
      if (resultContainer) {
        return resultContainer.value;
      }
      resultContainer = { value: compute() };
      return resultContainer.value;
    }
  };
}

// src/runtime/core/runtimeDataModel.ts
function defineDmmfProperty(target, runtimeDataModel) {
  const dmmfLazy = lazyProperty(() => runtimeDataModelToBaseDmmf(runtimeDataModel));
  Object.defineProperty(target, "dmmf", {
    get: () => dmmfLazy.get()
  });
}
function runtimeDataModelToBaseDmmf(runtimeDataModel) {
  return {
    datamodel: {
      models: buildDMMFList(runtimeDataModel.models),
      enums: buildDMMFList(runtimeDataModel.enums),
      types: buildDMMFList(runtimeDataModel.types)
    }
  };
}
function buildDMMFList(map) {
  return Object.entries(map).map(([name, props]) => ({ name, ...props }));
}

// src/runtime/core/types/exported/itxClientDenyList.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var denylist = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
var itxClientDenyList = denylist;

// src/runtime/core/types/exported/ObjectEnums.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var objectEnumNames = ["JsonNullValueInput", "NullableJsonNullValueInput", "JsonNullValueFilter"];
var secret = Symbol();
var representations = /* @__PURE__ */ new WeakMap();
var ObjectEnumValue = class {
  constructor(arg) {
    if (arg === secret) {
      representations.set(this, `Prisma.${this._getName()}`);
    } else {
      representations.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
  }
  _getName() {
    return this.constructor.name;
  }
  toString() {
    return representations.get(this);
  }
};
var NullTypesEnumValue = class extends ObjectEnumValue {
  _getNamespace() {
    return "NullTypes";
  }
};
var DbNull = class extends NullTypesEnumValue {
};
setClassName2(DbNull, "DbNull");
var JsonNull = class extends NullTypesEnumValue {
};
setClassName2(JsonNull, "JsonNull");
var AnyNull = class extends NullTypesEnumValue {
};
setClassName2(AnyNull, "AnyNull");
var objectEnumValues = {
  classes: {
    DbNull,
    JsonNull,
    AnyNull
  },
  instances: {
    DbNull: new DbNull(secret),
    JsonNull: new JsonNull(secret),
    AnyNull: new AnyNull(secret)
  }
};
function setClassName2(classObject, name) {
  Object.defineProperty(classObject, "name", {
    value: name,
    configurable: true
  });
}

// src/runtime/getPrismaClient.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../driver-adapter-utils/src/index.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../driver-adapter-utils/src/binder.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../driver-adapter-utils/src/result.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function err(error2) {
  return {
    ok: false,
    error: error2,
    map() {
      return err(error2);
    },
    flatMap() {
      return err(error2);
    }
  };
}

// ../driver-adapter-utils/src/binder.ts
var ErrorRegistryInternal = class {
  constructor() {
    this.registeredErrors = [];
  }
  consumeError(id) {
    return this.registeredErrors[id];
  }
  registerNewError(error2) {
    let i = 0;
    while (this.registeredErrors[i] !== void 0) {
      i++;
    }
    this.registeredErrors[i] = { error: error2 };
    return i;
  }
};
var bindAdapter = (adapter) => {
  const errorRegistry = new ErrorRegistryInternal();
  const startTransaction = wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter));
  const boundAdapter = {
    errorRegistry,
    queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
    executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
    provider: adapter.provider,
    startTransaction: async (...args) => {
      const result = await startTransaction(...args);
      return result.map((tx) => bindTransaction(errorRegistry, tx));
    }
  };
  if (adapter.getConnectionInfo) {
    boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
  }
  return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction) => {
  return {
    provider: transaction.provider,
    options: transaction.options,
    queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
    executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
    commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
    rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
  };
};
function wrapAsync(registry, fn2) {
  return async (...args) => {
    try {
      return await fn2(...args);
    } catch (error2) {
      const id = registry.registerNewError(error2);
      return err({ kind: "GenericJs", id });
    }
  };
}
function wrapSync(registry, fn2) {
  return (...args) => {
    try {
      return fn2(...args);
    } catch (error2) {
      const id = registry.registerNewError(error2);
      return err({ kind: "GenericJs", id });
    }
  };
}

// src/runtime/getPrismaClient.ts
var import_async_hooks = __toESM(require_async_hooks());
var import_events = __toESM(require_eventemitter3c79249dd());
init_fs();
var import_path3 = __toESM(require_path_browserify26d6a5bb());

// ../../node_modules/.pnpm/sql-template-tag@5.2.0/node_modules/sql-template-tag/dist/index.js
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var Sql = class _Sql {
  constructor(rawStrings, rawValues) {
    if (rawStrings.length - 1 !== rawValues.length) {
      if (rawStrings.length === 0) {
        throw new TypeError("Expected at least 1 string");
      }
      throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
    }
    const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
    this.values = new Array(valuesLength);
    this.strings = new Array(valuesLength + 1);
    this.strings[0] = rawStrings[0];
    let i = 0, pos = 0;
    while (i < rawValues.length) {
      const child = rawValues[i++];
      const rawString = rawStrings[i];
      if (child instanceof _Sql) {
        this.strings[pos] += child.strings[0];
        let childIndex = 0;
        while (childIndex < child.values.length) {
          this.values[pos++] = child.values[childIndex++];
          this.strings[pos] = child.strings[childIndex];
        }
        this.strings[pos] += rawString;
      } else {
        this.values[pos++] = child;
        this.strings[pos] = rawString;
      }
    }
  }
  get text() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `$${i}${this.strings[i++]}`;
    return value;
  }
  get sql() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `?${this.strings[i++]}`;
    return value;
  }
  get statement() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `:${i}${this.strings[i++]}`;
    return value;
  }
  inspect() {
    return {
      text: this.text,
      sql: this.sql,
      values: this.values
    };
  }
};
function join(values, separator2 = ",", prefix = "", suffix = "") {
  if (values.length === 0) {
    throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
  }
  return new Sql([prefix, ...Array(values.length - 1).fill(separator2), suffix], values);
}
function raw(value) {
  return new Sql([value], []);
}
var empty = raw("");
function sql(strings, ...values) {
  return new Sql(strings, values);
}

// src/runtime/core/compositeProxy/index.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/compositeProxy/addObjectProperties.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function addObjectProperties(object) {
  return {
    getKeys() {
      return Object.keys(object);
    },
    getPropertyValue(key) {
      return object[key];
    }
  };
}

// src/runtime/core/compositeProxy/addProperty.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function addProperty(key, factory) {
  return {
    getKeys() {
      return [key];
    },
    getPropertyValue() {
      return factory();
    }
  };
}

// src/runtime/core/compositeProxy/cacheProperties.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/generation/Cache.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var Cache = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  get(key) {
    var _a3;
    return (_a3 = this._map.get(key)) == null ? void 0 : _a3.value;
  }
  set(key, value) {
    this._map.set(key, { value });
  }
  getOrCreate(key, create) {
    const cached = this._map.get(key);
    if (cached) {
      return cached.value;
    }
    const value = create();
    this.set(key, value);
    return value;
  }
};

// src/runtime/core/compositeProxy/cacheProperties.ts
function cacheProperties(baseLayer) {
  const cache = new Cache();
  return {
    getKeys() {
      return baseLayer.getKeys();
    },
    getPropertyValue(key) {
      return cache.getOrCreate(key, () => baseLayer.getPropertyValue(key));
    },
    getPropertyDescriptor(key) {
      var _a3;
      return (_a3 = baseLayer.getPropertyDescriptor) == null ? void 0 : _a3.call(baseLayer, key);
    }
  };
}

// src/runtime/core/compositeProxy/createCompositeProxy.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_util = __toESM(require_util18b0155d());

// src/runtime/core/model/utils/defaultProxyHandlers.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var defaultPropertyDescriptor = {
  enumerable: true,
  configurable: true,
  writable: true
};
function defaultProxyHandlers(ownKeys) {
  const _ownKeys = new Set(ownKeys);
  return {
    getOwnPropertyDescriptor: () => defaultPropertyDescriptor,
    has: (target, prop) => _ownKeys.has(prop),
    set: (target, prop, value) => {
      return _ownKeys.add(prop) && Reflect.set(target, prop, value);
    },
    ownKeys: () => [..._ownKeys]
  };
}

// src/runtime/core/compositeProxy/createCompositeProxy.ts
var customInspect = Symbol.for("nodejs.util.inspect.custom");
function createCompositeProxy(target, layers) {
  const keysToLayerMap = mapKeysToLayers(layers);
  const overwrittenKeys = /* @__PURE__ */ new Set();
  const proxy = new Proxy(target, {
    get(target2, prop) {
      if (overwrittenKeys.has(prop)) {
        return target2[prop];
      }
      const layer = keysToLayerMap.get(prop);
      if (layer) {
        return layer.getPropertyValue(prop);
      }
      return target2[prop];
    },
    has(target2, prop) {
      var _a3, _b2;
      if (overwrittenKeys.has(prop)) {
        return true;
      }
      const layer = keysToLayerMap.get(prop);
      if (layer) {
        return (_b2 = (_a3 = layer.has) == null ? void 0 : _a3.call(layer, prop)) != null ? _b2 : true;
      }
      return Reflect.has(target2, prop);
    },
    ownKeys(target2) {
      const targetKeys = getExistingKeys(Reflect.ownKeys(target2), keysToLayerMap);
      const layerKeys = getExistingKeys(Array.from(keysToLayerMap.keys()), keysToLayerMap);
      return [.../* @__PURE__ */ new Set([...targetKeys, ...layerKeys, ...overwrittenKeys])];
    },
    set(target2, prop, value) {
      var _a3, _b2;
      const layer = keysToLayerMap.get(prop);
      if (((_b2 = (_a3 = layer == null ? void 0 : layer.getPropertyDescriptor) == null ? void 0 : _a3.call(layer, prop)) == null ? void 0 : _b2.writable) === false) {
        return false;
      }
      overwrittenKeys.add(prop);
      return Reflect.set(target2, prop, value);
    },
    getOwnPropertyDescriptor(target2, prop) {
      const original = Reflect.getOwnPropertyDescriptor(target2, prop);
      if (original && !original.configurable) {
        return original;
      }
      const layer = keysToLayerMap.get(prop);
      if (layer) {
        if (layer.getPropertyDescriptor) {
          return {
            ...defaultPropertyDescriptor,
            ...layer == null ? void 0 : layer.getPropertyDescriptor(prop)
          };
        }
        return defaultPropertyDescriptor;
      }
      return original;
    },
    defineProperty(target2, property, attributes) {
      overwrittenKeys.add(property);
      return Reflect.defineProperty(target2, property, attributes);
    }
  });
  proxy[customInspect] = function(depth, options, defaultInspect = import_util.inspect) {
    const toLog = { ...this };
    delete toLog[customInspect];
    return defaultInspect(toLog, options);
  };
  return proxy;
}
function mapKeysToLayers(layers) {
  const keysToLayerMap = /* @__PURE__ */ new Map();
  for (const layer of layers) {
    const keys2 = layer.getKeys();
    for (const key of keys2) {
      keysToLayerMap.set(key, layer);
    }
  }
  return keysToLayerMap;
}
function getExistingKeys(keys2, keysToLayerMap) {
  return keys2.filter((key) => {
    var _a3, _b2;
    const layer = keysToLayerMap.get(key);
    return (_b2 = (_a3 = layer == null ? void 0 : layer.has) == null ? void 0 : _a3.call(layer, key)) != null ? _b2 : true;
  });
}

// src/runtime/core/compositeProxy/removeProperties.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function removeProperties(keys2) {
  return {
    getKeys() {
      return keys2;
    },
    has() {
      return false;
    },
    getPropertyValue() {
      return void 0;
    }
  };
}

// src/runtime/core/errorRendering/prettyPrintArguments.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/generation/ts-builders/Writer.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var INDENT_SIZE = 2;
var Writer = class {
  constructor(startingIndent = 0, context) {
    this.context = context;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = startingIndent;
  }
  /**
   * Adds provided value to the current line. Does not end the line.
   *
   * @param value
   * @returns
   */
  write(value) {
    if (typeof value === "string") {
      this.currentLine += value;
    } else {
      value.write(this);
    }
    return this;
  }
  /**
   * Adds several `values` to the current line, separated by `separator`. Both values and separator
   * can also be `Builder` instances for more advanced formatting.
   *
   * @param separator
   * @param values
   * @returns
   */
  writeJoined(separator2, values) {
    const last = values.length - 1;
    for (let i = 0; i < values.length; i++) {
      this.write(values[i]);
      if (i !== last) {
        this.write(separator2);
      }
    }
    return this;
  }
  /**
   * Adds a string to current line, flushes current line and starts a new line.
   * @param line
   * @returns
   */
  writeLine(line) {
    return this.write(line).newLine();
  }
  /**
   * Flushes current line and starts a new line. New line starts at previously configured indentation level
   * @returns
   */
  newLine() {
    this.lines.push(this.indentedCurrentLine());
    this.currentLine = "";
    this.marginSymbol = void 0;
    const afterNextNewLineCallback = this.afterNextNewLineCallback;
    this.afterNextNewLineCallback = void 0;
    afterNextNewLineCallback == null ? void 0 : afterNextNewLineCallback();
    return this;
  }
  /**
   * Increases indentation level by 1, calls provided callback and then decreases indentation again.
   * Could be used for writing indented blocks of text:
   *
   * @example
   * ```ts
   * writer
   *   .writeLine('{')
   *   .withIndent(() => {
   *      writer.writeLine('foo: 123');
   *      writer.writeLine('bar: 456');
   *   })
   *   .writeLine('}')
   * ```
   * @param callback
   * @returns
   */
  withIndent(callback) {
    this.indent();
    callback(this);
    this.unindent();
    return this;
  }
  /**
   * Calls provided callback next time when new line is started.
   * Callback is called after old line have already been flushed and a new
   * line have been started. Can be used for adding "between the lines" decorations,
   * such as underlines.
   *
   * @param callback
   * @returns
   */
  afterNextNewline(callback) {
    this.afterNextNewLineCallback = callback;
    return this;
  }
  /**
   * Increases indentation level of the current line by 1
   * @returns
   */
  indent() {
    this.currentIndent++;
    return this;
  }
  /**
   * Decreases indentation level of the current line by 1, if it is possible
   * @returns
   */
  unindent() {
    if (this.currentIndent > 0) {
      this.currentIndent--;
    }
    return this;
  }
  /**
   * Adds a symbol, that will replace the first character of the current line (including indentation)
   * when it is flushed. Can be used for adding markers to the line.
   *
   * Note: if indentation level of the line is 0, it will replace the first actually printed character
   * of the line. Use with caution.
   * @param symbol
   * @returns
   */
  addMarginSymbol(symbol) {
    this.marginSymbol = symbol;
    return this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join("\n");
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    const line = this.currentLine.padStart(this.currentLine.length + INDENT_SIZE * this.currentIndent);
    if (this.marginSymbol) {
      return this.marginSymbol + line.slice(1);
    }
    return line;
  }
};

// src/runtime/core/errorRendering/ArgumentsRenderingTree.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/utils/date.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function isDate(value) {
  return value instanceof Date || // date created in other JS context (for example, worker)
  Object.prototype.toString.call(value) === "[object Date]";
}
function isValidDate(date) {
  return date.toString() !== "Invalid Date";
}

// src/runtime/utils/decimalJsLike.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../../node_modules/.pnpm/decimal.js@10.4.3/node_modules/decimal.js/decimal.mjs
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -EXP_LIMIT,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: EXP_LIMIT,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: false
  // true/false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s)
    return new Ctor(NaN);
  if (min2.gt(max2))
    throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3)
      n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (; w % 10 == 0; w /= 10)
        n--;
    if (n < 0)
      n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var halfPi, x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0)
      for (i = j; r.d[i] === t.d[i] && i--; )
        ;
  }
  if (k)
    r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1))
      return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; )
        k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k)
      k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1))
      throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1e3 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = /* @__PURE__ */ function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(
        // Return NaN if either NaN, or both Infinity or 0.
        !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
        )
      );
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2)
          ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base)
                k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0)
                cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10)
        i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0]; k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (; k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1; k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (; ; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length; xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0]; w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0)
        ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, ltgt) {
  var y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len)
        ;
      for (i = 0, str = ""; i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str = "1."; i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      } else if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v);
    }
    if ((i2 = v.charCodeAt(0)) === 45) {
      v = v.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43)
        v = v.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log2;
  Decimal2.log10 = log10;
  Decimal2.log2 = log22;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log2(x, y) {
  return new this(x).log(y);
}
function log22(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, "lt");
}
function min() {
  return maxOrMin(this, arguments, "gt");
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var decimal_default = Decimal;

// src/runtime/utils/decimalJsLike.ts
function isDecimalJsLike(value) {
  if (Decimal.isDecimal(value)) {
    return true;
  }
  return value !== null && typeof value === "object" && typeof value["s"] === "number" && typeof value["e"] === "number" && typeof value["toFixed"] === "function" && Array.isArray(value["d"]);
}

// src/runtime/core/model/FieldRef.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var FieldRefImpl = class {
  constructor(modelName, name, fieldType, isList, isEnum) {
    this.modelName = modelName;
    this.name = name;
    this.typeName = fieldType;
    this.isList = isList;
    this.isEnum = isEnum;
  }
  _toGraphQLInputType() {
    const listPrefix = this.isList ? `List` : "";
    const enumPrefix = this.isEnum ? "Enum" : "";
    return `${listPrefix}${enumPrefix}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function isFieldRef(value) {
  return value instanceof FieldRefImpl;
}

// src/runtime/core/errorRendering/ArrayValue.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/errorRendering/ArrayField.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var ArrayField = class {
  constructor(value) {
    this.value = value;
  }
  write(writer) {
    writer.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};

// src/runtime/core/errorRendering/base.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var noop2 = (str) => str;
var inactiveColors = {
  bold: noop2,
  red: noop2,
  green: noop2,
  dim: noop2,
  enabled: false
};
var activeColors = {
  bold,
  red,
  green,
  dim,
  enabled: true
};
var fieldsSeparator = {
  write(writer) {
    writer.writeLine(",");
  }
};

// src/runtime/core/errorRendering/FormattedString.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var FormattedString = class {
  constructor(contents) {
    this.contents = contents;
    this.isUnderlined = false;
    this.color = (str) => str;
  }
  underline() {
    this.isUnderlined = true;
    return this;
  }
  setColor(color) {
    this.color = color;
    return this;
  }
  write(writer) {
    const paddingSize = writer.getCurrentLineLength();
    writer.write(this.color(this.contents));
    if (this.isUnderlined) {
      writer.afterNextNewline(() => {
        writer.write(" ".repeat(paddingSize)).writeLine(this.color("~".repeat(this.contents.length)));
      });
    }
  }
};

// src/runtime/core/errorRendering/Value.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var Value = class {
  constructor() {
    this.hasError = false;
  }
  markAsError() {
    this.hasError = true;
    return this;
  }
};

// src/runtime/core/errorRendering/ArrayValue.ts
var ArrayValue = class extends Value {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(item) {
    this.items.push(new ArrayField(item));
    return this;
  }
  getField(index) {
    return this.items[index];
  }
  getPrintWidth() {
    if (this.items.length === 0) {
      return 2;
    }
    const maxItemWidth = Math.max(...this.items.map((item) => item.value.getPrintWidth()));
    return maxItemWidth + INDENT_SIZE;
  }
  write(writer) {
    if (this.items.length === 0) {
      this.writeEmpty(writer);
      return;
    }
    this.writeWithItems(writer);
  }
  writeEmpty(writer) {
    const output = new FormattedString("[]");
    if (this.hasError) {
      output.setColor(writer.context.colors.red).underline();
    }
    writer.write(output);
  }
  writeWithItems(writer) {
    const { colors } = writer.context;
    writer.writeLine("[").withIndent(() => writer.writeJoined(fieldsSeparator, this.items).newLine()).write("]");
    if (this.hasError) {
      writer.afterNextNewline(() => {
        writer.writeLine(colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  }
};

// src/runtime/core/errorRendering/ObjectField.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var separator = ": ";
var ObjectField = class {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.hasError = false;
  }
  markAsError() {
    this.hasError = true;
  }
  getPrintWidth() {
    return this.name.length + this.value.getPrintWidth() + separator.length;
  }
  write(writer) {
    const name = new FormattedString(this.name);
    if (this.hasError) {
      name.underline().setColor(writer.context.colors.red);
    }
    writer.write(name).write(separator).write(this.value);
  }
};

// src/runtime/core/errorRendering/ObjectValue.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var ObjectValue = class _ObjectValue extends Value {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(field) {
    this.fields[field.name] = field;
  }
  addSuggestion(suggestion) {
    this.suggestions.push(suggestion);
  }
  getField(key) {
    return this.fields[key];
  }
  getDeepField(path3) {
    const [head, ...tail] = path3;
    const firstField = this.getField(head);
    if (!firstField) {
      return void 0;
    }
    let field = firstField;
    for (const segment of tail) {
      let nextField;
      if (field.value instanceof _ObjectValue) {
        nextField = field.value.getField(segment);
      } else if (field.value instanceof ArrayValue) {
        nextField = field.value.getField(Number(segment));
      }
      if (!nextField) {
        return void 0;
      }
      field = nextField;
    }
    return field;
  }
  getDeepFieldValue(path3) {
    var _a3;
    if (path3.length === 0) {
      return this;
    }
    return (_a3 = this.getDeepField(path3)) == null ? void 0 : _a3.value;
  }
  hasField(key) {
    return Boolean(this.getField(key));
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(key) {
    delete this.fields[key];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(key) {
    var _a3;
    return (_a3 = this.getField(key)) == null ? void 0 : _a3.value;
  }
  getDeepSubSelectionValue(path3) {
    let selection = this;
    for (const segment of path3) {
      if (!(selection instanceof _ObjectValue)) {
        return void 0;
      }
      const next = selection.getSubSelectionValue(segment);
      if (!next) {
        return void 0;
      }
      selection = next;
    }
    return selection;
  }
  getDeepSelectionParent(path3) {
    const thisParent = this.getSelectionParent();
    if (!thisParent) {
      return void 0;
    }
    let parent = thisParent;
    for (const segment of path3) {
      const next = parent.value.getFieldValue(segment);
      if (!next || !(next instanceof _ObjectValue)) {
        return void 0;
      }
      const nextParent = next.getSelectionParent();
      if (!nextParent) {
        return void 0;
      }
      parent = nextParent;
    }
    return parent;
  }
  getSelectionParent() {
    const select = this.getField("select");
    if ((select == null ? void 0 : select.value) instanceof _ObjectValue) {
      return { kind: "select", value: select.value };
    }
    const include = this.getField("include");
    if ((include == null ? void 0 : include.value) instanceof _ObjectValue) {
      return { kind: "include", value: include.value };
    }
    return void 0;
  }
  getSubSelectionValue(key) {
    var _a3;
    return (_a3 = this.getSelectionParent()) == null ? void 0 : _a3.value.fields[key].value;
  }
  getPrintWidth() {
    const fields = Object.values(this.fields);
    if (fields.length == 0) {
      return 2;
    }
    const maxFieldWidth = Math.max(...fields.map((f) => f.getPrintWidth()));
    return maxFieldWidth + INDENT_SIZE;
  }
  write(writer) {
    const fields = Object.values(this.fields);
    if (fields.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(writer);
      return;
    }
    this.writeWithContents(writer, fields);
  }
  writeEmpty(writer) {
    const output = new FormattedString("{}");
    if (this.hasError) {
      output.setColor(writer.context.colors.red).underline();
    }
    writer.write(output);
  }
  writeWithContents(writer, fields) {
    writer.writeLine("{").withIndent(() => {
      writer.writeJoined(fieldsSeparator, [...fields, ...this.suggestions]).newLine();
    });
    writer.write("}");
    if (this.hasError) {
      writer.afterNextNewline(() => {
        writer.writeLine(writer.context.colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  }
};

// src/runtime/core/errorRendering/ScalarValue.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var ScalarValue = class extends Value {
  constructor(text) {
    super();
    this.text = text;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(writer) {
    const string = new FormattedString(this.text);
    if (this.hasError) {
      string.underline().setColor(writer.context.colors.red);
    }
    writer.write(string);
  }
};

// src/runtime/core/errorRendering/ArgumentsRenderingTree.ts
var ArgumentsRenderingTree = class {
  constructor(args) {
    this.errorMessages = [];
    this.arguments = args;
  }
  write(writer) {
    writer.write(this.arguments);
  }
  addErrorMessage(renderer) {
    this.errorMessages.push(renderer);
  }
  renderAllMessages(colors) {
    return this.errorMessages.map((messageRenderer) => messageRenderer(colors)).join("\n");
  }
};
function buildArgumentsRenderingTree(args) {
  return new ArgumentsRenderingTree(buildInputObject(args));
}
function buildInputObject(inputObject) {
  const object = new ObjectValue();
  for (const [key, value] of Object.entries(inputObject)) {
    const field = new ObjectField(key, buildInputValue(value));
    object.addField(field);
  }
  return object;
}
function buildInputValue(value) {
  if (typeof value === "string") {
    return new ScalarValue(JSON.stringify(value));
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return new ScalarValue(String(value));
  }
  if (typeof value === "bigint") {
    return new ScalarValue(`${value}n`);
  }
  if (value === null) {
    return new ScalarValue("null");
  }
  if (value === void 0) {
    return new ScalarValue("undefined");
  }
  if (isDecimalJsLike(value)) {
    return new ScalarValue(`new Prisma.Decimal("${value.toFixed()}")`);
  }
  if (value instanceof Uint8Array) {
    if (import_buffer.Buffer.isBuffer(value)) {
      return new ScalarValue(`Buffer.alloc(${value.byteLength})`);
    }
    return new ScalarValue(`new Uint8Array(${value.byteLength})`);
  }
  if (value instanceof Date) {
    const dateStr = isValidDate(value) ? value.toISOString() : "Invalid Date";
    return new ScalarValue(`new Date("${dateStr}")`);
  }
  if (value instanceof ObjectEnumValue) {
    return new ScalarValue(`Prisma.${value._getName()}`);
  }
  if (isFieldRef(value)) {
    return new ScalarValue(`prisma.${lowerCase(value.modelName)}.$fields.${value.name}`);
  }
  if (Array.isArray(value)) {
    return buildInputArray(value);
  }
  if (typeof value === "object") {
    return buildInputObject(value);
  }
  return new ScalarValue(Object.prototype.toString.call(value));
}
function buildInputArray(array) {
  const result = new ArrayValue();
  for (const item of array) {
    result.addItem(buildInputValue(item));
  }
  return result;
}

// src/runtime/core/errorRendering/prettyPrintArguments.ts
function prettyPrintArguments(args) {
  if (args === void 0) {
    return "";
  }
  const tree = buildArgumentsRenderingTree(args);
  const writer = new Writer(0, { colors: inactiveColors });
  return writer.write(tree).toString();
}

// src/runtime/core/extensions/$extends.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/model/applyModelsAndClientExtensions.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/model/applyModel.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/utils/CallSite.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../../node_modules/.pnpm/stacktrace-parser@0.1.10/node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var UNKNOWN_FUNCTION = "<unknown>";
function parse(stackString) {
  var lines = stackString.split("\n");
  return lines.reduce(function(stack, line) {
    var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);
    if (parseResult) {
      stack.push(parseResult);
    }
    return stack;
  }, []);
}
var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function parseChrome(line) {
  var parts = chromeRe.exec(line);
  if (!parts) {
    return null;
  }
  var isNative = parts[2] && parts[2].indexOf("native") === 0;
  var isEval = parts[2] && parts[2].indexOf("eval") === 0;
  var submatch = chromeEvalRe.exec(parts[2]);
  if (isEval && submatch != null) {
    parts[2] = submatch[1];
    parts[3] = submatch[2];
    parts[4] = submatch[3];
  }
  return {
    file: !isNative ? parts[2] : null,
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: isNative ? [parts[2]] : [],
    lineNumber: parts[3] ? +parts[3] : null,
    column: parts[4] ? +parts[4] : null
  };
}
var winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseWinjs(line) {
  var parts = winjsRe.exec(line);
  if (!parts) {
    return null;
  }
  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}
var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function parseGecko(line) {
  var parts = geckoRe.exec(line);
  if (!parts) {
    return null;
  }
  var isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
  var submatch = geckoEvalRe.exec(parts[3]);
  if (isEval && submatch != null) {
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = null;
  }
  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: parts[2] ? parts[2].split(",") : [],
    lineNumber: parts[4] ? +parts[4] : null,
    column: parts[5] ? +parts[5] : null
  };
}
var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function parseJSC(line) {
  var parts = javaScriptCoreRe.exec(line);
  if (!parts) {
    return null;
  }
  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[4],
    column: parts[5] ? +parts[5] : null
  };
}
var nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseNode(line) {
  var parts = nodeRe.exec(line);
  if (!parts) {
    return null;
  }
  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

// src/runtime/utils/CallSite.ts
var DisabledCallSite = class {
  getLocation() {
    return null;
  }
};
var EnabledCallSite = class {
  constructor() {
    this._error = new Error();
  }
  getLocation() {
    const stack = this._error.stack;
    if (!stack) {
      return null;
    }
    const stackFrames = parse(stack);
    const frame = stackFrames.find((t) => {
      if (!t.file) {
        return false;
      }
      const posixFile = pathToPosix(t.file);
      return posixFile !== "<anonymous>" && // Ignore as we can not read an <anonymous> file
      !posixFile.includes("@prisma") && // Internal, unbundled code
      !posixFile.includes("/packages/client/src/runtime/") && // Runtime sources when source maps are used
      !posixFile.endsWith("/runtime/binary.js") && // Bundled runtimes
      !posixFile.endsWith("/runtime/library.js") && !posixFile.endsWith("/runtime/edge.js") && !posixFile.endsWith("/runtime/edge-esm.js") && !posixFile.startsWith("internal/") && // We don't want internal nodejs files
      !t.methodName.includes("new ") && // "new CallSite" call and maybe other constructors
      !t.methodName.includes("getCallSite") && // getCallSite function from this module
      !t.methodName.includes("Proxy.") && // Model proxies
      t.methodName.split(".").length < 4;
    });
    if (!frame || !frame.file) {
      return null;
    }
    return {
      fileName: frame.file,
      lineNumber: frame.lineNumber,
      columnNumber: frame.column
    };
  }
};
function getCallSite(errorFormat) {
  if (errorFormat === "minimal") {
    return new DisabledCallSite();
  }
  return new EnabledCallSite();
}

// src/runtime/core/model/applyAggregates.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/model/aggregates/aggregate.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/model/aggregates/utils/aggregateMap.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var aggregateMap = {
  _avg: true,
  _count: true,
  _sum: true,
  _min: true,
  _max: true
};

// src/runtime/core/model/aggregates/aggregate.ts
function desugarUserArgs(args = {}) {
  const _args = desugarCountInUserArgs(args);
  const userArgsEntries = Object.entries(_args);
  return userArgsEntries.reduce(
    (aggregateArgs, [key, value]) => {
      if (aggregateMap[key] !== void 0) {
        aggregateArgs["select"][key] = { select: value };
      } else {
        aggregateArgs[key] = value;
      }
      return aggregateArgs;
    },
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    { select: {} }
  );
}
function desugarCountInUserArgs(args = {}) {
  if (typeof args["_count"] === "boolean") {
    return { ...args, _count: { _all: args["_count"] } };
  }
  return args;
}
function createUnpacker(args = {}) {
  return (data) => {
    if (typeof args["_count"] === "boolean") {
      data["_count"] = data["_count"]["_all"];
    }
    return data;
  };
}
function aggregate(args, modelAction) {
  const aggregateUnpacker = createUnpacker(args);
  return modelAction({
    action: "aggregate",
    unpacker: aggregateUnpacker,
    argsMapper: desugarUserArgs
  })(args);
}

// src/runtime/core/model/aggregates/count.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function desugarUserArgs2(args = {}) {
  const { select, ..._args } = args;
  if (typeof select === "object") {
    return desugarUserArgs({ ..._args, _count: select });
  } else {
    return desugarUserArgs({ ..._args, _count: { _all: true } });
  }
}
function createUnpacker2(args = {}) {
  if (typeof args["select"] === "object") {
    return (data) => createUnpacker(args)(data)["_count"];
  } else {
    return (data) => createUnpacker(args)(data)["_count"]["_all"];
  }
}
function count(args, modelAction) {
  return modelAction({
    action: "count",
    unpacker: createUnpacker2(args),
    argsMapper: desugarUserArgs2
  })(args);
}

// src/runtime/core/model/aggregates/groupBy.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function desugarUserArgs3(args = {}) {
  const _args = desugarUserArgs(args);
  if (Array.isArray(_args["by"])) {
    for (const key of _args["by"]) {
      if (typeof key === "string") {
        _args["select"][key] = true;
      }
    }
  } else if (typeof _args["by"] === "string") {
    _args["select"][_args["by"]] = true;
  }
  return _args;
}
function createUnpacker3(args = {}) {
  return (data) => {
    if (typeof (args == null ? void 0 : args["_count"]) === "boolean") {
      data.forEach((row) => {
        row["_count"] = row["_count"]["_all"];
      });
    }
    return data;
  };
}
function groupBy(args, modelAction) {
  return modelAction({
    action: "groupBy",
    unpacker: createUnpacker3(args),
    argsMapper: desugarUserArgs3
  })(args);
}

// src/runtime/core/model/applyAggregates.ts
function applyAggregates(client, action, modelAction) {
  if (action === "aggregate")
    return (userArgs) => aggregate(userArgs, modelAction);
  if (action === "count")
    return (userArgs) => count(userArgs, modelAction);
  if (action === "groupBy")
    return (userArgs) => groupBy(userArgs, modelAction);
  return void 0;
}

// src/runtime/core/model/applyFieldsProxy.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function applyFieldsProxy(modelName, model) {
  const scalarFieldsList = model.fields.filter((field) => !field.relationName);
  const scalarFields = keyBy2(scalarFieldsList, (field) => field.name);
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (prop in target || typeof prop === "symbol") {
          return target[prop];
        }
        const dmmfField = scalarFields[prop];
        if (dmmfField) {
          return new FieldRefImpl(modelName, prop, dmmfField.type, dmmfField.isList, dmmfField.kind === "enum");
        }
        return void 0;
      },
      ...defaultProxyHandlers(Object.keys(scalarFields))
    }
  );
}

// src/runtime/core/model/applyFluent.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/utils/deep-set.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var keys = (ks) => Array.isArray(ks) ? ks : ks.split(".");
var deepGet = (o, kp) => keys(kp).reduce((o2, k) => o2 && o2[k], o);
var deepSet = (o, kp, v) => keys(kp).reduceRight((v2, k, i, ks) => Object.assign({}, deepGet(o, ks.slice(0, i)), { [k]: v2 }), v);

// src/runtime/core/model/applyFluent.ts
function getNextDataPath(fluentPropName, prevDataPath) {
  if (fluentPropName === void 0 || prevDataPath === void 0)
    return [];
  return [...prevDataPath, "select", fluentPropName];
}
function getNextUserArgs(callArgs, prevArgs, nextDataPath) {
  if (prevArgs === void 0)
    return callArgs != null ? callArgs : {};
  return deepSet(prevArgs, nextDataPath, callArgs || true);
}
function applyFluent(client, dmmfModelName, modelAction, fluentPropName, prevDataPath, prevUserArgs) {
  const dmmfModel = client._runtimeDataModel.models[dmmfModelName];
  const dmmfModelFieldMap = dmmfModel.fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: field }),
    {}
  );
  return (userArgs) => {
    const callsite = getCallSite(client._errorFormat);
    const nextDataPath = getNextDataPath(fluentPropName, prevDataPath);
    const nextUserArgs = getNextUserArgs(userArgs, prevUserArgs, nextDataPath);
    const prismaPromise = modelAction({ dataPath: nextDataPath, callsite })(nextUserArgs);
    const ownKeys = getOwnKeys(client, dmmfModelName);
    return new Proxy(prismaPromise, {
      get(target, prop) {
        if (!ownKeys.includes(prop))
          return target[prop];
        const dmmfModelName2 = dmmfModelFieldMap[prop].type;
        const modelArgs = [dmmfModelName2, modelAction, prop];
        const dataArgs = [nextDataPath, nextUserArgs];
        return applyFluent(client, ...modelArgs, ...dataArgs);
      },
      ...defaultProxyHandlers([...ownKeys, ...Object.getOwnPropertyNames(prismaPromise)])
    });
  };
}
function getOwnKeys(client, dmmfModelName) {
  return client._runtimeDataModel.models[dmmfModelName].fields.filter((field) => field.kind === "object").map((field) => field.name);
}

// src/runtime/core/model/applyOrThrowErrorAdapter.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/utils/createErrorMessageWithContext.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_indent_string = __toESM(require_indent_string());

// src/runtime/utils/SourceFileSlice.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
init_fs();

// src/runtime/highlight/highlight.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/highlight/prism.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/highlight/theme.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var theme = {
  keyword: cyan,
  entity: cyan,
  value: (s) => bold(blue(s)),
  punctuation: blue,
  directive: cyan,
  function: cyan,
  variable: (s) => bold(blue(s)),
  string: (s) => bold(green(s)),
  boolean: yellow,
  number: cyan,
  comment: gray
};

// src/runtime/highlight/prism.ts
var identity = (str) => str;
var _self = {};
var uniqueId = 0;
var Prism = {
  manual: _self.Prism && _self.Prism.manual,
  disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
  util: {
    encode: function(tokens) {
      if (tokens instanceof Token) {
        const anyTokens = tokens;
        return new Token(anyTokens.type, Prism.util.encode(anyTokens.content), anyTokens.alias);
      } else if (Array.isArray(tokens)) {
        return tokens.map(Prism.util.encode);
      } else {
        return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }
    },
    type: function(o) {
      return Object.prototype.toString.call(o).slice(8, -1);
    },
    objId: function(obj) {
      if (!obj["__id"]) {
        Object.defineProperty(obj, "__id", { value: ++uniqueId });
      }
      return obj["__id"];
    },
    // Deep clone a language definition (e.g. to extend it)
    clone: function deepClone(o, visited) {
      let clone2, id, type = Prism.util.type(o);
      visited = visited || {};
      switch (type) {
        case "Object":
          id = Prism.util.objId(o);
          if (visited[id]) {
            return visited[id];
          }
          clone2 = {};
          visited[id] = clone2;
          for (const key in o) {
            if (o.hasOwnProperty(key)) {
              clone2[key] = deepClone(o[key], visited);
            }
          }
          return clone2;
        case "Array":
          id = Prism.util.objId(o);
          if (visited[id]) {
            return visited[id];
          }
          clone2 = [];
          visited[id] = clone2;
          o.forEach(function(v, i) {
            clone2[i] = deepClone(v, visited);
          });
          return clone2;
        default:
          return o;
      }
    }
  },
  languages: {
    extend: function(id, redef) {
      const lang = Prism.util.clone(Prism.languages[id]);
      for (const key in redef) {
        lang[key] = redef[key];
      }
      return lang;
    },
    /**
     * Insert a token before another token in a language literal
     * As this needs to recreate the object (we cannot actually insert before keys in object literals),
     * we cannot just provide an object, we need an object and a key.
     * @param inside The key (or language id) of the parent
     * @param before The key to insert before.
     * @param insert Object with the key/value pairs to insert
     * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
     */
    insertBefore: function(inside, before, insert, root) {
      root = root || Prism.languages;
      const grammar = root[inside];
      const ret = {};
      for (const token in grammar) {
        if (grammar.hasOwnProperty(token)) {
          if (token == before) {
            for (const newToken in insert) {
              if (insert.hasOwnProperty(newToken)) {
                ret[newToken] = insert[newToken];
              }
            }
          }
          if (!insert.hasOwnProperty(token)) {
            ret[token] = grammar[token];
          }
        }
      }
      const old = root[inside];
      root[inside] = ret;
      Prism.languages.DFS(Prism.languages, function(key, value) {
        if (value === old && key != inside) {
          this[key] = ret;
        }
      });
      return ret;
    },
    // Traverse a language definition with Depth First Search
    DFS: function DFS(o, callback, type, visited) {
      visited = visited || {};
      const objId = Prism.util.objId;
      for (const i in o) {
        if (o.hasOwnProperty(i)) {
          callback.call(o, i, o[i], type || i);
          const property = o[i], propertyType = Prism.util.type(property);
          if (propertyType === "Object" && !visited[objId(property)]) {
            visited[objId(property)] = true;
            DFS(property, callback, null, visited);
          } else if (propertyType === "Array" && !visited[objId(property)]) {
            visited[objId(property)] = true;
            DFS(property, callback, i, visited);
          }
        }
      }
    }
  },
  plugins: {},
  highlight: function(text, grammar, language) {
    const env = {
      code: text,
      grammar,
      language
    };
    Prism.hooks.run("before-tokenize", env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run("after-tokenize", env);
    return Token.stringify(Prism.util.encode(env.tokens), env.language);
  },
  matchGrammar: function(text, strarr, grammar, index, startPos, oneshot, target) {
    for (const token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      if (token == target) {
        return;
      }
      let patterns = grammar[token];
      patterns = Prism.util.type(patterns) === "Array" ? patterns : [patterns];
      for (let j = 0; j < patterns.length; ++j) {
        let pattern = patterns[j], inside = pattern.inside, lookbehind = !!pattern.lookbehind, greedy = !!pattern.greedy, lookbehindLength = 0, alias = pattern.alias;
        if (greedy && !pattern.pattern.global) {
          const flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
          pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
        }
        pattern = pattern.pattern || pattern;
        for (let i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
          let str = strarr[i];
          if (strarr.length > text.length) {
            return;
          }
          if (str instanceof Token) {
            continue;
          }
          if (greedy && i != strarr.length - 1) {
            pattern.lastIndex = pos;
            var match = pattern.exec(text);
            if (!match) {
              break;
            }
            var from = match.index + (lookbehind ? match[1].length : 0), to = match.index + match[0].length, k = i, p = pos;
            for (let len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
              p += strarr[k].length;
              if (from >= p) {
                ++i;
                pos = p;
              }
            }
            if (strarr[i] instanceof Token) {
              continue;
            }
            delNum = k - i;
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            pattern.lastIndex = 0;
            var match = pattern.exec(str), delNum = 1;
          }
          if (!match) {
            if (oneshot) {
              break;
            }
            continue;
          }
          if (lookbehind) {
            lookbehindLength = match[1] ? match[1].length : 0;
          }
          var from = match.index + lookbehindLength, match = match[0].slice(lookbehindLength), to = from + match.length, before = str.slice(0, from), after = str.slice(to);
          const args = [i, delNum];
          if (before) {
            ++i;
            pos += before.length;
            args.push(before);
          }
          const wrapped = new Token(token, inside ? Prism.tokenize(match, inside) : match, alias, match, greedy);
          args.push(wrapped);
          if (after) {
            args.push(after);
          }
          Array.prototype.splice.apply(strarr, args);
          if (delNum != 1)
            Prism.matchGrammar(text, strarr, grammar, i, pos, true, token);
          if (oneshot)
            break;
        }
      }
    }
  },
  tokenize: function(text, grammar) {
    const strarr = [text];
    const rest = grammar.rest;
    if (rest) {
      for (const token in rest) {
        grammar[token] = rest[token];
      }
      delete grammar.rest;
    }
    Prism.matchGrammar(text, strarr, grammar, 0, 0, false);
    return strarr;
  },
  hooks: {
    all: {},
    add: function(name, callback) {
      const hooks = Prism.hooks.all;
      hooks[name] = hooks[name] || [];
      hooks[name].push(callback);
    },
    run: function(name, env) {
      const callbacks = Prism.hooks.all[name];
      if (!callbacks || !callbacks.length) {
        return;
      }
      for (var i = 0, callback; callback = callbacks[i++]; ) {
        callback(env);
      }
    }
  },
  Token
};
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: true
    }
  ],
  keyword: [
    {
      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
      lookbehind: true
    },
    {
      pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }
  ],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined("script", "javascript");
}
Prism.languages.js = Prism.languages.javascript;
Prism.languages.typescript = Prism.languages.extend("javascript", {
  // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
  keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
});
Prism.languages.ts = Prism.languages.typescript;
function Token(type, content, alias, matchedStr, greedy) {
  this.type = type;
  this.content = content;
  this.alias = alias;
  this.length = (matchedStr || "").length | 0;
  this.greedy = !!greedy;
}
Token.stringify = function(o, language) {
  if (typeof o == "string") {
    return o;
  }
  if (Array.isArray(o)) {
    return o.map(function(element) {
      return Token.stringify(element, language);
    }).join("");
  }
  return getColorForSyntaxKind(o.type)(o.content);
};
function getColorForSyntaxKind(syntaxKind) {
  return theme[syntaxKind] || identity;
}

// src/runtime/highlight/highlight.ts
function highlightTS(str) {
  return highlight(str, Prism.languages.javascript);
}
function highlight(str, grammar) {
  const tokens = Prism.tokenize(str, grammar);
  return tokens.map((t) => Token.stringify(t)).join("");
}

// src/runtime/utils/dedent.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_strip_indent = __toESM(require_strip_indent());
function dedent(str) {
  return (0, import_strip_indent.default)(str);
}

// src/runtime/utils/SourceFileSlice.ts
var SourceFileSlice = class _SourceFileSlice {
  static read(filePath) {
    let content;
    try {
      content = fs_default.readFileSync(filePath, "utf-8");
    } catch (e) {
      return null;
    }
    return _SourceFileSlice.fromContent(content);
  }
  static fromContent(content) {
    const lines = content.split(/\r?\n/);
    return new _SourceFileSlice(1, lines);
  }
  constructor(firstLine, lines) {
    this.firstLineNumber = firstLine;
    this.lines = lines;
  }
  /**
   * First line, stored in the slice
   */
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  /**
   * Returns new `SourceFileLines` object, where specified
   * `lineNumber` is transformed, using provided `mapFn`
   * @param lineNumber
   * @param mapFn
   * @returns
   */
  mapLineAt(lineNumber, mapFn) {
    if (lineNumber < this.firstLineNumber || lineNumber > this.lines.length + this.firstLineNumber) {
      return this;
    }
    const idx = lineNumber - this.firstLineNumber;
    const newLines = [...this.lines];
    newLines[idx] = mapFn(newLines[idx]);
    return new _SourceFileSlice(this.firstLineNumber, newLines);
  }
  /**
   * Returns new `SourceFileLines` object, where each line is transformed
   * with provided `mapFn` callback. Callback receives content of the line and
   * original line number
   * @param mapFn
   * @returns
   */
  mapLines(mapFn) {
    return new _SourceFileSlice(
      this.firstLineNumber,
      this.lines.map((line, i) => mapFn(line, this.firstLineNumber + i))
    );
  }
  /**
   * Returns contents of the specified line
   * @param lineNumber
   * @returns
   */
  lineAt(lineNumber) {
    return this.lines[lineNumber - this.firstLineNumber];
  }
  /**
   * Prepends a character to the specified line and adds padding
   * to all the other lines so that they'll align
   * @param atLine
   * @param str
   * @returns
   */
  prependSymbolAt(atLine, str) {
    return this.mapLines((line, lineNumber) => {
      if (lineNumber === atLine) {
        return `${str} ${line}`;
      }
      return `  ${line}`;
    });
  }
  /**
   * Creates a new slice from a subset of specified lines of the new code
   * Lines of a slice can still be manipulated using their number in original file
   *
   * @example
   * ```ts
   * const slice = source.slice(80, 100)
   * slice.lineAt(80) === source.lineAt(80)
   * ```
   *
   * @param fromLine
   * @param toLine
   * @returns
   */
  slice(fromLine, toLine) {
    const slicedLines = this.lines.slice(fromLine - 1, toLine).join("\n");
    return new _SourceFileSlice(fromLine, dedent(slicedLines).split("\n"));
  }
  /**
   * Returns new `SourceFileLines` object, where code inside of it have been
   * highlighted as typescript
   * @returns
   */
  highlight() {
    const highlighted = highlightTS(this.toString());
    return new _SourceFileSlice(this.firstLineNumber, highlighted.split("\n"));
  }
  toString() {
    return this.lines.join("\n");
  }
};

// src/runtime/utils/createErrorMessageWithContext.ts
var colorsEnabled = {
  red,
  gray,
  dim,
  bold,
  underline,
  highlightSource: (source) => source.highlight()
};
var colorsDisabled = {
  red: (str) => str,
  gray: (str) => str,
  dim: (str) => str,
  bold: (str) => str,
  underline: (str) => str,
  highlightSource: (source) => source
};
function getTemplateParameters({ callsite, message, originalMethod, isPanic, callArguments }, colors) {
  var _a3;
  const templateParameters = {
    functionName: `prisma.${originalMethod}()`,
    message,
    isPanic: isPanic != null ? isPanic : false,
    callArguments
  };
  if (!callsite || typeof window !== "undefined") {
    return templateParameters;
  }
  if (process.env.NODE_ENV === "production") {
    return templateParameters;
  }
  const callLocation = callsite.getLocation();
  if (!callLocation || !callLocation.lineNumber || !callLocation.columnNumber) {
    return templateParameters;
  }
  const contextFirstLine = Math.max(1, callLocation.lineNumber - 3);
  let source = (_a3 = SourceFileSlice.read(callLocation.fileName)) == null ? void 0 : _a3.slice(contextFirstLine, callLocation.lineNumber);
  const invocationLine = source == null ? void 0 : source.lineAt(callLocation.lineNumber);
  if (source && invocationLine) {
    const invocationLineIndent = getIndent(invocationLine);
    const invocationCallCode = findPrismaActionCall(invocationLine);
    if (!invocationCallCode) {
      return templateParameters;
    }
    templateParameters.functionName = `${invocationCallCode.code})`;
    templateParameters.location = callLocation;
    if (!isPanic) {
      source = source.mapLineAt(callLocation.lineNumber, (line) => line.slice(0, invocationCallCode.openingBraceIndex));
    }
    source = colors.highlightSource(source);
    const numberColumnWidth = String(source.lastLineNumber).length;
    templateParameters.contextLines = source.mapLines((line, lineNumber) => colors.gray(String(lineNumber).padStart(numberColumnWidth)) + " " + line).mapLines((line) => colors.dim(line)).prependSymbolAt(callLocation.lineNumber, colors.bold(colors.red("\u2192")));
    if (callArguments) {
      let indentValue = invocationLineIndent + numberColumnWidth + 1;
      indentValue += 2;
      templateParameters.callArguments = (0, import_indent_string.default)(callArguments, indentValue).slice(indentValue);
    }
  }
  return templateParameters;
}
function findPrismaActionCall(str) {
  const allActions = Object.keys(DMMF.ModelAction).join("|");
  const regexp = new RegExp(String.raw`\.(${allActions})\(`);
  const match = regexp.exec(str);
  if (match) {
    const openingBraceIndex = match.index + match[0].length;
    const statementStart = str.lastIndexOf(" ", match.index) + 1;
    return {
      code: str.slice(statementStart, openingBraceIndex),
      openingBraceIndex
    };
  }
  return null;
}
function getIndent(line) {
  let spaceCount = 0;
  for (let i = 0; i < line.length; i++) {
    if (line.charAt(i) !== " ") {
      return spaceCount;
    }
    spaceCount++;
  }
  return spaceCount;
}
function stringifyErrorMessage({ functionName, location, message, isPanic, contextLines, callArguments }, colors) {
  const lines = [""];
  const introSuffix = location ? " in" : ":";
  if (isPanic) {
    lines.push(colors.red(`Oops, an unknown error occurred! This is ${colors.bold("on us")}, you did nothing wrong.`));
    lines.push(colors.red(`It occurred in the ${colors.bold(`\`${functionName}\``)} invocation${introSuffix}`));
  } else {
    lines.push(colors.red(`Invalid ${colors.bold(`\`${functionName}\``)} invocation${introSuffix}`));
  }
  if (location) {
    lines.push(colors.underline(stringifyLocationInFile(location)));
  }
  if (contextLines) {
    lines.push("");
    const contextLineParts = [contextLines.toString()];
    if (callArguments) {
      contextLineParts.push(callArguments);
      contextLineParts.push(colors.dim(")"));
    }
    lines.push(contextLineParts.join(""));
    if (callArguments) {
      lines.push("");
    }
  } else {
    lines.push("");
    if (callArguments) {
      lines.push(callArguments);
    }
    lines.push("");
  }
  lines.push(message);
  return lines.join("\n");
}
function stringifyLocationInFile(location) {
  const parts = [location.fileName];
  if (location.lineNumber) {
    parts.push(String(location.lineNumber));
  }
  if (location.columnNumber) {
    parts.push(String(location.columnNumber));
  }
  return parts.join(":");
}
function createErrorMessageWithContext(args) {
  const colors = args.showColors ? colorsEnabled : colorsDisabled;
  const templateParameters = getTemplateParameters(args, colors);
  return stringifyErrorMessage(templateParameters, colors);
}

// src/runtime/core/model/applyOrThrowErrorAdapter.ts
function adaptErrors(action, dmmfModelName, clientVersion2, requestCallback) {
  if (action === DMMF.ModelAction.findFirstOrThrow || action === DMMF.ModelAction.findUniqueOrThrow) {
    return applyOrThrowWrapper(dmmfModelName, clientVersion2, requestCallback);
  }
  return requestCallback;
}
function applyOrThrowWrapper(dmmfModelName, clientVersion2, requestCallback) {
  return async (requestParams) => {
    if ("rejectOnNotFound" in requestParams.args) {
      const message = createErrorMessageWithContext({
        originalMethod: requestParams.clientMethod,
        callsite: requestParams.callsite,
        message: "'rejectOnNotFound' option is not supported"
      });
      throw new PrismaClientValidationError(message, { clientVersion: clientVersion2 });
    }
    const result = await requestCallback(requestParams).catch((e) => {
      if (e instanceof PrismaClientKnownRequestError && e.code === "P2025") {
        throw new NotFoundError(`No ${dmmfModelName} found`, clientVersion2);
      } else {
        throw e;
      }
    });
    return result;
  };
}

// src/runtime/core/model/utils/dmmfToJSModelName.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function dmmfToJSModelName(name) {
  return name.replace(/^./, (str) => str.toLowerCase());
}

// src/runtime/core/model/applyModel.ts
var fluentProps = [
  "findUnique",
  "findUniqueOrThrow",
  "findFirst",
  "findFirstOrThrow",
  "create",
  "update",
  "upsert",
  "delete"
];
var aggregateProps = ["aggregate", "count", "groupBy"];
function applyModel(client, dmmfModelName) {
  var _a3;
  const modelExtensions = (_a3 = client._extensions.getAllModelExtensions(dmmfModelName)) != null ? _a3 : {};
  const layers = [
    modelActionsLayer(client, dmmfModelName),
    fieldsPropertyLayer(client, dmmfModelName),
    addObjectProperties(modelExtensions),
    addProperty("name", () => dmmfModelName),
    addProperty("$name", () => dmmfModelName),
    addProperty("$parent", () => client._appliedParent)
  ];
  return createCompositeProxy({}, layers);
}
function modelActionsLayer(client, dmmfModelName) {
  const jsModelName = dmmfToJSModelName(dmmfModelName);
  const ownKeys = Object.keys(DMMF.ModelAction).concat("count");
  return {
    getKeys() {
      return ownKeys;
    },
    getPropertyValue(key) {
      const dmmfActionName = key;
      let requestFn = (params) => client._request(params);
      requestFn = adaptErrors(dmmfActionName, dmmfModelName, client._clientVersion, requestFn);
      const action = (paramOverrides) => (userArgs) => {
        const callSite = getCallSite(client._errorFormat);
        return client._createPrismaPromise((transaction) => {
          const params = {
            // data and its dataPath for nested results
            args: userArgs,
            dataPath: [],
            // action name and its related model
            action: dmmfActionName,
            model: dmmfModelName,
            // method name for display only
            clientMethod: `${jsModelName}.${key}`,
            jsModelName,
            // transaction information
            transaction,
            // stack trace
            callsite: callSite
          };
          return requestFn({ ...params, ...paramOverrides });
        });
      };
      if (fluentProps.includes(dmmfActionName)) {
        return applyFluent(client, dmmfModelName, action);
      }
      if (isValidAggregateName(key)) {
        return applyAggregates(client, key, action);
      }
      return action({});
    }
  };
}
function isValidAggregateName(action) {
  return aggregateProps.includes(action);
}
function fieldsPropertyLayer(client, dmmfModelName) {
  return cacheProperties(
    addProperty("fields", () => {
      const model = client._runtimeDataModel.models[dmmfModelName];
      return applyFieldsProxy(dmmfModelName, model);
    })
  );
}

// src/runtime/core/model/utils/jsToDMMFModelName.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function jsToDMMFModelName(name) {
  return name.replace(/^./, (str) => str.toUpperCase());
}

// src/runtime/core/model/applyModelsAndClientExtensions.ts
var rawClient = Symbol();
function applyModelsAndClientExtensions(client) {
  const layers = [
    modelsLayer(client),
    addProperty(rawClient, () => client),
    addProperty("$parent", () => client._appliedParent)
  ];
  const clientExtensions = client._extensions.getAllClientExtensions();
  if (clientExtensions) {
    layers.push(addObjectProperties(clientExtensions));
  }
  return createCompositeProxy(client, layers);
}
function modelsLayer(client) {
  const dmmfModelKeys = Object.keys(client._runtimeDataModel.models);
  const jsModelKeys = dmmfModelKeys.map(dmmfToJSModelName);
  const allKeys = [...new Set(dmmfModelKeys.concat(jsModelKeys))];
  return cacheProperties({
    getKeys() {
      return allKeys;
    },
    getPropertyValue(prop) {
      const dmmfModelName = jsToDMMFModelName(prop);
      if (client._runtimeDataModel.models[dmmfModelName] !== void 0) {
        return applyModel(client, dmmfModelName);
      }
      if (client._runtimeDataModel.models[prop] !== void 0) {
        return applyModel(client, prop);
      }
      return void 0;
    },
    getPropertyDescriptor(key) {
      if (!jsModelKeys.includes(key)) {
        return { enumerable: false };
      }
      return void 0;
    }
  });
}
function unApplyModelsAndClientExtensions(client) {
  if (client[rawClient]) {
    return client[rawClient];
  }
  return client;
}

// src/runtime/core/extensions/$extends.ts
function $extends(extension) {
  if (typeof extension === "function") {
    return extension(this);
  }
  const oldClient = unApplyModelsAndClientExtensions(this);
  const newClient = Object.create(oldClient, {
    _extensions: {
      value: this._extensions.append(extension)
    },
    _appliedParent: { value: this, configurable: true },
    $use: { value: void 0 },
    $on: { value: void 0 }
  });
  return applyModelsAndClientExtensions(newClient);
}

// src/runtime/core/extensions/applyAllResultExtensions.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/extensions/applyResultExtensions.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function applyResultExtensions({ result, modelName, select, extensions }) {
  const computedFields = extensions.getAllComputedFields(modelName);
  if (!computedFields) {
    return result;
  }
  const computedPropertiesLayers = [];
  const maskingLayers = [];
  for (const field of Object.values(computedFields)) {
    if (select) {
      if (!select[field.name]) {
        continue;
      }
      const toMask = field.needs.filter((prop) => !select[prop]);
      if (toMask.length > 0) {
        maskingLayers.push(removeProperties(toMask));
      }
    }
    if (areNeedsMet(result, field.needs)) {
      computedPropertiesLayers.push(
        computedPropertyLayer(field, createCompositeProxy(result, computedPropertiesLayers))
      );
    }
  }
  if (computedPropertiesLayers.length > 0 || maskingLayers.length > 0) {
    return createCompositeProxy(result, [...computedPropertiesLayers, ...maskingLayers]);
  }
  return result;
}
function areNeedsMet(result, neededProperties) {
  return neededProperties.every((property) => hasOwnProperty(result, property));
}
function computedPropertyLayer(field, result) {
  return cacheProperties(addProperty(field.name, () => field.compute(result)));
}

// src/runtime/core/extensions/visitQueryResult.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function visitQueryResult({ visitor, result, args, runtimeDataModel, modelName }) {
  var _a3;
  if (Array.isArray(result)) {
    for (let i = 0; i < result.length; i++) {
      result[i] = visitQueryResult({
        result: result[i],
        args,
        modelName,
        runtimeDataModel,
        visitor
      });
    }
    return result;
  }
  const visitResult = (_a3 = visitor(result, modelName, args)) != null ? _a3 : result;
  if (args.include) {
    visitNested({
      includeOrSelect: args.include,
      result: visitResult,
      parentModelName: modelName,
      runtimeDataModel,
      visitor
    });
  }
  if (args.select) {
    visitNested({
      includeOrSelect: args.select,
      result: visitResult,
      parentModelName: modelName,
      runtimeDataModel,
      visitor
    });
  }
  return visitResult;
}
function visitNested({ includeOrSelect, result, parentModelName, runtimeDataModel, visitor }) {
  for (const [fieldName, subConfig] of Object.entries(includeOrSelect)) {
    if (!subConfig || result[fieldName] == null) {
      continue;
    }
    const parentModel = runtimeDataModel.models[parentModelName];
    const field = parentModel.fields.find((field2) => field2.name === fieldName);
    if (!field || field.kind !== "object" || !field.relationName) {
      continue;
    }
    const args = typeof subConfig === "object" ? subConfig : {};
    result[fieldName] = visitQueryResult({
      visitor,
      result: result[fieldName],
      args,
      modelName: field.type,
      runtimeDataModel
    });
  }
}

// src/runtime/core/extensions/applyAllResultExtensions.ts
function applyAllResultExtensions({
  result,
  modelName,
  args,
  extensions,
  runtimeDataModel
}) {
  if (extensions.isEmpty() || result == null || typeof result !== "object") {
    return result;
  }
  const model = runtimeDataModel.models[modelName];
  if (!model) {
    return result;
  }
  return visitQueryResult({
    result,
    args: args != null ? args : {},
    modelName,
    runtimeDataModel,
    visitor: (value, dmmfModelName, args2) => applyResultExtensions({
      result: value,
      modelName: dmmfToJSModelName(dmmfModelName),
      select: args2.select,
      extensions
    })
  });
}

// src/runtime/core/extensions/applyQueryExtensions.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/utils/deepCloneArgs.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function deepCloneArgs(args) {
  if (args instanceof Sql) {
    return cloneSql(args);
  }
  if (Array.isArray(args)) {
    const clone3 = [args[0]];
    for (let i = 1; i < args.length; i++) {
      clone3[i] = deepCloneValue(args[i]);
    }
    return clone3;
  }
  const clone2 = {};
  for (const k in args) {
    clone2[k] = deepCloneValue(args[k]);
  }
  return clone2;
}
function cloneSql(rawParam) {
  return new Sql(rawParam.strings, rawParam.values);
}
function deepCloneValue(x) {
  if (typeof x !== "object" || x == null || x instanceof ObjectEnumValue || isFieldRef(x)) {
    return x;
  }
  if (isDecimalJsLike(x)) {
    return new decimal_default(x.toFixed());
  }
  if (isDate(x)) {
    return /* @__PURE__ */ new Date(+x);
  }
  if (ArrayBuffer.isView(x)) {
    return x.slice(0);
  }
  if (Array.isArray(x)) {
    let k = x.length;
    let copy;
    for (copy = Array(k); k--; ) {
      copy[k] = deepCloneValue(x[k]);
    }
    return copy;
  }
  if (typeof x === "object") {
    const copy = {};
    for (const k in x) {
      if (k === "__proto__") {
        Object.defineProperty(copy, k, {
          value: deepCloneValue(x[k]),
          configurable: true,
          enumerable: true,
          writable: true
        });
      } else {
        copy[k] = deepCloneValue(x[k]);
      }
    }
    return copy;
  }
  assertNever(x, "Unknown value");
}

// src/runtime/core/extensions/applyQueryExtensions.ts
function iterateAndCallQueryCallbacks(client, params, queryCbs, i = 0) {
  return client._createPrismaPromise((transaction) => {
    var _a3, _b2;
    const prevCustomFetch = params.customDataProxyFetch;
    if ("transaction" in params && transaction !== void 0) {
      if (((_a3 = params.transaction) == null ? void 0 : _a3.kind) === "batch") {
        void params.transaction.lock.then();
      }
      params.transaction = transaction;
    }
    if (i === queryCbs.length) {
      return client._executeRequest(params);
    }
    return queryCbs[i]({
      model: params.model,
      operation: params.model ? params.action : params.clientMethod,
      args: deepCloneArgs((_b2 = params.args) != null ? _b2 : {}),
      // @ts-expect-error because not part of public API
      __internalParams: params,
      query: (args, __internalParams = params) => {
        const currCustomFetch = __internalParams.customDataProxyFetch;
        __internalParams.customDataProxyFetch = composeCustomDataProxyFetch(prevCustomFetch, currCustomFetch);
        __internalParams.args = args;
        return iterateAndCallQueryCallbacks(client, __internalParams, queryCbs, i + 1);
      }
    });
  });
}
function applyQueryExtensions(client, params) {
  const { jsModelName, action, clientMethod } = params;
  const operation = jsModelName ? action : clientMethod;
  if (client._extensions.isEmpty()) {
    return client._executeRequest(params);
  }
  const cbs = client._extensions.getAllQueryCallbacks(jsModelName != null ? jsModelName : "$none", operation);
  return iterateAndCallQueryCallbacks(client, params, cbs);
}
function createApplyBatchExtensionsFunction(executeBatch) {
  return (requests) => {
    const params = { requests };
    const callbacks = requests[0].extensions.getAllBatchQueryCallbacks();
    if (!callbacks.length) {
      return executeBatch(params);
    }
    return iterateAndCallBatchCallbacks(params, callbacks, 0, executeBatch);
  };
}
function iterateAndCallBatchCallbacks(params, callbacks, i, executeBatch) {
  if (i === callbacks.length) {
    return executeBatch(params);
  }
  const prevFetch = params.customDataProxyFetch;
  const transaction = params.requests[0].transaction;
  return callbacks[i]({
    args: {
      queries: params.requests.map((request) => ({
        model: request.modelName,
        operation: request.action,
        args: request.args
      })),
      transaction: transaction ? {
        isolationLevel: transaction.kind === "batch" ? transaction.isolationLevel : void 0
      } : void 0
    },
    __internalParams: params,
    query(_args, __internalParams = params) {
      const nextFetch = __internalParams.customDataProxyFetch;
      __internalParams.customDataProxyFetch = composeCustomDataProxyFetch(prevFetch, nextFetch);
      return iterateAndCallBatchCallbacks(__internalParams, callbacks, i + 1, executeBatch);
    }
  });
}
var noopFetch = (f) => f;
function composeCustomDataProxyFetch(prevFetch = noopFetch, nextFetch = noopFetch) {
  return (f) => prevFetch(nextFetch(f));
}

// src/runtime/core/extensions/MergedExtensionsList.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/extensions/resultUtils.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getComputedFields(previousComputedFields, extension, dmmfModelName) {
  const jsName = dmmfToJSModelName(dmmfModelName);
  if (!extension.result || !(extension.result.$allModels || extension.result[jsName])) {
    return previousComputedFields;
  }
  return resolveDependencies({
    ...previousComputedFields,
    ...getComputedFieldsFromModel(extension.name, previousComputedFields, extension.result.$allModels),
    ...getComputedFieldsFromModel(extension.name, previousComputedFields, extension.result[jsName])
  });
}
function resolveDependencies(computedFields) {
  const cache = new Cache();
  const resolveNeeds = (fieldName, visitedFields) => {
    return cache.getOrCreate(fieldName, () => {
      if (visitedFields.has(fieldName)) {
        return [fieldName];
      }
      visitedFields.add(fieldName);
      if (!computedFields[fieldName]) {
        return [fieldName];
      }
      return computedFields[fieldName].needs.flatMap((fieldDep) => resolveNeeds(fieldDep, visitedFields));
    });
  };
  return mapObjectValues(computedFields, (field) => {
    return {
      ...field,
      needs: resolveNeeds(field.name, /* @__PURE__ */ new Set())
    };
  });
}
function getComputedFieldsFromModel(name, previousComputedFields, modelResult) {
  if (!modelResult) {
    return {};
  }
  return mapObjectValues(modelResult, ({ needs, compute }, fieldName) => ({
    name: fieldName,
    needs: needs ? Object.keys(needs).filter((key) => needs[key]) : [],
    compute: composeCompute(previousComputedFields, fieldName, compute)
  }));
}
function composeCompute(previousComputedFields, fieldName, nextCompute) {
  var _a3;
  const previousCompute = (_a3 = previousComputedFields == null ? void 0 : previousComputedFields[fieldName]) == null ? void 0 : _a3.compute;
  if (!previousCompute) {
    return nextCompute;
  }
  return (model) => {
    return nextCompute({ ...model, [fieldName]: previousCompute(model) });
  };
}
function applyComputedFieldsToSelection(selection, computedFields) {
  if (!computedFields) {
    return selection;
  }
  const result = { ...selection };
  for (const field of Object.values(computedFields)) {
    if (!selection[field.name]) {
      continue;
    }
    for (const dependency of field.needs) {
      result[dependency] = true;
    }
  }
  return result;
}

// src/runtime/core/extensions/MergedExtensionsList.ts
var MergedExtensionsListNode = class {
  constructor(extension, previous) {
    this.extension = extension;
    this.previous = previous;
    this.computedFieldsCache = new Cache();
    this.modelExtensionsCache = new Cache();
    this.queryCallbacksCache = new Cache();
    this.clientExtensions = lazyProperty(() => {
      var _a3, _b2;
      if (!this.extension.client) {
        return (_a3 = this.previous) == null ? void 0 : _a3.getAllClientExtensions();
      }
      return {
        ...(_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions(),
        ...this.extension.client
      };
    });
    this.batchCallbacks = lazyProperty(() => {
      var _a3, _b2, _c;
      const previous = (_b2 = (_a3 = this.previous) == null ? void 0 : _a3.getAllBatchQueryCallbacks()) != null ? _b2 : [];
      const newCb = (_c = this.extension.query) == null ? void 0 : _c.$__internalBatch;
      if (!newCb) {
        return previous;
      }
      return previous.concat(newCb);
    });
  }
  getAllComputedFields(dmmfModelName) {
    return this.computedFieldsCache.getOrCreate(dmmfModelName, () => {
      var _a3;
      return getComputedFields((_a3 = this.previous) == null ? void 0 : _a3.getAllComputedFields(dmmfModelName), this.extension, dmmfModelName);
    });
  }
  getAllClientExtensions() {
    return this.clientExtensions.get();
  }
  getAllModelExtensions(dmmfModelName) {
    return this.modelExtensionsCache.getOrCreate(dmmfModelName, () => {
      var _a3, _b2;
      const jsModelName = dmmfToJSModelName(dmmfModelName);
      if (!this.extension.model || !(this.extension.model[jsModelName] || this.extension.model.$allModels)) {
        return (_a3 = this.previous) == null ? void 0 : _a3.getAllModelExtensions(dmmfModelName);
      }
      return {
        ...(_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(dmmfModelName),
        ...this.extension.model.$allModels,
        ...this.extension.model[jsModelName]
      };
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  getAllQueryCallbacks(jsModelName, operation) {
    return this.queryCallbacksCache.getOrCreate(`${jsModelName}:${operation}`, () => {
      var _a3, _b2;
      const prevCbs = (_b2 = (_a3 = this.previous) == null ? void 0 : _a3.getAllQueryCallbacks(jsModelName, operation)) != null ? _b2 : [];
      const newCbs = [];
      const query2 = this.extension.query;
      if (!query2 || !(query2[jsModelName] || query2["$allModels"] || query2[operation] || query2["$allOperations"])) {
        return prevCbs;
      }
      if (query2[jsModelName] !== void 0) {
        if (query2[jsModelName][operation] !== void 0) {
          newCbs.push(query2[jsModelName][operation]);
        }
        if (query2[jsModelName]["$allOperations"] !== void 0) {
          newCbs.push(query2[jsModelName]["$allOperations"]);
        }
      }
      if (jsModelName !== "$none" && query2["$allModels"] !== void 0) {
        if (query2["$allModels"][operation] !== void 0) {
          newCbs.push(query2["$allModels"][operation]);
        }
        if (query2["$allModels"]["$allOperations"] !== void 0) {
          newCbs.push(query2["$allModels"]["$allOperations"]);
        }
      }
      if (query2[operation] !== void 0) {
        newCbs.push(query2[operation]);
      }
      if (query2["$allOperations"] !== void 0) {
        newCbs.push(query2["$allOperations"]);
      }
      return prevCbs.concat(newCbs);
    });
  }
  getAllBatchQueryCallbacks() {
    return this.batchCallbacks.get();
  }
};
var MergedExtensionsList = class _MergedExtensionsList {
  constructor(head) {
    this.head = head;
  }
  static empty() {
    return new _MergedExtensionsList();
  }
  static single(extension) {
    return new _MergedExtensionsList(new MergedExtensionsListNode(extension));
  }
  isEmpty() {
    return this.head === void 0;
  }
  append(extension) {
    return new _MergedExtensionsList(new MergedExtensionsListNode(extension, this.head));
  }
  getAllComputedFields(dmmfModelName) {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllComputedFields(dmmfModelName);
  }
  getAllClientExtensions() {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllClientExtensions();
  }
  getAllModelExtensions(dmmfModelName) {
    var _a3;
    return (_a3 = this.head) == null ? void 0 : _a3.getAllModelExtensions(dmmfModelName);
  }
  getAllQueryCallbacks(jsModelName, operation) {
    var _a3, _b2;
    return (_b2 = (_a3 = this.head) == null ? void 0 : _a3.getAllQueryCallbacks(jsModelName, operation)) != null ? _b2 : [];
  }
  getAllBatchQueryCallbacks() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.head) == null ? void 0 : _a3.getAllBatchQueryCallbacks()) != null ? _b2 : [];
  }
};

// src/runtime/core/init/checkPlatformCaching.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var debug2 = src_default("prisma:client");
var cachingPlatforms = {
  Vercel: "vercel",
  "Netlify CI": "netlify"
};
function checkPlatformCaching({ postinstall, ciName, clientVersion: clientVersion2 }) {
  debug2("checkPlatformCaching:postinstall", postinstall);
  debug2("checkPlatformCaching:ciName", ciName);
  if (postinstall !== true)
    return;
  if (ciName && ciName in cachingPlatforms) {
    const message = `Prisma has detected that this project was built on ${ciName}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${cachingPlatforms[ciName]}-build`;
    console.error(message);
    throw new PrismaClientInitializationError(message, clientVersion2);
  }
}

// src/runtime/core/init/getDatasourceOverrides.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getDatasourceOverrides(options, datasourceNames) {
  if (!options) {
    return {};
  }
  if (options.datasources) {
    return options.datasources;
  }
  if (options.datasourceUrl) {
    const primaryDatasource = datasourceNames[0];
    return { [primaryDatasource]: { url: options.datasourceUrl } };
  }
  return {};
}

// src/runtime/core/init/getEngineInstance.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/engines/index.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/errors/utils/prismaGraphQLToJSError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function prismaGraphQLToJSError({ error: error2, user_facing_error }, clientVersion2) {
  if (user_facing_error.error_code) {
    return new PrismaClientKnownRequestError(user_facing_error.message, {
      code: user_facing_error.error_code,
      clientVersion: clientVersion2,
      meta: user_facing_error.meta,
      batchRequestIdx: user_facing_error.batch_request_idx
    });
  }
  return new PrismaClientUnknownRequestError(error2, {
    clientVersion: clientVersion2,
    batchRequestIdx: user_facing_error.batch_request_idx
  });
}

// src/runtime/core/engines/common/Engine.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var Engine = class {
  // abstract getMigrationHistory(): void
};

// src/runtime/core/engines/common/utils/getBatchRequestPayload.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getBatchRequestPayload(batch, transaction) {
  return {
    batch,
    transaction: (transaction == null ? void 0 : transaction.kind) === "batch" ? { isolationLevel: transaction.options.isolationLevel } : void 0
  };
}

// src/runtime/core/engines/common/utils/getErrorMessageWithLink.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_strip_ansi = __toESM(require_strip_ansi());

// src/runtime/core/engines/common/utils/maskQuery.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function maskQuery(query2) {
  if (!query2) {
    return "";
  }
  return query2.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (substr) => {
    return `${substr[0]}5`;
  });
}

// src/runtime/core/engines/common/utils/normalizeLogs.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function normalizeLogs(logs) {
  return logs.split("\n").map((l) => {
    return l.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "");
  }).join("\n");
}

// src/runtime/core/engines/common/utils/util.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_crypto = __toESM(require_crypto());
var import_new_github_issue_url = __toESM(require_new_github_issue_url());
function getGitHubIssueUrl({
  title,
  user = "prisma",
  repo = "prisma",
  template = "bug_report.yml",
  body
}) {
  return (0, import_new_github_issue_url.default)({
    user,
    repo,
    template,
    title,
    body
  });
}

// src/runtime/core/engines/common/utils/getErrorMessageWithLink.ts
function getErrorMessageWithLink({
  version: version2,
  binaryTarget,
  title,
  description,
  engineVersion,
  database,
  query: query2
}) {
  var _a3, _b2;
  const gotLogs = getLogs(6e3 - ((_a3 = query2 == null ? void 0 : query2.length) != null ? _a3 : 0));
  const logs = normalizeLogs((0, import_strip_ansi.default)(gotLogs));
  const moreInfo = description ? `# Description
\`\`\`
${description}
\`\`\`` : "";
  const body = (0, import_strip_ansi.default)(
    `Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_b2 = process.version) == null ? void 0 : _b2.padEnd(19)}| 
| OS              | ${binaryTarget == null ? void 0 : binaryTarget.padEnd(19)}|
| Prisma Client   | ${version2 == null ? void 0 : version2.padEnd(19)}|
| Query Engine    | ${engineVersion == null ? void 0 : engineVersion.padEnd(19)}|
| Database        | ${database == null ? void 0 : database.padEnd(19)}|

${moreInfo}

## Logs
\`\`\`
${logs}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${query2 ? maskQuery(query2) : ""}
\`\`\`
`
  );
  const url = getGitHubIssueUrl({ title, body });
  return `${title}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${underline(url)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}

// src/runtime/core/init/resolveDatasourceUrl.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// ../../node_modules/.pnpm/detect-runtime@1.0.4/node_modules/detect-runtime/dist/index.mjs
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var CLOUDFLARE_WORKERS_NAVIGATOR = "Cloudflare-Workers";
var NODE_PROCESS_RELEASE_NAME = "node";
function detectRuntime() {
  var _a3, _b2, _c;
  if (typeof Netlify === "object") {
    return "netlify";
  }
  if (typeof EdgeRuntime === "string") {
    return "edge-light";
  }
  if (((_a3 = globalThis.navigator) == null ? void 0 : _a3.userAgent) === CLOUDFLARE_WORKERS_NAVIGATOR) {
    return "workerd";
  }
  if (globalThis.Deno) {
    return "deno";
  }
  if (globalThis.__lagon__) {
    return "lagon";
  }
  if (((_c = (_b2 = globalThis.process) == null ? void 0 : _b2.release) == null ? void 0 : _c.name) === NODE_PROCESS_RELEASE_NAME) {
    return "node";
  }
  if (globalThis.Bun) {
    return "bun";
  }
  if (globalThis.fastly) {
    return "fastly";
  }
  return "unknown";
}

// src/runtime/core/init/resolveDatasourceUrl.ts
function resolveDatasourceUrl({
  inlineDatasources,
  overrideDatasources,
  env,
  clientVersion: clientVersion2
}) {
  var _a3, _b2;
  let resolvedUrl;
  const datasourceName = Object.keys(inlineDatasources)[0];
  const datasourceUrl = (_a3 = inlineDatasources[datasourceName]) == null ? void 0 : _a3.url;
  const overrideUrl = (_b2 = overrideDatasources[datasourceName]) == null ? void 0 : _b2.url;
  if (datasourceName === void 0) {
    resolvedUrl = void 0;
  } else if (overrideUrl) {
    resolvedUrl = overrideUrl;
  } else if (datasourceUrl == null ? void 0 : datasourceUrl.value) {
    resolvedUrl = datasourceUrl.value;
  } else if (datasourceUrl == null ? void 0 : datasourceUrl.fromEnvVar) {
    resolvedUrl = env[datasourceUrl.fromEnvVar];
  }
  if ((datasourceUrl == null ? void 0 : datasourceUrl.fromEnvVar) !== void 0 && resolvedUrl === void 0) {
    if (false) {
      throw new PrismaClientInitializationError(
        `error: Environment variable not found: ${datasourceUrl.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
        clientVersion2
      );
    }
    throw new PrismaClientInitializationError(
      `error: Environment variable not found: ${datasourceUrl.fromEnvVar}.`,
      clientVersion2
    );
  }
  if (resolvedUrl === void 0) {
    throw new PrismaClientInitializationError(
      `error: Missing URL environment variable, value, or override.`,
      clientVersion2
    );
  }
  return resolvedUrl;
}

// src/runtime/core/engines/library/LibraryEngine.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/engines/common/utils/getInteractiveTransactionId.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getInteractiveTransactionId(transaction) {
  if ((transaction == null ? void 0 : transaction.kind) === "itx") {
    return transaction.options.id;
  }
  return void 0;
}

// src/runtime/core/engines/library/LibraryEngine.ts
var DRIVER_ADAPTER_EXTERNAL_ERROR = "P2036";
var debug3 = src_default("prisma:client:libraryEngine");
function isQueryEvent(event) {
  return event["item_type"] === "query" && "query" in event;
}
function isPanicEvent(event) {
  if ("level" in event) {
    return event.level === "error" && event["message"] === "PANIC";
  } else {
    return false;
  }
}
var knownBinaryTargets = [...binaryTargets, "native"];
var engineInstanceCount = 0;
var LibraryEngine = class extends Engine {
  constructor(config2, libraryLoader) {
    var _a3, _b2, _c;
    super();
    const engineType = getClientEngineType(config2.generator);
    if (true) {
      this.libraryLoader = {
        loadLibrary() {
          throw new Error(
            "React Native bindings cannot be loaded from inside this library, import react-native-prisma on user code"
          );
        }
      };
    } else if (false) {
      if (engineType === ClientEngineType2.Wasm) {
        this.libraryLoader = libraryLoader != null ? libraryLoader : wasmLibraryLoader;
      } else {
        this.libraryLoader = libraryLoader != null ? libraryLoader : defaultLibraryLoader;
      }
    } else {
      this.libraryLoader = libraryLoader != null ? libraryLoader : wasmLibraryLoader;
    }
    this.config = config2;
    this.libraryStarted = false;
    this.logQueries = (_a3 = config2.logQueries) != null ? _a3 : false;
    this.logLevel = (_b2 = config2.logLevel) != null ? _b2 : "error";
    this.logEmitter = config2.logEmitter;
    this.datamodel = atob(config2.inlineSchema);
    if (config2.enableDebugLogs) {
      this.logLevel = "debug";
    }
    const dsOverrideName = Object.keys(config2.overrideDatasources)[0];
    const dsOverrideUrl = (_c = config2.overrideDatasources[dsOverrideName]) == null ? void 0 : _c.url;
    if (dsOverrideName !== void 0 && dsOverrideUrl !== void 0) {
      this.datasourceOverrides = { [dsOverrideName]: dsOverrideUrl };
    }
    this.libraryInstantiationPromise = this.instantiateLibrary();
    this.checkForTooManyEngines();
  }
  checkForTooManyEngines() {
    if (engineInstanceCount === 10) {
      console.warn(
        `${yellow(
          "warn(prisma-client)"
        )} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`
      );
    }
  }
  async applyPendingMigrations() {
    if (true) {
      await this.start();
      __PrismaProxy.applyPendingMigrations(this.engine, this.datamodel);
    } else {
      throw new Error("Cannot call this method from this type of engine instance");
    }
  }
  async pushSchema() {
    if (true) {
      await this.start();
      __PrismaProxy.pushSchema(this.engine, this.datamodel);
    } else {
      throw new Error("Cannot call this method from this type of engine instance");
    }
  }
  async transaction(action, headers, arg) {
    var _a3, _b2;
    await this.start();
    const headerStr = JSON.stringify(headers);
    let result;
    if (action === "start") {
      const jsonOptions = JSON.stringify({
        max_wait: (_a3 = arg == null ? void 0 : arg.maxWait) != null ? _a3 : 2e3,
        // default
        timeout: (_b2 = arg == null ? void 0 : arg.timeout) != null ? _b2 : 5e3,
        // default
        isolation_level: arg == null ? void 0 : arg.isolationLevel
      });
      result = await __PrismaProxy.startTransaction(this.engine, jsonOptions, headerStr);
    } else if (action === "commit") {
      result = await __PrismaProxy.commitTransaction(this.engine, arg.id, headerStr);
    } else if (action === "rollback") {
      result = await __PrismaProxy.rollbackTransaction(this.engine, arg.id, headerStr);
    }
    const response = this.parseEngineResponse(result);
    if (isUserFacingError(response)) {
      const externalError = this.getExternalAdapterError(response);
      if (externalError) {
        throw externalError.error;
      }
      throw new PrismaClientKnownRequestError(response.message, {
        code: response.error_code,
        clientVersion: this.config.clientVersion,
        meta: response.meta
      });
    }
    return response;
  }
  async instantiateLibrary() {
    debug3("internalSetup");
    if (this.libraryInstantiationPromise) {
      return this.libraryInstantiationPromise;
    }
    if (false) {
      assertNodeAPISupported();
    }
    this.binaryTarget = await this.getCurrentBinaryTarget();
    await this.loadEngine();
    this.version();
  }
  async getCurrentBinaryTarget() {
    if (false) {
      if (this.binaryTarget)
        return this.binaryTarget;
      const binaryTarget = await getBinaryTargetForCurrentPlatform2();
      if (!knownBinaryTargets.includes(binaryTarget)) {
        throw new PrismaClientInitializationError(
          `Unknown ${red2("PRISMA_QUERY_ENGINE_LIBRARY")} ${red2(bold2(binaryTarget))}. Possible binaryTargets: ${green2(
            knownBinaryTargets.join(", ")
          )} or a path to the query engine library.
You may have to run ${green2("prisma generate")} for your changes to take effect.`,
          this.config.clientVersion
        );
      }
      return binaryTarget;
    }
    return void 0;
  }
  parseEngineResponse(response) {
    if (!response) {
      throw new PrismaClientUnknownRequestError(`Response from the Engine was empty`, {
        clientVersion: this.config.clientVersion
      });
    }
    try {
      const config2 = JSON.parse(response);
      return config2;
    } catch (err2) {
      throw new PrismaClientUnknownRequestError(`Unable to JSON.parse response from engine`, {
        clientVersion: this.config.clientVersion
      });
    }
  }
  async loadEngine() {
    var _a3, _b2, _c, _d;
    if (!this.engine) {
      if (true) {
        const weakThis = new WeakRef(this);
        if (!__PrismaProxy) {
          throw new PrismaClientInitializationError(
            "__PrismaProxy not detected make sure rn bindings are installed",
            this.config.clientVersion
          );
        }
        this.engine = __PrismaProxy.create({
          datamodel: this.datamodel,
          env: process.env,
          ignoreEnvVarErrors: true,
          datasourceOverrides: (_a3 = this.datasourceOverrides) != null ? _a3 : {},
          logLevel: this.logLevel,
          logQueries: (_b2 = this.config.logQueries) != null ? _b2 : false,
          logCallback: (log3) => {
            var _a4;
            (_a4 = weakThis.deref()) == null ? void 0 : _a4.logger(log3);
          }
        });
        engineInstanceCount++;
        return;
      }
      if (!this.QueryEngineConstructor) {
        this.library = await this.libraryLoader.loadLibrary(this.config);
        this.QueryEngineConstructor = this.library.QueryEngine;
      }
      try {
        const weakThis = new WeakRef(this);
        const { adapter } = this.config;
        if (adapter) {
          debug3("Using driver adapter: %O", adapter);
        }
        this.engine = new this.QueryEngineConstructor(
          {
            datamodel: this.datamodel,
            env: process.env,
            logQueries: (_c = this.config.logQueries) != null ? _c : false,
            ignoreEnvVarErrors: true,
            datasourceOverrides: (_d = this.datasourceOverrides) != null ? _d : {},
            logLevel: this.logLevel,
            configDir: this.config.cwd,
            engineProtocol: "json"
          },
          (log3) => {
            var _a4;
            (_a4 = weakThis.deref()) == null ? void 0 : _a4.logger(log3);
          },
          adapter
        );
        engineInstanceCount++;
      } catch (_e) {
        const e = _e;
        const error2 = this.parseInitError(e.message);
        if (typeof error2 === "string") {
          throw e;
        } else {
          throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
        }
      }
    }
  }
  logger(log3) {
    var _a3;
    const event = this.parseEngineResponse(log3);
    if (!event)
      return;
    if ("span" in event) {
      void this.config.tracingHelper.createEngineSpan(event);
      return;
    }
    event.level = (_a3 = event == null ? void 0 : event.level.toLowerCase()) != null ? _a3 : "unknown";
    if (isQueryEvent(event)) {
      this.logEmitter.emit("query", {
        timestamp: /* @__PURE__ */ new Date(),
        query: event.query,
        params: event.params,
        duration: Number(event.duration_ms),
        target: event.module_path
      });
    } else if (isPanicEvent(event)) {
      this.loggerRustPanic = new PrismaClientRustPanicError(
        this.getErrorMessageWithLink(
          `${event.message}: ${event.reason} in ${event.file}:${event.line}:${event.column}`
        ),
        this.config.clientVersion
      );
    } else {
      this.logEmitter.emit(event.level, {
        timestamp: /* @__PURE__ */ new Date(),
        message: event.message,
        target: event.module_path
      });
    }
  }
  getErrorMessageWithLink(title) {
    var _a3;
    return getErrorMessageWithLink({
      binaryTarget: this.binaryTarget,
      title,
      version: this.config.clientVersion,
      engineVersion: (_a3 = this.versionInfo) == null ? void 0 : _a3.commit,
      database: this.config.activeProvider,
      query: this.lastQuery
    });
  }
  parseInitError(str) {
    try {
      const error2 = JSON.parse(str);
      return error2;
    } catch (e) {
    }
    return str;
  }
  parseRequestError(str) {
    try {
      const error2 = JSON.parse(str);
      return error2;
    } catch (e) {
    }
    return str;
  }
  onBeforeExit() {
    throw new Error(
      '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.'
    );
  }
  async start() {
    await this.libraryInstantiationPromise;
    await this.libraryStoppingPromise;
    if (this.libraryStartingPromise) {
      debug3(`library already starting, this.libraryStarted: ${this.libraryStarted}`);
      return this.libraryStartingPromise;
    }
    if (this.libraryStarted) {
      return;
    }
    const startFn = async () => {
      debug3("library starting");
      try {
        const headers = {
          traceparent: this.config.tracingHelper.getTraceParent()
        };
        if (true) {
          __PrismaProxy.connect(this.engine, JSON.stringify(headers));
        } else {
          await ((_a3 = this.engine) == null ? void 0 : _a3.connect(JSON.stringify(headers)));
        }
        this.libraryStarted = true;
        debug3("library started");
      } catch (err2) {
        const error2 = this.parseInitError(err2.message);
        if (typeof error2 === "string") {
          throw err2;
        } else {
          throw new PrismaClientInitializationError(error2.message, this.config.clientVersion, error2.error_code);
        }
      } finally {
        this.libraryStartingPromise = void 0;
      }
    };
    this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", startFn);
    return this.libraryStartingPromise;
  }
  async stop() {
    await this.libraryStartingPromise;
    await this.executingQueryPromise;
    if (this.libraryStoppingPromise) {
      debug3("library is already stopping");
      return this.libraryStoppingPromise;
    }
    if (!this.libraryStarted) {
      return;
    }
    const stopFn = async () => {
      await new Promise((r) => setTimeout(r, 5));
      debug3("library stopping");
      const headers = {
        traceparent: this.config.tracingHelper.getTraceParent()
      };
      if (true) {
        __PrismaProxy.disconnect(this.engine, JSON.stringify(headers));
      } else {
        await ((_a3 = this.engine) == null ? void 0 : _a3.disconnect(JSON.stringify(headers)));
      }
      this.libraryStarted = false;
      this.libraryStoppingPromise = void 0;
      debug3("library stopped");
    };
    this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", stopFn);
    return this.libraryStoppingPromise;
  }
  version() {
    var _a3, _b2, _c;
    this.versionInfo = (_a3 = this.library) == null ? void 0 : _a3.version();
    return (_c = (_b2 = this.versionInfo) == null ? void 0 : _b2.version) != null ? _c : "unknown";
  }
  /**
   * Triggers an artificial panic
   */
  debugPanic(message) {
    var _a3;
    return (_a3 = this.library) == null ? void 0 : _a3.debugPanic(message);
  }
  async request(query2, { traceparent, interactiveTransaction }) {
    var _b2;
    debug3(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    const headerStr = JSON.stringify({ traceparent });
    const queryStr = JSON.stringify(query2);
    try {
      await this.start();
      if (true) {
        this.executingQueryPromise = __PrismaProxy.execute(
          this.engine,
          queryStr,
          headerStr,
          interactiveTransaction == null ? void 0 : interactiveTransaction.id
        );
      } else {
        this.executingQueryPromise = (_a3 = this.engine) == null ? void 0 : _a3.query(queryStr, headerStr, interactiveTransaction == null ? void 0 : interactiveTransaction.id);
      }
      this.lastQuery = queryStr;
      const data = this.parseEngineResponse(await this.executingQueryPromise);
      if (data.errors) {
        if (data.errors.length === 1) {
          throw this.buildQueryError(data.errors[0]);
        }
        throw new PrismaClientUnknownRequestError(JSON.stringify(data.errors), {
          clientVersion: this.config.clientVersion
        });
      } else if (this.loggerRustPanic) {
        throw this.loggerRustPanic;
      }
      return { data, elapsed: 0 };
    } catch (e) {
      if (e instanceof PrismaClientInitializationError) {
        throw e;
      }
      if (e.code === "GenericFailure" && ((_b2 = e.message) == null ? void 0 : _b2.startsWith("PANIC:"))) {
        throw new PrismaClientRustPanicError(this.getErrorMessageWithLink(e.message), this.config.clientVersion);
      }
      const error2 = this.parseRequestError(e.message);
      if (typeof error2 === "string") {
        throw e;
      } else {
        throw new PrismaClientUnknownRequestError(`${error2.message}
${error2.backtrace}`, {
          clientVersion: this.config.clientVersion
        });
      }
    }
  }
  async requestBatch(queries, { transaction, traceparent }) {
    debug3("requestBatch");
    const request = getBatchRequestPayload(queries, transaction);
    await this.start();
    this.lastQuery = JSON.stringify(request);
    if (true) {
      this.executingQueryPromise = __PrismaProxy.execute(
        this.engine,
        this.lastQuery,
        JSON.stringify({ traceparent }),
        getInteractiveTransactionId(transaction)
      );
    } else {
      this.executingQueryPromise = this.engine.query(
        this.lastQuery,
        JSON.stringify({ traceparent }),
        getInteractiveTransactionId(transaction)
      );
    }
    const result = await this.executingQueryPromise;
    const data = this.parseEngineResponse(result);
    if (data.errors) {
      if (data.errors.length === 1) {
        throw this.buildQueryError(data.errors[0]);
      }
      throw new PrismaClientUnknownRequestError(JSON.stringify(data.errors), {
        clientVersion: this.config.clientVersion
      });
    }
    const { batchResult, errors } = data;
    if (Array.isArray(batchResult)) {
      return batchResult.map((result2) => {
        var _a3;
        if (result2.errors && result2.errors.length > 0) {
          return (_a3 = this.loggerRustPanic) != null ? _a3 : this.buildQueryError(result2.errors[0]);
        }
        return {
          data: result2,
          elapsed: 0
          // TODO Implement Elapsed: https://github.com/prisma/prisma/issues/7726
        };
      });
    } else {
      if (errors && errors.length === 1) {
        throw new Error(errors[0].error);
      }
      throw new Error(JSON.stringify(data));
    }
  }
  buildQueryError(error2) {
    if (error2.user_facing_error.is_panic) {
      return new PrismaClientRustPanicError(
        this.getErrorMessageWithLink(error2.user_facing_error.message),
        this.config.clientVersion
      );
    }
    const externalError = this.getExternalAdapterError(error2.user_facing_error);
    return externalError ? externalError.error : prismaGraphQLToJSError(error2, this.config.clientVersion);
  }
  getExternalAdapterError(error2) {
    var _a3;
    if (error2.error_code === DRIVER_ADAPTER_EXTERNAL_ERROR && this.config.adapter) {
      const id = (_a3 = error2.meta) == null ? void 0 : _a3.id;
      assertAlways(typeof id === "number", "Malformed external JS error received from the engine");
      const errorRecord = this.config.adapter.errorRegistry.consumeError(id);
      assertAlways(errorRecord, `External error with reported id was not registered`);
      return errorRecord;
    }
    return void 0;
  }
  async metrics(options) {
    await this.start();
    const responseString = await this.engine.metrics(JSON.stringify(options));
    if (options.format === "prometheus") {
      return responseString;
    }
    return this.parseEngineResponse(responseString);
  }
};
function isUserFacingError(e) {
  return typeof e === "object" && e !== null && e["error_code"] !== void 0;
}

// src/runtime/core/init/getEngineInstance.ts
function getEngineInstance(clientConfig, engineConfig) {
  let url;
  try {
    url = resolveDatasourceUrl({
      inlineDatasources: engineConfig.inlineDatasources,
      overrideDatasources: engineConfig.overrideDatasources,
      env: { ...engineConfig.env, ...process.env },
      clientVersion: engineConfig.clientVersion
    });
  } catch (e) {
  }
  if (clientConfig.noEngine !== true && (url == null ? void 0 : url.startsWith("prisma://"))) {
    warnOnce(
      "recommend--no-engine",
      "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"
    );
  }
  const engineType = getClientEngineType(engineConfig.generator);
  if (true) {
    return new LibraryEngine(engineConfig);
  } else if (engineType === ClientEngineType3.Wasm && engineConfig.adapter !== void 0) {
    return new LibraryEngine(engineConfig);
  } else if ((url == null ? void 0 : url.startsWith("prisma://")) || clientConfig.noEngine || false) {
    return new DataProxyEngine(engineConfig);
  } else if (engineType === ClientEngineType3.Library && false) {
    return new LibraryEngine(engineConfig);
  } else if (engineType === ClientEngineType3.Binary && false) {
    return new BinaryEngine(engineConfig);
  }
  throw new PrismaClientValidationError("Invalid client engine type, please use `library` or `binary`", {
    clientVersion: engineConfig.clientVersion
  });
}

// src/runtime/core/init/getPreviewFeatures.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getPreviewFeatures({ generator }) {
  var _a3;
  return (_a3 = generator == null ? void 0 : generator.previewFeatures) != null ? _a3 : [];
}

// src/runtime/core/jsonProtocol/serializeJsonQuery.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/errorRendering/throwValidationException.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/core/errorRendering/applyValidationError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_js_levenshtein = __toESM(require_js_levenshtein());

// src/runtime/core/errorRendering/applyUnionError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function applyUnionError(error2, args) {
  const allErrors = flattenUnionError(error2);
  const merged = mergeInvalidArgumentTypeErrors(allErrors);
  const bestError = getBestScoringError(merged);
  if (bestError) {
    applyValidationError(bestError, args);
  } else {
    args.addErrorMessage(() => "Unknown error");
  }
}
function flattenUnionError(error2) {
  return error2.errors.flatMap((error3) => {
    if (error3.kind === "Union") {
      return flattenUnionError(error3);
    }
    return [error3];
  });
}
function mergeInvalidArgumentTypeErrors(errorList) {
  const invalidArgsError = /* @__PURE__ */ new Map();
  const result = [];
  for (const error2 of errorList) {
    if (error2.kind !== "InvalidArgumentType") {
      result.push(error2);
      continue;
    }
    const key = `${error2.selectionPath.join(".")}:${error2.argumentPath.join(".")}`;
    const prevError = invalidArgsError.get(key);
    if (!prevError) {
      invalidArgsError.set(key, error2);
    } else {
      invalidArgsError.set(key, {
        ...error2,
        argument: {
          ...error2.argument,
          typeNames: uniqueConcat(prevError.argument.typeNames, error2.argument.typeNames)
        }
      });
    }
  }
  result.push(...invalidArgsError.values());
  return result;
}
function uniqueConcat(head, tail) {
  return [...new Set(head.concat(tail))];
}
function getBestScoringError(errors) {
  return maxWithComparator(errors, (errorA, errorB) => {
    const aPathLength = getCombinedPathLength(errorA);
    const bPathLength = getCombinedPathLength(errorB);
    if (aPathLength !== bPathLength) {
      return aPathLength - bPathLength;
    }
    return getErrorTypeScore(errorA) - getErrorTypeScore(errorB);
  });
}
function getCombinedPathLength(error2) {
  let score = 0;
  if (Array.isArray(error2["selectionPath"])) {
    score += error2["selectionPath"].length;
  }
  if (Array.isArray(error2["argumentPath"])) {
    score += error2["argumentPath"].length;
  }
  return score;
}
function getErrorTypeScore(error2) {
  switch (error2.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}

// src/runtime/core/errorRendering/ObjectFieldSuggestion.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var ObjectFieldSuggestion = class {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.isRequired = false;
  }
  makeRequired() {
    this.isRequired = true;
    return this;
  }
  write(writer) {
    const {
      colors: { green: green3 }
    } = writer.context;
    writer.addMarginSymbol(green3(this.isRequired ? "+" : "?"));
    writer.write(green3(this.name));
    if (!this.isRequired) {
      writer.write(green3("?"));
    }
    writer.write(green3(`: `));
    if (typeof this.value === "string") {
      writer.write(green3(this.value));
    } else {
      writer.write(this.value);
    }
  }
};

// src/runtime/core/errorRendering/SuggestionObjectValue.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var SuggestionObjectValue = class {
  constructor() {
    this.fields = [];
  }
  addField(name, value) {
    this.fields.push({
      write(writer) {
        const { green: green3, dim: dim2 } = writer.context.colors;
        writer.write(green3(dim2(`${name}: ${value}`))).addMarginSymbol(green3(dim2("+")));
      }
    });
    return this;
  }
  write(writer) {
    const {
      colors: { green: green3 }
    } = writer.context;
    writer.writeLine(green3("{")).withIndent(() => {
      writer.writeJoined(fieldsSeparator, this.fields).newLine();
    }).write(green3("}")).addMarginSymbol(green3("+"));
  }
};

// src/runtime/core/errorRendering/applyValidationError.ts
function applyValidationError(error2, args) {
  switch (error2.kind) {
    case "IncludeAndSelect":
      applyIncludeAndSelectError(error2, args);
      break;
    case "IncludeOnScalar":
      applyIncludeOnScalarError(error2, args);
      break;
    case "EmptySelection":
      applyEmptySelectionError(error2, args);
      break;
    case "UnknownSelectionField":
      applyUnknownSelectionFieldError(error2, args);
      break;
    case "UnknownArgument":
      applyUnknownArgumentError(error2, args);
      break;
    case "UnknownInputField":
      applyUnknownInputFieldError(error2, args);
      break;
    case "RequiredArgumentMissing":
      applyRequiredArgumentMissingError(error2, args);
      break;
    case "InvalidArgumentType":
      applyInvalidArgumentTypeError(error2, args);
      break;
    case "InvalidArgumentValue":
      applyInvalidArgumentValueError(error2, args);
      break;
    case "ValueTooLarge":
      applyValueTooLargeError(error2, args);
      break;
    case "SomeFieldsMissing":
      applySomeFieldsMissingError(error2, args);
      break;
    case "TooManyFieldsGiven":
      applyTooManyFieldsGivenError(error2, args);
      break;
    case "Union":
      applyUnionError(error2, args);
      break;
    default:
      throw new Error("not implemented: " + error2.kind);
  }
}
function applyIncludeAndSelectError(error2, argsTree) {
  var _a3, _b2;
  const object = argsTree.arguments.getDeepSubSelectionValue(error2.selectionPath);
  if (object && object instanceof ObjectValue) {
    (_a3 = object.getField("include")) == null ? void 0 : _a3.markAsError();
    (_b2 = object.getField("select")) == null ? void 0 : _b2.markAsError();
  }
  argsTree.addErrorMessage(
    (colors) => `Please ${colors.bold("either")} use ${colors.green("`include`")} or ${colors.green(
      "`select`"
    )}, but ${colors.red("not both")} at the same time.`
  );
}
function applyIncludeOnScalarError(error2, argsTree) {
  var _a3, _b2;
  const [selectionPath, field] = splitPath(error2.selectionPath);
  const outputType = error2.outputType;
  const object = (_a3 = argsTree.arguments.getDeepSelectionParent(selectionPath)) == null ? void 0 : _a3.value;
  if (object) {
    (_b2 = object.getField(field)) == null ? void 0 : _b2.markAsError();
    if (outputType) {
      for (const field2 of outputType.fields) {
        if (field2.isRelation) {
          object.addSuggestion(new ObjectFieldSuggestion(field2.name, "true"));
        }
      }
    }
  }
  argsTree.addErrorMessage((colors) => {
    let msg = `Invalid scalar field ${colors.red(`\`${field}\``)} for ${colors.bold("include")} statement`;
    if (outputType) {
      msg += ` on model ${colors.bold(outputType.name)}. ${availableOptionsMessage(colors)}`;
    } else {
      msg += ".";
    }
    msg += `
Note that ${colors.bold("include")} statements only accept relation fields.`;
    return msg;
  });
}
function applyEmptySelectionError(error2, argsTree) {
  var _a3, _b2;
  const outputType = error2.outputType;
  const selection = (_a3 = argsTree.arguments.getDeepSelectionParent(error2.selectionPath)) == null ? void 0 : _a3.value;
  const isEmpty = (_b2 = selection == null ? void 0 : selection.isEmpty()) != null ? _b2 : false;
  if (selection) {
    selection.removeAllFields();
    addSelectionSuggestions(selection, outputType);
  }
  argsTree.addErrorMessage((colors) => {
    if (isEmpty) {
      return `The ${colors.red("`select`")} statement for type ${colors.bold(
        outputType.name
      )} must not be empty. ${availableOptionsMessage(colors)}`;
    }
    return `The ${colors.red("`select`")} statement for type ${colors.bold(outputType.name)} needs ${colors.bold(
      "at least one truthy value"
    )}.`;
  });
}
function applyUnknownSelectionFieldError(error2, argsTree) {
  var _a3;
  const [parentPath, fieldName] = splitPath(error2.selectionPath);
  const selectionParent = argsTree.arguments.getDeepSelectionParent(parentPath);
  if (selectionParent) {
    (_a3 = selectionParent.value.getField(fieldName)) == null ? void 0 : _a3.markAsError();
    addSelectionSuggestions(selectionParent.value, error2.outputType);
  }
  argsTree.addErrorMessage((colors) => {
    const parts = [`Unknown field ${colors.red(`\`${fieldName}\``)}`];
    if (selectionParent) {
      parts.push(`for ${colors.bold(selectionParent.kind)} statement`);
    }
    parts.push(`on model ${colors.bold(`\`${error2.outputType.name}\``)}.`);
    parts.push(availableOptionsMessage(colors));
    return parts.join(" ");
  });
}
function applyUnknownArgumentError(error2, argsTree) {
  var _a3;
  const argName = error2.argumentPath[0];
  const selection = argsTree.arguments.getDeepSubSelectionValue(error2.selectionPath);
  if (selection instanceof ObjectValue) {
    (_a3 = selection.getField(argName)) == null ? void 0 : _a3.markAsError();
    addArgumentsSuggestions(selection, error2.arguments);
  }
  argsTree.addErrorMessage(
    (colors) => unknownArgumentMessage(
      colors,
      argName,
      error2.arguments.map((arg) => arg.name)
    )
  );
}
function applyUnknownInputFieldError(error2, argsTree) {
  var _a3;
  const [argParentPath, argName] = splitPath(error2.argumentPath);
  const selection = argsTree.arguments.getDeepSubSelectionValue(error2.selectionPath);
  if (selection instanceof ObjectValue) {
    (_a3 = selection.getDeepField(error2.argumentPath)) == null ? void 0 : _a3.markAsError();
    const argParent = selection.getDeepFieldValue(argParentPath);
    if (argParent instanceof ObjectValue) {
      addInputSuggestions(argParent, error2.inputType);
    }
  }
  argsTree.addErrorMessage(
    (colors) => unknownArgumentMessage(
      colors,
      argName,
      error2.inputType.fields.map((f) => f.name)
    )
  );
}
function unknownArgumentMessage(colors, argName, options) {
  const parts = [`Unknown argument \`${colors.red(argName)}\`.`];
  const suggestion = getSuggestion(argName, options);
  if (suggestion) {
    parts.push(`Did you mean \`${colors.green(suggestion)}\`?`);
  }
  if (options.length > 0) {
    parts.push(availableOptionsMessage(colors));
  }
  return parts.join(" ");
}
function applyRequiredArgumentMissingError(error2, args) {
  let existingField = void 0;
  args.addErrorMessage((colors) => {
    if ((existingField == null ? void 0 : existingField.value) instanceof ScalarValue && existingField.value.text === "null") {
      return `Argument \`${colors.green(argumentName)}\` must not be ${colors.red("null")}.`;
    }
    return `Argument \`${colors.green(argumentName)}\` is missing.`;
  });
  const selection = args.arguments.getDeepSubSelectionValue(error2.selectionPath);
  if (!(selection instanceof ObjectValue)) {
    return;
  }
  const [argParent, argumentName] = splitPath(error2.argumentPath);
  const objectSuggestion = new SuggestionObjectValue();
  const parent = selection.getDeepFieldValue(argParent);
  if (!(parent instanceof ObjectValue)) {
    return;
  }
  existingField = parent.getField(argumentName);
  if (existingField) {
    parent.removeField(argumentName);
  }
  if (error2.inputTypes.length === 1 && error2.inputTypes[0].kind === "object") {
    for (const field of error2.inputTypes[0].fields) {
      objectSuggestion.addField(field.name, field.typeNames.join(" | "));
    }
    parent.addSuggestion(new ObjectFieldSuggestion(argumentName, objectSuggestion).makeRequired());
  } else {
    const typeName = error2.inputTypes.map(getInputTypeName).join(" | ");
    parent.addSuggestion(new ObjectFieldSuggestion(argumentName, typeName).makeRequired());
  }
}
function getInputTypeName(description) {
  if (description.kind === "list") {
    return `${getInputTypeName(description.elementType)}[]`;
  }
  return description.name;
}
function applyInvalidArgumentTypeError(error2, args) {
  var _a3;
  const argName = error2.argument.name;
  const selection = args.arguments.getDeepSubSelectionValue(error2.selectionPath);
  if (selection instanceof ObjectValue) {
    (_a3 = selection.getDeepFieldValue(error2.argumentPath)) == null ? void 0 : _a3.markAsError();
  }
  args.addErrorMessage((colors) => {
    const expected = joinWithPreposition(
      "or",
      error2.argument.typeNames.map((type) => colors.green(type))
    );
    return `Argument \`${colors.bold(argName)}\`: Invalid value provided. Expected ${expected}, provided ${colors.red(
      error2.inferredType
    )}.`;
  });
}
function applyInvalidArgumentValueError(error2, args) {
  var _a3;
  const argName = error2.argument.name;
  const selection = args.arguments.getDeepSubSelectionValue(error2.selectionPath);
  if (selection instanceof ObjectValue) {
    (_a3 = selection.getDeepFieldValue(error2.argumentPath)) == null ? void 0 : _a3.markAsError();
  }
  args.addErrorMessage((colors) => {
    const parts = [`Invalid value for argument \`${colors.bold(argName)}\``];
    if (error2.underlyingError) {
      parts.push(`: ${error2.underlyingError}`);
    }
    parts.push(".");
    if (error2.argument.typeNames.length > 0) {
      const expected = joinWithPreposition(
        "or",
        error2.argument.typeNames.map((type) => colors.green(type))
      );
      parts.push(` Expected ${expected}.`);
    }
    return parts.join("");
  });
}
function applyValueTooLargeError(error2, args) {
  const argName = error2.argument.name;
  const selection = args.arguments.getDeepSubSelectionValue(error2.selectionPath);
  let printedValue;
  if (selection instanceof ObjectValue) {
    const field = selection.getDeepField(error2.argumentPath);
    const value = field == null ? void 0 : field.value;
    value == null ? void 0 : value.markAsError();
    if (value instanceof ScalarValue) {
      printedValue = value.text;
    }
  }
  args.addErrorMessage((colors) => {
    const parts = ["Unable to fit value"];
    if (printedValue) {
      parts.push(colors.red(printedValue));
    }
    parts.push(`into a 64-bit signed integer for field \`${colors.bold(argName)}\``);
    return parts.join(" ");
  });
}
function applySomeFieldsMissingError(error2, args) {
  const argumentName = error2.argumentPath[error2.argumentPath.length - 1];
  const selection = args.arguments.getDeepSubSelectionValue(error2.selectionPath);
  if (selection instanceof ObjectValue) {
    const argument = selection.getDeepFieldValue(error2.argumentPath);
    if (argument instanceof ObjectValue) {
      addInputSuggestions(argument, error2.inputType);
    }
  }
  args.addErrorMessage((colors) => {
    const parts = [`Argument \`${colors.bold(argumentName)}\` of type ${colors.bold(error2.inputType.name)} needs`];
    if (error2.constraints.minFieldCount === 1) {
      if (error2.constraints.requiredFields) {
        parts.push(
          `${colors.green("at least one of")} ${joinWithPreposition(
            "or",
            error2.constraints.requiredFields.map((f) => `\`${colors.bold(f)}\``)
          )} arguments.`
        );
      } else {
        parts.push(`${colors.green("at least one")} argument.`);
      }
    } else {
      parts.push(`${colors.green(`at least ${error2.constraints.minFieldCount}`)} arguments.`);
    }
    parts.push(availableOptionsMessage(colors));
    return parts.join(" ");
  });
}
function applyTooManyFieldsGivenError(error2, args) {
  const argumentName = error2.argumentPath[error2.argumentPath.length - 1];
  const selection = args.arguments.getDeepSubSelectionValue(error2.selectionPath);
  let providedArguments = [];
  if (selection instanceof ObjectValue) {
    const argument = selection.getDeepFieldValue(error2.argumentPath);
    if (argument instanceof ObjectValue) {
      argument.markAsError();
      providedArguments = Object.keys(argument.getFields());
    }
  }
  args.addErrorMessage((colors) => {
    const parts = [`Argument \`${colors.bold(argumentName)}\` of type ${colors.bold(error2.inputType.name)} needs`];
    if (error2.constraints.minFieldCount === 1 && error2.constraints.maxFieldCount == 1) {
      parts.push(`${colors.green("exactly one")} argument,`);
    } else if (error2.constraints.maxFieldCount == 1) {
      parts.push(`${colors.green("at most one")} argument,`);
    } else {
      parts.push(`${colors.green(`at most ${error2.constraints.maxFieldCount}`)} arguments,`);
    }
    parts.push(
      `but you provided ${joinWithPreposition(
        "and",
        providedArguments.map((arg) => colors.red(arg))
      )}. Please choose`
    );
    if (error2.constraints.maxFieldCount === 1) {
      parts.push("one.");
    } else {
      parts.push(`${error2.constraints.maxFieldCount}.`);
    }
    return parts.join(" ");
  });
}
function addSelectionSuggestions(selection, outputType) {
  for (const field of outputType.fields) {
    if (!selection.hasField(field.name)) {
      selection.addSuggestion(new ObjectFieldSuggestion(field.name, "true"));
    }
  }
}
function addArgumentsSuggestions(argumentsParent, args) {
  for (const arg of args) {
    if (!argumentsParent.hasField(arg.name)) {
      argumentsParent.addSuggestion(new ObjectFieldSuggestion(arg.name, arg.typeNames.join(" | ")));
    }
  }
}
function addInputSuggestions(parent, inputType) {
  if (inputType.kind !== "object") {
    return;
  }
  for (const field of inputType.fields) {
    if (!parent.hasField(field.name)) {
      parent.addSuggestion(new ObjectFieldSuggestion(field.name, field.typeNames.join(" | ")));
    }
  }
}
function splitPath(path3) {
  const selectionPath = [...path3];
  const fieldName = selectionPath.pop();
  if (!fieldName) {
    throw new Error("unexpected empty path");
  }
  return [selectionPath, fieldName];
}
function availableOptionsMessage({ green: green3, enabled }) {
  return `Available options are ` + (enabled ? `listed in ${green3("green")}` : `marked with ?`) + ".";
}
function joinWithPreposition(preposition, items) {
  if (items.length === 1) {
    return items[0];
  }
  const itemsCopy = [...items];
  const lastItem = itemsCopy.pop();
  return `${itemsCopy.join(", ")} ${preposition} ${lastItem}`;
}
var MAX_EDIT_DISTANCE = 3;
function getSuggestion(str, options) {
  let minDistance = Infinity;
  let result;
  for (const option of options) {
    const editDistance = (0, import_js_levenshtein.default)(str, option);
    if (editDistance > MAX_EDIT_DISTANCE) {
      continue;
    }
    if (editDistance < minDistance) {
      minDistance = editDistance;
      result = option;
    }
  }
  return result;
}

// src/runtime/core/errorRendering/throwValidationException.ts
function throwValidationException({
  args,
  errors,
  errorFormat,
  callsite,
  originalMethod,
  clientVersion: clientVersion2
}) {
  const argsTree = buildArgumentsRenderingTree(args);
  for (const error2 of errors) {
    applyValidationError(error2, argsTree);
  }
  const colors = errorFormat === "pretty" ? activeColors : inactiveColors;
  const message = argsTree.renderAllMessages(colors);
  const renderedArgs = new Writer(0, { colors }).write(argsTree).toString();
  const messageWithContext = createErrorMessageWithContext({
    message,
    callsite,
    originalMethod,
    showColors: errorFormat === "pretty",
    callArguments: renderedArgs
  });
  throw new PrismaClientValidationError(messageWithContext, { clientVersion: clientVersion2 });
}

// src/runtime/core/jsonProtocol/serializeJsonQuery.ts
var jsActionToProtocolAction = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw"
};
function serializeJsonQuery({
  modelName,
  action,
  args,
  runtimeDataModel,
  extensions,
  callsite,
  clientMethod,
  errorFormat,
  clientVersion: clientVersion2
}) {
  const context = new SerializeContext({
    runtimeDataModel,
    modelName,
    action,
    rootArgs: args,
    callsite,
    extensions,
    selectionPath: [],
    argumentPath: [],
    originalMethod: clientMethod,
    errorFormat,
    clientVersion: clientVersion2
  });
  return {
    modelName,
    action: jsActionToProtocolAction[action],
    query: serializeFieldSelection(args, context)
  };
}
function serializeFieldSelection({ select, include, ...args } = {}, context) {
  return {
    arguments: serializeArgumentsObject(args, context),
    selection: serializeSelectionSet(select, include, context)
  };
}
function serializeSelectionSet(select, include, context) {
  if (select && include) {
    context.throwValidationError({ kind: "IncludeAndSelect", selectionPath: context.getSelectionPath() });
  }
  if (select) {
    return createExplicitSelection(select, context);
  }
  return createImplicitSelection(context, include);
}
function createImplicitSelection(context, include) {
  const selectionSet = {};
  if (context.model && !context.isRawAction()) {
    selectionSet.$composites = true;
    selectionSet.$scalars = true;
  }
  if (include) {
    addIncludedRelations(selectionSet, include, context);
  }
  return selectionSet;
}
function addIncludedRelations(selectionSet, include, context) {
  for (const [key, value] of Object.entries(include)) {
    const field = context.findField(key);
    if (field && (field == null ? void 0 : field.kind) !== "object") {
      context.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: context.getSelectionPath().concat(key),
        outputType: context.getOutputTypeDescription()
      });
    }
    if (value === true) {
      selectionSet[key] = true;
    } else if (typeof value === "object") {
      selectionSet[key] = serializeFieldSelection(value, context.nestSelection(key));
    }
  }
}
function createExplicitSelection(select, context) {
  const selectionSet = {};
  const computedFields = context.getComputedFields();
  const selectWithComputedFields = applyComputedFieldsToSelection(select, computedFields);
  for (const [key, value] of Object.entries(selectWithComputedFields)) {
    const field = context.findField(key);
    if ((computedFields == null ? void 0 : computedFields[key]) && !field) {
      continue;
    }
    if (value === true) {
      selectionSet[key] = true;
    } else if (typeof value === "object") {
      selectionSet[key] = serializeFieldSelection(value, context.nestSelection(key));
    }
  }
  return selectionSet;
}
function serializeArgumentsValue(jsValue, context) {
  if (jsValue === null) {
    return null;
  }
  if (typeof jsValue === "string" || typeof jsValue === "number" || typeof jsValue === "boolean") {
    return jsValue;
  }
  if (typeof jsValue === "bigint") {
    return { $type: "BigInt", value: String(jsValue) };
  }
  if (isDate(jsValue)) {
    if (isValidDate(jsValue)) {
      return { $type: "DateTime", value: jsValue.toISOString() };
    } else {
      context.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: context.getSelectionPath(),
        argumentPath: context.getArgumentPath(),
        argument: {
          name: context.getArgumentName(),
          typeNames: ["Date"]
        },
        underlyingError: "Provided Date object is invalid"
      });
    }
  }
  if (isFieldRef(jsValue)) {
    return { $type: "FieldRef", value: { _ref: jsValue.name, _container: jsValue.modelName } };
  }
  if (Array.isArray(jsValue)) {
    return serializeArgumentsArray(jsValue, context);
  }
  if (ArrayBuffer.isView(jsValue)) {
    return { $type: "Bytes", value: import_buffer.Buffer.from(jsValue).toString("base64") };
  }
  if (isRawParameters(jsValue)) {
    return jsValue.values;
  }
  if (isDecimalJsLike(jsValue)) {
    return { $type: "Decimal", value: jsValue.toFixed() };
  }
  if (jsValue instanceof ObjectEnumValue) {
    if (jsValue !== objectEnumValues.instances[jsValue._getName()]) {
      throw new Error("Invalid ObjectEnumValue");
    }
    return { $type: "Enum", value: jsValue._getName() };
  }
  if (isJSONConvertible(jsValue)) {
    return jsValue.toJSON();
  }
  if (typeof jsValue === "object") {
    return serializeArgumentsObject(jsValue, context);
  }
  context.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: context.getSelectionPath(),
    argumentPath: context.getArgumentPath(),
    argument: {
      name: context.getArgumentName(),
      typeNames: []
    },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(
      jsValue
    )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`
  });
}
function serializeArgumentsObject(object, context) {
  if (object["$type"]) {
    return { $type: "Json", value: JSON.stringify(object) };
  }
  const result = {};
  for (const key in object) {
    const value = object[key];
    if (value !== void 0) {
      result[key] = serializeArgumentsValue(value, context.nestArgument(key));
    }
  }
  return result;
}
function serializeArgumentsArray(array, context) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const itemContext = context.nestArgument(String(i));
    const value = array[i];
    if (value === void 0) {
      context.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: itemContext.getSelectionPath(),
        argumentPath: itemContext.getArgumentPath(),
        argument: {
          name: `${context.getArgumentName()}[${i}]`,
          typeNames: []
        },
        underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values"
      });
    }
    result.push(serializeArgumentsValue(value, itemContext));
  }
  return result;
}
function isRawParameters(value) {
  return typeof value === "object" && value !== null && value["__prismaRawParameters__"] === true;
}
function isJSONConvertible(value) {
  return typeof value === "object" && value !== null && typeof value["toJSON"] === "function";
}
var SerializeContext = class _SerializeContext {
  constructor(params) {
    this.params = params;
    if (this.params.modelName) {
      this.model = this.params.runtimeDataModel.models[this.params.modelName];
    }
  }
  throwValidationError(error2) {
    var _a3;
    throwValidationException({
      errors: [error2],
      originalMethod: this.params.originalMethod,
      args: (_a3 = this.params.rootArgs) != null ? _a3 : {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!this.params.modelName || !this.model) {
      return void 0;
    }
    return {
      name: this.params.modelName,
      fields: this.model.fields.map((field) => ({
        name: field.name,
        typeName: "boolean",
        isRelation: field.kind === "object"
      }))
    };
  }
  isRawAction() {
    return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
  }
  getComputedFields() {
    if (!this.params.modelName) {
      return void 0;
    }
    return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(name) {
    var _a3;
    return (_a3 = this.model) == null ? void 0 : _a3.fields.find((field) => field.name === name);
  }
  nestSelection(fieldName) {
    const field = this.findField(fieldName);
    const modelName = (field == null ? void 0 : field.kind) === "object" ? field.type : void 0;
    return new _SerializeContext({
      ...this.params,
      modelName,
      selectionPath: this.params.selectionPath.concat(fieldName)
    });
  }
  nestArgument(fieldName) {
    return new _SerializeContext({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(fieldName)
    });
  }
};

// src/runtime/core/raw-query/rawCommandArgsMapper.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var rawCommandArgsMapper = (command) => ({
  command
});

// src/runtime/core/raw-query/rawQueryArgsMapper.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// src/runtime/utils/mssqlPreparedStatement.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var mssqlPreparedStatement = (sql2) => {
  return sql2.strings.reduce((acc, str, idx) => `${acc}@P${idx}${str}`);
};

// src/runtime/utils/serializeRawParameters.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function serializeRawParameters(parameters) {
  try {
    return serializeRawParametersInternal(parameters, "fast");
  } catch (error2) {
    return serializeRawParametersInternal(parameters, "slow");
  }
}
function serializeRawParametersInternal(parameters, objectSerialization) {
  return JSON.stringify(parameters.map((parameter) => encodeParameter(parameter, objectSerialization)));
}
function encodeParameter(parameter, objectSerialization) {
  if (typeof parameter === "bigint") {
    return {
      prisma__type: "bigint",
      prisma__value: parameter.toString()
    };
  }
  if (isDate(parameter)) {
    return {
      prisma__type: "date",
      prisma__value: parameter.toJSON()
    };
  }
  if (decimal_default.isDecimal(parameter)) {
    return {
      prisma__type: "decimal",
      prisma__value: parameter.toJSON()
    };
  }
  if (import_buffer.Buffer.isBuffer(parameter)) {
    return {
      prisma__type: "bytes",
      prisma__value: parameter.toString("base64")
    };
  }
  if (isArrayBufferLike(parameter) || ArrayBuffer.isView(parameter)) {
    return {
      prisma__type: "bytes",
      // TODO Can we change this now in v16?
      // TODO: node typings do not include ArrayBufferView as of 14.x
      prisma__value: import_buffer.Buffer.from(parameter).toString("base64")
    };
  }
  if (typeof parameter === "object" && objectSerialization === "slow") {
    return preprocessObject(parameter);
  }
  return parameter;
}
function isArrayBufferLike(value) {
  if (value instanceof ArrayBuffer || value instanceof SharedArrayBuffer) {
    return true;
  }
  if (typeof value === "object" && value !== null) {
    return value[Symbol.toStringTag] === "ArrayBuffer" || value[Symbol.toStringTag] === "SharedArrayBuffer";
  }
  return false;
}
function preprocessObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (typeof obj.toJSON === "function") {
    return obj.toJSON();
  }
  if (Array.isArray(obj)) {
    return obj.map(preprocessValueInObject);
  }
  const result = {};
  for (const key of Object.keys(obj)) {
    result[key] = preprocessValueInObject(obj[key]);
  }
  return result;
}
function preprocessValueInObject(value) {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return preprocessObject(value);
}

// src/runtime/core/raw-query/rawQueryArgsMapper.ts
var ALTER_RE = /^(\s*alter\s)/i;
var debug4 = src_default("prisma:client");
function checkAlter(activeProvider, query2, values, invalidCall) {
  if (activeProvider !== "postgresql" && activeProvider !== "cockroachdb") {
    return;
  }
  if (values.length > 0 && ALTER_RE.exec(query2)) {
    throw new Error(`Running ALTER using ${invalidCall} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
}
var rawQueryArgsMapper = ({ clientMethod, activeProvider, driverAdapterProvider }) => (args) => {
  if (driverAdapterProvider !== void 0) {
    activeProvider = driverAdapterProvider;
  }
  let queryString = "";
  let parameters;
  if (Array.isArray(args)) {
    const [query2, ...values] = args;
    queryString = query2;
    parameters = {
      values: serializeRawParameters(values || []),
      __prismaRawParameters__: true
    };
  } else {
    switch (activeProvider) {
      case "sqlite":
      case "mysql": {
        queryString = args.sql;
        parameters = {
          values: serializeRawParameters(args.values),
          __prismaRawParameters__: true
        };
        break;
      }
      case "cockroachdb":
      case "postgresql":
      case "postgres": {
        queryString = args.text;
        parameters = {
          values: serializeRawParameters(args.values),
          __prismaRawParameters__: true
        };
        break;
      }
      case "sqlserver": {
        queryString = mssqlPreparedStatement(args);
        parameters = {
          values: serializeRawParameters(args.values),
          __prismaRawParameters__: true
        };
        break;
      }
      default: {
        throw new Error(`The ${activeProvider} provider does not support ${clientMethod}`);
      }
    }
  }
  if (parameters == null ? void 0 : parameters.values) {
    debug4(`prisma.${clientMethod}(${queryString}, ${parameters.values})`);
  } else {
    debug4(`prisma.${clientMethod}(${queryString})`);
  }
  return { query: queryString, parameters };
};
var templateStringMiddlewareArgsMapper = {
  requestArgsToMiddlewareArgs(sql2) {
    return [sql2.strings, ...sql2.values];
  },
  middlewareArgsToRequestArgs(requestArgs) {
    const [strings, ...values] = requestArgs;
    return new Sql(strings, values);
  }
};
var sqlMiddlewareArgsMapper = {
  requestArgsToMiddlewareArgs(sql2) {
    return [sql2];
  },
  middlewareArgsToRequestArgs(requestArgs) {
    return requestArgs[0];
  }
};

// src/runtime/core/request/createPrismaPromise.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function createPrismaPromiseFactory(transaction) {
  return function createPrismaPromise(callback) {
    let promise;
    const _callback = (callbackTransaction = transaction) => {
      try {
        if (callbackTransaction === void 0 || (callbackTransaction == null ? void 0 : callbackTransaction.kind) === "itx") {
          return promise != null ? promise : promise = valueToPromise(callback(callbackTransaction));
        }
        return valueToPromise(callback(callbackTransaction));
      } catch (error2) {
        return Promise.reject(error2);
      }
    };
    return {
      then(onFulfilled, onRejected) {
        return _callback().then(onFulfilled, onRejected);
      },
      catch(onRejected) {
        return _callback().catch(onRejected);
      },
      finally(onFinally) {
        return _callback().finally(onFinally);
      },
      requestTransaction(batchTransaction) {
        const promise2 = _callback(batchTransaction);
        if (promise2.requestTransaction) {
          return promise2.requestTransaction(batchTransaction);
        }
        return promise2;
      },
      [Symbol.toStringTag]: "PrismaPromise"
    };
  };
}
function valueToPromise(thing) {
  if (typeof thing["then"] === "function") {
    return thing;
  }
  return Promise.resolve(thing);
}

// src/runtime/core/tracing/TracingHelper.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var disabledTracingHelper = {
  isEnabled() {
    return false;
  },
  getTraceParent() {
    return `00-10-10-00`;
  },
  async createEngineSpan() {
  },
  getActiveContext() {
    return void 0;
  },
  runInChildSpan(options, callback) {
    return callback();
  }
};
var DynamicTracingHelper = class {
  isEnabled() {
    return this.getGlobalTracingHelper().isEnabled();
  }
  getTraceParent(context) {
    return this.getGlobalTracingHelper().getTraceParent(context);
  }
  createEngineSpan(event) {
    return this.getGlobalTracingHelper().createEngineSpan(event);
  }
  getActiveContext() {
    return this.getGlobalTracingHelper().getActiveContext();
  }
  runInChildSpan(options, callback) {
    return this.getGlobalTracingHelper().runInChildSpan(options, callback);
  }
  getGlobalTracingHelper() {
    var _a3, _b2;
    return (_b2 = (_a3 = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : _a3.helper) != null ? _b2 : disabledTracingHelper;
  }
};
function getTracingHelper(previewFeatures) {
  if (!previewFeatures.includes("tracing")) {
    return disabledTracingHelper;
  }
  return new DynamicTracingHelper();
}

// src/runtime/core/transaction/utils/createLockCountPromise.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getLockCountPromise(knock, cb = () => {
}) {
  let resolve;
  const lock = new Promise((res) => resolve = res);
  return {
    then(onFulfilled) {
      if (--knock === 0)
        resolve(cb());
      return onFulfilled == null ? void 0 : onFulfilled(lock);
    }
  };
}

// src/runtime/getLogLevel.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getLogLevel(log3) {
  if (typeof log3 === "string") {
    return log3;
  }
  return log3.reduce((acc, curr) => {
    const currentLevel = typeof curr === "string" ? curr : curr.level;
    if (currentLevel === "query") {
      return acc;
    }
    if (!acc) {
      return currentLevel;
    }
    if (curr === "info" || acc === "info") {
      return "info";
    }
    return currentLevel;
  }, void 0);
}

// src/runtime/MiddlewareHandler.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var MiddlewareHandler = class {
  constructor() {
    this._middlewares = [];
  }
  use(middleware) {
    this._middlewares.push(middleware);
  }
  get(id) {
    return this._middlewares[id];
  }
  has(id) {
    return !!this._middlewares[id];
  }
  length() {
    return this._middlewares.length;
  }
};

// src/runtime/RequestHandler.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_strip_ansi2 = __toESM(require_strip_ansi());

// src/runtime/core/errors/ErrorWithBatchIndex.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function hasBatchIndex(value) {
  return typeof value["batchRequestIdx"] === "number";
}

// src/runtime/core/jsonProtocol/deserializeJsonResponse.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function deserializeJsonResponse(result) {
  if (result === null) {
    return result;
  }
  if (Array.isArray(result)) {
    return result.map(deserializeJsonResponse);
  }
  if (typeof result === "object") {
    if (isTaggedValue(result)) {
      return deserializeTaggedValue(result);
    }
    return mapObjectValues(result, deserializeJsonResponse);
  }
  return result;
}
function isTaggedValue(value) {
  return value !== null && typeof value == "object" && typeof value["$type"] === "string";
}
function deserializeTaggedValue({ $type, value }) {
  switch ($type) {
    case "BigInt":
      return BigInt(value);
    case "Bytes":
      return import_buffer.Buffer.from(value, "base64");
    case "DateTime":
      return new Date(value);
    case "Decimal":
      return new decimal_default(value);
    case "Json":
      return JSON.parse(value);
    default:
      assertNever(value, "Unknown tagged value");
  }
}

// src/runtime/core/jsonProtocol/getBatchId.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function getBatchId(query2) {
  if (query2.action !== "findUnique" && query2.action !== "findUniqueOrThrow") {
    return void 0;
  }
  const parts = [];
  if (query2.modelName) {
    parts.push(query2.modelName);
  }
  if (query2.query.arguments) {
    parts.push(buildKeysString(query2.query.arguments));
  }
  parts.push(buildKeysString(query2.query.selection));
  return parts.join("");
}
function buildKeysString(obj) {
  const keysArray = Object.keys(obj).sort().map((key) => {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      return `(${key} ${buildKeysString(value)})`;
    }
    return key;
  });
  return `(${keysArray.join(" ")})`;
}

// src/runtime/core/jsonProtocol/isWrite.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var writeMap = {
  aggregate: false,
  aggregateRaw: false,
  createMany: true,
  createOne: true,
  deleteMany: true,
  deleteOne: true,
  executeRaw: true,
  findFirst: false,
  findFirstOrThrow: false,
  findMany: false,
  findRaw: false,
  findUnique: false,
  findUniqueOrThrow: false,
  groupBy: false,
  queryRaw: false,
  runCommandRaw: true,
  updateMany: true,
  updateOne: true,
  upsertOne: true
};
function isWrite(action) {
  return writeMap[action];
}

// src/runtime/DataLoader.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var DataLoader = class {
  constructor(options) {
    this.options = options;
    this.tickActive = false;
    this.batches = {};
  }
  request(request) {
    const hash = this.options.batchBy(request);
    if (!hash) {
      return this.options.singleLoader(request);
    }
    if (!this.batches[hash]) {
      this.batches[hash] = [];
      if (!this.tickActive) {
        this.tickActive = true;
        process.nextTick(() => {
          this.dispatchBatches();
          this.tickActive = false;
        });
      }
    }
    return new Promise((resolve, reject) => {
      this.batches[hash].push({
        request,
        resolve,
        reject
      });
    });
  }
  dispatchBatches() {
    for (const key in this.batches) {
      const batch = this.batches[key];
      delete this.batches[key];
      if (batch.length === 1) {
        this.options.singleLoader(batch[0].request).then((result) => {
          if (result instanceof Error) {
            batch[0].reject(result);
          } else {
            batch[0].resolve(result);
          }
        }).catch((e) => {
          batch[0].reject(e);
        });
      } else {
        batch.sort((a, b) => this.options.batchOrder(a.request, b.request));
        this.options.batchLoader(batch.map((j) => j.request)).then((results) => {
          if (results instanceof Error) {
            for (let i = 0; i < batch.length; i++) {
              batch[i].reject(results);
            }
          } else {
            for (let i = 0; i < batch.length; i++) {
              const value = results[i];
              if (value instanceof Error) {
                batch[i].reject(value);
              } else {
                batch[i].resolve(value);
              }
            }
          }
        }).catch((e) => {
          for (let i = 0; i < batch.length; i++) {
            batch[i].reject(e);
          }
        });
      }
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};

// src/runtime/RequestHandler.ts
var debug5 = src_default("prisma:client:request_handler");
var RequestHandler = class {
  constructor(client, logEmitter) {
    this.logEmitter = logEmitter;
    this.client = client;
    this.dataloader = new DataLoader({
      batchLoader: createApplyBatchExtensionsFunction(async ({ requests, customDataProxyFetch }) => {
        const { transaction, otelParentCtx } = requests[0];
        const queries = requests.map((r) => r.protocolQuery);
        const traceparent = this.client._tracingHelper.getTraceParent(otelParentCtx);
        const containsWrite = requests.some((r) => isWrite(r.protocolQuery.action));
        const results = await this.client._engine.requestBatch(queries, {
          traceparent,
          transaction: getTransactionOptions(transaction),
          containsWrite,
          customDataProxyFetch
        });
        return results.map((result, i) => {
          if (result instanceof Error) {
            return result;
          }
          try {
            return this.mapQueryEngineResult(requests[i], result);
          } catch (error2) {
            return error2;
          }
        });
      }),
      singleLoader: async (request) => {
        var _a3;
        const interactiveTransaction = ((_a3 = request.transaction) == null ? void 0 : _a3.kind) === "itx" ? getItxTransactionOptions(request.transaction) : void 0;
        const response = await this.client._engine.request(request.protocolQuery, {
          traceparent: this.client._tracingHelper.getTraceParent(),
          interactiveTransaction,
          isWrite: isWrite(request.protocolQuery.action),
          customDataProxyFetch: request.customDataProxyFetch
        });
        return this.mapQueryEngineResult(request, response);
      },
      batchBy: (request) => {
        var _a3;
        if ((_a3 = request.transaction) == null ? void 0 : _a3.id) {
          return `transaction-${request.transaction.id}`;
        }
        return getBatchId(request.protocolQuery);
      },
      batchOrder(requestA, requestB) {
        var _a3, _b2;
        if (((_a3 = requestA.transaction) == null ? void 0 : _a3.kind) === "batch" && ((_b2 = requestB.transaction) == null ? void 0 : _b2.kind) === "batch") {
          return requestA.transaction.index - requestB.transaction.index;
        }
        return 0;
      }
    });
  }
  async request(params) {
    try {
      return await this.dataloader.request(params);
    } catch (error2) {
      const { clientMethod, callsite, transaction, args, modelName } = params;
      this.handleAndLogRequestError({ error: error2, clientMethod, callsite, transaction, args, modelName });
    }
  }
  mapQueryEngineResult({ dataPath, unpacker }, response) {
    const data = response == null ? void 0 : response.data;
    const elapsed = response == null ? void 0 : response.elapsed;
    const result = this.unpack(data, dataPath, unpacker);
    if (process.env.PRISMA_CLIENT_GET_TIME) {
      return { data: result, elapsed };
    }
    return result;
  }
  /**
   * Handles the error and logs it, logging the error is done synchronously waiting for the event
   * handlers to finish.
   */
  handleAndLogRequestError(params) {
    try {
      this.handleRequestError(params);
    } catch (err2) {
      if (this.logEmitter) {
        this.logEmitter.emit("error", { message: err2.message, target: params.clientMethod, timestamp: /* @__PURE__ */ new Date() });
      }
      throw err2;
    }
  }
  handleRequestError({ error: error2, clientMethod, callsite, transaction, args, modelName }) {
    debug5(error2);
    if (isMismatchingBatchIndex(error2, transaction)) {
      throw error2;
    }
    if (error2 instanceof NotFoundError) {
      throw error2;
    }
    if (error2 instanceof PrismaClientKnownRequestError && isValidationError(error2)) {
      const validationError = convertValidationError(error2.meta);
      throwValidationException({
        args,
        errors: [validationError],
        callsite,
        errorFormat: this.client._errorFormat,
        originalMethod: clientMethod,
        clientVersion: this.client._clientVersion
      });
    }
    let message = error2.message;
    if (callsite) {
      message = createErrorMessageWithContext({
        callsite,
        originalMethod: clientMethod,
        isPanic: error2.isPanic,
        showColors: this.client._errorFormat === "pretty",
        message
      });
    }
    message = this.sanitizeMessage(message);
    if (error2.code) {
      const meta = modelName ? { modelName, ...error2.meta } : error2.meta;
      throw new PrismaClientKnownRequestError(message, {
        code: error2.code,
        clientVersion: this.client._clientVersion,
        meta,
        batchRequestIdx: error2.batchRequestIdx
      });
    } else if (error2.isPanic) {
      throw new PrismaClientRustPanicError(message, this.client._clientVersion);
    } else if (error2 instanceof PrismaClientUnknownRequestError) {
      throw new PrismaClientUnknownRequestError(message, {
        clientVersion: this.client._clientVersion,
        batchRequestIdx: error2.batchRequestIdx
      });
    } else if (error2 instanceof PrismaClientInitializationError) {
      throw new PrismaClientInitializationError(message, this.client._clientVersion);
    } else if (error2 instanceof PrismaClientRustPanicError) {
      throw new PrismaClientRustPanicError(message, this.client._clientVersion);
    }
    error2.clientVersion = this.client._clientVersion;
    throw error2;
  }
  sanitizeMessage(message) {
    if (this.client._errorFormat && this.client._errorFormat !== "pretty") {
      return (0, import_strip_ansi2.default)(message);
    }
    return message;
  }
  unpack(data, dataPath, unpacker) {
    if (!data) {
      return data;
    }
    if (data["data"]) {
      data = data["data"];
    }
    if (!data) {
      return data;
    }
    const response = Object.values(data)[0];
    const pathForGet = dataPath.filter((key) => key !== "select" && key !== "include");
    const deserializeResponse = deserializeJsonResponse(deepGet(response, pathForGet));
    return unpacker ? unpacker(deserializeResponse) : deserializeResponse;
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
function getTransactionOptions(transaction) {
  if (!transaction) {
    return void 0;
  }
  if (transaction.kind === "batch") {
    return {
      kind: "batch",
      options: {
        isolationLevel: transaction.isolationLevel
      }
    };
  }
  if (transaction.kind === "itx") {
    return {
      kind: "itx",
      options: getItxTransactionOptions(transaction)
    };
  }
  assertNever(transaction, "Unknown transaction kind");
}
function getItxTransactionOptions(transaction) {
  return {
    id: transaction.id,
    payload: transaction.payload
  };
}
function isMismatchingBatchIndex(error2, transaction) {
  return hasBatchIndex(error2) && (transaction == null ? void 0 : transaction.kind) === "batch" && error2.batchRequestIdx !== transaction.index;
}
function isValidationError(error2) {
  return error2.code === "P2009" || // validation error
  error2.code === "P2012";
}
function convertValidationError(error2) {
  if (error2.kind === "Union") {
    return {
      kind: "Union",
      errors: error2.errors.map(convertValidationError)
    };
  }
  if (Array.isArray(error2["selectionPath"])) {
    const [, ...selectionPath] = error2["selectionPath"];
    return {
      ...error2,
      selectionPath
    };
  }
  return error2;
}

// src/runtime/utils/clientVersion.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();

// package.json
var version = "0.0.0";

// src/runtime/utils/clientVersion.ts
var clientVersion = version;

// src/runtime/utils/deserializeRawResults.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function deserializeRawResults(rows) {
  return rows.map((row) => {
    const mappedRow = {};
    for (const key of Object.keys(row)) {
      mappedRow[key] = deserializeValue(row[key]);
    }
    return mappedRow;
  });
}
function deserializeValue({ prisma__type: type, prisma__value: value }) {
  switch (type) {
    case "bigint":
      return BigInt(value);
    case "bytes":
      return import_buffer.Buffer.from(value, "base64");
    case "decimal":
      return new decimal_default(value);
    case "datetime":
    case "date":
      return new Date(value);
    case "time":
      return /* @__PURE__ */ new Date(`1970-01-01T${value}Z`);
    case "array":
      return value.map(deserializeValue);
    default:
      return value;
  }
}

// src/runtime/utils/validatePrismaClientOptions.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var import_js_levenshtein2 = __toESM(require_js_levenshtein());

// src/runtime/core/errors/PrismaClientConstructorValidationError.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var PrismaClientConstructorValidationError = class extends Error {
  constructor(message) {
    super(message + `
Read more at https://pris.ly/d/client-constructor`);
    this.name = "PrismaClientConstructorValidationError";
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
setClassName(PrismaClientConstructorValidationError, "PrismaClientConstructorValidationError");

// src/runtime/utils/validatePrismaClientOptions.ts
var knownProperties = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "__internal"];
var errorFormats = ["pretty", "colorless", "minimal"];
var logLevels = ["info", "query", "warn", "error"];
var validators = {
  datasources: (options, { datasourceNames }) => {
    if (!options) {
      return;
    }
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new PrismaClientConstructorValidationError(
        `Invalid value ${JSON.stringify(options)} for "datasources" provided to PrismaClient constructor`
      );
    }
    for (const [key, value] of Object.entries(options)) {
      if (!datasourceNames.includes(key)) {
        const didYouMean = getDidYouMean(key, datasourceNames) || ` Available datasources: ${datasourceNames.join(", ")}`;
        throw new PrismaClientConstructorValidationError(
          `Unknown datasource ${key} provided to PrismaClient constructor.${didYouMean}`
        );
      }
      if (typeof value !== "object" || Array.isArray(value)) {
        throw new PrismaClientConstructorValidationError(
          `Invalid value ${JSON.stringify(options)} for datasource "${key}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`
        );
      }
      if (value && typeof value === "object") {
        for (const [key1, value1] of Object.entries(value)) {
          if (key1 !== "url") {
            throw new PrismaClientConstructorValidationError(
              `Invalid value ${JSON.stringify(options)} for datasource "${key}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`
            );
          }
          if (typeof value1 !== "string") {
            throw new PrismaClientConstructorValidationError(
              `Invalid value ${JSON.stringify(value1)} for datasource "${key}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`
            );
          }
        }
      }
    }
  },
  adapter: (adapter, config2) => {
    if (adapter === null) {
      return;
    }
    if (adapter === void 0) {
      throw new PrismaClientConstructorValidationError(
        `"adapter" property must not be undefined, use null to conditionally disable driver adapters.`
      );
    }
    const previewFeatures = getPreviewFeatures(config2);
    if (!previewFeatures.includes("driverAdapters")) {
      throw new PrismaClientConstructorValidationError(
        '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.'
      );
    }
    if (getClientEngineType() === "binary" /* Binary */) {
      throw new PrismaClientConstructorValidationError(
        `Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.`
      );
    }
  },
  datasourceUrl: (options) => {
    if (typeof options !== "undefined" && typeof options !== "string") {
      throw new PrismaClientConstructorValidationError(
        `Invalid value ${JSON.stringify(options)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`
      );
    }
  },
  errorFormat: (options) => {
    if (!options) {
      return;
    }
    if (typeof options !== "string") {
      throw new PrismaClientConstructorValidationError(
        `Invalid value ${JSON.stringify(options)} for "errorFormat" provided to PrismaClient constructor.`
      );
    }
    if (!errorFormats.includes(options)) {
      const didYouMean = getDidYouMean(options, errorFormats);
      throw new PrismaClientConstructorValidationError(
        `Invalid errorFormat ${options} provided to PrismaClient constructor.${didYouMean}`
      );
    }
  },
  log: (options) => {
    if (!options) {
      return;
    }
    if (!Array.isArray(options)) {
      throw new PrismaClientConstructorValidationError(
        `Invalid value ${JSON.stringify(options)} for "log" provided to PrismaClient constructor.`
      );
    }
    function validateLogLevel(level) {
      if (typeof level === "string") {
        if (!logLevels.includes(level)) {
          const didYouMean = getDidYouMean(level, logLevels);
          throw new PrismaClientConstructorValidationError(
            `Invalid log level "${level}" provided to PrismaClient constructor.${didYouMean}`
          );
        }
      }
    }
    for (const option of options) {
      validateLogLevel(option);
      const logValidators = {
        level: validateLogLevel,
        emit: (value) => {
          const emits = ["stdout", "event"];
          if (!emits.includes(value)) {
            const didYouMean = getDidYouMean(value, emits);
            throw new PrismaClientConstructorValidationError(
              `Invalid value ${JSON.stringify(
                value
              )} for "emit" in logLevel provided to PrismaClient constructor.${didYouMean}`
            );
          }
        }
      };
      if (option && typeof option === "object") {
        for (const [key, value] of Object.entries(option)) {
          if (logValidators[key]) {
            logValidators[key](value);
          } else {
            throw new PrismaClientConstructorValidationError(
              `Invalid property ${key} for "log" provided to PrismaClient constructor`
            );
          }
        }
      }
    }
  },
  __internal: (value) => {
    if (!value) {
      return;
    }
    const knownKeys = ["debug", "hooks", "engine", "measurePerformance"];
    if (typeof value !== "object") {
      throw new PrismaClientConstructorValidationError(
        `Invalid value ${JSON.stringify(value)} for "__internal" to PrismaClient constructor`
      );
    }
    for (const [key] of Object.entries(value)) {
      if (!knownKeys.includes(key)) {
        const didYouMean = getDidYouMean(key, knownKeys);
        throw new PrismaClientConstructorValidationError(
          `Invalid property ${JSON.stringify(key)} for "__internal" provided to PrismaClient constructor.${didYouMean}`
        );
      }
    }
  }
};
function validatePrismaClientOptions(options, config2) {
  for (const [key, value] of Object.entries(options)) {
    if (!knownProperties.includes(key)) {
      const didYouMean = getDidYouMean(key, knownProperties);
      throw new PrismaClientConstructorValidationError(
        `Unknown property ${key} provided to PrismaClient constructor.${didYouMean}`
      );
    }
    validators[key](value, config2);
  }
  if (options.datasourceUrl && options.datasources) {
    throw new PrismaClientConstructorValidationError(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them'
    );
  }
}
function getDidYouMean(str, options) {
  if (options.length === 0) {
    return "";
  }
  if (typeof str !== "string") {
    return "";
  }
  const alternative = getAlternative(str, options);
  if (!alternative) {
    return "";
  }
  return ` Did you mean "${alternative}"?`;
}
function getAlternative(str, options) {
  if (options.length === 0) {
    return null;
  }
  const optionsWithDistances = options.map((value) => ({
    value,
    distance: (0, import_js_levenshtein2.default)(str, value)
  }));
  optionsWithDistances.sort((a, b) => {
    return a.distance < b.distance ? -1 : 1;
  });
  const bestAlternative = optionsWithDistances[0];
  if (bestAlternative.distance < 3) {
    return bestAlternative.value;
  }
  return null;
}

// src/runtime/utils/waitForBatch.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
function waitForBatch(promises2) {
  if (promises2.length === 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    const successfulResults = new Array(promises2.length);
    let bestError = null;
    let done = false;
    let settledPromisesCount = 0;
    const settleOnePromise = () => {
      if (done) {
        return;
      }
      settledPromisesCount++;
      if (settledPromisesCount === promises2.length) {
        done = true;
        if (bestError) {
          reject(bestError);
        } else {
          resolve(successfulResults);
        }
      }
    };
    const immediatelyReject = (error2) => {
      if (!done) {
        done = true;
        reject(error2);
      }
    };
    for (let i = 0; i < promises2.length; i++) {
      promises2[i].then(
        (result) => {
          successfulResults[i] = result;
          settleOnePromise();
        },
        (error2) => {
          if (!hasBatchIndex(error2)) {
            immediatelyReject(error2);
            return;
          }
          if (error2.batchRequestIdx === i) {
            immediatelyReject(error2);
          } else {
            if (!bestError) {
              bestError = error2;
            }
            settleOnePromise();
          }
        }
      );
    }
  });
}

// src/runtime/getPrismaClient.ts
var debug6 = src_default("prisma:client");
typeof globalThis === "object" ? globalThis.NODE_CLIENT = true : 0;
var noopMiddlewareArgsMapper = {
  requestArgsToMiddlewareArgs: (param) => param,
  middlewareArgsToRequestArgs: (param) => param
};
var TX_ID = Symbol.for("prisma.client.transaction.id");
var BatchTxIdCounter = {
  id: 0,
  nextId() {
    return ++this.id;
  }
};
function getPrismaClient(config2) {
  class PrismaClient {
    constructor(optionsArg) {
      this._middlewares = new MiddlewareHandler();
      this._createPrismaPromise = createPrismaPromiseFactory();
      this.$extends = $extends;
      var _a3, _b2, _c, _d, _e, _f;
      checkPlatformCaching(config2);
      if (optionsArg) {
        validatePrismaClientOptions(optionsArg, config2);
      }
      const adapter = (optionsArg == null ? void 0 : optionsArg.adapter) ? bindAdapter(optionsArg.adapter) : void 0;
      const logEmitter = new import_events.EventEmitter().on("error", () => {
      });
      this._extensions = MergedExtensionsList.empty();
      this._previewFeatures = getPreviewFeatures(config2);
      this._clientVersion = (_a3 = config2.clientVersion) != null ? _a3 : clientVersion;
      this._activeProvider = config2.activeProvider;
      this._tracingHelper = getTracingHelper(this._previewFeatures);
      const envPaths = {
        rootEnvPath: config2.relativeEnvPaths.rootEnvPath && import_path3.default.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
        schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && import_path3.default.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
      };
      const loadedEnv = (_b2 = config2.injectableEdgeEnv) == null ? void 0 : _b2.call(config2);
      try {
        const options = optionsArg != null ? optionsArg : {};
        const internal = (_c = options.__internal) != null ? _c : {};
        const useDebug = internal.debug === true;
        if (useDebug) {
          src_default.enable("prisma:client");
        }
        let cwd = import_path3.default.resolve(config2.dirname, config2.relativePath);
        if (!fs_default.existsSync(cwd)) {
          cwd = config2.dirname;
        }
        debug6("dirname", config2.dirname);
        debug6("relativePath", config2.relativePath);
        debug6("cwd", cwd);
        const engineConfig = internal.engine || {};
        if (options.errorFormat) {
          this._errorFormat = options.errorFormat;
        } else if (process.env.NODE_ENV === "production") {
          this._errorFormat = "minimal";
        } else if (process.env.NO_COLOR) {
          this._errorFormat = "colorless";
        } else {
          this._errorFormat = "colorless";
        }
        this._runtimeDataModel = config2.runtimeDataModel;
        this._engineConfig = {
          cwd,
          dirname: config2.dirname,
          enableDebugLogs: useDebug,
          allowTriggerPanic: engineConfig.allowTriggerPanic,
          datamodelPath: import_path3.default.join(config2.dirname, (_d = config2.filename) != null ? _d : "schema.prisma"),
          prismaPath: (_e = engineConfig.binaryPath) != null ? _e : void 0,
          engineEndpoint: engineConfig.endpoint,
          generator: config2.generator,
          showColors: this._errorFormat === "pretty",
          logLevel: options.log && getLogLevel(options.log),
          // TODO
          logQueries: options.log && Boolean(
            typeof options.log === "string" ? options.log === "query" : options.log.find((o) => typeof o === "string" ? o === "query" : o.level === "query")
          ),
          env: (_f = loadedEnv == null ? void 0 : loadedEnv.parsed) != null ? _f : {},
          flags: [],
          getQueryEngineWasmModule: config2.getQueryEngineWasmModule,
          clientVersion: config2.clientVersion,
          engineVersion: config2.engineVersion,
          previewFeatures: this._previewFeatures,
          activeProvider: config2.activeProvider,
          inlineSchema: config2.inlineSchema,
          overrideDatasources: getDatasourceOverrides(options, config2.datasourceNames),
          inlineDatasources: config2.inlineDatasources,
          inlineSchemaHash: config2.inlineSchemaHash,
          tracingHelper: this._tracingHelper,
          logEmitter,
          isBundled: config2.isBundled,
          adapter
        };
        debug6("clientVersion", config2.clientVersion);
        this._engine = getEngineInstance(config2, this._engineConfig);
        this._requestHandler = new RequestHandler(this, logEmitter);
        if (options.log) {
          for (const log3 of options.log) {
            const level = typeof log3 === "string" ? log3 : log3.emit === "stdout" ? log3.level : null;
            if (level) {
              this.$on(level, (event) => {
                var _a4;
                logger_exports.log(`${(_a4 = logger_exports.tags[level]) != null ? _a4 : ""}`, event.message || event.query);
              });
            }
          }
        }
        this._metrics = new MetricsClient(this._engine);
      } catch (e) {
        e.clientVersion = this._clientVersion;
        throw e;
      }
      return this._appliedParent = applyModelsAndClientExtensions(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    /**
     * Hook a middleware into the client
     * @param middleware to hook
     */
    $use(middleware) {
      this._middlewares.use(middleware);
    }
    $on(eventType, callback) {
      if (eventType === "beforeExit") {
        this._engine.onBeforeExit(callback);
      } else if (eventType) {
        this._engineConfig.logEmitter.on(eventType, callback);
      }
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (e) {
        e.clientVersion = this._clientVersion;
        throw e;
      }
    }
    /**
     * Disconnect from the database
     */
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (e) {
        e.clientVersion = this._clientVersion;
        throw e;
      } finally {
        clearLogs();
      }
    }
    /**
     * Executes a raw query and always returns a number
     */
    $executeRawInternal(transaction, clientMethod, args, middlewareArgsMapper) {
      var _a3;
      const activeProvider = this._activeProvider;
      const driverAdapterProvider = (_a3 = this._engineConfig.adapter) == null ? void 0 : _a3.provider;
      return this._request({
        action: "executeRaw",
        args,
        transaction,
        clientMethod,
        argsMapper: rawQueryArgsMapper({ clientMethod, activeProvider, driverAdapterProvider }),
        callsite: getCallSite(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper
      });
    }
    /**
     * Executes a raw query provided through a safe tag function
     * @see https://github.com/prisma/prisma/issues/7142
     *
     * @param query
     * @param values
     * @returns
     */
    $executeRaw(query2, ...values) {
      return this._createPrismaPromise((transaction) => {
        if (query2.raw !== void 0 || query2.sql !== void 0) {
          const [sql2, argsMapper] = toSql(query2, values);
          checkAlter(
            this._activeProvider,
            sql2.text,
            sql2.values,
            Array.isArray(query2) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"
          );
          return this.$executeRawInternal(transaction, "$executeRaw", sql2, argsMapper);
        }
        throw new PrismaClientValidationError(
          `\`$executeRaw\` is a tag function, please use it like the following:
\`\`\`
const result = await prisma.$executeRaw\`UPDATE User SET cool = \${true} WHERE email = \${'user@email.com'};\`
\`\`\`

Or read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw
`,
          { clientVersion: this._clientVersion }
        );
      });
    }
    /**
     * Unsafe counterpart of `$executeRaw` that is susceptible to SQL injections
     * @see https://github.com/prisma/prisma/issues/7142
     *
     * @param query
     * @param values
     * @returns
     */
    $executeRawUnsafe(query2, ...values) {
      return this._createPrismaPromise((transaction) => {
        checkAlter(this._activeProvider, query2, values, "prisma.$executeRawUnsafe(<SQL>, [...values])");
        return this.$executeRawInternal(transaction, "$executeRawUnsafe", [query2, ...values]);
      });
    }
    /**
     * Executes a raw command only for MongoDB
     *
     * @param command
     * @returns
     */
    $runCommandRaw(command) {
      if (config2.activeProvider !== "mongodb") {
        throw new PrismaClientValidationError(
          `The ${config2.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion }
        );
      }
      return this._createPrismaPromise((transaction) => {
        return this._request({
          args: command,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: rawCommandArgsMapper,
          callsite: getCallSite(this._errorFormat),
          transaction
        });
      });
    }
    /**
     * Executes a raw query and returns selected data
     */
    async $queryRawInternal(transaction, clientMethod, args, middlewareArgsMapper) {
      var _a3;
      const activeProvider = this._activeProvider;
      const driverAdapterProvider = (_a3 = this._engineConfig.adapter) == null ? void 0 : _a3.provider;
      return this._request({
        action: "queryRaw",
        args,
        transaction,
        clientMethod,
        argsMapper: rawQueryArgsMapper({ clientMethod, activeProvider, driverAdapterProvider }),
        callsite: getCallSite(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper
      }).then(deserializeRawResults);
    }
    /**
     * Executes a raw query provided through a safe tag function
     * @see https://github.com/prisma/prisma/issues/7142
     *
     * @param query
     * @param values
     * @returns
     */
    $queryRaw(query2, ...values) {
      return this._createPrismaPromise((transaction) => {
        if (query2.raw !== void 0 || query2.sql !== void 0) {
          return this.$queryRawInternal(transaction, "$queryRaw", ...toSql(query2, values));
        }
        throw new PrismaClientValidationError(
          `\`$queryRaw\` is a tag function, please use it like the following:
\`\`\`
const result = await prisma.$queryRaw\`SELECT * FROM User WHERE id = \${1} OR email = \${'user@email.com'};\`
\`\`\`

Or read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw
`,
          { clientVersion: this._clientVersion }
        );
      });
    }
    /**
     * Unsafe counterpart of `$queryRaw` that is susceptible to SQL injections
     * @see https://github.com/prisma/prisma/issues/7142
     *
     * @param query
     * @param values
     * @returns
     */
    $queryRawUnsafe(query2, ...values) {
      return this._createPrismaPromise((transaction) => {
        return this.$queryRawInternal(transaction, "$queryRawUnsafe", [query2, ...values]);
      });
    }
    /**
     * Execute a batch of requests in a transaction
     * @param requests
     * @param options
     */
    _transactionWithArray({
      promises: promises2,
      options
    }) {
      const id = BatchTxIdCounter.nextId();
      const lock = getLockCountPromise(promises2.length);
      const requests = promises2.map((request, index) => {
        var _a3, _b2;
        if ((request == null ? void 0 : request[Symbol.toStringTag]) !== "PrismaPromise") {
          throw new Error(
            `All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.`
          );
        }
        const isolationLevel = options == null ? void 0 : options.isolationLevel;
        const transaction = { kind: "batch", id, index, isolationLevel, lock };
        return (_b2 = (_a3 = request.requestTransaction) == null ? void 0 : _a3.call(request, transaction)) != null ? _b2 : request;
      });
      return waitForBatch(requests);
    }
    /**
     * Perform a long-running transaction
     * @param callback
     * @param options
     * @returns
     */
    async _transactionWithCallback({
      callback,
      options
    }) {
      const headers = { traceparent: this._tracingHelper.getTraceParent() };
      const info2 = await this._engine.transaction("start", headers, options);
      let result;
      try {
        const transaction = { kind: "itx", ...info2 };
        result = await callback(this._createItxClient(transaction));
        await this._engine.transaction("commit", headers, info2);
      } catch (e) {
        await this._engine.transaction("rollback", headers, info2).catch(() => {
        });
        throw e;
      }
      return result;
    }
    _createItxClient(transaction) {
      return applyModelsAndClientExtensions(
        createCompositeProxy(unApplyModelsAndClientExtensions(this), [
          addProperty("_appliedParent", () => this._appliedParent._createItxClient(transaction)),
          addProperty("_createPrismaPromise", () => createPrismaPromiseFactory(transaction)),
          addProperty(TX_ID, () => transaction.id),
          removeProperties(itxClientDenyList)
        ])
      );
    }
    /**
     * Execute queries within a transaction
     * @param input a callback or a query list
     * @param options to set timeouts (callback)
     * @returns
     */
    $transaction(input, options) {
      let callback;
      if (typeof input === "function") {
        callback = () => this._transactionWithCallback({ callback: input, options });
      } else {
        callback = () => this._transactionWithArray({ promises: input, options });
      }
      const spanOptions = {
        name: "transaction",
        attributes: { method: "$transaction" }
      };
      return this._tracingHelper.runInChildSpan(spanOptions, callback);
    }
    /**
     * Runs the middlewares over params before executing a request
     * @param internalParams
     * @returns
     */
    _request(internalParams) {
      var _a3;
      internalParams.otelParentCtx = this._tracingHelper.getActiveContext();
      const middlewareArgsMapper = (_a3 = internalParams.middlewareArgsMapper) != null ? _a3 : noopMiddlewareArgsMapper;
      const params = {
        args: middlewareArgsMapper.requestArgsToMiddlewareArgs(internalParams.args),
        dataPath: internalParams.dataPath,
        runInTransaction: Boolean(internalParams.transaction),
        action: internalParams.action,
        model: internalParams.model
      };
      const spanOptions = {
        middleware: {
          name: "middleware",
          middleware: true,
          attributes: { method: "$use" },
          active: false
        },
        operation: {
          name: "operation",
          attributes: {
            method: params.action,
            model: params.model,
            name: params.model ? `${params.model}.${params.action}` : params.action
          }
        }
      };
      let index = -1;
      const consumer = async (changedMiddlewareParams) => {
        const nextMiddleware = this._middlewares.get(++index);
        if (nextMiddleware) {
          return this._tracingHelper.runInChildSpan(spanOptions.middleware, (span) => {
            return nextMiddleware(changedMiddlewareParams, (p) => (span == null ? void 0 : span.end(), consumer(p)));
          });
        }
        const { runInTransaction, args, ...changedRequestParams } = changedMiddlewareParams;
        const requestParams = {
          ...internalParams,
          ...changedRequestParams
        };
        if (args) {
          requestParams.args = middlewareArgsMapper.middlewareArgsToRequestArgs(args);
        }
        if (internalParams.transaction !== void 0 && runInTransaction === false) {
          delete requestParams.transaction;
        }
        const result = await applyQueryExtensions(this, requestParams);
        if (!requestParams.model) {
          return result;
        }
        return applyAllResultExtensions({
          result,
          modelName: requestParams.model,
          args: requestParams.args,
          extensions: this._extensions,
          runtimeDataModel: this._runtimeDataModel
        });
      };
      return this._tracingHelper.runInChildSpan(spanOptions.operation, () => {
        if (false) {
          const asyncRes = new AsyncResource("prisma-client-request");
          return asyncRes.runInAsyncScope(() => consumer(params));
        }
        return consumer(params);
      });
    }
    async _executeRequest({
      args,
      clientMethod,
      dataPath,
      callsite,
      action,
      model,
      argsMapper,
      transaction,
      unpacker,
      otelParentCtx,
      customDataProxyFetch
    }) {
      try {
        args = argsMapper ? argsMapper(args) : args;
        const spanOptions = {
          name: "serialize"
        };
        const message = this._tracingHelper.runInChildSpan(
          spanOptions,
          () => serializeJsonQuery({
            modelName: model,
            runtimeDataModel: this._runtimeDataModel,
            action,
            args,
            clientMethod,
            callsite,
            extensions: this._extensions,
            errorFormat: this._errorFormat,
            clientVersion: this._clientVersion
          })
        );
        if (src_default.enabled("prisma:client")) {
          debug6(`Prisma Client call:`);
          debug6(`prisma.${clientMethod}(${prettyPrintArguments(args)})`);
          debug6(`Generated request:`);
          debug6(JSON.stringify(message, null, 2) + "\n");
        }
        if ((transaction == null ? void 0 : transaction.kind) === "batch") {
          await transaction.lock;
        }
        return this._requestHandler.request({
          protocolQuery: message,
          modelName: model,
          action,
          clientMethod,
          dataPath,
          callsite,
          args,
          extensions: this._extensions,
          transaction,
          unpacker,
          otelParentCtx,
          otelChildCtx: this._tracingHelper.getActiveContext(),
          customDataProxyFetch
        });
      } catch (e) {
        e.clientVersion = this._clientVersion;
        throw e;
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics")) {
        throw new PrismaClientValidationError(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion }
        );
      }
      return this._metrics;
    }
    /**
     * Shortcut for checking a preview flag
     * @param feature preview flag
     * @returns
     */
    _hasPreviewFlag(feature) {
      var _a3;
      return !!((_a3 = this._engineConfig.previewFeatures) == null ? void 0 : _a3.includes(feature));
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
    $pushSchema() {
      return this._engine.pushSchema();
    }
  }
  return PrismaClient;
}
function toSql(query2, values) {
  if (isTemplateStringArray(query2)) {
    return [new Sql(query2, values), templateStringMiddlewareArgsMapper];
  }
  return [query2, sqlMiddlewareArgsMapper];
}
function isTemplateStringArray(value) {
  return Array.isArray(value) && Array.isArray(value["raw"]);
}

// src/runtime/strictEnum.ts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
var allowList = /* @__PURE__ */ new Set([
  "toJSON",
  // used by JSON.stringify
  "$$typeof",
  // used by old React tooling
  "asymmetricMatch",
  // used by Jest
  Symbol.iterator,
  // used by various JS constructs/methods
  Symbol.toStringTag,
  // Used by .toString()
  Symbol.isConcatSpreadable,
  // Used by Array#concat,
  Symbol.toPrimitive
  // Used when getting converted to primitive values
]);
function makeStrictEnum(definition) {
  return new Proxy(definition, {
    get(target, property) {
      if (property in target) {
        return target[property];
      }
      if (allowList.has(property)) {
        return void 0;
      }
      throw new TypeError(`Invalid enum value: ${String(property)}`);
    }
  });
}

// fill-plugin:./warnEnvConflicts
init_buffer();
init_process();
init_perf_hooks();
init_function();
init_weakref();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DMMF,
  DMMFClass,
  Debug,
  Decimal,
  Extensions,
  MetricsClient,
  NotFoundError,
  ObjectEnumValue,
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
  Public,
  Sql,
  Types,
  defineDmmfProperty,
  detectRuntime,
  empty,
  getPrismaClient,
  itxClientDenyList,
  join,
  makeStrictEnum,
  objectEnumNames,
  objectEnumValues,
  raw,
  sqltag,
  warnEnvConflicts,
  warnOnce
});
//# sourceMappingURL=rn.js.map
