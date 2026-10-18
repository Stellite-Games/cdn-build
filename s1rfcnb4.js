var $scramjetController;
(() => {
  var _0x513b7f = { 286(_0x5bf557, _0x2c005d, _0x5a9112) {
    _0x5a9112.d(_0x2c005d, { I: () => _0x3faeb5 });
    let _0x3faeb5 = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 805(_0x1f6680, _0x4b5f84, _0x54f0ba) {
    _0x54f0ba.d(_0x4b5f84, { C: () => _0x19087f });
    class _0x19087f {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x2534fe, _0x2ada94, _0x56bbb4) {
        this.methods = _0x2534fe, this.id = _0x2ada94, this.sendRaw = _0x56bbb4;
      }
      recieve(_0x5290a1) {
        if (_0x5290a1 == null || typeof _0x5290a1 != "object") return;
        let _0x1ace87 = _0x5290a1[this.id];
        if (_0x1ace87 == null || typeof _0x1ace87 != "object") return;
        let _0x303dae = _0x1ace87.$type;
        if (_0x303dae === "response") {
          let _0x51f2e7 = _0x1ace87.$token, _0xe30787 = _0x1ace87.$data, _0x4f7446 = _0x1ace87.$error, _0x4f877 = this.promiseCallbacks.get(_0x51f2e7);
          if (!_0x4f877) return;
          this.promiseCallbacks.delete(_0x51f2e7), _0x4f7446 !== void 0 ? _0x4f877.reject(Error(_0x4f7446)) : _0x4f877.resolve(_0xe30787);
        } else if (_0x303dae === "request") {
          let _0x469c5f = _0x1ace87.$method, _0x413598 = _0x1ace87.$args;
          this.methods[_0x469c5f](_0x413598).then((_0x584d2a) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x1ace87.$token, $data: _0x584d2a?.[0] } }, _0x584d2a?.[1]);
          }).catch((_0x5d45a9) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x1ace87.$token, $error: _0x5d45a9?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x3c4603, _0x3934ad, _0xd33dd = []) {
        let _0x4e4cba = this.counter++;
        return new Promise((_0x577fdb, _0x1c73ef) => {
          this.promiseCallbacks.set(_0x4e4cba, { resolve: _0x577fdb, reject: _0x1c73ef }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x3c4603, $args: _0x3934ad, $token: _0x4e4cba } }, _0xd33dd);
        });
      }
    }
  }, 423(_0x11d707, _0x2afe28, _0x38ba5f) {
    _0x38ba5f.d(_0x2afe28, { Cx: () => _0x1651b0, I8: () => _0x28c380, bw: () => _0x1266a1, cP: () => _0x44b5d1, ht: () => _0x668495, pX: () => _0x32a575 });
    let { BareResponse: _0x23f07, CookieJar: _0x44b5d1, IncrementalHtmlRewriter: _0x45e62f, Plugin: _0x53deec, QP: _0x1fdc22, SCRAMJETCLIENT: _0x32a575, SCRAMJETCLIENTNAME: _0x500507, ScramjetClient: _0x1266a1, ScramjetFetchHandler: _0x2c6e2c, ScramjetFetchTrackedClient: _0x583df3, ScramjetHeaders: _0x441efc, ScramjetStorageJar: _0x28c380, Tap: _0x1651b0, createLocationProxy: _0x2fd4c7, defaultConfig: _0x1b09f2, defaultConfigDev: _0x44db2c, flagEnabled: _0x4ff16d, getOwnPropertyDescriptorHandler: _0x418a06, getRewriter: _0x14f380, getScriptBlockTypeString: _0x2253ee, htmlRules: _0x370bbb, isArchiveMimeType: _0x3b252f, isAudioOrVideoMimeType: _0x42a4a2, isFontMimeType: _0x459e48, isHtmlMimeType: _0x124c08, isImageMimeType: _0x3ac4a5, isInlineDisplayableMimeType: _0x2941f5, isJavascriptMimeType: _0x571582, isJavascriptMimeTypeEssenceMatch: _0x43036b, isModuleScriptType: _0x2ec3a0, isScriptType: _0x22bab4, isScriptableMimeType: _0x3c718c, isXmlMimeType: _0x417c25, isZipBasedMimeType: _0x4f2938, isdedicated: _0x4c90fc, isshared: _0x488e60, issw: _0x586c8f, iswindow: _0x2a0153, isworker: _0x11b9e3, nativeProviders: _0x23446c, parseMimeType: _0x2a8f9c, providers: _0x1772fd, registerProviders: _0x3d151c, resetProviders: _0x1a96a6, rewriteBlob: _0xe29112, rewriteCss: _0x31a942, rewriteHtml: _0x46a0e3, rewriteJs: _0x105108, rewriteJsInner: _0x37bd4a, rewriteSrcset: _0x3c288c, rewriteUrl: _0x32f9b8, rewriteWorkers: _0x4c698c, setWasm: _0x668495, unrewriteBlob: _0x2051ea, unrewriteCss: _0x283574, unrewriteHtml: _0x1fbae9, unrewriteUrl: _0x2fbece, versionInfo: _0x396b31 } = globalThis.$scramjet;
  } }, _0x262b17 = {};
  function _0x6f33fe(_0x5c4319) {
    var _0x5e1d26 = _0x262b17[_0x5c4319];
    if (_0x5e1d26 !== void 0) return _0x5e1d26.exports;
    var _0x891ca4 = _0x262b17[_0x5c4319] = { exports: {} };
    return _0x513b7f[_0x5c4319](_0x891ca4, _0x891ca4.exports, _0x6f33fe), _0x891ca4.exports;
  }
  _0x6f33fe.d = (_0x1b46ec, _0x3dd9bb) => {
    for (var _0x263954 in _0x3dd9bb) _0x6f33fe.o(_0x3dd9bb, _0x263954) && !_0x6f33fe.o(_0x1b46ec, _0x263954) && Object.defineProperty(_0x1b46ec, _0x263954, { enumerable: !0, get: _0x3dd9bb[_0x263954] });
  }, _0x6f33fe.o = (_0xb82478, _0x1be85b) => Object.prototype.hasOwnProperty.call(_0xb82478, _0x1be85b), _0x6f33fe.r = (_0x3c5c8e) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x3c5c8e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x3c5c8e, "__esModule", { value: !0 });
  };
  var _0x4c02b8 = {};
  (() => {
    _0x6f33fe.r(_0x4c02b8), _0x6f33fe.d(_0x4c02b8, { load: () => _0x48e26b });
    var _0x49873f = _0x6f33fe(805), _0x4dc4a4 = _0x6f33fe(423), _0x2260f7 = _0x6f33fe(286);
    let _0x4b45a1 = MessagePort.prototype.postMessage, _0x543c99 = (_0x346f4c, _0xf89a03, _0xb5d7b0) => {
      _0x4b45a1.call(_0x346f4c, _0xf89a03, _0xb5d7b0);
    };
    class _0x1da1ad {
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
      fail(_0x5af617) {
        this.readyReject(_0x5af617);
      }
      rpc;
      constructor(_0x22051c) {
        this.port = _0x22051c, this.rpc = new _0x49873f.C({ ready: async () => {
          this.readyResolve(void 0);
        } }, "transport", (_0x4fe3a2, _0x2b3368) => {
          _0x543c99(_0x22051c, _0x4fe3a2, _0x2b3368);
        }), _0x22051c.onmessageerror = (_0x3f027b) => {
        }, _0x22051c.onmessage = (_0x21909a) => {
          this.rpc.recieve(_0x21909a.data);
        }, _0x22051c.start();
      }
      connect(_0x1d4c38, _0x569e35, _0x571996, _0x6aa6ab, _0x277dbc, _0x1ce578, _0x2226c2, _0x40351c = {}) {
        let _0x297cf4 = new MessageChannel(), _0x465609 = _0x297cf4.port1;
        return this.rpc.call("connect", { url: _0x1d4c38.href, protocols: _0x569e35, requestHeaders: _0x571996, port: _0x297cf4.port2, proxy: _0x40351c.proxy }, [_0x297cf4.port2]).then((_0xac58c) => {
          _0xac58c.result === "success" ? _0x6aa6ab(_0xac58c.protocol, _0xac58c.extensions) : _0x2226c2(_0xac58c.error);
        }), _0x465609.onmessage = (_0x16b0d9) => {
          let _0x33a177 = _0x16b0d9.data;
          _0x33a177.type === "data" ? _0x277dbc(_0x33a177.data) : _0x33a177.type === "close" && _0x1ce578(_0x33a177.code, _0x33a177.reason);
        }, _0x465609.onmessageerror = (_0x1209b0) => {
          _0x2226c2("Message error in transport port");
        }, [(_0x54f362) => {
          _0x543c99(_0x465609, { type: "data", data: _0x54f362 }, _0x54f362 instanceof ArrayBuffer ? [_0x54f362] : []);
        }, (_0x5d7df9) => {
          _0x543c99(_0x465609, { type: "close", code: _0x5d7df9 });
        }];
      }
      async request(_0xd84d88, _0x397d9a, _0x166b3c, _0x1cb87d, _0x56481a, _0x84d2f6 = {}) {
        return await this.rpc.call("request", { remote: _0xd84d88.href, method: _0x397d9a, body: _0x166b3c, headers: _0x1cb87d, proxy: _0x84d2f6.proxy });
      }
      async sendSetCookie(_0x1bc0c7, _0x2e3254 = {}) {
        await this.rpc.call("sendSetCookie", { cookies: _0x1bc0c7.map(({ url: _0xb113b5, cookie: _0x428933 }) => ({ url: _0xb113b5.href, cookie: _0x428933 })), options: _0x2e3254 });
      }
      async sendStorageMutation(_0x27c405) {
        return await this.rpc.call("sendStorageMutation", { mutations: _0x27c405 }), !0;
      }
    }
    let _0x230796 = navigator.serviceWorker, _0x1636b4 = _0x4dc4a4.pX in globalThis ? Promise.resolve(null) : _0x230796.getRegistration(new URL("/", document.baseURI).href).then((_0x30a194) => _0x30a194?.active ?? _0x230796.controller);
    function _0x48e26b(_0x436da8) {
      if (_0x4dc4a4.pX in globalThis) return void globalThis[_0x4dc4a4.pX].syncDocumentInit({ initHeaders: _0x436da8.initHeaders, history: _0x436da8.history, cookies: _0x436da8.cookies });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      if (typeof _0x436da8.storagePartitionKey != "string" || _0x436da8.storagePartitionKey.length === 0) throw Error("Scramjet document injection requires its storage partition key");
      let _0x535d33 = Uint8Array.from(atob(String(self.WASM)), (_0x436e40) => _0x436e40.charCodeAt(0));
      delete self.WASM, (0, _0x4dc4a4.ht)(_0x535d33), new _0x34b79a(globalThis, _0x436da8);
    }
    class _0x34b79a {
      global;
      init;
      client;
      cookieJar;
      storage;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(_0x44a91b, _0x4c5a82) {
        this.global = _0x44a91b, this.init = _0x4c5a82;
        const _0x56e8b3 = new MessageChannel();
        this.transport = new _0x1da1ad(_0x56e8b3.port1), _0x1636b4.then((_0x56fad2) => {
          if (_0x56fad2 === null) throw Error("Scramjet transport requires the root service worker");
          _0x56fad2.postMessage({ $sw$initRemoteTransport: { port: _0x56e8b3.port2, prefix: this.init.prefix.href } }, [_0x56e8b3.port2]);
        }).catch((_0x494d33) => {
          this.transport.fail(_0x494d33 instanceof Error ? _0x494d33 : Error(String(_0x494d33)));
        }), this.cookieJar = new _0x4dc4a4.cP(), this.cookieJar.load(this.init.cookies), this.storage = this.init.storage ? new _0x4dc4a4.I8(this.init.storage, async (_0x262e15) => await this.transport.sendStorageMutation([_0x262e15])) : void 0, this.handleServiceWorkerCookieMessage = (_0x58394c) => {
          if (!_0x58394c.data?.$controller$setCookie || typeof _0x58394c.data.$controller$setCookie != "object") return;
          let _0xc18453 = _0x58394c.data.$controller$setCookie;
          if (_0xc18453.options?.clear && this.cookieJar.clear(), Array.isArray(_0xc18453.cookies)) {
            for (let _0x352600 of _0xc18453.cookies) if (typeof _0x352600?.url == "string" && typeof _0x352600.cookie == "string") try {
              this.cookieJar.setCookies(_0x352600.cookie, new URL(_0x352600.url));
            } catch {
            }
          }
          typeof _0xc18453.id == "string" && _0x1636b4.then((_0x19d85f) => {
            if (_0x19d85f === null) throw Error("Scramjet cookie acknowledgement requires the root service worker");
            _0x19d85f.postMessage({ $sw$setCookieDone: { id: _0xc18453.id } });
          }).catch((_0x54c156) => {
          });
        }, _0x230796?.addEventListener("message", this.handleServiceWorkerCookieMessage), this.injectScramjet();
      }
      injectScramjet() {
        let _0x493bd1 = this.global.frameElement;
        _0x493bd1 && !_0x493bd1.name && (window.name = _0x493bd1.name = Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x470c06) => _0x470c06.toString(16).padStart(2, "0")).join(""));
        let _0x972ea4 = _0x493bd1?.[_0x2260f7.I], _0x69d69d = !0;
        if (!_0x972ea4) {
          _0x69d69d = !1;
          let _0x3b5865 = this.global.window;
          for (; _0x3b5865.parent !== _0x3b5865; ) {
            let _0x57851c = Reflect.get(_0x3b5865, _0x4dc4a4.pX);
            if (!_0x57851c) {
              _0x3b5865 = _0x3b5865.parent.window;
              continue;
            }
            let _0x58aebc = _0x57851c.descriptors.get("window.frameElement", _0x3b5865);
            if (_0x58aebc && _0x58aebc[_0x2260f7.I]) {
              _0x972ea4 = _0x58aebc[_0x2260f7.I];
              break;
            }
            _0x3b5865 = _0x3b5865.parent.window;
          }
        }
        let _0x56683b = { config: this.init.sjconfig, prefix: this.init.prefix, cookieJar: this.cookieJar, storage: this.storage, storagePartitionKey: this.init.storagePartitionKey, interface: { getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.storage, this.init.codecEncode, this.init.codecDecode, this.init.storagePartitionKey), codecEncode: this.init.codecEncode, codecDecode: this.init.codecDecode } };
        this.client = new _0x4dc4a4.bw(this.global, { context: _0x56683b, transport: this.transport, sendSetCookie: async (_0x377d7c, _0x395539) => {
          await this.transport.sendSetCookie(_0x377d7c, _0x395539);
        }, shouldBlockMessageEvent: (_0xff32e3) => {
          let _0x1e4f90 = _0xff32e3.data;
          return !!_0x1e4f90 && typeof _0x1e4f90 == "object" && ("$controller$setCookie" in _0x1e4f90 || "$controller$swrevive" in _0x1e4f90 || "$sw$setCookieDone" in _0x1e4f90 || "$sw$initRemoteTransport" in _0x1e4f90);
        }, hookSubcontext: (_0x3ec7a4) => new _0x34b79a(_0x3ec7a4, { ...this.init, cookies: this.cookieJar.dump(), storage: this.storage?.dump() ?? null }).client, initHeaders: this.init.initHeaders, history: this.init.history });
        let _0x59ccd1 = { window: this.global.window, client: this.client, isTopLevel: _0x69d69d };
        _0x972ea4 && _0x4dc4a4.Cx.dispatch(_0x972ea4.hooks.init.pre, _0x59ccd1, {}), this.client.hook(), _0x972ea4 && _0x4dc4a4.Cx.dispatch(_0x972ea4.hooks.init.post, _0x59ccd1, {});
      }
    }
  })(), $scramjetController = _0x4c02b8;
})();
