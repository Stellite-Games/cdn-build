var $scramjetController;
(() => {
  var _0x4087bf = { 286(_0x43f93f, _0x38f328, _0x5a4329) {
    _0x5a4329.d(_0x38f328, { I: () => _0x1a7059 });
    let _0x1a7059 = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 355(_0x2ecf41, _0x509c23, _0x2c9245) {
    _0x2c9245.d(_0x509c23, { O: () => _0xb2ec19, x: () => _0x43cadd });
    let _0x43cadd = "0.0.14";
    function _0xb2ec19() {
      if (typeof $scramjet > "u") throw Error("@mercuryworkshop/scramjet is not loaded. Load scramjet before the controller.");
      var _0x226948 = "2.0.67-alpha.2", _0x2ba94f = $scramjet.versionInfo.version;
      if (_0x226948 !== _0x2ba94f) throw Error("@mercuryworkshop/scramjet version mismatch: this build expects " + _0x226948 + ", but the loaded runtime is " + _0x2ba94f);
    }
  }, 805(_0xbbad9, _0x215814, _0x366408) {
    _0x366408.d(_0x215814, { C: () => _0x5ae8dc });
    class _0x5ae8dc {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x13a7de, _0x44a1dc, _0x14afa4) {
        this.methods = _0x13a7de, this.id = _0x44a1dc, this.sendRaw = _0x14afa4;
      }
      recieve(_0x2cdbd7) {
        if (_0x2cdbd7 == null || typeof _0x2cdbd7 != "object") return;
        let _0x3176cf = _0x2cdbd7[this.id];
        if (_0x3176cf == null || typeof _0x3176cf != "object") return;
        let _0x4fe7ff = _0x3176cf.$type;
        if (_0x4fe7ff === "response") {
          let _0x450597 = _0x3176cf.$token, _0x369354 = _0x3176cf.$data, _0x1437fa = _0x3176cf.$error, _0x4f9ae0 = this.promiseCallbacks.get(_0x450597);
          if (!_0x4f9ae0) return;
          this.promiseCallbacks.delete(_0x450597), _0x1437fa !== void 0 ? _0x4f9ae0.reject(Error(_0x1437fa)) : _0x4f9ae0.resolve(_0x369354);
        } else if (_0x4fe7ff === "request") {
          let _0x4cf3c9 = _0x3176cf.$method, _0x414ed0 = _0x3176cf.$args;
          this.methods[_0x4cf3c9](_0x414ed0).then((_0x81ed86) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x3176cf.$token, $data: _0x81ed86?.[0] } }, _0x81ed86?.[1]);
          }).catch((_0x509614) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x3176cf.$token, $error: _0x509614?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x5ed803, _0x4e975c, _0xfc65dc = []) {
        let _0x2f3c09 = this.counter++;
        return new Promise((_0x3da3e6, _0x4a8f6b) => {
          this.promiseCallbacks.set(_0x2f3c09, { resolve: _0x3da3e6, reject: _0x4a8f6b }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x5ed803, $args: _0x4e975c, $token: _0x2f3c09 } }, _0xfc65dc);
        });
      }
    }
  }, 986(_0x4f7d2c) {
    let _0x5d4032 = Object.getPrototypeOf({});
    function _0x2c9c97() {
      return function(_0x553c37) {
        return typeof _0x553c37 == "object" && _0x553c37 !== null && !(_0x553c37 instanceof RegExp) && !(_0x553c37 instanceof Date);
      };
    }
    function _0x5df9d8(_0x3b08b8) {
      function _0x1f1b2f(_0x3bd516) {
        return _0x3bd516 !== "constructor" && _0x3bd516 !== "prototype" && _0x3bd516 !== "__proto__";
      }
      let _0x321dbb = Object.prototype.propertyIsEnumerable, _0x8193ee = _0x3b08b8?.symbols ? function(_0x42b824) {
        let _0x5e2d8b = Object.keys(_0x42b824), _0x22adb7 = Object.getOwnPropertySymbols(_0x42b824);
        for (let _0x2c405c = 0, _0xddbe51 = _0x22adb7.length; _0x2c405c < _0xddbe51; ++_0x2c405c) _0x321dbb.call(_0x42b824, _0x22adb7[_0x2c405c]) && _0x5e2d8b.push(_0x22adb7[_0x2c405c]);
        return _0x5e2d8b;
      } : Object.keys, _0x35be94 = typeof _0x3b08b8?.cloneProtoObject == "function" ? _0x3b08b8.cloneProtoObject : void 0, _0x4cbd98 = typeof _0x3b08b8?.isMergeableObject == "function" ? _0x3b08b8.isMergeableObject : _0x2c9c97(), _0x13adc1 = _0x3b08b8?.onlyDefinedProperties === !0, _0x15da15 = _0x3b08b8 && typeof _0x3b08b8.mergeArray == "function" ? _0x3b08b8.mergeArray({ clone: _0x1974a0, deepmerge: _0xe7224e, getKeys: _0x8193ee, isMergeableObject: _0x4cbd98 }) : function(_0x87a231, _0x133f3c) {
        let _0x233827 = _0x87a231.length, _0x2a839f = _0x133f3c.length, _0x244431 = 0, _0x34a776 = Array(_0x233827 + _0x2a839f);
        for (; _0x244431 < _0x233827; ++_0x244431) _0x34a776[_0x244431] = _0x1974a0(_0x87a231[_0x244431]);
        for (_0x244431 = 0; _0x244431 < _0x2a839f; ++_0x244431) _0x34a776[_0x244431 + _0x233827] = _0x1974a0(_0x133f3c[_0x244431]);
        return _0x34a776;
      };
      function _0x1974a0(_0x1d0ba1) {
        return _0x4cbd98(_0x1d0ba1) ? Array.isArray(_0x1d0ba1) ? (function(_0x456822) {
          let _0x278c7e = 0, _0x267146 = _0x456822.length, _0x3474b8 = Array(_0x267146);
          for (; _0x278c7e < _0x267146; ++_0x278c7e) _0x3474b8[_0x278c7e] = _0x1974a0(_0x456822[_0x278c7e]);
          return _0x3474b8;
        })(_0x1d0ba1) : (function(_0x312def) {
          let _0x1d562a, _0x1f01d5, _0x1e0010, _0x50d67b = {};
          if (_0x35be94 && Object.getPrototypeOf(_0x312def) !== _0x5d4032) return _0x35be94(_0x312def);
          let _0x569f98 = _0x8193ee(_0x312def);
          for (_0x1d562a = 0, _0x1f01d5 = _0x569f98.length; _0x1d562a < _0x1f01d5; ++_0x1d562a) _0x1f1b2f(_0x1e0010 = _0x569f98[_0x1d562a]) && (_0x50d67b[_0x1e0010] = _0x1974a0(_0x312def[_0x1e0010]));
          return _0x50d67b;
        })(_0x1d0ba1) : _0x1d0ba1;
      }
      function _0xe7224e(_0x3661cb, _0x39f285) {
        if (_0x13adc1 && _0x39f285 === void 0) return _0x1974a0(_0x3661cb);
        let _0x37c0f5 = Array.isArray(_0x39f285), _0x18d114 = Array.isArray(_0x3661cb);
        return typeof _0x39f285 != "object" || _0x39f285 === null ? _0x39f285 : _0x4cbd98(_0x3661cb) ? _0x37c0f5 && _0x18d114 ? _0x15da15(_0x3661cb, _0x39f285) : _0x37c0f5 !== _0x18d114 ? _0x1974a0(_0x39f285) : (function(_0x1409cb, _0x4c67d8) {
          let _0x46933e, _0x47e36e, _0x5d0424, _0x5d1360 = {}, _0x4b123f = _0x8193ee(_0x1409cb), _0x1faf47 = _0x8193ee(_0x4c67d8);
          for (_0x46933e = 0, _0x47e36e = _0x4b123f.length; _0x46933e < _0x47e36e; ++_0x46933e) _0x1f1b2f(_0x5d0424 = _0x4b123f[_0x46933e]) && _0x1faf47.indexOf(_0x5d0424) === -1 && (_0x5d1360[_0x5d0424] = _0x1974a0(_0x1409cb[_0x5d0424]));
          for (_0x46933e = 0, _0x47e36e = _0x1faf47.length; _0x46933e < _0x47e36e; ++_0x46933e) if (_0x1f1b2f(_0x5d0424 = _0x1faf47[_0x46933e]))
            if (_0x5d0424 in _0x1409cb) _0x4b123f.indexOf(_0x5d0424) !== -1 && (_0x35be94 && _0x4cbd98(_0x4c67d8[_0x5d0424]) && Object.getPrototypeOf(_0x4c67d8[_0x5d0424]) !== _0x5d4032 ? _0x5d1360[_0x5d0424] = _0x35be94(_0x4c67d8[_0x5d0424]) : _0x5d1360[_0x5d0424] = _0xe7224e(_0x1409cb[_0x5d0424], _0x4c67d8[_0x5d0424]));
            else {
              if (_0x13adc1 && _0x4c67d8[_0x5d0424] === void 0) continue;
              _0x5d1360[_0x5d0424] = _0x1974a0(_0x4c67d8[_0x5d0424]);
            }
          return _0x5d1360;
        })(_0x3661cb, _0x39f285) : _0x1974a0(_0x39f285);
      }
      return _0x3b08b8?.all ? function() {
        let _0xc05ae6;
        switch (arguments.length) {
          case 0:
            return {};
          case 1:
            return _0x1974a0(arguments[0]);
          case 2:
            return _0xe7224e(arguments[0], arguments[1]);
        }
        for (let _0x5cf7c9 = 0, _0x41e504 = arguments.length; _0x5cf7c9 < _0x41e504; ++_0x5cf7c9) _0xc05ae6 = _0xe7224e(_0xc05ae6, arguments[_0x5cf7c9]);
        return _0xc05ae6;
      } : _0xe7224e;
    }
    _0x4f7d2c.exports = _0x5df9d8, _0x4f7d2c.exports.default = _0x5df9d8, _0x4f7d2c.exports.deepmerge = _0x5df9d8, Object.defineProperty(_0x4f7d2c.exports, "isMergeableObject", { get: _0x2c9c97 });
  }, 235(_0x191f11, _0x423a03, _0x6996d3) {
    _0x6996d3.d(_0x423a03, { Sr: () => _0x4d0385 }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN;
    let _0xc67c4 = [101, 204, 205, 304];
    class _0x4d0385 extends Response {
      url;
      rawHeaders;
      redirected = !1;
      static fromTransferrableResponse(_0x5c2b1c, _0x4bb9f1) {
        let _0x54d0fc = new _0x4d0385(_0xc67c4.includes(_0x5c2b1c.status) ? void 0 : _0x5c2b1c.body, { headers: new Headers(_0x5c2b1c.headers), status: _0x5c2b1c.status, statusText: _0x5c2b1c.statusText });
        return _0x54d0fc.url = _0x4bb9f1, _0x54d0fc.redirected = _0x5c2b1c.status >= 300 && _0x5c2b1c.status < 400 && _0x5c2b1c.headers.location !== void 0, _0x54d0fc.rawHeaders = _0x5c2b1c.headers, _0x54d0fc;
      }
      static fromNativeResponse(_0x433903) {
        let _0x4e0034 = new _0x4d0385(_0xc67c4.includes(_0x433903.status) ? void 0 : _0x433903.body, { headers: _0x433903.headers, status: _0x433903.status, statusText: _0x433903.statusText });
        return _0x4e0034.url = _0x433903.url, _0x4e0034.rawHeaders = [..._0x433903.headers], _0x4e0034.redirected = _0x433903.redirected, _0x4e0034;
      }
    }
  }, 423(_0x42dad0, _0x34d246, _0x3fcc6d) {
    _0x3fcc6d.d(_0x34d246, { Cx: () => _0x85f851, Oy: () => _0x31489e, ht: () => _0x1b89b0, k_: () => _0x48a1c9, mK: () => _0x216bcd, r5: () => _0x4783ed, sb: () => _0x357d2f, uh: () => _0x25c5c6 });
    let { BareResponse: _0x1f4df8, CookieJar: _0x5701cc, IncrementalHtmlRewriter: _0x1c7e5b, Plugin: _0x48a1c9, QP: _0x1f0ecb, SCRAMJETCLIENT: _0x5223b1, SCRAMJETCLIENTNAME: _0x33ae32, ScramjetClient: _0x13bf39, ScramjetFetchHandler: _0x216bcd, ScramjetFetchTrackedClient: _0x543837, ScramjetHeaders: _0x25c5c6, ScramjetStorageJar: _0x4d6673, Tap: _0x85f851, createLocationProxy: _0x2270db, defaultConfig: _0x357d2f, defaultConfigDev: _0x4f688d, flagEnabled: _0x1c5e0f, getOwnPropertyDescriptorHandler: _0xc1cbd, getRewriter: _0x348acb, getScriptBlockTypeString: _0x3bf4fd, htmlRules: _0x552d22, isArchiveMimeType: _0x9e664e, isAudioOrVideoMimeType: _0x427773, isFontMimeType: _0x59edb8, isHtmlMimeType: _0x53f983, isImageMimeType: _0x38862e, isInlineDisplayableMimeType: _0x5428ca, isJavascriptMimeType: _0x3e65c4, isJavascriptMimeTypeEssenceMatch: _0x5d7ac1, isModuleScriptType: _0x44a5a2, isScriptType: _0x8080af, isScriptableMimeType: _0x4e0004, isXmlMimeType: _0x56544b, isZipBasedMimeType: _0x315a38, isdedicated: _0x1e221b, isshared: _0x49dcce, issw: _0x5cf092, iswindow: _0x3e8efa, isworker: _0x17d3a2, nativeProviders: _0x253886, parseMimeType: _0x554221, providers: _0x4783ed, registerProviders: _0x4c4f55, resetProviders: _0x51bef0, rewriteBlob: _0x183b8e, rewriteCss: _0xdda884, rewriteHtml: _0x4c3133, rewriteJs: _0x7490e, rewriteJsInner: _0x1f785b, rewriteSrcset: _0xd82a91, rewriteUrl: _0x31489e, rewriteWorkers: _0x650804, setWasm: _0x1b89b0, unrewriteBlob: _0x3dd7f7, unrewriteCss: _0x5f22ee, unrewriteHtml: _0x2bcb4e, unrewriteUrl: _0x42ec48, versionInfo: _0x1d0b93 } = globalThis.$scramjet;
  } }, _0x3fff4b = {};
  function _0x3fac3b(_0x1899a0) {
    var _0x21db61 = _0x3fff4b[_0x1899a0];
    if (_0x21db61 !== void 0) return _0x21db61.exports;
    var _0x58e49b = _0x3fff4b[_0x1899a0] = { exports: {} };
    return _0x4087bf[_0x1899a0](_0x58e49b, _0x58e49b.exports, _0x3fac3b), _0x58e49b.exports;
  }
  _0x3fac3b.n = (_0x202d08) => {
    var _0x10d8a0 = _0x202d08 && _0x202d08.__esModule ? () => _0x202d08.default : () => _0x202d08;
    return _0x3fac3b.d(_0x10d8a0, { a: _0x10d8a0 }), _0x10d8a0;
  }, _0x3fac3b.d = (_0x4b04a8, _0x12dce1) => {
    for (var _0x33d24c in _0x12dce1) _0x3fac3b.o(_0x12dce1, _0x33d24c) && !_0x3fac3b.o(_0x4b04a8, _0x33d24c) && Object.defineProperty(_0x4b04a8, _0x33d24c, { enumerable: !0, get: _0x12dce1[_0x33d24c] });
  }, _0x3fac3b.o = (_0x186705, _0x312a45) => Object.prototype.hasOwnProperty.call(_0x186705, _0x312a45), _0x3fac3b.r = (_0x2c77bd) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x2c77bd, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x2c77bd, "__esModule", { value: !0 });
  };
  var _0x52d198 = {};
  (() => {
    _0x3fac3b.r(_0x52d198), _0x3fac3b.d(_0x52d198, { Controller: () => _0x3c7e1f, Frame: () => _0x138572, ManagedPlugin: () => _0x2dc892, VERSION: () => _0x46f30f.x, assertRuntimeScramjetVersion: () => _0x46f30f.O, config: () => _0xb01a9b });
    var _0x77761c = _0x3fac3b(986), _0xcc1dac = _0x3fac3b(235), _0x446f74 = _0x3fac3b(805), _0x2309a3 = _0x3fac3b(423), _0x32d768 = _0x3fac3b(286), _0x46f30f = _0x3fac3b(355);
    let _0xb01a9b = { prefix: "/~/sj/", scramjetPath: "/scramjet/scramjet.js", injectPath: "/controller/controller.inject.js", wasmPath: "/scramjet/scramjet.wasm", virtualWasmPath: "scramjet.wasm.js", codec: { encode: (_0x30ca8) => _0x30ca8 && encodeURIComponent(encodeURIComponent(_0x30ca8)), decode: (_0x13cf1a) => {
      if (!_0x13cf1a) return _0x13cf1a;
      let _0x3ea079 = decodeURIComponent(_0x13cf1a);
      return /^[a-z][a-z0-9+.-]*:/i.test(_0x3ea079) ? _0x3ea079 : decodeURIComponent(_0x3ea079);
    } } }, _0x5d63c5 = { flags: { ..._0x2309a3.sb.flags, allowFailedIntercepts: !1 }, maskedfiles: ["inject.js", "scramjet.wasm.js"] };
    class _0x2dc892 extends _0x2309a3.k_ {
      frame = null;
      dependencies = [];
      constructor(_0x452523, _0x19738f) {
        super(_0x452523), this.dependencies = _0x19738f;
      }
      install(_0x35faa5) {
        this.frame = _0x35faa5;
      }
    }
    let _0x1d2420 = "state";
    function _0x3d3a4e(_0x135bf3, _0x46985b) {
      let _0x290be6 = new URL(_0x135bf3.scriptURL), _0x1250cf = new URL(_0x46985b.scriptURL);
      return _0x290be6.origin === _0x1250cf.origin && _0x290be6.pathname === _0x1250cf.pathname;
    }
    let _0x46018c = null;
    function _0x4c8809(_0x551470) {
      if (_0x551470 === void 0) return null;
      if (typeof _0x551470 != "object" || _0x551470 === null || !Number.isSafeInteger(_0x551470.updatedAt) || _0x551470.updatedAt < 0 || typeof _0x551470.cookies != "string") throw Error("Persisted Scramjet cookie state was malformed");
      return _0x551470;
    }
    function _0x416c4e(_0x18df97) {
      return new Promise((_0x29e563, _0x139bf1) => {
        _0x18df97.onsuccess = () => _0x29e563(_0x18df97.result), _0x18df97.onerror = () => _0x139bf1(_0x18df97.error ?? Error("IndexedDB request failed"));
      });
    }
    function _0x4a4399(_0x3aaa3f) {
      return new Promise((_0x2a123b, _0x33593e) => {
        _0x3aaa3f.oncomplete = () => _0x2a123b(void 0), _0x3aaa3f.onabort = () => _0x33593e(_0x3aaa3f.error ?? Error("IndexedDB transaction aborted")), _0x3aaa3f.onerror = () => _0x33593e(_0x3aaa3f.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function _0x350089() {
      return _0x46018c || (_0x46018c = new Promise((_0xd6622d, _0x2f92cc) => {
        let _0x3e8ff4 = indexedDB.open("__scramjet_controller", 1);
        _0x3e8ff4.onupgradeneeded = () => {
          let _0x2f89c5 = _0x3e8ff4.result;
          _0x2f89c5.objectStoreNames.contains(_0x1d2420) || _0x2f89c5.createObjectStore(_0x1d2420);
        }, _0x3e8ff4.onsuccess = () => _0xd6622d(_0x3e8ff4.result), _0x3e8ff4.onerror = () => _0x2f92cc(_0x3e8ff4.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function _0x55a2e4(_0x4b3545) {
      let _0x569e58 = (await _0x350089()).transaction(_0x1d2420, "readonly"), _0x20d7f2 = _0x569e58.objectStore(_0x1d2420), _0x3d0271 = _0x4a4399(_0x569e58), _0x276b8b = await _0x416c4e(_0x20d7f2.get(_0x4b3545));
      return await _0x3d0271, _0x4c8809(_0x276b8b);
    }
    async function _0x2df904(_0x5c2a4f, _0x25330e, _0x2e381a) {
      let _0x359b59 = (await _0x350089()).transaction(_0x1d2420, "readwrite"), _0x31f204 = _0x359b59.objectStore(_0x1d2420), _0x4fd135 = _0x4a4399(_0x359b59), _0x3d37e7 = _0x4c8809(await _0x416c4e(_0x31f204.get(_0x5c2a4f))), _0x4ef9ac = Math.max(_0x2e381a, _0x3d37e7?.updatedAt ?? 0) + 1;
      if (!Number.isSafeInteger(_0x4ef9ac)) throw Error("Persisted Scramjet cookie sequence was exhausted");
      return await _0x416c4e(_0x31f204.put({ updatedAt: _0x4ef9ac, cookies: _0x25330e }, _0x5c2a4f)), await _0x4fd135, _0x4ef9ac;
    }
    function _0xebf379() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x438233) => _0x438233.toString(16).padStart(2, "0")).join("");
    }
    function _0x39d5b6(_0x31f0f5) {
      let _0x2cdf2c = _0x31f0f5.contentWindow;
      if (_0x31f0f5.name && _0x2cdf2c !== null && _0x2cdf2c.name !== _0x31f0f5.name) try {
        _0x2cdf2c.name = _0x31f0f5.name;
      } catch {
      }
    }
    let _0x11b45c = (0, _0x77761c.deepmerge)();
    class _0x3c7e1f {
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
      onTabChannelMessage = (_0x215bdb) => {
        this.rpc.recieve(_0x215bdb.data);
      };
      onCookieSyncMessage = (_0x5d7bd1) => {
        let _0x1f454e = typeof _0x5d7bd1.data == "object" && _0x5d7bd1.data !== null ? _0x5d7bd1.data.updatedAt : void 0;
        typeof _0x1f454e == "number" && Number.isSafeInteger(_0x1f454e) && !(_0x1f454e < 0) && !(_0x1f454e <= this.cookieUpdatedAt) && (this.cookieSyncDirty = !0, this.loadSavedCookies().catch((_0x58aabd) => {
          this.cookieSyncDirty = !0;
        }));
      };
      onServiceWorkerMessage = async (_0x1af447) => {
        if (!this.closed && !this.closing) {
          if (_0x1af447.data?.$controller$setCookie && typeof _0x1af447.data.$controller$setCookie == "object") {
            let _0x59c50b = _0x1af447.data.$controller$setCookie;
            _0x59c50b.options?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(_0x59c50b.cookies, _0x59c50b.options), typeof _0x59c50b.id == "string" && this.serviceWorkerController.postMessage({ $sw$setCookieDone: { id: _0x59c50b.id } });
            return;
          }
          if (_0x1af447.data?.$controller$swrevive) {
            let _0x5483de = _0x1af447.data.$controller$swrevive, _0x3c8b35 = _0x1af447.source;
            if (!(_0x3c8b35 instanceof ServiceWorker) || _0x3c8b35.state === "redundant" || typeof _0x5483de.workerId != "string" || typeof _0x5483de.revivalId != "string" || !_0x3d3a4e(this.serviceWorkerController, _0x3c8b35)) return;
            this.reconnectServiceWorker(_0x3c8b35, _0x5483de.workerId, _0x5483de.revivalId).catch((_0x43ccdd) => {
            });
          }
        }
      };
      async loadScramjetWasm() {
        if (this.wasmAlreadyFetched) return;
        let _0x45750d = await fetch(this.config.wasmPath);
        (0, _0x2309a3.ht)(await _0x45750d.arrayBuffer()), this.wasmAlreadyFetched = !0;
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
          let o2 = _0x2309a3.uh.fromRawHeaders(e3.initialHeaders), s2 = await r2.fetchHandler.handleFetch({ initialHeaders: o2, rawClientUrl: e3.rawClientUrl ? new URL(e3.rawClientUrl) : void 0, rawUrl: new URL(e3.rawUrl), rawReferrer: e3.rawReferrer, rawDestination: e3.destination, rawCredentials: e3.credentials, method: e3.method, mode: e3.mode, referrer: e3.referrer, body: e3.body, cache: e3.cache, clientId: e3.clientId ?? "", ...e3.sourceClientId === void 0 ? {} : { sourceClientId: e3.sourceClientId }, ...e3.resultingClientId === void 0 ? {} : { resultingClientId: e3.resultingClientId } });
          return [{ body: s2.body, status: s2.status, statusText: s2.statusText, headers: s2.headers.toRawHeaders() }, s2.body instanceof ReadableStream || s2.body instanceof ArrayBuffer ? [s2.body] : []];
        } catch (o2) {
          let t4 = { setResponse: void 0, suppressError: !1 };
          if (await _0x2309a3.Cx.dispatch(r2.hooks.error.request, { rawrequest: e3, error: o2 }, t4), t4.suppressError, t4.setResponse) return [t4.setResponse, []];
          throw o2;
        }
      }, initRemoteTransport: async ({ port: e3 }) => {
        let t3 = new _0x446f74.C({ request: async ({ remote: e4, method: t4, body: r2, headers: o2, proxy: s2 }) => {
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
      constructor(_0x20dc27) {
        if (this.init = _0x20dc27, typeof _0x20dc27.storagePartitionKey != "string" || _0x20dc27.storagePartitionKey.length === 0) throw Error("Scramjet Controller requires a non-empty storage partition key");
        (0, _0x46f30f.O)(), this.id = _0xebf379(), this.config = _0x11b45c(_0xb01a9b, _0x20dc27.config || {}), this.scramjetConfig = _0x11b45c(_0x5d63c5, _0x2309a3.sb), this.scramjetConfig = _0x11b45c(this.scramjetConfig, _0x20dc27.scramjetConfig || {}), this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = _0x20dc27.serviceworker, this.resolvedCookieStore = _0x20dc27.cookieJar, this.storage = _0x20dc27.storage, this.cookieSyncChannel = new BroadcastChannel("__scramjet_controller_channel:" + encodeURIComponent(_0x20dc27.storagePartitionKey)), this.ready = Promise.all([new Promise((_0x5c872b, _0x507260) => {
          this.readyResolve = _0x5c872b, this.readyReject = _0x507260;
        }), this.loadScramjetWasm(), this.loadSavedCookies(!0)]).then(() => {
          if (this.closed || this.closing) throw Error("Scramjet Controller closed before becoming ready");
          this.initializationComplete = !0, this.isReady = !0;
        }), this.rpc = new _0x446f74.C(this.methods, "tabchannel-" + this.id, (_0x296dfb, _0x5c1f51) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(_0x296dfb, _0x5c1f51);
        }), this.transport = _0x20dc27.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), this.reconnectServiceWorker(this.serviceWorkerController).catch((_0x2a64b6) => {
          if (this.readyResolve === null || this.serviceWorkerReady !== null) return;
          let _0x36e6cd = this.readyReject;
          this.readyResolve = null, this.readyReject = null, _0x36e6cd?.(_0x2a64b6);
        }), navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
      setupMessagePort(_0x159237, _0x169a60, _0x27e20d) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (this.serviceWorkerReady !== null) {
          let _0x41b12d = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x41b12d.timeout), _0x41b12d.reject(Error("Scramjet Controller connection was replaced"));
        }
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        let _0xbc200b = new MessageChannel(), _0xd18d42 = _0xebf379();
        return this.port = _0xbc200b.port1, this.port.addEventListener("message", this.onTabChannelMessage), this.port.start(), new Promise((_0x24b391, _0x3e94f5) => {
          let _0x4dc87e = (_0x4e4978) => {
            _0x3e94f5(_0x4e4978);
          }, _0x3143dc = setTimeout(() => {
            this.serviceWorkerReady?.connectionId === _0xd18d42 && (this.serviceWorkerReady = null, _0x4dc87e(Error("Scramjet Controller ready acknowledgement expired")));
          }, 5e3);
          this.serviceWorkerReady = { worker: _0x159237, expectedWorkerId: _0x169a60, connectionId: _0xd18d42, resolve: () => {
            _0x24b391(void 0);
          }, reject: _0x4dc87e, timeout: _0x3143dc };
          try {
            _0x159237.postMessage({ $controller$init: { prefix: this.prefix, id: this.id, connectionId: _0xd18d42, ..._0x169a60 === void 0 ? {} : { workerId: _0x169a60 }, ..._0x27e20d === void 0 ? {} : { revivalId: _0x27e20d } } }, [_0xbc200b.port2]);
          } catch (_0x528635) {
            this.serviceWorkerReady?.connectionId === _0xd18d42 && (this.serviceWorkerReady = null), clearTimeout(_0x3143dc), _0x4dc87e(_0x528635);
          }
        });
      }
      async reconnectServiceWorker(_0x181ad9, _0x1e19e3, _0x49c7d6) {
        let _0x43ddd2 = this.serviceWorkerReconnect;
        if (_0x43ddd2 !== null && _0x43ddd2.worker === _0x181ad9 && (_0x1e19e3 === void 0 || _0x43ddd2.expectedWorkerId === _0x1e19e3)) return _0x43ddd2.promise;
        this.isReady = !1;
        let _0xf315e9 = (async () => {
          if (await this.setupMessagePort(_0x181ad9, _0x1e19e3, _0x49c7d6), this.closed || this.closing) throw Error("Scramjet Controller closed during reconnection");
          this.initializationComplete && (this.isReady = !0);
        })();
        this.serviceWorkerReconnect = { worker: _0x181ad9, expectedWorkerId: _0x1e19e3, promise: _0xf315e9 };
        try {
          return await _0xf315e9;
        } finally {
          this.serviceWorkerReconnect?.promise === _0xf315e9 && (this.serviceWorkerReconnect = null);
        }
      }
      async refreshServiceWorkerConnection() {
        let _0x1c8705 = this.serviceWorkerController, _0x84a3a3 = await navigator.serviceWorker.getRegistration(new URL(this.prefix, location.href)), _0x318037 = _0x84a3a3?.active;
        if (_0x318037 && _0x318037.state !== "redundant" && _0x3d3a4e(_0x1c8705, _0x318037) && (_0x1c8705 = _0x318037), _0x1c8705.state === "redundant") throw Error("No active Scramjet service worker is available");
        return await this.reconnectServiceWorker(_0x1c8705);
      }
      detachFromServiceWorker() {
        return new Promise((_0x33dc89, _0x1b91bc) => {
          let _0x5c14b0 = new MessageChannel(), _0x27e8fb = !1, _0x229e6b = (_0x29e5ff) => {
            if (!_0x27e8fb) {
              if (_0x27e8fb = !0, clearTimeout(_0x28b1c2), _0x5c14b0.port1.onmessage = null, _0x5c14b0.port1.onmessageerror = null, _0x5c14b0.port1.close(), _0x29e5ff) return void _0x1b91bc(_0x29e5ff);
              _0x33dc89(void 0);
            }
          }, _0x28b1c2 = setTimeout(() => {
            _0x229e6b(Error("Scramjet Controller detach was not acknowledged"));
          }, 5e3);
          _0x5c14b0.port1.onmessage = (_0x1d9763) => {
            let _0x2c17f3 = _0x1d9763.data?.$controller$detached;
            _0x2c17f3?.id !== this.id || _0x2c17f3.detached !== !0 ? _0x229e6b(Error("Scramjet Controller detach was not acknowledged")) : _0x229e6b();
          }, _0x5c14b0.port1.onmessageerror = () => {
            _0x229e6b(Error("Scramjet Controller detach acknowledgement failed"));
          };
          let _0xd8c8d5 = { id: this.id };
          try {
            this.serviceWorkerController.postMessage({ $controller$detach: _0xd8c8d5 }, [_0x5c14b0.port2]);
          } catch (_0x1047c0) {
            _0x229e6b(_0x1047c0 instanceof Error ? _0x1047c0 : Error("Scramjet Controller detach request failed"));
          }
        });
      }
      async closeLocalResources() {
        let _0x42c3fa = [], _0x48f19b = [];
        for (let _0x58e5a1 of this.frames) {
          let _0x1f47d8 = !1;
          try {
            _0x58e5a1.element[_0x32d768.I] === _0x58e5a1 && (_0x58e5a1.element.removeAttribute("srcdoc"), _0x58e5a1.element.src = "about:blank", delete _0x58e5a1.element[_0x32d768.I]);
          } catch (_0x2fd9a6) {
            _0x42c3fa.push(_0x2fd9a6), _0x1f47d8 = !0;
          }
          _0x1f47d8 && _0x48f19b.push(_0x58e5a1);
        }
        this.frames = _0x48f19b;
        let _0x5140bd = Error("Scramjet Controller closed");
        for (let _0x264797 of this.transportChannels) {
          for (let _0x28897e of _0x264797.rpc.promiseCallbacks.values()) _0x28897e.reject(_0x5140bd);
          _0x264797.rpc.promiseCallbacks.clear(), _0x264797.port.onmessage = null, _0x264797.port.onmessageerror = null;
          try {
            _0x264797.port.close();
          } catch {
          }
        }
        for (let _0x4b97c5 of (this.transportChannels.clear(), this.rpc.promiseCallbacks.values())) _0x4b97c5.reject(_0x5140bd);
        if (this.rpc.promiseCallbacks.clear(), this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        if (this.cookieSyncChannel.removeEventListener("message", this.onCookieSyncMessage), this.cookieSyncChannel.close(), navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage), this.serviceWorkerReady !== null) {
          let _0x422888 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x422888.timeout), _0x422888.reject(_0x5140bd);
        }
        if (_0x42c3fa.length > 0) throw AggregateError(_0x42c3fa, "Scramjet Controller frame teardown failed");
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
      async applyCookieSyncEntries(_0x2a1e2d, _0x47bdd4 = {}) {
        if (Array.isArray(_0x2a1e2d))
          for (let _0x4387b7 of _0x2a1e2d) typeof _0x4387b7?.url == "string" && typeof _0x4387b7.cookie == "string" && await this.cookieJar.setCookies(_0x4387b7.cookie, new URL(_0x4387b7.url), _0x47bdd4.destination === void 0);
      }
      async propagateCookieSync(_0x42e97e, _0x4cb5b5 = {}) {
        this.port && await this.rpc.call("sendSetCookie", { cookies: _0x42e97e, options: _0x4cb5b5 });
      }
      async loadSavedCookies(_0x66f8e0 = !1) {
        if (_0x66f8e0 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          if (!this.cookieJar.ownsPersistence) {
            this.cookieSyncDirty = !1;
            return;
          }
          let _0x45bf0e = await _0x55a2e4(this.init.storagePartitionKey);
          _0x45bf0e && _0x45bf0e.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(_0x45bf0e.cookies), this.cookieUpdatedAt = _0x45bf0e.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        if (!this.cookieJar.ownsPersistence) return;
        let _0x2ab13d = await _0x2df904(this.init.storagePartitionKey, this.cookieJar.dump(), this.cookieUpdatedAt);
        _0x2ab13d <= this.cookieUpdatedAt || (this.cookieUpdatedAt = _0x2ab13d, this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({ updatedAt: _0x2ab13d }));
      }
      get cookieJar() {
        let _0x40d5af = this.resolvedCookieStore;
        if (_0x40d5af !== void 0) return _0x40d5af;
        let _0x1c27a6 = (0, _0x2309a3.r5)().createCookieStore();
        return this.resolvedCookieStore = _0x1c27a6, _0x1c27a6;
      }
      setTransport(_0x4a2bb0) {
        for (let _0x5880a8 of (this.transport = _0x4a2bb0, this.frames)) _0x5880a8.controller.transport = _0x4a2bb0, _0x5880a8.fetchHandler.client.transport = _0x4a2bb0;
      }
      createFrame(_0x472ac9, _0x1241b5 = {}) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (!this.isReady) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let _0xdd0325 = new _0x138572(this, _0x472ac9 ??= document.createElement("iframe"), _0x1241b5);
        return this.frames.push(_0xdd0325), _0xdd0325;
      }
      async wait() {
        if (this.closed || this.closing || (await this.ready, this.closed || this.closing)) throw Error("Scramjet Controller is closed");
      }
    }
    class _0x138572 {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return { config: this.controller.scramjetConfig, prefix: new URL(this.prefix, location.href), cookieJar: this.controller.cookieJar, storage: this.controller.storage, storagePartitionKey: this.controller.init.storagePartitionKey, interface: { getInjectScripts: /* @__PURE__ */ (function _0x1aef39(_0xc8363c, _0x532baa, _0x583916, _0x4ec520, _0xce2b61, _0x445345, _0x3b0de9, _0x532015) {
          return (_0x29643c, _0x72af9d, _0x12ef79, _0x3e304e) => {
            var _0x2a8fb2;
            return [_0x3e304e(_0xc8363c.scramjetPath), _0x3e304e(_0x583916.href + _0xc8363c.virtualWasmPath), _0x3e304e(_0xc8363c.injectPath), _0x3e304e("data:text/javascript;charset=utf-8;base64," + (_0x2a8fb2 = `
					document.querySelectorAll("script[scramjet-injected]").forEach(script => script.remove());
					$scramjetController.load({
						config: ` + JSON.stringify(_0xc8363c) + `,
						sjconfig: ` + JSON.stringify(_0x532baa) + `,
						prefix: new URL("` + _0x583916.href + `"),
						cookies: ` + JSON.stringify(_0x4ec520.dump()) + `,
						storage: ` + JSON.stringify(_0xce2b61?.dump?.() ?? null) + `,
						storagePartitionKey: ` + JSON.stringify(_0x532015) + `,
						yieldGetInjectScripts: ` + _0x1aef39.toString() + `,
						codecEncode: ` + _0x445345.toString() + `,
						codecDecode: ` + _0x3b0de9.toString() + `,
						initHeaders: ` + JSON.stringify(_0x12ef79.headers ?? []) + `,
						history: ` + JSON.stringify(_0x12ef79.history ?? []) + `,
					})
				`, btoa(new TextEncoder().encode(_0x2a8fb2).reduce((_0x54daae, _0x1ceb95) => (_0x54daae.push(String.fromCharCode(_0x1ceb95)), _0x54daae), []).join(""))))];
          };
        })(this.controller.config, this.controller.scramjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.storage, this.controller.config.codec.encode, this.controller.config.codec.decode, this.controller.init.storagePartitionKey), getWorkerInjectScripts: (_0x14310c, _0x468446, _0x4f87f8) => {
          var _0x19cf89;
          let _0x5215b1 = "";
          return _0x5215b1 += _0x4f87f8(this.controller.config.scramjetPath), _0x5215b1 += _0x4f87f8(this.prefix + this.controller.config.virtualWasmPath), _0x5215b1 += _0x4f87f8("data:text/javascript;charset=utf-8;base64," + (_0x19cf89 = `
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
					`, btoa(new TextEncoder().encode(_0x19cf89).reduce((_0x8ee1fa, _0x1a313a) => (_0x8ee1fa.push(String.fromCharCode(_0x1a313a)), _0x8ee1fa), []).join(""))));
        }, codecEncode: this.controller.config.codec.encode, codecDecode: this.controller.config.codec.decode } };
      }
      plugins = [];
      constructor(_0x16ad5f, _0x39c2ff, _0xc452d7 = {}) {
        for (const _0x418b17 of (this.controller = _0x16ad5f, this.element = _0x39c2ff, this.options = _0xc452d7, this.id = _0xebf379(), this.prefix = this.controller.prefix + this.id + "/", _0x39d5b6(_0x39c2ff), this.plugins = _0xc452d7.plugins ?? [], this.fetchHandler = new _0x2309a3.mK({ crossOriginIsolated: self.crossOriginIsolated, context: this.context, transport: _0x16ad5f.transport, async sendSetCookie(_0x11e3ea, _0x217fea) {
          await _0x16ad5f.persistCookies(), await _0x16ad5f.propagateCookieSync(_0x11e3ea.map(({ url: _0x3af72c, cookie: _0x501c0c }) => ({ url: _0x3af72c.href, cookie: _0x501c0c })), _0x217fea);
        }, fetchBlobUrl: async (_0x3fdaa3, _0x39a64c) => _0xcc1dac.Sr.fromNativeResponse(await fetch(_0x3fdaa3, _0x39a64c)), fetchDataUrl: async (_0x1e1d3d, _0x2d6acc) => _0xcc1dac.Sr.fromNativeResponse(await fetch(_0x1e1d3d, _0x2d6acc)) }), this.hooks = { fetch: this.fetchHandler.hooks.fetch, init: _0x2309a3.Cx.create(), error: _0x2309a3.Cx.create() }, _0x39c2ff[_0x32d768.I] = this, this.plugins)) {
          for (const _0x44fa91 of _0x418b17.dependencies) if (!this.plugins.find((_0x1f0163) => _0x1f0163.name === _0x44fa91)) throw Error("Dependency " + _0x44fa91 + " not found for plugin " + _0x418b17.name);
          _0x418b17.install(this);
        }
      }
      getPlugin(_0x455e11) {
        let _0x37351b = this.plugins.find((_0x344034) => _0x344034.name === _0x455e11);
        if (!_0x37351b) throw Error("Plugin " + _0x455e11 + " not found");
        return _0x37351b;
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
      go(_0x5272f0) {
        _0x39d5b6(this.element);
        let _0x544408 = (0, _0x2309a3.Oy)(_0x5272f0, this.context, { origin: new URL(location.href), base: new URL(location.href) }, { destination: "document" });
        this.element.src = _0x544408;
      }
    }
  })(), $scramjetController = _0x52d198;
})();
