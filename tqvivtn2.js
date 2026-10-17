var $scramjetController;
(() => {
  var _0x362063 = { 286(_0x3a18a6, _0x4f398f, _0x168bbc) {
    _0x168bbc.d(_0x4f398f, { I: () => _0x21ec91 });
    let _0x21ec91 = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 355(_0x568368, _0x5a2730, _0x3eb114) {
    _0x3eb114.d(_0x5a2730, { O: () => _0x40b7b6, x: () => _0x519830 });
    let _0x519830 = "0.0.14";
    function _0x40b7b6() {
      if (typeof $scramjet > "u") throw Error("@mercuryworkshop/scramjet is not loaded. Load scramjet before the controller.");
      var _0x37adcb = "2.0.67-alpha.2", _0xf84ec7 = $scramjet.versionInfo.version;
      if (_0x37adcb !== _0xf84ec7) throw Error("@mercuryworkshop/scramjet version mismatch: this build expects " + _0x37adcb + ", but the loaded runtime is " + _0xf84ec7);
    }
  }, 805(_0x5685ad, _0x144a85, _0x4f6213) {
    _0x4f6213.d(_0x144a85, { C: () => _0x2fff77 });
    class _0x2fff77 {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x56daad, _0xfb4fda, _0x248c76) {
        this.methods = _0x56daad, this.id = _0xfb4fda, this.sendRaw = _0x248c76;
      }
      recieve(_0x39e2f8) {
        if (_0x39e2f8 == null || typeof _0x39e2f8 != "object") return;
        let _0x41a183 = _0x39e2f8[this.id];
        if (_0x41a183 == null || typeof _0x41a183 != "object") return;
        let _0x1e719e = _0x41a183.$type;
        if (_0x1e719e === "response") {
          let _0x1e04f7 = _0x41a183.$token, _0x48433e = _0x41a183.$data, _0x5a5b08 = _0x41a183.$error, _0x4c097c = this.promiseCallbacks.get(_0x1e04f7);
          if (!_0x4c097c) return;
          this.promiseCallbacks.delete(_0x1e04f7), _0x5a5b08 !== void 0 ? _0x4c097c.reject(Error(_0x5a5b08)) : _0x4c097c.resolve(_0x48433e);
        } else if (_0x1e719e === "request") {
          let _0x531540 = _0x41a183.$method, _0x166728 = _0x41a183.$args;
          this.methods[_0x531540](_0x166728).then((_0x1352dc) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x41a183.$token, $data: _0x1352dc?.[0] } }, _0x1352dc?.[1]);
          }).catch((_0x17d143) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x41a183.$token, $error: _0x17d143?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x61cc13, _0x56d954, _0x5521d8 = []) {
        let _0x425115 = this.counter++;
        return new Promise((_0x5143a6, _0x175d3c) => {
          this.promiseCallbacks.set(_0x425115, { resolve: _0x5143a6, reject: _0x175d3c }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x61cc13, $args: _0x56d954, $token: _0x425115 } }, _0x5521d8);
        });
      }
    }
  }, 986(_0x2dbaec) {
    let _0x108d92 = Object.getPrototypeOf({});
    function _0x1f43d9() {
      return function(_0x2d21a3) {
        return typeof _0x2d21a3 == "object" && _0x2d21a3 !== null && !(_0x2d21a3 instanceof RegExp) && !(_0x2d21a3 instanceof Date);
      };
    }
    function _0x46bf07(_0x39b6a6) {
      function _0x2118dd(_0x324e6f) {
        return _0x324e6f !== "constructor" && _0x324e6f !== "prototype" && _0x324e6f !== "__proto__";
      }
      let _0xc2ed71 = Object.prototype.propertyIsEnumerable, _0x53a892 = _0x39b6a6?.symbols ? function(_0x368884) {
        let _0x3d8df1 = Object.keys(_0x368884), _0x3b8c9c = Object.getOwnPropertySymbols(_0x368884);
        for (let _0x5aab2d = 0, _0x138856 = _0x3b8c9c.length; _0x5aab2d < _0x138856; ++_0x5aab2d) _0xc2ed71.call(_0x368884, _0x3b8c9c[_0x5aab2d]) && _0x3d8df1.push(_0x3b8c9c[_0x5aab2d]);
        return _0x3d8df1;
      } : Object.keys, _0xc9787d = typeof _0x39b6a6?.cloneProtoObject == "function" ? _0x39b6a6.cloneProtoObject : void 0, _0x2b474b = typeof _0x39b6a6?.isMergeableObject == "function" ? _0x39b6a6.isMergeableObject : _0x1f43d9(), _0x38f01b = _0x39b6a6?.onlyDefinedProperties === !0, _0x1a471b = _0x39b6a6 && typeof _0x39b6a6.mergeArray == "function" ? _0x39b6a6.mergeArray({ clone: _0xb0baca, deepmerge: _0x55c6bd, getKeys: _0x53a892, isMergeableObject: _0x2b474b }) : function(_0x258cd7, _0x573717) {
        let _0x24ddd2 = _0x258cd7.length, _0x1707ee = _0x573717.length, _0x301dd5 = 0, _0x21788c = Array(_0x24ddd2 + _0x1707ee);
        for (; _0x301dd5 < _0x24ddd2; ++_0x301dd5) _0x21788c[_0x301dd5] = _0xb0baca(_0x258cd7[_0x301dd5]);
        for (_0x301dd5 = 0; _0x301dd5 < _0x1707ee; ++_0x301dd5) _0x21788c[_0x301dd5 + _0x24ddd2] = _0xb0baca(_0x573717[_0x301dd5]);
        return _0x21788c;
      };
      function _0xb0baca(_0x4b407d) {
        return _0x2b474b(_0x4b407d) ? Array.isArray(_0x4b407d) ? (function(_0x33fe33) {
          let _0x11ed20 = 0, _0x54eaf9 = _0x33fe33.length, _0x1ae984 = Array(_0x54eaf9);
          for (; _0x11ed20 < _0x54eaf9; ++_0x11ed20) _0x1ae984[_0x11ed20] = _0xb0baca(_0x33fe33[_0x11ed20]);
          return _0x1ae984;
        })(_0x4b407d) : (function(_0x3b6e23) {
          let _0x2dd7c8, _0x19cb58, _0x3066b1, _0x2d95e3 = {};
          if (_0xc9787d && Object.getPrototypeOf(_0x3b6e23) !== _0x108d92) return _0xc9787d(_0x3b6e23);
          let _0x21f9ac = _0x53a892(_0x3b6e23);
          for (_0x2dd7c8 = 0, _0x19cb58 = _0x21f9ac.length; _0x2dd7c8 < _0x19cb58; ++_0x2dd7c8) _0x2118dd(_0x3066b1 = _0x21f9ac[_0x2dd7c8]) && (_0x2d95e3[_0x3066b1] = _0xb0baca(_0x3b6e23[_0x3066b1]));
          return _0x2d95e3;
        })(_0x4b407d) : _0x4b407d;
      }
      function _0x55c6bd(_0x1fe10b, _0x1c7fe3) {
        if (_0x38f01b && _0x1c7fe3 === void 0) return _0xb0baca(_0x1fe10b);
        let _0x350fe8 = Array.isArray(_0x1c7fe3), _0xc7dab = Array.isArray(_0x1fe10b);
        return typeof _0x1c7fe3 != "object" || _0x1c7fe3 === null ? _0x1c7fe3 : _0x2b474b(_0x1fe10b) ? _0x350fe8 && _0xc7dab ? _0x1a471b(_0x1fe10b, _0x1c7fe3) : _0x350fe8 !== _0xc7dab ? _0xb0baca(_0x1c7fe3) : (function(_0x4729db, _0x4a9803) {
          let _0x23207c, _0x5b75c9, _0x595ee2, _0x11251d = {}, _0x31c554 = _0x53a892(_0x4729db), _0x26bfb5 = _0x53a892(_0x4a9803);
          for (_0x23207c = 0, _0x5b75c9 = _0x31c554.length; _0x23207c < _0x5b75c9; ++_0x23207c) _0x2118dd(_0x595ee2 = _0x31c554[_0x23207c]) && _0x26bfb5.indexOf(_0x595ee2) === -1 && (_0x11251d[_0x595ee2] = _0xb0baca(_0x4729db[_0x595ee2]));
          for (_0x23207c = 0, _0x5b75c9 = _0x26bfb5.length; _0x23207c < _0x5b75c9; ++_0x23207c) if (_0x2118dd(_0x595ee2 = _0x26bfb5[_0x23207c]))
            if (_0x595ee2 in _0x4729db) _0x31c554.indexOf(_0x595ee2) !== -1 && (_0xc9787d && _0x2b474b(_0x4a9803[_0x595ee2]) && Object.getPrototypeOf(_0x4a9803[_0x595ee2]) !== _0x108d92 ? _0x11251d[_0x595ee2] = _0xc9787d(_0x4a9803[_0x595ee2]) : _0x11251d[_0x595ee2] = _0x55c6bd(_0x4729db[_0x595ee2], _0x4a9803[_0x595ee2]));
            else {
              if (_0x38f01b && _0x4a9803[_0x595ee2] === void 0) continue;
              _0x11251d[_0x595ee2] = _0xb0baca(_0x4a9803[_0x595ee2]);
            }
          return _0x11251d;
        })(_0x1fe10b, _0x1c7fe3) : _0xb0baca(_0x1c7fe3);
      }
      return _0x39b6a6?.all ? function() {
        let _0x4c9ced;
        switch (arguments.length) {
          case 0:
            return {};
          case 1:
            return _0xb0baca(arguments[0]);
          case 2:
            return _0x55c6bd(arguments[0], arguments[1]);
        }
        for (let _0x10cb49 = 0, _0x4c7ce6 = arguments.length; _0x10cb49 < _0x4c7ce6; ++_0x10cb49) _0x4c9ced = _0x55c6bd(_0x4c9ced, arguments[_0x10cb49]);
        return _0x4c9ced;
      } : _0x55c6bd;
    }
    _0x2dbaec.exports = _0x46bf07, _0x2dbaec.exports.default = _0x46bf07, _0x2dbaec.exports.deepmerge = _0x46bf07, Object.defineProperty(_0x2dbaec.exports, "isMergeableObject", { get: _0x1f43d9 });
  }, 235(_0x58519c, _0x49e09a, _0x458d05) {
    _0x458d05.d(_0x49e09a, { Sr: () => _0x293f37 }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN;
    let _0x12928a = [101, 204, 205, 304];
    class _0x293f37 extends Response {
      url;
      rawHeaders;
      redirected = !1;
      static fromTransferrableResponse(_0x391f24, _0x548ec6) {
        let _0x4f3419 = new _0x293f37(_0x12928a.includes(_0x391f24.status) ? void 0 : _0x391f24.body, { headers: new Headers(_0x391f24.headers), status: _0x391f24.status, statusText: _0x391f24.statusText });
        return _0x4f3419.url = _0x548ec6, _0x4f3419.redirected = _0x391f24.status >= 300 && _0x391f24.status < 400 && _0x391f24.headers.location !== void 0, _0x4f3419.rawHeaders = _0x391f24.headers, _0x4f3419;
      }
      static fromNativeResponse(_0x243431) {
        let _0x5c744f = new _0x293f37(_0x12928a.includes(_0x243431.status) ? void 0 : _0x243431.body, { headers: _0x243431.headers, status: _0x243431.status, statusText: _0x243431.statusText });
        return _0x5c744f.url = _0x243431.url, _0x5c744f.rawHeaders = [..._0x243431.headers], _0x5c744f.redirected = _0x243431.redirected, _0x5c744f;
      }
    }
  }, 423(_0x34e2ae, _0x31f265, _0x163a66) {
    _0x163a66.d(_0x31f265, { Cx: () => _0x4cbade, Oy: () => _0x1ac189, ht: () => _0x460c0c, k_: () => _0x3918f5, mK: () => _0x14f623, r5: () => _0x476ed1, sb: () => _0x1e7662, uh: () => _0x390531 });
    let { BareResponse: _0x2c5287, CookieJar: _0x439c6e, IncrementalHtmlRewriter: _0x4dd161, Plugin: _0x3918f5, QP: _0xe6b827, SCRAMJETCLIENT: _0x469f04, SCRAMJETCLIENTNAME: _0x260260, ScramjetClient: _0x27fd62, ScramjetFetchHandler: _0x14f623, ScramjetFetchTrackedClient: _0x136f2f, ScramjetHeaders: _0x390531, ScramjetStorageJar: _0x3ae655, Tap: _0x4cbade, createLocationProxy: _0x32ef4c, defaultConfig: _0x1e7662, defaultConfigDev: _0x4578a3, flagEnabled: _0x3744c1, getOwnPropertyDescriptorHandler: _0x2ecd79, getRewriter: _0x1f0ac8, getScriptBlockTypeString: _0x44097f, htmlRules: _0x59ec06, isArchiveMimeType: _0x4e8a13, isAudioOrVideoMimeType: _0x4f04d7, isFontMimeType: _0x5ea014, isHtmlMimeType: _0x413686, isImageMimeType: _0x1f67e7, isInlineDisplayableMimeType: _0x29128c, isJavascriptMimeType: _0xac2064, isJavascriptMimeTypeEssenceMatch: _0x27725b, isModuleScriptType: _0x17e19b, isScriptType: _0x5b4518, isScriptableMimeType: _0x2f85e1, isXmlMimeType: _0x3b3ed6, isZipBasedMimeType: _0xa93779, isdedicated: _0x32d431, isshared: _0x2a8605, issw: _0x4e765e, iswindow: _0x3a6533, isworker: _0x36d203, nativeProviders: _0xa79729, parseMimeType: _0x40f934, providers: _0x476ed1, registerProviders: _0x52bbe3, resetProviders: _0x130abe, rewriteBlob: _0x3d4b4a, rewriteCss: _0x7b923f, rewriteHtml: _0x43174d, rewriteJs: _0x52a4bf, rewriteJsInner: _0x181166, rewriteSrcset: _0x4116ae, rewriteUrl: _0x1ac189, rewriteWorkers: _0x25c9d1, setWasm: _0x460c0c, unrewriteBlob: _0x1d89c9, unrewriteCss: _0x46e672, unrewriteHtml: _0x3af206, unrewriteUrl: _0x2ca26d, versionInfo: _0xf4b475 } = globalThis.$scramjet;
  } }, _0x5604e8 = {};
  function _0x157a94(_0x51a23d) {
    var _0x14537c = _0x5604e8[_0x51a23d];
    if (_0x14537c !== void 0) return _0x14537c.exports;
    var _0x73f999 = _0x5604e8[_0x51a23d] = { exports: {} };
    return _0x362063[_0x51a23d](_0x73f999, _0x73f999.exports, _0x157a94), _0x73f999.exports;
  }
  _0x157a94.n = (_0x5ea4c8) => {
    var _0x294a6a = _0x5ea4c8 && _0x5ea4c8.__esModule ? () => _0x5ea4c8.default : () => _0x5ea4c8;
    return _0x157a94.d(_0x294a6a, { a: _0x294a6a }), _0x294a6a;
  }, _0x157a94.d = (_0x3efd79, _0x22b8a0) => {
    for (var _0x330785 in _0x22b8a0) _0x157a94.o(_0x22b8a0, _0x330785) && !_0x157a94.o(_0x3efd79, _0x330785) && Object.defineProperty(_0x3efd79, _0x330785, { enumerable: !0, get: _0x22b8a0[_0x330785] });
  }, _0x157a94.o = (_0x493352, _0x1c019d) => Object.prototype.hasOwnProperty.call(_0x493352, _0x1c019d), _0x157a94.r = (_0x40feab) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x40feab, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x40feab, "__esModule", { value: !0 });
  };
  var _0x5ae552 = {};
  (() => {
    _0x157a94.r(_0x5ae552), _0x157a94.d(_0x5ae552, { Controller: () => _0x57dfde, Frame: () => _0x47fb67, ManagedPlugin: () => _0x39a725, VERSION: () => _0x502c4b.x, assertRuntimeScramjetVersion: () => _0x502c4b.O, config: () => _0x2e2403 });
    var _0x1959b9 = _0x157a94(986), _0x28a69a = _0x157a94(235), _0xf6b8bb = _0x157a94(805), _0x23d4b0 = _0x157a94(423), _0x12df11 = _0x157a94(286), _0x502c4b = _0x157a94(355);
    let _0x2e2403 = { prefix: "/~/sj/", scramjetPath: "/scramjet/scramjet.js", injectPath: "/controller/controller.inject.js", wasmPath: "/scramjet/scramjet.wasm", virtualWasmPath: "scramjet.wasm.js", codec: { encode: (_0x4525b5) => _0x4525b5 && encodeURIComponent(encodeURIComponent(_0x4525b5)), decode: (_0x56822e) => {
      if (!_0x56822e) return _0x56822e;
      let _0xd007d9 = decodeURIComponent(_0x56822e);
      return /^[a-z][a-z0-9+.-]*:/i.test(_0xd007d9) ? _0xd007d9 : decodeURIComponent(_0xd007d9);
    } } }, _0x566d83 = { flags: { ..._0x23d4b0.sb.flags, allowFailedIntercepts: !1 }, maskedfiles: ["inject.js", "scramjet.wasm.js"] };
    class _0x39a725 extends _0x23d4b0.k_ {
      frame = null;
      dependencies = [];
      constructor(_0x42488d, _0x2f6b4c) {
        super(_0x42488d), this.dependencies = _0x2f6b4c;
      }
      install(_0x2719eb) {
        this.frame = _0x2719eb;
      }
    }
    let _0x575936 = "state";
    function _0x310259(_0x5d39a8, _0x460dd9) {
      let _0x57bf2f = new URL(_0x5d39a8.scriptURL), _0x596886 = new URL(_0x460dd9.scriptURL);
      return _0x57bf2f.origin === _0x596886.origin && _0x57bf2f.pathname === _0x596886.pathname;
    }
    let _0x4679e2 = null;
    function _0x4407d2(_0x28ef5b) {
      if (_0x28ef5b === void 0) return null;
      if (typeof _0x28ef5b != "object" || _0x28ef5b === null || !Number.isSafeInteger(_0x28ef5b.updatedAt) || _0x28ef5b.updatedAt < 0 || typeof _0x28ef5b.cookies != "string") throw Error("Persisted Scramjet cookie state was malformed");
      return _0x28ef5b;
    }
    function _0x4d9d94(_0x1afa49) {
      return new Promise((_0x45277e, _0xad4a47) => {
        _0x1afa49.onsuccess = () => _0x45277e(_0x1afa49.result), _0x1afa49.onerror = () => _0xad4a47(_0x1afa49.error ?? Error("IndexedDB request failed"));
      });
    }
    function _0x54e88d(_0x5a2340) {
      return new Promise((_0x27258f, _0x2993be) => {
        _0x5a2340.oncomplete = () => _0x27258f(void 0), _0x5a2340.onabort = () => _0x2993be(_0x5a2340.error ?? Error("IndexedDB transaction aborted")), _0x5a2340.onerror = () => _0x2993be(_0x5a2340.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function _0x4fe4f2() {
      return _0x4679e2 || (_0x4679e2 = new Promise((_0x11b257, _0x1928b6) => {
        let _0x2f34a8 = indexedDB.open("__scramjet_controller", 1);
        _0x2f34a8.onupgradeneeded = () => {
          let _0x25296a = _0x2f34a8.result;
          _0x25296a.objectStoreNames.contains(_0x575936) || _0x25296a.createObjectStore(_0x575936);
        }, _0x2f34a8.onsuccess = () => _0x11b257(_0x2f34a8.result), _0x2f34a8.onerror = () => _0x1928b6(_0x2f34a8.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function _0xaf97c7(_0x32df99) {
      let _0x1e9b59 = (await _0x4fe4f2()).transaction(_0x575936, "readonly"), _0x5cbda7 = _0x1e9b59.objectStore(_0x575936), _0x16f8f2 = _0x54e88d(_0x1e9b59), _0x4806c2 = await _0x4d9d94(_0x5cbda7.get(_0x32df99));
      return await _0x16f8f2, _0x4407d2(_0x4806c2);
    }
    async function _0x3e0e7b(_0x2fd335, _0x194ba3, _0x59b699) {
      let _0x35e945 = (await _0x4fe4f2()).transaction(_0x575936, "readwrite"), _0x15a6c5 = _0x35e945.objectStore(_0x575936), _0x148928 = _0x54e88d(_0x35e945), _0x25b29d = _0x4407d2(await _0x4d9d94(_0x15a6c5.get(_0x2fd335))), _0x78dd50 = Math.max(_0x59b699, _0x25b29d?.updatedAt ?? 0) + 1;
      if (!Number.isSafeInteger(_0x78dd50)) throw Error("Persisted Scramjet cookie sequence was exhausted");
      return await _0x4d9d94(_0x15a6c5.put({ updatedAt: _0x78dd50, cookies: _0x194ba3 }, _0x2fd335)), await _0x148928, _0x78dd50;
    }
    function _0x38cc10() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x1f8f5a) => _0x1f8f5a.toString(16).padStart(2, "0")).join("");
    }
    function _0x3fe8f8(_0x4eac19) {
      let _0x424e75 = _0x4eac19.contentWindow;
      if (_0x4eac19.name && _0x424e75 !== null && _0x424e75.name !== _0x4eac19.name) try {
        _0x424e75.name = _0x4eac19.name;
      } catch {
      }
    }
    let _0x498949 = (0, _0x1959b9.deepmerge)();
    class _0x57dfde {
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
      onTabChannelMessage = (_0x44b067) => {
        this.rpc.recieve(_0x44b067.data);
      };
      onCookieSyncMessage = (_0x12cf93) => {
        let _0x2d36c2 = typeof _0x12cf93.data == "object" && _0x12cf93.data !== null ? _0x12cf93.data.updatedAt : void 0;
        typeof _0x2d36c2 == "number" && Number.isSafeInteger(_0x2d36c2) && !(_0x2d36c2 < 0) && !(_0x2d36c2 <= this.cookieUpdatedAt) && (this.cookieSyncDirty = !0, this.loadSavedCookies().catch((_0x56ea69) => {
          this.cookieSyncDirty = !0;
        }));
      };
      onServiceWorkerMessage = async (_0x29ad6a) => {
        if (!this.closed && !this.closing) {
          if (_0x29ad6a.data?.$controller$setCookie && typeof _0x29ad6a.data.$controller$setCookie == "object") {
            let _0x4f237e = _0x29ad6a.data.$controller$setCookie;
            _0x4f237e.options?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(_0x4f237e.cookies, _0x4f237e.options), typeof _0x4f237e.id == "string" && this.serviceWorkerController.postMessage({ $sw$setCookieDone: { id: _0x4f237e.id } });
            return;
          }
          if (_0x29ad6a.data?.$controller$swrevive) {
            let _0x5ccede = _0x29ad6a.data.$controller$swrevive, _0x26386d = _0x29ad6a.source;
            if (!(_0x26386d instanceof ServiceWorker) || _0x26386d.state === "redundant" || typeof _0x5ccede.workerId != "string" || typeof _0x5ccede.revivalId != "string" || !_0x310259(this.serviceWorkerController, _0x26386d)) return;
            this.reconnectServiceWorker(_0x26386d, _0x5ccede.workerId, _0x5ccede.revivalId).catch((_0x2a581c) => {
            });
          }
        }
      };
      async loadScramjetWasm() {
        if (this.wasmAlreadyFetched) return;
        let _0x50d30f = await fetch(this.config.wasmPath);
        (0, _0x23d4b0.ht)(await _0x50d30f.arrayBuffer()), this.wasmAlreadyFetched = !0;
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
          let o2 = _0x23d4b0.uh.fromRawHeaders(e3.initialHeaders), s2 = await r2.fetchHandler.handleFetch({ initialHeaders: o2, rawClientUrl: e3.rawClientUrl ? new URL(e3.rawClientUrl) : void 0, rawUrl: new URL(e3.rawUrl), rawReferrer: e3.rawReferrer, rawDestination: e3.destination, rawCredentials: e3.credentials, method: e3.method, mode: e3.mode, referrer: e3.referrer, body: e3.body, cache: e3.cache, clientId: e3.clientId ?? "", ...e3.sourceClientId === void 0 ? {} : { sourceClientId: e3.sourceClientId }, ...e3.resultingClientId === void 0 ? {} : { resultingClientId: e3.resultingClientId } });
          return [{ body: s2.body, status: s2.status, statusText: s2.statusText, headers: s2.headers.toRawHeaders() }, s2.body instanceof ReadableStream || s2.body instanceof ArrayBuffer ? [s2.body] : []];
        } catch (o2) {
          let t4 = { setResponse: void 0, suppressError: !1 };
          if (await _0x23d4b0.Cx.dispatch(r2.hooks.error.request, { rawrequest: e3, error: o2 }, t4), t4.suppressError, t4.setResponse) return [t4.setResponse, []];
          throw o2;
        }
      }, initRemoteTransport: async ({ port: e3 }) => {
        let t3 = new _0xf6b8bb.C({ request: async ({ remote: e4, method: t4, body: r2, headers: o2, proxy: s2 }) => {
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
      constructor(_0xe0ff0e) {
        if (this.init = _0xe0ff0e, typeof _0xe0ff0e.storagePartitionKey != "string" || _0xe0ff0e.storagePartitionKey.length === 0) throw Error("Scramjet Controller requires a non-empty storage partition key");
        (0, _0x502c4b.O)(), this.id = _0x38cc10(), this.config = _0x498949(_0x2e2403, _0xe0ff0e.config || {}), this.scramjetConfig = _0x498949(_0x566d83, _0x23d4b0.sb), this.scramjetConfig = _0x498949(this.scramjetConfig, _0xe0ff0e.scramjetConfig || {}), this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = _0xe0ff0e.serviceworker, this.resolvedCookieStore = _0xe0ff0e.cookieJar, this.storage = _0xe0ff0e.storage, this.cookieSyncChannel = new BroadcastChannel("__scramjet_controller_channel:" + encodeURIComponent(_0xe0ff0e.storagePartitionKey)), this.ready = Promise.all([new Promise((_0x541dc9, _0x544591) => {
          this.readyResolve = _0x541dc9, this.readyReject = _0x544591;
        }), this.loadScramjetWasm(), this.loadSavedCookies(!0)]).then(() => {
          if (this.closed || this.closing) throw Error("Scramjet Controller closed before becoming ready");
          this.initializationComplete = !0, this.isReady = !0;
        }), this.rpc = new _0xf6b8bb.C(this.methods, "tabchannel-" + this.id, (_0x2b07e0, _0xe2f489) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(_0x2b07e0, _0xe2f489);
        }), this.transport = _0xe0ff0e.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), this.reconnectServiceWorker(this.serviceWorkerController).catch((_0x239dd7) => {
          if (this.readyResolve === null || this.serviceWorkerReady !== null) return;
          let _0x1f0e3c = this.readyReject;
          this.readyResolve = null, this.readyReject = null, _0x1f0e3c?.(_0x239dd7);
        }), navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
      setupMessagePort(_0x2d7956, _0x2e3674, _0x31cd67) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (this.serviceWorkerReady !== null) {
          let _0x3c7aff = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x3c7aff.timeout), _0x3c7aff.reject(Error("Scramjet Controller connection was replaced"));
        }
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        let _0x1d6cb6 = new MessageChannel(), _0x271e5b = _0x38cc10();
        return this.port = _0x1d6cb6.port1, this.port.addEventListener("message", this.onTabChannelMessage), this.port.start(), new Promise((_0x2c6d22, _0x4302f0) => {
          let _0x48a989 = (_0xdef9d7) => {
            _0x4302f0(_0xdef9d7);
          }, _0x4211ba = setTimeout(() => {
            this.serviceWorkerReady?.connectionId === _0x271e5b && (this.serviceWorkerReady = null, _0x48a989(Error("Scramjet Controller ready acknowledgement expired")));
          }, 5e3);
          this.serviceWorkerReady = { worker: _0x2d7956, expectedWorkerId: _0x2e3674, connectionId: _0x271e5b, resolve: () => {
            _0x2c6d22(void 0);
          }, reject: _0x48a989, timeout: _0x4211ba };
          try {
            _0x2d7956.postMessage({ $controller$init: { prefix: this.prefix, id: this.id, connectionId: _0x271e5b, ..._0x2e3674 === void 0 ? {} : { workerId: _0x2e3674 }, ..._0x31cd67 === void 0 ? {} : { revivalId: _0x31cd67 } } }, [_0x1d6cb6.port2]);
          } catch (_0x3cb2a6) {
            this.serviceWorkerReady?.connectionId === _0x271e5b && (this.serviceWorkerReady = null), clearTimeout(_0x4211ba), _0x48a989(_0x3cb2a6);
          }
        });
      }
      async reconnectServiceWorker(_0x3dab3e, _0x524e1e, _0x1e48de) {
        let _0x149670 = this.serviceWorkerReconnect;
        if (_0x149670 !== null && _0x149670.worker === _0x3dab3e && (_0x524e1e === void 0 || _0x149670.expectedWorkerId === _0x524e1e)) return _0x149670.promise;
        this.isReady = !1;
        let _0x1c2463 = (async () => {
          if (await this.setupMessagePort(_0x3dab3e, _0x524e1e, _0x1e48de), this.closed || this.closing) throw Error("Scramjet Controller closed during reconnection");
          this.initializationComplete && (this.isReady = !0);
        })();
        this.serviceWorkerReconnect = { worker: _0x3dab3e, expectedWorkerId: _0x524e1e, promise: _0x1c2463 };
        try {
          return await _0x1c2463;
        } finally {
          this.serviceWorkerReconnect?.promise === _0x1c2463 && (this.serviceWorkerReconnect = null);
        }
      }
      async refreshServiceWorkerConnection() {
        let _0x5787c4 = this.serviceWorkerController, _0x317cf1 = await navigator.serviceWorker.getRegistration(new URL(this.prefix, location.href)), _0x594eb9 = _0x317cf1?.active;
        if (_0x594eb9 && _0x594eb9.state !== "redundant" && _0x310259(_0x5787c4, _0x594eb9) && (_0x5787c4 = _0x594eb9), _0x5787c4.state === "redundant") throw Error("No active Scramjet service worker is available");
        return await this.reconnectServiceWorker(_0x5787c4);
      }
      detachFromServiceWorker() {
        return new Promise((_0x125b2e, _0x4499fa) => {
          let _0x54f8cf = new MessageChannel(), _0x1a3c59 = !1, _0x22cf16 = (_0x1f655e) => {
            if (!_0x1a3c59) {
              if (_0x1a3c59 = !0, clearTimeout(_0x3a9e66), _0x54f8cf.port1.onmessage = null, _0x54f8cf.port1.onmessageerror = null, _0x54f8cf.port1.close(), _0x1f655e) return void _0x4499fa(_0x1f655e);
              _0x125b2e(void 0);
            }
          }, _0x3a9e66 = setTimeout(() => {
            _0x22cf16(Error("Scramjet Controller detach was not acknowledged"));
          }, 5e3);
          _0x54f8cf.port1.onmessage = (_0x469524) => {
            let _0x46e190 = _0x469524.data?.$controller$detached;
            _0x46e190?.id !== this.id || _0x46e190.detached !== !0 ? _0x22cf16(Error("Scramjet Controller detach was not acknowledged")) : _0x22cf16();
          }, _0x54f8cf.port1.onmessageerror = () => {
            _0x22cf16(Error("Scramjet Controller detach acknowledgement failed"));
          };
          let _0x28175b = { id: this.id };
          try {
            this.serviceWorkerController.postMessage({ $controller$detach: _0x28175b }, [_0x54f8cf.port2]);
          } catch (_0x1c91b6) {
            _0x22cf16(_0x1c91b6 instanceof Error ? _0x1c91b6 : Error("Scramjet Controller detach request failed"));
          }
        });
      }
      async closeLocalResources() {
        let _0x245f7b = [], _0x11c2d0 = [];
        for (let _0x1c29a2 of this.frames) {
          let _0x453acf = !1;
          try {
            _0x1c29a2.element[_0x12df11.I] === _0x1c29a2 && (_0x1c29a2.element.removeAttribute("srcdoc"), _0x1c29a2.element.src = "about:blank", delete _0x1c29a2.element[_0x12df11.I]);
          } catch (_0x2a0ef0) {
            _0x245f7b.push(_0x2a0ef0), _0x453acf = !0;
          }
          _0x453acf && _0x11c2d0.push(_0x1c29a2);
        }
        this.frames = _0x11c2d0;
        let _0x1d03bb = Error("Scramjet Controller closed");
        for (let _0x194eca of this.transportChannels) {
          for (let _0x4a0059 of _0x194eca.rpc.promiseCallbacks.values()) _0x4a0059.reject(_0x1d03bb);
          _0x194eca.rpc.promiseCallbacks.clear(), _0x194eca.port.onmessage = null, _0x194eca.port.onmessageerror = null;
          try {
            _0x194eca.port.close();
          } catch {
          }
        }
        for (let _0x511052 of (this.transportChannels.clear(), this.rpc.promiseCallbacks.values())) _0x511052.reject(_0x1d03bb);
        if (this.rpc.promiseCallbacks.clear(), this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        if (this.cookieSyncChannel.removeEventListener("message", this.onCookieSyncMessage), this.cookieSyncChannel.close(), navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage), this.serviceWorkerReady !== null) {
          let _0x4b626e = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x4b626e.timeout), _0x4b626e.reject(_0x1d03bb);
        }
        if (_0x245f7b.length > 0) throw AggregateError(_0x245f7b, "Scramjet Controller frame teardown failed");
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
      async applyCookieSyncEntries(_0xb0a42f, _0x145546 = {}) {
        if (Array.isArray(_0xb0a42f))
          for (let _0x3029e7 of _0xb0a42f) typeof _0x3029e7?.url == "string" && typeof _0x3029e7.cookie == "string" && await this.cookieJar.setCookies(_0x3029e7.cookie, new URL(_0x3029e7.url), _0x145546.destination === void 0);
      }
      async propagateCookieSync(_0x47ec21, _0x46febb = {}) {
        this.port && await this.rpc.call("sendSetCookie", { cookies: _0x47ec21, options: _0x46febb });
      }
      async loadSavedCookies(_0xd70b36 = !1) {
        if (_0xd70b36 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          if (!this.cookieJar.ownsPersistence) {
            this.cookieSyncDirty = !1;
            return;
          }
          let _0xe4c6c8 = await _0xaf97c7(this.init.storagePartitionKey);
          _0xe4c6c8 && _0xe4c6c8.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(_0xe4c6c8.cookies), this.cookieUpdatedAt = _0xe4c6c8.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        if (!this.cookieJar.ownsPersistence) return;
        let _0x27d390 = await _0x3e0e7b(this.init.storagePartitionKey, this.cookieJar.dump(), this.cookieUpdatedAt);
        _0x27d390 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = _0x27d390, this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({ updatedAt: _0x27d390 }));
      }
      get cookieJar() {
        let _0x5580c0 = this.resolvedCookieStore;
        if (_0x5580c0 !== void 0) return _0x5580c0;
        let _0x1539e6 = (0, _0x23d4b0.r5)().createCookieStore();
        return this.resolvedCookieStore = _0x1539e6, _0x1539e6;
      }
      setTransport(_0x18c2c2) {
        for (let _0x5510fa of (this.transport = _0x18c2c2, this.frames)) _0x5510fa.controller.transport = _0x18c2c2, _0x5510fa.fetchHandler.client.transport = _0x18c2c2;
      }
      createFrame(_0xaa6b, _0x22883d = {}) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (!this.isReady) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let _0x20b1ea = new _0x47fb67(this, _0xaa6b ??= document.createElement("iframe"), _0x22883d);
        return this.frames.push(_0x20b1ea), _0x20b1ea;
      }
      async wait() {
        if (this.closed || this.closing || (await this.ready, this.closed || this.closing)) throw Error("Scramjet Controller is closed");
      }
    }
    class _0x47fb67 {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return { config: this.controller.scramjetConfig, prefix: new URL(this.prefix, location.href), cookieJar: this.controller.cookieJar, storage: this.controller.storage, storagePartitionKey: this.controller.init.storagePartitionKey, interface: { getInjectScripts: /* @__PURE__ */ (function _0x382ec3(_0x16dfb7, _0x5f4efe, _0x5e137a, _0x485b8b, _0x1add45, _0x34524b, _0x3ad5c9, _0xd6ae4f) {
          return (_0x307ab8, _0x2246c5, _0x12b93e, _0xfe2076) => {
            var _0x469756;
            return [_0xfe2076(_0x16dfb7.scramjetPath), _0xfe2076(_0x5e137a.href + _0x16dfb7.virtualWasmPath), _0xfe2076(_0x16dfb7.injectPath), _0xfe2076("data:text/javascript;charset=utf-8;base64," + (_0x469756 = `
					document.querySelectorAll("script[scramjet-injected]").forEach(script => script.remove());
					$scramjetController.load({
						config: ` + JSON.stringify(_0x16dfb7) + `,
						sjconfig: ` + JSON.stringify(_0x5f4efe) + `,
						prefix: new URL("` + _0x5e137a.href + `"),
						cookies: ` + JSON.stringify(_0x485b8b.dump()) + `,
						storage: ` + JSON.stringify(_0x1add45?.dump?.() ?? null) + `,
						storagePartitionKey: ` + JSON.stringify(_0xd6ae4f) + `,
						yieldGetInjectScripts: ` + _0x382ec3.toString() + `,
						codecEncode: ` + _0x34524b.toString() + `,
						codecDecode: ` + _0x3ad5c9.toString() + `,
						initHeaders: ` + JSON.stringify(_0x12b93e.headers ?? []) + `,
						history: ` + JSON.stringify(_0x12b93e.history ?? []) + `,
					})
				`, btoa(new TextEncoder().encode(_0x469756).reduce((_0x5406f0, _0xdc631b) => (_0x5406f0.push(String.fromCharCode(_0xdc631b)), _0x5406f0), []).join(""))))];
          };
        })(this.controller.config, this.controller.scramjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.storage, this.controller.config.codec.encode, this.controller.config.codec.decode, this.controller.init.storagePartitionKey), getWorkerInjectScripts: (_0x39fd99, _0x4e991d, _0x170d45) => {
          var _0x26576f;
          let _0x394233 = "";
          return _0x394233 += _0x170d45(this.controller.config.scramjetPath), _0x394233 += _0x170d45(this.prefix + this.controller.config.virtualWasmPath), _0x394233 += _0x170d45("data:text/javascript;charset=utf-8;base64," + (_0x26576f = `
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
					`, btoa(new TextEncoder().encode(_0x26576f).reduce((_0x4f04ce, _0x348e7d) => (_0x4f04ce.push(String.fromCharCode(_0x348e7d)), _0x4f04ce), []).join(""))));
        }, codecEncode: this.controller.config.codec.encode, codecDecode: this.controller.config.codec.decode } };
      }
      plugins = [];
      constructor(_0x2efffe, _0x196c9f, _0x50fcad = {}) {
        for (const _0x5263de of (this.controller = _0x2efffe, this.element = _0x196c9f, this.options = _0x50fcad, this.id = _0x38cc10(), this.prefix = this.controller.prefix + this.id + "/", _0x3fe8f8(_0x196c9f), this.plugins = _0x50fcad.plugins ?? [], this.fetchHandler = new _0x23d4b0.mK({ crossOriginIsolated: self.crossOriginIsolated, context: this.context, transport: _0x2efffe.transport, async sendSetCookie(_0x2ec1f0, _0x2530c0) {
          await _0x2efffe.persistCookies(), await _0x2efffe.propagateCookieSync(_0x2ec1f0.map(({ url: _0x5ea54d, cookie: _0x1454cb }) => ({ url: _0x5ea54d.href, cookie: _0x1454cb })), _0x2530c0);
        }, fetchBlobUrl: async (_0x3663c4, _0x5c723a) => _0x28a69a.Sr.fromNativeResponse(await fetch(_0x3663c4, _0x5c723a)), fetchDataUrl: async (_0x5e9911, _0x492d65) => _0x28a69a.Sr.fromNativeResponse(await fetch(_0x5e9911, _0x492d65)) }), this.hooks = { fetch: this.fetchHandler.hooks.fetch, init: _0x23d4b0.Cx.create(), error: _0x23d4b0.Cx.create() }, _0x196c9f[_0x12df11.I] = this, this.plugins)) {
          for (const _0x38a4cb of _0x5263de.dependencies) if (!this.plugins.find((_0x3d1e30) => _0x3d1e30.name === _0x38a4cb)) throw Error("Dependency " + _0x38a4cb + " not found for plugin " + _0x5263de.name);
          _0x5263de.install(this);
        }
      }
      getPlugin(_0x405296) {
        let _0x447dd9 = this.plugins.find((_0x19246a) => _0x19246a.name === _0x405296);
        if (!_0x447dd9) throw Error("Plugin " + _0x405296 + " not found");
        return _0x447dd9;
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
      go(_0x4b3256) {
        _0x3fe8f8(this.element);
        let _0x4fbd45 = (0, _0x23d4b0.Oy)(_0x4b3256, this.context, { origin: new URL(location.href), base: new URL(location.href) }, { destination: "document" });
        this.element.src = _0x4fbd45;
      }
    }
  })(), $scramjetController = _0x5ae552;
})();
