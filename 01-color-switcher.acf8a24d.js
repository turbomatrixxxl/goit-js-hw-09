!function(){var o=document.querySelector("body");console.log(o);var t=document.querySelector("[data-start]");console.log(t);var e=document.querySelector("[data-stop]");console.log(e);var n=null,l=null;function r(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),n=o.style.backgroundColor}t.addEventListener("click",(function(o){l=setInterval(r,1e3),t.disabled=!0})),e.addEventListener("click",(function(e){o.style.backgroundColor=n,clearInterval(l),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.acf8a24d.js.map