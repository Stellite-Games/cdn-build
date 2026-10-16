var $scramjetController;
(() => {
  var _0xce5f47 = { 286(_0x350ea2, _0x31726b, _0x124b13) {
    _0x124b13.d(_0x31726b, { I: () => _0x5e893a });
    let _0x5e893a = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 355(_0x2b1155, _0x4c328f, _0x50b3f8) {
    _0x50b3f8.d(_0x4c328f, { O: () => _0x175408, x: () => _0x17087c });
    let _0x17087c = "0.0.14";
    function _0x175408() {
      if (typeof $scramjet > "u") throw Error("@mercuryworkshop/scramjet is not loaded. Load scramjet before the controller.");
      var _0x58cd2c = "2.0.67-alpha.2", _0x27cd38 = $scramjet.versionInfo.version;
      if (_0x58cd2c !== _0x27cd38) throw Error("@mercuryworkshop/scramjet version mismatch: this build expects " + _0x58cd2c + ", but the loaded runtime is " + _0x27cd38);
    }
  }, 805(_0x3c538b, _0x1a0e01, _0x4433c5) {
    _0x4433c5.d(_0x1a0e01, { C: () => _0x15c0ee });
    class _0x15c0ee {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x488122, _0x552319, _0x3e7a04) {
        this.methods = _0x488122, this.id = _0x552319, this.sendRaw = _0x3e7a04;
      }
      recieve(_0x55f74f) {
        if (_0x55f74f == null || typeof _0x55f74f != "object") return;
        let _0x503314 = _0x55f74f[this.id];
        if (_0x503314 == null || typeof _0x503314 != "object") return;
        let _0x4e38f2 = _0x503314.$type;
        if (_0x4e38f2 === "response") {
          let _0x350794 = _0x503314.$token, _0xa619e3 = _0x503314.$data, _0x181266 = _0x503314.$error, _0x36ecb5 = this.promiseCallbacks.get(_0x350794);
          if (!_0x36ecb5) return;
          this.promiseCallbacks.delete(_0x350794), _0x181266 !== void 0 ? _0x36ecb5.reject(Error(_0x181266)) : _0x36ecb5.resolve(_0xa619e3);
        } else if (_0x4e38f2 === "request") {
          let _0x46b10c = _0x503314.$method, _0x2674c8 = _0x503314.$args;
          this.methods[_0x46b10c](_0x2674c8).then((_0x68e01a) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x503314.$token, $data: _0x68e01a?.[0] } }, _0x68e01a?.[1]);
          }).catch((_0x79bd66) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x503314.$token, $error: _0x79bd66?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x35a0f6, _0x52b0c4, _0x5b1d0b = []) {
        let _0x14868a = this.counter++;
        return new Promise((_0x473cf5, _0xa96f38) => {
          this.promiseCallbacks.set(_0x14868a, { resolve: _0x473cf5, reject: _0xa96f38 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x35a0f6, $args: _0x52b0c4, $token: _0x14868a } }, _0x5b1d0b);
        });
      }
    }
  }, 986(_0x15cccd) {
    let _0x3b920f = Object.getPrototypeOf({});
    function _0x39eb5a() {
      return function(_0x247433) {
        return typeof _0x247433 == "object" && _0x247433 !== null && !(_0x247433 instanceof RegExp) && !(_0x247433 instanceof Date);
      };
    }
    function _0x28273f(_0x4ac8a3) {
      function _0x341d32(_0x447143) {
        return _0x447143 !== "constructor" && _0x447143 !== "prototype" && _0x447143 !== "__proto__";
      }
      let _0x340e2f = Object.prototype.propertyIsEnumerable, _0x1c4e10 = _0x4ac8a3?.symbols ? function(_0x5d06f7) {
        let _0x3110db = Object.keys(_0x5d06f7), _0x37ffca = Object.getOwnPropertySymbols(_0x5d06f7);
        for (let _0x384d89 = 0, _0x2d41ab = _0x37ffca.length; _0x384d89 < _0x2d41ab; ++_0x384d89) _0x340e2f.call(_0x5d06f7, _0x37ffca[_0x384d89]) && _0x3110db.push(_0x37ffca[_0x384d89]);
        return _0x3110db;
      } : Object.keys, _0xcba444 = typeof _0x4ac8a3?.cloneProtoObject == "function" ? _0x4ac8a3.cloneProtoObject : void 0, _0x18a373 = typeof _0x4ac8a3?.isMergeableObject == "function" ? _0x4ac8a3.isMergeableObject : _0x39eb5a(), _0x334311 = _0x4ac8a3?.onlyDefinedProperties === !0, _0x8b7914 = _0x4ac8a3 && typeof _0x4ac8a3.mergeArray == "function" ? _0x4ac8a3.mergeArray({ clone: _0x835d5b, deepmerge: _0x3d0f28, getKeys: _0x1c4e10, isMergeableObject: _0x18a373 }) : function(_0x1d9a6a, _0x371eda) {
        let _0x30c3fa = _0x1d9a6a.length, _0x2dddf0 = _0x371eda.length, _0x184b63 = 0, _0x1b682a = Array(_0x30c3fa + _0x2dddf0);
        for (; _0x184b63 < _0x30c3fa; ++_0x184b63) _0x1b682a[_0x184b63] = _0x835d5b(_0x1d9a6a[_0x184b63]);
        for (_0x184b63 = 0; _0x184b63 < _0x2dddf0; ++_0x184b63) _0x1b682a[_0x184b63 + _0x30c3fa] = _0x835d5b(_0x371eda[_0x184b63]);
        return _0x1b682a;
      };
      function _0x835d5b(_0x543602) {
        return _0x18a373(_0x543602) ? Array.isArray(_0x543602) ? (function(_0x547a81) {
          let _0x3b43a0 = 0, _0x43ba8e = _0x547a81.length, _0x298073 = Array(_0x43ba8e);
          for (; _0x3b43a0 < _0x43ba8e; ++_0x3b43a0) _0x298073[_0x3b43a0] = _0x835d5b(_0x547a81[_0x3b43a0]);
          return _0x298073;
        })(_0x543602) : (function(_0x5d69af) {
          let _0x561d7c, _0x5b852a, _0x3c4aac, _0x1d26f4 = {};
          if (_0xcba444 && Object.getPrototypeOf(_0x5d69af) !== _0x3b920f) return _0xcba444(_0x5d69af);
          let _0x2c0e94 = _0x1c4e10(_0x5d69af);
          for (_0x561d7c = 0, _0x5b852a = _0x2c0e94.length; _0x561d7c < _0x5b852a; ++_0x561d7c) _0x341d32(_0x3c4aac = _0x2c0e94[_0x561d7c]) && (_0x1d26f4[_0x3c4aac] = _0x835d5b(_0x5d69af[_0x3c4aac]));
          return _0x1d26f4;
        })(_0x543602) : _0x543602;
      }
      function _0x3d0f28(_0x2607bd, _0xc8e698) {
        if (_0x334311 && _0xc8e698 === void 0) return _0x835d5b(_0x2607bd);
        let _0x548734 = Array.isArray(_0xc8e698), _0x562db4 = Array.isArray(_0x2607bd);
        return typeof _0xc8e698 != "object" || _0xc8e698 === null ? _0xc8e698 : _0x18a373(_0x2607bd) ? _0x548734 && _0x562db4 ? _0x8b7914(_0x2607bd, _0xc8e698) : _0x548734 !== _0x562db4 ? _0x835d5b(_0xc8e698) : (function(_0x1d518f, _0x367d3f) {
          let _0x28011c, _0x465ca6, _0x20f95a, _0x24a2b7 = {}, _0x34e1d4 = _0x1c4e10(_0x1d518f), _0x3450a6 = _0x1c4e10(_0x367d3f);
          for (_0x28011c = 0, _0x465ca6 = _0x34e1d4.length; _0x28011c < _0x465ca6; ++_0x28011c) _0x341d32(_0x20f95a = _0x34e1d4[_0x28011c]) && _0x3450a6.indexOf(_0x20f95a) === -1 && (_0x24a2b7[_0x20f95a] = _0x835d5b(_0x1d518f[_0x20f95a]));
          for (_0x28011c = 0, _0x465ca6 = _0x3450a6.length; _0x28011c < _0x465ca6; ++_0x28011c) if (_0x341d32(_0x20f95a = _0x3450a6[_0x28011c]))
            if (_0x20f95a in _0x1d518f) _0x34e1d4.indexOf(_0x20f95a) !== -1 && (_0xcba444 && _0x18a373(_0x367d3f[_0x20f95a]) && Object.getPrototypeOf(_0x367d3f[_0x20f95a]) !== _0x3b920f ? _0x24a2b7[_0x20f95a] = _0xcba444(_0x367d3f[_0x20f95a]) : _0x24a2b7[_0x20f95a] = _0x3d0f28(_0x1d518f[_0x20f95a], _0x367d3f[_0x20f95a]));
            else {
              if (_0x334311 && _0x367d3f[_0x20f95a] === void 0) continue;
              _0x24a2b7[_0x20f95a] = _0x835d5b(_0x367d3f[_0x20f95a]);
            }
          return _0x24a2b7;
        })(_0x2607bd, _0xc8e698) : _0x835d5b(_0xc8e698);
      }
      return _0x4ac8a3?.all ? function() {
        let _0x4bc18e;
        switch (arguments.length) {
          case 0:
            return {};
          case 1:
            return _0x835d5b(arguments[0]);
          case 2:
            return _0x3d0f28(arguments[0], arguments[1]);
        }
        for (let _0x2d9fa0 = 0, _0x1982d2 = arguments.length; _0x2d9fa0 < _0x1982d2; ++_0x2d9fa0) _0x4bc18e = _0x3d0f28(_0x4bc18e, arguments[_0x2d9fa0]);
        return _0x4bc18e;
      } : _0x3d0f28;
    }
    _0x15cccd.exports = _0x28273f, _0x15cccd.exports.default = _0x28273f, _0x15cccd.exports.deepmerge = _0x28273f, Object.defineProperty(_0x15cccd.exports, "isMergeableObject", { get: _0x39eb5a });
  }, 235(_0x1f23d3, _0x99a620, _0xac3499) {
    _0xac3499.d(_0x99a620, { Sr: () => _0x4c5c15 }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN;
    let _0x41771a = [101, 204, 205, 304];
    class _0x4c5c15 extends Response {
      url;
      rawHeaders;
      redirected = !1;
      static fromTransferrableResponse(_0xac29e3, _0x1496bc) {
        let _0x4a8c68 = new _0x4c5c15(_0x41771a.includes(_0xac29e3.status) ? void 0 : _0xac29e3.body, { headers: new Headers(_0xac29e3.headers), status: _0xac29e3.status, statusText: _0xac29e3.statusText });
        return _0x4a8c68.url = _0x1496bc, _0x4a8c68.redirected = _0xac29e3.status >= 300 && _0xac29e3.status < 400 && _0xac29e3.headers.location !== void 0, _0x4a8c68.rawHeaders = _0xac29e3.headers, _0x4a8c68;
      }
      static fromNativeResponse(_0x957a25) {
        let _0x4654ff = new _0x4c5c15(_0x41771a.includes(_0x957a25.status) ? void 0 : _0x957a25.body, { headers: _0x957a25.headers, status: _0x957a25.status, statusText: _0x957a25.statusText });
        return _0x4654ff.url = _0x957a25.url, _0x4654ff.rawHeaders = [..._0x957a25.headers], _0x4654ff.redirected = _0x957a25.redirected, _0x4654ff;
      }
    }
  }, 423(_0x44291a, _0x4396db, _0x253e59) {
    _0x253e59.d(_0x4396db, { Cx: () => _0x8497c9, Oy: () => _0x1acf08, ht: () => _0x5ad6a2, k_: () => _0x5024d2, mK: () => _0x3098d9, r5: () => _0x29f2cd, sb: () => _0x65998d, uh: () => _0x409057 });
    let { BareResponse: _0x18ecb3, CookieJar: _0x419e3c, IncrementalHtmlRewriter: _0x379caf, Plugin: _0x5024d2, QP: _0x4ac48c, SCRAMJETCLIENT: _0x38bfae, SCRAMJETCLIENTNAME: _0x38d32e, ScramjetClient: _0x4132cd, ScramjetFetchHandler: _0x3098d9, ScramjetFetchTrackedClient: _0x58378b, ScramjetHeaders: _0x409057, ScramjetStorageJar: _0x524470, Tap: _0x8497c9, createLocationProxy: _0x4b0acd, defaultConfig: _0x65998d, defaultConfigDev: _0x5a373f, flagEnabled: _0x57c691, getOwnPropertyDescriptorHandler: _0x208d90, getRewriter: _0x44454e, getScriptBlockTypeString: _0x3592ab, htmlRules: _0x3892b7, isArchiveMimeType: _0x377368, isAudioOrVideoMimeType: _0x300da1, isFontMimeType: _0x6408c0, isHtmlMimeType: _0x229903, isImageMimeType: _0x1503d6, isInlineDisplayableMimeType: _0x23fb8e, isJavascriptMimeType: _0x1400ac, isJavascriptMimeTypeEssenceMatch: _0x2a80e5, isModuleScriptType: _0x913d35, isScriptType: _0x1810cb, isScriptableMimeType: _0x59e627, isXmlMimeType: _0x4a3574, isZipBasedMimeType: _0x14db5c, isdedicated: _0x430afd, isshared: _0x54008c, issw: _0x4c9761, iswindow: _0x1698c3, isworker: _0x36d146, nativeProviders: _0x569fce, parseMimeType: _0x383da8, providers: _0x29f2cd, registerProviders: _0x104ef1, resetProviders: _0xd34cbe, rewriteBlob: _0x312fac, rewriteCss: _0x3a5a19, rewriteHtml: _0x3c2566, rewriteJs: _0x405efd, rewriteJsInner: _0x37f07a, rewriteSrcset: _0x300cb4, rewriteUrl: _0x1acf08, rewriteWorkers: _0x27faec, setWasm: _0x5ad6a2, unrewriteBlob: _0x38e6ed, unrewriteCss: _0x587bcd, unrewriteHtml: _0x3e747b, unrewriteUrl: _0x36785e, versionInfo: _0x5b260c } = globalThis.$scramjet;
  } }, _0xd51f0a = {};
  function _0x25a9f6(_0x30e676) {
    var _0x47f79b = _0xd51f0a[_0x30e676];
    if (_0x47f79b !== void 0) return _0x47f79b.exports;
    var _0xbc2b8a = _0xd51f0a[_0x30e676] = { exports: {} };
    return _0xce5f47[_0x30e676](_0xbc2b8a, _0xbc2b8a.exports, _0x25a9f6), _0xbc2b8a.exports;
  }
  _0x25a9f6.n = (_0x459168) => {
    var _0x530512 = _0x459168 && _0x459168.__esModule ? () => _0x459168.default : () => _0x459168;
    return _0x25a9f6.d(_0x530512, { a: _0x530512 }), _0x530512;
  }, _0x25a9f6.d = (_0x45ad68, _0x3d1573) => {
    for (var _0x1424d7 in _0x3d1573) _0x25a9f6.o(_0x3d1573, _0x1424d7) && !_0x25a9f6.o(_0x45ad68, _0x1424d7) && Object.defineProperty(_0x45ad68, _0x1424d7, { enumerable: !0, get: _0x3d1573[_0x1424d7] });
  }, _0x25a9f6.o = (_0x13a66a, _0x12faa5) => Object.prototype.hasOwnProperty.call(_0x13a66a, _0x12faa5), _0x25a9f6.r = (_0x4a0a31) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x4a0a31, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x4a0a31, "__esModule", { value: !0 });
  };
  var _0x32634a = {};
  (() => {
    _0x25a9f6.r(_0x32634a), _0x25a9f6.d(_0x32634a, { Controller: () => _0x46dbe2, Frame: () => _0x573f71, ManagedPlugin: () => _0x251604, VERSION: () => _0x50a1cd.x, assertRuntimeScramjetVersion: () => _0x50a1cd.O, config: () => _0x533819 });
    var _0x4f6130 = _0x25a9f6(986), _0x42c61c = _0x25a9f6(235), _0x94229d = _0x25a9f6(805), _0x1cc81b = _0x25a9f6(423), _0x1db45 = _0x25a9f6(286), _0x50a1cd = _0x25a9f6(355);
    let _0x533819 = { prefix: "/~/sj/", scramjetPath: "/scramjet/scramjet.js", injectPath: "/controller/controller.inject.js", wasmPath: "/scramjet/scramjet.wasm", virtualWasmPath: "scramjet.wasm.js", codec: { encode: (_0x386c3f) => _0x386c3f && encodeURIComponent(encodeURIComponent(_0x386c3f)), decode: (_0x1a66ea) => {
      if (!_0x1a66ea) return _0x1a66ea;
      let _0x5a2ed8 = decodeURIComponent(_0x1a66ea);
      return /^[a-z][a-z0-9+.-]*:/i.test(_0x5a2ed8) ? _0x5a2ed8 : decodeURIComponent(_0x5a2ed8);
    } } }, _0x50a9d7 = { flags: { ..._0x1cc81b.sb.flags, allowFailedIntercepts: !1 }, maskedfiles: ["inject.js", "scramjet.wasm.js"] };
    class _0x251604 extends _0x1cc81b.k_ {
      frame = null;
      dependencies = [];
      constructor(_0x587f15, _0x18a9ae) {
        super(_0x587f15), this.dependencies = _0x18a9ae;
      }
      install(_0x48dfb2) {
        this.frame = _0x48dfb2;
      }
    }
    let _0x1a1da9 = "state";
    function _0x3d0216(_0x4cb4ed, _0x3701d1) {
      let _0x455659 = new URL(_0x4cb4ed.scriptURL), _0x31dbfb = new URL(_0x3701d1.scriptURL);
      return _0x455659.origin === _0x31dbfb.origin && _0x455659.pathname === _0x31dbfb.pathname;
    }
    let _0x1abd71 = null;
    function _0x29848f(_0x47ef79) {
      if (_0x47ef79 === void 0) return null;
      if (typeof _0x47ef79 != "object" || _0x47ef79 === null || !Number.isSafeInteger(_0x47ef79.updatedAt) || _0x47ef79.updatedAt < 0 || typeof _0x47ef79.cookies != "string") throw Error("Persisted Scramjet cookie state was malformed");
      return _0x47ef79;
    }
    function _0x372cf6(_0x104637) {
      return new Promise((_0x2f1e01, _0x363840) => {
        _0x104637.onsuccess = () => _0x2f1e01(_0x104637.result), _0x104637.onerror = () => _0x363840(_0x104637.error ?? Error("IndexedDB request failed"));
      });
    }
    function _0x5e951e(_0x69212b) {
      return new Promise((_0x41833b, _0x4c1929) => {
        _0x69212b.oncomplete = () => _0x41833b(void 0), _0x69212b.onabort = () => _0x4c1929(_0x69212b.error ?? Error("IndexedDB transaction aborted")), _0x69212b.onerror = () => _0x4c1929(_0x69212b.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function _0x2affb3() {
      return _0x1abd71 || (_0x1abd71 = new Promise((_0x1b4f39, _0x125877) => {
        let _0x4dac36 = indexedDB.open("__scramjet_controller", 1);
        _0x4dac36.onupgradeneeded = () => {
          let _0x2b0085 = _0x4dac36.result;
          _0x2b0085.objectStoreNames.contains(_0x1a1da9) || _0x2b0085.createObjectStore(_0x1a1da9);
        }, _0x4dac36.onsuccess = () => _0x1b4f39(_0x4dac36.result), _0x4dac36.onerror = () => _0x125877(_0x4dac36.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function _0x15a4a3(_0x1ed349) {
      let _0x4bd262 = (await _0x2affb3()).transaction(_0x1a1da9, "readonly"), _0x5d0b04 = _0x4bd262.objectStore(_0x1a1da9), _0x14f248 = _0x5e951e(_0x4bd262), _0x3dfa67 = await _0x372cf6(_0x5d0b04.get(_0x1ed349));
      return await _0x14f248, _0x29848f(_0x3dfa67);
    }
    async function _0x5c35e4(_0x400bb7, _0x2b0d2e, _0x32d929) {
      let _0x35e623 = (await _0x2affb3()).transaction(_0x1a1da9, "readwrite"), _0x258b57 = _0x35e623.objectStore(_0x1a1da9), _0x54ed3f = _0x5e951e(_0x35e623), _0x528d34 = _0x29848f(await _0x372cf6(_0x258b57.get(_0x400bb7))), _0x4c8ec4 = Math.max(_0x32d929, _0x528d34?.updatedAt ?? 0) + 1;
      if (!Number.isSafeInteger(_0x4c8ec4)) throw Error("Persisted Scramjet cookie sequence was exhausted");
      return await _0x372cf6(_0x258b57.put({ updatedAt: _0x4c8ec4, cookies: _0x2b0d2e }, _0x400bb7)), await _0x54ed3f, _0x4c8ec4;
    }
    function _0x217fe3() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x14d1bd) => _0x14d1bd.toString(16).padStart(2, "0")).join("");
    }
    function _0x26e637(_0x29a48c) {
      let _0x3de343 = _0x29a48c.contentWindow;
      if (_0x29a48c.name && _0x3de343 !== null && _0x3de343.name !== _0x29a48c.name) try {
        _0x3de343.name = _0x29a48c.name;
      } catch {
      }
    }
    let _0x53d099 = (0, _0x4f6130.deepmerge)();
    class _0x46dbe2 {
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
      onTabChannelMessage = (_0xab0a04) => {
        this.rpc.recieve(_0xab0a04.data);
      };
      onCookieSyncMessage = (_0x5871d1) => {
        let _0x125225 = typeof _0x5871d1.data == "object" && _0x5871d1.data !== null ? _0x5871d1.data.updatedAt : void 0;
        typeof _0x125225 == "number" && Number.isSafeInteger(_0x125225) && !(_0x125225 < 0) && !(_0x125225 <= this.cookieUpdatedAt) && (this.cookieSyncDirty = !0, this.loadSavedCookies().catch((_0x4a0ba0) => {
          this.cookieSyncDirty = !0;
        }));
      };
      onServiceWorkerMessage = async (_0x3a4db6) => {
        if (!this.closed && !this.closing) {
          if (_0x3a4db6.data?.$controller$setCookie && typeof _0x3a4db6.data.$controller$setCookie == "object") {
            let _0x38460d = _0x3a4db6.data.$controller$setCookie;
            _0x38460d.options?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(_0x38460d.cookies, _0x38460d.options), typeof _0x38460d.id == "string" && this.serviceWorkerController.postMessage({ $sw$setCookieDone: { id: _0x38460d.id } });
            return;
          }
          if (_0x3a4db6.data?.$controller$swrevive) {
            let _0x466956 = _0x3a4db6.data.$controller$swrevive, _0x5a2efd = _0x3a4db6.source;
            if (!(_0x5a2efd instanceof ServiceWorker) || _0x5a2efd.state === "redundant" || typeof _0x466956.workerId != "string" || typeof _0x466956.revivalId != "string" || !_0x3d0216(this.serviceWorkerController, _0x5a2efd)) return;
            this.reconnectServiceWorker(_0x5a2efd, _0x466956.workerId, _0x466956.revivalId).catch((_0x172b4e) => {
            });
          }
        }
      };
      async loadScramjetWasm() {
        if (this.wasmAlreadyFetched) return;
        let _0x39d246 = await fetch(this.config.wasmPath);
        (0, _0x1cc81b.ht)(await _0x39d246.arrayBuffer()), this.wasmAlreadyFetched = !0;
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
          let o2 = _0x1cc81b.uh.fromRawHeaders(e3.initialHeaders), s2 = await r2.fetchHandler.handleFetch({ initialHeaders: o2, rawClientUrl: e3.rawClientUrl ? new URL(e3.rawClientUrl) : void 0, rawUrl: new URL(e3.rawUrl), rawReferrer: e3.rawReferrer, rawDestination: e3.destination, rawCredentials: e3.credentials, method: e3.method, mode: e3.mode, referrer: e3.referrer, body: e3.body, cache: e3.cache, clientId: e3.clientId ?? "", ...e3.sourceClientId === void 0 ? {} : { sourceClientId: e3.sourceClientId }, ...e3.resultingClientId === void 0 ? {} : { resultingClientId: e3.resultingClientId } });
          return [{ body: s2.body, status: s2.status, statusText: s2.statusText, headers: s2.headers.toRawHeaders() }, s2.body instanceof ReadableStream || s2.body instanceof ArrayBuffer ? [s2.body] : []];
        } catch (o2) {
          let t4 = { setResponse: void 0, suppressError: !1 };
          if (await _0x1cc81b.Cx.dispatch(r2.hooks.error.request, { rawrequest: e3, error: o2 }, t4), t4.suppressError, t4.setResponse) return [t4.setResponse, []];
          throw o2;
        }
      }, initRemoteTransport: async ({ port: e3 }) => {
        let t3 = new _0x94229d.C({ request: async ({ remote: e4, method: t4, body: r2, headers: o2, proxy: s2 }) => {
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
      constructor(_0x9e7a21) {
        if (this.init = _0x9e7a21, typeof _0x9e7a21.storagePartitionKey != "string" || _0x9e7a21.storagePartitionKey.length === 0) throw Error("Scramjet Controller requires a non-empty storage partition key");
        (0, _0x50a1cd.O)(), this.id = _0x217fe3(), this.config = _0x53d099(_0x533819, _0x9e7a21.config || {}), this.scramjetConfig = _0x53d099(_0x50a9d7, _0x1cc81b.sb), this.scramjetConfig = _0x53d099(this.scramjetConfig, _0x9e7a21.scramjetConfig || {}), this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = _0x9e7a21.serviceworker, this.resolvedCookieStore = _0x9e7a21.cookieJar, this.storage = _0x9e7a21.storage, this.cookieSyncChannel = new BroadcastChannel("__scramjet_controller_channel:" + encodeURIComponent(_0x9e7a21.storagePartitionKey)), this.ready = Promise.all([new Promise((_0x341843, _0xdd04cb) => {
          this.readyResolve = _0x341843, this.readyReject = _0xdd04cb;
        }), this.loadScramjetWasm(), this.loadSavedCookies(!0)]).then(() => {
          if (this.closed || this.closing) throw Error("Scramjet Controller closed before becoming ready");
          this.initializationComplete = !0, this.isReady = !0;
        }), this.rpc = new _0x94229d.C(this.methods, "tabchannel-" + this.id, (_0xb5952b, _0x353e0c) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(_0xb5952b, _0x353e0c);
        }), this.transport = _0x9e7a21.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), this.reconnectServiceWorker(this.serviceWorkerController).catch((_0x1f52e8) => {
          if (this.readyResolve === null || this.serviceWorkerReady !== null) return;
          let _0x43b618 = this.readyReject;
          this.readyResolve = null, this.readyReject = null, _0x43b618?.(_0x1f52e8);
        }), navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
      setupMessagePort(_0x5916b4, _0x33e254, _0x1430cd) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (this.serviceWorkerReady !== null) {
          let _0x522bd9 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x522bd9.timeout), _0x522bd9.reject(Error("Scramjet Controller connection was replaced"));
        }
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        let _0x441f7e = new MessageChannel(), _0xf93bd0 = _0x217fe3();
        return this.port = _0x441f7e.port1, this.port.addEventListener("message", this.onTabChannelMessage), this.port.start(), new Promise((_0x2e29b2, _0x31d19c) => {
          let _0x1ffab7 = (_0x3b1b45) => {
            _0x31d19c(_0x3b1b45);
          }, _0x19687a = setTimeout(() => {
            this.serviceWorkerReady?.connectionId === _0xf93bd0 && (this.serviceWorkerReady = null, _0x1ffab7(Error("Scramjet Controller ready acknowledgement expired")));
          }, 5e3);
          this.serviceWorkerReady = { worker: _0x5916b4, expectedWorkerId: _0x33e254, connectionId: _0xf93bd0, resolve: () => {
            _0x2e29b2(void 0);
          }, reject: _0x1ffab7, timeout: _0x19687a };
          try {
            _0x5916b4.postMessage({ $controller$init: { prefix: this.prefix, id: this.id, connectionId: _0xf93bd0, ..._0x33e254 === void 0 ? {} : { workerId: _0x33e254 }, ..._0x1430cd === void 0 ? {} : { revivalId: _0x1430cd } } }, [_0x441f7e.port2]);
          } catch (_0x147a2a) {
            this.serviceWorkerReady?.connectionId === _0xf93bd0 && (this.serviceWorkerReady = null), clearTimeout(_0x19687a), _0x1ffab7(_0x147a2a);
          }
        });
      }
      async reconnectServiceWorker(_0x34a5aa, _0x1653e2, _0x344b6b) {
        let _0x544682 = this.serviceWorkerReconnect;
        if (_0x544682 !== null && _0x544682.worker === _0x34a5aa && (_0x1653e2 === void 0 || _0x544682.expectedWorkerId === _0x1653e2)) return _0x544682.promise;
        this.isReady = !1;
        let _0x1761b5 = (async () => {
          if (await this.setupMessagePort(_0x34a5aa, _0x1653e2, _0x344b6b), this.closed || this.closing) throw Error("Scramjet Controller closed during reconnection");
          this.initializationComplete && (this.isReady = !0);
        })();
        this.serviceWorkerReconnect = { worker: _0x34a5aa, expectedWorkerId: _0x1653e2, promise: _0x1761b5 };
        try {
          return await _0x1761b5;
        } finally {
          this.serviceWorkerReconnect?.promise === _0x1761b5 && (this.serviceWorkerReconnect = null);
        }
      }
      async refreshServiceWorkerConnection() {
        let _0xe72876 = this.serviceWorkerController, _0x2625d3 = await navigator.serviceWorker.getRegistration(new URL(this.prefix, location.href)), _0x5d23dc = _0x2625d3?.active;
        if (_0x5d23dc && _0x5d23dc.state !== "redundant" && _0x3d0216(_0xe72876, _0x5d23dc) && (_0xe72876 = _0x5d23dc), _0xe72876.state === "redundant") throw Error("No active Scramjet service worker is available");
        return await this.reconnectServiceWorker(_0xe72876);
      }
      detachFromServiceWorker() {
        return new Promise((_0x4bebf1, _0x52f961) => {
          let _0x8741d7 = new MessageChannel(), _0x52815d = !1, _0xb729b3 = (_0x3fd353) => {
            if (!_0x52815d) {
              if (_0x52815d = !0, clearTimeout(_0x52ec1e), _0x8741d7.port1.onmessage = null, _0x8741d7.port1.onmessageerror = null, _0x8741d7.port1.close(), _0x3fd353) return void _0x52f961(_0x3fd353);
              _0x4bebf1(void 0);
            }
          }, _0x52ec1e = setTimeout(() => {
            _0xb729b3(Error("Scramjet Controller detach was not acknowledged"));
          }, 5e3);
          _0x8741d7.port1.onmessage = (_0x2ebf75) => {
            let _0x1e6dbd = _0x2ebf75.data?.$controller$detached;
            _0x1e6dbd?.id !== this.id || _0x1e6dbd.detached !== !0 ? _0xb729b3(Error("Scramjet Controller detach was not acknowledged")) : _0xb729b3();
          }, _0x8741d7.port1.onmessageerror = () => {
            _0xb729b3(Error("Scramjet Controller detach acknowledgement failed"));
          };
          let _0x4c8733 = { id: this.id };
          try {
            this.serviceWorkerController.postMessage({ $controller$detach: _0x4c8733 }, [_0x8741d7.port2]);
          } catch (_0x2643d6) {
            _0xb729b3(_0x2643d6 instanceof Error ? _0x2643d6 : Error("Scramjet Controller detach request failed"));
          }
        });
      }
      async closeLocalResources() {
        let _0x228408 = [], _0x26e0e9 = [];
        for (let _0x37b847 of this.frames) {
          let _0xee898b = !1;
          try {
            _0x37b847.element[_0x1db45.I] === _0x37b847 && (_0x37b847.element.removeAttribute("srcdoc"), _0x37b847.element.src = "about:blank", delete _0x37b847.element[_0x1db45.I]);
          } catch (_0x437e4b) {
            _0x228408.push(_0x437e4b), _0xee898b = !0;
          }
          _0xee898b && _0x26e0e9.push(_0x37b847);
        }
        this.frames = _0x26e0e9;
        let _0x5c7e8b = Error("Scramjet Controller closed");
        for (let _0x46bee3 of this.transportChannels) {
          for (let _0x5310de of _0x46bee3.rpc.promiseCallbacks.values()) _0x5310de.reject(_0x5c7e8b);
          _0x46bee3.rpc.promiseCallbacks.clear(), _0x46bee3.port.onmessage = null, _0x46bee3.port.onmessageerror = null;
          try {
            _0x46bee3.port.close();
          } catch {
          }
        }
        for (let _0x368dd7 of (this.transportChannels.clear(), this.rpc.promiseCallbacks.values())) _0x368dd7.reject(_0x5c7e8b);
        if (this.rpc.promiseCallbacks.clear(), this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        if (this.cookieSyncChannel.removeEventListener("message", this.onCookieSyncMessage), this.cookieSyncChannel.close(), navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage), this.serviceWorkerReady !== null) {
          let _0x295ce2 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x295ce2.timeout), _0x295ce2.reject(_0x5c7e8b);
        }
        if (_0x228408.length > 0) throw AggregateError(_0x228408, "Scramjet Controller frame teardown failed");
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
      async applyCookieSyncEntries(_0x34f43c, _0x379aec = {}) {
        if (Array.isArray(_0x34f43c))
          for (let _0xe7c733 of _0x34f43c) typeof _0xe7c733?.url == "string" && typeof _0xe7c733.cookie == "string" && await this.cookieJar.setCookies(_0xe7c733.cookie, new URL(_0xe7c733.url), _0x379aec.destination === void 0);
      }
      async propagateCookieSync(_0x2ccaa6, _0x5e9fd2 = {}) {
        this.port && await this.rpc.call("sendSetCookie", { cookies: _0x2ccaa6, options: _0x5e9fd2 });
      }
      async loadSavedCookies(_0xd9f641 = !1) {
        if (_0xd9f641 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          if (!this.cookieJar.ownsPersistence) {
            this.cookieSyncDirty = !1;
            return;
          }
          let _0x50ee17 = await _0x15a4a3(this.init.storagePartitionKey);
          _0x50ee17 && _0x50ee17.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(_0x50ee17.cookies), this.cookieUpdatedAt = _0x50ee17.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        if (!this.cookieJar.ownsPersistence) return;
        let _0x41691d = await _0x5c35e4(this.init.storagePartitionKey, this.cookieJar.dump(), this.cookieUpdatedAt);
        _0x41691d <= this.cookieUpdatedAt || (this.cookieUpdatedAt = _0x41691d, this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({ updatedAt: _0x41691d }));
      }
      get cookieJar() {
        let _0x5b3730 = this.resolvedCookieStore;
        if (_0x5b3730 !== void 0) return _0x5b3730;
        let _0x4ecb83 = (0, _0x1cc81b.r5)().createCookieStore();
        return this.resolvedCookieStore = _0x4ecb83, _0x4ecb83;
      }
      setTransport(_0x2be0a4) {
        for (let _0x216e83 of (this.transport = _0x2be0a4, this.frames)) _0x216e83.controller.transport = _0x2be0a4, _0x216e83.fetchHandler.client.transport = _0x2be0a4;
      }
      createFrame(_0x225aed, _0xf11ab4 = {}) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (!this.isReady) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let _0x3cd217 = new _0x573f71(this, _0x225aed ??= document.createElement("iframe"), _0xf11ab4);
        return this.frames.push(_0x3cd217), _0x3cd217;
      }
      async wait() {
        if (this.closed || this.closing || (await this.ready, this.closed || this.closing)) throw Error("Scramjet Controller is closed");
      }
    }
    class _0x573f71 {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return { config: this.controller.scramjetConfig, prefix: new URL(this.prefix, location.href), cookieJar: this.controller.cookieJar, storage: this.controller.storage, storagePartitionKey: this.controller.init.storagePartitionKey, interface: { getInjectScripts: /* @__PURE__ */ (function _0xe86d0d(_0x56708c, _0x3fa458, _0x5515c2, _0x1d8710, _0x1506a9, _0x245732, _0x2ec902, _0x35167f) {
          return (_0x5ab998, _0x8c2f3b, _0x44acb4, _0x228224) => {
            var _0x9725c4;
            return [_0x228224(_0x56708c.scramjetPath), _0x228224(_0x5515c2.href + _0x56708c.virtualWasmPath), _0x228224(_0x56708c.injectPath), _0x228224("data:text/javascript;charset=utf-8;base64," + (_0x9725c4 = `
					document.querySelectorAll("script[scramjet-injected]").forEach(script => script.remove());
					$scramjetController.load({
						config: ` + JSON.stringify(_0x56708c) + `,
						sjconfig: ` + JSON.stringify(_0x3fa458) + `,
						prefix: new URL("` + _0x5515c2.href + `"),
						cookies: ` + JSON.stringify(_0x1d8710.dump()) + `,
						storage: ` + JSON.stringify(_0x1506a9?.dump?.() ?? null) + `,
						storagePartitionKey: ` + JSON.stringify(_0x35167f) + `,
						yieldGetInjectScripts: ` + _0xe86d0d.toString() + `,
						codecEncode: ` + _0x245732.toString() + `,
						codecDecode: ` + _0x2ec902.toString() + `,
						initHeaders: ` + JSON.stringify(_0x44acb4.headers ?? []) + `,
						history: ` + JSON.stringify(_0x44acb4.history ?? []) + `,
					})
				`, btoa(new TextEncoder().encode(_0x9725c4).reduce((_0x22955e, _0x2fee74) => (_0x22955e.push(String.fromCharCode(_0x2fee74)), _0x22955e), []).join(""))))];
          };
        })(this.controller.config, this.controller.scramjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.storage, this.controller.config.codec.encode, this.controller.config.codec.decode, this.controller.init.storagePartitionKey), getWorkerInjectScripts: (_0x414f05, _0x523f2b, _0x53f7ef) => {
          var _0x24d77a;
          let _0x2eacfe = "";
          return _0x2eacfe += _0x53f7ef(this.controller.config.scramjetPath), _0x2eacfe += _0x53f7ef(this.prefix + this.controller.config.virtualWasmPath), _0x2eacfe += _0x53f7ef("data:text/javascript;charset=utf-8;base64," + (_0x24d77a = `
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
					`, btoa(new TextEncoder().encode(_0x24d77a).reduce((_0x1ada38, _0x3f8c8f) => (_0x1ada38.push(String.fromCharCode(_0x3f8c8f)), _0x1ada38), []).join(""))));
        }, codecEncode: this.controller.config.codec.encode, codecDecode: this.controller.config.codec.decode } };
      }
      plugins = [];
      constructor(_0x44beb4, _0x5e09be, _0x1baa23 = {}) {
        for (const _0x4aab86 of (this.controller = _0x44beb4, this.element = _0x5e09be, this.options = _0x1baa23, this.id = _0x217fe3(), this.prefix = this.controller.prefix + this.id + "/", _0x26e637(_0x5e09be), this.plugins = _0x1baa23.plugins ?? [], this.fetchHandler = new _0x1cc81b.mK({ crossOriginIsolated: self.crossOriginIsolated, context: this.context, transport: _0x44beb4.transport, async sendSetCookie(_0x2eccfb, _0x474ca5) {
          await _0x44beb4.persistCookies(), await _0x44beb4.propagateCookieSync(_0x2eccfb.map(({ url: _0x2253f9, cookie: _0x3532ca }) => ({ url: _0x2253f9.href, cookie: _0x3532ca })), _0x474ca5);
        }, fetchBlobUrl: async (_0x5c7e6c, _0x532710) => _0x42c61c.Sr.fromNativeResponse(await fetch(_0x5c7e6c, _0x532710)), fetchDataUrl: async (_0x7cf2a1, _0xcb4cb0) => _0x42c61c.Sr.fromNativeResponse(await fetch(_0x7cf2a1, _0xcb4cb0)) }), this.hooks = { fetch: this.fetchHandler.hooks.fetch, init: _0x1cc81b.Cx.create(), error: _0x1cc81b.Cx.create() }, _0x5e09be[_0x1db45.I] = this, this.plugins)) {
          for (const _0x227e62 of _0x4aab86.dependencies) if (!this.plugins.find((_0x49346e) => _0x49346e.name === _0x227e62)) throw Error("Dependency " + _0x227e62 + " not found for plugin " + _0x4aab86.name);
          _0x4aab86.install(this);
        }
      }
      getPlugin(_0x4c459d) {
        let _0xd97ca1 = this.plugins.find((_0x330198) => _0x330198.name === _0x4c459d);
        if (!_0xd97ca1) throw Error("Plugin " + _0x4c459d + " not found");
        return _0xd97ca1;
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
      go(_0x2e0261) {
        _0x26e637(this.element);
        let _0x1d69a2 = (0, _0x1cc81b.Oy)(_0x2e0261, this.context, { origin: new URL(location.href), base: new URL(location.href) }, { destination: "document" });
        this.element.src = _0x1d69a2;
      }
    }
  })(), $scramjetController = _0x32634a;
})();
