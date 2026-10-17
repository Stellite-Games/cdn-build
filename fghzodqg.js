var $scramjetController;
(() => {
  var _0xa3fce6 = { 286(_0x2b722e, _0x218539, _0x134907) {
    _0x134907.d(_0x218539, { I: () => _0x57ce12 });
    let _0x57ce12 = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 805(_0x3f6535, _0x132ce9, _0x31ca2d) {
    _0x31ca2d.d(_0x132ce9, { C: () => _0x1e9f23 });
    class _0x1e9f23 {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x4b4ae2, _0x1f0cb5, _0x3fc6e3) {
        this.methods = _0x4b4ae2, this.id = _0x1f0cb5, this.sendRaw = _0x3fc6e3;
      }
      recieve(_0x1b845f) {
        if (_0x1b845f == null || typeof _0x1b845f != "object") return;
        let _0x436d30 = _0x1b845f[this.id];
        if (_0x436d30 == null || typeof _0x436d30 != "object") return;
        let _0x36e5d9 = _0x436d30.$type;
        if (_0x36e5d9 === "response") {
          let _0x145926 = _0x436d30.$token, _0x507244 = _0x436d30.$data, _0x2cbb64 = _0x436d30.$error, _0x1b2f5a = this.promiseCallbacks.get(_0x145926);
          if (!_0x1b2f5a) return;
          this.promiseCallbacks.delete(_0x145926), _0x2cbb64 !== void 0 ? _0x1b2f5a.reject(Error(_0x2cbb64)) : _0x1b2f5a.resolve(_0x507244);
        } else if (_0x36e5d9 === "request") {
          let _0x769a6f = _0x436d30.$method, _0x5c1fdf = _0x436d30.$args;
          this.methods[_0x769a6f](_0x5c1fdf).then((_0x2a4226) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x436d30.$token, $data: _0x2a4226?.[0] } }, _0x2a4226?.[1]);
          }).catch((_0x4476b5) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x436d30.$token, $error: _0x4476b5?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x163df0, _0x4e10f2, _0x56d5bb = []) {
        let _0x31f066 = this.counter++;
        return new Promise((_0x14492f, _0x58daa0) => {
          this.promiseCallbacks.set(_0x31f066, { resolve: _0x14492f, reject: _0x58daa0 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x163df0, $args: _0x4e10f2, $token: _0x31f066 } }, _0x56d5bb);
        });
      }
    }
  }, 423(_0x3ad302, _0x2e79a1, _0x196d70) {
    _0x196d70.d(_0x2e79a1, { Cx: () => _0x45c7b0, I8: () => _0x44c689, bw: () => _0xf51fc6, cP: () => _0x48f8bc, ht: () => _0x24ecb0, pX: () => _0xb78be6 });
    let { BareResponse: _0x114132, CookieJar: _0x48f8bc, IncrementalHtmlRewriter: _0x5a87f9, Plugin: _0x2e70c4, QP: _0x2b47cc, SCRAMJETCLIENT: _0xb78be6, SCRAMJETCLIENTNAME: _0x16d7f1, ScramjetClient: _0xf51fc6, ScramjetFetchHandler: _0x740a53, ScramjetFetchTrackedClient: _0x1f2615, ScramjetHeaders: _0x275340, ScramjetStorageJar: _0x44c689, Tap: _0x45c7b0, createLocationProxy: _0x16add7, defaultConfig: _0x5a732f, defaultConfigDev: _0x2135f6, flagEnabled: _0x1d2cc4, getOwnPropertyDescriptorHandler: _0x2f41ed, getRewriter: _0x3deb72, getScriptBlockTypeString: _0x17c20e, htmlRules: _0x2b9ef8, isArchiveMimeType: _0x3ba81b, isAudioOrVideoMimeType: _0x18c635, isFontMimeType: _0x42301f, isHtmlMimeType: _0x13f50d, isImageMimeType: _0x30a38e, isInlineDisplayableMimeType: _0x23f169, isJavascriptMimeType: _0x321383, isJavascriptMimeTypeEssenceMatch: _0x318fdd, isModuleScriptType: _0x21a691, isScriptType: _0x5e56e1, isScriptableMimeType: _0x115947, isXmlMimeType: _0x421b85, isZipBasedMimeType: _0x2061df, isdedicated: _0x4d9ea7, isshared: _0x4c51aa, issw: _0x14ca39, iswindow: _0xc6ea13, isworker: _0x531269, nativeProviders: _0x7d79ab, parseMimeType: _0x32cd0e, providers: _0x16ea3b, registerProviders: _0x334f85, resetProviders: _0x556a69, rewriteBlob: _0x567b98, rewriteCss: _0x256a5f, rewriteHtml: _0x30fa03, rewriteJs: _0x1e08d0, rewriteJsInner: _0x99c320, rewriteSrcset: _0x22f424, rewriteUrl: _0x17618b, rewriteWorkers: _0x86999f, setWasm: _0x24ecb0, unrewriteBlob: _0x5dc813, unrewriteCss: _0x1cd115, unrewriteHtml: _0x4fe1ab, unrewriteUrl: _0x22cdc7, versionInfo: _0x3d9e0e } = globalThis.$scramjet;
  } }, _0x4ed8de = {};
  function _0x4dcd7d(_0x2d4b60) {
    var _0x3ac838 = _0x4ed8de[_0x2d4b60];
    if (_0x3ac838 !== void 0) return _0x3ac838.exports;
    var _0x14f99c = _0x4ed8de[_0x2d4b60] = { exports: {} };
    return _0xa3fce6[_0x2d4b60](_0x14f99c, _0x14f99c.exports, _0x4dcd7d), _0x14f99c.exports;
  }
  _0x4dcd7d.d = (_0x2709be, _0x1431d0) => {
    for (var _0x4e908e in _0x1431d0) _0x4dcd7d.o(_0x1431d0, _0x4e908e) && !_0x4dcd7d.o(_0x2709be, _0x4e908e) && Object.defineProperty(_0x2709be, _0x4e908e, { enumerable: !0, get: _0x1431d0[_0x4e908e] });
  }, _0x4dcd7d.o = (_0xc426da, _0x161a46) => Object.prototype.hasOwnProperty.call(_0xc426da, _0x161a46), _0x4dcd7d.r = (_0x2ddd0f) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x2ddd0f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x2ddd0f, "__esModule", { value: !0 });
  };
  var _0xfc0906 = {};
  (() => {
    _0x4dcd7d.r(_0xfc0906), _0x4dcd7d.d(_0xfc0906, { load: () => _0x119a05 });
    var _0x4e1883 = _0x4dcd7d(805), _0x54cbad = _0x4dcd7d(423), _0x4eae52 = _0x4dcd7d(286);
    let _0x16bf6c = MessagePort.prototype.postMessage, _0x4621c6 = (_0x421320, _0x5e7517, _0x18e478) => {
      _0x16bf6c.call(_0x421320, _0x5e7517, _0x18e478);
    };
    class _0x110948 {
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
      fail(_0x120013) {
        this.readyReject(_0x120013);
      }
      rpc;
      constructor(_0x1cc646) {
        this.port = _0x1cc646, this.rpc = new _0x4e1883.C({ ready: async () => {
          this.readyResolve(void 0);
        } }, "transport", (_0x20d453, _0x3cc193) => {
          _0x4621c6(_0x1cc646, _0x20d453, _0x3cc193);
        }), _0x1cc646.onmessageerror = (_0x487f6a) => {
        }, _0x1cc646.onmessage = (_0x3d0863) => {
          this.rpc.recieve(_0x3d0863.data);
        }, _0x1cc646.start();
      }
      connect(_0x913b67, _0x586370, _0xbc0db2, _0x5ebb0e, _0x38bf13, _0x159e78, _0x2eedf5, _0x2b0ff2 = {}) {
        let _0x28831f = new MessageChannel(), _0x579c3a = _0x28831f.port1;
        return this.rpc.call("connect", { url: _0x913b67.href, protocols: _0x586370, requestHeaders: _0xbc0db2, port: _0x28831f.port2, proxy: _0x2b0ff2.proxy }, [_0x28831f.port2]).then((_0x4e504d) => {
          _0x4e504d.result === "success" ? _0x5ebb0e(_0x4e504d.protocol, _0x4e504d.extensions) : _0x2eedf5(_0x4e504d.error);
        }), _0x579c3a.onmessage = (_0x4ff3dc) => {
          let _0x47c1ff = _0x4ff3dc.data;
          _0x47c1ff.type === "data" ? _0x38bf13(_0x47c1ff.data) : _0x47c1ff.type === "close" && _0x159e78(_0x47c1ff.code, _0x47c1ff.reason);
        }, _0x579c3a.onmessageerror = (_0x287cd2) => {
          _0x2eedf5("Message error in transport port");
        }, [(_0x75884f) => {
          _0x4621c6(_0x579c3a, { type: "data", data: _0x75884f }, _0x75884f instanceof ArrayBuffer ? [_0x75884f] : []);
        }, (_0x5a24b7) => {
          _0x4621c6(_0x579c3a, { type: "close", code: _0x5a24b7 });
        }];
      }
      async request(_0x595478, _0x1c0efc, _0x17b410, _0x898cd3, _0x46ba6b, _0xa4718a = {}) {
        return await this.rpc.call("request", { remote: _0x595478.href, method: _0x1c0efc, body: _0x17b410, headers: _0x898cd3, proxy: _0xa4718a.proxy });
      }
      async sendSetCookie(_0x423a9b, _0x55d6f2 = {}) {
        await this.rpc.call("sendSetCookie", { cookies: _0x423a9b.map(({ url: _0x3527f9, cookie: _0x1e1cff }) => ({ url: _0x3527f9.href, cookie: _0x1e1cff })), options: _0x55d6f2 });
      }
      async sendStorageMutation(_0x1bff84) {
        return await this.rpc.call("sendStorageMutation", { mutations: _0x1bff84 }), !0;
      }
    }
    let _0x544665 = navigator.serviceWorker, _0x248edb = _0x54cbad.pX in globalThis ? Promise.resolve(null) : _0x544665.getRegistration(new URL("/", document.baseURI).href).then((_0x2c0f34) => _0x2c0f34?.active ?? _0x544665.controller);
    function _0x119a05(_0x5295f0) {
      if (_0x54cbad.pX in globalThis) return void globalThis[_0x54cbad.pX].syncDocumentInit({ initHeaders: _0x5295f0.initHeaders, history: _0x5295f0.history, cookies: _0x5295f0.cookies });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      if (typeof _0x5295f0.storagePartitionKey != "string" || _0x5295f0.storagePartitionKey.length === 0) throw Error("Scramjet document injection requires its storage partition key");
      let _0x2f7846 = Uint8Array.from(atob(String(self.WASM)), (_0x19b869) => _0x19b869.charCodeAt(0));
      delete self.WASM, (0, _0x54cbad.ht)(_0x2f7846), new _0x28f760(globalThis, _0x5295f0);
    }
    class _0x28f760 {
      global;
      init;
      client;
      cookieJar;
      storage;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(_0x4906eb, _0x264587) {
        this.global = _0x4906eb, this.init = _0x264587;
        const _0x281f34 = new MessageChannel();
        this.transport = new _0x110948(_0x281f34.port1), _0x248edb.then((_0x5cacc9) => {
          if (_0x5cacc9 === null) throw Error("Scramjet transport requires the root service worker");
          _0x5cacc9.postMessage({ $sw$initRemoteTransport: { port: _0x281f34.port2, prefix: this.init.prefix.href } }, [_0x281f34.port2]);
        }).catch((_0x4e1276) => {
          this.transport.fail(_0x4e1276 instanceof Error ? _0x4e1276 : Error(String(_0x4e1276)));
        }), this.cookieJar = new _0x54cbad.cP(), this.cookieJar.load(this.init.cookies), this.storage = this.init.storage ? new _0x54cbad.I8(this.init.storage, async (_0x25697b) => await this.transport.sendStorageMutation([_0x25697b])) : void 0, this.handleServiceWorkerCookieMessage = (_0x2636ea) => {
          if (!_0x2636ea.data?.$controller$setCookie || typeof _0x2636ea.data.$controller$setCookie != "object") return;
          let _0xf96607 = _0x2636ea.data.$controller$setCookie;
          if (_0xf96607.options?.clear && this.cookieJar.clear(), Array.isArray(_0xf96607.cookies)) {
            for (let _0x22b36e of _0xf96607.cookies) if (typeof _0x22b36e?.url == "string" && typeof _0x22b36e.cookie == "string") try {
              this.cookieJar.setCookies(_0x22b36e.cookie, new URL(_0x22b36e.url));
            } catch {
            }
          }
          typeof _0xf96607.id == "string" && _0x248edb.then((_0x5c954c) => {
            if (_0x5c954c === null) throw Error("Scramjet cookie acknowledgement requires the root service worker");
            _0x5c954c.postMessage({ $sw$setCookieDone: { id: _0xf96607.id } });
          }).catch((_0x8855cc) => {
          });
        }, _0x544665?.addEventListener("message", this.handleServiceWorkerCookieMessage), this.injectScramjet();
      }
      injectScramjet() {
        let _0x3d63b5 = this.global.frameElement;
        _0x3d63b5 && !_0x3d63b5.name && (window.name = _0x3d63b5.name = Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x227e9a) => _0x227e9a.toString(16).padStart(2, "0")).join(""));
        let _0x226ce7 = _0x3d63b5?.[_0x4eae52.I], _0x18485d = !0;
        if (!_0x226ce7) {
          _0x18485d = !1;
          let _0x4792eb = this.global.window;
          for (; _0x4792eb.parent !== _0x4792eb; ) {
            let _0x1836d9 = Reflect.get(_0x4792eb, _0x54cbad.pX);
            if (!_0x1836d9) {
              _0x4792eb = _0x4792eb.parent.window;
              continue;
            }
            let _0x4293f9 = _0x1836d9.descriptors.get("window.frameElement", _0x4792eb);
            if (_0x4293f9 && _0x4293f9[_0x4eae52.I]) {
              _0x226ce7 = _0x4293f9[_0x4eae52.I];
              break;
            }
            _0x4792eb = _0x4792eb.parent.window;
          }
        }
        let _0x1406d4 = { config: this.init.sjconfig, prefix: this.init.prefix, cookieJar: this.cookieJar, storage: this.storage, storagePartitionKey: this.init.storagePartitionKey, interface: { getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.storage, this.init.codecEncode, this.init.codecDecode, this.init.storagePartitionKey), codecEncode: this.init.codecEncode, codecDecode: this.init.codecDecode } };
        this.client = new _0x54cbad.bw(this.global, { context: _0x1406d4, transport: this.transport, sendSetCookie: async (_0x5929e7, _0x4eb92d) => {
          await this.transport.sendSetCookie(_0x5929e7, _0x4eb92d);
        }, shouldBlockMessageEvent: (_0x1f3f05) => {
          let _0x3263ac = _0x1f3f05.data;
          return !!_0x3263ac && typeof _0x3263ac == "object" && ("$controller$setCookie" in _0x3263ac || "$controller$swrevive" in _0x3263ac || "$sw$setCookieDone" in _0x3263ac || "$sw$initRemoteTransport" in _0x3263ac);
        }, hookSubcontext: (_0x1862c4) => new _0x28f760(_0x1862c4, { ...this.init, cookies: this.cookieJar.dump(), storage: this.storage?.dump() ?? null }).client, initHeaders: this.init.initHeaders, history: this.init.history });
        let _0x45a15e = { window: this.global.window, client: this.client, isTopLevel: _0x18485d };
        _0x226ce7 && _0x54cbad.Cx.dispatch(_0x226ce7.hooks.init.pre, _0x45a15e, {}), this.client.hook(), _0x226ce7 && _0x54cbad.Cx.dispatch(_0x226ce7.hooks.init.post, _0x45a15e, {});
      }
    }
  })(), $scramjetController = _0xfc0906;
})();
