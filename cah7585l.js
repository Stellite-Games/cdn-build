var $scramjetController;
(() => {
  var _0x8a4cd9 = { 286(_0x3bfd66, _0x493fd1, _0x309283) {
    _0x309283.d(_0x493fd1, { I: () => _0x32cdfd });
    let _0x32cdfd = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 805(_0x3f8378, _0xf252a6, _0x1c1c05) {
    _0x1c1c05.d(_0xf252a6, { C: () => _0x2568d3 });
    class _0x2568d3 {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0xd0790, _0x5036cc, _0x4e1515) {
        this.methods = _0xd0790, this.id = _0x5036cc, this.sendRaw = _0x4e1515;
      }
      recieve(_0x51b47b) {
        if (_0x51b47b == null || typeof _0x51b47b != "object") return;
        let _0x5510aa = _0x51b47b[this.id];
        if (_0x5510aa == null || typeof _0x5510aa != "object") return;
        let _0x2b4c11 = _0x5510aa.$type;
        if (_0x2b4c11 === "response") {
          let _0x1177c7 = _0x5510aa.$token, _0x592594 = _0x5510aa.$data, _0x8e8f7d = _0x5510aa.$error, _0x377b90 = this.promiseCallbacks.get(_0x1177c7);
          if (!_0x377b90) return;
          this.promiseCallbacks.delete(_0x1177c7), _0x8e8f7d !== void 0 ? _0x377b90.reject(Error(_0x8e8f7d)) : _0x377b90.resolve(_0x592594);
        } else if (_0x2b4c11 === "request") {
          let _0x10da0c = _0x5510aa.$method, _0x283394 = _0x5510aa.$args;
          this.methods[_0x10da0c](_0x283394).then((_0x3a5c5d) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x5510aa.$token, $data: _0x3a5c5d?.[0] } }, _0x3a5c5d?.[1]);
          }).catch((_0x568d41) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x5510aa.$token, $error: _0x568d41?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x1e78d0, _0x1c1ac2, _0x35a9d1 = []) {
        let _0x31a696 = this.counter++;
        return new Promise((_0x428322, _0x26f7c9) => {
          this.promiseCallbacks.set(_0x31a696, { resolve: _0x428322, reject: _0x26f7c9 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x1e78d0, $args: _0x1c1ac2, $token: _0x31a696 } }, _0x35a9d1);
        });
      }
    }
  }, 423(_0x51399c, _0x224ee7, _0x57b078) {
    _0x57b078.d(_0x224ee7, { Cx: () => _0x37073d, I8: () => _0x3b4f38, bw: () => _0x2b47aa, cP: () => _0x218ba7, ht: () => _0x2d8d65, pX: () => _0x48c1bc });
    let { BareResponse: _0x4ba2a5, CookieJar: _0x218ba7, IncrementalHtmlRewriter: _0x48b456, Plugin: _0x2ae6a1, QP: _0x132767, SCRAMJETCLIENT: _0x48c1bc, SCRAMJETCLIENTNAME: _0x28c8b1, ScramjetClient: _0x2b47aa, ScramjetFetchHandler: _0x14d072, ScramjetFetchTrackedClient: _0x55f290, ScramjetHeaders: _0x1db630, ScramjetStorageJar: _0x3b4f38, Tap: _0x37073d, createLocationProxy: _0x570b03, defaultConfig: _0x2b37e7, defaultConfigDev: _0x4c2264, flagEnabled: _0x44c688, getOwnPropertyDescriptorHandler: _0x18a2f5, getRewriter: _0x56cd14, getScriptBlockTypeString: _0x6c202a, htmlRules: _0x273375, isArchiveMimeType: _0x2c1f0d, isAudioOrVideoMimeType: _0x226a72, isFontMimeType: _0x1cef5f, isHtmlMimeType: _0x2d169a, isImageMimeType: _0x4dc8b9, isInlineDisplayableMimeType: _0x3fa73f, isJavascriptMimeType: _0x485490, isJavascriptMimeTypeEssenceMatch: _0x4ce405, isModuleScriptType: _0x131b8e, isScriptType: _0x4b03f5, isScriptableMimeType: _0x48db2a, isXmlMimeType: _0x5f53b2, isZipBasedMimeType: _0x28be2b, isdedicated: _0x344c4f, isshared: _0x524252, issw: _0x4fb016, iswindow: _0x22dad8, isworker: _0x5607f3, nativeProviders: _0x3571b2, parseMimeType: _0x57ad08, providers: _0x354e27, registerProviders: _0x25db41, resetProviders: _0x1abf72, rewriteBlob: _0xc06f2c, rewriteCss: _0x473464, rewriteHtml: _0xb2166d, rewriteJs: _0x35ff21, rewriteJsInner: _0xc1ff9c, rewriteSrcset: _0x1fa99c, rewriteUrl: _0x34b6c2, rewriteWorkers: _0x2f1543, setWasm: _0x2d8d65, unrewriteBlob: _0x4d4fdd, unrewriteCss: _0x35916b, unrewriteHtml: _0x3c7df7, unrewriteUrl: _0x3c1978, versionInfo: _0x2968a5 } = globalThis.$scramjet;
  } }, _0x247c92 = {};
  function _0x51bd28(_0x3068ca) {
    var _0x4b938b = _0x247c92[_0x3068ca];
    if (_0x4b938b !== void 0) return _0x4b938b.exports;
    var _0x50e887 = _0x247c92[_0x3068ca] = { exports: {} };
    return _0x8a4cd9[_0x3068ca](_0x50e887, _0x50e887.exports, _0x51bd28), _0x50e887.exports;
  }
  _0x51bd28.d = (_0x2d2ea9, _0x2dca62) => {
    for (var _0x566d4c in _0x2dca62) _0x51bd28.o(_0x2dca62, _0x566d4c) && !_0x51bd28.o(_0x2d2ea9, _0x566d4c) && Object.defineProperty(_0x2d2ea9, _0x566d4c, { enumerable: !0, get: _0x2dca62[_0x566d4c] });
  }, _0x51bd28.o = (_0x171222, _0x18fa4b) => Object.prototype.hasOwnProperty.call(_0x171222, _0x18fa4b), _0x51bd28.r = (_0x35be71) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x35be71, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x35be71, "__esModule", { value: !0 });
  };
  var _0x88339c = {};
  (() => {
    _0x51bd28.r(_0x88339c), _0x51bd28.d(_0x88339c, { load: () => _0x376715 });
    var _0x5ce73a = _0x51bd28(805), _0x31ff78 = _0x51bd28(423), _0x54b5df = _0x51bd28(286);
    let _0x4c16a7 = MessagePort.prototype.postMessage, _0x482b51 = (_0x217da3, _0x5869cf, _0x36d1ff) => {
      _0x4c16a7.call(_0x217da3, _0x5869cf, _0x36d1ff);
    };
    class _0x4661f3 {
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
      fail(_0x25b43b) {
        this.readyReject(_0x25b43b);
      }
      rpc;
      constructor(_0x32538e) {
        this.port = _0x32538e, this.rpc = new _0x5ce73a.C({ ready: async () => {
          this.readyResolve(void 0);
        } }, "transport", (_0x1b9097, _0x5847c3) => {
          _0x482b51(_0x32538e, _0x1b9097, _0x5847c3);
        }), _0x32538e.onmessageerror = (_0x20a94d) => {
        }, _0x32538e.onmessage = (_0x5beb30) => {
          this.rpc.recieve(_0x5beb30.data);
        }, _0x32538e.start();
      }
      connect(_0x3b2fe3, _0x5469ba, _0x22e764, _0x863598, _0x7cd6d, _0x5928a5, _0x13ab6c, _0x2526b9 = {}) {
        let _0xc5eda8 = new MessageChannel(), _0x4acfe6 = _0xc5eda8.port1;
        return this.rpc.call("connect", { url: _0x3b2fe3.href, protocols: _0x5469ba, requestHeaders: _0x22e764, port: _0xc5eda8.port2, proxy: _0x2526b9.proxy }, [_0xc5eda8.port2]).then((_0x8ccd71) => {
          _0x8ccd71.result === "success" ? _0x863598(_0x8ccd71.protocol, _0x8ccd71.extensions) : _0x13ab6c(_0x8ccd71.error);
        }), _0x4acfe6.onmessage = (_0x353fc7) => {
          let _0x22eabc = _0x353fc7.data;
          _0x22eabc.type === "data" ? _0x7cd6d(_0x22eabc.data) : _0x22eabc.type === "close" && _0x5928a5(_0x22eabc.code, _0x22eabc.reason);
        }, _0x4acfe6.onmessageerror = (_0x2e0b84) => {
          _0x13ab6c("Message error in transport port");
        }, [(_0x368fc4) => {
          _0x482b51(_0x4acfe6, { type: "data", data: _0x368fc4 }, _0x368fc4 instanceof ArrayBuffer ? [_0x368fc4] : []);
        }, (_0x2d62ec) => {
          _0x482b51(_0x4acfe6, { type: "close", code: _0x2d62ec });
        }];
      }
      async request(_0x26a549, _0x32fede, _0x5ddfea, _0x4a5f21, _0x1aec8c, _0x1ddfa5 = {}) {
        return await this.rpc.call("request", { remote: _0x26a549.href, method: _0x32fede, body: _0x5ddfea, headers: _0x4a5f21, proxy: _0x1ddfa5.proxy });
      }
      async sendSetCookie(_0x221b09, _0x270d4e = {}) {
        await this.rpc.call("sendSetCookie", { cookies: _0x221b09.map(({ url: _0x4df51c, cookie: _0x2b2677 }) => ({ url: _0x4df51c.href, cookie: _0x2b2677 })), options: _0x270d4e });
      }
      async sendStorageMutation(_0x2838c0) {
        return await this.rpc.call("sendStorageMutation", { mutations: _0x2838c0 }), !0;
      }
    }
    let _0x302218 = navigator.serviceWorker, _0x11dc3b = _0x31ff78.pX in globalThis ? Promise.resolve(null) : _0x302218.getRegistration(new URL("/", document.baseURI).href).then((_0x3dd4c4) => _0x3dd4c4?.active ?? _0x302218.controller);
    function _0x376715(_0x5349b0) {
      if (_0x31ff78.pX in globalThis) return void globalThis[_0x31ff78.pX].syncDocumentInit({ initHeaders: _0x5349b0.initHeaders, history: _0x5349b0.history, cookies: _0x5349b0.cookies });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      if (typeof _0x5349b0.storagePartitionKey != "string" || _0x5349b0.storagePartitionKey.length === 0) throw Error("Scramjet document injection requires its storage partition key");
      let _0x273715 = Uint8Array.from(atob(String(self.WASM)), (_0x62e01e) => _0x62e01e.charCodeAt(0));
      delete self.WASM, (0, _0x31ff78.ht)(_0x273715), new _0x283250(globalThis, _0x5349b0);
    }
    class _0x283250 {
      global;
      init;
      client;
      cookieJar;
      storage;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(_0x2b9ed9, _0x3c0f22) {
        this.global = _0x2b9ed9, this.init = _0x3c0f22;
        const _0x57071b = new MessageChannel();
        this.transport = new _0x4661f3(_0x57071b.port1), _0x11dc3b.then((_0x2a3a54) => {
          if (_0x2a3a54 === null) throw Error("Scramjet transport requires the root service worker");
          _0x2a3a54.postMessage({ $sw$initRemoteTransport: { port: _0x57071b.port2, prefix: this.init.prefix.href } }, [_0x57071b.port2]);
        }).catch((_0x2e58fd) => {
          this.transport.fail(_0x2e58fd instanceof Error ? _0x2e58fd : Error(String(_0x2e58fd)));
        }), this.cookieJar = new _0x31ff78.cP(), this.cookieJar.load(this.init.cookies), this.storage = this.init.storage ? new _0x31ff78.I8(this.init.storage, async (_0x28c1f6) => await this.transport.sendStorageMutation([_0x28c1f6])) : void 0, this.handleServiceWorkerCookieMessage = (_0x48942f) => {
          if (!_0x48942f.data?.$controller$setCookie || typeof _0x48942f.data.$controller$setCookie != "object") return;
          let _0x3b5a76 = _0x48942f.data.$controller$setCookie;
          if (_0x3b5a76.options?.clear && this.cookieJar.clear(), Array.isArray(_0x3b5a76.cookies)) {
            for (let _0x299ccd of _0x3b5a76.cookies) if (typeof _0x299ccd?.url == "string" && typeof _0x299ccd.cookie == "string") try {
              this.cookieJar.setCookies(_0x299ccd.cookie, new URL(_0x299ccd.url));
            } catch {
            }
          }
          typeof _0x3b5a76.id == "string" && _0x11dc3b.then((_0x26281c) => {
            if (_0x26281c === null) throw Error("Scramjet cookie acknowledgement requires the root service worker");
            _0x26281c.postMessage({ $sw$setCookieDone: { id: _0x3b5a76.id } });
          }).catch((_0x536912) => {
          });
        }, _0x302218?.addEventListener("message", this.handleServiceWorkerCookieMessage), this.injectScramjet();
      }
      injectScramjet() {
        let _0x34831c = this.global.frameElement;
        _0x34831c && !_0x34831c.name && (window.name = _0x34831c.name = Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x237741) => _0x237741.toString(16).padStart(2, "0")).join(""));
        let _0xfc0cbf = _0x34831c?.[_0x54b5df.I], _0x5c93fe = !0;
        if (!_0xfc0cbf) {
          _0x5c93fe = !1;
          let _0x1a7481 = this.global.window;
          for (; _0x1a7481.parent !== _0x1a7481; ) {
            let _0xad19a9 = Reflect.get(_0x1a7481, _0x31ff78.pX);
            if (!_0xad19a9) {
              _0x1a7481 = _0x1a7481.parent.window;
              continue;
            }
            let _0x28466d = _0xad19a9.descriptors.get("window.frameElement", _0x1a7481);
            if (_0x28466d && _0x28466d[_0x54b5df.I]) {
              _0xfc0cbf = _0x28466d[_0x54b5df.I];
              break;
            }
            _0x1a7481 = _0x1a7481.parent.window;
          }
        }
        let _0x4650ae = { config: this.init.sjconfig, prefix: this.init.prefix, cookieJar: this.cookieJar, storage: this.storage, storagePartitionKey: this.init.storagePartitionKey, interface: { getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.storage, this.init.codecEncode, this.init.codecDecode, this.init.storagePartitionKey), codecEncode: this.init.codecEncode, codecDecode: this.init.codecDecode } };
        this.client = new _0x31ff78.bw(this.global, { context: _0x4650ae, transport: this.transport, sendSetCookie: async (_0x5a747a, _0x4b596e) => {
          await this.transport.sendSetCookie(_0x5a747a, _0x4b596e);
        }, shouldBlockMessageEvent: (_0x4b0d42) => {
          let _0x20d639 = _0x4b0d42.data;
          return !!_0x20d639 && typeof _0x20d639 == "object" && ("$controller$setCookie" in _0x20d639 || "$controller$swrevive" in _0x20d639 || "$sw$setCookieDone" in _0x20d639 || "$sw$initRemoteTransport" in _0x20d639);
        }, hookSubcontext: (_0x5a135b) => new _0x283250(_0x5a135b, { ...this.init, cookies: this.cookieJar.dump(), storage: this.storage?.dump() ?? null }).client, initHeaders: this.init.initHeaders, history: this.init.history });
        let _0xaf1733 = { window: this.global.window, client: this.client, isTopLevel: _0x5c93fe };
        _0xfc0cbf && _0x31ff78.Cx.dispatch(_0xfc0cbf.hooks.init.pre, _0xaf1733, {}), this.client.hook(), _0xfc0cbf && _0x31ff78.Cx.dispatch(_0xfc0cbf.hooks.init.post, _0xaf1733, {});
      }
    }
  })(), $scramjetController = _0x88339c;
})();
