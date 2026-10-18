var $scramjetController;
(() => {
  var _0x4b3acf = { 286(_0x54bd5d, _0x4f8dbb, _0x489e8a) {
    _0x489e8a.d(_0x4f8dbb, { I: () => _0x2c0a3a });
    let _0x2c0a3a = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 355(_0x3359bf, _0x3f8875, _0x5e44be) {
    _0x5e44be.d(_0x3f8875, { O: () => _0xeacd32, x: () => _0x3817bf });
    let _0x3817bf = "0.0.14";
    function _0xeacd32() {
      if (typeof $scramjet > "u") throw Error("@mercuryworkshop/scramjet is not loaded. Load scramjet before the controller.");
      var _0x5b7077 = "2.0.67-alpha.2", _0x41aeaf = $scramjet.versionInfo.version;
      if (_0x5b7077 !== _0x41aeaf) throw Error("@mercuryworkshop/scramjet version mismatch: this build expects " + _0x5b7077 + ", but the loaded runtime is " + _0x41aeaf);
    }
  }, 805(_0x10bf86, _0x1815d3, _0x5c973d) {
    _0x5c973d.d(_0x1815d3, { C: () => _0xc24fdd });
    class _0xc24fdd {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x3a419c, _0x86787e, _0x473a99) {
        this.methods = _0x3a419c, this.id = _0x86787e, this.sendRaw = _0x473a99;
      }
      recieve(_0x436e7f) {
        if (_0x436e7f == null || typeof _0x436e7f != "object") return;
        let _0x199433 = _0x436e7f[this.id];
        if (_0x199433 == null || typeof _0x199433 != "object") return;
        let _0x4ef40a = _0x199433.$type;
        if (_0x4ef40a === "response") {
          let _0x15a4d3 = _0x199433.$token, _0x5c5ac0 = _0x199433.$data, _0x984712 = _0x199433.$error, _0x1adb9b = this.promiseCallbacks.get(_0x15a4d3);
          if (!_0x1adb9b) return;
          this.promiseCallbacks.delete(_0x15a4d3), _0x984712 !== void 0 ? _0x1adb9b.reject(Error(_0x984712)) : _0x1adb9b.resolve(_0x5c5ac0);
        } else if (_0x4ef40a === "request") {
          let _0x20243a = _0x199433.$method, _0x222b84 = _0x199433.$args;
          this.methods[_0x20243a](_0x222b84).then((_0x25f4e2) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x199433.$token, $data: _0x25f4e2?.[0] } }, _0x25f4e2?.[1]);
          }).catch((_0x283d5b) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x199433.$token, $error: _0x283d5b?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x38ce68, _0x269bfc, _0x39c8a8 = []) {
        let _0xb8e88 = this.counter++;
        return new Promise((_0x341e7f, _0x47e47d) => {
          this.promiseCallbacks.set(_0xb8e88, { resolve: _0x341e7f, reject: _0x47e47d }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x38ce68, $args: _0x269bfc, $token: _0xb8e88 } }, _0x39c8a8);
        });
      }
    }
  }, 986(_0x3b43b7) {
    let _0x2013fc = Object.getPrototypeOf({});
    function _0x4992f4() {
      return function(_0x28a295) {
        return typeof _0x28a295 == "object" && _0x28a295 !== null && !(_0x28a295 instanceof RegExp) && !(_0x28a295 instanceof Date);
      };
    }
    function _0x49cea3(_0xc63768) {
      function _0x460b3e(_0x23b9a6) {
        return _0x23b9a6 !== "constructor" && _0x23b9a6 !== "prototype" && _0x23b9a6 !== "__proto__";
      }
      let _0x4de191 = Object.prototype.propertyIsEnumerable, _0x6ed431 = _0xc63768?.symbols ? function(_0x518fd7) {
        let _0x2661b5 = Object.keys(_0x518fd7), _0x4b06a2 = Object.getOwnPropertySymbols(_0x518fd7);
        for (let _0xea2b53 = 0, _0x239330 = _0x4b06a2.length; _0xea2b53 < _0x239330; ++_0xea2b53) _0x4de191.call(_0x518fd7, _0x4b06a2[_0xea2b53]) && _0x2661b5.push(_0x4b06a2[_0xea2b53]);
        return _0x2661b5;
      } : Object.keys, _0x139146 = typeof _0xc63768?.cloneProtoObject == "function" ? _0xc63768.cloneProtoObject : void 0, _0x285fe3 = typeof _0xc63768?.isMergeableObject == "function" ? _0xc63768.isMergeableObject : _0x4992f4(), _0x4fe5e5 = _0xc63768?.onlyDefinedProperties === !0, _0x14b48a = _0xc63768 && typeof _0xc63768.mergeArray == "function" ? _0xc63768.mergeArray({ clone: _0x470c99, deepmerge: _0x157a94, getKeys: _0x6ed431, isMergeableObject: _0x285fe3 }) : function(_0x470f16, _0x3be1d1) {
        let _0x4242a6 = _0x470f16.length, _0x3fbbcb = _0x3be1d1.length, _0x3040c2 = 0, _0x392c45 = Array(_0x4242a6 + _0x3fbbcb);
        for (; _0x3040c2 < _0x4242a6; ++_0x3040c2) _0x392c45[_0x3040c2] = _0x470c99(_0x470f16[_0x3040c2]);
        for (_0x3040c2 = 0; _0x3040c2 < _0x3fbbcb; ++_0x3040c2) _0x392c45[_0x3040c2 + _0x4242a6] = _0x470c99(_0x3be1d1[_0x3040c2]);
        return _0x392c45;
      };
      function _0x470c99(_0x4750b8) {
        return _0x285fe3(_0x4750b8) ? Array.isArray(_0x4750b8) ? (function(_0x3028f8) {
          let _0x47bd88 = 0, _0x31da5c = _0x3028f8.length, _0xbf2d8c = Array(_0x31da5c);
          for (; _0x47bd88 < _0x31da5c; ++_0x47bd88) _0xbf2d8c[_0x47bd88] = _0x470c99(_0x3028f8[_0x47bd88]);
          return _0xbf2d8c;
        })(_0x4750b8) : (function(_0x57cd3b) {
          let _0x1963e7, _0x1bc9bd, _0x323011, _0x2558b7 = {};
          if (_0x139146 && Object.getPrototypeOf(_0x57cd3b) !== _0x2013fc) return _0x139146(_0x57cd3b);
          let _0xf4cc46 = _0x6ed431(_0x57cd3b);
          for (_0x1963e7 = 0, _0x1bc9bd = _0xf4cc46.length; _0x1963e7 < _0x1bc9bd; ++_0x1963e7) _0x460b3e(_0x323011 = _0xf4cc46[_0x1963e7]) && (_0x2558b7[_0x323011] = _0x470c99(_0x57cd3b[_0x323011]));
          return _0x2558b7;
        })(_0x4750b8) : _0x4750b8;
      }
      function _0x157a94(_0x2bafbf, _0xa3001d) {
        if (_0x4fe5e5 && _0xa3001d === void 0) return _0x470c99(_0x2bafbf);
        let _0x5a7472 = Array.isArray(_0xa3001d), _0x6bfef9 = Array.isArray(_0x2bafbf);
        return typeof _0xa3001d != "object" || _0xa3001d === null ? _0xa3001d : _0x285fe3(_0x2bafbf) ? _0x5a7472 && _0x6bfef9 ? _0x14b48a(_0x2bafbf, _0xa3001d) : _0x5a7472 !== _0x6bfef9 ? _0x470c99(_0xa3001d) : (function(_0x36bffc, _0x36241e) {
          let _0x11d5b4, _0x4a9945, _0x223134, _0x4dea88 = {}, _0x251c67 = _0x6ed431(_0x36bffc), _0x5cce5c = _0x6ed431(_0x36241e);
          for (_0x11d5b4 = 0, _0x4a9945 = _0x251c67.length; _0x11d5b4 < _0x4a9945; ++_0x11d5b4) _0x460b3e(_0x223134 = _0x251c67[_0x11d5b4]) && _0x5cce5c.indexOf(_0x223134) === -1 && (_0x4dea88[_0x223134] = _0x470c99(_0x36bffc[_0x223134]));
          for (_0x11d5b4 = 0, _0x4a9945 = _0x5cce5c.length; _0x11d5b4 < _0x4a9945; ++_0x11d5b4) if (_0x460b3e(_0x223134 = _0x5cce5c[_0x11d5b4]))
            if (_0x223134 in _0x36bffc) _0x251c67.indexOf(_0x223134) !== -1 && (_0x139146 && _0x285fe3(_0x36241e[_0x223134]) && Object.getPrototypeOf(_0x36241e[_0x223134]) !== _0x2013fc ? _0x4dea88[_0x223134] = _0x139146(_0x36241e[_0x223134]) : _0x4dea88[_0x223134] = _0x157a94(_0x36bffc[_0x223134], _0x36241e[_0x223134]));
            else {
              if (_0x4fe5e5 && _0x36241e[_0x223134] === void 0) continue;
              _0x4dea88[_0x223134] = _0x470c99(_0x36241e[_0x223134]);
            }
          return _0x4dea88;
        })(_0x2bafbf, _0xa3001d) : _0x470c99(_0xa3001d);
      }
      return _0xc63768?.all ? function() {
        let _0x404ff1;
        switch (arguments.length) {
          case 0:
            return {};
          case 1:
            return _0x470c99(arguments[0]);
          case 2:
            return _0x157a94(arguments[0], arguments[1]);
        }
        for (let _0x464b1d = 0, _0x2c228b = arguments.length; _0x464b1d < _0x2c228b; ++_0x464b1d) _0x404ff1 = _0x157a94(_0x404ff1, arguments[_0x464b1d]);
        return _0x404ff1;
      } : _0x157a94;
    }
    _0x3b43b7.exports = _0x49cea3, _0x3b43b7.exports.default = _0x49cea3, _0x3b43b7.exports.deepmerge = _0x49cea3, Object.defineProperty(_0x3b43b7.exports, "isMergeableObject", { get: _0x4992f4 });
  }, 235(_0x5d3f3e, _0x257670, _0x393c2f) {
    _0x393c2f.d(_0x257670, { Sr: () => _0x46a50a }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN;
    let _0x16c2d4 = [101, 204, 205, 304];
    class _0x46a50a extends Response {
      url;
      rawHeaders;
      redirected = !1;
      static fromTransferrableResponse(_0x160c57, _0xb57adf) {
        let _0x2d1c80 = new _0x46a50a(_0x16c2d4.includes(_0x160c57.status) ? void 0 : _0x160c57.body, { headers: new Headers(_0x160c57.headers), status: _0x160c57.status, statusText: _0x160c57.statusText });
        return _0x2d1c80.url = _0xb57adf, _0x2d1c80.redirected = _0x160c57.status >= 300 && _0x160c57.status < 400 && _0x160c57.headers.location !== void 0, _0x2d1c80.rawHeaders = _0x160c57.headers, _0x2d1c80;
      }
      static fromNativeResponse(_0x8d457a) {
        let _0x4d0fc0 = new _0x46a50a(_0x16c2d4.includes(_0x8d457a.status) ? void 0 : _0x8d457a.body, { headers: _0x8d457a.headers, status: _0x8d457a.status, statusText: _0x8d457a.statusText });
        return _0x4d0fc0.url = _0x8d457a.url, _0x4d0fc0.rawHeaders = [..._0x8d457a.headers], _0x4d0fc0.redirected = _0x8d457a.redirected, _0x4d0fc0;
      }
    }
  }, 423(_0x5efb40, _0x1d5a42, _0x254a2d) {
    _0x254a2d.d(_0x1d5a42, { Cx: () => _0x34874a, Oy: () => _0x58df7c, ht: () => _0x8faa04, k_: () => _0x3facf1, mK: () => _0x292231, r5: () => _0x29b02f, sb: () => _0x2d4747, uh: () => _0x287e99 });
    let { BareResponse: _0x3fd5a3, CookieJar: _0x8ed35c, IncrementalHtmlRewriter: _0xde584f, Plugin: _0x3facf1, QP: _0xaf2942, SCRAMJETCLIENT: _0x5cbdda, SCRAMJETCLIENTNAME: _0x33389e, ScramjetClient: _0x467d52, ScramjetFetchHandler: _0x292231, ScramjetFetchTrackedClient: _0x4adee1, ScramjetHeaders: _0x287e99, ScramjetStorageJar: _0x224c69, Tap: _0x34874a, createLocationProxy: _0x369657, defaultConfig: _0x2d4747, defaultConfigDev: _0x461c8f, flagEnabled: _0x5936c1, getOwnPropertyDescriptorHandler: _0x4803b3, getRewriter: _0x3cf4bd, getScriptBlockTypeString: _0x48e7dc, htmlRules: _0x8f6a5e, isArchiveMimeType: _0x52d5e1, isAudioOrVideoMimeType: _0x35fc2c, isFontMimeType: _0x538891, isHtmlMimeType: _0x5bd2f3, isImageMimeType: _0x4cc9c7, isInlineDisplayableMimeType: _0x381b7b, isJavascriptMimeType: _0x312a47, isJavascriptMimeTypeEssenceMatch: _0x128c63, isModuleScriptType: _0x4b1a18, isScriptType: _0x3d9b81, isScriptableMimeType: _0x4c7f41, isXmlMimeType: _0x433ba3, isZipBasedMimeType: _0x258d25, isdedicated: _0x632d9f, isshared: _0x5138b8, issw: _0x5ac196, iswindow: _0x2089d6, isworker: _0x3db44d, nativeProviders: _0x56086c, parseMimeType: _0x27737d, providers: _0x29b02f, registerProviders: _0xfd0268, resetProviders: _0x49050b, rewriteBlob: _0x863fae, rewriteCss: _0x17ffb4, rewriteHtml: _0x39c20a, rewriteJs: _0x259d4e, rewriteJsInner: _0x5351e8, rewriteSrcset: _0x50f762, rewriteUrl: _0x58df7c, rewriteWorkers: _0x4874be, setWasm: _0x8faa04, unrewriteBlob: _0x160e21, unrewriteCss: _0x5c3ccc, unrewriteHtml: _0x5d8f9a, unrewriteUrl: _0x41db72, versionInfo: _0x205fde } = globalThis.$scramjet;
  } }, _0x3e982f = {};
  function _0x1dbcd6(_0x25bb5b) {
    var _0xa4bfcd = _0x3e982f[_0x25bb5b];
    if (_0xa4bfcd !== void 0) return _0xa4bfcd.exports;
    var _0x518aa0 = _0x3e982f[_0x25bb5b] = { exports: {} };
    return _0x4b3acf[_0x25bb5b](_0x518aa0, _0x518aa0.exports, _0x1dbcd6), _0x518aa0.exports;
  }
  _0x1dbcd6.n = (_0x1fc350) => {
    var _0x1968b0 = _0x1fc350 && _0x1fc350.__esModule ? () => _0x1fc350.default : () => _0x1fc350;
    return _0x1dbcd6.d(_0x1968b0, { a: _0x1968b0 }), _0x1968b0;
  }, _0x1dbcd6.d = (_0x4c3a99, _0x44bb13) => {
    for (var _0x54ea0 in _0x44bb13) _0x1dbcd6.o(_0x44bb13, _0x54ea0) && !_0x1dbcd6.o(_0x4c3a99, _0x54ea0) && Object.defineProperty(_0x4c3a99, _0x54ea0, { enumerable: !0, get: _0x44bb13[_0x54ea0] });
  }, _0x1dbcd6.o = (_0x1a9971, _0x133000) => Object.prototype.hasOwnProperty.call(_0x1a9971, _0x133000), _0x1dbcd6.r = (_0x2f4dd8) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x2f4dd8, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x2f4dd8, "__esModule", { value: !0 });
  };
  var _0x4312e7 = {};
  (() => {
    _0x1dbcd6.r(_0x4312e7), _0x1dbcd6.d(_0x4312e7, { Controller: () => _0x19f7b5, Frame: () => _0x4ea51c, ManagedPlugin: () => _0x33dd25, VERSION: () => _0x1b05a6.x, assertRuntimeScramjetVersion: () => _0x1b05a6.O, config: () => _0x5d2f2d });
    var _0x4d8f5f = _0x1dbcd6(986), _0x51e825 = _0x1dbcd6(235), _0x120861 = _0x1dbcd6(805), _0x45758b = _0x1dbcd6(423), _0x2ea948 = _0x1dbcd6(286), _0x1b05a6 = _0x1dbcd6(355);
    let _0x5d2f2d = { prefix: "/~/sj/", scramjetPath: "/scramjet/scramjet.js", injectPath: "/controller/controller.inject.js", wasmPath: "/scramjet/scramjet.wasm", virtualWasmPath: "scramjet.wasm.js", codec: { encode: (_0x266a4d) => _0x266a4d && encodeURIComponent(encodeURIComponent(_0x266a4d)), decode: (_0x296ad6) => {
      if (!_0x296ad6) return _0x296ad6;
      let _0x210c62 = decodeURIComponent(_0x296ad6);
      return /^[a-z][a-z0-9+.-]*:/i.test(_0x210c62) ? _0x210c62 : decodeURIComponent(_0x210c62);
    } } }, _0x2d1800 = { flags: { ..._0x45758b.sb.flags, allowFailedIntercepts: !1 }, maskedfiles: ["inject.js", "scramjet.wasm.js"] };
    class _0x33dd25 extends _0x45758b.k_ {
      frame = null;
      dependencies = [];
      constructor(_0x33ab7a, _0x1a7a4b) {
        super(_0x33ab7a), this.dependencies = _0x1a7a4b;
      }
      install(_0x64750c) {
        this.frame = _0x64750c;
      }
    }
    let _0x183272 = "state";
    function _0x5348b9(_0x15b197, _0x1192aa) {
      let _0x4c0bf4 = new URL(_0x15b197.scriptURL), _0x217cac = new URL(_0x1192aa.scriptURL);
      return _0x4c0bf4.origin === _0x217cac.origin && _0x4c0bf4.pathname === _0x217cac.pathname;
    }
    let _0x3352e7 = null;
    function _0x5c06fd(_0xa8861c) {
      if (_0xa8861c === void 0) return null;
      if (typeof _0xa8861c != "object" || _0xa8861c === null || !Number.isSafeInteger(_0xa8861c.updatedAt) || _0xa8861c.updatedAt < 0 || typeof _0xa8861c.cookies != "string") throw Error("Persisted Scramjet cookie state was malformed");
      return _0xa8861c;
    }
    function _0x137b25(_0x14cbf0) {
      return new Promise((_0x5ef3ed, _0x5a55df) => {
        _0x14cbf0.onsuccess = () => _0x5ef3ed(_0x14cbf0.result), _0x14cbf0.onerror = () => _0x5a55df(_0x14cbf0.error ?? Error("IndexedDB request failed"));
      });
    }
    function _0x5650d5(_0x11a32f) {
      return new Promise((_0x485628, _0xfcb89b) => {
        _0x11a32f.oncomplete = () => _0x485628(void 0), _0x11a32f.onabort = () => _0xfcb89b(_0x11a32f.error ?? Error("IndexedDB transaction aborted")), _0x11a32f.onerror = () => _0xfcb89b(_0x11a32f.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function _0x53bb32() {
      return _0x3352e7 || (_0x3352e7 = new Promise((_0x5a0ded, _0x2f24cd) => {
        let _0x37bcc2 = indexedDB.open("__scramjet_controller", 1);
        _0x37bcc2.onupgradeneeded = () => {
          let _0xa5473c = _0x37bcc2.result;
          _0xa5473c.objectStoreNames.contains(_0x183272) || _0xa5473c.createObjectStore(_0x183272);
        }, _0x37bcc2.onsuccess = () => _0x5a0ded(_0x37bcc2.result), _0x37bcc2.onerror = () => _0x2f24cd(_0x37bcc2.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function _0x1ec1eb(_0x44b38d) {
      let _0x225d9a = (await _0x53bb32()).transaction(_0x183272, "readonly"), _0x385c72 = _0x225d9a.objectStore(_0x183272), _0xe5dccb = _0x5650d5(_0x225d9a), _0x4ea551 = await _0x137b25(_0x385c72.get(_0x44b38d));
      return await _0xe5dccb, _0x5c06fd(_0x4ea551);
    }
    async function _0x37ddb2(_0x2ef21a, _0x996a31, _0x9941da) {
      let _0x4ba8e4 = (await _0x53bb32()).transaction(_0x183272, "readwrite"), _0xedaaa0 = _0x4ba8e4.objectStore(_0x183272), _0x33e45d = _0x5650d5(_0x4ba8e4), _0x9261fb = _0x5c06fd(await _0x137b25(_0xedaaa0.get(_0x2ef21a))), _0x467a2e = Math.max(_0x9941da, _0x9261fb?.updatedAt ?? 0) + 1;
      if (!Number.isSafeInteger(_0x467a2e)) throw Error("Persisted Scramjet cookie sequence was exhausted");
      return await _0x137b25(_0xedaaa0.put({ updatedAt: _0x467a2e, cookies: _0x996a31 }, _0x2ef21a)), await _0x33e45d, _0x467a2e;
    }
    function _0x5addb0() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x15fa99) => _0x15fa99.toString(16).padStart(2, "0")).join("");
    }
    function _0x159dc5(_0x54194c) {
      let _0x53ed5a = _0x54194c.contentWindow;
      if (_0x54194c.name && _0x53ed5a !== null && _0x53ed5a.name !== _0x54194c.name) try {
        _0x53ed5a.name = _0x54194c.name;
      } catch {
      }
    }
    let _0x57167a = (0, _0x4d8f5f.deepmerge)();
    class _0x19f7b5 {
      init;
      id;
      config;
      scramjetConfig;
      prefix;
      frames = [];
      serviceWorkerController;
      ready;
      readyResolve = null;
      readyReject = null;
      serviceWorkerReady = null;
      isReady = !1;
      rpc;
      port = null;
      transport;
      storage;
      resolvedCookieStore;
      cookieUpdatedAt = 0;
      cookieSyncPromise = null;
      cookieSyncDirty = !0;
      cookieSyncChannel;
      initializationComplete = !1;
      closed = !1;
      detached = !1;
      closing = null;
      serviceWorkerReconnect = null;
      transportChannels = /* @__PURE__ */ new Set();
      wasmAlreadyFetched = !1;
      wasmPayload = null;
      onTabChannelMessage = (_0x2e308a) => {
        this.rpc.recieve(_0x2e308a.data);
      };
      onCookieSyncMessage = (_0x3aa020) => {
        let _0x3d1f67 = typeof _0x3aa020.data == "object" && _0x3aa020.data !== null ? _0x3aa020.data.updatedAt : void 0;
        typeof _0x3d1f67 == "number" && Number.isSafeInteger(_0x3d1f67) && !(_0x3d1f67 < 0) && !(_0x3d1f67 <= this.cookieUpdatedAt) && (this.cookieSyncDirty = !0, this.loadSavedCookies().catch((_0x280e1f) => {
          this.cookieSyncDirty = !0;
        }));
      };
      onServiceWorkerMessage = async (_0x91bad3) => {
        if (!this.closed && !this.closing) {
          if (_0x91bad3.data?.$controller$setCookie && typeof _0x91bad3.data.$controller$setCookie == "object") {
            let _0x330d40 = _0x91bad3.data.$controller$setCookie;
            _0x330d40.options?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(_0x330d40.cookies, _0x330d40.options), typeof _0x330d40.id == "string" && this.serviceWorkerController.postMessage({ $sw$setCookieDone: { id: _0x330d40.id } });
            return;
          }
          if (_0x91bad3.data?.$controller$swrevive) {
            let _0x29f587 = _0x91bad3.data.$controller$swrevive, _0x2db731 = _0x91bad3.source;
            if (!(_0x2db731 instanceof ServiceWorker) || _0x2db731.state === "redundant" || typeof _0x29f587.workerId != "string" || typeof _0x29f587.revivalId != "string" || !_0x5348b9(this.serviceWorkerController, _0x2db731)) return;
            this.reconnectServiceWorker(_0x2db731, _0x29f587.workerId, _0x29f587.revivalId).catch((_0x546b85) => {
            });
          }
        }
      };
      async loadScramjetWasm() {
        if (this.wasmAlreadyFetched) return;
        let _0xe850f0 = await fetch(this.config.wasmPath);
        (0, _0x45758b.ht)(await _0xe850f0.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods = { ready: async (e3) => {
        let t3 = this.readyResolve, r2 = this.serviceWorkerReady, o2 = e3 === void 0 && r2?.expectedWorkerId === void 0;
        if (r2 === null || !o2 && (typeof e3?.workerId != "string" || e3.connectionId !== r2.connectionId || r2.expectedWorkerId !== void 0 && r2.expectedWorkerId !== e3.workerId)) throw Error("Scramjet Controller received an unexpected ready acknowledgement");
        clearTimeout(r2.timeout), this.serviceWorkerReady = null, this.serviceWorkerController = r2.worker, t3 !== null && (this.readyResolve = null, this.readyReject = null, t3(void 0)), r2.resolve();
      }, request: async (e3) => {
        let t3 = new URL(e3.rawUrl).pathname, r2 = this.frames.find((e4) => t3.startsWith(e4.prefix));
        if (!r2) throw Error("No frame found for request");
        try {
          if (await this.loadSavedCookies(), t3 === r2.prefix + this.config.virtualWasmPath) {
            if (!this.wasmPayload) {
              let e4 = await fetch(this.config.wasmPath), t4 = await e4.arrayBuffer(), r3 = btoa(new Uint8Array(t4).reduce((e5, t5) => (e5.push(String.fromCharCode(t5)), e5), []).join(""));
              this.wasmPayload = "self.WASM = '" + r3 + "';";
            }
            return [{ body: this.wasmPayload, status: 200, statusText: "OK", headers: [["Content-Type", "application/javascript"]] }, []];
          }
          let o2 = _0x45758b.uh.fromRawHeaders(e3.initialHeaders), s2 = await r2.fetchHandler.handleFetch({ initialHeaders: o2, rawClientUrl: e3.rawClientUrl ? new URL(e3.rawClientUrl) : void 0, rawUrl: new URL(e3.rawUrl), rawReferrer: e3.rawReferrer, rawDestination: e3.destination, rawCredentials: e3.credentials, method: e3.method, mode: e3.mode, referrer: e3.referrer, body: e3.body, cache: e3.cache, clientId: e3.clientId ?? "", ...e3.sourceClientId === void 0 ? {} : { sourceClientId: e3.sourceClientId }, ...e3.resultingClientId === void 0 ? {} : { resultingClientId: e3.resultingClientId } });
          return [{ body: s2.body, status: s2.status, statusText: s2.statusText, headers: s2.headers.toRawHeaders() }, s2.body instanceof ReadableStream || s2.body instanceof ArrayBuffer ? [s2.body] : []];
        } catch (o2) {
          let t4 = { setResponse: void 0, suppressError: !1 };
          if (await _0x45758b.Cx.dispatch(r2.hooks.error.request, { rawrequest: e3, error: o2 }, t4), t4.suppressError, t4.setResponse) return [t4.setResponse, []];
          throw o2;
        }
      }, initRemoteTransport: async ({ port: e3 }) => {
        let t3 = new _0x120861.C({ request: async ({ remote: e4, method: t4, body: r2, headers: o2, proxy: s2 }) => {
          let i2 = this.transport, n2 = new URL(e4), a2 = await i2.request(n2, t4, r2, o2, void 0, { proxy: s2 ?? await this.init.resolveProxy?.(n2) ?? null });
          return [a2, [a2.body]];
        }, sendSetCookie: async ({ cookies: e4, options: t4 }) => {
          await this.loadSavedCookies(!0), t4?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(e4, t4), await this.persistCookies(), await this.propagateCookieSync(e4, t4);
        }, sendStorageMutation: async ({ mutations: e4 }) => {
          let t4 = this.storage?.applyMutation;
          if (!t4) throw Error("Scramjet storage mutation requires a configured storage partition");
          await t4.call(this.storage, e4);
        }, connect: async ({ url: e4, protocols: t4, requestHeaders: r2, port: o2, proxy: s2 }) => {
          let i2, n2 = new Promise((e5) => i2 = e5), a2 = this.transport, c2 = new URL(e4), [l2, d2] = a2.connect(c2, t4, r2, (e5, t5) => {
            i2({ result: "success", protocol: e5, extensions: t5 });
          }, (e5) => {
            o2.postMessage({ type: "data", data: e5 }, e5 instanceof ArrayBuffer ? [e5] : []);
          }, (e5, t5) => {
            o2.postMessage({ type: "close", code: e5, reason: t5 });
          }, (e5) => {
            i2({ result: "failure", error: e5 });
          }, { proxy: s2 ?? await this.init.resolveProxy?.(c2) ?? null });
          return o2.onmessageerror = (e5) => {
          }, o2.onmessage = ({ data: e5 }) => {
            e5.type === "data" ? l2(e5.data) : e5.type === "close" && d2(e5.code, e5.reason);
          }, [await n2, []];
        } }, "transport", (t4, r2) => e3.postMessage(t4, r2));
        this.transportChannels.add({ port: e3, rpc: t3 }), e3.onmessageerror = (e4) => {
        }, e3.onmessage = (e4) => {
          t3.recieve(e4.data);
        }, t3.call("ready", void 0, []);
      } };
      constructor(_0x38d1d3) {
        if (this.init = _0x38d1d3, typeof _0x38d1d3.storagePartitionKey != "string" || _0x38d1d3.storagePartitionKey.length === 0) throw Error("Scramjet Controller requires a non-empty storage partition key");
        (0, _0x1b05a6.O)(), this.id = _0x5addb0(), this.config = _0x57167a(_0x5d2f2d, _0x38d1d3.config || {}), this.scramjetConfig = _0x57167a(_0x2d1800, _0x45758b.sb), this.scramjetConfig = _0x57167a(this.scramjetConfig, _0x38d1d3.scramjetConfig || {}), this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = _0x38d1d3.serviceworker, this.resolvedCookieStore = _0x38d1d3.cookieJar, this.storage = _0x38d1d3.storage, this.cookieSyncChannel = new BroadcastChannel("__scramjet_controller_channel:" + encodeURIComponent(_0x38d1d3.storagePartitionKey)), this.ready = Promise.all([new Promise((_0x50bdab, _0x7f70e8) => {
          this.readyResolve = _0x50bdab, this.readyReject = _0x7f70e8;
        }), this.loadScramjetWasm(), this.loadSavedCookies(!0)]).then(() => {
          if (this.closed || this.closing) throw Error("Scramjet Controller closed before becoming ready");
          this.initializationComplete = !0, this.isReady = !0;
        }), this.rpc = new _0x120861.C(this.methods, "tabchannel-" + this.id, (_0x145ba9, _0xcef363) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(_0x145ba9, _0xcef363);
        }), this.transport = _0x38d1d3.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), this.reconnectServiceWorker(this.serviceWorkerController).catch((_0x373b4f) => {
          if (this.readyResolve === null || this.serviceWorkerReady !== null) return;
          let _0x533b0e = this.readyReject;
          this.readyResolve = null, this.readyReject = null, _0x533b0e?.(_0x373b4f);
        }), navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
      setupMessagePort(_0x187a3a, _0x29e78c, _0x3c7fed) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (this.serviceWorkerReady !== null) {
          let _0x1693b1 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x1693b1.timeout), _0x1693b1.reject(Error("Scramjet Controller connection was replaced"));
        }
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        let _0x4c1e41 = new MessageChannel(), _0x31c53b = _0x5addb0();
        return this.port = _0x4c1e41.port1, this.port.addEventListener("message", this.onTabChannelMessage), this.port.start(), new Promise((_0x42ec0e, _0xb33c8f) => {
          let _0x114465 = (_0x49bebb) => {
            _0xb33c8f(_0x49bebb);
          }, _0x45b5a5 = setTimeout(() => {
            this.serviceWorkerReady?.connectionId === _0x31c53b && (this.serviceWorkerReady = null, _0x114465(Error("Scramjet Controller ready acknowledgement expired")));
          }, 5e3);
          this.serviceWorkerReady = { worker: _0x187a3a, expectedWorkerId: _0x29e78c, connectionId: _0x31c53b, resolve: () => {
            _0x42ec0e(void 0);
          }, reject: _0x114465, timeout: _0x45b5a5 };
          try {
            _0x187a3a.postMessage({ $controller$init: { prefix: this.prefix, id: this.id, connectionId: _0x31c53b, ..._0x29e78c === void 0 ? {} : { workerId: _0x29e78c }, ..._0x3c7fed === void 0 ? {} : { revivalId: _0x3c7fed } } }, [_0x4c1e41.port2]);
          } catch (_0x1593f1) {
            this.serviceWorkerReady?.connectionId === _0x31c53b && (this.serviceWorkerReady = null), clearTimeout(_0x45b5a5), _0x114465(_0x1593f1);
          }
        });
      }
      async reconnectServiceWorker(_0x250005, _0x76b7db, _0x595763) {
        let _0x21b2b2 = this.serviceWorkerReconnect;
        if (_0x21b2b2 !== null && _0x21b2b2.worker === _0x250005 && (_0x76b7db === void 0 || _0x21b2b2.expectedWorkerId === _0x76b7db)) return _0x21b2b2.promise;
        this.isReady = !1;
        let _0x2a38b9 = (async () => {
          if (await this.setupMessagePort(_0x250005, _0x76b7db, _0x595763), this.closed || this.closing) throw Error("Scramjet Controller closed during reconnection");
          this.initializationComplete && (this.isReady = !0);
        })();
        this.serviceWorkerReconnect = { worker: _0x250005, expectedWorkerId: _0x76b7db, promise: _0x2a38b9 };
        try {
          return await _0x2a38b9;
        } finally {
          this.serviceWorkerReconnect?.promise === _0x2a38b9 && (this.serviceWorkerReconnect = null);
        }
      }
      async refreshServiceWorkerConnection() {
        let _0x27c498 = this.serviceWorkerController, _0x2d538c = await navigator.serviceWorker.getRegistration(new URL(this.prefix, location.href)), _0x14d9f2 = _0x2d538c?.active;
        if (_0x14d9f2 && _0x14d9f2.state !== "redundant" && _0x5348b9(_0x27c498, _0x14d9f2) && (_0x27c498 = _0x14d9f2), _0x27c498.state === "redundant") throw Error("No active Scramjet service worker is available");
        return await this.reconnectServiceWorker(_0x27c498);
      }
      detachFromServiceWorker() {
        return new Promise((_0x521cf4, _0xdc88b0) => {
          let _0xf041c5 = new MessageChannel(), _0x36c132 = !1, _0x198107 = (_0x4e9400) => {
            if (!_0x36c132) {
              if (_0x36c132 = !0, clearTimeout(_0x5e5864), _0xf041c5.port1.onmessage = null, _0xf041c5.port1.onmessageerror = null, _0xf041c5.port1.close(), _0x4e9400) return void _0xdc88b0(_0x4e9400);
              _0x521cf4(void 0);
            }
          }, _0x5e5864 = setTimeout(() => {
            _0x198107(Error("Scramjet Controller detach was not acknowledged"));
          }, 5e3);
          _0xf041c5.port1.onmessage = (_0x2d6bba) => {
            let _0x89c77d = _0x2d6bba.data?.$controller$detached;
            _0x89c77d?.id !== this.id || _0x89c77d.detached !== !0 ? _0x198107(Error("Scramjet Controller detach was not acknowledged")) : _0x198107();
          }, _0xf041c5.port1.onmessageerror = () => {
            _0x198107(Error("Scramjet Controller detach acknowledgement failed"));
          };
          let _0x3427a5 = { id: this.id };
          try {
            this.serviceWorkerController.postMessage({ $controller$detach: _0x3427a5 }, [_0xf041c5.port2]);
          } catch (_0x571eac) {
            _0x198107(_0x571eac instanceof Error ? _0x571eac : Error("Scramjet Controller detach request failed"));
          }
        });
      }
      async closeLocalResources() {
        let _0xb221fc = [], _0xb818b7 = [];
        for (let _0x1e2b94 of this.frames) {
          let _0x7b044 = !1;
          try {
            _0x1e2b94.element[_0x2ea948.I] === _0x1e2b94 && (_0x1e2b94.element.removeAttribute("srcdoc"), _0x1e2b94.element.src = "about:blank", delete _0x1e2b94.element[_0x2ea948.I]);
          } catch (_0x339d2d) {
            _0xb221fc.push(_0x339d2d), _0x7b044 = !0;
          }
          _0x7b044 && _0xb818b7.push(_0x1e2b94);
        }
        this.frames = _0xb818b7;
        let _0x558c0d = Error("Scramjet Controller closed");
        for (let _0x17964d of this.transportChannels) {
          for (let _0x30dae4 of _0x17964d.rpc.promiseCallbacks.values()) _0x30dae4.reject(_0x558c0d);
          _0x17964d.rpc.promiseCallbacks.clear(), _0x17964d.port.onmessage = null, _0x17964d.port.onmessageerror = null;
          try {
            _0x17964d.port.close();
          } catch {
          }
        }
        for (let _0x846dea of (this.transportChannels.clear(), this.rpc.promiseCallbacks.values())) _0x846dea.reject(_0x558c0d);
        if (this.rpc.promiseCallbacks.clear(), this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        if (this.cookieSyncChannel.removeEventListener("message", this.onCookieSyncMessage), this.cookieSyncChannel.close(), navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage), this.serviceWorkerReady !== null) {
          let _0x481403 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x481403.timeout), _0x481403.reject(_0x558c0d);
        }
        if (_0xb221fc.length > 0) throw AggregateError(_0xb221fc, "Scramjet Controller frame teardown failed");
      }
      async closeController() {
        this.detached || (await this.detachFromServiceWorker(), this.detached = !0), await this.closeLocalResources();
      }
      close() {
        return this.closed ? Promise.resolve(void 0) : (this.closing || (this.isReady = !1, this.closing = this.closeController().then(() => {
          this.closed = !0;
        }).finally(() => {
          this.closing = null;
        })), this.closing);
      }
      async applyCookieSyncEntries(_0xb08544, _0xb76948 = {}) {
        if (Array.isArray(_0xb08544))
          for (let _0x56dbcc of _0xb08544) typeof _0x56dbcc?.url == "string" && typeof _0x56dbcc.cookie == "string" && await this.cookieJar.setCookies(_0x56dbcc.cookie, new URL(_0x56dbcc.url), _0xb76948.destination === void 0);
      }
      async propagateCookieSync(_0x3d23bf, _0x2370aa = {}) {
        this.port && await this.rpc.call("sendSetCookie", { cookies: _0x3d23bf, options: _0x2370aa });
      }
      async loadSavedCookies(_0x5cf103 = !1) {
        if (_0x5cf103 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          if (!this.cookieJar.ownsPersistence) {
            this.cookieSyncDirty = !1;
            return;
          }
          let _0x340953 = await _0x1ec1eb(this.init.storagePartitionKey);
          _0x340953 && _0x340953.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(_0x340953.cookies), this.cookieUpdatedAt = _0x340953.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        if (!this.cookieJar.ownsPersistence) return;
        let _0x196be2 = await _0x37ddb2(this.init.storagePartitionKey, this.cookieJar.dump(), this.cookieUpdatedAt);
        _0x196be2 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = _0x196be2, this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({ updatedAt: _0x196be2 }));
      }
      get cookieJar() {
        let _0x5cc458 = this.resolvedCookieStore;
        if (_0x5cc458 !== void 0) return _0x5cc458;
        let _0x2fbf69 = (0, _0x45758b.r5)().createCookieStore();
        return this.resolvedCookieStore = _0x2fbf69, _0x2fbf69;
      }
      setTransport(_0x594502) {
        for (let _0x1a26da of (this.transport = _0x594502, this.frames)) _0x1a26da.controller.transport = _0x594502, _0x1a26da.fetchHandler.client.transport = _0x594502;
      }
      createFrame(_0x55dec1, _0x1e9edc = {}) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (!this.isReady) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let _0x49d764 = new _0x4ea51c(this, _0x55dec1 ??= document.createElement("iframe"), _0x1e9edc);
        return this.frames.push(_0x49d764), _0x49d764;
      }
      async wait() {
        if (this.closed || this.closing || (await this.ready, this.closed || this.closing)) throw Error("Scramjet Controller is closed");
      }
    }
    class _0x4ea51c {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return { config: this.controller.scramjetConfig, prefix: new URL(this.prefix, location.href), cookieJar: this.controller.cookieJar, storage: this.controller.storage, storagePartitionKey: this.controller.init.storagePartitionKey, interface: { getInjectScripts: /* @__PURE__ */ (function _0x370f30(_0x48f93d, _0x1caa99, _0x29c735, _0x54fa56, _0x3de1fe, _0x4b8f22, _0x18fd4e, _0x1eff23) {
          return (_0xfdeab, _0xaeede0, _0xef6f94, _0x33b6a8) => {
            var _0x232abf;
            return [_0x33b6a8(_0x48f93d.scramjetPath), _0x33b6a8(_0x29c735.href + _0x48f93d.virtualWasmPath), _0x33b6a8(_0x48f93d.injectPath), _0x33b6a8("data:text/javascript;charset=utf-8;base64," + (_0x232abf = `
					document.querySelectorAll("script[scramjet-injected]").forEach(script => script.remove());
					$scramjetController.load({
						config: ` + JSON.stringify(_0x48f93d) + `,
						sjconfig: ` + JSON.stringify(_0x1caa99) + `,
						prefix: new URL("` + _0x29c735.href + `"),
						cookies: ` + JSON.stringify(_0x54fa56.dump()) + `,
						storage: ` + JSON.stringify(_0x3de1fe?.dump?.() ?? null) + `,
						storagePartitionKey: ` + JSON.stringify(_0x1eff23) + `,
						yieldGetInjectScripts: ` + _0x370f30.toString() + `,
						codecEncode: ` + _0x4b8f22.toString() + `,
						codecDecode: ` + _0x18fd4e.toString() + `,
						initHeaders: ` + JSON.stringify(_0xef6f94.headers ?? []) + `,
						history: ` + JSON.stringify(_0xef6f94.history ?? []) + `,
					})
				`, btoa(new TextEncoder().encode(_0x232abf).reduce((_0x426e63, _0x28710c) => (_0x426e63.push(String.fromCharCode(_0x28710c)), _0x426e63), []).join(""))))];
          };
        })(this.controller.config, this.controller.scramjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.storage, this.controller.config.codec.encode, this.controller.config.codec.decode, this.controller.init.storagePartitionKey), getWorkerInjectScripts: (_0x49c8b9, _0x4a619f, _0x53615b) => {
          var _0x1db348;
          let _0x14d157 = "";
          return _0x14d157 += _0x53615b(this.controller.config.scramjetPath), _0x14d157 += _0x53615b(this.prefix + this.controller.config.virtualWasmPath), _0x14d157 += _0x53615b("data:text/javascript;charset=utf-8;base64," + (_0x1db348 = `
					(()=>{
						const { ScramjetClient, CookieJar, ScramjetStorageJar, setWasm } = $scramjet;

						if (self.WASM) setWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));
						delete self.WASM;

						const sjconfig = ` + JSON.stringify(this.controller.scramjetConfig) + `;
						const prefix = new URL("` + this.prefix + `", location.href);
						const cookieJar = new CookieJar();
						cookieJar.load(` + JSON.stringify(this.controller.cookieJar.dump()) + `);
						const storageState = ` + JSON.stringify(this.controller.storage?.dump?.() ?? null) + `;
						const storage = storageState ? new ScramjetStorageJar(storageState) : undefined;

						const context = {
							config: sjconfig,
							prefix,
							cookieJar,
							storage,
							storagePartitionKey: ` + JSON.stringify(this.controller.init.storagePartitionKey) + `,
							interface: {
								codecEncode: ` + this.controller.config.codec.encode.toString() + `,
								codecDecode: ` + this.controller.config.codec.decode.toString() + `,
							},
						};

						const client = new ScramjetClient(globalThis, {
							context,
							transport: null,
						});

						client.hook();
					})();
					`, btoa(new TextEncoder().encode(_0x1db348).reduce((_0x13d244, _0x19f68e) => (_0x13d244.push(String.fromCharCode(_0x19f68e)), _0x13d244), []).join(""))));
        }, codecEncode: this.controller.config.codec.encode, codecDecode: this.controller.config.codec.decode } };
      }
      plugins = [];
      constructor(_0x20e5e5, _0xc2a1d0, _0x4d62a4 = {}) {
        for (const _0xc31088 of (this.controller = _0x20e5e5, this.element = _0xc2a1d0, this.options = _0x4d62a4, this.id = _0x5addb0(), this.prefix = this.controller.prefix + this.id + "/", _0x159dc5(_0xc2a1d0), this.plugins = _0x4d62a4.plugins ?? [], this.fetchHandler = new _0x45758b.mK({ crossOriginIsolated: self.crossOriginIsolated, context: this.context, transport: _0x20e5e5.transport, async sendSetCookie(_0x123461, _0x215485) {
          await _0x20e5e5.persistCookies(), await _0x20e5e5.propagateCookieSync(_0x123461.map(({ url: _0x371da6, cookie: _0x4387a7 }) => ({ url: _0x371da6.href, cookie: _0x4387a7 })), _0x215485);
        }, fetchBlobUrl: async (_0x2f79ce, _0x383cad) => _0x51e825.Sr.fromNativeResponse(await fetch(_0x2f79ce, _0x383cad)), fetchDataUrl: async (_0x5b0684, _0x9f2e93) => _0x51e825.Sr.fromNativeResponse(await fetch(_0x5b0684, _0x9f2e93)) }), this.hooks = { fetch: this.fetchHandler.hooks.fetch, init: _0x45758b.Cx.create(), error: _0x45758b.Cx.create() }, _0xc2a1d0[_0x2ea948.I] = this, this.plugins)) {
          for (const _0x2a74ab of _0xc31088.dependencies) if (!this.plugins.find((_0x2034e6) => _0x2034e6.name === _0x2a74ab)) throw Error("Dependency " + _0x2a74ab + " not found for plugin " + _0xc31088.name);
          _0xc31088.install(this);
        }
      }
      getPlugin(_0x1b2054) {
        let _0x4e1c05 = this.plugins.find((_0x3f6c26) => _0x3f6c26.name === _0x1b2054);
        if (!_0x4e1c05) throw Error("Plugin " + _0x1b2054 + " not found");
        return _0x4e1c05;
      }
      back() {
        this.element.contentWindow?.history.back();
      }
      forward() {
        this.element.contentWindow?.history.forward();
      }
      reload() {
        this.element.contentWindow?.location.reload();
      }
      go(_0x3c25e0) {
        _0x159dc5(this.element);
        let _0x3de61c = (0, _0x45758b.Oy)(_0x3c25e0, this.context, { origin: new URL(location.href), base: new URL(location.href) }, { destination: "document" });
        this.element.src = _0x3de61c;
      }
    }
  })(), $scramjetController = _0x4312e7;
})();
