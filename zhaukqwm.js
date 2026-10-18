var E = Object.defineProperty, a = (_0x4d1296, _0x49f51a) => E(_0x4d1296, "name", { value: _0x49f51a, configurable: !0 }), $scramjetController;
(() => {
  var _0x4d0d24 = { 805(_0x59919b, _0x2dccf1, _0x5cfb2e) {
    _0x5cfb2e.d(_0x2dccf1, { C: a(() => _0x848319, "C") });
    class _0x848319 {
      static {
        a(this, "o2");
      }
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0xa060b8, _0x29cb5c, _0xe066ef) {
        this.methods = _0xa060b8, this.id = _0x29cb5c, this.sendRaw = _0xe066ef;
      }
      recieve(_0x3b618b) {
        if (_0x3b618b == null || typeof _0x3b618b != "object") return;
        let _0x3bfb9d = _0x3b618b[this.id];
        if (_0x3bfb9d == null || typeof _0x3bfb9d != "object") return;
        let _0x1ed3a7 = _0x3bfb9d.$type;
        if (_0x1ed3a7 === "response") {
          let _0xd15873 = _0x3bfb9d.$token, _0xed063 = _0x3bfb9d.$data, _0xc406a0 = _0x3bfb9d.$error, _0x47f0f0 = this.promiseCallbacks.get(_0xd15873);
          if (!_0x47f0f0) return;
          this.promiseCallbacks.delete(_0xd15873), _0xc406a0 !== void 0 ? _0x47f0f0.reject(Error(_0xc406a0)) : _0x47f0f0.resolve(_0xed063);
        } else if (_0x1ed3a7 === "request") {
          let _0x182b97 = _0x3bfb9d.$method, _0x1721f5 = _0x3bfb9d.$args;
          this.methods[_0x182b97](_0x1721f5).then((_0x13fc84) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x3bfb9d.$token, $data: _0x13fc84?.[0] } }, _0x13fc84?.[1]);
          }).catch((_0x5d3829) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x3bfb9d.$token, $error: _0x5d3829?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x108a5d, _0x194540, _0x438903 = []) {
        let _0x30fcd4 = this.counter++;
        return new Promise((_0x4b5397, _0xa3e89) => {
          this.promiseCallbacks.set(_0x30fcd4, { resolve: _0x4b5397, reject: _0xa3e89 }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x108a5d, $args: _0x194540, $token: _0x30fcd4 } }, _0x438903);
        });
      }
    }
  } }, _0x256569 = {};
  function _0x597f80(_0x58d393) {
    var _0xe0611d = _0x256569[_0x58d393];
    if (_0xe0611d !== void 0) return _0xe0611d.exports;
    var _0x40155b = _0x256569[_0x58d393] = { exports: {} };
    return _0x4d0d24[_0x58d393](_0x40155b, _0x40155b.exports, _0x597f80), _0x40155b.exports;
  }
  a(_0x597f80, "r"), _0x597f80.d = (_0x45f9c4, _0x7b2323) => {
    for (var _0x332c04 in _0x7b2323) _0x597f80.o(_0x7b2323, _0x332c04) && !_0x597f80.o(_0x45f9c4, _0x332c04) && Object.defineProperty(_0x45f9c4, _0x332c04, { enumerable: !0, get: _0x7b2323[_0x332c04] });
  }, _0x597f80.o = (_0x3b0ab4, _0x39f1e6) => Object.prototype.hasOwnProperty.call(_0x3b0ab4, _0x39f1e6), _0x597f80.r = (_0x3d07ed) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x3d07ed, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x3d07ed, "__esModule", { value: !0 });
  };
  var _0x4fa7d9 = {};
  (() => {
    let _0x33eeb3;
    _0x597f80.r(_0x4fa7d9), _0x597f80.d(_0x4fa7d9, { route: a(() => _0x3a0c7c, "route"), shouldRoute: a(() => _0x94754e, "shouldRoute") });
    var _0x446dac = _0x597f80(805);
    function _0xaa6b14() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x5eb973) => _0x5eb973.toString(16).padStart(2, "0")).join("");
    }
    a(_0xaa6b14, "i");
    function _0x5a36a1(_0xae435) {
      let _0x92d0b = _0xae435.source;
      return _0x92d0b && typeof _0x92d0b == "object" && "id" in _0x92d0b && typeof _0x92d0b.id == "string" ? _0x92d0b.id : null;
    }
    a(_0x5a36a1, "n");
    let _0xd2cc05 = {}, _0x5ee973 = _0xaa6b14(), _0x2a4a78 = /* @__PURE__ */ new Map();
    function _0x12122f(_0x5c9bd7) {
      let _0x521f75 = /\/([0-9a-f]{32})\/[0-9a-f]{32}\/https?(?:%3A%2F%2F|%253A%252F%252F)/.exec(_0x5c9bd7);
      return _0x521f75 && _0x521f75.index !== void 0 && _0x521f75[1] ? _0x5c9bd7.slice(0, _0x521f75.index + _0x521f75[1].length + 2) : null;
    }
    a(_0x12122f, "d");
    function _0x2da3f2(_0x1f6439) {
      return _0x3f0f95.find((_0x1e69bc) => _0x1f6439 === _0x1e69bc.prefix && !_0x1e69bc.isClosed());
    }
    a(_0x2da3f2, "c");
    function _0x15309d() {
      if (_0x33eeb3 && _0x33eeb3.expiresAt > Date.now()) return _0x33eeb3.promise;
      let _0x2c4a8b = _0xaa6b14(), _0x19b4ee = Date.now() + 1e3, _0x569252 = (async () => {
        for (let _0x3c9d93 of await clients.matchAll({ includeUncontrolled: !0, type: "window" })) _0x3c9d93.postMessage({ $controller$swrevive: { workerId: _0x5ee973, revivalId: _0x2c4a8b } });
        await new Promise((_0x345088) => {
          setTimeout(() => _0x345088(void 0), 1e3);
        });
      })();
      return _0x33eeb3 = { expiresAt: _0x19b4ee, promise: _0x569252 }, _0x569252.then(() => {
        _0x33eeb3?.promise === _0x569252 && (_0x33eeb3 = void 0);
      }, () => {
        _0x33eeb3?.promise === _0x569252 && (_0x33eeb3 = void 0);
      }), _0x569252;
    }
    a(_0x15309d, "u");
    async function _0x5c3e39(_0x56aabc) {
      let _0x1514f4, _0x17467d = _0x2da3f2(_0x56aabc);
      if (_0x17467d) return _0x17467d;
      let _0x478e5c = new Promise((_0x440c16) => {
        _0x1514f4 = a((_0x9ce6d9) => {
          _0x440c16(_0x9ce6d9);
        }, "t3");
        let _0x17e054 = _0x2a4a78.get(_0x56aabc) ?? /* @__PURE__ */ new Set();
        _0x17e054.add(_0x1514f4), _0x2a4a78.set(_0x56aabc, _0x17e054);
      });
      try {
        return await Promise.race([_0x478e5c, _0x15309d()]), _0x2da3f2(_0x56aabc);
      } finally {
        if (_0x1514f4) {
          let _0x46d5c5 = _0x2a4a78.get(_0x56aabc);
          _0x46d5c5?.delete(_0x1514f4), _0x46d5c5?.size === 0 && _0x2a4a78.delete(_0x56aabc);
        }
      }
    }
    a(_0x5c3e39, "f"), _0x15309d().catch((_0xdfd9fa) => {
    }), addEventListener("message", (_0x37e733) => {
      if (_0x37e733.data && typeof _0x37e733.data == "object") {
        if (_0x37e733.data.$sw$setCookieDone && typeof _0x37e733.data.$sw$setCookieDone == "object") {
          let _0x5ddd2a = _0x37e733.data.$sw$setCookieDone, _0x1d1582 = _0xd2cc05[_0x5ddd2a.id];
          _0x1d1582 && (_0x1d1582(), delete _0xd2cc05[_0x5ddd2a.id]);
        }
        if (_0x37e733.data.$sw$initRemoteTransport && typeof _0x37e733.data.$sw$initRemoteTransport == "object") {
          let { port: _0x4896b1, prefix: _0x56502a } = _0x37e733.data.$sw$initRemoteTransport, _0x3e71a0 = _0x3f0f95.find((_0x2082bf) => new URL(_0x56502a).pathname.startsWith(_0x2082bf.prefix));
          if (!_0x3e71a0) return;
          _0x3e71a0.rpc.call("initRemoteTransport", { port: _0x4896b1, prefix: _0x56502a }, [_0x4896b1]).catch((_0x362e95) => {
            _0x3e71a0.isClosed();
          });
        }
      }
    });
    class _0x386783 {
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
      constructor(_0x308809, _0x2cfbda, _0x30ed27, _0x40ad12, _0x23aad0) {
        this.prefix = _0x308809, this.id = _0x2cfbda, this.ownerClientId = _0x30ed27, this.connectionId = _0x40ad12, this.port = _0x23aad0, this.rpc = new _0x446dac.C({ sendSetCookie: a(async ({ cookies: _0x45e810, options: _0x45e789 }) => {
          let _0xd52755, _0x563d6b = (await self.clients.matchAll()).filter((_0x375ada) => new URL(_0x375ada.url).pathname.startsWith(this.prefix)), _0x4eb11f = [], _0x3d2765 = [];
          try {
            for (let _0x56ea13 of _0x563d6b) {
              let _0x46073b = _0xaa6b14();
              _0x4eb11f.push(_0x46073b), _0x3d2765.push(new Promise((_0x341484) => {
                _0xd2cc05[_0x46073b] = () => {
                  _0x341484(_0x46073b);
                };
              })), _0x56ea13.postMessage({ $controller$setCookie: { cookies: _0x45e810, options: _0x45e789, id: _0x46073b } });
            }
            if (_0x3d2765.length > 0) {
              let _0x514c81 = new Promise((_0x3a5db4) => {
                _0xd52755 = setTimeout(() => {
                  "" + _0x4eb11f.filter((_0x5222f9) => _0xd2cc05[_0x5222f9] !== void 0).length, _0x3a5db4(void 0);
                }, 1e3);
              });
              await Promise.race([Promise.all(_0x3d2765), _0x514c81]);
            }
          } finally {
            for (let _0x294bdb of (_0xd52755 !== void 0 && clearTimeout(_0xd52755), _0x4eb11f)) delete _0xd2cc05[_0x294bdb];
          }
        }, "sendSetCookie") }, "tabchannel-" + _0x2cfbda, (_0x17a2f5, _0x4cbbad) => {
          _0x23aad0.postMessage(_0x17a2f5, _0x4cbbad);
        }), _0x23aad0.onmessage = (_0x38a745) => {
          this.rpc.recieve(_0x38a745.data);
        }, _0x23aad0.onmessageerror = new Proxy({}, { get: a(() => () => {
        }, "get") }).error, this.rpc.call("ready", { workerId: _0x5ee973, connectionId: this.connectionId }).catch((_0x3585c7) => {
          this.closed;
        });
      }
      isClosed() {
        return this.closed;
      }
      close() {
        if (this.closed) return;
        this.closed = !0;
        let _0x12a2cd = Error("Scramjet Controller reference closed");
        for (let _0x3d82bd of this.rpc.promiseCallbacks.values()) _0x3d82bd.reject(_0x12a2cd);
        this.rpc.promiseCallbacks.clear(), this.port.onmessage = null, this.port.onmessageerror = null;
        try {
          this.port.close();
        } catch {
        }
      }
    }
    let _0x3f0f95 = [], _0x13cb51 = /* @__PURE__ */ new Set();
    function _0x94754e(_0x1b6410) {
      let _0x4ba145 = new URL(_0x1b6410.request.url);
      return _0x4ba145.origin === location.origin && (!!_0x3f0f95.some((_0x129bb3) => _0x4ba145.pathname.startsWith(_0x129bb3.prefix)) || !!((_0x1b6410.clientId || _0x1b6410.resultingClientId) && _0x12122f(_0x4ba145.pathname)));
    }
    a(_0x94754e, "w");
    async function _0x3a0c7c(_0x3bca4f) {
      try {
        let _0x16eefd = new URL(_0x3bca4f.request.url), _0x45d94b = _0x3f0f95.find((_0x152e9b) => _0x16eefd.pathname.startsWith(_0x152e9b.prefix));
        if (!_0x45d94b) {
          let _0x31ea1c = _0x12122f(_0x16eefd.pathname);
          if (!_0x31ea1c || !_0x3bca4f.clientId && !_0x3bca4f.resultingClientId) return new Response("Scramjet Controller ownership was not established", { status: 503 });
          if (!(_0x45d94b = await _0x5c3e39(_0x31ea1c))) return new Response("Scramjet Controller revival expired", { status: 503 });
        }
        let _0x2a3964 = await clients.get(_0x3bca4f.clientId), _0x4ab8a4 = [..._0x3bca4f.request.headers], _0x8f1fcb = await _0x45d94b.rpc.call("request", { rawUrl: _0x3bca4f.request.url, rawReferrer: _0x3bca4f.request.referrer, destination: _0x3bca4f.request.destination, mode: _0x3bca4f.request.mode, credentials: _0x3bca4f.request.credentials, referrer: _0x3bca4f.request.referrer, method: _0x3bca4f.request.method, body: _0x3bca4f.request.body, cache: _0x3bca4f.request.cache, forceCrossOriginIsolated: !1, initialHeaders: _0x4ab8a4, rawClientUrl: _0x2a3964 ? _0x2a3964.url : void 0, clientId: _0x3bca4f.resultingClientId || _0x3bca4f.clientId, sourceClientId: _0x3bca4f.clientId, resultingClientId: _0x3bca4f.resultingClientId }, _0x3bca4f.request.body instanceof ReadableStream || _0x3bca4f.request.body instanceof ArrayBuffer ? [_0x3bca4f.request.body] : void 0);
        return new Response(_0x8f1fcb.body, { status: _0x8f1fcb.status, statusText: _0x8f1fcb.statusText, headers: _0x8f1fcb.headers });
      } catch (_0x37df58) {
        return _0x3bca4f.request.mode === "navigate" ? new Response("Internal Service Worker Error: " + _0x37df58.message, { status: 500 }) : Response.error();
      }
    }
    a(_0x3a0c7c, "y"), addEventListener("message", (_0x5b2000) => {
      let _0xded766;
      if (!_0x5b2000.data || typeof _0x5b2000.data != "object") return;
      if (_0x5b2000.data.$controller$detach && typeof _0x5b2000.data.$controller$detach == "object") {
        let _0xa53320 = _0x5b2000.data.$controller$detach, _0x5f1928 = _0x5b2000.ports[0], _0x5b7317 = _0x5a36a1(_0x5b2000);
        if (typeof _0xa53320.id != "string" || !_0x5f1928 || !_0x5b7317) return;
        let _0x22fb20 = _0x3f0f95.findIndex((_0xcd3d25) => _0xcd3d25.id === _0xa53320.id), _0x58a101 = _0x13cb51.has(_0xa53320.id);
        if (_0x22fb20 !== -1 && _0x3f0f95[_0x22fb20]?.ownerClientId === _0x5b7317) {
          let [_0x5dfd37] = _0x3f0f95.splice(_0x22fb20, 1);
          _0x5dfd37.close(), _0x13cb51.add(_0xa53320.id), _0x58a101 = !0;
        }
        let _0xc1bd29 = { id: _0xa53320.id, detached: _0x58a101 };
        _0x5f1928.postMessage({ $controller$detached: _0xc1bd29 }), _0x5f1928.close();
        return;
      }
      if (!_0x5b2000.data.$controller$init || typeof _0x5b2000.data.$controller$init != "object") return;
      let _0x305f59 = _0x5b2000.data.$controller$init, _0x54d3f9 = _0x5a36a1(_0x5b2000);
      if (typeof _0x305f59.id != "string" || !/^[0-9a-f]{32}$/.test(_0x305f59.id) || typeof _0x305f59.prefix != "string" || _0x305f59.workerId !== void 0 && _0x305f59.workerId !== _0x5ee973 || !_0x54d3f9 || !_0x5b2000.ports[0]) return;
      try {
        let _0x39591e = new URL(_0x305f59.prefix, location.origin);
        if (_0x39591e.origin !== location.origin || !_0x39591e.pathname.endsWith("/" + _0x305f59.id + "/")) return;
        _0xded766 = _0x39591e.pathname;
      } catch {
        return;
      }
      let _0x459973 = _0x3f0f95.findIndex((_0x34939f) => _0x34939f.id === _0x305f59.id);
      if (_0x459973 !== -1) {
        if (_0x3f0f95[_0x459973]?.ownerClientId !== _0x54d3f9) return void _0x5b2000.ports[0].close();
        let [_0xad54b6] = _0x3f0f95.splice(_0x459973, 1);
        _0xad54b6.close();
      }
      _0x13cb51.delete(_0x305f59.id);
      let _0x5a6811 = new _0x386783(_0xded766, _0x305f59.id, _0x54d3f9, typeof _0x305f59.connectionId == "string" ? _0x305f59.connectionId : void 0, _0x5b2000.ports[0]);
      for (let _0xdbc2ae of (_0x3f0f95.push(_0x5a6811), _0x2a4a78.get(_0xded766) ?? [])) _0xdbc2ae(_0x5a6811);
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", (_0x2abc2a) => {
      _0x2abc2a.waitUntil((async () => {
        await clients.claim(), await _0x15309d();
      })());
    });
  })(), $scramjetController = _0x4fa7d9;
})();
