(window.webpackJsonp=window.webpackJsonp||[]).push([[17,25],{275:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return p})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return b}));n(118),n(13),n(18),n(62),n(40);const r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function l(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function p(t,e,n,r){const{pages:i,themeConfig:a}=n,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return m(t);const o=s.sidebar||a.sidebar;if(o){const{base:n,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return"auto"===r?m(t):r?r.map(t=>function t(e,n,r,i=1){if("string"==typeof e)return d(n,e,r);if(Array.isArray(e))return Object.assign(d(n,e[0],r),{title:e[1]});{const a=e.children||[];return 0===a.length&&e.path?Object.assign(d(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function m(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},277:function(t,e,n){"use strict";n.r(e);n(13),n(61);var r=n(275),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=n(17),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=s.exports},289:function(t,e,n){},307:function(t,e,n){"use strict";n(289)},324:function(t,e,n){"use strict";n.r(e);var r={name:"Home",components:{NavLink:n(277).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(307),n(17)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):n("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);