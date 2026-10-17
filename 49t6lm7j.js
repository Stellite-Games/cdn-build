var $scramjetController;
(() => {
  var _0x581a38 = { 286(_0x465541, _0xcd6b44, _0x53fad0) {
    _0x53fad0.d(_0xcd6b44, { I: () => _0x496873 });
    let _0x496873 = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 355(_0x3d3af4, _0x3769ea, _0x4e860b) {
    _0x4e860b.d(_0x3769ea, { O: () => _0x2f8587, x: () => _0x21ff87 });
    let _0x21ff87 = "0.0.14";
    function _0x2f8587() {
      if (typeof $scramjet > "u") throw Error("@mercuryworkshop/scramjet is not loaded. Load scramjet before the controller.");
      var _0x5bf01f = "2.0.67-alpha.2", _0x1fdf7c = $scramjet.versionInfo.version;
      if (_0x5bf01f !== _0x1fdf7c) throw Error("@mercuryworkshop/scramjet version mismatch: this build expects " + _0x5bf01f + ", but the loaded runtime is " + _0x1fdf7c);
    }
  }, 805(_0x369997, _0x37af5b, _0x2e9562) {
    _0x2e9562.d(_0x37af5b, { C: () => _0x953902 });
    class _0x953902 {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x18e7db, _0x38f79f, _0x1b2c39) {
        this.methods = _0x18e7db, this.id = _0x38f79f, this.sendRaw = _0x1b2c39;
      }
      recieve(_0x57faf3) {
        if (_0x57faf3 == null || typeof _0x57faf3 != "object") return;
        let _0x38c14b = _0x57faf3[this.id];
        if (_0x38c14b == null || typeof _0x38c14b != "object") return;
        let _0x46fe85 = _0x38c14b.$type;
        if (_0x46fe85 === "response") {
          let _0x391022 = _0x38c14b.$token, _0x508ca5 = _0x38c14b.$data, _0x24a475 = _0x38c14b.$error, _0x119a4d = this.promiseCallbacks.get(_0x391022);
          if (!_0x119a4d) return;
          this.promiseCallbacks.delete(_0x391022), _0x24a475 !== void 0 ? _0x119a4d.reject(Error(_0x24a475)) : _0x119a4d.resolve(_0x508ca5);
        } else if (_0x46fe85 === "request") {
          let _0x530b95 = _0x38c14b.$method, _0x308702 = _0x38c14b.$args;
          this.methods[_0x530b95](_0x308702).then((_0x4e065a) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x38c14b.$token, $data: _0x4e065a?.[0] } }, _0x4e065a?.[1]);
          }).catch((_0x5ad74f) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x38c14b.$token, $error: _0x5ad74f?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0xc4b0f2, _0x278f23, _0x1868d2 = []) {
        let _0x575752 = this.counter++;
        return new Promise((_0x1f69e9, _0x2ab054) => {
          this.promiseCallbacks.set(_0x575752, { resolve: _0x1f69e9, reject: _0x2ab054 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0xc4b0f2, $args: _0x278f23, $token: _0x575752 } }, _0x1868d2);
        });
      }
    }
  }, 986(_0x1b21fb) {
    let _0x2c612d = Object.getPrototypeOf({});
    function _0x14d124() {
      return function(_0x286dcd) {
        return typeof _0x286dcd == "object" && _0x286dcd !== null && !(_0x286dcd instanceof RegExp) && !(_0x286dcd instanceof Date);
      };
    }
    function _0x4b243d(_0x3ee3ab) {
      function _0x8db7b0(_0x47f26e) {
        return _0x47f26e !== "constructor" && _0x47f26e !== "prototype" && _0x47f26e !== "__proto__";
      }
      let _0x4abd8f = Object.prototype.propertyIsEnumerable, _0x4e9233 = _0x3ee3ab?.symbols ? function(_0x2587c7) {
        let _0x3138a7 = Object.keys(_0x2587c7), _0x1b599d = Object.getOwnPropertySymbols(_0x2587c7);
        for (let _0xea6e91 = 0, _0x2d923d = _0x1b599d.length; _0xea6e91 < _0x2d923d; ++_0xea6e91) _0x4abd8f.call(_0x2587c7, _0x1b599d[_0xea6e91]) && _0x3138a7.push(_0x1b599d[_0xea6e91]);
        return _0x3138a7;
      } : Object.keys, _0xa79b9f = typeof _0x3ee3ab?.cloneProtoObject == "function" ? _0x3ee3ab.cloneProtoObject : void 0, _0x12eeae = typeof _0x3ee3ab?.isMergeableObject == "function" ? _0x3ee3ab.isMergeableObject : _0x14d124(), _0x5de73d = _0x3ee3ab?.onlyDefinedProperties === !0, _0x5e4e1a = _0x3ee3ab && typeof _0x3ee3ab.mergeArray == "function" ? _0x3ee3ab.mergeArray({ clone: _0x336c41, deepmerge: _0x60c136, getKeys: _0x4e9233, isMergeableObject: _0x12eeae }) : function(_0x1648d6, _0x207cf8) {
        let _0x2437b2 = _0x1648d6.length, _0x40e2c2 = _0x207cf8.length, _0x368117 = 0, _0x3a1246 = Array(_0x2437b2 + _0x40e2c2);
        for (; _0x368117 < _0x2437b2; ++_0x368117) _0x3a1246[_0x368117] = _0x336c41(_0x1648d6[_0x368117]);
        for (_0x368117 = 0; _0x368117 < _0x40e2c2; ++_0x368117) _0x3a1246[_0x368117 + _0x2437b2] = _0x336c41(_0x207cf8[_0x368117]);
        return _0x3a1246;
      };
      function _0x336c41(_0x425c95) {
        return _0x12eeae(_0x425c95) ? Array.isArray(_0x425c95) ? (function(_0x2aa3f3) {
          let _0x24c074 = 0, _0x1376da = _0x2aa3f3.length, _0x7b535d = Array(_0x1376da);
          for (; _0x24c074 < _0x1376da; ++_0x24c074) _0x7b535d[_0x24c074] = _0x336c41(_0x2aa3f3[_0x24c074]);
          return _0x7b535d;
        })(_0x425c95) : (function(_0x24a530) {
          let _0x24c381, _0x2c9cfd, _0x416aa3, _0x43dd10 = {};
          if (_0xa79b9f && Object.getPrototypeOf(_0x24a530) !== _0x2c612d) return _0xa79b9f(_0x24a530);
          let _0x5222d8 = _0x4e9233(_0x24a530);
          for (_0x24c381 = 0, _0x2c9cfd = _0x5222d8.length; _0x24c381 < _0x2c9cfd; ++_0x24c381) _0x8db7b0(_0x416aa3 = _0x5222d8[_0x24c381]) && (_0x43dd10[_0x416aa3] = _0x336c41(_0x24a530[_0x416aa3]));
          return _0x43dd10;
        })(_0x425c95) : _0x425c95;
      }
      function _0x60c136(_0x51701a, _0x39545e) {
        if (_0x5de73d && _0x39545e === void 0) return _0x336c41(_0x51701a);
        let _0x321950 = Array.isArray(_0x39545e), _0x3eca2d = Array.isArray(_0x51701a);
        return typeof _0x39545e != "object" || _0x39545e === null ? _0x39545e : _0x12eeae(_0x51701a) ? _0x321950 && _0x3eca2d ? _0x5e4e1a(_0x51701a, _0x39545e) : _0x321950 !== _0x3eca2d ? _0x336c41(_0x39545e) : (function(_0x5a4d36, _0x47b923) {
          let _0x50fa97, _0x33d403, _0x43f390, _0x1a1bc2 = {}, _0x36f110 = _0x4e9233(_0x5a4d36), _0x294e5e = _0x4e9233(_0x47b923);
          for (_0x50fa97 = 0, _0x33d403 = _0x36f110.length; _0x50fa97 < _0x33d403; ++_0x50fa97) _0x8db7b0(_0x43f390 = _0x36f110[_0x50fa97]) && _0x294e5e.indexOf(_0x43f390) === -1 && (_0x1a1bc2[_0x43f390] = _0x336c41(_0x5a4d36[_0x43f390]));
          for (_0x50fa97 = 0, _0x33d403 = _0x294e5e.length; _0x50fa97 < _0x33d403; ++_0x50fa97) if (_0x8db7b0(_0x43f390 = _0x294e5e[_0x50fa97]))
            if (_0x43f390 in _0x5a4d36) _0x36f110.indexOf(_0x43f390) !== -1 && (_0xa79b9f && _0x12eeae(_0x47b923[_0x43f390]) && Object.getPrototypeOf(_0x47b923[_0x43f390]) !== _0x2c612d ? _0x1a1bc2[_0x43f390] = _0xa79b9f(_0x47b923[_0x43f390]) : _0x1a1bc2[_0x43f390] = _0x60c136(_0x5a4d36[_0x43f390], _0x47b923[_0x43f390]));
            else {
              if (_0x5de73d && _0x47b923[_0x43f390] === void 0) continue;
              _0x1a1bc2[_0x43f390] = _0x336c41(_0x47b923[_0x43f390]);
            }
          return _0x1a1bc2;
        })(_0x51701a, _0x39545e) : _0x336c41(_0x39545e);
      }
      return _0x3ee3ab?.all ? function() {
        let _0x497dd7;
        switch (arguments.length) {
          case 0:
            return {};
          case 1:
            return _0x336c41(arguments[0]);
          case 2:
            return _0x60c136(arguments[0], arguments[1]);
        }
        for (let _0x459f15 = 0, _0x6af4c = arguments.length; _0x459f15 < _0x6af4c; ++_0x459f15) _0x497dd7 = _0x60c136(_0x497dd7, arguments[_0x459f15]);
        return _0x497dd7;
      } : _0x60c136;
    }
    _0x1b21fb.exports = _0x4b243d, _0x1b21fb.exports.default = _0x4b243d, _0x1b21fb.exports.deepmerge = _0x4b243d, Object.defineProperty(_0x1b21fb.exports, "isMergeableObject", { get: _0x14d124 });
  }, 235(_0x3064f0, _0x13aca2, _0x16ff7a) {
    _0x16ff7a.d(_0x13aca2, { Sr: () => _0x1cd601 }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN;
    let _0x584fd5 = [101, 204, 205, 304];
    class _0x1cd601 extends Response {
      url;
      rawHeaders;
      redirected = !1;
      static fromTransferrableResponse(_0x4ca675, _0x164183) {
        let _0xaac510 = new _0x1cd601(_0x584fd5.includes(_0x4ca675.status) ? void 0 : _0x4ca675.body, { headers: new Headers(_0x4ca675.headers), status: _0x4ca675.status, statusText: _0x4ca675.statusText });
        return _0xaac510.url = _0x164183, _0xaac510.redirected = _0x4ca675.status >= 300 && _0x4ca675.status < 400 && _0x4ca675.headers.location !== void 0, _0xaac510.rawHeaders = _0x4ca675.headers, _0xaac510;
      }
      static fromNativeResponse(_0x590b30) {
        let _0x325893 = new _0x1cd601(_0x584fd5.includes(_0x590b30.status) ? void 0 : _0x590b30.body, { headers: _0x590b30.headers, status: _0x590b30.status, statusText: _0x590b30.statusText });
        return _0x325893.url = _0x590b30.url, _0x325893.rawHeaders = [..._0x590b30.headers], _0x325893.redirected = _0x590b30.redirected, _0x325893;
      }
    }
  }, 423(_0xfd659d, _0x333e22, _0x2e0a45) {
    _0x2e0a45.d(_0x333e22, { Cx: () => _0x25ef59, Oy: () => _0x7dc8c0, ht: () => _0x3691df, k_: () => _0x6ae88c, mK: () => _0x271c16, r5: () => _0x127b80, sb: () => _0x4a68fe, uh: () => _0x371fa4 });
    let { BareResponse: _0x4c0ad8, CookieJar: _0x28e612, IncrementalHtmlRewriter: _0x5a13e9, Plugin: _0x6ae88c, QP: _0x1fe71b, SCRAMJETCLIENT: _0x236b44, SCRAMJETCLIENTNAME: _0x1d954e, ScramjetClient: _0x5c8c5d, ScramjetFetchHandler: _0x271c16, ScramjetFetchTrackedClient: _0x536dda, ScramjetHeaders: _0x371fa4, ScramjetStorageJar: _0x3f0f9a, Tap: _0x25ef59, createLocationProxy: _0x5ea6ef, defaultConfig: _0x4a68fe, defaultConfigDev: _0x456dbd, flagEnabled: _0x52998b, getOwnPropertyDescriptorHandler: _0x26ce8f, getRewriter: _0x50532d, getScriptBlockTypeString: _0x7bac2e, htmlRules: _0x109db7, isArchiveMimeType: _0x874be0, isAudioOrVideoMimeType: _0x39041f, isFontMimeType: _0x5ed029, isHtmlMimeType: _0x4884ee, isImageMimeType: _0xf22391, isInlineDisplayableMimeType: _0x246205, isJavascriptMimeType: _0x2ccbb9, isJavascriptMimeTypeEssenceMatch: _0x1c369d, isModuleScriptType: _0x21500e, isScriptType: _0x576f33, isScriptableMimeType: _0x23f11c, isXmlMimeType: _0x451cf9, isZipBasedMimeType: _0x53684c, isdedicated: _0x27be0a, isshared: _0x591baa, issw: _0x321469, iswindow: _0x4f54d3, isworker: _0x35cdab, nativeProviders: _0x35d2ad, parseMimeType: _0x285c87, providers: _0x127b80, registerProviders: _0x195b2a, resetProviders: _0x36d5a4, rewriteBlob: _0x39a275, rewriteCss: _0x2548fd, rewriteHtml: _0x17b704, rewriteJs: _0x5badc7, rewriteJsInner: _0x3a9309, rewriteSrcset: _0x2e9177, rewriteUrl: _0x7dc8c0, rewriteWorkers: _0x16c092, setWasm: _0x3691df, unrewriteBlob: _0x127613, unrewriteCss: _0x22cbc7, unrewriteHtml: _0xcf5899, unrewriteUrl: _0x4af310, versionInfo: _0x435955 } = globalThis.$scramjet;
  } }, _0x19d777 = {};
  function _0x395d67(_0x3018c6) {
    var _0x3d1984 = _0x19d777[_0x3018c6];
    if (_0x3d1984 !== void 0) return _0x3d1984.exports;
    var _0x95e523 = _0x19d777[_0x3018c6] = { exports: {} };
    return _0x581a38[_0x3018c6](_0x95e523, _0x95e523.exports, _0x395d67), _0x95e523.exports;
  }
  _0x395d67.n = (_0x100760) => {
    var _0x18f89f = _0x100760 && _0x100760.__esModule ? () => _0x100760.default : () => _0x100760;
    return _0x395d67.d(_0x18f89f, { a: _0x18f89f }), _0x18f89f;
  }, _0x395d67.d = (_0x115f5b, _0x4594c0) => {
    for (var _0x2c0640 in _0x4594c0) _0x395d67.o(_0x4594c0, _0x2c0640) && !_0x395d67.o(_0x115f5b, _0x2c0640) && Object.defineProperty(_0x115f5b, _0x2c0640, { enumerable: !0, get: _0x4594c0[_0x2c0640] });
  }, _0x395d67.o = (_0x110601, _0x15f903) => Object.prototype.hasOwnProperty.call(_0x110601, _0x15f903), _0x395d67.r = (_0x2ffa04) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x2ffa04, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x2ffa04, "__esModule", { value: !0 });
  };
  var _0xe11cd3 = {};
  (() => {
    _0x395d67.r(_0xe11cd3), _0x395d67.d(_0xe11cd3, { Controller: () => _0x54bb8b, Frame: () => _0x65b305, ManagedPlugin: () => _0x559b77, VERSION: () => _0x3fe466.x, assertRuntimeScramjetVersion: () => _0x3fe466.O, config: () => _0x1fcc7d });
    var _0x352f48 = _0x395d67(986), _0x23088c = _0x395d67(235), _0x43cc01 = _0x395d67(805), _0x40c7d7 = _0x395d67(423), _0x1c4651 = _0x395d67(286), _0x3fe466 = _0x395d67(355);
    let _0x1fcc7d = { prefix: "/~/sj/", scramjetPath: "/scramjet/scramjet.js", injectPath: "/controller/controller.inject.js", wasmPath: "/scramjet/scramjet.wasm", virtualWasmPath: "scramjet.wasm.js", codec: { encode: (_0x430d00) => _0x430d00 && encodeURIComponent(encodeURIComponent(_0x430d00)), decode: (_0x4dd786) => {
      if (!_0x4dd786) return _0x4dd786;
      let _0x1ed3bf = decodeURIComponent(_0x4dd786);
      return /^[a-z][a-z0-9+.-]*:/i.test(_0x1ed3bf) ? _0x1ed3bf : decodeURIComponent(_0x1ed3bf);
    } } }, _0x354d96 = { flags: { ..._0x40c7d7.sb.flags, allowFailedIntercepts: !1 }, maskedfiles: ["inject.js", "scramjet.wasm.js"] };
    class _0x559b77 extends _0x40c7d7.k_ {
      frame = null;
      dependencies = [];
      constructor(_0x44eb78, _0x1e183e) {
        super(_0x44eb78), this.dependencies = _0x1e183e;
      }
      install(_0x4dd3f9) {
        this.frame = _0x4dd3f9;
      }
    }
    let _0x48948e = "state";
    function _0x4d2a42(_0x1a008f, _0x323ea4) {
      let _0xcf8235 = new URL(_0x1a008f.scriptURL), _0x1a588b = new URL(_0x323ea4.scriptURL);
      return _0xcf8235.origin === _0x1a588b.origin && _0xcf8235.pathname === _0x1a588b.pathname;
    }
    let _0x1396d8 = null;
    function _0x351c6c(_0x52b2ab) {
      if (_0x52b2ab === void 0) return null;
      if (typeof _0x52b2ab != "object" || _0x52b2ab === null || !Number.isSafeInteger(_0x52b2ab.updatedAt) || _0x52b2ab.updatedAt < 0 || typeof _0x52b2ab.cookies != "string") throw Error("Persisted Scramjet cookie state was malformed");
      return _0x52b2ab;
    }
    function _0x36dfe2(_0x496e5a) {
      return new Promise((_0x2c831e, _0x2ae740) => {
        _0x496e5a.onsuccess = () => _0x2c831e(_0x496e5a.result), _0x496e5a.onerror = () => _0x2ae740(_0x496e5a.error ?? Error("IndexedDB request failed"));
      });
    }
    function _0x5eab81(_0x3b5c6b) {
      return new Promise((_0x1775ca, _0x391dd1) => {
        _0x3b5c6b.oncomplete = () => _0x1775ca(void 0), _0x3b5c6b.onabort = () => _0x391dd1(_0x3b5c6b.error ?? Error("IndexedDB transaction aborted")), _0x3b5c6b.onerror = () => _0x391dd1(_0x3b5c6b.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function _0x51a563() {
      return _0x1396d8 || (_0x1396d8 = new Promise((_0x194127, _0x11547d) => {
        let _0x191b02 = indexedDB.open("__scramjet_controller", 1);
        _0x191b02.onupgradeneeded = () => {
          let _0x28d35f = _0x191b02.result;
          _0x28d35f.objectStoreNames.contains(_0x48948e) || _0x28d35f.createObjectStore(_0x48948e);
        }, _0x191b02.onsuccess = () => _0x194127(_0x191b02.result), _0x191b02.onerror = () => _0x11547d(_0x191b02.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function _0x2d972c(_0x431233) {
      let _0x169598 = (await _0x51a563()).transaction(_0x48948e, "readonly"), _0xf98872 = _0x169598.objectStore(_0x48948e), _0x5a987e = _0x5eab81(_0x169598), _0xed3752 = await _0x36dfe2(_0xf98872.get(_0x431233));
      return await _0x5a987e, _0x351c6c(_0xed3752);
    }
    async function _0x52f402(_0x3a7be6, _0x3ada47, _0x2bfd62) {
      let _0x4c79a9 = (await _0x51a563()).transaction(_0x48948e, "readwrite"), _0x1751cd = _0x4c79a9.objectStore(_0x48948e), _0x337b27 = _0x5eab81(_0x4c79a9), _0x1ddeca = _0x351c6c(await _0x36dfe2(_0x1751cd.get(_0x3a7be6))), _0x14c3a3 = Math.max(_0x2bfd62, _0x1ddeca?.updatedAt ?? 0) + 1;
      if (!Number.isSafeInteger(_0x14c3a3)) throw Error("Persisted Scramjet cookie sequence was exhausted");
      return await _0x36dfe2(_0x1751cd.put({ updatedAt: _0x14c3a3, cookies: _0x3ada47 }, _0x3a7be6)), await _0x337b27, _0x14c3a3;
    }
    function _0x27cee0() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x2a43e1) => _0x2a43e1.toString(16).padStart(2, "0")).join("");
    }
    function _0x2eef57(_0x3dfa92) {
      let _0x4f226f = _0x3dfa92.contentWindow;
      if (_0x3dfa92.name && _0x4f226f !== null && _0x4f226f.name !== _0x3dfa92.name) try {
        _0x4f226f.name = _0x3dfa92.name;
      } catch {
      }
    }
    let _0x56ac93 = (0, _0x352f48.deepmerge)();
    class _0x54bb8b {
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
      onTabChannelMessage = (_0x3f579a) => {
        this.rpc.recieve(_0x3f579a.data);
      };
      onCookieSyncMessage = (_0x4d59db) => {
        let _0x239846 = typeof _0x4d59db.data == "object" && _0x4d59db.data !== null ? _0x4d59db.data.updatedAt : void 0;
        typeof _0x239846 == "number" && Number.isSafeInteger(_0x239846) && !(_0x239846 < 0) && !(_0x239846 <= this.cookieUpdatedAt) && (this.cookieSyncDirty = !0, this.loadSavedCookies().catch((_0x429db7) => {
          this.cookieSyncDirty = !0;
        }));
      };
      onServiceWorkerMessage = async (_0x25274b) => {
        if (!this.closed && !this.closing) {
          if (_0x25274b.data?.$controller$setCookie && typeof _0x25274b.data.$controller$setCookie == "object") {
            let _0xaffac4 = _0x25274b.data.$controller$setCookie;
            _0xaffac4.options?.clear && await this.cookieJar.clear(), await this.applyCookieSyncEntries(_0xaffac4.cookies, _0xaffac4.options), typeof _0xaffac4.id == "string" && this.serviceWorkerController.postMessage({ $sw$setCookieDone: { id: _0xaffac4.id } });
            return;
          }
          if (_0x25274b.data?.$controller$swrevive) {
            let _0x52ad9d = _0x25274b.data.$controller$swrevive, _0x29786a = _0x25274b.source;
            if (!(_0x29786a instanceof ServiceWorker) || _0x29786a.state === "redundant" || typeof _0x52ad9d.workerId != "string" || typeof _0x52ad9d.revivalId != "string" || !_0x4d2a42(this.serviceWorkerController, _0x29786a)) return;
            this.reconnectServiceWorker(_0x29786a, _0x52ad9d.workerId, _0x52ad9d.revivalId).catch((_0x149524) => {
            });
          }
        }
      };
      async loadScramjetWasm() {
        if (this.wasmAlreadyFetched) return;
        let _0x3933a9 = await fetch(this.config.wasmPath);
        (0, _0x40c7d7.ht)(await _0x3933a9.arrayBuffer()), this.wasmAlreadyFetched = !0;
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
          let o2 = _0x40c7d7.uh.fromRawHeaders(e3.initialHeaders), s2 = await r2.fetchHandler.handleFetch({ initialHeaders: o2, rawClientUrl: e3.rawClientUrl ? new URL(e3.rawClientUrl) : void 0, rawUrl: new URL(e3.rawUrl), rawReferrer: e3.rawReferrer, rawDestination: e3.destination, rawCredentials: e3.credentials, method: e3.method, mode: e3.mode, referrer: e3.referrer, body: e3.body, cache: e3.cache, clientId: e3.clientId ?? "", ...e3.sourceClientId === void 0 ? {} : { sourceClientId: e3.sourceClientId }, ...e3.resultingClientId === void 0 ? {} : { resultingClientId: e3.resultingClientId } });
          return [{ body: s2.body, status: s2.status, statusText: s2.statusText, headers: s2.headers.toRawHeaders() }, s2.body instanceof ReadableStream || s2.body instanceof ArrayBuffer ? [s2.body] : []];
        } catch (o2) {
          let t4 = { setResponse: void 0, suppressError: !1 };
          if (await _0x40c7d7.Cx.dispatch(r2.hooks.error.request, { rawrequest: e3, error: o2 }, t4), t4.suppressError, t4.setResponse) return [t4.setResponse, []];
          throw o2;
        }
      }, initRemoteTransport: async ({ port: e3 }) => {
        let t3 = new _0x43cc01.C({ request: async ({ remote: e4, method: t4, body: r2, headers: o2, proxy: s2 }) => {
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
      constructor(_0x2635ca) {
        if (this.init = _0x2635ca, typeof _0x2635ca.storagePartitionKey != "string" || _0x2635ca.storagePartitionKey.length === 0) throw Error("Scramjet Controller requires a non-empty storage partition key");
        (0, _0x3fe466.O)(), this.id = _0x27cee0(), this.config = _0x56ac93(_0x1fcc7d, _0x2635ca.config || {}), this.scramjetConfig = _0x56ac93(_0x354d96, _0x40c7d7.sb), this.scramjetConfig = _0x56ac93(this.scramjetConfig, _0x2635ca.scramjetConfig || {}), this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = _0x2635ca.serviceworker, this.resolvedCookieStore = _0x2635ca.cookieJar, this.storage = _0x2635ca.storage, this.cookieSyncChannel = new BroadcastChannel("__scramjet_controller_channel:" + encodeURIComponent(_0x2635ca.storagePartitionKey)), this.ready = Promise.all([new Promise((_0x5f7df6, _0x2aa332) => {
          this.readyResolve = _0x5f7df6, this.readyReject = _0x2aa332;
        }), this.loadScramjetWasm(), this.loadSavedCookies(!0)]).then(() => {
          if (this.closed || this.closing) throw Error("Scramjet Controller closed before becoming ready");
          this.initializationComplete = !0, this.isReady = !0;
        }), this.rpc = new _0x43cc01.C(this.methods, "tabchannel-" + this.id, (_0x5856fe, _0x25050b) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(_0x5856fe, _0x25050b);
        }), this.transport = _0x2635ca.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), this.reconnectServiceWorker(this.serviceWorkerController).catch((_0x326c27) => {
          if (this.readyResolve === null || this.serviceWorkerReady !== null) return;
          let _0x3aae79 = this.readyReject;
          this.readyResolve = null, this.readyReject = null, _0x3aae79?.(_0x326c27);
        }), navigator.serviceWorker.addEventListener("message", this.onServiceWorkerMessage);
      }
      setupMessagePort(_0x2de573, _0x2d29df, _0x464cad) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (this.serviceWorkerReady !== null) {
          let _0x2dd86a = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x2dd86a.timeout), _0x2dd86a.reject(Error("Scramjet Controller connection was replaced"));
        }
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        let _0xa7edc0 = new MessageChannel(), _0x126ee3 = _0x27cee0();
        return this.port = _0xa7edc0.port1, this.port.addEventListener("message", this.onTabChannelMessage), this.port.start(), new Promise((_0x2fbaaf, _0x3d1c88) => {
          let _0x296757 = (_0x26de17) => {
            _0x3d1c88(_0x26de17);
          }, _0x494711 = setTimeout(() => {
            this.serviceWorkerReady?.connectionId === _0x126ee3 && (this.serviceWorkerReady = null, _0x296757(Error("Scramjet Controller ready acknowledgement expired")));
          }, 5e3);
          this.serviceWorkerReady = { worker: _0x2de573, expectedWorkerId: _0x2d29df, connectionId: _0x126ee3, resolve: () => {
            _0x2fbaaf(void 0);
          }, reject: _0x296757, timeout: _0x494711 };
          try {
            _0x2de573.postMessage({ $controller$init: { prefix: this.prefix, id: this.id, connectionId: _0x126ee3, ..._0x2d29df === void 0 ? {} : { workerId: _0x2d29df }, ..._0x464cad === void 0 ? {} : { revivalId: _0x464cad } } }, [_0xa7edc0.port2]);
          } catch (_0xe8fb94) {
            this.serviceWorkerReady?.connectionId === _0x126ee3 && (this.serviceWorkerReady = null), clearTimeout(_0x494711), _0x296757(_0xe8fb94);
          }
        });
      }
      async reconnectServiceWorker(_0x1c7ebb, _0x181b7d, _0xae896d) {
        let _0x542e5b = this.serviceWorkerReconnect;
        if (_0x542e5b !== null && _0x542e5b.worker === _0x1c7ebb && (_0x181b7d === void 0 || _0x542e5b.expectedWorkerId === _0x181b7d)) return _0x542e5b.promise;
        this.isReady = !1;
        let _0x54f2ca = (async () => {
          if (await this.setupMessagePort(_0x1c7ebb, _0x181b7d, _0xae896d), this.closed || this.closing) throw Error("Scramjet Controller closed during reconnection");
          this.initializationComplete && (this.isReady = !0);
        })();
        this.serviceWorkerReconnect = { worker: _0x1c7ebb, expectedWorkerId: _0x181b7d, promise: _0x54f2ca };
        try {
          return await _0x54f2ca;
        } finally {
          this.serviceWorkerReconnect?.promise === _0x54f2ca && (this.serviceWorkerReconnect = null);
        }
      }
      async refreshServiceWorkerConnection() {
        let _0x27e445 = this.serviceWorkerController, _0x21734d = await navigator.serviceWorker.getRegistration(new URL(this.prefix, location.href)), _0x7942e0 = _0x21734d?.active;
        if (_0x7942e0 && _0x7942e0.state !== "redundant" && _0x4d2a42(_0x27e445, _0x7942e0) && (_0x27e445 = _0x7942e0), _0x27e445.state === "redundant") throw Error("No active Scramjet service worker is available");
        return await this.reconnectServiceWorker(_0x27e445);
      }
      detachFromServiceWorker() {
        return new Promise((_0x5554a9, _0x298961) => {
          let _0x42130f = new MessageChannel(), _0x28c542 = !1, _0x20b2d2 = (_0x57147c) => {
            if (!_0x28c542) {
              if (_0x28c542 = !0, clearTimeout(_0x2a6d8c), _0x42130f.port1.onmessage = null, _0x42130f.port1.onmessageerror = null, _0x42130f.port1.close(), _0x57147c) return void _0x298961(_0x57147c);
              _0x5554a9(void 0);
            }
          }, _0x2a6d8c = setTimeout(() => {
            _0x20b2d2(Error("Scramjet Controller detach was not acknowledged"));
          }, 5e3);
          _0x42130f.port1.onmessage = (_0x47933d) => {
            let _0x405c0b = _0x47933d.data?.$controller$detached;
            _0x405c0b?.id !== this.id || _0x405c0b.detached !== !0 ? _0x20b2d2(Error("Scramjet Controller detach was not acknowledged")) : _0x20b2d2();
          }, _0x42130f.port1.onmessageerror = () => {
            _0x20b2d2(Error("Scramjet Controller detach acknowledgement failed"));
          };
          let _0x5154cd = { id: this.id };
          try {
            this.serviceWorkerController.postMessage({ $controller$detach: _0x5154cd }, [_0x42130f.port2]);
          } catch (_0x499752) {
            _0x20b2d2(_0x499752 instanceof Error ? _0x499752 : Error("Scramjet Controller detach request failed"));
          }
        });
      }
      async closeLocalResources() {
        let _0x672366 = [], _0x2c20a1 = [];
        for (let _0x205feb of this.frames) {
          let _0x185f35 = !1;
          try {
            _0x205feb.element[_0x1c4651.I] === _0x205feb && (_0x205feb.element.removeAttribute("srcdoc"), _0x205feb.element.src = "about:blank", delete _0x205feb.element[_0x1c4651.I]);
          } catch (_0x5065ac) {
            _0x672366.push(_0x5065ac), _0x185f35 = !0;
          }
          _0x185f35 && _0x2c20a1.push(_0x205feb);
        }
        this.frames = _0x2c20a1;
        let _0x5c3446 = Error("Scramjet Controller closed");
        for (let _0x455036 of this.transportChannels) {
          for (let _0x2c1de6 of _0x455036.rpc.promiseCallbacks.values()) _0x2c1de6.reject(_0x5c3446);
          _0x455036.rpc.promiseCallbacks.clear(), _0x455036.port.onmessage = null, _0x455036.port.onmessageerror = null;
          try {
            _0x455036.port.close();
          } catch {
          }
        }
        for (let _0x84f374 of (this.transportChannels.clear(), this.rpc.promiseCallbacks.values())) _0x84f374.reject(_0x5c3446);
        if (this.rpc.promiseCallbacks.clear(), this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {
          }
          this.port = null;
        }
        if (this.cookieSyncChannel.removeEventListener("message", this.onCookieSyncMessage), this.cookieSyncChannel.close(), navigator.serviceWorker.removeEventListener("message", this.onServiceWorkerMessage), this.serviceWorkerReady !== null) {
          let _0x4f0ac0 = this.serviceWorkerReady;
          this.serviceWorkerReady = null, clearTimeout(_0x4f0ac0.timeout), _0x4f0ac0.reject(_0x5c3446);
        }
        if (_0x672366.length > 0) throw AggregateError(_0x672366, "Scramjet Controller frame teardown failed");
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
      async applyCookieSyncEntries(_0x5a5a31, _0xa31528 = {}) {
        if (Array.isArray(_0x5a5a31))
          for (let _0x334972 of _0x5a5a31) typeof _0x334972?.url == "string" && typeof _0x334972.cookie == "string" && await this.cookieJar.setCookies(_0x334972.cookie, new URL(_0x334972.url), _0xa31528.destination === void 0);
      }
      async propagateCookieSync(_0x10a23e, _0x895a5 = {}) {
        this.port && await this.rpc.call("sendSetCookie", { cookies: _0x10a23e, options: _0x895a5 });
      }
      async loadSavedCookies(_0x536857 = !1) {
        if (_0x536857 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          if (!this.cookieJar.ownsPersistence) {
            this.cookieSyncDirty = !1;
            return;
          }
          let _0x504bf1 = await _0x2d972c(this.init.storagePartitionKey);
          _0x504bf1 && _0x504bf1.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(_0x504bf1.cookies), this.cookieUpdatedAt = _0x504bf1.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        if (!this.cookieJar.ownsPersistence) return;
        let _0x43e05c = await _0x52f402(this.init.storagePartitionKey, this.cookieJar.dump(), this.cookieUpdatedAt);
        _0x43e05c <= this.cookieUpdatedAt || (this.cookieUpdatedAt = _0x43e05c, this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({ updatedAt: _0x43e05c }));
      }
      get cookieJar() {
        let _0x26c622 = this.resolvedCookieStore;
        if (_0x26c622 !== void 0) return _0x26c622;
        let _0x4b87da = (0, _0x40c7d7.r5)().createCookieStore();
        return this.resolvedCookieStore = _0x4b87da, _0x4b87da;
      }
      setTransport(_0x27b728) {
        for (let _0x431686 of (this.transport = _0x27b728, this.frames)) _0x431686.controller.transport = _0x27b728, _0x431686.fetchHandler.client.transport = _0x27b728;
      }
      createFrame(_0x19621a, _0x1807a7 = {}) {
        if (this.closed || this.closing) throw Error("Scramjet Controller is closed");
        if (!this.isReady) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let _0x368740 = new _0x65b305(this, _0x19621a ??= document.createElement("iframe"), _0x1807a7);
        return this.frames.push(_0x368740), _0x368740;
      }
      async wait() {
        if (this.closed || this.closing || (await this.ready, this.closed || this.closing)) throw Error("Scramjet Controller is closed");
      }
    }
    class _0x65b305 {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return { config: this.controller.scramjetConfig, prefix: new URL(this.prefix, location.href), cookieJar: this.controller.cookieJar, storage: this.controller.storage, storagePartitionKey: this.controller.init.storagePartitionKey, interface: { getInjectScripts: /* @__PURE__ */ (function _0x239e54(_0x969d25, _0x4c4169, _0xbd07fa, _0x3a5f9a, _0x59194b, _0x1ce85b, _0x53106c, _0x4b15f8) {
          return (_0x48ef6b, _0x672cb2, _0x3bc0c9, _0x3fad41) => {
            var _0xf6e3c6;
            return [_0x3fad41(_0x969d25.scramjetPath), _0x3fad41(_0xbd07fa.href + _0x969d25.virtualWasmPath), _0x3fad41(_0x969d25.injectPath), _0x3fad41("data:text/javascript;charset=utf-8;base64," + (_0xf6e3c6 = `
					document.querySelectorAll("script[scramjet-injected]").forEach(script => script.remove());
					$scramjetController.load({
						config: ` + JSON.stringify(_0x969d25) + `,
						sjconfig: ` + JSON.stringify(_0x4c4169) + `,
						prefix: new URL("` + _0xbd07fa.href + `"),
						cookies: ` + JSON.stringify(_0x3a5f9a.dump()) + `,
						storage: ` + JSON.stringify(_0x59194b?.dump?.() ?? null) + `,
						storagePartitionKey: ` + JSON.stringify(_0x4b15f8) + `,
						yieldGetInjectScripts: ` + _0x239e54.toString() + `,
						codecEncode: ` + _0x1ce85b.toString() + `,
						codecDecode: ` + _0x53106c.toString() + `,
						initHeaders: ` + JSON.stringify(_0x3bc0c9.headers ?? []) + `,
						history: ` + JSON.stringify(_0x3bc0c9.history ?? []) + `,
					})
				`, btoa(new TextEncoder().encode(_0xf6e3c6).reduce((_0x4fc6f9, _0x28f5f0) => (_0x4fc6f9.push(String.fromCharCode(_0x28f5f0)), _0x4fc6f9), []).join(""))))];
          };
        })(this.controller.config, this.controller.scramjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.storage, this.controller.config.codec.encode, this.controller.config.codec.decode, this.controller.init.storagePartitionKey), getWorkerInjectScripts: (_0x2afa74, _0x16a963, _0x5c0943) => {
          var _0xcb8b47;
          let _0x323b25 = "";
          return _0x323b25 += _0x5c0943(this.controller.config.scramjetPath), _0x323b25 += _0x5c0943(this.prefix + this.controller.config.virtualWasmPath), _0x323b25 += _0x5c0943("data:text/javascript;charset=utf-8;base64," + (_0xcb8b47 = `
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
					`, btoa(new TextEncoder().encode(_0xcb8b47).reduce((_0xe26b49, _0x4fca09) => (_0xe26b49.push(String.fromCharCode(_0x4fca09)), _0xe26b49), []).join(""))));
        }, codecEncode: this.controller.config.codec.encode, codecDecode: this.controller.config.codec.decode } };
      }
      plugins = [];
      constructor(_0x243cd7, _0x22ba5c, _0x55a3b2 = {}) {
        for (const _0x31b343 of (this.controller = _0x243cd7, this.element = _0x22ba5c, this.options = _0x55a3b2, this.id = _0x27cee0(), this.prefix = this.controller.prefix + this.id + "/", _0x2eef57(_0x22ba5c), this.plugins = _0x55a3b2.plugins ?? [], this.fetchHandler = new _0x40c7d7.mK({ crossOriginIsolated: self.crossOriginIsolated, context: this.context, transport: _0x243cd7.transport, async sendSetCookie(_0x2dee0d, _0x226373) {
          await _0x243cd7.persistCookies(), await _0x243cd7.propagateCookieSync(_0x2dee0d.map(({ url: _0x485b1c, cookie: _0x105104 }) => ({ url: _0x485b1c.href, cookie: _0x105104 })), _0x226373);
        }, fetchBlobUrl: async (_0x371b92, _0x287697) => _0x23088c.Sr.fromNativeResponse(await fetch(_0x371b92, _0x287697)), fetchDataUrl: async (_0x4a61c9, _0x45c0bc) => _0x23088c.Sr.fromNativeResponse(await fetch(_0x4a61c9, _0x45c0bc)) }), this.hooks = { fetch: this.fetchHandler.hooks.fetch, init: _0x40c7d7.Cx.create(), error: _0x40c7d7.Cx.create() }, _0x22ba5c[_0x1c4651.I] = this, this.plugins)) {
          for (const _0x4088e5 of _0x31b343.dependencies) if (!this.plugins.find((_0x40de1a) => _0x40de1a.name === _0x4088e5)) throw Error("Dependency " + _0x4088e5 + " not found for plugin " + _0x31b343.name);
          _0x31b343.install(this);
        }
      }
      getPlugin(_0x78c9ab) {
        let _0x4eb9d8 = this.plugins.find((_0x3f20d6) => _0x3f20d6.name === _0x78c9ab);
        if (!_0x4eb9d8) throw Error("Plugin " + _0x78c9ab + " not found");
        return _0x4eb9d8;
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
      go(_0x327006) {
        _0x2eef57(this.element);
        let _0xda1b2e = (0, _0x40c7d7.Oy)(_0x327006, this.context, { origin: new URL(location.href), base: new URL(location.href) }, { destination: "document" });
        this.element.src = _0xda1b2e;
      }
    }
  })(), $scramjetController = _0xe11cd3;
})();
