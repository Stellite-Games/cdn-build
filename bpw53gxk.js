var E = Object.defineProperty, a = (_0x278017, _0x4824ca) => E(_0x278017, "name", { value: _0x4824ca, configurable: !0 }), $scramjetController;
(() => {
  var _0x50d602 = { 805(_0x4f9a78, _0x37937d, _0x72899f) {
    _0x72899f.d(_0x37937d, { C: a(() => _0x400439, "C") });
    class _0x400439 {
      static {
        a(this, "o2");
      }
      methods;
      id;
      sendRaw;
      counter = 0;
      promiseCallbacks = /* @__PURE__ */ new Map();
      constructor(_0x2fafdc, _0xfd8de0, _0x400097) {
        this.methods = _0x2fafdc, this.id = _0xfd8de0, this.sendRaw = _0x400097;
      }
      recieve(_0x495da2) {
        if (_0x495da2 == null || typeof _0x495da2 != "object") return;
        let _0x4135bd = _0x495da2[this.id];
        if (_0x4135bd == null || typeof _0x4135bd != "object") return;
        let _0xb7e944 = _0x4135bd.$type;
        if (_0xb7e944 === "response") {
          let _0x39be8e = _0x4135bd.$token, _0x2b3d6d = _0x4135bd.$data, _0x35ff04 = _0x4135bd.$error, _0x542246 = this.promiseCallbacks.get(_0x39be8e);
          if (!_0x542246) return;
          this.promiseCallbacks.delete(_0x39be8e), _0x35ff04 !== void 0 ? _0x542246.reject(Error(_0x35ff04)) : _0x542246.resolve(_0x2b3d6d);
        } else if (_0xb7e944 === "request") {
          let _0x433bbb = _0x4135bd.$method, _0x5eb7c0 = _0x4135bd.$args;
          this.methods[_0x433bbb](_0x5eb7c0).then((_0x5c06ff) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x4135bd.$token, $data: _0x5c06ff?.[0] } }, _0x5c06ff?.[1]);
          }).catch((_0x4403a6) => {
            this.sendRaw({ [this.id]: { $type: "response", $token: _0x4135bd.$token, $error: _0x4403a6?.toString() || "Unknown error" } }, []);
          });
        }
      }
      call(_0x30584b, _0x16173d, _0x432997 = []) {
        let _0x4c1c8f = this.counter++;
        return new Promise((_0x568431, _0xae36dc) => {
          this.promiseCallbacks.set(_0x4c1c8f, { resolve: _0x568431, reject: _0xae36dc }), this.sendRaw({ [this.id]: { $type: "request", $method: _0x30584b, $args: _0x16173d, $token: _0x4c1c8f } }, _0x432997);
        });
      }
    }
  } }, _0x5aaa83 = {};
  function _0x5b276c(_0x4bfb8e) {
    var _0x1af164 = _0x5aaa83[_0x4bfb8e];
    if (_0x1af164 !== void 0) return _0x1af164.exports;
    var _0x4c5218 = _0x5aaa83[_0x4bfb8e] = { exports: {} };
    return _0x50d602[_0x4bfb8e](_0x4c5218, _0x4c5218.exports, _0x5b276c), _0x4c5218.exports;
  }
  a(_0x5b276c, "r"), _0x5b276c.d = (_0x545df2, _0x247214) => {
    for (var _0x2059bb in _0x247214) _0x5b276c.o(_0x247214, _0x2059bb) && !_0x5b276c.o(_0x545df2, _0x2059bb) && Object.defineProperty(_0x545df2, _0x2059bb, { enumerable: !0, get: _0x247214[_0x2059bb] });
  }, _0x5b276c.o = (_0x5ba529, _0x3d3ef2) => Object.prototype.hasOwnProperty.call(_0x5ba529, _0x3d3ef2), _0x5b276c.r = (_0x4db731) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(_0x4db731, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(_0x4db731, "__esModule", { value: !0 });
  };
  var _0x6efac0 = {};
  (() => {
    let _0x86ac21;
    _0x5b276c.r(_0x6efac0), _0x5b276c.d(_0x6efac0, { route: a(() => _0x58d778, "route"), shouldRoute: a(() => _0x331b10, "shouldRoute") });
    var _0x2f85ce = _0x5b276c(805);
    function _0x125b50() {
      return Array.from(crypto.getRandomValues(new Uint8Array(16)), (_0x590417) => _0x590417.toString(16).padStart(2, "0")).join("");
    }
    a(_0x125b50, "i");
    function _0x144a80(_0x12c129) {
      let _0x574dda = _0x12c129.source;
      return _0x574dda && typeof _0x574dda == "object" && "id" in _0x574dda && typeof _0x574dda.id == "string" ? _0x574dda.id : null;
    }
    a(_0x144a80, "n");
    let _0x2b4eac = {}, _0x1b1c9d = _0x125b50(), _0x546d40 = /* @__PURE__ */ new Map();
    function _0xda9bdf(_0x779d75) {
      let _0x41b38d = /\/([0-9a-f]{32})\/[0-9a-f]{32}\/https?(?:%3A%2F%2F|%253A%252F%252F)/.exec(_0x779d75);
      return _0x41b38d && _0x41b38d.index !== void 0 && _0x41b38d[1] ? _0x779d75.slice(0, _0x41b38d.index + _0x41b38d[1].length + 2) : null;
    }
    a(_0xda9bdf, "d");
    function _0x2638a9(_0x2096f0) {
      return _0x4dec70.find((_0x5d62d7) => _0x2096f0 === _0x5d62d7.prefix && !_0x5d62d7.isClosed());
    }
    a(_0x2638a9, "c");
    function _0x389ce5() {
      if (_0x86ac21 && _0x86ac21.expiresAt > Date.now()) return _0x86ac21.promise;
      let _0x295c1a = _0x125b50(), _0x4d9a9e = Date.now() + 1e3, _0x243d26 = (async () => {
        for (let _0x4347b1 of await clients.matchAll({ includeUncontrolled: !0, type: "window" })) _0x4347b1.postMessage({ $controller$swrevive: { workerId: _0x1b1c9d, revivalId: _0x295c1a } });
        await new Promise((_0xefe99f) => {
          setTimeout(() => _0xefe99f(void 0), 1e3);
        });
      })();
      return _0x86ac21 = { expiresAt: _0x4d9a9e, promise: _0x243d26 }, _0x243d26.then(() => {
        _0x86ac21?.promise === _0x243d26 && (_0x86ac21 = void 0);
      }, () => {
        _0x86ac21?.promise === _0x243d26 && (_0x86ac21 = void 0);
      }), _0x243d26;
    }
    a(_0x389ce5, "u");
    async function _0x15407a(_0x2a8077) {
      let _0xe7bcc4, _0x5449ad = _0x2638a9(_0x2a8077);
      if (_0x5449ad) return _0x5449ad;
      let _0x31696e = new Promise((_0x9960ec) => {
        _0xe7bcc4 = a((_0x2f5901) => {
          _0x9960ec(_0x2f5901);
        }, "t3");
        let _0x4ed187 = _0x546d40.get(_0x2a8077) ?? /* @__PURE__ */ new Set();
        _0x4ed187.add(_0xe7bcc4), _0x546d40.set(_0x2a8077, _0x4ed187);
      });
      try {
        return await Promise.race([_0x31696e, _0x389ce5()]), _0x2638a9(_0x2a8077);
      } finally {
        if (_0xe7bcc4) {
          let _0x575e73 = _0x546d40.get(_0x2a8077);
          _0x575e73?.delete(_0xe7bcc4), _0x575e73?.size === 0 && _0x546d40.delete(_0x2a8077);
        }
      }
    }
    a(_0x15407a, "f"), _0x389ce5().catch((_0x56a226) => {
    }), addEventListener("message", (_0x277575) => {
      if (_0x277575.data && typeof _0x277575.data == "object") {
        if (_0x277575.data.$sw$setCookieDone && typeof _0x277575.data.$sw$setCookieDone == "object") {
          let _0x39367a = _0x277575.data.$sw$setCookieDone, _0x33ae21 = _0x2b4eac[_0x39367a.id];
          _0x33ae21 && (_0x33ae21(), delete _0x2b4eac[_0x39367a.id]);
        }
        if (_0x277575.data.$sw$initRemoteTransport && typeof _0x277575.data.$sw$initRemoteTransport == "object") {
          let { port: _0x58246b, prefix: _0x56079e } = _0x277575.data.$sw$initRemoteTransport, _0x3887d1 = _0x4dec70.find((_0x4a529a) => new URL(_0x56079e).pathname.startsWith(_0x4a529a.prefix));
          if (!_0x3887d1) return;
          _0x3887d1.rpc.call("initRemoteTransport", { port: _0x58246b, prefix: _0x56079e }, [_0x58246b]).catch((_0x52adc7) => {
            _0x3887d1.isClosed();
          });
        }
      }
    });
    class _0x2fc514 {
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
      constructor(_0x4f90e7, _0x7365ab, _0x454d7a, _0x196893, _0x1db881) {
        this.prefix = _0x4f90e7, this.id = _0x7365ab, this.ownerClientId = _0x454d7a, this.connectionId = _0x196893, this.port = _0x1db881, this.rpc = new _0x2f85ce.C({ sendSetCookie: a(async ({ cookies: _0x631d0a, options: _0x272ea0 }) => {
          let _0x3f87e2, _0x4ff33a = (await self.clients.matchAll()).filter((_0x44d9f3) => new URL(_0x44d9f3.url).pathname.startsWith(this.prefix)), _0x4ed1e0 = [], _0x144d36 = [];
          try {
            for (let _0x44009d of _0x4ff33a) {
              let _0x192caa = _0x125b50();
              _0x4ed1e0.push(_0x192caa), _0x144d36.push(new Promise((_0x442313) => {
                _0x2b4eac[_0x192caa] = () => {
                  _0x442313(_0x192caa);
                };
              })), _0x44009d.postMessage({ $controller$setCookie: { cookies: _0x631d0a, options: _0x272ea0, id: _0x192caa } });
            }
            if (_0x144d36.length > 0) {
              let _0x11ab2f = new Promise((_0x2adf1a) => {
                _0x3f87e2 = setTimeout(() => {
                  "" + _0x4ed1e0.filter((_0x3a3ffa) => _0x2b4eac[_0x3a3ffa] !== void 0).length, _0x2adf1a(void 0);
                }, 1e3);
              });
              await Promise.race([Promise.all(_0x144d36), _0x11ab2f]);
            }
          } finally {
            for (let _0x59710f of (_0x3f87e2 !== void 0 && clearTimeout(_0x3f87e2), _0x4ed1e0)) delete _0x2b4eac[_0x59710f];
          }
        }, "sendSetCookie") }, "tabchannel-" + _0x7365ab, (_0x177f67, _0x239472) => {
          _0x1db881.postMessage(_0x177f67, _0x239472);
        }), _0x1db881.onmessage = (_0x50f0df) => {
          this.rpc.recieve(_0x50f0df.data);
        }, _0x1db881.onmessageerror = new Proxy({}, { get: a(() => () => {
        }, "get") }).error, this.rpc.call("ready", { workerId: _0x1b1c9d, connectionId: this.connectionId }).catch((_0x7cd75f) => {
          this.closed;
        });
      }
      isClosed() {
        return this.closed;
      }
      close() {
        if (this.closed) return;
        this.closed = !0;
        let _0x4c84ae = Error("Scramjet Controller reference closed");
        for (let _0xcfd369 of this.rpc.promiseCallbacks.values()) _0xcfd369.reject(_0x4c84ae);
        this.rpc.promiseCallbacks.clear(), this.port.onmessage = null, this.port.onmessageerror = null;
        try {
          this.port.close();
        } catch {
        }
      }
    }
    let _0x4dec70 = [], _0x274e01 = /* @__PURE__ */ new Set();
    function _0x331b10(_0x518f12) {
      let _0x5561f4 = new URL(_0x518f12.request.url);
      return _0x5561f4.origin === location.origin && (!!_0x4dec70.some((_0x196bbd) => _0x5561f4.pathname.startsWith(_0x196bbd.prefix)) || !!((_0x518f12.clientId || _0x518f12.resultingClientId) && _0xda9bdf(_0x5561f4.pathname)));
    }
    a(_0x331b10, "w");
    async function _0x58d778(_0x5caaff) {
      try {
        let _0x523664 = new URL(_0x5caaff.request.url), _0x22ce90 = _0x4dec70.find((_0x395068) => _0x523664.pathname.startsWith(_0x395068.prefix));
        if (!_0x22ce90) {
          let _0x5e4e36 = _0xda9bdf(_0x523664.pathname);
          if (!_0x5e4e36 || !_0x5caaff.clientId && !_0x5caaff.resultingClientId) return new Response("Scramjet Controller ownership was not established", { status: 503 });
          if (!(_0x22ce90 = await _0x15407a(_0x5e4e36))) return new Response("Scramjet Controller revival expired", { status: 503 });
        }
        let _0x4c9c08 = await clients.get(_0x5caaff.clientId), _0x17b0dc = [..._0x5caaff.request.headers], _0x94183c = await _0x22ce90.rpc.call("request", { rawUrl: _0x5caaff.request.url, rawReferrer: _0x5caaff.request.referrer, destination: _0x5caaff.request.destination, mode: _0x5caaff.request.mode, credentials: _0x5caaff.request.credentials, referrer: _0x5caaff.request.referrer, method: _0x5caaff.request.method, body: _0x5caaff.request.body, cache: _0x5caaff.request.cache, forceCrossOriginIsolated: !1, initialHeaders: _0x17b0dc, rawClientUrl: _0x4c9c08 ? _0x4c9c08.url : void 0, clientId: _0x5caaff.resultingClientId || _0x5caaff.clientId, sourceClientId: _0x5caaff.clientId, resultingClientId: _0x5caaff.resultingClientId }, _0x5caaff.request.body instanceof ReadableStream || _0x5caaff.request.body instanceof ArrayBuffer ? [_0x5caaff.request.body] : void 0);
        return new Response(_0x94183c.body, { status: _0x94183c.status, statusText: _0x94183c.statusText, headers: _0x94183c.headers });
      } catch (_0x4a5a0a) {
        return _0x5caaff.request.mode === "navigate" ? new Response("Internal Service Worker Error: " + _0x4a5a0a.message, { status: 500 }) : Response.error();
      }
    }
    a(_0x58d778, "y"), addEventListener("message", (_0x153832) => {
      let _0x140226;
      if (!_0x153832.data || typeof _0x153832.data != "object") return;
      if (_0x153832.data.$controller$detach && typeof _0x153832.data.$controller$detach == "object") {
        let _0x389d64 = _0x153832.data.$controller$detach, _0x2947e4 = _0x153832.ports[0], _0x5838fd = _0x144a80(_0x153832);
        if (typeof _0x389d64.id != "string" || !_0x2947e4 || !_0x5838fd) return;
        let _0x3b64c7 = _0x4dec70.findIndex((_0x26cfdb) => _0x26cfdb.id === _0x389d64.id), _0xedafd3 = _0x274e01.has(_0x389d64.id);
        if (_0x3b64c7 !== -1 && _0x4dec70[_0x3b64c7]?.ownerClientId === _0x5838fd) {
          let [_0x5a2f99] = _0x4dec70.splice(_0x3b64c7, 1);
          _0x5a2f99.close(), _0x274e01.add(_0x389d64.id), _0xedafd3 = !0;
        }
        let _0x57bfdb = { id: _0x389d64.id, detached: _0xedafd3 };
        _0x2947e4.postMessage({ $controller$detached: _0x57bfdb }), _0x2947e4.close();
        return;
      }
      if (!_0x153832.data.$controller$init || typeof _0x153832.data.$controller$init != "object") return;
      let _0x224e60 = _0x153832.data.$controller$init, _0xacda84 = _0x144a80(_0x153832);
      if (typeof _0x224e60.id != "string" || !/^[0-9a-f]{32}$/.test(_0x224e60.id) || typeof _0x224e60.prefix != "string" || _0x224e60.workerId !== void 0 && _0x224e60.workerId !== _0x1b1c9d || !_0xacda84 || !_0x153832.ports[0]) return;
      try {
        let _0x1d7d3c = new URL(_0x224e60.prefix, location.origin);
        if (_0x1d7d3c.origin !== location.origin || !_0x1d7d3c.pathname.endsWith("/" + _0x224e60.id + "/")) return;
        _0x140226 = _0x1d7d3c.pathname;
      } catch {
        return;
      }
      let _0x200a7a = _0x4dec70.findIndex((_0x4edab1) => _0x4edab1.id === _0x224e60.id);
      if (_0x200a7a !== -1) {
        if (_0x4dec70[_0x200a7a]?.ownerClientId !== _0xacda84) return void _0x153832.ports[0].close();
        let [_0x2c6faa] = _0x4dec70.splice(_0x200a7a, 1);
        _0x2c6faa.close();
      }
      _0x274e01.delete(_0x224e60.id);
      let _0x56aee = new _0x2fc514(_0x140226, _0x224e60.id, _0xacda84, typeof _0x224e60.connectionId == "string" ? _0x224e60.connectionId : void 0, _0x153832.ports[0]);
      for (let _0x365a41 of (_0x4dec70.push(_0x56aee), _0x546d40.get(_0x140226) ?? [])) _0x365a41(_0x56aee);
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", (_0x573642) => {
      _0x573642.waitUntil((async () => {
        await clients.claim(), await _0x389ce5();
      })());
    });
  })(), $scramjetController = _0x6efac0;
})();
