var E = Object.defineProperty, a = (_0x39fd40, _0xacb636) => E(_0x39fd40, "name", { value: _0xacb636, configurable: !0 }), $scramjetController;
(() => {
  var _0x34171a = { 805(_0x57a7c7, _0x265203, _0x4a5894) {
    _0x4a5894.d(_0x265203, { C: a(() => _0x3e84ba, "C") });
    class _0x3e84ba {
      static {
        a(this, "o2");
      }
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x4da0af, _0x151109, _0x2853b6) {
        this.methods = _0x4da0af, this.id = _0x151109, this.sendRaw = _0x2853b6;
      }
      recieve(_0x386b78) {
        if (_0x386b78 == null || typeof _0x386b78 != "object") return;
        let _0xbcd829 = _0x386b78[this.id];
        if (_0xbcd829 == null || typeof _0xbcd829 != "object") return;
        let _0x2e4c8b = _0xbcd829.$type;
        if (_0x2e4c8b === "response") {
          let _0xeaa317 = _0xbcd829.$token, _0x2cf29e = _0xbcd829.$data, _0x21b65e = _0xbcd829.$error, _0x4416ed = this.promiseCallbacks.get(_0xeaa317);
          if (!_0x4416ed) return;
          this.promiseCallbacks.delete(_0xeaa317), _0x21b65e !== void 0 ? _0x4416ed.reject(Error(_0x21b65e)) : _0x4416ed.resolve(_0x2cf29e);
        } else if (_0x2e4c8b === "request") {
          let _0x5133ad = _0xbcd829.$method, _0x36325d = _0xbcd829.$args;
          this.methods[_0x5133ad](_0x36325d).then((_0x883fca) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0xbcd829.$token, $data: _0x883fca?.[0] } }, _0x883fca?.[1]);
          }).catch((_0x23ae0e) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0xbcd829.$token, $error: _0x23ae0e?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x1135a4, _0x21679c, _0x21353b = []) {
        let _0x3cbdde = this.counter++;
        return new Promise((_0x4e3b22, _0x3a4fe8) => {
          this.promiseCallbacks.set(_0x3cbdde, { resolve: _0x4e3b22, reject: _0x3a4fe8 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x1135a4, $args: _0x21679c, $token: _0x3cbdde } }, _0x21353b);
        });
      }
    }
  } }, _0x4b366c = {};
  function _0x47f5c9(_0x472aeb) {
    var _0xaa5025 = _0x4b366c[_0x472aeb];
    if (_0xaa5025 !== void 0) return _0xaa5025.exports;
    var _0x2540e6 = _0x4b366c[_0x472aeb] = { exports: {} };
    return _0x34171a[_0x472aeb](_0x2540e6, _0x2540e6.exports, _0x47f5c9), _0x2540e6.exports;
  }
  a(_0x47f5c9, "r"), _0x47f5c9.d = (_0x51a051, _0x1b6520) => {
    for (var _0x20f268 in _0x1b6520) _0x47f5c9.o(_0x1b6520, _0x20f268) && !_0x47f5c9.o(_0x51a051, _0x20f268) && Object.defineProperty(_0x51a051, _0x20f268, { enumerable: !0, get: _0x1b6520[_0x20f268] });
  }, _0x47f5c9.o = (_0x4d5317, _0x427554) => Object.prototype.hasOwnProperty.call(_0x4d5317, _0x427554), _0x47f5c9.r = (_0x3e6a09) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x3e6a09, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x3e6a09, "__esModule", { value: !0 });
  };
  var _0x4dced8 = {};
  (() => {
    let _0x2fd003;
    _0x47f5c9.r(_0x4dced8), _0x47f5c9.d(_0x4dced8, { route: a(() => _0x59f620, "route"), shouldRoute: a(() => _0x4e9d52, "shouldRoute") });
    var _0x1a91f1 = _0x47f5c9(805);
    function _0x19c7b0() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x387610) => _0x387610.toString(16).padStart(2, "0")).join("");
    }
    a(_0x19c7b0, "i");
    function _0x2cc87d(_0x25f168) {
      let _0x3c4977 = _0x25f168.source;
      return _0x3c4977 && typeof _0x3c4977 == "object" && "id" in _0x3c4977 && typeof _0x3c4977.id == "string" ? _0x3c4977.id : null;
    }
    a(_0x2cc87d, "n");
    let _0x2a434e = {}, _0xb6ab11 = _0x19c7b0(), _0x40f302 = /* @__PURE__ */ new Map();
    function _0x1c2ad8(_0x3edcb3) {
      let _0xdde89d = /\/([0-9a-f]{32})\/[0-9a-f]{32}\/https?(?:%3A%2F%2F|%253A%252F%252F)/.exec(_0x3edcb3);
      return _0xdde89d && _0xdde89d.index !== void 0 && _0xdde89d[1] ? _0x3edcb3.slice(0, _0xdde89d.index + _0xdde89d[1].length + 2) : null;
    }
    a(_0x1c2ad8, "d");
    function _0x339339(_0x14c0ff) {
      return _0x13412a.find((_0x350e91) => _0x14c0ff === _0x350e91.prefix && !_0x350e91.isClosed());
    }
    a(_0x339339, "c");
    function _0x1aaed2() {
      if (_0x2fd003 && _0x2fd003.expiresAt > Date.now()) return _0x2fd003.promise;
      let _0x1157b = _0x19c7b0(), _0x4ea9d1 = Date.now() + 1e3, _0xb7f8d9 = (async () => {
        for (let _0x22b5bc of await clients.matchAll({ includeUncontrolled: !0, type: "window" })) _0x22b5bc.postMessage({ $controller$swrevive: { workerId: _0xb6ab11, revivalId: _0x1157b } });
        await new Promise((_0x26c3cc) => {
          setTimeout(() => _0x26c3cc(void 0), 1e3);
        });
      })();
      return _0x2fd003 = { expiresAt: _0x4ea9d1, promise: _0xb7f8d9 }, _0xb7f8d9.then(() => {
        _0x2fd003?.promise === _0xb7f8d9 && (_0x2fd003 = void 0);
      }, () => {
        _0x2fd003?.promise === _0xb7f8d9 && (_0x2fd003 = void 0);
      }), _0xb7f8d9;
    }
    a(_0x1aaed2, "u");
    async function _0xd85717(_0x166927) {
      let _0x43a797, _0x122dc8 = _0x339339(_0x166927);
      if (_0x122dc8) return _0x122dc8;
      let _0x10784d = new Promise((_0x5a6bbd) => {
        _0x43a797 = a((_0x19c55c) => {
          _0x5a6bbd(_0x19c55c);
        }, "t3");
        let _0x158d7b = _0x40f302.get(_0x166927) ?? /* @__PURE__ */ new Set();
        _0x158d7b.add(_0x43a797), _0x40f302.set(_0x166927, _0x158d7b);
      });
      try {
        return await Promise.race([_0x10784d, _0x1aaed2()]), _0x339339(_0x166927);
      } finally {
        if (_0x43a797) {
          let _0x46fc48 = _0x40f302.get(_0x166927);
          _0x46fc48?.delete(_0x43a797), _0x46fc48?.size === 0 && _0x40f302.delete(_0x166927);
        }
      }
    }
    a(_0xd85717, "f"), _0x1aaed2().catch((_0x1a71d5) => {
    }), addEventListener("message", (_0xc20257) => {
      if (_0xc20257.data && typeof _0xc20257.data == "object") {
        if (_0xc20257.data.$sw$setCookieDone && typeof _0xc20257.data.$sw$setCookieDone == "object") {
          let _0x58694b = _0xc20257.data.$sw$setCookieDone, _0x393bd0 = _0x2a434e[_0x58694b.id];
          _0x393bd0 && (_0x393bd0(), delete _0x2a434e[_0x58694b.id]);
        }
        if (_0xc20257.data.$sw$initRemoteTransport && typeof _0xc20257.data.$sw$initRemoteTransport == "object") {
          let { port: _0x295dbc, prefix: _0x389576 } = _0xc20257.data.$sw$initRemoteTransport, _0x5c34bf = _0x13412a.find((_0x2866a5) => new URL(_0x389576).pathname.startsWith(_0x2866a5.prefix));
          if (!_0x5c34bf) return;
          _0x5c34bf.rpc.call("initRemoteTransport", { port: _0x295dbc, prefix: _0x389576 }, [_0x295dbc]).catch((_0x5a5064) => {
            _0x5c34bf.isClosed();
          });
        }
      }
    });
    class _0x183823 {
      static {
        a(this, "p");
      }
      prefix;
      id;
      ownerClientId;
      connectionId;
      port;
      rpc;
      closed = !1;
      constructor(_0x536823, _0x51745c, _0x32a3b5, _0x43ab3f, _0x9cbd98) {
        this.prefix = _0x536823, this.id = _0x51745c, this.ownerClientId = _0x32a3b5, this.connectionId = _0x43ab3f, this.port = _0x9cbd98, this.rpc = new _0x1a91f1.C({ sendSetCookie: a(async ({ cookies: _0xfc8be3, options: _0x4a5af9 }) => {
          let _0x52ea20, _0x18218c = (await self.clients.matchAll()).filter((_0x4a53f4) => new URL(_0x4a53f4.url).pathname.startsWith(this.prefix)), _0x2c20b9 = [], _0x303a09 = [];
          try {
            for (let _0x1c707f of _0x18218c) {
              let _0x43cd66 = _0x19c7b0();
              _0x2c20b9.push(_0x43cd66), _0x303a09.push(new Promise((_0x1d48cc) => {
                _0x2a434e[_0x43cd66] = () => {
                  _0x1d48cc(_0x43cd66);
                };
              })), _0x1c707f.postMessage({ $controller$setCookie: { cookies: _0xfc8be3, options: _0x4a5af9, id: _0x43cd66 } });
            }
            if (_0x303a09.length > 0) {
              let _0xf0cf80 = new Promise((_0x5f036d) => {
                _0x52ea20 = setTimeout(() => {
                  "" + _0x2c20b9.filter((_0x5ab515) => _0x2a434e[_0x5ab515] !== void 0).length, _0x5f036d(void 0);
                }, 1e3);
              });
              await Promise.race([Promise.all(_0x303a09), _0xf0cf80]);
            }
          } finally {
            for (let _0x25967d of (_0x52ea20 !== void 0 && clearTimeout(_0x52ea20), _0x2c20b9)) delete _0x2a434e[_0x25967d];
          }
        }, "sendSetCookie") }, "tabchannel-" + _0x51745c, (_0x1d47c7, _0x2cca22) => {
          _0x9cbd98.postMessage(_0x1d47c7, _0x2cca22);
        }), _0x9cbd98.onmessage = (_0x305da0) => {
          this.rpc.recieve(_0x305da0.data);
        }, _0x9cbd98.onmessageerror = new Proxy({}, { get: a(() => () => {
        }, "get") }).error, this.rpc.call("ready", { workerId: _0xb6ab11, connectionId: this.connectionId }).catch((_0x1a0c7a) => {
          this.closed;
        });
      }
      isClosed() {
        return this.closed;
      }
      close() {
        if (this.closed) return;
        this.closed = !0;
        let _0x531ffa = Error("Scramjet Controller reference closed");
        for (let _0x2c4d6e of this.rpc.promiseCallbacks.values()) _0x2c4d6e.reject(_0x531ffa);
        this.rpc.promiseCallbacks.clear(), this.port.onmessage = null, this.port.onmessageerror = null;
        try {
          this.port.close();
        } catch {
        }
      }
    }
    let _0x13412a = [], _0x2ee896 = /* @__PURE__ */ new Set();
    function _0x4e9d52(_0x5df896) {
      let _0x391bd2 = new URL(_0x5df896.request.url);
      return _0x391bd2.origin === location.origin && (!!_0x13412a.some((_0x172f6d) => _0x391bd2.pathname.startsWith(_0x172f6d.prefix)) || !!((_0x5df896.clientId || _0x5df896.resultingClientId) && _0x1c2ad8(_0x391bd2.pathname)));
    }
    a(_0x4e9d52, "w");
    async function _0x59f620(_0x5a91ef) {
      try {
        let _0x4f1f33 = new URL(_0x5a91ef.request.url), _0x11cee0 = _0x13412a.find((_0x521e08) => _0x4f1f33.pathname.startsWith(_0x521e08.prefix));
        if (!_0x11cee0) {
          let _0x45deb1 = _0x1c2ad8(_0x4f1f33.pathname);
          if (!_0x45deb1 || !_0x5a91ef.clientId && !_0x5a91ef.resultingClientId) return new Response("Scramjet Controller ownership was not established", { status: 503 });
          if (!(_0x11cee0 = await _0xd85717(_0x45deb1))) return new Response("Scramjet Controller revival expired", { status: 503 });
        }
        let _0xabfd68 = await clients.get(_0x5a91ef.clientId), _0x2e92c0 = [..._0x5a91ef.request.headers], _0x4b67b2 = await _0x11cee0.rpc.call("request", { rawUrl: _0x5a91ef.request.url, rawReferrer: _0x5a91ef.request.referrer, destination: _0x5a91ef.request.destination, mode: _0x5a91ef.request.mode, credentials: _0x5a91ef.request.credentials, referrer: _0x5a91ef.request.referrer, method: _0x5a91ef.request.method, body: _0x5a91ef.request.body, cache: _0x5a91ef.request.cache, forceCrossOriginIsolated: !1, initialHeaders: _0x2e92c0, rawClientUrl: _0xabfd68 ? _0xabfd68.url : void 0, clientId: _0x5a91ef.resultingClientId || _0x5a91ef.clientId, sourceClientId: _0x5a91ef.clientId, resultingClientId: _0x5a91ef.resultingClientId }, _0x5a91ef.request.body instanceof ReadableStream || _0x5a91ef.request.body instanceof ArrayBuffer ? [_0x5a91ef.request.body] : void 0);
        return new Response(_0x4b67b2.body, { status: _0x4b67b2.status, statusText: _0x4b67b2.statusText, headers: _0x4b67b2.headers });
      } catch (_0x5ea386) {
        return _0x5a91ef.request.mode === "navigate" ? new Response("Internal Service Worker Error: " + _0x5ea386.message, { status: 500 }) : Response.error();
      }
    }
    a(_0x59f620, "y"), addEventListener("message", (_0x55e482) => {
      let _0x3b48fa;
      if (!_0x55e482.data || typeof _0x55e482.data != "object") return;
      if (_0x55e482.data.$controller$detach && typeof _0x55e482.data.$controller$detach == "object") {
        let _0x54f7c6 = _0x55e482.data.$controller$detach, _0x7c2830 = _0x55e482.ports[0], _0x453c4a = _0x2cc87d(_0x55e482);
        if (typeof _0x54f7c6.id != "string" || !_0x7c2830 || !_0x453c4a) return;
        let _0x28b13b = _0x13412a.findIndex((_0x4d6496) => _0x4d6496.id === _0x54f7c6.id), _0x2a3ffc = _0x2ee896.has(_0x54f7c6.id);
        if (_0x28b13b !== -1 && _0x13412a[_0x28b13b]?.ownerClientId === _0x453c4a) {
          let [_0x41b96c] = _0x13412a.splice(_0x28b13b, 1);
          _0x41b96c.close(), _0x2ee896.add(_0x54f7c6.id), _0x2a3ffc = !0;
        }
        let _0x3f4080 = { id: _0x54f7c6.id, detached: _0x2a3ffc };
        _0x7c2830.postMessage({ $controller$detached: _0x3f4080 }), _0x7c2830.close();
        return;
      }
      if (!_0x55e482.data.$controller$init || typeof _0x55e482.data.$controller$init != "object") return;
      let _0x3f359b = _0x55e482.data.$controller$init, _0x2268d9 = _0x2cc87d(_0x55e482);
      if (typeof _0x3f359b.id != "string" || !/^[0-9a-f]{32}$/.test(_0x3f359b.id) || typeof _0x3f359b.prefix != "string" || _0x3f359b.workerId !== void 0 && _0x3f359b.workerId !== _0xb6ab11 || !_0x2268d9 || !_0x55e482.ports[0]) return;
      try {
        let _0xaa9586 = new URL(_0x3f359b.prefix, location.origin);
        if (_0xaa9586.origin !== location.origin || !_0xaa9586.pathname.endsWith("/" + _0x3f359b.id + "/")) return;
        _0x3b48fa = _0xaa9586.pathname;
      } catch {
        return;
      }
      let _0x11d8bb = _0x13412a.findIndex((_0x3ccdd6) => _0x3ccdd6.id === _0x3f359b.id);
      if (_0x11d8bb !== -1) {
        if (_0x13412a[_0x11d8bb]?.ownerClientId !== _0x2268d9) return void _0x55e482.ports[0].close();
        let [_0x55014f] = _0x13412a.splice(_0x11d8bb, 1);
        _0x55014f.close();
      }
      _0x2ee896.delete(_0x3f359b.id);
      let _0x2cc154 = new _0x183823(_0x3b48fa, _0x3f359b.id, _0x2268d9, typeof _0x3f359b.connectionId == "string" ? _0x3f359b.connectionId : void 0, _0x55e482.ports[0]);
      for (let _0x4aeabf of (_0x13412a.push(_0x2cc154), _0x40f302.get(_0x3b48fa) ?? [])) _0x4aeabf(_0x2cc154);
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", (_0x1af664) => {
      _0x1af664.waitUntil((async () => {
        await clients.claim(), await _0x1aaed2();
      })());
    });
  })(), $scramjetController = _0x4dced8;
})();
