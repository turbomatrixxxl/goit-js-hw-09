!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var c=r("ejkSG"),i=document.querySelector(".form"),u=i.querySelector("input[name = 'delay']"),a=i.querySelector("input[name = 'step']"),l=i.querySelector("input[name = 'amount']");i.querySelector("button").addEventListener("click",(function(n){var o=function(n){var o,t,r=parseInt(u.value)+parseInt(a.value)*(n-1);(o=n,t=r,new Promise((function(e,n){var r=Math.random()>.3;setTimeout((function(){r?e("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")):n("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}),t)}))).then((function(o){e(c).Notify.success(o),console.log("✅ Fulfilled promise ".concat(n," in ").concat(a.value,"ms"))})).catch((function(o){e(c).Notify.failure(o),console.log("❌ Rejected promise ".concat(n," in ").concat(a.value,"ms"))}))};n.preventDefault();for(var t=1;t<=l.value;t++)o(t)}))}();
//# sourceMappingURL=03-promises.ee236005.js.map
