var $scramjetController;
(() => {
  var _0x1f1692 = { 286(_0x440001, _0x2b836e, _0x563eb8) {
    _0x563eb8.d(_0x2b836e, { I: () => _0x25b050 });
    let _0x25b050 = /* @__PURE__ */ Symbol.for("controller frame handle");
  }, 805(_0xf8a441, _0x50e027, _0x8767d6) {
    _0x8767d6.d(_0x50e027, { C: () => _0x2a5a24 });
    class _0x2a5a24 {
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x59d86b, _0x3f6d26, _0x721d60) {
        this.methods = _0x59d86b, this.id = _0x3f6d26, this.sendRaw = _0x721d60;
      }
      recieve(_0xe7510b) {
        if (_0xe7510b == null || typeof _0xe7510b != "object") return;
        let _0x225212 = _0xe7510b[this.id];
        if (_0x225212 == null || typeof _0x225212 != "object") return;
        let _0x131c9b = _0x225212.$type;
        if (_0x131c9b === "response") {
          let _0xe573cf = _0x225212.$token, _0x2d8004 = _0x225212.$data, _0x3c7a49 = _0x225212.$error, _0x437062 = this.promiseCallbacks.get(_0xe573cf);
          if (!_0x437062) return;
          this.promiseCallbacks.delete(_0xe573cf), _0x3c7a49 !== void 0 ? _0x437062.reject(Error(_0x3c7a49)) : _0x437062.resolve(_0x2d8004);
        } else if (_0x131c9b === "request") {
          let _0x34df98 = _0x225212.$method, _0x53438d = _0x225212.$args;
          this.methods[_0x34df98](_0x53438d).then((_0x28b71d) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x225212.$token, $data: _0x28b71d?.[0] } }, _0x28b71d?.[1]);
          }).catch((_0x440cc2) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x225212.$token, $error: _0x440cc2?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x26b97e, _0x5b8975, _0xdbffb2 = []) {
        let _0x2f9801 = this.counter++;
        return new Promise((_0x51f1d1, _0x501a98) => {
          this.promiseCallbacks.set(_0x2f9801, { resolve: _0x51f1d1, reject: _0x501a98 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x26b97e, $args: _0x5b8975, $token: _0x2f9801 } }, _0xdbffb2);
        });
      }
    }
  }, 423(_0x4769af, _0x2f5670, _0x4cccd1) {
    _0x4cccd1.d(_0x2f5670, { Cx: () => _0x30faa1, I8: () => _0x43cada, bw: () => _0x5121e5, cP: () => _0x248cd5, ht: () => _0x19798d, pX: () => _0x125a65 });
    let { BareResponse: _0x8d3c21, CookieJar: _0x248cd5, IncrementalHtmlRewriter: _0x5dc911, Plugin: _0x1c5f45, QP: _0x24812b, SCRAMJETCLIENT: _0x125a65, SCRAMJETCLIENTNAME: _0xce2541, ScramjetClient: _0x5121e5, ScramjetFetchHandler: _0xf854c7, ScramjetFetchTrackedClient: _0x321272, ScramjetHeaders: _0x53fb8a, ScramjetStorageJar: _0x43cada, Tap: _0x30faa1, createLocationProxy: _0x191dd9, defaultConfig: _0x59a56d, defaultConfigDev: _0x1cbfe7, flagEnabled: _0x463906, getOwnPropertyDescriptorHandler: _0x418d95, getRewriter: _0x30caf3, getScriptBlockTypeString: _0x36a02c, htmlRules: _0x20c561, isArchiveMimeType: _0x3ecd37, isAudioOrVideoMimeType: _0x24a0b8, isFontMimeType: _0x4a7056, isHtmlMimeType: _0x1dd5f2, isImageMimeType: _0x5e641f, isInlineDisplayableMimeType: _0x2ffa2f, isJavascriptMimeType: _0x1cb4e8, isJavascriptMimeTypeEssenceMatch: _0x323f86, isModuleScriptType: _0x590947, isScriptType: _0x2630c7, isScriptableMimeType: _0x38ba40, isXmlMimeType: _0x505d94, isZipBasedMimeType: _0x57923e, isdedicated: _0x3bb5fa, isshared: _0x79b82e, issw: _0x442afc, iswindow: _0x475697, isworker: _0x3036ad, nativeProviders: _0x316d34, parseMimeType: _0x4719b7, providers: _0x5bf353, registerProviders: _0x448bb2, resetProviders: _0x9fe282, rewriteBlob: _0xff64b1, rewriteCss: _0x57fca1, rewriteHtml: _0x4c9b84, rewriteJs: _0x2ebf9c, rewriteJsInner: _0x39b826, rewriteSrcset: _0x15227b, rewriteUrl: _0x400b2a, rewriteWorkers: _0x3d0655, setWasm: _0x19798d, unrewriteBlob: _0x110995, unrewriteCss: _0x3232d9, unrewriteHtml: _0x4e38c0, unrewriteUrl: _0x2cfee7, versionInfo: _0x98e2e8 } = globalThis.$scramjet;
  } }, _0x33940a = {};
  function _0x3c7082(_0x2a1605) {
    var _0xb3e9f3 = _0x33940a[_0x2a1605];
    if (_0xb3e9f3 !== void 0) return _0xb3e9f3.exports;
    var _0x2b0e86 = _0x33940a[_0x2a1605] = { exports: {} };
    return _0x1f1692[_0x2a1605](_0x2b0e86, _0x2b0e86.exports, _0x3c7082), _0x2b0e86.exports;
  }
  _0x3c7082.d = (_0x4da8af, _0x46e258) => {
    for (var _0x5a915f in _0x46e258) _0x3c7082.o(_0x46e258, _0x5a915f) && !_0x3c7082.o(_0x4da8af, _0x5a915f) && Object.defineProperty(_0x4da8af, _0x5a915f, { enumerable: !0, get: _0x46e258[_0x5a915f] });
  }, _0x3c7082.o = (_0xd02c15, _0x13e3e9) => Object.prototype.hasOwnProperty.call(_0xd02c15, _0x13e3e9), _0x3c7082.r = (_0x238131) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x238131, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x238131, "__esModule", { value: !0 });
  };
  var _0x40f234 = {};
  (() => {
    _0x3c7082.r(_0x40f234), _0x3c7082.d(_0x40f234, { load: () => _0x24ee69 });
    var _0x15e1d7 = _0x3c7082(805), _0x4dfdf3 = _0x3c7082(423), _0x30b924 = _0x3c7082(286);
    let _0x417aca = MessagePort.prototype.postMessage, _0x597495 = (_0xc0fbdf, _0x4f7911, _0x50f8a8) => {
      _0x417aca.call(_0xc0fbdf, _0x4f7911, _0x50f8a8);
    };
    class _0x5d9c4f {
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
      fail(_0x17bc3f) {
        this.readyReject(_0x17bc3f);
      }
      rpc;
      constructor(_0x2ca275) {
        this.port = _0x2ca275, this.rpc = new _0x15e1d7.C({ ready: async () => {
          this.readyResolve(void 0);
        } }, "transport", (_0xeefb3, _0xb28d9e) => {
          _0x597495(_0x2ca275, _0xeefb3, _0xb28d9e);
        }), _0x2ca275.onmessageerror = (_0x2d892b) => {
        }, _0x2ca275.onmessage = (_0x19b316) => {
          this.rpc.recieve(_0x19b316.data);
        }, _0x2ca275.start();
      }
      connect(_0x1e2fc9, _0x4d82aa, _0x4e7bfd, _0x458b56, _0x5ac740, _0xf7c2ff, _0x54feed, _0x1ee09a = {}) {
        let _0x8d99e7 = new MessageChannel(), _0x24e982 = _0x8d99e7.port1;
        return this.rpc.call("connect", { url: _0x1e2fc9.href, protocols: _0x4d82aa, requestHeaders: _0x4e7bfd, port: _0x8d99e7.port2, proxy: _0x1ee09a.proxy }, [_0x8d99e7.port2]).then((_0x4ffc6c) => {
          _0x4ffc6c.result === "success" ? _0x458b56(_0x4ffc6c.protocol, _0x4ffc6c.extensions) : _0x54feed(_0x4ffc6c.error);
        }), _0x24e982.onmessage = (_0x29c44b) => {
          let _0x875a4c = _0x29c44b.data;
          _0x875a4c.type === "data" ? _0x5ac740(_0x875a4c.data) : _0x875a4c.type === "close" && _0xf7c2ff(_0x875a4c.code, _0x875a4c.reason);
        }, _0x24e982.onmessageerror = (_0x595468) => {
          _0x54feed("Message error in transport port");
        }, [(_0x3f6069) => {
          _0x597495(_0x24e982, { type: "data", data: _0x3f6069 }, _0x3f6069 instanceof ArrayBuffer ? [_0x3f6069] : []);
        }, (_0x2528c7) => {
          _0x597495(_0x24e982, { type: "close", code: _0x2528c7 });
        }];
      }
      async request(_0x3e6e48, _0x481341, _0x1f39ce, _0x49186b, _0x19149d, _0x54fd74 = {}) {
        return await this.rpc.call("request", { remote: _0x3e6e48.href, method: _0x481341, body: _0x1f39ce, headers: _0x49186b, proxy: _0x54fd74.proxy });
      }
      async sendSetCookie(_0x2e1f36, _0x166070 = {}) {
        await this.rpc.call("sendSetCookie", { cookies: _0x2e1f36.map(({ url: _0x5922b0, cookie: _0x1301f4 }) => ({ url: _0x5922b0.href, cookie: _0x1301f4 })), options: _0x166070 });
      }
      async sendStorageMutation(_0x13352d) {
        return await this.rpc.call("sendStorageMutation", { mutations: _0x13352d }), !0;
      }
    }
    let _0x117c5e = navigator.serviceWorker, _0x592500 = _0x4dfdf3.pX in globalThis ? Promise.resolve(null) : _0x117c5e.getRegistration(new URL("/", document.baseURI).href).then((_0x409d33) => _0x409d33?.active ?? _0x117c5e.controller);
    function _0x24ee69(_0x33d95f) {
      if (_0x4dfdf3.pX in globalThis) return void globalThis[_0x4dfdf3.pX].syncDocumentInit({ initHeaders: _0x33d95f.initHeaders, history: _0x33d95f.history, cookies: _0x33d95f.cookies });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      if (typeof _0x33d95f.storagePartitionKey != "string" || _0x33d95f.storagePartitionKey.length === 0) throw Error("Scramjet document injection requires its storage partition key");
      let _0x37002f = Uint8Array.from(atob(String(self.WASM)), (_0x52d3bf) => _0x52d3bf.charCodeAt(0));
      delete self.WASM, (0, _0x4dfdf3.ht)(_0x37002f), new _0x317f54(globalThis, _0x33d95f);
    }
    class _0x317f54 {
      global;
      init;
      client;
      cookieJar;
      storage;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(_0xe89e0e, _0x28e408) {
        this.global = _0xe89e0e, this.init = _0x28e408;
        const _0x17e3cd = new MessageChannel();
        this.transport = new _0x5d9c4f(_0x17e3cd.port1), _0x592500.then((_0x16c458) => {
          if (_0x16c458 === null) throw Error("Scramjet transport requires the root service worker");
          _0x16c458.postMessage({ $sw$initRemoteTransport: { port: _0x17e3cd.port2, prefix: this.init.prefix.href } }, [_0x17e3cd.port2]);
        }).catch((_0x5bfa03) => {
          this.transport.fail(_0x5bfa03 instanceof Error ? _0x5bfa03 : Error(String(_0x5bfa03)));
        }), this.cookieJar = new _0x4dfdf3.cP(), this.cookieJar.load(this.init.cookies), this.storage = this.init.storage ? new _0x4dfdf3.I8(this.init.storage, async (_0x495527) => await this.transport.sendStorageMutation([_0x495527])) : void 0, this.handleServiceWorkerCookieMessage = (_0x580be8) => {
          if (!_0x580be8.data?.$controller$setCookie || typeof _0x580be8.data.$controller$setCookie != "object") return;
          let _0x441a31 = _0x580be8.data.$controller$setCookie;
          if (_0x441a31.options?.clear && this.cookieJar.clear(), Array.isArray(_0x441a31.cookies)) {
            for (let _0x44ff7b of _0x441a31.cookies) if (typeof _0x44ff7b?.url == "string" && typeof _0x44ff7b.cookie == "string") try {
              this.cookieJar.setCookies(_0x44ff7b.cookie, new URL(_0x44ff7b.url));
            } catch {
            }
          }
          typeof _0x441a31.id == "string" && _0x592500.then((_0x579a26) => {
            if (_0x579a26 === null) throw Error("Scramjet cookie acknowledgement requires the root service worker");
            _0x579a26.postMessage({ $sw$setCookieDone: { id: _0x441a31.id } });
          }).catch((_0x47407c) => {
          });
        }, _0x117c5e?.addEventListener("message", this.handleServiceWorkerCookieMessage), this.injectScramjet();
      }
      injectScramjet() {
        let _0x441605 = this.global.frameElement;
        _0x441605 && !_0x441605.name && (window.name = _0x441605.name = Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x11b49f) => _0x11b49f.toString(16).padStart(2, "0")).join(""));
        let _0x50ed3f = _0x441605?.[_0x30b924.I], _0x4b4d20 = !0;
        if (!_0x50ed3f) {
          _0x4b4d20 = !1;
          let _0x339203 = this.global.window;
          for (; _0x339203.parent !== _0x339203; ) {
            let _0x3e2f97 = Reflect.get(_0x339203, _0x4dfdf3.pX);
            if (!_0x3e2f97) {
              _0x339203 = _0x339203.parent.window;
              continue;
            }
            let _0x110645 = _0x3e2f97.descriptors.get("window.frameElement", _0x339203);
            if (_0x110645 && _0x110645[_0x30b924.I]) {
              _0x50ed3f = _0x110645[_0x30b924.I];
              break;
            }
            _0x339203 = _0x339203.parent.window;
          }
        }
        let _0x393f8e = { config: this.init.sjconfig, prefix: this.init.prefix, cookieJar: this.cookieJar, storage: this.storage, storagePartitionKey: this.init.storagePartitionKey, interface: { getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.storage, this.init.codecEncode, this.init.codecDecode, this.init.storagePartitionKey), codecEncode: this.init.codecEncode, codecDecode: this.init.codecDecode } };
        this.client = new _0x4dfdf3.bw(this.global, { context: _0x393f8e, transport: this.transport, sendSetCookie: async (_0x32149e, _0x62b252) => {
          await this.transport.sendSetCookie(_0x32149e, _0x62b252);
        }, shouldBlockMessageEvent: (_0x1da63a) => {
          let _0x373dd0 = _0x1da63a.data;
          return !!_0x373dd0 && typeof _0x373dd0 == "object" && ("$controller$setCookie" in _0x373dd0 || "$controller$swrevive" in _0x373dd0 || "$sw$setCookieDone" in _0x373dd0 || "$sw$initRemoteTransport" in _0x373dd0);
        }, hookSubcontext: (_0xf44068) => new _0x317f54(_0xf44068, { ...this.init, cookies: this.cookieJar.dump(), storage: this.storage?.dump() ?? null }).client, initHeaders: this.init.initHeaders, history: this.init.history });
        let _0x2d32f6 = { window: this.global.window, client: this.client, isTopLevel: _0x4b4d20 };
        _0x50ed3f && _0x4dfdf3.Cx.dispatch(_0x50ed3f.hooks.init.pre, _0x2d32f6, {}), this.client.hook(), _0x50ed3f && _0x4dfdf3.Cx.dispatch(_0x50ed3f.hooks.init.post, _0x2d32f6, {});
      }
    }
  })(), $scramjetController = _0x40f234;
})();
