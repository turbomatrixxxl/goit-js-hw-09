function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in l){var o=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){l[e]=o},o.parcelRequired7c6=n);var i=n("1GAPJ");const r=document.querySelector(".form"),u=r.querySelector("input[name = 'delay']"),s=r.querySelector("input[name = 'step']"),a=r.querySelector("input[name = 'amount']");r.querySelector("button").addEventListener("click",(o=>{o.preventDefault();for(let o=1;o<=a.value;o++)setTimeout((()=>{var t,l;(t=o,l=s.value,new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?e(`✅ Fulfilled promise ${t} in ${l}ms`):o(`❌ Rejected promise ${t} in ${l}ms`)}),u.value)}))).then((({position:t,delay:l})=>{e(i).Notify.success("✅ Fulfilled promise ${i} in ${step.value}ms"),console.log(`✅ Fulfilled promise ${o} in ${s.value}ms`)})).catch((({position:t,delay:l})=>{e(i).Notify.failure("❌ Rejected promise ${i} in ${step.value}ms"),console.log(`❌ Rejected promise ${o} in ${s.value}ms`)}))}),s.value)}));
//# sourceMappingURL=03-promises.97cad90a.js.map
