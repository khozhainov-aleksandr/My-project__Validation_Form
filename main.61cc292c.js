parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e="Confirm !",t="User Name",c="Email",n="Password",a="Confirm Password",o=document.querySelector("#form"),r=document.querySelector("#username"),s=document.querySelector("#email"),u=document.querySelector("#password"),l=document.querySelector("#password-confirm");function i(o){o.preventDefault(),m([r,s,u,l],[t,c,n,a],e),f(s,c,e),d(r,3,15,t,e),d(u,6,20,n,e),v(u,l,a)}function m(e,t,c){e.forEach(function(e,n){""===e.value.trim()?q(e,"".concat(t[n]," is Required !")):h(e,"".concat(t[n]," ").concat(c))})}function d(e,t,c,n,a){e.value.length<t?q(e,"".concat(n," length must be Min ").concat(t," characters.")):e.value.length>c?q(e,"".concat(n," length must be Max ").concat(c," characters.")):h(e,"".concat(n," ").concat(a))}function f(e,t,c){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim())?h(e,"".concat(t," ").concat(c)):q(e,"".concat(t," is not valid !"))}function v(e,t,c){e.value!==t.value&&q(t,"".concat(c," do not Merge !"))}function q(e,t){var c=e.parentElement,n=c.querySelector("small");c.classList.remove("success"),c.classList.add("error"),n.textContent=t}function h(e,t){var c=e.parentElement,n=c.querySelector("small");c.classList.remove("error"),c.classList.add("success"),n.textContent=t}o.addEventListener("submit",i);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.61cc292c.js.map