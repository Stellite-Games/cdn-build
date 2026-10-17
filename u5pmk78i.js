var $scramjetController;
(() => {
  var _0x45a580 = { 286(_0x4e7ba1, _0x18f345, _0x255f5b) {
    _0x255f5b.d(_0x18f345, { I: () => _0x533e4f });
    let _0x533e4f = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 805(_0x4b7e64, _0xb4f750, _0x1c0d61) {
    _0x1c0d61.d(_0xb4f750, { C: () => _0xfaa96e });
    class _0xfaa96e {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0xbef5cc, _0x19911b, _0x1eb938) {
        this.methods = _0xbef5cc, this.id = _0x19911b, this.sendRaw = _0x1eb938;
      }
      recieve(_0x17e370) {
        if (_0x17e370 == null || typeof _0x17e370 != "object") return;
        let _0x19eb39 = _0x17e370[this.id];
        if (_0x19eb39 == null || typeof _0x19eb39 != "object") return;
        let _0x2d0dae = _0x19eb39.$type;
        if (_0x2d0dae === "response") {
          let _0x3106e6 = _0x19eb39.$token, _0x1dc96d = _0x19eb39.$data, _0x2637bc = _0x19eb39.$error, _0x54be08 = this.promiseCallbacks.get(_0x3106e6);
          if (!_0x54be08) return;
          this.promiseCallbacks.delete(_0x3106e6), _0x2637bc !== void 0 ? _0x54be08.reject(Error(_0x2637bc)) : _0x54be08.resolve(_0x1dc96d);
        } else if (_0x2d0dae === "request") {
          let _0x14f580 = _0x19eb39.$method, _0x2aa23e = _0x19eb39.$args;
          this.methods[_0x14f580](_0x2aa23e).then((_0x52e580) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x19eb39.$token, $data: _0x52e580?.[0] } }, _0x52e580?.[1]);
          }).catch((_0x31c8d1) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x19eb39.$token, $error: _0x31c8d1?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x33a3b6, _0x218938, _0x3c40ed = []) {
        let _0xa3d199 = this.counter++;
        return new Promise((_0x138110, _0x5b6fab) => {
          this.promiseCallbacks.set(_0xa3d199, { resolve: _0x138110, reject: _0x5b6fab }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x33a3b6, $args: _0x218938, $token: _0xa3d199 } }, _0x3c40ed);
        });
      }
    }
  }, 423(_0x5b3b27, _0x235165, _0x1fdc77) {
    _0x1fdc77.d(_0x235165, { Cx: () => _0x3f7533, I8: () => _0x57ce65, bw: () => _0x1bd8dc, cP: () => _0x3093d1, ht: () => _0x381906, pX: () => _0x57cb54 });
    let { BareResponse: _0x583468, CookieJar: _0x3093d1, IncrementalHtmlRewriter: _0x288eb1, Plugin: _0xae94d7, QP: _0x151c91, SCRAMJETCLIENT: _0x57cb54, SCRAMJETCLIENTNAME: _0x25aa73, ScramjetClient: _0x1bd8dc, ScramjetFetchHandler: _0x299240, ScramjetFetchTrackedClient: _0x41e5e3, ScramjetHeaders: _0x4c5a31, ScramjetStorageJar: _0x57ce65, Tap: _0x3f7533, createLocationProxy: _0x5cddaf, defaultConfig: _0x487032, defaultConfigDev: _0x338f11, flagEnabled: _0x2cb287, getOwnPropertyDescriptorHandler: _0x378464, getRewriter: _0x4107e4, getScriptBlockTypeString: _0x585c89, htmlRules: _0x3a182e, isArchiveMimeType: _0x1cf0a9, isAudioOrVideoMimeType: _0x5cf894, isFontMimeType: _0x1885a8, isHtmlMimeType: _0x3e359f, isImageMimeType: _0x80c282, isInlineDisplayableMimeType: _0xa50b3a, isJavascriptMimeType: _0x421d96, isJavascriptMimeTypeEssenceMatch: _0xc4c3e2, isModuleScriptType: _0x12e13c, isScriptType: _0x39a577, isScriptableMimeType: _0x1a8415, isXmlMimeType: _0xeecb10, isZipBasedMimeType: _0x277ae3, isdedicated: _0x1d0774, isshared: _0x4e2e38, issw: _0x3b870c, iswindow: _0x3b0b74, isworker: _0x4e9a21, nativeProviders: _0x8ec0b7, parseMimeType: _0x4dcbc3, providers: _0x5d2961, registerProviders: _0x3cc941, resetProviders: _0x249eb5, rewriteBlob: _0x2cbc6d, rewriteCss: _0xd19aa1, rewriteHtml: _0x4729d2, rewriteJs: _0x539892, rewriteJsInner: _0x32bc8e, rewriteSrcset: _0xb955a2, rewriteUrl: _0x3b3d49, rewriteWorkers: _0x573515, setWasm: _0x381906, unrewriteBlob: _0xb73f2, unrewriteCss: _0xf8f3d8, unrewriteHtml: _0x2e94d5, unrewriteUrl: _0x1e7a05, versionInfo: _0x3ba0b5 } = globalThis.$scramjet;
  } }, _0x173cf4 = {};
  function _0x3217c5(_0x317c8e) {
    var _0x2d3a35 = _0x173cf4[_0x317c8e];
    if (_0x2d3a35 !== void 0) return _0x2d3a35.exports;
    var _0x392cec = _0x173cf4[_0x317c8e] = { exports: {} };
    return _0x45a580[_0x317c8e](_0x392cec, _0x392cec.exports, _0x3217c5), _0x392cec.exports;
  }
  _0x3217c5.d = (_0x3413d5, _0x43885d) => {
    for (var _0x5ad9a5 in _0x43885d) _0x3217c5.o(_0x43885d, _0x5ad9a5) && !_0x3217c5.o(_0x3413d5, _0x5ad9a5) && Object.defineProperty(_0x3413d5, _0x5ad9a5, { enumerable: !0, get: _0x43885d[_0x5ad9a5] });
  }, _0x3217c5.o = (_0x4db427, _0x51a407) => Object.prototype.hasOwnProperty.call(_0x4db427, _0x51a407), _0x3217c5.r = (_0x38e42e) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x38e42e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x38e42e, "__esModule", { value: !0 });
  };
  var _0x37685d = {};
  (() => {
    _0x3217c5.r(_0x37685d), _0x3217c5.d(_0x37685d, { load: () => _0x1e5fcb });
    var _0x3ce09e = _0x3217c5(805), _0x1e6965 = _0x3217c5(423), _0xc11534 = _0x3217c5(286);
    let _0x32c0a9 = MessagePort.prototype.postMessage, _0x1d36ec = (_0xe317af, _0x58fe8a, _0xd99cb1) => {
      _0x32c0a9.call(_0xe317af, _0x58fe8a, _0xd99cb1);
    };
    class _0x2cf0ee {
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
      fail(_0x161aa0) {
        this.readyReject(_0x161aa0);
      }
      rpc;
      constructor(_0x240c42) {
        this.port = _0x240c42, this.rpc = new _0x3ce09e.C({ ready: async () => {
          this.readyResolve(void 0);
        } }, "transport", (_0x37c005, _0x596761) => {
          _0x1d36ec(_0x240c42, _0x37c005, _0x596761);
        }), _0x240c42.onmessageerror = (_0x1eaeea) => {
        }, _0x240c42.onmessage = (_0x1099d3) => {
          this.rpc.recieve(_0x1099d3.data);
        }, _0x240c42.start();
      }
      connect(_0x74946, _0x23670a, _0x2ae6e5, _0x8106bd, _0x47d4de, _0x11aced, _0x16ee3c, _0x462094 = {}) {
        let _0x3c9982 = new MessageChannel(), _0x365bb7 = _0x3c9982.port1;
        return this.rpc.call("connect", { url: _0x74946.href, protocols: _0x23670a, requestHeaders: _0x2ae6e5, port: _0x3c9982.port2, proxy: _0x462094.proxy }, [_0x3c9982.port2]).then((_0x526931) => {
          _0x526931.result === "success" ? _0x8106bd(_0x526931.protocol, _0x526931.extensions) : _0x16ee3c(_0x526931.error);
        }), _0x365bb7.onmessage = (_0x5e928f) => {
          let _0xc0b94f = _0x5e928f.data;
          _0xc0b94f.type === "data" ? _0x47d4de(_0xc0b94f.data) : _0xc0b94f.type === "close" && _0x11aced(_0xc0b94f.code, _0xc0b94f.reason);
        }, _0x365bb7.onmessageerror = (_0x2ecac7) => {
          _0x16ee3c("Message error in transport port");
        }, [(_0x18b5f0) => {
          _0x1d36ec(_0x365bb7, { type: "data", data: _0x18b5f0 }, _0x18b5f0 instanceof ArrayBuffer ? [_0x18b5f0] : []);
        }, (_0x76781d) => {
          _0x1d36ec(_0x365bb7, { type: "close", code: _0x76781d });
        }];
      }
      async request(_0x230acb, _0x1acec2, _0x3a2e2e, _0x42fb94, _0x168e1, _0x15bae4 = {}) {
        return await this.rpc.call("request", { remote: _0x230acb.href, method: _0x1acec2, body: _0x3a2e2e, headers: _0x42fb94, proxy: _0x15bae4.proxy });
      }
      async sendSetCookie(_0x155afd, _0x3d6fae = {}) {
        await this.rpc.call("sendSetCookie", { cookies: _0x155afd.map(({ url: _0x253e59, cookie: _0x40787a }) => ({ url: _0x253e59.href, cookie: _0x40787a })), options: _0x3d6fae });
      }
      async sendStorageMutation(_0x12fec3) {
        return await this.rpc.call("sendStorageMutation", { mutations: _0x12fec3 }), !0;
      }
    }
    let _0x558ea7 = navigator.serviceWorker, _0x5408da = _0x1e6965.pX in globalThis ? Promise.resolve(null) : _0x558ea7.getRegistration(new URL("/", document.baseURI).href).then((_0x3bff06) => _0x3bff06?.active ?? _0x558ea7.controller);
    function _0x1e5fcb(_0x58cf58) {
      if (_0x1e6965.pX in globalThis) return void globalThis[_0x1e6965.pX].syncDocumentInit({ initHeaders: _0x58cf58.initHeaders, history: _0x58cf58.history, cookies: _0x58cf58.cookies });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      if (typeof _0x58cf58.storagePartitionKey != "string" || _0x58cf58.storagePartitionKey.length === 0) throw Error("Scramjet document injection requires its storage partition key");
      let _0x3ca365 = Uint8Array.from(atob(String(self.WASM)), (_0x35fab0) => _0x35fab0.charCodeAt(0));
      delete self.WASM, (0, _0x1e6965.ht)(_0x3ca365), new _0x34af27(globalThis, _0x58cf58);
    }
    class _0x34af27 {
      global;
      init;
      client;
      cookieJar;
      storage;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(_0x444b31, _0x403e8a) {
        this.global = _0x444b31, this.init = _0x403e8a;
        const _0x129d27 = new MessageChannel();
        this.transport = new _0x2cf0ee(_0x129d27.port1), _0x5408da.then((_0x533726) => {
          if (_0x533726 === null) throw Error("Scramjet transport requires the root service worker");
          _0x533726.postMessage({ $sw$initRemoteTransport: { port: _0x129d27.port2, prefix: this.init.prefix.href } }, [_0x129d27.port2]);
        }).catch((_0x28b2cf) => {
          this.transport.fail(_0x28b2cf instanceof Error ? _0x28b2cf : Error(String(_0x28b2cf)));
        }), this.cookieJar = new _0x1e6965.cP(), this.cookieJar.load(this.init.cookies), this.storage = this.init.storage ? new _0x1e6965.I8(this.init.storage, async (_0x2df71d) => await this.transport.sendStorageMutation([_0x2df71d])) : void 0, this.handleServiceWorkerCookieMessage = (_0x15b092) => {
          if (!_0x15b092.data?.$controller$setCookie || typeof _0x15b092.data.$controller$setCookie != "object") return;
          let _0x49d56e = _0x15b092.data.$controller$setCookie;
          if (_0x49d56e.options?.clear && this.cookieJar.clear(), Array.isArray(_0x49d56e.cookies)) {
            for (let _0x156475 of _0x49d56e.cookies) if (typeof _0x156475?.url == "string" && typeof _0x156475.cookie == "string") try {
              this.cookieJar.setCookies(_0x156475.cookie, new URL(_0x156475.url));
            } catch {
            }
          }
          typeof _0x49d56e.id == "string" && _0x5408da.then((_0x3ff609) => {
            if (_0x3ff609 === null) throw Error("Scramjet cookie acknowledgement requires the root service worker");
            _0x3ff609.postMessage({ $sw$setCookieDone: { id: _0x49d56e.id } });
          }).catch((_0x532c52) => {
          });
        }, _0x558ea7?.addEventListener("message", this.handleServiceWorkerCookieMessage), this.injectScramjet();
      }
      injectScramjet() {
        let _0x12acd3 = this.global.frameElement;
        _0x12acd3 && !_0x12acd3.name && (window.name = _0x12acd3.name = Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x218227) => _0x218227.toString(16).padStart(2, "0")).join(""));
        let _0x728171 = _0x12acd3?.[_0xc11534.I], _0x3b1d8a = !0;
        if (!_0x728171) {
          _0x3b1d8a = !1;
          let _0x1e41db = this.global.window;
          for (; _0x1e41db.parent !== _0x1e41db; ) {
            let _0x1f2b4e = Reflect.get(_0x1e41db, _0x1e6965.pX);
            if (!_0x1f2b4e) {
              _0x1e41db = _0x1e41db.parent.window;
              continue;
            }
            let _0x42c85d = _0x1f2b4e.descriptors.get("window.frameElement", _0x1e41db);
            if (_0x42c85d && _0x42c85d[_0xc11534.I]) {
              _0x728171 = _0x42c85d[_0xc11534.I];
              break;
            }
            _0x1e41db = _0x1e41db.parent.window;
          }
        }
        let _0x470fce = { config: this.init.sjconfig, prefix: this.init.prefix, cookieJar: this.cookieJar, storage: this.storage, storagePartitionKey: this.init.storagePartitionKey, interface: { getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.storage, this.init.codecEncode, this.init.codecDecode, this.init.storagePartitionKey), codecEncode: this.init.codecEncode, codecDecode: this.init.codecDecode } };
        this.client = new _0x1e6965.bw(this.global, { context: _0x470fce, transport: this.transport, sendSetCookie: async (_0x544005, _0x2e0062) => {
          await this.transport.sendSetCookie(_0x544005, _0x2e0062);
        }, shouldBlockMessageEvent: (_0x532cc2) => {
          let _0x2cb933 = _0x532cc2.data;
          return !!_0x2cb933 && typeof _0x2cb933 == "object" && ("$controller$setCookie" in _0x2cb933 || "$controller$swrevive" in _0x2cb933 || "$sw$setCookieDone" in _0x2cb933 || "$sw$initRemoteTransport" in _0x2cb933);
        }, hookSubcontext: (_0x234d71) => new _0x34af27(_0x234d71, { ...this.init, cookies: this.cookieJar.dump(), storage: this.storage?.dump() ?? null }).client, initHeaders: this.init.initHeaders, history: this.init.history });
        let _0x307ff4 = { window: this.global.window, client: this.client, isTopLevel: _0x3b1d8a };
        _0x728171 && _0x1e6965.Cx.dispatch(_0x728171.hooks.init.pre, _0x307ff4, {}), this.client.hook(), _0x728171 && _0x1e6965.Cx.dispatch(_0x728171.hooks.init.post, _0x307ff4, {});
      }
    }
  })(), $scramjetController = _0x37685d;
})();
