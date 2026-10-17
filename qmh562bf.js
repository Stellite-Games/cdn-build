var $scramjetController;
(() => {
  var _0x486471 = { 286(_0x2a4373, _0x1a246a, _0x3b7442) {
    _0x3b7442.d(_0x1a246a, { I: () => _0x4b86dd });
    let _0x4b86dd = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 355(_0x8e7c03, _0x58a6ed, _0x4d8170) {
    _0x4d8170.d(_0x58a6ed, { O: () => _0x42066f, x: () => _0x5a7ea2 });
    let _0x5a7ea2 = "0.0.14";
    function _0x42066f() {
      if (typeof $scramjet > "u") throw Error("@mercuryworkshop/scramjet is not loaded. Load scramjet before the controller.");
      var _0x31568d = "2.0.67-alpha.2", _0x330627 = $scramjet.versionInfo.version;
      if (_0x31568d !== _0x330627) throw Error("@mercuryworkshop/scramjet version mismatch: this build expects " + _0x31568d + ", but the loaded runtime is " + _0x330627);
    }
  }, 805(_0x52b634, _0x48bb43, _0x461613) {
    _0x461613.d(_0x48bb43, { C: () => _0x49453a });
    class _0x49453a {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x152cbf, _0x471937, _0x15a4a8) {
        this.methods = _0x152cbf, this.id = _0x471937, this.sendRaw = _0x15a4a8;
      }
      recieve(_0x408d43) {
        if (_0x408d43 == null || typeof _0x408d43 != "object") return;
        let _0x2cf87b = _0x408d43[this.id];
        if (_0x2cf87b == null || typeof _0x2cf87b != "object") return;
        let _0x73f64b = _0x2cf87b.$type;
        if (_0x73f64b === "response") {
          let _0x32766c = _0x2cf87b.$token, _0xeae3fd = _0x2cf87b.$data, _0x2b78dd = _0x2cf87b.$error, _0x4af7f2 = this.promiseCallbacks.get(_0x32766c);
          if (!_0x4af7f2) return;
          this.promiseCallbacks.delete(_0x32766c), _0x2b78dd !== void 0 ? _0x4af7f2.reject(Error(_0x2b78dd)) : _0x4af7f2.resolve(_0xeae3fd);
        } else if (_0x73f64b === "request") {
          let _0x55e44b = _0x2cf87b.$method, _0x47a4dd = _0x2cf87b.$args;
          this.methods[_0x55e44b](_0x47a4dd).then((_0x55dd45) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x2cf87b.$token, $data: _0x55dd45?.[0] } }, _0x55dd45?.[1]);
          }).catch((_0x342c70) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x2cf87b.$token, $error: _0x342c70?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x255584, _0x126710, _0x4064ca = []) {
        let _0x3bed17 = this.counter++;
        return new Promise((_0x4b47f3, _0x851155) => {
          this.promiseCallbacks.set(_0x3bed17, { resolve: _0x4b47f3, reject: _0x851155 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x255584, $args: _0x126710, $token: _0x3bed17 } }, _0x4064ca);
        });
      }
    }
  }, 986(_0x1223ac) {
    let _0x5746f4 = Object.getPrototypeOf({});
    function _0x57456b() {
      return function(_0x548cb6) {
        return typeof _0x548cb6 == "object" && _0x548cb6 !== null && !(_0x548cb6 instanceof RegExp) && !(_0x548cb6 instanceof Date);
      };
    }
    function _0x2fc931(_0x3d8d70) {
      function _0x133fed(_0x516cec) {
        return _0x516cec !== "constructor" && _0x516cec !== "prototype" && _0x516cec !== "__proto__";
      }
      let _0x2e8e06 = Object.prototype.propertyIsEnumerable, _0x5d5a62 = _0x3d8d70?.symbols ? function(_0x19669c) {
        let _0x4858e4 = Object.keys(_0x19669c), _0x430357 = Object.getOwnPropertySymbols(_0x19669c);
        for (let _0x19c073 = 0, _0xdc9b2b = _0x430357.length; _0x19c073 < _0xdc9b2b; ++_0x19c073) _0x2e8e06.call(_0x19669c, _0x430357[_0x19c073]) && _0x4858e4.push(_0x430357[_0x19c073]);
        return _0x4858e4;
      } : Object.keys, _0x327538 = typeof _0x3d8d70?.cloneProtoObject == "function" ? _0x3d8d70.cloneProtoObject : void 0, _0x25950d = typeof _0x3d8d70?.isMergeableObject == "function" ? _0x3d8d70.isMergeableObject : _0x57456b(), _0x4c1776 = _0x3d8d70?.onlyDefinedProperties === !0, _0x4992f6 = _0x3d8d70 && typeof _0x3d8d70.mergeArray == "function" ? _0x3d8d70.mergeArray({ clone: _0x2c57a3, deepmerge: _0x51dbfd, getKeys: _0x5d5a62, isMergeableObject: _0x25950d }) : function(_0x246f00, _0x2e694c) {
        let _0x3a7d2a = _0x246f00.length, _0x53f7b0 = _0x2e694c.length, _0x1c47b5 = 0, _0x2bf4cc = Array(_0x3a7d2a + _0x53f7b0);
        for (; _0x1c47b5 < _0x3a7d2a; ++_0x1c47b5) _0x2bf4cc[_0x1c47b5] = _0x2c57a3(_0x246f00[_0x1c47b5]);
        for (_0x1c47b5 = 0; _0x1c47b5 < _0x53f7b0; ++_0x1c47b5) _0x2bf4cc[_0x1c47b5 + _0x3a7d2a] = _0x2c57a3(_0x2e694c[_0x1c47b5]);
        return _0x2bf4cc;
      };
      function _0x2c57a3(_0x28973e) {
        return _0x25950d(_0x28973e) ? Array.isArray(_0x28973e) ? (function(_0x380e8f) {
          let _0xf7f019 = 0, _0x273df2 = _0x380e8f.length, _0x229bf1 = Array(_0x273df2);
          for (; _0xf7f019 < _0x273df2; ++_0xf7f019) _0x229bf1[_0xf7f019] = _0x2c57a3(_0x380e8f[_0xf7f019]);
          return _0x229bf1;
        })(_0x28973e) : (function(_0x4843b9) {
          let _0x6ab8c9, _0x3e2a10, _0x4d9de6, _0x19e861 = {};
          if (_0x327538 && Object.getPrototypeOf(_0x4843b9) !== _0x5746f4) return _0x327538(_0x4843b9);
          let _0x462f2a = _0x5d5a62(_0x4843b9);
          for (_0x6ab8c9 = 0, _0x3e2a10 = _0x462f2a.length; _0x6ab8c9 < _0x3e2a10; ++_0x6ab8c9) _0x133fed(_0x4d9de6 = _0x462f2a[_0x6ab8c9]) && (_0x19e861[_0x4d9de6] = _0x2c57a3(_0x4843b9[_0x4d9de6]));
          return _0x19e861;
        })(_0x28973e) : _0x28973e;
      }
      function _0x51dbfd(_0x4f5e82, _0x398b3a) {
        if (_0x4c1776 && _0x398b3a === void 0) return _0x2c57a3(_0x4f5e82);
        let _0x43d63d = Array.isArray(_0x398b3a), _0x159110 = Array.isArray(_0x4f5e82);
        return typeof _0x398b3a != "object" || _0x398b3a === null ? _0x398b3a : _0x25950d(_0x4f5e82) ? _0x43d63d && _0x159110 ? _0x4992f6(_0x4f5e82, _0x398b3a) : _0x43d63d !== _0x159110 ? _0x2c57a3(_0x398b3a) : (function(_0x1cf636, _0x416756) {
          let _0x3083b4, _0x485fe4, _0x540e16, _0x4eba5e = {}, _0x45cffd = _0x5d5a62(_0x1cf636), _0x20eb35 = _0x5d5a62(_0x416756);
          for (_0x3083b4 = 0, _0x485fe4 = _0x45cffd.length; _0x3083b4 < _0x485fe4; ++_0x3083b4) _0x133fed(_0x540e16 = _0x45cffd[_0x3083b4]) && _0x20eb35.indexOf(_0x540e16) === -1 && (_0x4eba5e[_0x540e16] = _0x2c57a3(_0x1cf636[_0x540e16]));
          for (_0x3083b4 = 0, _0x485fe4 = _0x20eb35.length; _0x3083b4 < _0x485fe4; ++_0x3083b4) if (_0x133fed(_0x540e16 = _0x20eb35[_0x3083b4]))
            if (_0x540e16 in _0x1cf636) _0x45cffd.indexOf(_0x540e16) !== -1 && (_0x327538 && _0x25950d(_0x416756[_0x540e16]) && Object.getPrototypeOf(_0x416756[_0x540e16]) !== _0x5746f4 ? _0x4eba5e[_0x540e16] = _0x327538(_0x416756[_0x540e16]) : _0x4eba5e[_0x540e16] = _0x51dbfd(_0x1cf636[_0x540e16], _0x416756[_0x540e16]));
            else {
              if (_0x4c1776 && _0x416756[_0x540e16] === void 0) continue;
              _0x4eba5e[_0x540e16] = _0x2c57a3(_0x416756[_0x540e16]);
            }
          return _0x4eba5e;
        })(_0x4f5e82, _0x398b3a) : _0x2c57a3(_0x398b3a);
      }
      return _0x3d8d70?.all ? function() {
        let _0x29cce2;
        switch (arguments.length) {
          case 0:
            return {};
          case 1:
            return _0x2c57a3(arguments[0]);
          case 2:
            return _0x51dbfd(arguments[0], arguments[1]);
        }
        for (let _0x4bb21d = 0, _0x368b7b = arguments.length; _0x4bb21d < _0x368b7b; ++_0x4bb21d) _0x29cce2 = _0x51dbfd(_0x29cce2, arguments[_0x4bb21d]);
        return _0x29cce2;
      } : _0x51dbfd;
    }
    _0x1223ac.exports = _0x2fc931, _0x1223ac.exports.default = _0x2fc931, _0x1223ac.exports.deepmerge = _0x2fc931, Object.defineProperty(_0x1223ac.exports, "isMergeableObject", { get: _0x57456b });
  }, 235(_0x2115ef, _0x266ba3, _0x34bdbe) {
    _0x34bdbe.d(_0x266ba3, { Sr: () => _0x306775 }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN;
    let _0x1b240f = [101, 204, 205, 304];
    class _0x306775 extends Response {
      url;
      rawHeaders;
      redirected = !1;
      static fromTransferrableResponse(_0x4bdec6, _0x31256b) {
        let _0x33b94e = new _0x306775(_0x1b240f.includes(_0x4bdec6.status) ? void 0 : _0x4bdec6.body, { headers: new Headers(_0x4bdec6.headers), status: _0x4bdec6.status, statusText: _0x4bdec6.statusText });
        return _0x33b94e.url = _0x31256b, _0x33b94e.redirected = _0x4bdec6.status >= 300 && _0x4bdec6.status < 400 && _0x4bdec6.headers.location !== void 0, _0x33b94e.rawHeaders = _0x4bdec6.headers, _0x33b94e;
      }
      static fromNativeResponse(_0x267181) {
        let _0x43d23a = new _0x306775(_0x1b240f.includes(_0x267181.status) ? void 0 : _0x267181.body, { headers: _0x267181.headers, status: _0x267181.status, statusText: _0x267181.statusText });
        return _0x43d23a.url = _0x267181.url, _0x43d23a.rawHeaders = [..._0x267181.headers], _0x43d23a.redirected = _0x267181.redirected, _0x43d23a;
      }
    }
  }, 423(_0x10f12d, _0x4e48b0, _0x17096a) {
    _0x17096a.d(_0x4e48b0, { Cx: () => _0x4c1869, Oy: () => _0xc2a3df, ht: () => _0x5a9ed8, k_: () => _0x4fa7fe, mK: () => _0x35c2a6, r5: () => _0x5df735, sb: () => _0x3da67f, uh: () => _0x1aaebd });
    let { BareResponse: _0x4afb66, CookieJar: _0x4f95a6, IncrementalHtmlRewriter: _0x54e11f, Plugin: _0x4fa7fe, QP: _0x11ddef, SCRAMJETCLIENT: _0x189526, SCRAMJETCLIENTNAME: _0x5dc61f, ScramjetClient: _0xe997b6, ScramjetFetchHandler: _0x35c2a6, ScramjetFetchTrackedClient: _0x28098b, ScramjetHeaders: _0x1aaebd, ScramjetStorageJar: _0x560bf5, Tap: _0x4c1869, createLocationProxy: _0xed6c8c, defaultConfig: _0x3da67f, defaultConfigDev: _0xc30cd3, flagEnabled: _0x563dd2, getOwnPropertyDescriptorHandler: _0x1cc1de, getRewriter: _0x594bb, getScriptBlockTypeString: _0x5b4c27, htmlRules: _0x4ac48e, isArchiveMimeType: _0x264d3d, isAudioOrVideoMimeType: _0x9557b7, isFontMimeType: _0x2105fb, isHtmlMimeType: _0x3cfc9f, isImageMimeType: _0x1a46e0, isInlineDisplayableMimeType: _0x53abc2, isJavascriptMimeType: _0x285088, isJavascriptMimeTypeEssenceMatch: _0x1d63d2, isModuleScriptType: _0x4240e2, isScriptType: _0x4443c4, isScriptableMimeType: _0x3c95cc, isXmlMimeType: _0xc79256, isZipBasedMimeType: _0x4b2251, isdedicated: _0xe50b5, isshared: _0x233d7f, issw: _0x1e4d90, iswindow: _0x4aa646, isworker: _0x4699d1, nativeProviders: _0x3cfe85, parseMimeType: _0x42c42f, providers: _0x5df735, registerProviders: _0x2cf881, resetProviders: _0x2ebe31, rewriteBlob: _0x3b173f, rewriteCss: _0x3fc84f, rewriteHtml: _0x411fba, rewriteJs: _0x1db841, rewriteJsInner: _0x331f7a, rewriteSrcset: _0x222b4d, rewriteUrl: _0xc2a3df, rewriteWorkers: _0x508961, setWasm: _0x5a9ed8, unrewriteBlob: _0x393caa, unrewriteCss: _0x1359bd, unrewriteHtml: _0x266701, unrewriteUrl: _0x344542, versionInfo: _0x9e50b7 } = globalThis.$scramjet;
  } }, _0x8eae49 = {};
  function _0x4d5e2a(_0x9a5a6e) {
    var _0x96a8f7 = _0x8eae49[_0x9a5a6e];
    if (_0x96a8f7 !== void 0) return _0x96a8f7.exports;
    var _0x4cbe77 = _0x8eae49[_0x9a5a6e] = { exports: {} };
    return _0x486471[_0x9a5a6e](_0x4cbe77, _0x4cbe77.exports, _0x4d5e2a), _0x4cbe77.exports;
  }
  _0x4d5e2a.n = (_0x55fab0) => {
    var _0x17c53f = _0x55fab0 && _0x55fab0.__esModule ? () => _0x55fab0.default : () => _0x55fab0;
    return _0x4d5e2a.d(_0x17c53f, { a: _0x17c53f }), _0x17c53f;
  }, _0x4d5e2a.d = (_0x2550e4, _0x3123c9) => {
    for (var _0x2b6ba8 in _0x3123c9) _0x4d5e2a.o(_0x3123c9, _0x2b6ba8) && !_0x4d5e2a.o(_0x2550e4, _0x2b6ba8) && Object.defineProperty(_0x2550e4, _0x2b6ba8, { enumerable: !0, get: _0x3123c9[_0x2b6ba8] });
  }, _0x4d5e2a.o = (_0x937d63, _0x595773) => Object.prototype.hasOwnProperty.call(_0x937d63, _0x595773), _0x4d5e2a.r = (_0x16315f) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x16315f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x16315f, "__esModule", { value: !0 });
  };
  var _0x2fed92 = {};
  (() => {
    _0x4d5e2a.r(_0x2fed92), _0x4d5e2a.d(_0x2fed92, { Controller: () => _0x5bc36f, Frame: () => _0x7167, ManagedPlugin: () => _0x4a45eb, VERSION: () => _0x183bee.x, assertRuntimeScramjetVersion: () => _0x183bee.O, config: () => _0x155287 });
    var _0x3c7b52 = _0x4d5e2a(986), _0x1a3c65 = _0x4d5e2a(235), _0xeb896d = _0x4d5e2a(805), _0x1d776f = _0x4d5e2a(423), _0x123e40 = _0x4d5e2a(286), _0x183bee = _0x4d5e2a(355);
    let _0x155287 = { prefix: "/~/sj/", scramjetPath: "/scramjet/scramjet.js", injectPath: "/controller/controller.inject.js", wasmPath: "/scramjet/scramjet.wasm", virtualWasmPath: "scramjet.wasm.js", codec: { encode: (_0x5463d4) => _0x5463d4 && encodeURIComponent(encodeURIComponent(_0x5463d4)), decode: (_0x5518bb) => {
      if (!_0x5518bb) return _0x5518bb;
      let _0x91da4b = decodeURIComponent(_0x5518bb);
      return /^[a-z][a-z0-9+.-]*:/i.test(_0x91da4b) ? _0x91da4b : decodeURIComponent(_0x91da4b);
    } } }, _0x3e77e9 = { flags: { ..._0x1d776f.sb.flags, allowFailedIntercepts: !1 }, maskedfiles: ["inject.js", "scramjet.wasm.js"] };
    class _0x4a45eb extends _0x1d776f.k_ {
      frame = null;
      dependencies = [];
      constructor(_0x3a627d, _0x14716f) {
        super(_0x3a627d), this.dependencies = _0x14716f;
      }
      install(_0x42a2e4) {
        this.frame = _0x42a2e4;
      }
    }
    let _0x39908c = "state";
    function _0x384a92(_0x428105, _0xee2dda) {
      let _0x44baa2 = new URL(_0x428105.scriptURL), _0x3d3aa7 = new URL(_0xee2dda.scriptURL);
      return _0x44baa2.origin === _0x3d3aa7.origin && _0x44baa2.pathname === _0x3d3aa7.pathname;
    }
    let _0xbaae91 = null;
    function _0x3676b9(_0x3d1554) {
      if (_0x3d1554 === void 0) return null;
      if (typeof _0x3d1554 != "object" || _0x3d1554 === null || !Number.isSafeInteger(_0x3d1554.updatedAt) || _0x3d1554.updatedAt < 0 || typeof _0x3d1554.cookies != "string") throw Error("Persisted Scramjet cookie state was malformed");
      return _0x3d1554;
    }
    function _0x5e8315(_0x146a93) {
      return new Promise((_0x20d51a, _0x18bca9) => {
        _0x146a93.onsuccess = () => _0x20d51a(_0x146a93.result), _0x146a93.onerror = () => _0x18bca9(_0x146a93.error ?? Error("IndexedDB request failed"));
      });
    }
    function _0x167a4d(_0x1a0eae) {
      return new Promise((_0x88cb0a, _0x470f77) => {
        _0x1a0eae.oncomplete = () => _0x88cb0a(void 0), _0x1a0eae.onabort = () => _0x470f77(_0x1a0eae.error ?? Error("IndexedDB transaction aborted")), _0x1a0eae.onerror = () => _0x470f77(_0x1a0eae.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function _0x40a9c4() {
      return _0xbaae91 || (_0xbaae91 = new Promise((_0x14f38f, _0x5721c1) => {
        let _0x5ca46c = indexedDB.open("__scramjet_controller", 1);
        _0x5ca46c.onupgradeneeded = () => {
          let _0x19d2ff = _0x5ca46c.result;
          _0x19d2ff.objectStoreNames.contains(_0x39908c) || _0x19d2ff.createObjectStore(_0x39908c);
        }, _0x5ca46c.onsuccess = () => _0x14f38f(_0x5ca46c.result), _0x5ca46c.onerror = () => _0x5721c1(_0x5ca46c.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function _0x23d5c2(_0x33b0d7) {
      let _0x163dcd = (await _0x40a9c4()).transaction(_0x39908c, "readonly"), _0x333328 = _0x163dcd.objectStore(_0x39908c), _0x48807b = _0x167a4d(_0x163dcd), _0x2aa794 = await _0x5e8315(_0x333328.get(_0x33b0d7));
      return await _0x48807b, _0x3676b9(_0x2aa794);
    }
    async function _0x2cbaaf(_0x27ad7a, _0x5c61b0, _0x2dc2cb) {
      let _0x5659d6 = (await _0x40a9c4()).transaction(_0x39908c, "readwrite"), _0x5a4173 = _0x5659d6.objectStore(_0x39908c), _0x271ff1 = _0x167a4d(_0x5659d6), _0x31f377 = _0x3676b9(await _0x5e8315(_0x5a4173.get(_0x27ad7a))), _0x385203 = Math.max(_0x2dc2cb, _0x31f377?.updatedAt ?? 0) + 1;
      if (!Number.isSafeInteger(_0x385203)) throw Error("Persisted Scramjet cookie sequence was exhausted");
      return await _0x5e8315(_0x5a4173.put({ updatedAt: _0x385203, cookies: _0x5c61b0 }, _0x27ad7a)), await _0x271ff1, _0x385203;
    }
    function _0x58365e() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x345d12) => _0x345d12.toString(16).padStart(2, "0")).join("");
    }
    function _0x299a82(_0x305076) {
      let _0x263e4c = _0x305076.contentWindow;
      if (_0x305076.name && _0x263e4c !== null && _0x263e4c.name !== _0x305076.name) try {
        _0x263e4c.name = _0x305076.name;
      } catch {
      }
    }
    let _0x4a9f30 = (0, _0x3c7b52.deepmerge)();
    class _0x5bc36f {
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
      onTabChannelMessage = (_0x4c8a2e) => {
        this.rpc.recieve(_0x4c8a2e.data);
      };
      onCookieSyncMessage = (_0x261e75) => {
        let _0x4f4d1c = typeof _0x261e75.data == "object" && _0x261e75.data !== null ? _0x261e75.data.updatedAt : void 0;
        typeof _0x4f4d1c == "number" && Number.isSafeInteger(_0x4f4d1c) && !(_0x4f4d1c < 0) && !(_0x4f4d1c <= this.cookieUpdatedAt) && (this.cookieSyncDirty = !0, this.loadSavedCookies().catch((_0x1b0a59) => {
          this.cookieSyncDirty = !0;
        }));
      };
      onServiceWorkerMessage = async (_0x4b53a0) => {
        if (!this.closed && !this.closing) {
          if (_0x4b53a0.data?.$controller$setCookie && typeof _0x4b53a0.data.$controller$setCookie == "object") {
            let _0x2d1938 = _0x4b53a0.data.$controller$setCookie;
            _0x2d1938.options?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(_0x2d1938.cookies, _0x2d1938.options), typeof _0x2d1938.id == "string" && this.serviceWorkerController.postMessage({ $sw$setCookieDone: { id: _0x2d1938.id } });
            return;
          }
          if (_0x4b53a0.data?.$controller$swrevive) {
            let _0x12d4b4 = _0x4b53a0.data.$controller$swrevive, _0x3c4865 = _0x4b53a0.source;
            if (!(_0x3c4865 instanceof ServiceWorker) || _0x3c4865.state === "redundant" || typeof _0x12d4b4.workerId != "string" || typeof _0x12d4b4.revivalId != "string" || !_0x384a92(this.serviceWorkerController, _0x3c4865)) return;
            this.reconnectServiceWorker(_0x3c4865, _0x12d4b4.workerId, _0x12d4b4.revivalId).catch((_0x436781) => {
            });
          }
        }
      };
      async loadScramjetWasm() {
        if (this.wasmAlreadyFetched) return;
        let _0x132a42 = await fetch(this.config.wasmPath);
        (0, _0x1d776f.ht)(await _0x132a42.arrayBuffer()), this.wasmAlreadyFetched = !0;
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
          let o2 = _0x1d776f.uh.fromRawHeaders(e3.initialHeaders), s2 = await r2.fetchHandler.handleFetch({ initialHeaders: o2, rawClientUrl: e3.rawClientUrl ? new URL(e3.rawClientUrl) : void 0, rawUrl: new URL(e3.rawUrl), rawReferrer: e3.rawReferrer, rawDestination: e3.destination, rawCredentials: e3.credentials, method: e3.method, mode: e3.mode, referrer: e3.referrer, body: e3.body, cache: e3.cache, clientId: e3.clientId ?? "", ...e3.sourceClientId === void 0 ? {} : { sourceClientId: e3.sourceClientId }, ...e3.resultingClientId === void 0 ? {} : { resultingClientId: e3.resultingClientId } });
          return [{ body: s2.body, status: s2.status, statusText: s2.statusText, headers: s2.headers.toRawHeaders() }, s2.body instanceof ReadableStream || s2.body instanceof ArrayBuffer ? [s2.body] : []];
        } catch (o2) {
          let t4 = { setResponse: void 0, suppressError: !1 };
          if (await _0x1d776f.Cx.dispatch(r2.hooks.error.request, { rawrequest: e3, error: o2 }, t4), t4.suppressError, t4.setResponse) return [t4.setResponse, []];
          throw o2;
        }
      }, initRemoteTransport: async ({ port: e3 }) => {
        let t3 = new _0xeb896d.C({ request: async ({ remote: e4, method: t4, body: r2, headers: o2, proxy: s2 }) => {
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
      constructor(_0x3fef81) {
        if (this.init = _0x3fef81, typeof _0x3fef81.storagePartitionKey != "string" || _0x3fef81.storagePartitionKey.length === 0) throw Error("Scramjet Controller requires a non-empty storage partition key");
        (0, _0x183bee.O)(), this.id = _0x58365e(), this.config = _0x4a9f30(_0x155287, _0x3fef81.config || {}), this.scramjetConfig = _0x4a9f30(_0x3e77e9, _0x1d776f.sb), this.scramjetConfig = _0x4a9f30(this.scramjetConfig, _0x3fef81.scramjetConfig || {}), this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = _0x3fef81.serviceworker, this.resolvedCookieStore = _0x3fef81.cookieJar, this.storage = _0x3fef81.storage, this.cookieSyncChannel = new BroadcastChannel("__scramjet_controller_channel:" + encodeURIComponent(_0x3fef81.storagePartitionKey)), this.ready = Promise.all([new Promise((_0x33dfcb, _0x4ed504) => {
          this.readyResolve = _0x33dfcb, this.readyReject = _0x4ed504;
        }), this.loadScramjetWasm(), this.loadSavedCookies(!0)]).then(() => {
          if (this.closed || this.closing) throw Error("Scramjet Controller closed before becoming ready");
          this.initializationComplete = !0, this.isReady = !0;
        }), this.rpc = new _0xeb896d.C(this.methods, "tabchannel-" + this.id, (_0x57f2b3, _0x3a5cd0) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(_0x57f2b3, _0x3a5cd0);
        }), this.transport = _0x3fef81.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), this.reconnectServiceWorker(this.serviceWorkerController).catch((_0x38bbf6) => {
          if (this.readyResolve === null || this.serviceWorkerReady !== null) return;
          let _0x105c8d = this.readyReject;
          this.readyResolve = null, this.readyReject = null, _0x105c8d?.(_0x38bbf6);
        }), navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
      setupMessagePort(_0xcb2422, _0x5d3404, _0x23f0b5) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (this.serviceWorkerReady !== null) {
          let _0x1cfad6 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x1cfad6.timeout), _0x1cfad6.reject(Error("Scramjet Controller connection was replaced"));
        }
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        let _0x493c2b = new MessageChannel(), _0x2094dc = _0x58365e();
        return this.port = _0x493c2b.port1, this.port.addEventListener("message", this.onTabChannelMessage), this.port.start(), new Promise((_0x155454, _0x57b7a6) => {
          let _0x1aca6c = (_0x49b411) => {
            _0x57b7a6(_0x49b411);
          }, _0x3aa083 = setTimeout(() => {
            this.serviceWorkerReady?.connectionId === _0x2094dc && (this.serviceWorkerReady = null, _0x1aca6c(Error("Scramjet Controller ready acknowledgement expired")));
          }, 5e3);
          this.serviceWorkerReady = { worker: _0xcb2422, expectedWorkerId: _0x5d3404, connectionId: _0x2094dc, resolve: () => {
            _0x155454(void 0);
          }, reject: _0x1aca6c, timeout: _0x3aa083 };
          try {
            _0xcb2422.postMessage({ $controller$init: { prefix: this.prefix, id: this.id, connectionId: _0x2094dc, ..._0x5d3404 === void 0 ? {} : { workerId: _0x5d3404 }, ..._0x23f0b5 === void 0 ? {} : { revivalId: _0x23f0b5 } } }, [_0x493c2b.port2]);
          } catch (_0x34185d) {
            this.serviceWorkerReady?.connectionId === _0x2094dc && (this.serviceWorkerReady = null), clearTimeout(_0x3aa083), _0x1aca6c(_0x34185d);
          }
        });
      }
      async reconnectServiceWorker(_0x5f2925, _0x5c998f, _0x3d4289) {
        let _0x4f6f9f = this.serviceWorkerReconnect;
        if (_0x4f6f9f !== null && _0x4f6f9f.worker === _0x5f2925 && (_0x5c998f === void 0 || _0x4f6f9f.expectedWorkerId === _0x5c998f)) return _0x4f6f9f.promise;
        this.isReady = !1;
        let _0xdb06bb = (async () => {
          if (await this.setupMessagePort(_0x5f2925, _0x5c998f, _0x3d4289), this.closed || this.closing) throw Error("Scramjet Controller closed during reconnection");
          this.initializationComplete && (this.isReady = !0);
        })();
        this.serviceWorkerReconnect = { worker: _0x5f2925, expectedWorkerId: _0x5c998f, promise: _0xdb06bb };
        try {
          return await _0xdb06bb;
        } finally {
          this.serviceWorkerReconnect?.promise === _0xdb06bb && (this.serviceWorkerReconnect = null);
        }
      }
      async refreshServiceWorkerConnection() {
        let _0x1aee7e = this.serviceWorkerController, _0x2d5b1f = await navigator.serviceWorker.getRegistration(new URL(this.prefix, location.href)), _0x525fa2 = _0x2d5b1f?.active;
        if (_0x525fa2 && _0x525fa2.state !== "redundant" && _0x384a92(_0x1aee7e, _0x525fa2) && (_0x1aee7e = _0x525fa2), _0x1aee7e.state === "redundant") throw Error("No active Scramjet service worker is available");
        return await this.reconnectServiceWorker(_0x1aee7e);
      }
      detachFromServiceWorker() {
        return new Promise((_0x2991fb, _0x44c0d0) => {
          let _0x3b5516 = new MessageChannel(), _0x1f8a0d = !1, _0x3f7e70 = (_0x29dba4) => {
            if (!_0x1f8a0d) {
              if (_0x1f8a0d = !0, clearTimeout(_0x472ee7), _0x3b5516.port1.onmessage = null, _0x3b5516.port1.onmessageerror = null, _0x3b5516.port1.close(), _0x29dba4) return void _0x44c0d0(_0x29dba4);
              _0x2991fb(void 0);
            }
          }, _0x472ee7 = setTimeout(() => {
            _0x3f7e70(Error("Scramjet Controller detach was not acknowledged"));
          }, 5e3);
          _0x3b5516.port1.onmessage = (_0x598254) => {
            let _0x54d628 = _0x598254.data?.$controller$detached;
            _0x54d628?.id !== this.id || _0x54d628.detached !== !0 ? _0x3f7e70(Error("Scramjet Controller detach was not acknowledged")) : _0x3f7e70();
          }, _0x3b5516.port1.onmessageerror = () => {
            _0x3f7e70(Error("Scramjet Controller detach acknowledgement failed"));
          };
          let _0x2d1b43 = { id: this.id };
          try {
            this.serviceWorkerController.postMessage({ $controller$detach: _0x2d1b43 }, [_0x3b5516.port2]);
          } catch (_0x3840a9) {
            _0x3f7e70(_0x3840a9 instanceof Error ? _0x3840a9 : Error("Scramjet Controller detach request failed"));
          }
        });
      }
      async closeLocalResources() {
        let _0x297952 = [], _0x471209 = [];
        for (let _0x3cabc9 of this.frames) {
          let _0x1d5f8c = !1;
          try {
            _0x3cabc9.element[_0x123e40.I] === _0x3cabc9 && (_0x3cabc9.element.removeAttribute("srcdoc"), _0x3cabc9.element.src = "about:blank", delete _0x3cabc9.element[_0x123e40.I]);
          } catch (_0x39e06e) {
            _0x297952.push(_0x39e06e), _0x1d5f8c = !0;
          }
          _0x1d5f8c && _0x471209.push(_0x3cabc9);
        }
        this.frames = _0x471209;
        let _0x5a4be0 = Error("Scramjet Controller closed");
        for (let _0x2b1913 of this.transportChannels) {
          for (let _0x2efde3 of _0x2b1913.rpc.promiseCallbacks.values()) _0x2efde3.reject(_0x5a4be0);
          _0x2b1913.rpc.promiseCallbacks.clear(), _0x2b1913.port.onmessage = null, _0x2b1913.port.onmessageerror = null;
          try {
            _0x2b1913.port.close();
          } catch {
          }
        }
        for (let _0x1244b1 of (this.transportChannels.clear(), this.rpc.promiseCallbacks.values())) _0x1244b1.reject(_0x5a4be0);
        if (this.rpc.promiseCallbacks.clear(), this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        if (this.cookieSyncChannel.removeEventListener("message", this.onCookieSyncMessage), this.cookieSyncChannel.close(), navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage), this.serviceWorkerReady !== null) {
          let _0x1466d5 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x1466d5.timeout), _0x1466d5.reject(_0x5a4be0);
        }
        if (_0x297952.length > 0) throw AggregateError(_0x297952, "Scramjet Controller frame teardown failed");
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
      async applyCookieSyncEntries(_0xb3fc2, _0x1efbe4 = {}) {
        if (Array.isArray(_0xb3fc2))
          for (let _0x44318c of _0xb3fc2) typeof _0x44318c?.url == "string" && typeof _0x44318c.cookie == "string" && await this.cookieJar.setCookies(_0x44318c.cookie, new URL(_0x44318c.url), _0x1efbe4.destination === void 0);
      }
      async propagateCookieSync(_0x22d908, _0x3eed3b = {}) {
        this.port && await this.rpc.call("sendSetCookie", { cookies: _0x22d908, options: _0x3eed3b });
      }
      async loadSavedCookies(_0x360803 = !1) {
        if (_0x360803 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          if (!this.cookieJar.ownsPersistence) {
            this.cookieSyncDirty = !1;
            return;
          }
          let _0x24bcac = await _0x23d5c2(this.init.storagePartitionKey);
          _0x24bcac && _0x24bcac.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(_0x24bcac.cookies), this.cookieUpdatedAt = _0x24bcac.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        if (!this.cookieJar.ownsPersistence) return;
        let _0xbdf206 = await _0x2cbaaf(this.init.storagePartitionKey, this.cookieJar.dump(), this.cookieUpdatedAt);
        _0xbdf206 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = _0xbdf206, this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({ updatedAt: _0xbdf206 }));
      }
      get cookieJar() {
        let _0x4a507f = this.resolvedCookieStore;
        if (_0x4a507f !== void 0) return _0x4a507f;
        let _0x29878f = (0, _0x1d776f.r5)().createCookieStore();
        return this.resolvedCookieStore = _0x29878f, _0x29878f;
      }
      setTransport(_0x22302b) {
        for (let _0x38f3b1 of (this.transport = _0x22302b, this.frames)) _0x38f3b1.controller.transport = _0x22302b, _0x38f3b1.fetchHandler.client.transport = _0x22302b;
      }
      createFrame(_0x5181f0, _0x456f87 = {}) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (!this.isReady) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let _0x3fdb45 = new _0x7167(this, _0x5181f0 ??= document.createElement("iframe"), _0x456f87);
        return this.frames.push(_0x3fdb45), _0x3fdb45;
      }
      async wait() {
        if (this.closed || this.closing || (await this.ready, this.closed || this.closing)) throw Error("Scramjet Controller is closed");
      }
    }
    class _0x7167 {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return { config: this.controller.scramjetConfig, prefix: new URL(this.prefix, location.href), cookieJar: this.controller.cookieJar, storage: this.controller.storage, storagePartitionKey: this.controller.init.storagePartitionKey, interface: { getInjectScripts: /* @__PURE__ */ (function _0x52e79a(_0x4989aa, _0x19df15, _0x53083e, _0x1dee5f, _0x205a5c, _0x22d27b, _0x24f31e, _0xa5aab9) {
          return (_0x5153b1, _0x9208df, _0x3af2b5, _0x7175c2) => {
            var _0x4e4ace;
            return [_0x7175c2(_0x4989aa.scramjetPath), _0x7175c2(_0x53083e.href + _0x4989aa.virtualWasmPath), _0x7175c2(_0x4989aa.injectPath), _0x7175c2("data:text/javascript;charset=utf-8;base64," + (_0x4e4ace = `
					document.querySelectorAll("script[scramjet-injected]").forEach(script => script.remove());
					$scramjetController.load({
						config: ` + JSON.stringify(_0x4989aa) + `,
						sjconfig: ` + JSON.stringify(_0x19df15) + `,
						prefix: new URL("` + _0x53083e.href + `"),
						cookies: ` + JSON.stringify(_0x1dee5f.dump()) + `,
						storage: ` + JSON.stringify(_0x205a5c?.dump?.() ?? null) + `,
						storagePartitionKey: ` + JSON.stringify(_0xa5aab9) + `,
						yieldGetInjectScripts: ` + _0x52e79a.toString() + `,
						codecEncode: ` + _0x22d27b.toString() + `,
						codecDecode: ` + _0x24f31e.toString() + `,
						initHeaders: ` + JSON.stringify(_0x3af2b5.headers ?? []) + `,
						history: ` + JSON.stringify(_0x3af2b5.history ?? []) + `,
					})
				`, btoa(new TextEncoder().encode(_0x4e4ace).reduce((_0xf885f0, _0x4de1a4) => (_0xf885f0.push(String.fromCharCode(_0x4de1a4)), _0xf885f0), []).join(""))))];
          };
        })(this.controller.config, this.controller.scramjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.storage, this.controller.config.codec.encode, this.controller.config.codec.decode, this.controller.init.storagePartitionKey), getWorkerInjectScripts: (_0x16df92, _0x507733, _0x2a45a4) => {
          var _0x11d40b;
          let _0xa27ebf = "";
          return _0xa27ebf += _0x2a45a4(this.controller.config.scramjetPath), _0xa27ebf += _0x2a45a4(this.prefix + this.controller.config.virtualWasmPath), _0xa27ebf += _0x2a45a4("data:text/javascript;charset=utf-8;base64," + (_0x11d40b = `
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
					`, btoa(new TextEncoder().encode(_0x11d40b).reduce((_0x1f1a05, _0xfc201c) => (_0x1f1a05.push(String.fromCharCode(_0xfc201c)), _0x1f1a05), []).join(""))));
        }, codecEncode: this.controller.config.codec.encode, codecDecode: this.controller.config.codec.decode } };
      }
      plugins = [];
      constructor(_0x37cc6c, _0x87c002, _0x3726ff = {}) {
        for (const _0x4a2e3f of (this.controller = _0x37cc6c, this.element = _0x87c002, this.options = _0x3726ff, this.id = _0x58365e(), this.prefix = this.controller.prefix + this.id + "/", _0x299a82(_0x87c002), this.plugins = _0x3726ff.plugins ?? [], this.fetchHandler = new _0x1d776f.mK({ crossOriginIsolated: self.crossOriginIsolated, context: this.context, transport: _0x37cc6c.transport, async sendSetCookie(_0x155eb2, _0x315b42) {
          await _0x37cc6c.persistCookies(), await _0x37cc6c.propagateCookieSync(_0x155eb2.map(({ url: _0x5b0078, cookie: _0x4bc952 }) => ({ url: _0x5b0078.href, cookie: _0x4bc952 })), _0x315b42);
        }, fetchBlobUrl: async (_0x1c4851, _0x2bc256) => _0x1a3c65.Sr.fromNativeResponse(await fetch(_0x1c4851, _0x2bc256)), fetchDataUrl: async (_0x9f288f, _0x6322ad) => _0x1a3c65.Sr.fromNativeResponse(await fetch(_0x9f288f, _0x6322ad)) }), this.hooks = { fetch: this.fetchHandler.hooks.fetch, init: _0x1d776f.Cx.create(), error: _0x1d776f.Cx.create() }, _0x87c002[_0x123e40.I] = this, this.plugins)) {
          for (const _0x1db950 of _0x4a2e3f.dependencies) if (!this.plugins.find((_0x2ec756) => _0x2ec756.name === _0x1db950)) throw Error("Dependency " + _0x1db950 + " not found for plugin " + _0x4a2e3f.name);
          _0x4a2e3f.install(this);
        }
      }
      getPlugin(_0x37fc07) {
        let _0x542bdc = this.plugins.find((_0x1418dd) => _0x1418dd.name === _0x37fc07);
        if (!_0x542bdc) throw Error("Plugin " + _0x37fc07 + " not found");
        return _0x542bdc;
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
      go(_0x1320e2) {
        _0x299a82(this.element);
        let _0x4c6f3d = (0, _0x1d776f.Oy)(_0x1320e2, this.context, { origin: new URL(location.href), base: new URL(location.href) }, { destination: "document" });
        this.element.src = _0x4c6f3d;
      }
    }
  })(), $scramjetController = _0x2fed92;
})();
