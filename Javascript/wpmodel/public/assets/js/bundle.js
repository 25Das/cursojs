(()=>{"use strict";var n,t,r,e,o,a,i,s,c,A,u,p,f,l,d={922:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(n,r,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);e&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},162:n=>{function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}n.exports=function(n){var r,e,o=(e=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,a=[],i=!0,s=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(a.push(e.value),!t||a.length!==t);i=!0);}catch(n){s=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(r,e)||function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),A="/*# ".concat(c," */"),u=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(u).concat([A]).join("\n")}return[a].join("\n")}},122:(n,t,r)=>{r.d(t,{Z:()=>s});var e=r(162),o=r.n(e),a=r(922),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([n.id,":root {\n\t--primary-color: rgb(17, 86, 102);\n\t--primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n\tbox-sizing: border-box;\n\toutline: none;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: var(--primary-color);\n\tfont-family: 'Open sans', sans-serif;\n\tfont-size: 1em;\n\tline-height: 1.3em;\n}\n\n.container {\n\tmax-width: 640px;\n\tmargin: 50px /*auto*/;\n\tbackground: #fff;\n\tpadding: 20px;\n\tborder-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n\tdisplay: block;\n\twidth: 100%;\n\tmargin-bottom: 10px;\n}\n\nform input {\n\tfont-size: 24px;\n\theight: 50px;\n\tpadding: 0 20px;\n}\n\nform input:focus {\n\toutline: 1px solid var(--primary-color);\n\tborder: none;\n}\n\nform button {\n\tborder: none;\n\tbackground: var(--primary-color);\n\tcolor: #fff;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\theight: 50px;\n\tcursor: pointer;\n\tmargin-top: 30px;\n\tborder-radius: 5px;\n}\n\nform button:hover {\n\tbackground: var(--primary-color-darker);\n}\n\nform button:active {\n\tbackground: red;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;CACC,iCAAiC;CACjC,sCAAsC;AACvC;;AAEA;CACC,sBAAsB;CACtB,aAAa;AACd;;AAEA;CACC,SAAS;CACT,UAAU;CACV,gCAAgC;CAChC,oCAAoC;CACpC,cAAc;CACd,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,qBAAqB;CACrB,gBAAgB;CAChB,aAAa;CACb,mBAAmB;AACpB;;AAEA;;;CAGC,cAAc;CACd,WAAW;CACX,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,uCAAuC;CACvC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,gCAAgC;CAChC,WAAW;CACX,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,uCAAuC;AACxC;;AAEA;CACC,eAAe;AAChB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\n\n:root {\n\t--primary-color: rgb(17, 86, 102);\n\t--primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n\tbox-sizing: border-box;\n\toutline: none;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: var(--primary-color);\n\tfont-family: 'Open sans', sans-serif;\n\tfont-size: 1em;\n\tline-height: 1.3em;\n}\n\n.container {\n\tmax-width: 640px;\n\tmargin: 50px /*auto*/;\n\tbackground: #fff;\n\tpadding: 20px;\n\tborder-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n\tdisplay: block;\n\twidth: 100%;\n\tmargin-bottom: 10px;\n}\n\nform input {\n\tfont-size: 24px;\n\theight: 50px;\n\tpadding: 0 20px;\n}\n\nform input:focus {\n\toutline: 1px solid var(--primary-color);\n\tborder: none;\n}\n\nform button {\n\tborder: none;\n\tbackground: var(--primary-color);\n\tcolor: #fff;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\theight: 50px;\n\tcursor: pointer;\n\tmargin-top: 30px;\n\tborder-radius: 5px;\n}\n\nform button:hover {\n\tbackground: var(--primary-color-darker);\n}\n\nform button:active {\n\tbackground: red;\n}\n"],sourceRoot:""}]);const s=i},379:n=>{var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],A=e.base?c[0]+e.base:c[0],u=a[A]||0,p="".concat(A," ").concat(u);a[A]=u+1;var f=r(p),l={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(t[f].references++,t[f].updater(l)):t.push({identifier:p,updater:o(l,e),references:1}),i.push(p)}return i}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=e(n,o),A=0;A<a.length;A++){var u=r(a[A]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:n=>{var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},565:(n,t,r)=>{n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e=r.css,o=r.media,a=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(e,n)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},C={};function m(n){var t=C[n];if(void 0!==t)return t.exports;var r=C[n]={id:n,exports:{}};return d[n](r,r.exports,m),r.exports}m.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return m.d(t,{a:t}),t},m.d=(n,t)=>{for(var r in t)m.o(t,r)&&!m.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},m.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),n=m(379),t=m.n(n),r=m(795),e=m.n(r),o=m(569),a=m.n(o),i=m(565),s=m.n(i),c=m(216),A=m.n(c),u=m(589),p=m.n(u),f=m(122),(l={}).styleTagTransform=p(),l.setAttributes=s(),l.insert=a().bind(null,"head"),l.domAPI=e(),l.insertStyleElement=A(),t()(f.Z,l),f.Z&&f.Z.locals&&f.Z.locals})();
//# sourceMappingURL=bundle.js.map