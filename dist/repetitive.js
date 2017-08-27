(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.rptv = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var repetitive_ajax_min = createCommonjsModule(function (module, exports) {
  !function (e, o) {
    module.exports = o();
  }(commonjsGlobal, function () {
    "use strict";
    return function (options) {
      if (!(options = { type: options.type || "GET", url: options.url || !1, timeout: options.timeout || 0, data: options.data || null, onSuccess: options.onSuccess || !1, onTimeout: options.onTimeout || null, onError: options.onError || null }).url) throw new Error("repetitive.ajax error: There's no url property inside the options object!");if (!options.onSuccess) throw new Error("repetitive.ajax error: There's no onSuccess method inside the options object!");var e = new XMLHttpRequest();e.open(options.type, options.url, !0), e.timeout = options.timeout, e.onerror = options.onError, e.ontimeout = options.onTimeout, "POST" === String(options.type).toUpperCase() && e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.onreadystatechange = function () {
        if (4 === e.readyState && e.status >= 200 && e.status < 400) {
          var o = { responseText: e.responseText };e.response && (o.response = e.response), e.responseXML && (o.responseXML = e.responseXML), e.responseURL && (o.responseURL = e.responseURL), options.onSuccess(o);
        }
      }, e.send(options.data);
    };
  });
});

var repetitive_classes_min = createCommonjsModule(function (module, exports) {
  !function (e, t) {
    module.exports = t();
  }(commonjsGlobal, function () {
    "use strict";
    return function (e) {
      return e = e.length ? [].slice.call(e) : [e], { add: function add(t) {
          for (var n = 0; n < e.length; n++) {
            e[n].className += " " + t;
          }return this;
        }, remove: function remove(t) {
          for (var n = new RegExp("\\b(" + t.split(" ").join(")(\\s|$)|\\b(") + ")(\\s|$)", "g"), s = 0; s < e.length; s++) {
            e[s].className = e[s].className.replace(n, "");
          }return this;
        }, contains: function contains(t) {
          for (var n = t.split(" "), s = 0, r = 0; r < e.length; r++) {
            for (var a = 0; a < n.length; a++) {
              new RegExp("\\b(" + n[a] + ")(\\s|$)", "g").test(e[r].className) && s++;
            }
          }return s === e.length * n.length;
        }, toggle: function toggle(t) {
          for (var n = t.split(" "), s = 0; s < e.length; s++) {
            for (var r = 0; r < n.length; r++) {
              var a = new RegExp("\\b(" + n[r] + ")(\\s|$)", "g");a.test(e[s].className) ? e[s].className = e[s].className.replace(a, "") : e[s].className += " " + n[r];
            }
          }return this;
        } };
    };
  });
});

function rptv(selector) {

  return [].slice.call(document.querySelectorAll(selector));
}

rptv.ajax = repetitive_ajax_min;
rptv.classes = repetitive_classes_min;

return rptv;

})));
