!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("loader-one",[],e):"object"==typeof exports?exports["loader-one"]=e():t["loader-one"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=148)}({0:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},1:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},13:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,a){var c,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=c):o&&(c=a?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var s=f.render;f.render=function(t,e){return c.call(e),s(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},148:function(t,e,n){"use strict";n.r(e);n(29);var r=function(){var t=this._self._c;return t("div",{staticClass:"l-loading-one"},[t("svg",{attrs:{width:"50px",height:"50px"}},[t("circle",{attrs:{cx:"25",cy:"25",r:"20",fill:"transparent","stroke-width":"3","stroke-dasharray":"31.415, 31.415",stroke:this.backgroundColor[0],"stroke-linecap":"round"}},[t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"0, 25 25;360, 25 25",dur:"1.5s",repeatCount:"indefinite"}})],1),t("circle",{attrs:{cx:"25",cy:"25",r:"10",fill:"transparent","stroke-width":"3","stroke-dasharray":"15.7, 15.7",stroke:this.backgroundColor[1],"stroke-linecap":"round"}},[t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"360, 25 25;0, 25 25",dur:"1.5s",repeatCount:"indefinite"}})],1)]),t("div",{staticClass:"loading-tip",style:"color:".concat(this.textColor)},[this._t("default")],2)])};r._withStripped=!0;var o={name:"LELoading1",props:{backgroundColor:{type:Array,default:function(){return["#511BD6","#A98CFA"]}},textColor:{type:String,default:"#DCEFED"}}},i=(n(95),n(13)),u=Object(i.a)(o,r,[],!1,null,null,null).exports;u.install=function(t){t.component(u.name,u)};e.default=u},19:function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},2:function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},22:function(t,e,n){var r=n(4),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},23:function(t,e,n){t.exports=!n(1)&&!n(5)((function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a}))},29:function(t,e,n){var r=n(6).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(1)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},4:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},6:function(t,e,n){var r=n(2),o=n(23),i=n(19),u=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},70:function(t,e,n){},95:function(t,e,n){"use strict";n(70)}}).default}));
//# sourceMappingURL=index.js.map