var $scramjetController;
(() => {
  var _0x10354f = { 286(_0x40d535, _0x45d93d, _0x3c0400) {
    _0x3c0400.d(_0x45d93d, { I: () => _0x131f7f });
    let _0x131f7f = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 805(_0x10848b, _0x4b017a, _0x29f7e6) {
    _0x29f7e6.d(_0x4b017a, { C: () => _0x1d1ceb });
    class _0x1d1ceb {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x55a19b, _0xa28c9d, _0x1b4cf8) {
        this.methods = _0x55a19b, this.id = _0xa28c9d, this.sendRaw = _0x1b4cf8;
      }
      recieve(_0x53f442) {
        if (_0x53f442 == null || typeof _0x53f442 != "object") return;
        let _0x18aeee = _0x53f442[this.id];
        if (_0x18aeee == null || typeof _0x18aeee != "object") return;
        let _0x3874b3 = _0x18aeee.$type;
        if (_0x3874b3 === "response") {
          let _0x51fc92 = _0x18aeee.$token, _0xd8a4ca = _0x18aeee.$data, _0x2aa6f3 = _0x18aeee.$error, _0x44eb89 = this.promiseCallbacks.get(_0x51fc92);
          if (!_0x44eb89) return;
          this.promiseCallbacks.delete(_0x51fc92), _0x2aa6f3 !== void 0 ? _0x44eb89.reject(Error(_0x2aa6f3)) : _0x44eb89.resolve(_0xd8a4ca);
        } else if (_0x3874b3 === "request") {
          let _0x50d0db = _0x18aeee.$method, _0x220d04 = _0x18aeee.$args;
          this.methods[_0x50d0db](_0x220d04).then((_0x2938d0) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x18aeee.$token, $data: _0x2938d0?.[0] } }, _0x2938d0?.[1]);
          }).catch((_0x37c52d) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x18aeee.$token, $error: _0x37c52d?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x2d66df, _0x181573, _0x19023a = []) {
        let _0x1a138b = this.counter++;
        return new Promise((_0x3d44b0, _0x25c40c) => {
          this.promiseCallbacks.set(_0x1a138b, { resolve: _0x3d44b0, reject: _0x25c40c }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x2d66df, $args: _0x181573, $token: _0x1a138b } }, _0x19023a);
        });
      }
    }
  }, 423(_0x18aef0, _0x55b6f6, _0x149621) {
    _0x149621.d(_0x55b6f6, { Cx: () => _0x904aa5, I8: () => _0x58d273, bw: () => _0x224058, cP: () => _0x4d8494, ht: () => _0xcad3e7, pX: () => _0x428270 });
    let { BareResponse: _0x4b499f, CookieJar: _0x4d8494, IncrementalHtmlRewriter: _0xb652, Plugin: _0x50623b, QP: _0x52105b, SCRAMJETCLIENT: _0x428270, SCRAMJETCLIENTNAME: _0x41b355, ScramjetClient: _0x224058, ScramjetFetchHandler: _0x289de3, ScramjetFetchTrackedClient: _0x1097a4, ScramjetHeaders: _0x459845, ScramjetStorageJar: _0x58d273, Tap: _0x904aa5, createLocationProxy: _0x2f4887, defaultConfig: _0x39ec16, defaultConfigDev: _0x1b7643, flagEnabled: _0x57d79d, getOwnPropertyDescriptorHandler: _0x3b4f1c, getRewriter: _0x2edb27, getScriptBlockTypeString: _0x319ee6, htmlRules: _0x13bab1, isArchiveMimeType: _0x563090, isAudioOrVideoMimeType: _0x247411, isFontMimeType: _0x151cd9, isHtmlMimeType: _0x4f8660, isImageMimeType: _0xc0ff31, isInlineDisplayableMimeType: _0x3bf389, isJavascriptMimeType: _0x530b82, isJavascriptMimeTypeEssenceMatch: _0x74b7e9, isModuleScriptType: _0x3c44ca, isScriptType: _0x2b17e6, isScriptableMimeType: _0x2a7de3, isXmlMimeType: _0x56de2b, isZipBasedMimeType: _0x822297, isdedicated: _0x2acd60, isshared: _0x14c0a2, issw: _0x35d7f7, iswindow: _0x6bcf0c, isworker: _0x4125e5, nativeProviders: _0x55ae9f, parseMimeType: _0xedd19, providers: _0x2fbb1a, registerProviders: _0x100ecc, resetProviders: _0x16dfbf, rewriteBlob: _0x4b1b21, rewriteCss: _0x46e9c2, rewriteHtml: _0x58bba4, rewriteJs: _0xe2e496, rewriteJsInner: _0x11101b, rewriteSrcset: _0x50ac47, rewriteUrl: _0x11ec1e, rewriteWorkers: _0x5df7ea, setWasm: _0xcad3e7, unrewriteBlob: _0x3042cc, unrewriteCss: _0x2ec675, unrewriteHtml: _0x312ffe, unrewriteUrl: _0x157c90, versionInfo: _0x1b9b8d } = globalThis.$scramjet;
  } }, _0x44fef2 = {};
  function _0x31cb4(_0x1a3cb7) {
    var _0x5475e0 = _0x44fef2[_0x1a3cb7];
    if (_0x5475e0 !== void 0) return _0x5475e0.exports;
    var _0x4dc883 = _0x44fef2[_0x1a3cb7] = { exports: {} };
    return _0x10354f[_0x1a3cb7](_0x4dc883, _0x4dc883.exports, _0x31cb4), _0x4dc883.exports;
  }
  _0x31cb4.d = (_0x4045cf, _0x5e3a75) => {
    for (var _0x5a0e92 in _0x5e3a75) _0x31cb4.o(_0x5e3a75, _0x5a0e92) && !_0x31cb4.o(_0x4045cf, _0x5a0e92) && Object.defineProperty(_0x4045cf, _0x5a0e92, { enumerable: !0, get: _0x5e3a75[_0x5a0e92] });
  }, _0x31cb4.o = (_0x27ebf1, _0x5e6193) => Object.prototype.hasOwnProperty.call(_0x27ebf1, _0x5e6193), _0x31cb4.r = (_0x32028a) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x32028a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x32028a, "__esModule", { value: !0 });
  };
  var _0x363246 = {};
  (() => {
    _0x31cb4.r(_0x363246), _0x31cb4.d(_0x363246, { load: () => _0x2aba95 });
    var _0x5d8b98 = _0x31cb4(805), _0x40ceb5 = _0x31cb4(423), _0x430712 = _0x31cb4(286);
    let _0x20a7af = MessagePort.prototype.postMessage, _0x112ae9 = (_0x42375f, _0x13dc6e, _0x20cdce) => {
      _0x20a7af.call(_0x42375f, _0x13dc6e, _0x20cdce);
    };
    class _0x477f75 {
      port;
      readyResolve;
      readyReject;
      readyPromise = new Promise((e3, t3) => {
        this.readyResolve = e3, this.readyReject = t3;
      });
      ready = !1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      fail(_0x287617) {
        this.readyReject(_0x287617);
      }
      rpc;
      constructor(_0x29d4ca) {
        this.port = _0x29d4ca, this.rpc = new _0x5d8b98.C({ ready: async () => {
          this.readyResolve(void 0);
        } }, "transport", (_0x1076b3, _0x42ad38) => {
          _0x112ae9(_0x29d4ca, _0x1076b3, _0x42ad38);
        }), _0x29d4ca.onmessageerror = (_0x49b419) => {
        }, _0x29d4ca.onmessage = (_0x1dff72) => {
          this.rpc.recieve(_0x1dff72.data);
        }, _0x29d4ca.start();
      }
      connect(_0x58147d, _0x3c2343, _0x3fa01e, _0x15b65b, _0xc3a642, _0x3967d0, _0x9c65f5, _0x2536e2 = {}) {
        let _0xc31832 = new MessageChannel(), _0x4414ae = _0xc31832.port1;
        return this.rpc.call("connect", { url: _0x58147d.href, protocols: _0x3c2343, requestHeaders: _0x3fa01e, port: _0xc31832.port2, proxy: _0x2536e2.proxy }, [_0xc31832.port2]).then((_0x4725df) => {
          _0x4725df.result === "success" ? _0x15b65b(_0x4725df.protocol, _0x4725df.extensions) : _0x9c65f5(_0x4725df.error);
        }), _0x4414ae.onmessage = (_0x1dce0e) => {
          let _0x4d2887 = _0x1dce0e.data;
          _0x4d2887.type === "data" ? _0xc3a642(_0x4d2887.data) : _0x4d2887.type === "close" && _0x3967d0(_0x4d2887.code, _0x4d2887.reason);
        }, _0x4414ae.onmessageerror = (_0x564f20) => {
          _0x9c65f5("Message error in transport port");
        }, [(_0x49a9ad) => {
          _0x112ae9(_0x4414ae, { type: "data", data: _0x49a9ad }, _0x49a9ad instanceof ArrayBuffer ? [_0x49a9ad] : []);
        }, (_0x5a5316) => {
          _0x112ae9(_0x4414ae, { type: "close", code: _0x5a5316 });
        }];
      }
      async request(_0x51b3ce, _0x36053f, _0x56bb89, _0x35e272, _0x1ad0b4, _0x5138e9 = {}) {
        return await this.rpc.call("request", { remote: _0x51b3ce.href, method: _0x36053f, body: _0x56bb89, headers: _0x35e272, proxy: _0x5138e9.proxy });
      }
      async sendSetCookie(_0x3d25d6, _0x10086a = {}) {
        await this.rpc.call("sendSetCookie", { cookies: _0x3d25d6.map(({ url: _0x2d5e03, cookie: _0x51a690 }) => ({ url: _0x2d5e03.href, cookie: _0x51a690 })), options: _0x10086a });
      }
      async sendStorageMutation(_0x258f1d) {
        return await this.rpc.call("sendStorageMutation", { mutations: _0x258f1d }), !0;
      }
    }
    let _0x292fa7 = navigator.serviceWorker, _0x2981f7 = _0x40ceb5.pX in globalThis ? Promise.resolve(null) : _0x292fa7.getRegistration(new URL("/", document.baseURI).href).then((_0x156d0d) => _0x156d0d?.active ?? _0x292fa7.controller);
    function _0x2aba95(_0x3c32db) {
      if (_0x40ceb5.pX in globalThis) return void globalThis[_0x40ceb5.pX].syncDocumentInit({ initHeaders: _0x3c32db.initHeaders, history: _0x3c32db.history, cookies: _0x3c32db.cookies });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      if (typeof _0x3c32db.storagePartitionKey != "string" || _0x3c32db.storagePartitionKey.length === 0) throw Error("Scramjet document injection requires its storage partition key");
      let _0x1b6d73 = Uint8Array.from(atob(String(self.WASM)), (_0xf2ec29) => _0xf2ec29.charCodeAt(0));
      delete self.WASM, (0, _0x40ceb5.ht)(_0x1b6d73), new _0x34da04(globalThis, _0x3c32db);
    }
    class _0x34da04 {
      global;
      init;
      client;
      cookieJar;
      storage;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(_0x46639d, _0x1a94a8) {
        this.global = _0x46639d, this.init = _0x1a94a8;
        const _0x4d1c37 = new MessageChannel();
        this.transport = new _0x477f75(_0x4d1c37.port1), _0x2981f7.then((_0x2cf75b) => {
          if (_0x2cf75b === null) throw Error("Scramjet transport requires the root service worker");
          _0x2cf75b.postMessage({ $sw$initRemoteTransport: { port: _0x4d1c37.port2, prefix: this.init.prefix.href } }, [_0x4d1c37.port2]);
        }).catch((_0x4b6a68) => {
          this.transport.fail(_0x4b6a68 instanceof Error ? _0x4b6a68 : Error(String(_0x4b6a68)));
        }), this.cookieJar = new _0x40ceb5.cP(), this.cookieJar.load(this.init.cookies), this.storage = this.init.storage ? new _0x40ceb5.I8(this.init.storage, async (_0x21f083) => await this.transport.sendStorageMutation([_0x21f083])) : void 0, this.handleServiceWorkerCookieMessage = (_0x33f27c) => {
          if (!_0x33f27c.data?.$controller$setCookie || typeof _0x33f27c.data.$controller$setCookie != "object") return;
          let _0x4fbec4 = _0x33f27c.data.$controller$setCookie;
          if (_0x4fbec4.options?.clear && this.cookieJar.clear(), Array.isArray(_0x4fbec4.cookies)) {
            for (let _0x2a244f of _0x4fbec4.cookies) if (typeof _0x2a244f?.url == "string" && typeof _0x2a244f.cookie == "string") try {
              this.cookieJar.setCookies(_0x2a244f.cookie, new URL(_0x2a244f.url));
            } catch {
            }
          }
          typeof _0x4fbec4.id == "string" && _0x2981f7.then((_0x41d4b9) => {
            if (_0x41d4b9 === null) throw Error("Scramjet cookie acknowledgement requires the root service worker");
            _0x41d4b9.postMessage({ $sw$setCookieDone: { id: _0x4fbec4.id } });
          }).catch((_0x12e544) => {
          });
        }, _0x292fa7?.addEventListener("message", this.handleServiceWorkerCookieMessage), this.injectScramjet();
      }
      injectScramjet() {
        let _0x555979 = this.global.frameElement;
        _0x555979 && !_0x555979.name && (window.name = _0x555979.name = Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x12fa16) => _0x12fa16.toString(16).padStart(2, "0")).join(""));
        let _0x5bee0e = _0x555979?.[_0x430712.I], _0x187c65 = !0;
        if (!_0x5bee0e) {
          _0x187c65 = !1;
          let _0x2fe02b = this.global.window;
          for (; _0x2fe02b.parent !== _0x2fe02b; ) {
            let _0x305128 = Reflect.get(_0x2fe02b, _0x40ceb5.pX);
            if (!_0x305128) {
              _0x2fe02b = _0x2fe02b.parent.window;
              continue;
            }
            let _0x27ab7e = _0x305128.descriptors.get("window.frameElement", _0x2fe02b);
            if (_0x27ab7e && _0x27ab7e[_0x430712.I]) {
              _0x5bee0e = _0x27ab7e[_0x430712.I];
              break;
            }
            _0x2fe02b = _0x2fe02b.parent.window;
          }
        }
        let _0xf4e69a = { config: this.init.sjconfig, prefix: this.init.prefix, cookieJar: this.cookieJar, storage: this.storage, storagePartitionKey: this.init.storagePartitionKey, interface: { getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.storage, this.init.codecEncode, this.init.codecDecode, this.init.storagePartitionKey), codecEncode: this.init.codecEncode, codecDecode: this.init.codecDecode } };
        this.client = new _0x40ceb5.bw(this.global, { context: _0xf4e69a, transport: this.transport, sendSetCookie: async (_0x50239b, _0x367795) => {
          await this.transport.sendSetCookie(_0x50239b, _0x367795);
        }, shouldBlockMessageEvent: (_0x29d9ca) => {
          let _0x5bb2c1 = _0x29d9ca.data;
          return !!_0x5bb2c1 && typeof _0x5bb2c1 == "object" && ("$controller$setCookie" in _0x5bb2c1 || "$controller$swrevive" in _0x5bb2c1 || "$sw$setCookieDone" in _0x5bb2c1 || "$sw$initRemoteTransport" in _0x5bb2c1);
        }, hookSubcontext: (_0x491527) => new _0x34da04(_0x491527, { ...this.init, cookies: this.cookieJar.dump(), storage: this.storage?.dump() ?? null }).client, initHeaders: this.init.initHeaders, history: this.init.history });
        let _0x5616ad = { window: this.global.window, client: this.client, isTopLevel: _0x187c65 };
        _0x5bee0e && _0x40ceb5.Cx.dispatch(_0x5bee0e.hooks.init.pre, _0x5616ad, {}), this.client.hook(), _0x5bee0e && _0x40ceb5.Cx.dispatch(_0x5bee0e.hooks.init.post, _0x5616ad, {});
      }
    }
  })(), $scramjetController = _0x363246;
})();
