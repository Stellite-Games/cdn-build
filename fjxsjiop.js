var E = Object.defineProperty, a = (_0xb13d43, _0x636bdd) => E(_0xb13d43, "name", { value: _0x636bdd, configurable: !0 }), $scramjetController;
(() => {
  var _0x55785f = { 805(_0xffdda0, _0x1ef984, _0x5d4aab) {
    _0x5d4aab.d(_0x1ef984, { C: a(() => _0x22d6b9, "C") });
    class _0x22d6b9 {
      static {
        a(this, "o2");
      }
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x3f518b, _0x380a9e, _0x557fd3) {
        this.methods = _0x3f518b, this.id = _0x380a9e, this.sendRaw = _0x557fd3;
      }
      recieve(_0x575e07) {
        if (_0x575e07 == null || typeof _0x575e07 != "object") return;
        let _0x397347 = _0x575e07[this.id];
        if (_0x397347 == null || typeof _0x397347 != "object") return;
        let _0x19904a = _0x397347.$type;
        if (_0x19904a === "response") {
          let _0x2c6fc8 = _0x397347.$token, _0x2d47bc = _0x397347.$data, _0x149f5e = _0x397347.$error, _0x14e3ed = this.promiseCallbacks.get(_0x2c6fc8);
          if (!_0x14e3ed) return;
          this.promiseCallbacks.delete(_0x2c6fc8), _0x149f5e !== void 0 ? _0x14e3ed.reject(Error(_0x149f5e)) : _0x14e3ed.resolve(_0x2d47bc);
        } else if (_0x19904a === "request") {
          let _0x4e6ffb = _0x397347.$method, _0x5a97ba = _0x397347.$args;
          this.methods[_0x4e6ffb](_0x5a97ba).then((_0x85ac85) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x397347.$token, $data: _0x85ac85?.[0] } }, _0x85ac85?.[1]);
          }).catch((_0x3aecb2) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x397347.$token, $error: _0x3aecb2?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x46e455, _0x5a3fe4, _0x1136d3 = []) {
        let _0xa8a999 = this.counter++;
        return new Promise((_0x3947ed, _0x3b24dc) => {
          this.promiseCallbacks.set(_0xa8a999, { resolve: _0x3947ed, reject: _0x3b24dc }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x46e455, $args: _0x5a3fe4, $token: _0xa8a999 } }, _0x1136d3);
        });
      }
    }
  } }, _0x3ebde8 = {};
  function _0x2e1f1c(_0x2cafad) {
    var _0x4ffa42 = _0x3ebde8[_0x2cafad];
    if (_0x4ffa42 !== void 0) return _0x4ffa42.exports;
    var _0x4b3dc6 = _0x3ebde8[_0x2cafad] = { exports: {} };
    return _0x55785f[_0x2cafad](_0x4b3dc6, _0x4b3dc6.exports, _0x2e1f1c), _0x4b3dc6.exports;
  }
  a(_0x2e1f1c, "r"), _0x2e1f1c.d = (_0x1fb55a, _0x4efc3c) => {
    for (var _0x450acc in _0x4efc3c) _0x2e1f1c.o(_0x4efc3c, _0x450acc) && !_0x2e1f1c.o(_0x1fb55a, _0x450acc) && Object.defineProperty(_0x1fb55a, _0x450acc, { enumerable: !0, get: _0x4efc3c[_0x450acc] });
  }, _0x2e1f1c.o = (_0x35ee6c, _0x56a83b) => Object.prototype.hasOwnProperty.call(_0x35ee6c, _0x56a83b), _0x2e1f1c.r = (_0x40d1f7) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x40d1f7, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x40d1f7, "__esModule", { value: !0 });
  };
  var _0x327e43 = {};
  (() => {
    let _0x8d1f83;
    _0x2e1f1c.r(_0x327e43), _0x2e1f1c.d(_0x327e43, { route: a(() => _0x53b91b, "route"), shouldRoute: a(() => _0x217870, "shouldRoute") });
    var _0x5bfb6e = _0x2e1f1c(805);
    function _0x551fe4() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0xae7bd8) => _0xae7bd8.toString(16).padStart(2, "0")).join("");
    }
    a(_0x551fe4, "i");
    function _0x3d3734(_0x5d63bc) {
      let _0x4b38f2 = _0x5d63bc.source;
      return _0x4b38f2 && typeof _0x4b38f2 == "object" && "id" in _0x4b38f2 && typeof _0x4b38f2.id == "string" ? _0x4b38f2.id : null;
    }
    a(_0x3d3734, "n");
    let _0x196ee1 = {}, _0x5f2160 = _0x551fe4(), _0x52a612 = /* @__PURE__ */ new Map();
    function _0x4cbe54(_0x5c5460) {
      let _0x11eb91 = /\/([0-9a-f]{32})\/[0-9a-f]{32}\/https?(?:%3A%2F%2F|%253A%252F%252F)/.exec(_0x5c5460);
      return _0x11eb91 && _0x11eb91.index !== void 0 && _0x11eb91[1] ? _0x5c5460.slice(0, _0x11eb91.index + _0x11eb91[1].length + 2) : null;
    }
    a(_0x4cbe54, "d");
    function _0x1fd068(_0xdb17f9) {
      return _0x29fe4d.find((_0x43a239) => _0xdb17f9 === _0x43a239.prefix && !_0x43a239.isClosed());
    }
    a(_0x1fd068, "c");
    function _0x5bf186() {
      if (_0x8d1f83 && _0x8d1f83.expiresAt > Date.now()) return _0x8d1f83.promise;
      let _0x1feddc = _0x551fe4(), _0x5d3252 = Date.now() + 1e3, _0x3fd528 = (async () => {
        for (let _0x4f1a46 of await clients.matchAll({ includeUncontrolled: !0, type: "window" })) _0x4f1a46.postMessage({ $controller$swrevive: { workerId: _0x5f2160, revivalId: _0x1feddc } });
        await new Promise((_0x1230e3) => {
          setTimeout(() => _0x1230e3(void 0), 1e3);
        });
      })();
      return _0x8d1f83 = { expiresAt: _0x5d3252, promise: _0x3fd528 }, _0x3fd528.then(() => {
        _0x8d1f83?.promise === _0x3fd528 && (_0x8d1f83 = void 0);
      }, () => {
        _0x8d1f83?.promise === _0x3fd528 && (_0x8d1f83 = void 0);
      }), _0x3fd528;
    }
    a(_0x5bf186, "u");
    async function _0x55f09d(_0x58da57) {
      let _0x1bda0c, _0x22e843 = _0x1fd068(_0x58da57);
      if (_0x22e843) return _0x22e843;
      let _0x54009a = new Promise((_0x22fbc8) => {
        _0x1bda0c = a((_0x23c99e) => {
          _0x22fbc8(_0x23c99e);
        }, "t3");
        let _0x57e318 = _0x52a612.get(_0x58da57) ?? /* @__PURE__ */ new Set();
        _0x57e318.add(_0x1bda0c), _0x52a612.set(_0x58da57, _0x57e318);
      });
      try {
        return await Promise.race([_0x54009a, _0x5bf186()]), _0x1fd068(_0x58da57);
      } finally {
        if (_0x1bda0c) {
          let _0x5764e0 = _0x52a612.get(_0x58da57);
          _0x5764e0?.delete(_0x1bda0c), _0x5764e0?.size === 0 && _0x52a612.delete(_0x58da57);
        }
      }
    }
    a(_0x55f09d, "f"), _0x5bf186().catch((_0x1d3c17) => {
    }), addEventListener("message", (_0x210b80) => {
      if (_0x210b80.data && typeof _0x210b80.data == "object") {
        if (_0x210b80.data.$sw$setCookieDone && typeof _0x210b80.data.$sw$setCookieDone == "object") {
          let _0x158bfe = _0x210b80.data.$sw$setCookieDone, _0x118ade = _0x196ee1[_0x158bfe.id];
          _0x118ade && (_0x118ade(), delete _0x196ee1[_0x158bfe.id]);
        }
        if (_0x210b80.data.$sw$initRemoteTransport && typeof _0x210b80.data.$sw$initRemoteTransport == "object") {
          let { port: _0x2737ea, prefix: _0x3ccc30 } = _0x210b80.data.$sw$initRemoteTransport, _0x2ff95a = _0x29fe4d.find((_0x1d886c) => new URL(_0x3ccc30).pathname.startsWith(_0x1d886c.prefix));
          if (!_0x2ff95a) return;
          _0x2ff95a.rpc.call("initRemoteTransport", { port: _0x2737ea, prefix: _0x3ccc30 }, [_0x2737ea]).catch((_0x436dcb) => {
            _0x2ff95a.isClosed();
          });
        }
      }
    });
    class _0xc33b94 {
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
      constructor(_0x33417f, _0x412b41, _0x561da6, _0x563505, _0x46395a) {
        this.prefix = _0x33417f, this.id = _0x412b41, this.ownerClientId = _0x561da6, this.connectionId = _0x563505, this.port = _0x46395a, this.rpc = new _0x5bfb6e.C({ sendSetCookie: a(async ({ cookies: _0x3773f1, options: _0x7fc54 }) => {
          let _0xc75d4a, _0x4577cd = (await self.clients.matchAll()).filter((_0x1a1cc2) => new URL(_0x1a1cc2.url).pathname.startsWith(this.prefix)), _0x19725c = [], _0x20b9cc = [];
          try {
            for (let _0x483395 of _0x4577cd) {
              let _0x24d26e = _0x551fe4();
              _0x19725c.push(_0x24d26e), _0x20b9cc.push(new Promise((_0xaa4852) => {
                _0x196ee1[_0x24d26e] = () => {
                  _0xaa4852(_0x24d26e);
                };
              })), _0x483395.postMessage({ $controller$setCookie: { cookies: _0x3773f1, options: _0x7fc54, id: _0x24d26e } });
            }
            if (_0x20b9cc.length > 0) {
              let _0xf82a7a = new Promise((_0x548261) => {
                _0xc75d4a = setTimeout(() => {
                  "" + _0x19725c.filter((_0x23e0e7) => _0x196ee1[_0x23e0e7] !== void 0).length, _0x548261(void 0);
                }, 1e3);
              });
              await Promise.race([Promise.all(_0x20b9cc), _0xf82a7a]);
            }
          } finally {
            for (let _0x2fe5fa of (_0xc75d4a !== void 0 && clearTimeout(_0xc75d4a), _0x19725c)) delete _0x196ee1[_0x2fe5fa];
          }
        }, "sendSetCookie") }, "tabchannel-" + _0x412b41, (_0x489a9d, _0x3a898d) => {
          _0x46395a.postMessage(_0x489a9d, _0x3a898d);
        }), _0x46395a.onmessage = (_0x507854) => {
          this.rpc.recieve(_0x507854.data);
        }, _0x46395a.onmessageerror = new Proxy({}, { get: a(() => () => {
        }, "get") }).error, this.rpc.call("ready", { workerId: _0x5f2160, connectionId: this.connectionId }).catch((_0x3974d9) => {
          this.closed;
        });
      }
      isClosed() {
        return this.closed;
      }
      close() {
        if (this.closed) return;
        this.closed = !0;
        let _0x203a2c = Error("Scramjet Controller reference closed");
        for (let _0x903dfe of this.rpc.promiseCallbacks.values()) _0x903dfe.reject(_0x203a2c);
        this.rpc.promiseCallbacks.clear(), this.port.onmessage = null, this.port.onmessageerror = null;
        try {
          this.port.close();
        } catch {
        }
      }
    }
    let _0x29fe4d = [], _0x22c1ac = /* @__PURE__ */ new Set();
    function _0x217870(_0x3ced49) {
      let _0x3ef32a = new URL(_0x3ced49.request.url);
      return _0x3ef32a.origin === location.origin && (!!_0x29fe4d.some((_0x12bdee) => _0x3ef32a.pathname.startsWith(_0x12bdee.prefix)) || !!((_0x3ced49.clientId || _0x3ced49.resultingClientId) && _0x4cbe54(_0x3ef32a.pathname)));
    }
    a(_0x217870, "w");
    async function _0x53b91b(_0x56e72b) {
      try {
        let _0x2b4f15 = new URL(_0x56e72b.request.url), _0xb07f8c = _0x29fe4d.find((_0x9fafec) => _0x2b4f15.pathname.startsWith(_0x9fafec.prefix));
        if (!_0xb07f8c) {
          let _0x528401 = _0x4cbe54(_0x2b4f15.pathname);
          if (!_0x528401 || !_0x56e72b.clientId && !_0x56e72b.resultingClientId) return new Response("Scramjet Controller ownership was not established", { status: 503 });
          if (!(_0xb07f8c = await _0x55f09d(_0x528401))) return new Response("Scramjet Controller revival expired", { status: 503 });
        }
        let _0x2f38ea = await clients.get(_0x56e72b.clientId), _0x2dd1c9 = [..._0x56e72b.request.headers], _0x45f0f4 = await _0xb07f8c.rpc.call("request", { rawUrl: _0x56e72b.request.url, rawReferrer: _0x56e72b.request.referrer, destination: _0x56e72b.request.destination, mode: _0x56e72b.request.mode, credentials: _0x56e72b.request.credentials, referrer: _0x56e72b.request.referrer, method: _0x56e72b.request.method, body: _0x56e72b.request.body, cache: _0x56e72b.request.cache, forceCrossOriginIsolated: !1, initialHeaders: _0x2dd1c9, rawClientUrl: _0x2f38ea ? _0x2f38ea.url : void 0, clientId: _0x56e72b.resultingClientId || _0x56e72b.clientId, sourceClientId: _0x56e72b.clientId, resultingClientId: _0x56e72b.resultingClientId }, _0x56e72b.request.body instanceof ReadableStream || _0x56e72b.request.body instanceof ArrayBuffer ? [_0x56e72b.request.body] : void 0);
        return new Response(_0x45f0f4.body, { status: _0x45f0f4.status, statusText: _0x45f0f4.statusText, headers: _0x45f0f4.headers });
      } catch (_0x9dcb2f) {
        return _0x56e72b.request.mode === "navigate" ? new Response("Internal Service Worker Error: " + _0x9dcb2f.message, { status: 500 }) : Response.error();
      }
    }
    a(_0x53b91b, "y"), addEventListener("message", (_0x4ae18b) => {
      let _0x362e44;
      if (!_0x4ae18b.data || typeof _0x4ae18b.data != "object") return;
      if (_0x4ae18b.data.$controller$detach && typeof _0x4ae18b.data.$controller$detach == "object") {
        let _0x1f1d8f = _0x4ae18b.data.$controller$detach, _0x5ba349 = _0x4ae18b.ports[0], _0x21bb30 = _0x3d3734(_0x4ae18b);
        if (typeof _0x1f1d8f.id != "string" || !_0x5ba349 || !_0x21bb30) return;
        let _0xd9ecaf = _0x29fe4d.findIndex((_0x5b38af) => _0x5b38af.id === _0x1f1d8f.id), _0x191ab7 = _0x22c1ac.has(_0x1f1d8f.id);
        if (_0xd9ecaf !== -1 && _0x29fe4d[_0xd9ecaf]?.ownerClientId === _0x21bb30) {
          let [_0x4bfa0a] = _0x29fe4d.splice(_0xd9ecaf, 1);
          _0x4bfa0a.close(), _0x22c1ac.add(_0x1f1d8f.id), _0x191ab7 = !0;
        }
        let _0x407b61 = { id: _0x1f1d8f.id, detached: _0x191ab7 };
        _0x5ba349.postMessage({ $controller$detached: _0x407b61 }), _0x5ba349.close();
        return;
      }
      if (!_0x4ae18b.data.$controller$init || typeof _0x4ae18b.data.$controller$init != "object") return;
      let _0x3e77a7 = _0x4ae18b.data.$controller$init, _0x2c3127 = _0x3d3734(_0x4ae18b);
      if (typeof _0x3e77a7.id != "string" || !/^[0-9a-f]{32}$/.test(_0x3e77a7.id) || typeof _0x3e77a7.prefix != "string" || _0x3e77a7.workerId !== void 0 && _0x3e77a7.workerId !== _0x5f2160 || !_0x2c3127 || !_0x4ae18b.ports[0]) return;
      try {
        let _0x299709 = new URL(_0x3e77a7.prefix, location.origin);
        if (_0x299709.origin !== location.origin || !_0x299709.pathname.endsWith("/" + _0x3e77a7.id + "/")) return;
        _0x362e44 = _0x299709.pathname;
      } catch {
        return;
      }
      let _0x5f08e5 = _0x29fe4d.findIndex((_0xbba3b5) => _0xbba3b5.id === _0x3e77a7.id);
      if (_0x5f08e5 !== -1) {
        if (_0x29fe4d[_0x5f08e5]?.ownerClientId !== _0x2c3127) return void _0x4ae18b.ports[0].close();
        let [_0x206114] = _0x29fe4d.splice(_0x5f08e5, 1);
        _0x206114.close();
      }
      _0x22c1ac.delete(_0x3e77a7.id);
      let _0x2d4a80 = new _0xc33b94(_0x362e44, _0x3e77a7.id, _0x2c3127, typeof _0x3e77a7.connectionId == "string" ? _0x3e77a7.connectionId : void 0, _0x4ae18b.ports[0]);
      for (let _0x2ad7d0 of (_0x29fe4d.push(_0x2d4a80), _0x52a612.get(_0x362e44) ?? [])) _0x2ad7d0(_0x2d4a80);
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", (_0x47d322) => {
      _0x47d322.waitUntil((async () => {
        await clients.claim(), await _0x5bf186();
      })());
    });
  })(), $scramjetController = _0x327e43;
})();
