define("a5e4fbaa-5f71-4a4f-93d1-94e60a96f34b_0.0.1",["@microsoft/sp-application-base","@microsoft/sp-loader","@microsoft/sp-core-library","InjectCssjsAppCustomizerApplicationCustomizerStrings","@microsoft/decorators"],function(t,e,o,n,a){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s="OQ3I")}({GPet:function(e,o){e.exports=t},I6O9:function(t,o){t.exports=e},OQ3I:function(t,e,o){"use strict";o.r(e);var n,a=o("wxtz"),r=o("UWqr"),s=o("GPet"),l=o("wqBJ"),i=o("I6O9"),c=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.onInit=function(){var t=this;r.Log.info("InjectCssjsAppCustomizerApplicationCustomizer","Initialized "+l.Title),console.log("InjectCssjsAppCustomizerApplicationCustomizer onInit() called");var e=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/img/gep_fav.jpg";if(e){var o=document.querySelector("link[rel*='icon']")||document.createElement("link");o.setAttribute("type","image/x-icon"),o.setAttribute("rel","shortcut icon"),o.setAttribute("href",e),document.getElementsByTagName("head")[0].appendChild(o)}var n=document.getElementsByTagName("body")[0]||document.documentElement,a=this.context.pageContext.legacyPageContext.siteAbsoluteUrl,s=document.createElement("div");s.id="div_siteAbsoluteUrl",s.innerText=a,s.style.display="none",n.appendChild(s);var c=this.context.pageContext.legacyPageContext.siteServerRelativeUrl,p=document.createElement("div");p.id="div_siteServerRelativeUrl",p.innerText=c,p.style.display="none",n.appendChild(p);var u=this.context.pageContext.legacyPageContext.systemUserKey,b=document.createElement("div");b.id="div_systemUserKey",b.innerText=u,b.style.display="none",n.appendChild(b);var d=this.context.pageContext.legacyPageContext.userDisplayName,x=document.createElement("div");x.id="div_userDisplayName",x.innerText=d,x.style.display="none",n.appendChild(x);var C=this.context.pageContext.legacyPageContext.userEmail,m=document.createElement("div");m.id="div_userEmail",m.innerText=C,m.style.display="none",n.appendChild(m);var y=this.context.pageContext.legacyPageContext.userId,g=document.createElement("div");g.id="div_userId",g.innerText=y,g.style.display="none",n.appendChild(g);var h=this.context.pageContext.legacyPageContext.userLoginName,S=document.createElement("div");S.id="div_userLoginName",S.innerText=h,S.style.display="none",n.appendChild(S);var f=this.context.pageContext.legacyPageContext.webAbsoluteUrl,w=document.createElement("div");w.id="div_webAbsoluteUrl",w.innerText=f,w.style.display="none",n.appendChild(w);var U=this.context.pageContext.legacyPageContext.webServerRelativeUrl,v=document.createElement("div");v.id="div_webServerRelativeUrl",v.innerText=U,v.style.display="none",n.appendChild(v);var j=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/O365_Custom.css",L=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/bootstrap.min.css",P=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/style.css",_=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/theme.css",E=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/responsive.css",O=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/CustomCSSBundle.css");this.context.pageContext.web.absoluteUrl,i.SPComponentLoader.loadCss(j),i.SPComponentLoader.loadCss(L),i.SPComponentLoader.loadCss(O),i.SPComponentLoader.loadCss(_),i.SPComponentLoader.loadCss(P),i.SPComponentLoader.loadCss(E),this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl;var A=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/popper.js",T=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/bootstrap.bundle.min.js"),I=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.mCustomScrollbar.concat.min.js"),z=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.dataTables.min.js"),B=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/dataTables.responsive.min.js",q=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/bootstrap-select.min.js"),R=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/emojionearea.min.js"),N=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/select2.min.js"),J=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/moment.min.js",M=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.cookie.min.js"),k=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/Intra.min.js",D=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/Configuration.js",G=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/LazyLoadCommon.js",K=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.caret.js",Q=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.atwho.js",W=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/Chart.min.js"),H=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/JqueryJSBundle.min.js"),F=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/Custom1JsBundle.min.js",V=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/Custom2JsBundle.min.js";return i.SPComponentLoader.loadScript(H).then(function(e){i.SPComponentLoader.loadScript(A).then(function(e){i.SPComponentLoader.loadScript(T).then(function(e){i.SPComponentLoader.loadScript(F).then(function(e){i.SPComponentLoader.loadScript(I),i.SPComponentLoader.loadScript(V).then(function(e){i.SPComponentLoader.loadScript(z),i.SPComponentLoader.loadScript(B),i.SPComponentLoader.loadScript(q),i.SPComponentLoader.loadScript(R),i.SPComponentLoader.loadScript(N),i.SPComponentLoader.loadScript(J),i.SPComponentLoader.loadScript(M),i.SPComponentLoader.loadScript(K),i.SPComponentLoader.loadScript(Q),i.SPComponentLoader.loadScript(W),i.SPComponentLoader.loadScript(k),i.SPComponentLoader.loadScript(D).then(function(e){i.SPComponentLoader.loadScript(G).then(function(e){var o=document.createElement("div");o.id="divAppExtRender",document.getElementsByTagName("body")[0].appendChild(o),t.context.application.navigatedEvent.add(t,function(){console.log("navigatedEvent Called");var t=document.createElement("script");t.text="CallLazyLoadCommon();",t.type="text/javascript",document.getElementById("divAppExtRender").innerHTML="",document.getElementById("divAppExtRender").appendChild(t)})})})})})})})}),Promise.resolve()},function(t,e,o,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(r<3?a(s):r>3?a(e,o,s):a(e,o))||s);r>3&&s&&Object.defineProperty(e,o,s)}([a.override],e.prototype,"onInit",null),e}(s.BaseApplicationCustomizer);e.default=p},UWqr:function(t,e){t.exports=o},wqBJ:function(t,e){t.exports=n},wxtz:function(t,e){t.exports=a}})});