var $scramjetController;
(() => {
  var _0x351a5b = { 286(_0x5dd7ec, _0x1eceb6, _0x5a63c8) {
    _0x5a63c8.d(_0x1eceb6, { I: () => _0x896037 });
    let _0x896037 = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 355(_0x4a6c1d, _0x4e67be, _0x2de65f) {
    _0x2de65f.d(_0x4e67be, { O: () => _0x4b7902, x: () => _0x3a822e });
    let _0x3a822e = "0.0.14";
    function _0x4b7902() {
      if (typeof $scramjet > "u") throw Error("@mercuryworkshop/scramjet is not loaded. Load scramjet before the controller.");
      var _0x5ecf09 = "2.0.67-alpha.2", _0xbd2a77 = $scramjet.versionInfo.version;
      if (_0x5ecf09 !== _0xbd2a77) throw Error("@mercuryworkshop/scramjet version mismatch: this build expects " + _0x5ecf09 + ", but the loaded runtime is " + _0xbd2a77);
    }
  }, 805(_0x4c5b1f, _0x14ae79, _0x403d87) {
    _0x403d87.d(_0x14ae79, { C: () => _0x555481 });
    class _0x555481 {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x325a2a, _0x2074ab, _0x1f4dd5) {
        this.methods = _0x325a2a, this.id = _0x2074ab, this.sendRaw = _0x1f4dd5;
      }
      recieve(_0x22b72b) {
        if (_0x22b72b == null || typeof _0x22b72b != "object") return;
        let _0x2c5658 = _0x22b72b[this.id];
        if (_0x2c5658 == null || typeof _0x2c5658 != "object") return;
        let _0x2b5a34 = _0x2c5658.$type;
        if (_0x2b5a34 === "response") {
          let _0x59eeab = _0x2c5658.$token, _0x510acc = _0x2c5658.$data, _0x513c54 = _0x2c5658.$error, _0x7c0ba7 = this.promiseCallbacks.get(_0x59eeab);
          if (!_0x7c0ba7) return;
          this.promiseCallbacks.delete(_0x59eeab), _0x513c54 !== void 0 ? _0x7c0ba7.reject(Error(_0x513c54)) : _0x7c0ba7.resolve(_0x510acc);
        } else if (_0x2b5a34 === "request") {
          let _0x441d94 = _0x2c5658.$method, _0x309ce6 = _0x2c5658.$args;
          this.methods[_0x441d94](_0x309ce6).then((_0x26dd8c) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x2c5658.$token, $data: _0x26dd8c?.[0] } }, _0x26dd8c?.[1]);
          }).catch((_0xef077d) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x2c5658.$token, $error: _0xef077d?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x1a6907, _0xee998a, _0x29d980 = []) {
        let _0x2777b1 = this.counter++;
        return new Promise((_0x176e72, _0x15da5f) => {
          this.promiseCallbacks.set(_0x2777b1, { resolve: _0x176e72, reject: _0x15da5f }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x1a6907, $args: _0xee998a, $token: _0x2777b1 } }, _0x29d980);
        });
      }
    }
  }, 986(_0x273df5) {
    let _0x319a64 = Object.getPrototypeOf({});
    function _0x457912() {
      return function(_0x48b0d5) {
        return typeof _0x48b0d5 == "object" && _0x48b0d5 !== null && !(_0x48b0d5 instanceof RegExp) && !(_0x48b0d5 instanceof Date);
      };
    }
    function _0x2c8256(_0x22aead) {
      function _0x2da406(_0x11241e) {
        return _0x11241e !== "constructor" && _0x11241e !== "prototype" && _0x11241e !== "__proto__";
      }
      let _0x427b08 = Object.prototype.propertyIsEnumerable, _0x5a7e31 = _0x22aead?.symbols ? function(_0x2cdd2d) {
        let _0x127ad7 = Object.keys(_0x2cdd2d), _0x377a09 = Object.getOwnPropertySymbols(_0x2cdd2d);
        for (let _0x1a1588 = 0, _0xb03e89 = _0x377a09.length; _0x1a1588 < _0xb03e89; ++_0x1a1588) _0x427b08.call(_0x2cdd2d, _0x377a09[_0x1a1588]) && _0x127ad7.push(_0x377a09[_0x1a1588]);
        return _0x127ad7;
      } : Object.keys, _0x4f3636 = typeof _0x22aead?.cloneProtoObject == "function" ? _0x22aead.cloneProtoObject : void 0, _0x7b781f = typeof _0x22aead?.isMergeableObject == "function" ? _0x22aead.isMergeableObject : _0x457912(), _0x4c24c2 = _0x22aead?.onlyDefinedProperties === !0, _0x240899 = _0x22aead && typeof _0x22aead.mergeArray == "function" ? _0x22aead.mergeArray({ clone: _0x34a80e, deepmerge: _0x27ee96, getKeys: _0x5a7e31, isMergeableObject: _0x7b781f }) : function(_0x41f34e, _0x26de98) {
        let _0x559f75 = _0x41f34e.length, _0x3453f6 = _0x26de98.length, _0x35efe2 = 0, _0x3bf52c = Array(_0x559f75 + _0x3453f6);
        for (; _0x35efe2 < _0x559f75; ++_0x35efe2) _0x3bf52c[_0x35efe2] = _0x34a80e(_0x41f34e[_0x35efe2]);
        for (_0x35efe2 = 0; _0x35efe2 < _0x3453f6; ++_0x35efe2) _0x3bf52c[_0x35efe2 + _0x559f75] = _0x34a80e(_0x26de98[_0x35efe2]);
        return _0x3bf52c;
      };
      function _0x34a80e(_0x246c70) {
        return _0x7b781f(_0x246c70) ? Array.isArray(_0x246c70) ? (function(_0x3a1b0a) {
          let _0x33393d = 0, _0x38d378 = _0x3a1b0a.length, _0x41503f = Array(_0x38d378);
          for (; _0x33393d < _0x38d378; ++_0x33393d) _0x41503f[_0x33393d] = _0x34a80e(_0x3a1b0a[_0x33393d]);
          return _0x41503f;
        })(_0x246c70) : (function(_0x2c5db3) {
          let _0x54626f, _0x3337b6, _0x3847d1, _0x19aebc = {};
          if (_0x4f3636 && Object.getPrototypeOf(_0x2c5db3) !== _0x319a64) return _0x4f3636(_0x2c5db3);
          let _0x3cf04b = _0x5a7e31(_0x2c5db3);
          for (_0x54626f = 0, _0x3337b6 = _0x3cf04b.length; _0x54626f < _0x3337b6; ++_0x54626f) _0x2da406(_0x3847d1 = _0x3cf04b[_0x54626f]) && (_0x19aebc[_0x3847d1] = _0x34a80e(_0x2c5db3[_0x3847d1]));
          return _0x19aebc;
        })(_0x246c70) : _0x246c70;
      }
      function _0x27ee96(_0xa1f350, _0x4a6932) {
        if (_0x4c24c2 && _0x4a6932 === void 0) return _0x34a80e(_0xa1f350);
        let _0xa489a1 = Array.isArray(_0x4a6932), _0x3fedd5 = Array.isArray(_0xa1f350);
        return typeof _0x4a6932 != "object" || _0x4a6932 === null ? _0x4a6932 : _0x7b781f(_0xa1f350) ? _0xa489a1 && _0x3fedd5 ? _0x240899(_0xa1f350, _0x4a6932) : _0xa489a1 !== _0x3fedd5 ? _0x34a80e(_0x4a6932) : (function(_0x2453ed, _0x4ada95) {
          let _0x2ca37c, _0x3819f7, _0x45ab4e, _0x39e6d4 = {}, _0x4b0056 = _0x5a7e31(_0x2453ed), _0x35b9e2 = _0x5a7e31(_0x4ada95);
          for (_0x2ca37c = 0, _0x3819f7 = _0x4b0056.length; _0x2ca37c < _0x3819f7; ++_0x2ca37c) _0x2da406(_0x45ab4e = _0x4b0056[_0x2ca37c]) && _0x35b9e2.indexOf(_0x45ab4e) === -1 && (_0x39e6d4[_0x45ab4e] = _0x34a80e(_0x2453ed[_0x45ab4e]));
          for (_0x2ca37c = 0, _0x3819f7 = _0x35b9e2.length; _0x2ca37c < _0x3819f7; ++_0x2ca37c) if (_0x2da406(_0x45ab4e = _0x35b9e2[_0x2ca37c]))
            if (_0x45ab4e in _0x2453ed) _0x4b0056.indexOf(_0x45ab4e) !== -1 && (_0x4f3636 && _0x7b781f(_0x4ada95[_0x45ab4e]) && Object.getPrototypeOf(_0x4ada95[_0x45ab4e]) !== _0x319a64 ? _0x39e6d4[_0x45ab4e] = _0x4f3636(_0x4ada95[_0x45ab4e]) : _0x39e6d4[_0x45ab4e] = _0x27ee96(_0x2453ed[_0x45ab4e], _0x4ada95[_0x45ab4e]));
            else {
              if (_0x4c24c2 && _0x4ada95[_0x45ab4e] === void 0) continue;
              _0x39e6d4[_0x45ab4e] = _0x34a80e(_0x4ada95[_0x45ab4e]);
            }
          return _0x39e6d4;
        })(_0xa1f350, _0x4a6932) : _0x34a80e(_0x4a6932);
      }
      return _0x22aead?.all ? function() {
        let _0x1e5b4b;
        switch (arguments.length) {
          case 0:
            return {};
          case 1:
            return _0x34a80e(arguments[0]);
          case 2:
            return _0x27ee96(arguments[0], arguments[1]);
        }
        for (let _0x110d87 = 0, _0x13f9e9 = arguments.length; _0x110d87 < _0x13f9e9; ++_0x110d87) _0x1e5b4b = _0x27ee96(_0x1e5b4b, arguments[_0x110d87]);
        return _0x1e5b4b;
      } : _0x27ee96;
    }
    _0x273df5.exports = _0x2c8256, _0x273df5.exports.default = _0x2c8256, _0x273df5.exports.deepmerge = _0x2c8256, Object.defineProperty(_0x273df5.exports, "isMergeableObject", { get: _0x457912 });
  }, 235(_0xdccec6, _0x376b02, _0x2b706a) {
    _0x2b706a.d(_0x376b02, { Sr: () => _0x632057 }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN;
    let _0x388039 = [101, 204, 205, 304];
    class _0x632057 extends Response {
      url;
      rawHeaders;
      redirected = !1;
      static fromTransferrableResponse(_0x345f34, _0x35b61d) {
        let _0x4a8f4b = new _0x632057(_0x388039.includes(_0x345f34.status) ? void 0 : _0x345f34.body, { headers: new Headers(_0x345f34.headers), status: _0x345f34.status, statusText: _0x345f34.statusText });
        return _0x4a8f4b.url = _0x35b61d, _0x4a8f4b.redirected = _0x345f34.status >= 300 && _0x345f34.status < 400 && _0x345f34.headers.location !== void 0, _0x4a8f4b.rawHeaders = _0x345f34.headers, _0x4a8f4b;
      }
      static fromNativeResponse(_0x5db95c) {
        let _0x3fef9b = new _0x632057(_0x388039.includes(_0x5db95c.status) ? void 0 : _0x5db95c.body, { headers: _0x5db95c.headers, status: _0x5db95c.status, statusText: _0x5db95c.statusText });
        return _0x3fef9b.url = _0x5db95c.url, _0x3fef9b.rawHeaders = [..._0x5db95c.headers], _0x3fef9b.redirected = _0x5db95c.redirected, _0x3fef9b;
      }
    }
  }, 423(_0x40d43c, _0x3d5229, _0x335ca8) {
    _0x335ca8.d(_0x3d5229, { Cx: () => _0x21b3e9, Oy: () => _0x309616, ht: () => _0xdfb6e9, k_: () => _0x4ee699, mK: () => _0x2c1763, r5: () => _0x59663e, sb: () => _0x2a68cf, uh: () => _0x1826dc });
    let { BareResponse: _0x25f001, CookieJar: _0x276978, IncrementalHtmlRewriter: _0x57b1b6, Plugin: _0x4ee699, QP: _0x2cebd9, SCRAMJETCLIENT: _0x83c220, SCRAMJETCLIENTNAME: _0x4efd31, ScramjetClient: _0x3009cc, ScramjetFetchHandler: _0x2c1763, ScramjetFetchTrackedClient: _0x3697aa, ScramjetHeaders: _0x1826dc, ScramjetStorageJar: _0x818220, Tap: _0x21b3e9, createLocationProxy: _0x3fbbde, defaultConfig: _0x2a68cf, defaultConfigDev: _0x4dd64f, flagEnabled: _0x49712c, getOwnPropertyDescriptorHandler: _0xffc119, getRewriter: _0x48c823, getScriptBlockTypeString: _0x4a0e75, htmlRules: _0x2d833a, isArchiveMimeType: _0x282f64, isAudioOrVideoMimeType: _0x101856, isFontMimeType: _0x2f78c3, isHtmlMimeType: _0x1a2060, isImageMimeType: _0x58788b, isInlineDisplayableMimeType: _0xf10205, isJavascriptMimeType: _0x43e0cc, isJavascriptMimeTypeEssenceMatch: _0x293630, isModuleScriptType: _0x59b27d, isScriptType: _0x177c73, isScriptableMimeType: _0x10ee1b, isXmlMimeType: _0x47180c, isZipBasedMimeType: _0xc3dd69, isdedicated: _0x26d0ec, isshared: _0x2c7f64, issw: _0x43a61f, iswindow: _0x36da5a, isworker: _0x59d459, nativeProviders: _0x1471ff, parseMimeType: _0x55be70, providers: _0x59663e, registerProviders: _0x3af2dc, resetProviders: _0x239c5d, rewriteBlob: _0x26b08f, rewriteCss: _0x4400fb, rewriteHtml: _0x1e404a, rewriteJs: _0x191ab9, rewriteJsInner: _0x53a531, rewriteSrcset: _0x38995d, rewriteUrl: _0x309616, rewriteWorkers: _0x345be9, setWasm: _0xdfb6e9, unrewriteBlob: _0xfad4f3, unrewriteCss: _0x2386ba, unrewriteHtml: _0x52d08d, unrewriteUrl: _0x3090b0, versionInfo: _0x3af9c2 } = globalThis.$scramjet;
  } }, _0x5bc9a5 = {};
  function _0x47595e(_0x315fa2) {
    var _0x1aae8e = _0x5bc9a5[_0x315fa2];
    if (_0x1aae8e !== void 0) return _0x1aae8e.exports;
    var _0xf67b4e = _0x5bc9a5[_0x315fa2] = { exports: {} };
    return _0x351a5b[_0x315fa2](_0xf67b4e, _0xf67b4e.exports, _0x47595e), _0xf67b4e.exports;
  }
  _0x47595e.n = (_0x1b8fba) => {
    var _0x22d3f7 = _0x1b8fba && _0x1b8fba.__esModule ? () => _0x1b8fba.default : () => _0x1b8fba;
    return _0x47595e.d(_0x22d3f7, { a: _0x22d3f7 }), _0x22d3f7;
  }, _0x47595e.d = (_0xa356cc, _0x1e1fef) => {
    for (var _0x4a063b in _0x1e1fef) _0x47595e.o(_0x1e1fef, _0x4a063b) && !_0x47595e.o(_0xa356cc, _0x4a063b) && Object.defineProperty(_0xa356cc, _0x4a063b, { enumerable: !0, get: _0x1e1fef[_0x4a063b] });
  }, _0x47595e.o = (_0x169e26, _0x4b78e1) => Object.prototype.hasOwnProperty.call(_0x169e26, _0x4b78e1), _0x47595e.r = (_0x19c1b6) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x19c1b6, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x19c1b6, "__esModule", { value: !0 });
  };
  var _0xfdd829 = {};
  (() => {
    _0x47595e.r(_0xfdd829), _0x47595e.d(_0xfdd829, { Controller: () => _0x4fd7ba, Frame: () => _0x377deb, ManagedPlugin: () => _0x2d1296, VERSION: () => _0x4fb0be.x, assertRuntimeScramjetVersion: () => _0x4fb0be.O, config: () => _0x1191c5 });
    var _0x20eee8 = _0x47595e(986), _0x48cf03 = _0x47595e(235), _0x1a5793 = _0x47595e(805), _0x156434 = _0x47595e(423), _0x5189c9 = _0x47595e(286), _0x4fb0be = _0x47595e(355);
    let _0x1191c5 = { prefix: "/~/sj/", scramjetPath: "/scramjet/scramjet.js", injectPath: "/controller/controller.inject.js", wasmPath: "/scramjet/scramjet.wasm", virtualWasmPath: "scramjet.wasm.js", codec: { encode: (_0x408402) => _0x408402 && encodeURIComponent(encodeURIComponent(_0x408402)), decode: (_0x48e475) => {
      if (!_0x48e475) return _0x48e475;
      let _0x2b6cc5 = decodeURIComponent(_0x48e475);
      return /^[a-z][a-z0-9+.-]*:/i.test(_0x2b6cc5) ? _0x2b6cc5 : decodeURIComponent(_0x2b6cc5);
    } } }, _0x12e98f = { flags: { ..._0x156434.sb.flags, allowFailedIntercepts: !1 }, maskedfiles: ["inject.js", "scramjet.wasm.js"] };
    class _0x2d1296 extends _0x156434.k_ {
      frame = null;
      dependencies = [];
      constructor(_0x1fcc95, _0x3f4206) {
        super(_0x1fcc95), this.dependencies = _0x3f4206;
      }
      install(_0x3847fb) {
        this.frame = _0x3847fb;
      }
    }
    let _0x2b4817 = "state";
    function _0x2609fa(_0x415f02, _0x254c53) {
      let _0x7b4b9d = new URL(_0x415f02.scriptURL), _0x3d9d9a = new URL(_0x254c53.scriptURL);
      return _0x7b4b9d.origin === _0x3d9d9a.origin && _0x7b4b9d.pathname === _0x3d9d9a.pathname;
    }
    let _0x4ed0f1 = null;
    function _0x3d0ae0(_0x2f7458) {
      if (_0x2f7458 === void 0) return null;
      if (typeof _0x2f7458 != "object" || _0x2f7458 === null || !Number.isSafeInteger(_0x2f7458.updatedAt) || _0x2f7458.updatedAt < 0 || typeof _0x2f7458.cookies != "string") throw Error("Persisted Scramjet cookie state was malformed");
      return _0x2f7458;
    }
    function _0x2731b3(_0x1a132d) {
      return new Promise((_0x4495b6, _0x326e53) => {
        _0x1a132d.onsuccess = () => _0x4495b6(_0x1a132d.result), _0x1a132d.onerror = () => _0x326e53(_0x1a132d.error ?? Error("IndexedDB request failed"));
      });
    }
    function _0x4f3d69(_0x226a4f) {
      return new Promise((_0x5be9ea, _0x2ddd38) => {
        _0x226a4f.oncomplete = () => _0x5be9ea(void 0), _0x226a4f.onabort = () => _0x2ddd38(_0x226a4f.error ?? Error("IndexedDB transaction aborted")), _0x226a4f.onerror = () => _0x2ddd38(_0x226a4f.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function _0x551ddd() {
      return _0x4ed0f1 || (_0x4ed0f1 = new Promise((_0x402938, _0x1c912a) => {
        let _0x2c50cd = indexedDB.open("__scramjet_controller", 1);
        _0x2c50cd.onupgradeneeded = () => {
          let _0x811241 = _0x2c50cd.result;
          _0x811241.objectStoreNames.contains(_0x2b4817) || _0x811241.createObjectStore(_0x2b4817);
        }, _0x2c50cd.onsuccess = () => _0x402938(_0x2c50cd.result), _0x2c50cd.onerror = () => _0x1c912a(_0x2c50cd.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function _0x1dc653(_0x24baf0) {
      let _0x48a1d1 = (await _0x551ddd()).transaction(_0x2b4817, "readonly"), _0x22f251 = _0x48a1d1.objectStore(_0x2b4817), _0x410411 = _0x4f3d69(_0x48a1d1), _0x485359 = await _0x2731b3(_0x22f251.get(_0x24baf0));
      return await _0x410411, _0x3d0ae0(_0x485359);
    }
    async function _0x374ea4(_0x15f146, _0xd8a246, _0x1b8528) {
      let _0x582bc6 = (await _0x551ddd()).transaction(_0x2b4817, "readwrite"), _0x450a0d = _0x582bc6.objectStore(_0x2b4817), _0x1f104f = _0x4f3d69(_0x582bc6), _0x3dd2ec = _0x3d0ae0(await _0x2731b3(_0x450a0d.get(_0x15f146))), _0x2a0dec = Math.max(_0x1b8528, _0x3dd2ec?.updatedAt ?? 0) + 1;
      if (!Number.isSafeInteger(_0x2a0dec)) throw Error("Persisted Scramjet cookie sequence was exhausted");
      return await _0x2731b3(_0x450a0d.put({ updatedAt: _0x2a0dec, cookies: _0xd8a246 }, _0x15f146)), await _0x1f104f, _0x2a0dec;
    }
    function _0x2a5b65() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x58f976) => _0x58f976.toString(16).padStart(2, "0")).join("");
    }
    function _0x4e7be3(_0x32d773) {
      let _0x207066 = _0x32d773.contentWindow;
      if (_0x32d773.name && _0x207066 !== null && _0x207066.name !== _0x32d773.name) try {
        _0x207066.name = _0x32d773.name;
      } catch {
      }
    }
    let _0x2cea19 = (0, _0x20eee8.deepmerge)();
    class _0x4fd7ba {
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
      onTabChannelMessage = (_0x3f3700) => {
        this.rpc.recieve(_0x3f3700.data);
      };
      onCookieSyncMessage = (_0x2b9534) => {
        let _0x23055e = typeof _0x2b9534.data == "object" && _0x2b9534.data !== null ? _0x2b9534.data.updatedAt : void 0;
        typeof _0x23055e == "number" && Number.isSafeInteger(_0x23055e) && !(_0x23055e < 0) && !(_0x23055e <= this.cookieUpdatedAt) && (this.cookieSyncDirty = !0, this.loadSavedCookies().catch((_0xa894b7) => {
          this.cookieSyncDirty = !0;
        }));
      };
      onServiceWorkerMessage = async (_0x1f8e03) => {
        if (!this.closed && !this.closing) {
          if (_0x1f8e03.data?.$controller$setCookie && typeof _0x1f8e03.data.$controller$setCookie == "object") {
            let _0x656a8e = _0x1f8e03.data.$controller$setCookie;
            _0x656a8e.options?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(_0x656a8e.cookies, _0x656a8e.options), typeof _0x656a8e.id == "string" && this.serviceWorkerController.postMessage({ $sw$setCookieDone: { id: _0x656a8e.id } });
            return;
          }
          if (_0x1f8e03.data?.$controller$swrevive) {
            let _0x45c867 = _0x1f8e03.data.$controller$swrevive, _0x404973 = _0x1f8e03.source;
            if (!(_0x404973 instanceof ServiceWorker) || _0x404973.state === "redundant" || typeof _0x45c867.workerId != "string" || typeof _0x45c867.revivalId != "string" || !_0x2609fa(this.serviceWorkerController, _0x404973)) return;
            this.reconnectServiceWorker(_0x404973, _0x45c867.workerId, _0x45c867.revivalId).catch((_0x1b5d5a) => {
            });
          }
        }
      };
      async loadScramjetWasm() {
        if (this.wasmAlreadyFetched) return;
        let _0x3c7130 = await fetch(this.config.wasmPath);
        (0, _0x156434.ht)(await _0x3c7130.arrayBuffer()), this.wasmAlreadyFetched = !0;
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
          let o2 = _0x156434.uh.fromRawHeaders(e3.initialHeaders), s2 = await r2.fetchHandler.handleFetch({ initialHeaders: o2, rawClientUrl: e3.rawClientUrl ? new URL(e3.rawClientUrl) : void 0, rawUrl: new URL(e3.rawUrl), rawReferrer: e3.rawReferrer, rawDestination: e3.destination, rawCredentials: e3.credentials, method: e3.method, mode: e3.mode, referrer: e3.referrer, body: e3.body, cache: e3.cache, clientId: e3.clientId ?? "", ...e3.sourceClientId === void 0 ? {} : { sourceClientId: e3.sourceClientId }, ...e3.resultingClientId === void 0 ? {} : { resultingClientId: e3.resultingClientId } });
          return [{ body: s2.body, status: s2.status, statusText: s2.statusText, headers: s2.headers.toRawHeaders() }, s2.body instanceof ReadableStream || s2.body instanceof ArrayBuffer ? [s2.body] : []];
        } catch (o2) {
          let t4 = { setResponse: void 0, suppressError: !1 };
          if (await _0x156434.Cx.dispatch(r2.hooks.error.request, { rawrequest: e3, error: o2 }, t4), t4.suppressError, t4.setResponse) return [t4.setResponse, []];
          throw o2;
        }
      }, initRemoteTransport: async ({ port: e3 }) => {
        let t3 = new _0x1a5793.C({ request: async ({ remote: e4, method: t4, body: r2, headers: o2, proxy: s2 }) => {
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
      constructor(_0x2f35ea) {
        if (this.init = _0x2f35ea, typeof _0x2f35ea.storagePartitionKey != "string" || _0x2f35ea.storagePartitionKey.length === 0) throw Error("Scramjet Controller requires a non-empty storage partition key");
        (0, _0x4fb0be.O)(), this.id = _0x2a5b65(), this.config = _0x2cea19(_0x1191c5, _0x2f35ea.config || {}), this.scramjetConfig = _0x2cea19(_0x12e98f, _0x156434.sb), this.scramjetConfig = _0x2cea19(this.scramjetConfig, _0x2f35ea.scramjetConfig || {}), this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = _0x2f35ea.serviceworker, this.resolvedCookieStore = _0x2f35ea.cookieJar, this.storage = _0x2f35ea.storage, this.cookieSyncChannel = new BroadcastChannel("__scramjet_controller_channel:" + encodeURIComponent(_0x2f35ea.storagePartitionKey)), this.ready = Promise.all([new Promise((_0x81cdc0, _0xef6f48) => {
          this.readyResolve = _0x81cdc0, this.readyReject = _0xef6f48;
        }), this.loadScramjetWasm(), this.loadSavedCookies(!0)]).then(() => {
          if (this.closed || this.closing) throw Error("Scramjet Controller closed before becoming ready");
          this.initializationComplete = !0, this.isReady = !0;
        }), this.rpc = new _0x1a5793.C(this.methods, "tabchannel-" + this.id, (_0x329c1f, _0x5b187f) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(_0x329c1f, _0x5b187f);
        }), this.transport = _0x2f35ea.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), this.reconnectServiceWorker(this.serviceWorkerController).catch((_0x4348d3) => {
          if (this.readyResolve === null || this.serviceWorkerReady !== null) return;
          let _0x2f2dac = this.readyReject;
          this.readyResolve = null, this.readyReject = null, _0x2f2dac?.(_0x4348d3);
        }), navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
      setupMessagePort(_0xae0ffa, _0xc9f270, _0x460f4d) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (this.serviceWorkerReady !== null) {
          let _0x559a53 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x559a53.timeout), _0x559a53.reject(Error("Scramjet Controller connection was replaced"));
        }
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        let _0xf6c688 = new MessageChannel(), _0x323271 = _0x2a5b65();
        return this.port = _0xf6c688.port1, this.port.addEventListener("message", this.onTabChannelMessage), this.port.start(), new Promise((_0x25477b, _0x1ee2ac) => {
          let _0x4af677 = (_0x2cb84f) => {
            _0x1ee2ac(_0x2cb84f);
          }, _0x50d160 = setTimeout(() => {
            this.serviceWorkerReady?.connectionId === _0x323271 && (this.serviceWorkerReady = null, _0x4af677(Error("Scramjet Controller ready acknowledgement expired")));
          }, 5e3);
          this.serviceWorkerReady = { worker: _0xae0ffa, expectedWorkerId: _0xc9f270, connectionId: _0x323271, resolve: () => {
            _0x25477b(void 0);
          }, reject: _0x4af677, timeout: _0x50d160 };
          try {
            _0xae0ffa.postMessage({ $controller$init: { prefix: this.prefix, id: this.id, connectionId: _0x323271, ..._0xc9f270 === void 0 ? {} : { workerId: _0xc9f270 }, ..._0x460f4d === void 0 ? {} : { revivalId: _0x460f4d } } }, [_0xf6c688.port2]);
          } catch (_0x5501c3) {
            this.serviceWorkerReady?.connectionId === _0x323271 && (this.serviceWorkerReady = null), clearTimeout(_0x50d160), _0x4af677(_0x5501c3);
          }
        });
      }
      async reconnectServiceWorker(_0xf52c78, _0x4410c3, _0x3057d3) {
        let _0x47f4fd = this.serviceWorkerReconnect;
        if (_0x47f4fd !== null && _0x47f4fd.worker === _0xf52c78 && (_0x4410c3 === void 0 || _0x47f4fd.expectedWorkerId === _0x4410c3)) return _0x47f4fd.promise;
        this.isReady = !1;
        let _0x274d32 = (async () => {
          if (await this.setupMessagePort(_0xf52c78, _0x4410c3, _0x3057d3), this.closed || this.closing) throw Error("Scramjet Controller closed during reconnection");
          this.initializationComplete && (this.isReady = !0);
        })();
        this.serviceWorkerReconnect = { worker: _0xf52c78, expectedWorkerId: _0x4410c3, promise: _0x274d32 };
        try {
          return await _0x274d32;
        } finally {
          this.serviceWorkerReconnect?.promise === _0x274d32 && (this.serviceWorkerReconnect = null);
        }
      }
      async refreshServiceWorkerConnection() {
        let _0x3c420a = this.serviceWorkerController, _0x392ccd = await navigator.serviceWorker.getRegistration(new URL(this.prefix, location.href)), _0x4b786e = _0x392ccd?.active;
        if (_0x4b786e && _0x4b786e.state !== "redundant" && _0x2609fa(_0x3c420a, _0x4b786e) && (_0x3c420a = _0x4b786e), _0x3c420a.state === "redundant") throw Error("No active Scramjet service worker is available");
        return await this.reconnectServiceWorker(_0x3c420a);
      }
      detachFromServiceWorker() {
        return new Promise((_0x3380fe, _0x58794c) => {
          let _0x145209 = new MessageChannel(), _0x53fa5b = !1, _0x49f56c = (_0x2af190) => {
            if (!_0x53fa5b) {
              if (_0x53fa5b = !0, clearTimeout(_0xb67921), _0x145209.port1.onmessage = null, _0x145209.port1.onmessageerror = null, _0x145209.port1.close(), _0x2af190) return void _0x58794c(_0x2af190);
              _0x3380fe(void 0);
            }
          }, _0xb67921 = setTimeout(() => {
            _0x49f56c(Error("Scramjet Controller detach was not acknowledged"));
          }, 5e3);
          _0x145209.port1.onmessage = (_0x337a53) => {
            let _0x5de635 = _0x337a53.data?.$controller$detached;
            _0x5de635?.id !== this.id || _0x5de635.detached !== !0 ? _0x49f56c(Error("Scramjet Controller detach was not acknowledged")) : _0x49f56c();
          }, _0x145209.port1.onmessageerror = () => {
            _0x49f56c(Error("Scramjet Controller detach acknowledgement failed"));
          };
          let _0x4cc5fd = { id: this.id };
          try {
            this.serviceWorkerController.postMessage({ $controller$detach: _0x4cc5fd }, [_0x145209.port2]);
          } catch (_0x48257b) {
            _0x49f56c(_0x48257b instanceof Error ? _0x48257b : Error("Scramjet Controller detach request failed"));
          }
        });
      }
      async closeLocalResources() {
        let _0x44673a = [], _0x3f2893 = [];
        for (let _0x12ab3c of this.frames) {
          let _0x46bd04 = !1;
          try {
            _0x12ab3c.element[_0x5189c9.I] === _0x12ab3c && (_0x12ab3c.element.removeAttribute("srcdoc"), _0x12ab3c.element.src = "about:blank", delete _0x12ab3c.element[_0x5189c9.I]);
          } catch (_0x571fb1) {
            _0x44673a.push(_0x571fb1), _0x46bd04 = !0;
          }
          _0x46bd04 && _0x3f2893.push(_0x12ab3c);
        }
        this.frames = _0x3f2893;
        let _0x4aa835 = Error("Scramjet Controller closed");
        for (let _0x43b9f0 of this.transportChannels) {
          for (let _0x5703eb of _0x43b9f0.rpc.promiseCallbacks.values()) _0x5703eb.reject(_0x4aa835);
          _0x43b9f0.rpc.promiseCallbacks.clear(), _0x43b9f0.port.onmessage = null, _0x43b9f0.port.onmessageerror = null;
          try {
            _0x43b9f0.port.close();
          } catch {
          }
        }
        for (let _0x3f66c3 of (this.transportChannels.clear(), this.rpc.promiseCallbacks.values())) _0x3f66c3.reject(_0x4aa835);
        if (this.rpc.promiseCallbacks.clear(), this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        if (this.cookieSyncChannel.removeEventListener("message", this.onCookieSyncMessage), this.cookieSyncChannel.close(), navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage), this.serviceWorkerReady !== null) {
          let _0x573152 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x573152.timeout), _0x573152.reject(_0x4aa835);
        }
        if (_0x44673a.length > 0) throw AggregateError(_0x44673a, "Scramjet Controller frame teardown failed");
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
      async applyCookieSyncEntries(_0x24c3ca, _0x14deeb = {}) {
        if (Array.isArray(_0x24c3ca))
          for (let _0x4222d9 of _0x24c3ca) typeof _0x4222d9?.url == "string" && typeof _0x4222d9.cookie == "string" && await this.cookieJar.setCookies(_0x4222d9.cookie, new URL(_0x4222d9.url), _0x14deeb.destination === void 0);
      }
      async propagateCookieSync(_0x473518, _0x415037 = {}) {
        this.port && await this.rpc.call("sendSetCookie", { cookies: _0x473518, options: _0x415037 });
      }
      async loadSavedCookies(_0x9320c9 = !1) {
        if (_0x9320c9 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          if (!this.cookieJar.ownsPersistence) {
            this.cookieSyncDirty = !1;
            return;
          }
          let _0x18eea7 = await _0x1dc653(this.init.storagePartitionKey);
          _0x18eea7 && _0x18eea7.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(_0x18eea7.cookies), this.cookieUpdatedAt = _0x18eea7.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        if (!this.cookieJar.ownsPersistence) return;
        let _0x3d7e98 = await _0x374ea4(this.init.storagePartitionKey, this.cookieJar.dump(), this.cookieUpdatedAt);
        _0x3d7e98 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = _0x3d7e98, this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({ updatedAt: _0x3d7e98 }));
      }
      get cookieJar() {
        let _0x126b9c = this.resolvedCookieStore;
        if (_0x126b9c !== void 0) return _0x126b9c;
        let _0x40a9b1 = (0, _0x156434.r5)().createCookieStore();
        return this.resolvedCookieStore = _0x40a9b1, _0x40a9b1;
      }
      setTransport(_0x2005f2) {
        for (let _0x4fef97 of (this.transport = _0x2005f2, this.frames)) _0x4fef97.controller.transport = _0x2005f2, _0x4fef97.fetchHandler.client.transport = _0x2005f2;
      }
      createFrame(_0x4f7d6f, _0x53151c = {}) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (!this.isReady) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let _0x4a0061 = new _0x377deb(this, _0x4f7d6f ??= document.createElement("iframe"), _0x53151c);
        return this.frames.push(_0x4a0061), _0x4a0061;
      }
      async wait() {
        if (this.closed || this.closing || (await this.ready, this.closed || this.closing)) throw Error("Scramjet Controller is closed");
      }
    }
    class _0x377deb {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return { config: this.controller.scramjetConfig, prefix: new URL(this.prefix, location.href), cookieJar: this.controller.cookieJar, storage: this.controller.storage, storagePartitionKey: this.controller.init.storagePartitionKey, interface: { getInjectScripts: /* @__PURE__ */ (function _0x257076(_0x2319c1, _0x34c8a1, _0x332ff0, _0x3a9f70, _0x5e8f83, _0xb35f08, _0xe6eb9, _0x5df69c) {
          return (_0x4c9304, _0x50021b, _0x11113d, _0x5f55a8) => {
            var _0x12cd73;
            return [_0x5f55a8(_0x2319c1.scramjetPath), _0x5f55a8(_0x332ff0.href + _0x2319c1.virtualWasmPath), _0x5f55a8(_0x2319c1.injectPath), _0x5f55a8("data:text/javascript;charset=utf-8;base64," + (_0x12cd73 = `
					document.querySelectorAll("script[scramjet-injected]").forEach(script => script.remove());
					$scramjetController.load({
						config: ` + JSON.stringify(_0x2319c1) + `,
						sjconfig: ` + JSON.stringify(_0x34c8a1) + `,
						prefix: new URL("` + _0x332ff0.href + `"),
						cookies: ` + JSON.stringify(_0x3a9f70.dump()) + `,
						storage: ` + JSON.stringify(_0x5e8f83?.dump?.() ?? null) + `,
						storagePartitionKey: ` + JSON.stringify(_0x5df69c) + `,
						yieldGetInjectScripts: ` + _0x257076.toString() + `,
						codecEncode: ` + _0xb35f08.toString() + `,
						codecDecode: ` + _0xe6eb9.toString() + `,
						initHeaders: ` + JSON.stringify(_0x11113d.headers ?? []) + `,
						history: ` + JSON.stringify(_0x11113d.history ?? []) + `,
					})
				`, btoa(new TextEncoder().encode(_0x12cd73).reduce((_0x2b5ab8, _0x558583) => (_0x2b5ab8.push(String.fromCharCode(_0x558583)), _0x2b5ab8), []).join(""))))];
          };
        })(this.controller.config, this.controller.scramjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.storage, this.controller.config.codec.encode, this.controller.config.codec.decode, this.controller.init.storagePartitionKey), getWorkerInjectScripts: (_0x268fbe, _0x12224d, _0x1188bd) => {
          var _0x5a0157;
          let _0x40c75f = "";
          return _0x40c75f += _0x1188bd(this.controller.config.scramjetPath), _0x40c75f += _0x1188bd(this.prefix + this.controller.config.virtualWasmPath), _0x40c75f += _0x1188bd("data:text/javascript;charset=utf-8;base64," + (_0x5a0157 = `
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
					`, btoa(new TextEncoder().encode(_0x5a0157).reduce((_0x3e0b2c, _0x3f883d) => (_0x3e0b2c.push(String.fromCharCode(_0x3f883d)), _0x3e0b2c), []).join(""))));
        }, codecEncode: this.controller.config.codec.encode, codecDecode: this.controller.config.codec.decode } };
      }
      plugins = [];
      constructor(_0x2a8538, _0x5a8039, _0x436c44 = {}) {
        for (const _0x2f1b73 of (this.controller = _0x2a8538, this.element = _0x5a8039, this.options = _0x436c44, this.id = _0x2a5b65(), this.prefix = this.controller.prefix + this.id + "/", _0x4e7be3(_0x5a8039), this.plugins = _0x436c44.plugins ?? [], this.fetchHandler = new _0x156434.mK({ crossOriginIsolated: self.crossOriginIsolated, context: this.context, transport: _0x2a8538.transport, async sendSetCookie(_0xc3afd0, _0x4f671a) {
          await _0x2a8538.persistCookies(), await _0x2a8538.propagateCookieSync(_0xc3afd0.map(({ url: _0x18fcda, cookie: _0x2900a6 }) => ({ url: _0x18fcda.href, cookie: _0x2900a6 })), _0x4f671a);
        }, fetchBlobUrl: async (_0xe210b3, _0x23ce48) => _0x48cf03.Sr.fromNativeResponse(await fetch(_0xe210b3, _0x23ce48)), fetchDataUrl: async (_0x3e7d74, _0x364526) => _0x48cf03.Sr.fromNativeResponse(await fetch(_0x3e7d74, _0x364526)) }), this.hooks = { fetch: this.fetchHandler.hooks.fetch, init: _0x156434.Cx.create(), error: _0x156434.Cx.create() }, _0x5a8039[_0x5189c9.I] = this, this.plugins)) {
          for (const _0x4f2ad7 of _0x2f1b73.dependencies) if (!this.plugins.find((_0x4e35b4) => _0x4e35b4.name === _0x4f2ad7)) throw Error("Dependency " + _0x4f2ad7 + " not found for plugin " + _0x2f1b73.name);
          _0x2f1b73.install(this);
        }
      }
      getPlugin(_0x3b43c5) {
        let _0xa25e8c = this.plugins.find((_0x258c6e) => _0x258c6e.name === _0x3b43c5);
        if (!_0xa25e8c) throw Error("Plugin " + _0x3b43c5 + " not found");
        return _0xa25e8c;
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
      go(_0x924e80) {
        _0x4e7be3(this.element);
        let _0x56b13e = (0, _0x156434.Oy)(_0x924e80, this.context, { origin: new URL(location.href), base: new URL(location.href) }, { destination: "document" });
        this.element.src = _0x56b13e;
      }
    }
  })(), $scramjetController = _0xfdd829;
})();
