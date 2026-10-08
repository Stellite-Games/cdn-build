var E = Object.defineProperty, a = (_0x199a45, _0x167125) => E(_0x199a45, "name", { value: _0x167125, configurable: !0 }), $scramjetController;
(() => {
  var _0x589e4c = { 805(_0x452a19, _0x63328a, _0x2aa388) {
    _0x2aa388.d(_0x63328a, { C: a(() => _0x2067a7, "C") });
    class _0x2067a7 {
      static {
        a(this, "o2");
      }
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x2e2edd, _0x4e64e1, _0x3b96f4) {
        this.methods = _0x2e2edd, this.id = _0x4e64e1, this.sendRaw = _0x3b96f4;
      }
      recieve(_0x5f2988) {
        if (_0x5f2988 == null || typeof _0x5f2988 != "object") return;
        let _0x12b543 = _0x5f2988[this.id];
        if (_0x12b543 == null || typeof _0x12b543 != "object") return;
        let _0x5de910 = _0x12b543.$type;
        if (_0x5de910 === "response") {
          let _0x263640 = _0x12b543.$token, _0x43042e = _0x12b543.$data, _0x19403a = _0x12b543.$error, _0x2a8206 = this.promiseCallbacks.get(_0x263640);
          if (!_0x2a8206) return;
          this.promiseCallbacks.delete(_0x263640), _0x19403a !== void 0 ? _0x2a8206.reject(Error(_0x19403a)) : _0x2a8206.resolve(_0x43042e);
        } else if (_0x5de910 === "request") {
          let _0x2143f6 = _0x12b543.$method, _0xd36ac7 = _0x12b543.$args;
          this.methods[_0x2143f6](_0xd36ac7).then((_0x2a6192) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x12b543.$token, $data: _0x2a6192?.[0] } }, _0x2a6192?.[1]);
          }).catch((_0x9084fc) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x12b543.$token, $error: _0x9084fc?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x558c06, _0x398f1c, _0x3fdfa9 = []) {
        let _0x434cdd = this.counter++;
        return new Promise((_0x5ba4f3, _0x4e0c04) => {
          this.promiseCallbacks.set(_0x434cdd, { resolve: _0x5ba4f3, reject: _0x4e0c04 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x558c06, $args: _0x398f1c, $token: _0x434cdd } }, _0x3fdfa9);
        });
      }
    }
  } }, _0x3427b1 = {};
  function _0x5a3871(_0x43f1ba) {
    var _0x239746 = _0x3427b1[_0x43f1ba];
    if (_0x239746 !== void 0) return _0x239746.exports;
    var _0x3dd8c8 = _0x3427b1[_0x43f1ba] = { exports: {} };
    return _0x589e4c[_0x43f1ba](_0x3dd8c8, _0x3dd8c8.exports, _0x5a3871), _0x3dd8c8.exports;
  }
  a(_0x5a3871, "r"), _0x5a3871.d = (_0x2f2924, _0x29ca0b) => {
    for (var _0x6905cb in _0x29ca0b) _0x5a3871.o(_0x29ca0b, _0x6905cb) && !_0x5a3871.o(_0x2f2924, _0x6905cb) && Object.defineProperty(_0x2f2924, _0x6905cb, { enumerable: !0, get: _0x29ca0b[_0x6905cb] });
  }, _0x5a3871.o = (_0x2945a3, _0x71c119) => Object.prototype.hasOwnProperty.call(_0x2945a3, _0x71c119), _0x5a3871.r = (_0x52c8b0) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x52c8b0, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x52c8b0, "__esModule", { value: !0 });
  };
  var _0x3f1b1b = {};
  (() => {
    let _0x5468fd;
    _0x5a3871.r(_0x3f1b1b), _0x5a3871.d(_0x3f1b1b, { route: a(() => _0xe601b5, "route"), shouldRoute: a(() => _0x32edb2, "shouldRoute") });
    var _0xc4be12 = _0x5a3871(805);
    function _0x162490() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x17e90f) => _0x17e90f.toString(16).padStart(2, "0")).join("");
    }
    a(_0x162490, "i");
    function _0x29916f(_0x26632a) {
      let _0x16fe36 = _0x26632a.source;
      return _0x16fe36 && typeof _0x16fe36 == "object" && "id" in _0x16fe36 && typeof _0x16fe36.id == "string" ? _0x16fe36.id : null;
    }
    a(_0x29916f, "n");
    let _0x526bef = {}, _0x341c01 = _0x162490(), _0x15f308 = /* @__PURE__ */ new Map();
    function _0x59fbaf(_0x58df96) {
      let _0xf456d4 = /\/([0-9a-f]{32})\/[0-9a-f]{32}\/https?(?:%3A%2F%2F|%253A%252F%252F)/.exec(_0x58df96);
      return _0xf456d4 && _0xf456d4.index !== void 0 && _0xf456d4[1] ? _0x58df96.slice(0, _0xf456d4.index + _0xf456d4[1].length + 2) : null;
    }
    a(_0x59fbaf, "d");
    function _0x42e5dd(_0x296bdf) {
      return _0x17a918.find((_0x122cb6) => _0x296bdf === _0x122cb6.prefix && !_0x122cb6.isClosed());
    }
    a(_0x42e5dd, "c");
    function _0x28666f() {
      if (_0x5468fd && _0x5468fd.expiresAt > Date.now()) return _0x5468fd.promise;
      let _0x5b22f2 = _0x162490(), _0x4fa2ca = Date.now() + 1e3, _0x30e4f0 = (async () => {
        for (let _0x136c39 of await clients.matchAll({ includeUncontrolled: !0, type: "window" })) _0x136c39.postMessage({ $controller$swrevive: { workerId: _0x341c01, revivalId: _0x5b22f2 } });
        await new Promise((_0x140b7a) => {
          setTimeout(() => _0x140b7a(void 0), 1e3);
        });
      })();
      return _0x5468fd = { expiresAt: _0x4fa2ca, promise: _0x30e4f0 }, _0x30e4f0.then(() => {
        _0x5468fd?.promise === _0x30e4f0 && (_0x5468fd = void 0);
      }, () => {
        _0x5468fd?.promise === _0x30e4f0 && (_0x5468fd = void 0);
      }), _0x30e4f0;
    }
    a(_0x28666f, "u");
    async function _0x16d3f1(_0x2a1c5e) {
      let _0x287038, _0x4eb31b = _0x42e5dd(_0x2a1c5e);
      if (_0x4eb31b) return _0x4eb31b;
      let _0x584fe1 = new Promise((_0xa8888b) => {
        _0x287038 = a((_0x4dce3b) => {
          _0xa8888b(_0x4dce3b);
        }, "t3");
        let _0x2c8897 = _0x15f308.get(_0x2a1c5e) ?? /* @__PURE__ */ new Set();
        _0x2c8897.add(_0x287038), _0x15f308.set(_0x2a1c5e, _0x2c8897);
      });
      try {
        return await Promise.race([_0x584fe1, _0x28666f()]), _0x42e5dd(_0x2a1c5e);
      } finally {
        if (_0x287038) {
          let _0x4c1f04 = _0x15f308.get(_0x2a1c5e);
          _0x4c1f04?.delete(_0x287038), _0x4c1f04?.size === 0 && _0x15f308.delete(_0x2a1c5e);
        }
      }
    }
    a(_0x16d3f1, "f"), _0x28666f().catch((_0xa21c85) => {
    }), addEventListener("message", (_0x489615) => {
      if (_0x489615.data && typeof _0x489615.data == "object") {
        if (_0x489615.data.$sw$setCookieDone && typeof _0x489615.data.$sw$setCookieDone == "object") {
          let _0x2145d4 = _0x489615.data.$sw$setCookieDone, _0x58858e = _0x526bef[_0x2145d4.id];
          _0x58858e && (_0x58858e(), delete _0x526bef[_0x2145d4.id]);
        }
        if (_0x489615.data.$sw$initRemoteTransport && typeof _0x489615.data.$sw$initRemoteTransport == "object") {
          let { port: _0x5cb220, prefix: _0x556d0d } = _0x489615.data.$sw$initRemoteTransport, _0x1e16d3 = _0x17a918.find((_0x2e7972) => new URL(_0x556d0d).pathname.startsWith(_0x2e7972.prefix));
          if (!_0x1e16d3) return;
          _0x1e16d3.rpc.call("initRemoteTransport", { port: _0x5cb220, prefix: _0x556d0d }, [_0x5cb220]).catch((_0x4a2350) => {
            _0x1e16d3.isClosed();
          });
        }
      }
    });
    class _0x271813 {
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
      constructor(_0x41dd31, _0x1e6376, _0x290db3, _0x417c7c, _0x1bf7b5) {
        this.prefix = _0x41dd31, this.id = _0x1e6376, this.ownerClientId = _0x290db3, this.connectionId = _0x417c7c, this.port = _0x1bf7b5, this.rpc = new _0xc4be12.C({ sendSetCookie: a(async ({ cookies: _0x17b7d2, options: _0x56fc1c }) => {
          let _0x548db2, _0x5614f9 = (await self.clients.matchAll()).filter((_0x463254) => new URL(_0x463254.url).pathname.startsWith(this.prefix)), _0x2eccef = [], _0x305f32 = [];
          try {
            for (let _0x4473a1 of _0x5614f9) {
              let _0x5d42c2 = _0x162490();
              _0x2eccef.push(_0x5d42c2), _0x305f32.push(new Promise((_0x298734) => {
                _0x526bef[_0x5d42c2] = () => {
                  _0x298734(_0x5d42c2);
                };
              })), _0x4473a1.postMessage({ $controller$setCookie: { cookies: _0x17b7d2, options: _0x56fc1c, id: _0x5d42c2 } });
            }
            if (_0x305f32.length > 0) {
              let _0x12cdcb = new Promise((_0x59a6b2) => {
                _0x548db2 = setTimeout(() => {
                  "" + _0x2eccef.filter((_0x21876e) => _0x526bef[_0x21876e] !== void 0).length, _0x59a6b2(void 0);
                }, 1e3);
              });
              await Promise.race([Promise.all(_0x305f32), _0x12cdcb]);
            }
          } finally {
            for (let _0x1e9ed2 of (_0x548db2 !== void 0 && clearTimeout(_0x548db2), _0x2eccef)) delete _0x526bef[_0x1e9ed2];
          }
        }, "sendSetCookie") }, "tabchannel-" + _0x1e6376, (_0x72a40, _0x28b198) => {
          _0x1bf7b5.postMessage(_0x72a40, _0x28b198);
        }), _0x1bf7b5.onmessage = (_0x4d86b5) => {
          this.rpc.recieve(_0x4d86b5.data);
        }, _0x1bf7b5.onmessageerror = new Proxy({}, { get: a(() => () => {
        }, "get") }).error, this.rpc.call("ready", { workerId: _0x341c01, connectionId: this.connectionId }).catch((_0x4c1b9c) => {
          this.closed;
        });
      }
      isClosed() {
        return this.closed;
      }
      close() {
        if (this.closed) return;
        this.closed = !0;
        let _0x4ed172 = Error("Scramjet Controller reference closed");
        for (let _0x4cfa59 of this.rpc.promiseCallbacks.values()) _0x4cfa59.reject(_0x4ed172);
        this.rpc.promiseCallbacks.clear(), this.port.onmessage = null, this.port.onmessageerror = null;
        try {
          this.port.close();
        } catch {
        }
      }
    }
    let _0x17a918 = [], _0x592201 = /* @__PURE__ */ new Set();
    function _0x32edb2(_0x35f39f) {
      let _0x4ed1c6 = new URL(_0x35f39f.request.url);
      return _0x4ed1c6.origin === location.origin && (!!_0x17a918.some((_0x4b8b9d) => _0x4ed1c6.pathname.startsWith(_0x4b8b9d.prefix)) || !!((_0x35f39f.clientId || _0x35f39f.resultingClientId) && _0x59fbaf(_0x4ed1c6.pathname)));
    }
    a(_0x32edb2, "w");
    async function _0xe601b5(_0x4cf58b) {
      try {
        let _0x34aa3f = new URL(_0x4cf58b.request.url), _0x482ef6 = _0x17a918.find((_0xb7647f) => _0x34aa3f.pathname.startsWith(_0xb7647f.prefix));
        if (!_0x482ef6) {
          let _0x397d26 = _0x59fbaf(_0x34aa3f.pathname);
          if (!_0x397d26 || !_0x4cf58b.clientId && !_0x4cf58b.resultingClientId) return new Response("Scramjet Controller ownership was not established", { status: 503 });
          if (!(_0x482ef6 = await _0x16d3f1(_0x397d26))) return new Response("Scramjet Controller revival expired", { status: 503 });
        }
        let _0x18f203 = await clients.get(_0x4cf58b.clientId), _0x7805b = [..._0x4cf58b.request.headers], _0x281283 = await _0x482ef6.rpc.call("request", { rawUrl: _0x4cf58b.request.url, rawReferrer: _0x4cf58b.request.referrer, destination: _0x4cf58b.request.destination, mode: _0x4cf58b.request.mode, credentials: _0x4cf58b.request.credentials, referrer: _0x4cf58b.request.referrer, method: _0x4cf58b.request.method, body: _0x4cf58b.request.body, cache: _0x4cf58b.request.cache, forceCrossOriginIsolated: !1, initialHeaders: _0x7805b, rawClientUrl: _0x18f203 ? _0x18f203.url : void 0, clientId: _0x4cf58b.resultingClientId || _0x4cf58b.clientId, sourceClientId: _0x4cf58b.clientId, resultingClientId: _0x4cf58b.resultingClientId }, _0x4cf58b.request.body instanceof ReadableStream || _0x4cf58b.request.body instanceof ArrayBuffer ? [_0x4cf58b.request.body] : void 0);
        return new Response(_0x281283.body, { status: _0x281283.status, statusText: _0x281283.statusText, headers: _0x281283.headers });
      } catch (_0x284772) {
        return _0x4cf58b.request.mode === "navigate" ? new Response("Internal Service Worker Error: " + _0x284772.message, { status: 500 }) : Response.error();
      }
    }
    a(_0xe601b5, "y"), addEventListener("message", (_0x3534fc) => {
      let _0x1f12e2;
      if (!_0x3534fc.data || typeof _0x3534fc.data != "object") return;
      if (_0x3534fc.data.$controller$detach && typeof _0x3534fc.data.$controller$detach == "object") {
        let _0x48e548 = _0x3534fc.data.$controller$detach, _0x42f6ea = _0x3534fc.ports[0], _0x5619fd = _0x29916f(_0x3534fc);
        if (typeof _0x48e548.id != "string" || !_0x42f6ea || !_0x5619fd) return;
        let _0x52e8c6 = _0x17a918.findIndex((_0x574ca4) => _0x574ca4.id === _0x48e548.id), _0x1b1090 = _0x592201.has(_0x48e548.id);
        if (_0x52e8c6 !== -1 && _0x17a918[_0x52e8c6]?.ownerClientId === _0x5619fd) {
          let [_0x560bf0] = _0x17a918.splice(_0x52e8c6, 1);
          _0x560bf0.close(), _0x592201.add(_0x48e548.id), _0x1b1090 = !0;
        }
        let _0x110172 = { id: _0x48e548.id, detached: _0x1b1090 };
        _0x42f6ea.postMessage({ $controller$detached: _0x110172 }), _0x42f6ea.close();
        return;
      }
      if (!_0x3534fc.data.$controller$init || typeof _0x3534fc.data.$controller$init != "object") return;
      let _0x35dae5 = _0x3534fc.data.$controller$init, _0x54aa4f = _0x29916f(_0x3534fc);
      if (typeof _0x35dae5.id != "string" || !/^[0-9a-f]{32}$/.test(_0x35dae5.id) || typeof _0x35dae5.prefix != "string" || _0x35dae5.workerId !== void 0 && _0x35dae5.workerId !== _0x341c01 || !_0x54aa4f || !_0x3534fc.ports[0]) return;
      try {
        let _0x31f432 = new URL(_0x35dae5.prefix, location.origin);
        if (_0x31f432.origin !== location.origin || !_0x31f432.pathname.endsWith("/" + _0x35dae5.id + "/")) return;
        _0x1f12e2 = _0x31f432.pathname;
      } catch {
        return;
      }
      let _0x40bde0 = _0x17a918.findIndex((_0x2985fe) => _0x2985fe.id === _0x35dae5.id);
      if (_0x40bde0 !== -1) {
        if (_0x17a918[_0x40bde0]?.ownerClientId !== _0x54aa4f) return void _0x3534fc.ports[0].close();
        let [_0x3085af] = _0x17a918.splice(_0x40bde0, 1);
        _0x3085af.close();
      }
      _0x592201.delete(_0x35dae5.id);
      let _0x4323db = new _0x271813(_0x1f12e2, _0x35dae5.id, _0x54aa4f, typeof _0x35dae5.connectionId == "string" ? _0x35dae5.connectionId : void 0, _0x3534fc.ports[0]);
      for (let _0x56befc of (_0x17a918.push(_0x4323db), _0x15f308.get(_0x1f12e2) ?? [])) _0x56befc(_0x4323db);
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", (_0x27386c) => {
      _0x27386c.waitUntil((async () => {
        await clients.claim(), await _0x28666f();
      })());
    });
  })(), $scramjetController = _0x3f1b1b;
})();
