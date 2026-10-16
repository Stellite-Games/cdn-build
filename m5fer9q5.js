var E = Object.defineProperty, a = (_0x2a42d6, _0xdd528c) => E(_0x2a42d6, "name", { value: _0xdd528c, configurable: !0 }), $scramjetController;
(() => {
  var _0x444995 = { 805(_0x5906d5, _0x3621ab, _0x45a805) {
    _0x45a805.d(_0x3621ab, { C: a(() => _0x5a4498, "C") });
    class _0x5a4498 {
      static {
        a(this, "o2");
      }
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x19d4f6, _0x1d4d68, _0x2a7c33) {
        this.methods = _0x19d4f6, this.id = _0x1d4d68, this.sendRaw = _0x2a7c33;
      }
      recieve(_0x4099da) {
        if (_0x4099da == null || typeof _0x4099da != "object") return;
        let _0x597c9c = _0x4099da[this.id];
        if (_0x597c9c == null || typeof _0x597c9c != "object") return;
        let _0x47d845 = _0x597c9c.$type;
        if (_0x47d845 === "response") {
          let _0x27721e = _0x597c9c.$token, _0xd9c4fc = _0x597c9c.$data, _0x24c859 = _0x597c9c.$error, _0x330bc4 = this.promiseCallbacks.get(_0x27721e);
          if (!_0x330bc4) return;
          this.promiseCallbacks.delete(_0x27721e), _0x24c859 !== void 0 ? _0x330bc4.reject(Error(_0x24c859)) : _0x330bc4.resolve(_0xd9c4fc);
        } else if (_0x47d845 === "request") {
          let _0x436156 = _0x597c9c.$method, _0x47f211 = _0x597c9c.$args;
          this.methods[_0x436156](_0x47f211).then((_0x294527) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x597c9c.$token, $data: _0x294527?.[0] } }, _0x294527?.[1]);
          }).catch((_0x2dc61f) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x597c9c.$token, $error: _0x2dc61f?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x2e97f0, _0x330d46, _0x4fe1de = []) {
        let _0x586eee = this.counter++;
        return new Promise((_0x36a96d, _0x319d5b) => {
          this.promiseCallbacks.set(_0x586eee, { resolve: _0x36a96d, reject: _0x319d5b }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x2e97f0, $args: _0x330d46, $token: _0x586eee } }, _0x4fe1de);
        });
      }
    }
  } }, _0x370525 = {};
  function _0x77663c(_0x2749d7) {
    var _0x1160db = _0x370525[_0x2749d7];
    if (_0x1160db !== void 0) return _0x1160db.exports;
    var _0x5dd8b4 = _0x370525[_0x2749d7] = { exports: {} };
    return _0x444995[_0x2749d7](_0x5dd8b4, _0x5dd8b4.exports, _0x77663c), _0x5dd8b4.exports;
  }
  a(_0x77663c, "r"), _0x77663c.d = (_0x2765a8, _0x36d570) => {
    for (var _0x1261c5 in _0x36d570) _0x77663c.o(_0x36d570, _0x1261c5) && !_0x77663c.o(_0x2765a8, _0x1261c5) && Object.defineProperty(_0x2765a8, _0x1261c5, { enumerable: !0, get: _0x36d570[_0x1261c5] });
  }, _0x77663c.o = (_0x36fc60, _0x29e30a) => Object.prototype.hasOwnProperty.call(_0x36fc60, _0x29e30a), _0x77663c.r = (_0x39617b) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x39617b, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x39617b, "__esModule", { value: !0 });
  };
  var _0x569cee = {};
  (() => {
    let _0x130e38;
    _0x77663c.r(_0x569cee), _0x77663c.d(_0x569cee, { route: a(() => _0x175d42, "route"), shouldRoute: a(() => _0x2fd6fd, "shouldRoute") });
    var _0x37db20 = _0x77663c(805);
    function _0x2c71c1() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x53b82e) => _0x53b82e.toString(16).padStart(2, "0")).join("");
    }
    a(_0x2c71c1, "i");
    function _0x4a62f2(_0x3edfec) {
      let _0x3fd8dd = _0x3edfec.source;
      return _0x3fd8dd && typeof _0x3fd8dd == "object" && "id" in _0x3fd8dd && typeof _0x3fd8dd.id == "string" ? _0x3fd8dd.id : null;
    }
    a(_0x4a62f2, "n");
    let _0x4a754c = {}, _0x14873e = _0x2c71c1(), _0x5f45a3 = /* @__PURE__ */ new Map();
    function _0xd99067(_0x37fec9) {
      let _0x5edc9c = /\/([0-9a-f]{32})\/[0-9a-f]{32}\/https?(?:%3A%2F%2F|%253A%252F%252F)/.exec(_0x37fec9);
      return _0x5edc9c && _0x5edc9c.index !== void 0 && _0x5edc9c[1] ? _0x37fec9.slice(0, _0x5edc9c.index + _0x5edc9c[1].length + 2) : null;
    }
    a(_0xd99067, "d");
    function _0x5b4a36(_0x4ad6e1) {
      return _0x3b55d1.find((_0xd75931) => _0x4ad6e1 === _0xd75931.prefix && !_0xd75931.isClosed());
    }
    a(_0x5b4a36, "c");
    function _0x262ce8() {
      if (_0x130e38 && _0x130e38.expiresAt > Date.now()) return _0x130e38.promise;
      let _0x25b551 = _0x2c71c1(), _0x5d5dfa = Date.now() + 1e3, _0x5b29ca = (async () => {
        for (let _0x1ca226 of await clients.matchAll({ includeUncontrolled: !0, type: "window" })) _0x1ca226.postMessage({ $controller$swrevive: { workerId: _0x14873e, revivalId: _0x25b551 } });
        await new Promise((_0x431f2f) => {
          setTimeout(() => _0x431f2f(void 0), 1e3);
        });
      })();
      return _0x130e38 = { expiresAt: _0x5d5dfa, promise: _0x5b29ca }, _0x5b29ca.then(() => {
        _0x130e38?.promise === _0x5b29ca && (_0x130e38 = void 0);
      }, () => {
        _0x130e38?.promise === _0x5b29ca && (_0x130e38 = void 0);
      }), _0x5b29ca;
    }
    a(_0x262ce8, "u");
    async function _0x171179(_0x4e3b25) {
      let _0x3cd0c8, _0x363cdf = _0x5b4a36(_0x4e3b25);
      if (_0x363cdf) return _0x363cdf;
      let _0x556d79 = new Promise((_0x3208b0) => {
        _0x3cd0c8 = a((_0x2d8648) => {
          _0x3208b0(_0x2d8648);
        }, "t3");
        let _0x2f073f = _0x5f45a3.get(_0x4e3b25) ?? /* @__PURE__ */ new Set();
        _0x2f073f.add(_0x3cd0c8), _0x5f45a3.set(_0x4e3b25, _0x2f073f);
      });
      try {
        return await Promise.race([_0x556d79, _0x262ce8()]), _0x5b4a36(_0x4e3b25);
      } finally {
        if (_0x3cd0c8) {
          let _0x512b90 = _0x5f45a3.get(_0x4e3b25);
          _0x512b90?.delete(_0x3cd0c8), _0x512b90?.size === 0 && _0x5f45a3.delete(_0x4e3b25);
        }
      }
    }
    a(_0x171179, "f"), _0x262ce8().catch((_0x2d5b90) => {
    }), addEventListener("message", (_0x21d419) => {
      if (_0x21d419.data && typeof _0x21d419.data == "object") {
        if (_0x21d419.data.$sw$setCookieDone && typeof _0x21d419.data.$sw$setCookieDone == "object") {
          let _0x327a4c = _0x21d419.data.$sw$setCookieDone, _0x4e7ed4 = _0x4a754c[_0x327a4c.id];
          _0x4e7ed4 && (_0x4e7ed4(), delete _0x4a754c[_0x327a4c.id]);
        }
        if (_0x21d419.data.$sw$initRemoteTransport && typeof _0x21d419.data.$sw$initRemoteTransport == "object") {
          let { port: _0x1ee7a4, prefix: _0x33a120 } = _0x21d419.data.$sw$initRemoteTransport, _0x49eaa5 = _0x3b55d1.find((_0x416bd3) => new URL(_0x33a120).pathname.startsWith(_0x416bd3.prefix));
          if (!_0x49eaa5) return;
          _0x49eaa5.rpc.call("initRemoteTransport", { port: _0x1ee7a4, prefix: _0x33a120 }, [_0x1ee7a4]).catch((_0x2a7603) => {
            _0x49eaa5.isClosed();
          });
        }
      }
    });
    class _0xc968bb {
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
      constructor(_0x48a412, _0x1f7e05, _0xefff92, _0x31bf63, _0x35004d) {
        this.prefix = _0x48a412, this.id = _0x1f7e05, this.ownerClientId = _0xefff92, this.connectionId = _0x31bf63, this.port = _0x35004d, this.rpc = new _0x37db20.C({ sendSetCookie: a(async ({ cookies: _0x23ad8f, options: _0xffd7c0 }) => {
          let _0x313543, _0x23cdee = (await self.clients.matchAll()).filter((_0x463940) => new URL(_0x463940.url).pathname.startsWith(this.prefix)), _0x3b90e6 = [], _0x3ab52a = [];
          try {
            for (let _0x4bf6fa of _0x23cdee) {
              let _0x2e31f1 = _0x2c71c1();
              _0x3b90e6.push(_0x2e31f1), _0x3ab52a.push(new Promise((_0xef3e78) => {
                _0x4a754c[_0x2e31f1] = () => {
                  _0xef3e78(_0x2e31f1);
                };
              })), _0x4bf6fa.postMessage({ $controller$setCookie: { cookies: _0x23ad8f, options: _0xffd7c0, id: _0x2e31f1 } });
            }
            if (_0x3ab52a.length > 0) {
              let _0x3f0481 = new Promise((_0xa810e9) => {
                _0x313543 = setTimeout(() => {
                  "" + _0x3b90e6.filter((_0x37e28d) => _0x4a754c[_0x37e28d] !== void 0).length, _0xa810e9(void 0);
                }, 1e3);
              });
              await Promise.race([Promise.all(_0x3ab52a), _0x3f0481]);
            }
          } finally {
            for (let _0x5821e4 of (_0x313543 !== void 0 && clearTimeout(_0x313543), _0x3b90e6)) delete _0x4a754c[_0x5821e4];
          }
        }, "sendSetCookie") }, "tabchannel-" + _0x1f7e05, (_0x36b216, _0x2b9901) => {
          _0x35004d.postMessage(_0x36b216, _0x2b9901);
        }), _0x35004d.onmessage = (_0x593785) => {
          this.rpc.recieve(_0x593785.data);
        }, _0x35004d.onmessageerror = new Proxy({}, { get: a(() => () => {
        }, "get") }).error, this.rpc.call("ready", { workerId: _0x14873e, connectionId: this.connectionId }).catch((_0x105922) => {
          this.closed;
        });
      }
      isClosed() {
        return this.closed;
      }
      close() {
        if (this.closed) return;
        this.closed = !0;
        let _0x2a5ada = Error("Scramjet Controller reference closed");
        for (let _0x4a001c of this.rpc.promiseCallbacks.values()) _0x4a001c.reject(_0x2a5ada);
        this.rpc.promiseCallbacks.clear(), this.port.onmessage = null, this.port.onmessageerror = null;
        try {
          this.port.close();
        } catch {
        }
      }
    }
    let _0x3b55d1 = [], _0x2df0b1 = /* @__PURE__ */ new Set();
    function _0x2fd6fd(_0x12bae9) {
      let _0x191774 = new URL(_0x12bae9.request.url);
      return _0x191774.origin === location.origin && (!!_0x3b55d1.some((_0x57a711) => _0x191774.pathname.startsWith(_0x57a711.prefix)) || !!((_0x12bae9.clientId || _0x12bae9.resultingClientId) && _0xd99067(_0x191774.pathname)));
    }
    a(_0x2fd6fd, "w");
    async function _0x175d42(_0x55888e) {
      try {
        let _0x493584 = new URL(_0x55888e.request.url), _0x5d1e12 = _0x3b55d1.find((_0x49f8ef) => _0x493584.pathname.startsWith(_0x49f8ef.prefix));
        if (!_0x5d1e12) {
          let _0x40e542 = _0xd99067(_0x493584.pathname);
          if (!_0x40e542 || !_0x55888e.clientId && !_0x55888e.resultingClientId) return new Response("Scramjet Controller ownership was not established", { status: 503 });
          if (!(_0x5d1e12 = await _0x171179(_0x40e542))) return new Response("Scramjet Controller revival expired", { status: 503 });
        }
        let _0x1da757 = await clients.get(_0x55888e.clientId), _0x5e465f = [..._0x55888e.request.headers], _0x5aa6a0 = await _0x5d1e12.rpc.call("request", { rawUrl: _0x55888e.request.url, rawReferrer: _0x55888e.request.referrer, destination: _0x55888e.request.destination, mode: _0x55888e.request.mode, credentials: _0x55888e.request.credentials, referrer: _0x55888e.request.referrer, method: _0x55888e.request.method, body: _0x55888e.request.body, cache: _0x55888e.request.cache, forceCrossOriginIsolated: !1, initialHeaders: _0x5e465f, rawClientUrl: _0x1da757 ? _0x1da757.url : void 0, clientId: _0x55888e.resultingClientId || _0x55888e.clientId, sourceClientId: _0x55888e.clientId, resultingClientId: _0x55888e.resultingClientId }, _0x55888e.request.body instanceof ReadableStream || _0x55888e.request.body instanceof ArrayBuffer ? [_0x55888e.request.body] : void 0);
        return new Response(_0x5aa6a0.body, { status: _0x5aa6a0.status, statusText: _0x5aa6a0.statusText, headers: _0x5aa6a0.headers });
      } catch (_0x5f5762) {
        return _0x55888e.request.mode === "navigate" ? new Response("Internal Service Worker Error: " + _0x5f5762.message, { status: 500 }) : Response.error();
      }
    }
    a(_0x175d42, "y"), addEventListener("message", (_0x40ee57) => {
      let _0x4a5299;
      if (!_0x40ee57.data || typeof _0x40ee57.data != "object") return;
      if (_0x40ee57.data.$controller$detach && typeof _0x40ee57.data.$controller$detach == "object") {
        let _0x37e886 = _0x40ee57.data.$controller$detach, _0x4e2551 = _0x40ee57.ports[0], _0x4f769d = _0x4a62f2(_0x40ee57);
        if (typeof _0x37e886.id != "string" || !_0x4e2551 || !_0x4f769d) return;
        let _0x37a356 = _0x3b55d1.findIndex((_0x5a3fc4) => _0x5a3fc4.id === _0x37e886.id), _0x209971 = _0x2df0b1.has(_0x37e886.id);
        if (_0x37a356 !== -1 && _0x3b55d1[_0x37a356]?.ownerClientId === _0x4f769d) {
          let [_0x15f584] = _0x3b55d1.splice(_0x37a356, 1);
          _0x15f584.close(), _0x2df0b1.add(_0x37e886.id), _0x209971 = !0;
        }
        let _0x249162 = { id: _0x37e886.id, detached: _0x209971 };
        _0x4e2551.postMessage({ $controller$detached: _0x249162 }), _0x4e2551.close();
        return;
      }
      if (!_0x40ee57.data.$controller$init || typeof _0x40ee57.data.$controller$init != "object") return;
      let _0x3945d4 = _0x40ee57.data.$controller$init, _0x318c8d = _0x4a62f2(_0x40ee57);
      if (typeof _0x3945d4.id != "string" || !/^[0-9a-f]{32}$/.test(_0x3945d4.id) || typeof _0x3945d4.prefix != "string" || _0x3945d4.workerId !== void 0 && _0x3945d4.workerId !== _0x14873e || !_0x318c8d || !_0x40ee57.ports[0]) return;
      try {
        let _0x2dc86a = new URL(_0x3945d4.prefix, location.origin);
        if (_0x2dc86a.origin !== location.origin || !_0x2dc86a.pathname.endsWith("/" + _0x3945d4.id + "/")) return;
        _0x4a5299 = _0x2dc86a.pathname;
      } catch {
        return;
      }
      let _0x51d0f6 = _0x3b55d1.findIndex((_0x12d9b3) => _0x12d9b3.id === _0x3945d4.id);
      if (_0x51d0f6 !== -1) {
        if (_0x3b55d1[_0x51d0f6]?.ownerClientId !== _0x318c8d) return void _0x40ee57.ports[0].close();
        let [_0x41bd8f] = _0x3b55d1.splice(_0x51d0f6, 1);
        _0x41bd8f.close();
      }
      _0x2df0b1.delete(_0x3945d4.id);
      let _0x37144a = new _0xc968bb(_0x4a5299, _0x3945d4.id, _0x318c8d, typeof _0x3945d4.connectionId == "string" ? _0x3945d4.connectionId : void 0, _0x40ee57.ports[0]);
      for (let _0x1cde92 of (_0x3b55d1.push(_0x37144a), _0x5f45a3.get(_0x4a5299) ?? [])) _0x1cde92(_0x37144a);
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", (_0x4cf9b4) => {
      _0x4cf9b4.waitUntil((async () => {
        await clients.claim(), await _0x262ce8();
      })());
    });
  })(), $scramjetController = _0x569cee;
})();
