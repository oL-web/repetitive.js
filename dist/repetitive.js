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
    return function (e) {
      e = { type: e.type || "GET", url: e.url || "", timeout: e.timeout || 0, data: e.data || null, onSuccess: e.onSuccess || null, onTimeout: e.onTimeout || null, onError: e.onError || function (e) {
          throw new Error("onError event fired - there was a connection error of some sort.");
        } };var o = new XMLHttpRequest();o.open(e.type, e.url, !0), o.onreadystatechange = function () {
        if (4 === o.readyState && o.status >= 200 && o.status < 400) {
          var n = { responseText: o.responseText };o.response && (n.response = o.response), o.responseXML && (n.responseXML = o.responseXML), o.responseURL && (n.responseURL = o.responseURL), e.onSuccess(n);
        }
      }, o.onerror = e.onError, o.ontimeout = e.onTimeout, "POST" === String(e.type).toUpperCase() && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), o.send(e.data);
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
