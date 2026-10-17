var E = Object.defineProperty, a = (_0xfd6adf, _0x274e4f) => E(_0xfd6adf, "name", { value: _0x274e4f, configurable: !0 }), $scramjetController;
(() => {
  var _0x334033 = { 805(_0x4115a7, _0x50f68e, _0x58c8e2) {
    _0x58c8e2.d(_0x50f68e, { C: a(() => _0x13951a, "C") });
    class _0x13951a {
      static {
        a(this, "o2");
      }
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0xbad870, _0x1396c1, _0x4981a5) {
        this.methods = _0xbad870, this.id = _0x1396c1, this.sendRaw = _0x4981a5;
      }
      recieve(_0x3829c0) {
        if (_0x3829c0 == null || typeof _0x3829c0 != "object") return;
        let _0x4d4d6a = _0x3829c0[this.id];
        if (_0x4d4d6a == null || typeof _0x4d4d6a != "object") return;
        let _0xce3414 = _0x4d4d6a.$type;
        if (_0xce3414 === "response") {
          let _0x152277 = _0x4d4d6a.$token, _0x536db5 = _0x4d4d6a.$data, _0x578504 = _0x4d4d6a.$error, _0x16264f = this.promiseCallbacks.get(_0x152277);
          if (!_0x16264f) return;
          this.promiseCallbacks.delete(_0x152277), _0x578504 !== void 0 ? _0x16264f.reject(Error(_0x578504)) : _0x16264f.resolve(_0x536db5);
        } else if (_0xce3414 === "request") {
          let _0x17ce13 = _0x4d4d6a.$method, _0x393c84 = _0x4d4d6a.$args;
          this.methods[_0x17ce13](_0x393c84).then((_0x443a0b) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x4d4d6a.$token, $data: _0x443a0b?.[0] } }, _0x443a0b?.[1]);
          }).catch((_0xbfce8c) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x4d4d6a.$token, $error: _0xbfce8c?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x3e4278, _0x21f71e, _0x3b6e6f = []) {
        let _0x1a7132 = this.counter++;
        return new Promise((_0x1748a4, _0x12633e) => {
          this.promiseCallbacks.set(_0x1a7132, { resolve: _0x1748a4, reject: _0x12633e }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x3e4278, $args: _0x21f71e, $token: _0x1a7132 } }, _0x3b6e6f);
        });
      }
    }
  } }, _0x5695c7 = {};
  function _0x2948b0(_0x4f6eb3) {
    var _0x2069b3 = _0x5695c7[_0x4f6eb3];
    if (_0x2069b3 !== void 0) return _0x2069b3.exports;
    var _0x46416a = _0x5695c7[_0x4f6eb3] = { exports: {} };
    return _0x334033[_0x4f6eb3](_0x46416a, _0x46416a.exports, _0x2948b0), _0x46416a.exports;
  }
  a(_0x2948b0, "r"), _0x2948b0.d = (_0x5b728f, _0xeee6d4) => {
    for (var _0x335e16 in _0xeee6d4) _0x2948b0.o(_0xeee6d4, _0x335e16) && !_0x2948b0.o(_0x5b728f, _0x335e16) && Object.defineProperty(_0x5b728f, _0x335e16, { enumerable: !0, get: _0xeee6d4[_0x335e16] });
  }, _0x2948b0.o = (_0x3238ef, _0x106bc8) => Object.prototype.hasOwnProperty.call(_0x3238ef, _0x106bc8), _0x2948b0.r = (_0x371a25) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x371a25, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x371a25, "__esModule", { value: !0 });
  };
  var _0x48b128 = {};
  (() => {
    let _0x69405c;
    _0x2948b0.r(_0x48b128), _0x2948b0.d(_0x48b128, { route: a(() => _0x2a6906, "route"), shouldRoute: a(() => _0x2abaca, "shouldRoute") });
    var _0x358b3e = _0x2948b0(805);
    function _0x1e1cd1() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x291018) => _0x291018.toString(16).padStart(2, "0")).join("");
    }
    a(_0x1e1cd1, "i");
    function _0x262f1a(_0x1df3db) {
      let _0x13181d = _0x1df3db.source;
      return _0x13181d && typeof _0x13181d == "object" && "id" in _0x13181d && typeof _0x13181d.id == "string" ? _0x13181d.id : null;
    }
    a(_0x262f1a, "n");
    let _0x2606ef = {}, _0x593c22 = _0x1e1cd1(), _0x3e1d7e = /* @__PURE__ */ new Map();
    function _0x2a2c9f(_0x1734b5) {
      let _0xeb15aa = /\/([0-9a-f]{32})\/[0-9a-f]{32}\/https?(?:%3A%2F%2F|%253A%252F%252F)/.exec(_0x1734b5);
      return _0xeb15aa && _0xeb15aa.index !== void 0 && _0xeb15aa[1] ? _0x1734b5.slice(0, _0xeb15aa.index + _0xeb15aa[1].length + 2) : null;
    }
    a(_0x2a2c9f, "d");
    function _0x297fee(_0xe957d5) {
      return _0x3b1da4.find((_0x998fe1) => _0xe957d5 === _0x998fe1.prefix && !_0x998fe1.isClosed());
    }
    a(_0x297fee, "c");
    function _0x556994() {
      if (_0x69405c && _0x69405c.expiresAt > Date.now()) return _0x69405c.promise;
      let _0x23d795 = _0x1e1cd1(), _0x5748ad = Date.now() + 1e3, _0x5aa7e0 = (async () => {
        for (let _0x1c106e of await clients.matchAll({ includeUncontrolled: !0, type: "window" })) _0x1c106e.postMessage({ $controller$swrevive: { workerId: _0x593c22, revivalId: _0x23d795 } });
        await new Promise((_0x3447fe) => {
          setTimeout(() => _0x3447fe(void 0), 1e3);
        });
      })();
      return _0x69405c = { expiresAt: _0x5748ad, promise: _0x5aa7e0 }, _0x5aa7e0.then(() => {
        _0x69405c?.promise === _0x5aa7e0 && (_0x69405c = void 0);
      }, () => {
        _0x69405c?.promise === _0x5aa7e0 && (_0x69405c = void 0);
      }), _0x5aa7e0;
    }
    a(_0x556994, "u");
    async function _0x3778fc(_0x42bcfb) {
      let _0x3ca079, _0x1370aa = _0x297fee(_0x42bcfb);
      if (_0x1370aa) return _0x1370aa;
      let _0x42a896 = new Promise((_0x366b2a) => {
        _0x3ca079 = a((_0x47f3ab) => {
          _0x366b2a(_0x47f3ab);
        }, "t3");
        let _0x57279 = _0x3e1d7e.get(_0x42bcfb) ?? /* @__PURE__ */ new Set();
        _0x57279.add(_0x3ca079), _0x3e1d7e.set(_0x42bcfb, _0x57279);
      });
      try {
        return await Promise.race([_0x42a896, _0x556994()]), _0x297fee(_0x42bcfb);
      } finally {
        if (_0x3ca079) {
          let _0x4ac4aa = _0x3e1d7e.get(_0x42bcfb);
          _0x4ac4aa?.delete(_0x3ca079), _0x4ac4aa?.size === 0 && _0x3e1d7e.delete(_0x42bcfb);
        }
      }
    }
    a(_0x3778fc, "f"), _0x556994().catch((_0x47466a) => {
    }), addEventListener("message", (_0x1279ff) => {
      if (_0x1279ff.data && typeof _0x1279ff.data == "object") {
        if (_0x1279ff.data.$sw$setCookieDone && typeof _0x1279ff.data.$sw$setCookieDone == "object") {
          let _0x2af16c = _0x1279ff.data.$sw$setCookieDone, _0x3d19ff = _0x2606ef[_0x2af16c.id];
          _0x3d19ff && (_0x3d19ff(), delete _0x2606ef[_0x2af16c.id]);
        }
        if (_0x1279ff.data.$sw$initRemoteTransport && typeof _0x1279ff.data.$sw$initRemoteTransport == "object") {
          let { port: _0xcc2958, prefix: _0x49c526 } = _0x1279ff.data.$sw$initRemoteTransport, _0x1b9756 = _0x3b1da4.find((_0x15b82c) => new URL(_0x49c526).pathname.startsWith(_0x15b82c.prefix));
          if (!_0x1b9756) return;
          _0x1b9756.rpc.call("initRemoteTransport", { port: _0xcc2958, prefix: _0x49c526 }, [_0xcc2958]).catch((_0x41c91f) => {
            _0x1b9756.isClosed();
          });
        }
      }
    });
    class _0x1d73d2 {
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
      constructor(_0x10e79d, _0xac44b7, _0x3e60b2, _0x5d796d, _0x483ff7) {
        this.prefix = _0x10e79d, this.id = _0xac44b7, this.ownerClientId = _0x3e60b2, this.connectionId = _0x5d796d, this.port = _0x483ff7, this.rpc = new _0x358b3e.C({ sendSetCookie: a(async ({ cookies: _0x171c87, options: _0x3ce3d6 }) => {
          let _0x35a284, _0x52a9be = (await self.clients.matchAll()).filter((_0x23a630) => new URL(_0x23a630.url).pathname.startsWith(this.prefix)), _0xb03a3d = [], _0x54cd13 = [];
          try {
            for (let _0x51d271 of _0x52a9be) {
              let _0x557cf9 = _0x1e1cd1();
              _0xb03a3d.push(_0x557cf9), _0x54cd13.push(new Promise((_0x250257) => {
                _0x2606ef[_0x557cf9] = () => {
                  _0x250257(_0x557cf9);
                };
              })), _0x51d271.postMessage({ $controller$setCookie: { cookies: _0x171c87, options: _0x3ce3d6, id: _0x557cf9 } });
            }
            if (_0x54cd13.length > 0) {
              let _0x3cc62e = new Promise((_0x4e7256) => {
                _0x35a284 = setTimeout(() => {
                  "" + _0xb03a3d.filter((_0x481bc2) => _0x2606ef[_0x481bc2] !== void 0).length, _0x4e7256(void 0);
                }, 1e3);
              });
              await Promise.race([Promise.all(_0x54cd13), _0x3cc62e]);
            }
          } finally {
            for (let _0x1bacd4 of (_0x35a284 !== void 0 && clearTimeout(_0x35a284), _0xb03a3d)) delete _0x2606ef[_0x1bacd4];
          }
        }, "sendSetCookie") }, "tabchannel-" + _0xac44b7, (_0x184d24, _0x503b5e) => {
          _0x483ff7.postMessage(_0x184d24, _0x503b5e);
        }), _0x483ff7.onmessage = (_0xfc13ac) => {
          this.rpc.recieve(_0xfc13ac.data);
        }, _0x483ff7.onmessageerror = new Proxy({}, { get: a(() => () => {
        }, "get") }).error, this.rpc.call("ready", { workerId: _0x593c22, connectionId: this.connectionId }).catch((_0x4428fc) => {
          this.closed;
        });
      }
      isClosed() {
        return this.closed;
      }
      close() {
        if (this.closed) return;
        this.closed = !0;
        let _0x1bd0f0 = Error("Scramjet Controller reference closed");
        for (let _0x1f30e9 of this.rpc.promiseCallbacks.values()) _0x1f30e9.reject(_0x1bd0f0);
        this.rpc.promiseCallbacks.clear(), this.port.onmessage = null, this.port.onmessageerror = null;
        try {
          this.port.close();
        } catch {
        }
      }
    }
    let _0x3b1da4 = [], _0x45cef9 = /* @__PURE__ */ new Set();
    function _0x2abaca(_0x6f1421) {
      let _0x5203a0 = new URL(_0x6f1421.request.url);
      return _0x5203a0.origin === location.origin && (!!_0x3b1da4.some((_0x1a011f) => _0x5203a0.pathname.startsWith(_0x1a011f.prefix)) || !!((_0x6f1421.clientId || _0x6f1421.resultingClientId) && _0x2a2c9f(_0x5203a0.pathname)));
    }
    a(_0x2abaca, "w");
    async function _0x2a6906(_0x53bab2) {
      try {
        let _0x3d325c = new URL(_0x53bab2.request.url), _0x12b960 = _0x3b1da4.find((_0x1bc428) => _0x3d325c.pathname.startsWith(_0x1bc428.prefix));
        if (!_0x12b960) {
          let _0x53b6db = _0x2a2c9f(_0x3d325c.pathname);
          if (!_0x53b6db || !_0x53bab2.clientId && !_0x53bab2.resultingClientId) return new Response("Scramjet Controller ownership was not established", { status: 503 });
          if (!(_0x12b960 = await _0x3778fc(_0x53b6db))) return new Response("Scramjet Controller revival expired", { status: 503 });
        }
        let _0x5743b8 = await clients.get(_0x53bab2.clientId), _0x5db3a9 = [..._0x53bab2.request.headers], _0x21708c = await _0x12b960.rpc.call("request", { rawUrl: _0x53bab2.request.url, rawReferrer: _0x53bab2.request.referrer, destination: _0x53bab2.request.destination, mode: _0x53bab2.request.mode, credentials: _0x53bab2.request.credentials, referrer: _0x53bab2.request.referrer, method: _0x53bab2.request.method, body: _0x53bab2.request.body, cache: _0x53bab2.request.cache, forceCrossOriginIsolated: !1, initialHeaders: _0x5db3a9, rawClientUrl: _0x5743b8 ? _0x5743b8.url : void 0, clientId: _0x53bab2.resultingClientId || _0x53bab2.clientId, sourceClientId: _0x53bab2.clientId, resultingClientId: _0x53bab2.resultingClientId }, _0x53bab2.request.body instanceof ReadableStream || _0x53bab2.request.body instanceof ArrayBuffer ? [_0x53bab2.request.body] : void 0);
        return new Response(_0x21708c.body, { status: _0x21708c.status, statusText: _0x21708c.statusText, headers: _0x21708c.headers });
      } catch (_0x4f6bf6) {
        return _0x53bab2.request.mode === "navigate" ? new Response("Internal Service Worker Error: " + _0x4f6bf6.message, { status: 500 }) : Response.error();
      }
    }
    a(_0x2a6906, "y"), addEventListener("message", (_0x514bbd) => {
      let _0x28f57f;
      if (!_0x514bbd.data || typeof _0x514bbd.data != "object") return;
      if (_0x514bbd.data.$controller$detach && typeof _0x514bbd.data.$controller$detach == "object") {
        let _0x207998 = _0x514bbd.data.$controller$detach, _0x41f8b4 = _0x514bbd.ports[0], _0x2df122 = _0x262f1a(_0x514bbd);
        if (typeof _0x207998.id != "string" || !_0x41f8b4 || !_0x2df122) return;
        let _0x3ab5c1 = _0x3b1da4.findIndex((_0x1a47bc) => _0x1a47bc.id === _0x207998.id), _0x219d8a = _0x45cef9.has(_0x207998.id);
        if (_0x3ab5c1 !== -1 && _0x3b1da4[_0x3ab5c1]?.ownerClientId === _0x2df122) {
          let [_0x3e483f] = _0x3b1da4.splice(_0x3ab5c1, 1);
          _0x3e483f.close(), _0x45cef9.add(_0x207998.id), _0x219d8a = !0;
        }
        let _0x2077f5 = { id: _0x207998.id, detached: _0x219d8a };
        _0x41f8b4.postMessage({ $controller$detached: _0x2077f5 }), _0x41f8b4.close();
        return;
      }
      if (!_0x514bbd.data.$controller$init || typeof _0x514bbd.data.$controller$init != "object") return;
      let _0x40e477 = _0x514bbd.data.$controller$init, _0x3e0254 = _0x262f1a(_0x514bbd);
      if (typeof _0x40e477.id != "string" || !/^[0-9a-f]{32}$/.test(_0x40e477.id) || typeof _0x40e477.prefix != "string" || _0x40e477.workerId !== void 0 && _0x40e477.workerId !== _0x593c22 || !_0x3e0254 || !_0x514bbd.ports[0]) return;
      try {
        let _0x444838 = new URL(_0x40e477.prefix, location.origin);
        if (_0x444838.origin !== location.origin || !_0x444838.pathname.endsWith("/" + _0x40e477.id + "/")) return;
        _0x28f57f = _0x444838.pathname;
      } catch {
        return;
      }
      let _0x575f12 = _0x3b1da4.findIndex((_0x38eef6) => _0x38eef6.id === _0x40e477.id);
      if (_0x575f12 !== -1) {
        if (_0x3b1da4[_0x575f12]?.ownerClientId !== _0x3e0254) return void _0x514bbd.ports[0].close();
        let [_0x165642] = _0x3b1da4.splice(_0x575f12, 1);
        _0x165642.close();
      }
      _0x45cef9.delete(_0x40e477.id);
      let _0x1227e8 = new _0x1d73d2(_0x28f57f, _0x40e477.id, _0x3e0254, typeof _0x40e477.connectionId == "string" ? _0x40e477.connectionId : void 0, _0x514bbd.ports[0]);
      for (let _0x478f17 of (_0x3b1da4.push(_0x1227e8), _0x3e1d7e.get(_0x28f57f) ?? [])) _0x478f17(_0x1227e8);
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", (_0x19f918) => {
      _0x19f918.waitUntil((async () => {
        await clients.claim(), await _0x556994();
      })());
    });
  })(), $scramjetController = _0x48b128;
})();
