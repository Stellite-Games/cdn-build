var $scramjetController;
(() => {
  var _0x74982b = { 286(_0x341b54, _0x3e75a2, _0x4df3df) {
    _0x4df3df.d(_0x3e75a2, { I: () => _0x1b036b });
    let _0x1b036b = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 805(_0x32128e, _0x515de5, _0x239188) {
    _0x239188.d(_0x515de5, { C: () => _0x110e56 });
    class _0x110e56 {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x27f99e, _0x126dc1, _0x5e8ddf) {
        this.methods = _0x27f99e, this.id = _0x126dc1, this.sendRaw = _0x5e8ddf;
      }
      recieve(_0x430bf7) {
        if (_0x430bf7 == null || typeof _0x430bf7 != "object") return;
        let _0x1b1ae8 = _0x430bf7[this.id];
        if (_0x1b1ae8 == null || typeof _0x1b1ae8 != "object") return;
        let _0x445ad8 = _0x1b1ae8.$type;
        if (_0x445ad8 === "response") {
          let _0x11694b = _0x1b1ae8.$token, _0x5da6a2 = _0x1b1ae8.$data, _0xf800a = _0x1b1ae8.$error, _0x11a7c9 = this.promiseCallbacks.get(_0x11694b);
          if (!_0x11a7c9) return;
          this.promiseCallbacks.delete(_0x11694b), _0xf800a !== void 0 ? _0x11a7c9.reject(Error(_0xf800a)) : _0x11a7c9.resolve(_0x5da6a2);
        } else if (_0x445ad8 === "request") {
          let _0x365172 = _0x1b1ae8.$method, _0x1eef56 = _0x1b1ae8.$args;
          this.methods[_0x365172](_0x1eef56).then((_0x39ec0d) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x1b1ae8.$token, $data: _0x39ec0d?.[0] } }, _0x39ec0d?.[1]);
          }).catch((_0x1393ce) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x1b1ae8.$token, $error: _0x1393ce?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x1ea2fe, _0x27d12c, _0x1f4788 = []) {
        let _0x58f295 = this.counter++;
        return new Promise((_0x182095, _0x58b649) => {
          this.promiseCallbacks.set(_0x58f295, { resolve: _0x182095, reject: _0x58b649 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x1ea2fe, $args: _0x27d12c, $token: _0x58f295 } }, _0x1f4788);
        });
      }
    }
  }, 423(_0x466bca, _0x33a259, _0x3d9279) {
    _0x3d9279.d(_0x33a259, { Cx: () => _0x138964, I8: () => _0x146e72, bw: () => _0x51e327, cP: () => _0x214424, ht: () => _0x5b0c4a, pX: () => _0x232e35 });
    let { BareResponse: _0x210c3a, CookieJar: _0x214424, IncrementalHtmlRewriter: _0x25d83e, Plugin: _0x47e087, QP: _0x566cf9, SCRAMJETCLIENT: _0x232e35, SCRAMJETCLIENTNAME: _0x1c009, ScramjetClient: _0x51e327, ScramjetFetchHandler: _0x1db76e, ScramjetFetchTrackedClient: _0x3605ee, ScramjetHeaders: _0x53626b, ScramjetStorageJar: _0x146e72, Tap: _0x138964, createLocationProxy: _0x2e24a1, defaultConfig: _0x28823e, defaultConfigDev: _0x17d447, flagEnabled: _0x241722, getOwnPropertyDescriptorHandler: _0x91344e, getRewriter: _0x479384, getScriptBlockTypeString: _0x378b58, htmlRules: _0xf59db0, isArchiveMimeType: _0x25f137, isAudioOrVideoMimeType: _0x45b0f5, isFontMimeType: _0x463174, isHtmlMimeType: _0x58a9ed, isImageMimeType: _0x1a6462, isInlineDisplayableMimeType: _0x349d4e, isJavascriptMimeType: _0x2f1b6d, isJavascriptMimeTypeEssenceMatch: _0x90b0fc, isModuleScriptType: _0x37ed89, isScriptType: _0x28070a, isScriptableMimeType: _0x243129, isXmlMimeType: _0x4ac38e, isZipBasedMimeType: _0x272849, isdedicated: _0x4f2667, isshared: _0x365667, issw: _0x5c9e25, iswindow: _0x399efc, isworker: _0x133c04, nativeProviders: _0x234abf, parseMimeType: _0x3b66ee, providers: _0x5aa73d, registerProviders: _0x51f7a3, resetProviders: _0x54f643, rewriteBlob: _0x4c72ed, rewriteCss: _0x573583, rewriteHtml: _0x81db0a, rewriteJs: _0x16b61a, rewriteJsInner: _0x51f3b8, rewriteSrcset: _0x397db5, rewriteUrl: _0x3a07a1, rewriteWorkers: _0x48f2c1, setWasm: _0x5b0c4a, unrewriteBlob: _0x2111a3, unrewriteCss: _0x3558f2, unrewriteHtml: _0x12d89e, unrewriteUrl: _0x383983, versionInfo: _0x2b86bc } = globalThis.$scramjet;
  } }, _0xbbddd7 = {};
  function _0xcd0fd9(_0x249d89) {
    var _0x4cc3c4 = _0xbbddd7[_0x249d89];
    if (_0x4cc3c4 !== void 0) return _0x4cc3c4.exports;
    var _0x52f09b = _0xbbddd7[_0x249d89] = { exports: {} };
    return _0x74982b[_0x249d89](_0x52f09b, _0x52f09b.exports, _0xcd0fd9), _0x52f09b.exports;
  }
  _0xcd0fd9.d = (_0x14017f, _0x73e9d) => {
    for (var _0xdd6482 in _0x73e9d) _0xcd0fd9.o(_0x73e9d, _0xdd6482) && !_0xcd0fd9.o(_0x14017f, _0xdd6482) && Object.defineProperty(_0x14017f, _0xdd6482, { enumerable: !0, get: _0x73e9d[_0xdd6482] });
  }, _0xcd0fd9.o = (_0x26dff3, _0x155328) => Object.prototype.hasOwnProperty.call(_0x26dff3, _0x155328), _0xcd0fd9.r = (_0x3439c3) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x3439c3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x3439c3, "__esModule", { value: !0 });
  };
  var _0x1132de = {};
  (() => {
    _0xcd0fd9.r(_0x1132de), _0xcd0fd9.d(_0x1132de, { load: () => _0x35c635 });
    var _0x4fb66a = _0xcd0fd9(805), _0x548daf = _0xcd0fd9(423), _0x43eee6 = _0xcd0fd9(286);
    let _0x2d2e08 = MessagePort.prototype.postMessage, _0x16e1a5 = (_0x23bf48, _0x3ad789, _0x5e7e3b) => {
      _0x2d2e08.call(_0x23bf48, _0x3ad789, _0x5e7e3b);
    };
    class _0xfd06d5 {
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
      fail(_0x46c270) {
        this.readyReject(_0x46c270);
      }
      rpc;
      constructor(_0x4080fa) {
        this.port = _0x4080fa, this.rpc = new _0x4fb66a.C({ ready: async () => {
          this.readyResolve(void 0);
        } }, "transport", (_0x2bc98d, _0x11b0d2) => {
          _0x16e1a5(_0x4080fa, _0x2bc98d, _0x11b0d2);
        }), _0x4080fa.onmessageerror = (_0x43736a) => {
        }, _0x4080fa.onmessage = (_0x5115e9) => {
          this.rpc.recieve(_0x5115e9.data);
        }, _0x4080fa.start();
      }
      connect(_0x2ecb26, _0x3909af, _0x1ff49f, _0xb4daad, _0x3dd36a, _0x4c31e7, _0x3e3e7a, _0x320c7f = {}) {
        let _0x1471dd = new MessageChannel(), _0x2e9f18 = _0x1471dd.port1;
        return this.rpc.call("connect", { url: _0x2ecb26.href, protocols: _0x3909af, requestHeaders: _0x1ff49f, port: _0x1471dd.port2, proxy: _0x320c7f.proxy }, [_0x1471dd.port2]).then((_0x9e4913) => {
          _0x9e4913.result === "success" ? _0xb4daad(_0x9e4913.protocol, _0x9e4913.extensions) : _0x3e3e7a(_0x9e4913.error);
        }), _0x2e9f18.onmessage = (_0xb64d80) => {
          let _0x4ec4cf = _0xb64d80.data;
          _0x4ec4cf.type === "data" ? _0x3dd36a(_0x4ec4cf.data) : _0x4ec4cf.type === "close" && _0x4c31e7(_0x4ec4cf.code, _0x4ec4cf.reason);
        }, _0x2e9f18.onmessageerror = (_0x32febf) => {
          _0x3e3e7a("Message error in transport port");
        }, [(_0x138643) => {
          _0x16e1a5(_0x2e9f18, { type: "data", data: _0x138643 }, _0x138643 instanceof ArrayBuffer ? [_0x138643] : []);
        }, (_0x25bea9) => {
          _0x16e1a5(_0x2e9f18, { type: "close", code: _0x25bea9 });
        }];
      }
      async request(_0x105536, _0x334c9d, _0x5a5807, _0x56e889, _0x719505, _0x102606 = {}) {
        return await this.rpc.call("request", { remote: _0x105536.href, method: _0x334c9d, body: _0x5a5807, headers: _0x56e889, proxy: _0x102606.proxy });
      }
      async sendSetCookie(_0xa6c2db, _0x360d99 = {}) {
        await this.rpc.call("sendSetCookie", { cookies: _0xa6c2db.map(({ url: _0x36f30e, cookie: _0x22dfe6 }) => ({ url: _0x36f30e.href, cookie: _0x22dfe6 })), options: _0x360d99 });
      }
      async sendStorageMutation(_0x63be3f) {
        return await this.rpc.call("sendStorageMutation", { mutations: _0x63be3f }), !0;
      }
    }
    let _0x274b36 = navigator.serviceWorker, _0x5372c6 = _0x548daf.pX in globalThis ? Promise.resolve(null) : _0x274b36.getRegistration(new URL("/", document.baseURI).href).then((_0x10ac34) => _0x10ac34?.active ?? _0x274b36.controller);
    function _0x35c635(_0x12cdc4) {
      if (_0x548daf.pX in globalThis) return void globalThis[_0x548daf.pX].syncDocumentInit({ initHeaders: _0x12cdc4.initHeaders, history: _0x12cdc4.history, cookies: _0x12cdc4.cookies });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      if (typeof _0x12cdc4.storagePartitionKey != "string" || _0x12cdc4.storagePartitionKey.length === 0) throw Error("Scramjet document injection requires its storage partition key");
      let _0x1757df = Uint8Array.from(atob(String(self.WASM)), (_0x3b59be) => _0x3b59be.charCodeAt(0));
      delete self.WASM, (0, _0x548daf.ht)(_0x1757df), new _0x2b68de(globalThis, _0x12cdc4);
    }
    class _0x2b68de {
      global;
      init;
      client;
      cookieJar;
      storage;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(_0x56af38, _0x1f7869) {
        this.global = _0x56af38, this.init = _0x1f7869;
        const _0x3a5263 = new MessageChannel();
        this.transport = new _0xfd06d5(_0x3a5263.port1), _0x5372c6.then((_0x5c6043) => {
          if (_0x5c6043 === null) throw Error("Scramjet transport requires the root service worker");
          _0x5c6043.postMessage({ $sw$initRemoteTransport: { port: _0x3a5263.port2, prefix: this.init.prefix.href } }, [_0x3a5263.port2]);
        }).catch((_0x55dad8) => {
          this.transport.fail(_0x55dad8 instanceof Error ? _0x55dad8 : Error(String(_0x55dad8)));
        }), this.cookieJar = new _0x548daf.cP(), this.cookieJar.load(this.init.cookies), this.storage = this.init.storage ? new _0x548daf.I8(this.init.storage, async (_0x15990f) => await this.transport.sendStorageMutation([_0x15990f])) : void 0, this.handleServiceWorkerCookieMessage = (_0x3309b4) => {
          if (!_0x3309b4.data?.$controller$setCookie || typeof _0x3309b4.data.$controller$setCookie != "object") return;
          let _0x19ee17 = _0x3309b4.data.$controller$setCookie;
          if (_0x19ee17.options?.clear && this.cookieJar.clear(), Array.isArray(_0x19ee17.cookies)) {
            for (let _0x4187c0 of _0x19ee17.cookies) if (typeof _0x4187c0?.url == "string" && typeof _0x4187c0.cookie == "string") try {
              this.cookieJar.setCookies(_0x4187c0.cookie, new URL(_0x4187c0.url));
            } catch {
            }
          }
          typeof _0x19ee17.id == "string" && _0x5372c6.then((_0x3ac47a) => {
            if (_0x3ac47a === null) throw Error("Scramjet cookie acknowledgement requires the root service worker");
            _0x3ac47a.postMessage({ $sw$setCookieDone: { id: _0x19ee17.id } });
          }).catch((_0x32aacf) => {
          });
        }, _0x274b36?.addEventListener("message", this.handleServiceWorkerCookieMessage), this.injectScramjet();
      }
      injectScramjet() {
        let _0x533aa3 = this.global.frameElement;
        _0x533aa3 && !_0x533aa3.name && (window.name = _0x533aa3.name = Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x8dc2d2) => _0x8dc2d2.toString(16).padStart(2, "0")).join(""));
        let _0x299a37 = _0x533aa3?.[_0x43eee6.I], _0x112417 = !0;
        if (!_0x299a37) {
          _0x112417 = !1;
          let _0x6793b4 = this.global.window;
          for (; _0x6793b4.parent !== _0x6793b4; ) {
            let _0x41b739 = Reflect.get(_0x6793b4, _0x548daf.pX);
            if (!_0x41b739) {
              _0x6793b4 = _0x6793b4.parent.window;
              continue;
            }
            let _0x5bfd23 = _0x41b739.descriptors.get("window.frameElement", _0x6793b4);
            if (_0x5bfd23 && _0x5bfd23[_0x43eee6.I]) {
              _0x299a37 = _0x5bfd23[_0x43eee6.I];
              break;
            }
            _0x6793b4 = _0x6793b4.parent.window;
          }
        }
        let _0x5c1574 = { config: this.init.sjconfig, prefix: this.init.prefix, cookieJar: this.cookieJar, storage: this.storage, storagePartitionKey: this.init.storagePartitionKey, interface: { getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.storage, this.init.codecEncode, this.init.codecDecode, this.init.storagePartitionKey), codecEncode: this.init.codecEncode, codecDecode: this.init.codecDecode } };
        this.client = new _0x548daf.bw(this.global, { context: _0x5c1574, transport: this.transport, sendSetCookie: async (_0x5e8acd, _0x38ed09) => {
          await this.transport.sendSetCookie(_0x5e8acd, _0x38ed09);
        }, shouldBlockMessageEvent: (_0x5ef57e) => {
          let _0x2a9362 = _0x5ef57e.data;
          return !!_0x2a9362 && typeof _0x2a9362 == "object" && ("$controller$setCookie" in _0x2a9362 || "$controller$swrevive" in _0x2a9362 || "$sw$setCookieDone" in _0x2a9362 || "$sw$initRemoteTransport" in _0x2a9362);
        }, hookSubcontext: (_0x508983) => new _0x2b68de(_0x508983, { ...this.init, cookies: this.cookieJar.dump(), storage: this.storage?.dump() ?? null }).client, initHeaders: this.init.initHeaders, history: this.init.history });
        let _0x54a6cc = { window: this.global.window, client: this.client, isTopLevel: _0x112417 };
        _0x299a37 && _0x548daf.Cx.dispatch(_0x299a37.hooks.init.pre, _0x54a6cc, {}), this.client.hook(), _0x299a37 && _0x548daf.Cx.dispatch(_0x299a37.hooks.init.post, _0x54a6cc, {});
      }
    }
  })(), $scramjetController = _0x1132de;
})();
