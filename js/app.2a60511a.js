(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3545a6f9"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("fffd"),transition:"scale-transition",width:"70"}}),r("span",{staticClass:"mr-2"},[t._v("B.CARCAMO")])],1),r("v-spacer")],1),r("v-content",[r("Inicio")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-2",attrs:{src:n("6857"),contain:"",height:"250"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2  mb-3"},[t._v(" Carcamo Tutoriales ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" Blog dedicado sobre instalación de software en el entorno Gnu/Linux. ")])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("v-row",{attrs:{justify:"center"}},[r("v-btn",{attrs:{rounded:"",color:"primary",dark:""}},[t._v("Acceder")])],1)],1)],1)],1)},c=[],s={name:"Inicio",data:function(){return{}}},u=s,l=n("2877"),p=n("6544"),f=n.n(p),d=n("8336"),m=n("62ad"),v=n("a523"),b=n("adda"),g=n("0fd9"),h=Object(l["a"])(u,i,c,!1,null,null,null),y=h.exports;f()(h,{VBtn:d["a"],VCol:m["a"],VContainer:v["a"],VImg:b["a"],VRow:g["a"]});var w={name:"App",components:{Inicio:y},data:function(){return{}}},C=w,j=n("7496"),_=n("40dc"),x=n("a75b"),O=n("2fa4"),V=Object(l["a"])(C,o,a,!1,null,null,null),A=V.exports;f()(V,{VApp:j["a"],VAppBar:_["a"],VContent:x["a"],VImg:b["a"],VSpacer:O["a"]});n("d3b7");var P=n("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Inicio",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},I=[],E={name:"Home",components:{Inicio:y}},S=E,T=Object(l["a"])(S,k,I,!1,null,null,null),M=T.exports;r["a"].use(P["a"]);var B=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],L=new P["a"]({mode:"history",base:"/",routes:B}),$=L,H=n("f309");r["a"].use(H["a"]);var J=new H["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:$,vuetify:J,render:function(t){return t(A)}}).$mount("#app")},6857:function(t,e,n){t.exports=n.p+"img/img-home.1e8ef79d.svg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},fffd:function(t,e,n){t.exports=n.p+"img/img-titulo.339fbbc0.svg"}});
//# sourceMappingURL=app.2a60511a.js.map