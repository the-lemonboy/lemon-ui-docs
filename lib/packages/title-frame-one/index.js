!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("title-frame-one",[],e):"object"==typeof exports?exports["title-frame-one"]=e():t["title-frame-one"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=154)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(37),n(40);var r=function(t,e,n,r){var o=t.replace(/\d/g,""),i=parseFloat(t.match(/\d+/)[0]),c=null;if("rem"===o)c=parseFloat(getComputedStyle(document.documentElement).fontSize)*i;else if("em"==o){var u=e.parentNode;c=t?r:parseFloat(getComputedStyle(u).fontSize)*i}else if("vw"===o||"vh"===o){c=i/100*("vw"===o?window.innerWidth||document.documentElement.clientWidth:window.innerHeight||document.documentElement.clientHeight)}else if("%"===o){c=t?r:(("width"===n?e.parentNode.offsetWidth:e.parentNode.offsetHeight)*(i/100)).toFixed(2)}else"px"!==o&&""!==o||(c=i);return c<r&&console.error("lemonui:the Width or Height can't less than ".concat(r,"px")),c}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(2),o=n(23),i=n(19),c=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(6),o=n(30);t.exports=n(1)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(17)("wks"),o=n(15),i=n(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(0),o=n(8),i=n(9),c=n(14),u=n(28),a=function(t,e,n){var f,s,l,p,d=t&a.F,g=t&a.G,h=t&a.S,v=t&a.P,y=t&a.B,x=g?r:h?r[e]||(r[e]={}):(r[e]||{}).prototype,m=g?o:o[e]||(o[e]={}),b=m.prototype||(m.prototype={});for(f in g&&(n=e),n)l=((s=!d&&x&&void 0!==x[f])?x:n)[f],p=y&&s?u(l,r):v&&"function"==typeof l?u(Function.call,l):l,x&&c(x,f,l,t&a.U),m[f]!=l&&i(m,f,p),v&&b[f]!=l&&(b[f]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){"use strict";function r(t,e,n,r,o,i,c,u){var a,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=a):o&&(a=u?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,e){return a.call(e),s(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},function(t,e,n){var r=n(0),o=n(9),i=n(18),c=n(15)("src"),u=n(36),a=(""+u).split("toString");n(8).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var f="function"==typeof n;f&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(f&&(i(n,c)||o(n,c,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(8),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(31)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(41);var r=function(t,e){var n=null,r=0;return function(){for(var o=this,i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];var a=Date.now();a-r>e?(t.apply(this,c),r=a):(clearTimeout(n),n=setTimeout((function(){t.apply(o,c),r=a}),e))}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(4),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(1)&&!n(5)((function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){"use strict";var r=n(35)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(34),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";n(38);var r=n(14),o=n(9),i=n(5),c=n(7),u=n(11),a=n(27),f=u("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=u(t),d=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=d?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[f]=function(){return n}),n[p](""),!e})):void 0;if(!d||!g||"replace"===t&&!s||"split"===t&&!l){var h=/./[p],v=n(c,p,""[t],(function(t,e,n,r,o){return e.exec===a?d&&!o?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=v[0],x=v[1];r(String.prototype,t,y),o(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},function(t,e,n){"use strict";var r,o,i=n(39),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,f=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var e,n,r,o,a=this;return s&&(n=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(e=a.lastIndex),r=c.call(a,t),f&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),s&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,e,n){var r=n(33);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(6).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(1)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(21),o=n(11)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(10),o=n(7);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(t,e,n){t.exports=n(17)("native-function-to-string",Function.toString)},function(t,e,n){"use strict";var r=n(2),o=n(32),i=n(16),c=n(10),u=n(24),a=n(25),f=Math.max,s=Math.min,l=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;n(26)("replace",2,(function(t,e,n,g){return[function(r,o){var i=t(this),c=null==r?void 0:r[e];return void 0!==c?c.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=g(n,t,this,e);if(o.done)return o.value;var l=r(t),p=String(this),d="function"==typeof e;d||(e=String(e));var v=l.global;if(v){var y=l.unicode;l.lastIndex=0}for(var x=[];;){var m=a(l,p);if(null===m)break;if(x.push(m),!v)break;""===String(m[0])&&(l.lastIndex=u(p,i(l.lastIndex),y))}for(var b,_="",w=0,S=0;S<x.length;S++){m=x[S];for(var E=String(m[0]),O=f(s(c(m.index),p.length),0),j=[],I=1;I<m.length;I++)j.push(void 0===(b=m[I])?b:String(b));var C=m.groups;if(d){var N=[E].concat(j,O,p);void 0!==C&&N.push(C);var T=String(e.apply(void 0,N))}else T=h(E,p,O,j,C,e);O>=w&&(_+=p.slice(w,O)+T,w=O+E.length)}return _+p.slice(w)}];function h(t,e,r,i,c,u){var a=r+t.length,f=i.length,s=d;return void 0!==c&&(c=o(c),s=p),n.call(u,s,(function(n,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":u=c[o.slice(1,-1)];break;default:var s=+o;if(0===s)return n;if(s>f){var p=l(s/10);return 0===p?n:p<=f?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):n}u=i[s-1]}return void 0===u?"":u}))}}))},function(t,e,n){"use strict";var r=n(27);n(12)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){"use strict";var r=n(2);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(2),o=n(16),i=n(24),c=n(25);n(26)("match",1,(function(t,e,n,u){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=u(n,t,this);if(e.done)return e.value;var a=r(t),f=String(this);if(!a.global)return c(a,f);var s=a.unicode;a.lastIndex=0;for(var l,p=[],d=0;null!==(l=c(a,f));){var g=String(l[0]);p[d]=g,""===g&&(a.lastIndex=i(f,o(a.lastIndex),s)),d++}return 0===d?null:p}]}))},function(t,e,n){var r=n(12);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){var r=n(53),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(49),o=n(30),i=n(42),c=n(19),u=n(18),a=n(23),f=Object.getOwnPropertyDescriptor;e.f=n(1)?f:function(t,e){if(t=i(t),e=c(e,!0),a)try{return f(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(17)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(18),o=n(42),i=n(57)(!1),c=n(45)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)n!=c&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(2),o=n(60),i=n(43),c=n(45)("IE_PROTO"),u=function(){},a=function(){var t,e=n(22)("iframe"),r=i.length;for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[c]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(46),o=n(43);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(46),o=n(43).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(4),o=n(2),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(28)(Function.call,n(44).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){"use strict";var r=n(0),o=n(18),i=n(21),c=n(56),u=n(19),a=n(5),f=n(50).f,s=n(44).f,l=n(6).f,p=n(58).trim,d=r.Number,g=d,h=d.prototype,v="Number"==i(n(47)(h)),y="trim"in String.prototype,x=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,i=(e=y?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var c,a=e.slice(2),f=0,s=a.length;f<s;f++)if((c=a.charCodeAt(f))<48||c>o)return NaN;return parseInt(a,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(v?a((function(){h.valueOf.call(n)})):"Number"!=i(n))?c(new g(x(e)),n,d):x(e)};for(var m,b=n(1)?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;b.length>_;_++)o(g,m=b[_])&&!o(d,m)&&l(d,m,s(g,m));d.prototype=h,h.constructor=d,n(14)(r,"Number",d)}},function(t,e,n){var r=n(4),o=n(52).set;t.exports=function(t,e,n){var i,c=e.constructor;return c!==n&&"function"==typeof c&&(i=c.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},function(t,e,n){var r=n(42),o=n(16),i=n(54);t.exports=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(12),o=n(7),i=n(5),c=n(59),u="["+c+"]",a=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),s=function(t,e,n){var o={},u=i((function(){return!!c[t]()||"​"!="​"[t]()})),a=o[t]=u?e(l):c[t];n&&(o[n]=a),r(r.P+r.F*u,"String",o)},l=s.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(f,"")),t};t.exports=s},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(6),o=n(2),i=n(48);t.exports=n(1)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),u=c.length,a=0;u>a;)r.f(t,n=c[a++],e[n]);return t}},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(85)},,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(29);var r=function(){var t=this,e=t._self._c;return e("div",{ref:"leTitleBox",staticClass:"l-title-border-one",style:" width:".concat(t.getWidth,"px; height:").concat(t.getHeight,"px;")},[e("svg",{staticClass:"l-border-svg-container",attrs:{width:t.getWidth,height:t.getHeight}},[e("defs",[e("linearGradient",{attrs:{id:"gradient1",x1:"0",x2:"0",y1:"0",y2:"1"}},[e("stop",{attrs:{offset:"0%","stop-color":t.borderColor[0]}}),e("stop",{attrs:{offset:"100%","stop-color":t.borderColor[1]}})],1),e("linearGradient",{attrs:{id:"gradient2"}},[e("stop",{attrs:{offset:"0%","stop-color":t.borderColor[1],"stop-opacity":"0.8"}}),e("stop",{attrs:{offset:"100%","stop-color":t.borderColor[0],"stop-opacity":"0.5"}})],1),e("animate",{attrs:{id:"opacityId",attributeName:"fill-opacity",values:"0;1;0",dur:"5s",repeatCount:"indefinite"}})],1),e("g",[e("polygon",{attrs:{fill:"url(#gradient1)",points:"0,0 10,0 20,".concat(t.getHeight," 10,").concat(t.getHeight)}}),e("path",{attrs:{fill:"url(#gradient2)",d:"M 20,0 Q 26,".concat(t.getHeight+2,"  60,").concat(t.getHeight,"  L ").concat(t.getWidth,",").concat(t.getHeight," ").concat(t.getWidth,",0 ")}})]),e("g",[e("polygon",{attrs:{fill:"#6EE2F4",points:"".concat(t.getWidth-15,",").concat(t.getHeight/2," ").concat(t.getWidth-25,",").concat(t.getHeight/2+10," ").concat(t.getWidth-25,",").concat(t.getHeight/2+5," ").concat(t.getWidth-20,",").concat(t.getHeight/2," ").concat(t.getWidth-25,",").concat(t.getHeight/2-5," ").concat(t.getWidth-25,",").concat(t.getHeight/2-10)}},[e("animate",{attrs:{attributeName:"fill-opacity",values:"1;0.2;1",dur:"".concat(t.dur,"s"),repeatCount:"indefinite"}})]),e("polygon",{attrs:{fill:"#ACF5F1",points:"".concat(t.getWidth-25,",").concat(t.getHeight/2," ").concat(t.getWidth-35,",").concat(t.getHeight/2+10," ").concat(t.getWidth-35,",").concat(t.getHeight/2+5," ").concat(t.getWidth-30,",").concat(t.getHeight/2," ").concat(t.getWidth-35,",").concat(t.getHeight/2-5," ").concat(t.getWidth-35,",").concat(t.getHeight/2-10)}},[e("animate",{attrs:{attributeName:"fill-opacity",values:"0.2;1;0.2",dur:"".concat(t.dur,"s"),repeatCount:"indefinite"}})])])]),e("div",{staticClass:"title-box-content"},[t._t("default")],2)])};r._withStripped=!0;n(55);var o=n(3),i=n(20),c={name:"LETitleBox1",props:{width:{type:String,default:"400px"},height:{type:String,default:"40px"},backgroundColor:{type:String,default:"transparent"},borderColor:{type:Array,default:function(){return["#5B14DC","#D6C3F7"]}},dur:{type:Number,default:2}},data:function(){return{getWidth:Object(o.a)(this.width,this.$refs.leTitleBox,"width",100),getHeight:Object(o.a)(this.height,this.$refs.leTitleBox,"height",20)}},mounted:function(){var t=this;window.addEventListener("resize",Object(i.a)((function(){t.getWidth=Object(o.a)(t.width,t.$refs.leTitleBox,"width",100),t.getHeight=Object(o.a)(t.height,t.$refs.leTitleBox,"height",20)}),1e3))},beforeDestroy:function(){window.removeEventListener("resize",i.a)}},u=(n(138),n(13)),a=Object(u.a)(c,r,[],!1,null,"f095f4a6",null).exports;a.install=function(t){t.component(a.name,a)};e.default=a}]).default}));
//# sourceMappingURL=index.js.map