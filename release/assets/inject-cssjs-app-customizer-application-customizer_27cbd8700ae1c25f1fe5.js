define("a5e4fbaa-5f71-4a4f-93d1-94e60a96f34b_0.0.1",["@microsoft/sp-application-base","@microsoft/sp-loader","@microsoft/sp-core-library","InjectCssjsAppCustomizerApplicationCustomizerStrings","@microsoft/decorators"],function(e,t,o,n,s){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="OQ3I")}({GPet:function(t,o){t.exports=e},I6O9:function(e,o){e.exports=t},OQ3I:function(e,t,o){"use strict";o.r(t);var n,s=o("wxtz"),r=o("UWqr"),a=o("GPet"),i=o("wqBJ"),l=o("I6O9"),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.onInit=function(){var e=this;r.Log.info("InjectCssjsAppCustomizerApplicationCustomizer","Initialized "+i.Title),console.log("InjectCssjsAppCustomizerApplicationCustomizer onInit() called");var t=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/img/gep_fav.jpg";if(t){var o=document.querySelector("link[rel*='icon']")||document.createElement("link");o.setAttribute("type","image/x-icon"),o.setAttribute("rel","shortcut icon"),o.setAttribute("href",t),document.getElementsByTagName("head")[0].appendChild(o)}var n=document.getElementsByTagName("body")[0]||document.documentElement,s=this.context.pageContext.legacyPageContext.siteAbsoluteUrl,a=document.createElement("div");a.id="div_siteAbsoluteUrl",a.innerText=s,a.style.display="none",n.appendChild(a);var c=this.context.pageContext.legacyPageContext.siteServerRelativeUrl,p=document.createElement("div");p.id="div_siteServerRelativeUrl",p.innerText=c,p.style.display="none",n.appendChild(p);var u=this.context.pageContext.legacyPageContext.systemUserKey,d=document.createElement("div");d.id="div_systemUserKey",d.innerText=u,d.style.display="none",n.appendChild(d);var m=this.context.pageContext.legacyPageContext.userDisplayName,C=document.createElement("div");C.id="div_userDisplayName",C.innerText=m,C.style.display="none",n.appendChild(C);var b=this.context.pageContext.legacyPageContext.userEmail,y=document.createElement("div");y.id="div_userEmail",y.innerText=b,y.style.display="none",n.appendChild(y);var x=this.context.pageContext.legacyPageContext.userId,S=document.createElement("div");S.id="div_userId",S.innerText=x,S.style.display="none",n.appendChild(S);var g=this.context.pageContext.legacyPageContext.userLoginName,L=document.createElement("div");L.id="div_userLoginName",L.innerText=g,L.style.display="none",n.appendChild(L);var j=this.context.pageContext.legacyPageContext.webAbsoluteUrl,h=document.createElement("div");h.id="div_webAbsoluteUrl",h.innerText=j,h.style.display="none",n.appendChild(h);var f=this.context.pageContext.legacyPageContext.webServerRelativeUrl,v=document.createElement("div");v.id="div_webServerRelativeUrl",v.innerText=f,v.style.display="none",n.appendChild(v);var w=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/O365_Custom.css",P=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/bootstrap.min.css",U=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/style.css",_=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/theme.css",E=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/responsive.css",O=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/owl.carousel.min.css",T=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/owl.theme.min.css",q=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/jquery.mCustomScrollbar.css",A=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/all.min.css",I=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/fontawesome.min.css",z=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/bootstrap-datepicker3.min.css",R=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/jquery.tag-editor.css",B=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/jquery-ui.min.css",N=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/jquery.dataTables.min.css",k=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/emojionearea.min.css",M=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/bootstrap-select.min.css",D=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/ui.easytree.css",G=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/select2.min.css",J=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/css/atwho.css";l.SPComponentLoader.loadCss(w),l.SPComponentLoader.loadCss(P),l.SPComponentLoader.loadCss(U),l.SPComponentLoader.loadCss(_),l.SPComponentLoader.loadCss(E),l.SPComponentLoader.loadCss(O),l.SPComponentLoader.loadCss(T),l.SPComponentLoader.loadCss(q),l.SPComponentLoader.loadCss(A),l.SPComponentLoader.loadCss(I),l.SPComponentLoader.loadCss(z),l.SPComponentLoader.loadCss(R),l.SPComponentLoader.loadCss(B),l.SPComponentLoader.loadCss(N),l.SPComponentLoader.loadCss(k),l.SPComponentLoader.loadCss(M),l.SPComponentLoader.loadCss(D),l.SPComponentLoader.loadCss(G),l.SPComponentLoader.loadCss(J);var K=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery-3.6.0.min.js",Q=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery-ui.min.js",W=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/popper.js",H=(this.context.pageContext.web.absoluteUrl,this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/bootstrap.bundle.min.js"),F=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/owl.carousel.min.js",V=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.mCustomScrollbar.concat.min.js",X=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/all.min.js",Y=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/fontawesome.min.js",Z=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/bootstrap-datepicker.js",$=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.tag-editor.min.js",ee=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/asidebar.jquery.js",te=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.dataTables.min.js",oe=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/dataTables.responsive.min.js",ne=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/prodigi.easytree.js",se=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/bootstrap-select.min.js",re=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/scrolltofix.js",ae=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/emojionearea.min.js",ie=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/tinymce.min.js",le=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/select2.min.js",ce=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/moment.min.js",pe=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/bootbox.min.js",ue=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/Gep-core.js",de=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/jquery.cookie.min.js",me=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/Intra.min.js",Ce=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/Configuration.js",be=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/LazyLoadCommon.js",ye=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/jquery.caret.js",xe=this.context.pageContext.web.absoluteUrl+"/Style%20Library/Custom/js/custom/jquery.atwho.js";return l.SPComponentLoader.loadScript(K).then(function(t){l.SPComponentLoader.loadScript(Q),l.SPComponentLoader.loadScript(W).then(function(t){l.SPComponentLoader.loadScript(H).then(function(t){l.SPComponentLoader.loadScript(F),l.SPComponentLoader.loadScript(V),l.SPComponentLoader.loadScript(X),l.SPComponentLoader.loadScript(Y),l.SPComponentLoader.loadScript(Z),l.SPComponentLoader.loadScript($),l.SPComponentLoader.loadScript(ee),l.SPComponentLoader.loadScript(te),l.SPComponentLoader.loadScript(oe),l.SPComponentLoader.loadScript(ne),l.SPComponentLoader.loadScript(se),l.SPComponentLoader.loadScript(re),l.SPComponentLoader.loadScript(ae),l.SPComponentLoader.loadScript(ie),l.SPComponentLoader.loadScript(le),l.SPComponentLoader.loadScript(ce),l.SPComponentLoader.loadScript(pe),l.SPComponentLoader.loadScript(ue),l.SPComponentLoader.loadScript(de),l.SPComponentLoader.loadScript(ye),l.SPComponentLoader.loadScript(xe),l.SPComponentLoader.loadScript(me),l.SPComponentLoader.loadScript(Ce).then(function(t){l.SPComponentLoader.loadScript(be).then(function(t){var o=document.createElement("div");o.id="divAppExtRender",document.getElementsByTagName("body")[0].appendChild(o),e.context.application.navigatedEvent.add(e,function(){console.log("navigatedEvent Called");var e=document.createElement("script");e.text="CallLazyLoadCommon();",e.type="text/javascript",document.getElementById("divAppExtRender").innerHTML="",document.getElementById("divAppExtRender").appendChild(e)})})})})})}),Promise.resolve()},function(e,t,o,n){var s,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([s.override],t.prototype,"onInit",null),t}(a.BaseApplicationCustomizer);t.default=p},UWqr:function(e,t){e.exports=o},wqBJ:function(e,t){e.exports=n},wxtz:function(e,t){e.exports=s}})});