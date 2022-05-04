define("8881fb46-6eab-4e15-b4c3-f2610c3dbb51_0.0.1",["@microsoft/sp-property-pane","EepHomeWebPartStrings","@microsoft/sp-core-library","@microsoft/sp-webpart-base"],function(t,n,i,e){return function(t){var n={};function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=n,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s="8RAr")}({"26ea":function(n,i){n.exports=t},"8RAr":function(t,n,i){"use strict";i.r(n);var e,o=i("UWqr"),s=i("26ea"),a=i("br4S"),r=i("KLlU"),d=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(t,n)},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return d(n,t),n.prototype.render=function(){console.log("EepHomeWebPart render() called");var t=this.context.pageContext.legacyPageContext.webServerRelativeUrl;this.domElement.innerHTML='\n\t<div class="min-height">\n\t<section class="main_content">\n\t<div class="container">\n        <div class="row">\n\n            <div class="col-lg-8 col-md-8 lhs_panel">\n\n\t\t\t\t<div id="EEPHomeBannerWPContainer">\n\t\t\t\t<div id="EEPHomeBannerWP">\n\t\t\t\t<div class="main-box col-md-12 col-lg-12 no-padding">\n\t\t\t\t\t<div class="carousel slide hslider" data-ride="carousel" id="carouselExampleIndicators">\n\t\t\t\t\t<ol class="carousel-indicators">\n\t\t\t\t\t\t<li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<div class="carousel-inner" id="divSlider">\n\t\t\t\t\t\t<div class="carousel-item active">\n\t\t\t\t\t\t<a href="javascript:void(0);">\n\t\t\t\t\t\t<img class=\'d-block w-100\' src=\''+t+'/Style Library/Custom/img/no_banner_gep.jpg\'>\n\t\t\t\t\t\t<p class="banner-text">NO BANNER</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button">\n\t\t\t\t\t\t<span aria-hidden="true" class="carousel-control-prev-icon"></span>\n\t\t\t\t\t\t<span class="sr-only">Previous</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button">\n\t\t\t\t\t\t<span aria-hidden="true" class="carousel-control-next-icon"></span>\n\t\t\t\t\t\t<span class="sr-only">Next</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</div> \n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t <div id="EEPHomePostFeedWPContainer">\n\t\t\t\t <div id="EEPHomePostFeedWP">\n\t\t\t\t </div>\n\t\t\t\t </div>\n\n\t\t\t\t<div id="EEPHomeFeedsWPContainer">\n\t\t\t\t\t<div class="row mt-2">\n\t\t\t\t\t\t<div class="col-lg-12 col-md-12 mt-4">\n\t\t\t\t\t\t<button class="btn btn-grey-bordered" id="btnGlobalFeeds">Global</button>\n\t\t\t\t\t\t<button class="btn btn-grey-bordered ml-2" id="btnFunctionFeeds">Function</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t  \t<div id="divFeedsScroll">\n\t\t\t\t  \t\t<div id="EEPHomeFeedsWP">\n\t\t\t\t\t\t\t<div class="col-lg-12 col-md-12 col-sm-12 p-0 section-box">\n\t\t\t\t\t\t\t\t<div class="no-data text-center position-relative">\n\t\t\t\t\t\t\t\t\t<span><i class="far fa-smile-beam"></i></span>\n\t\t\t\t\t\t\t\t\t<span class="no-data-text text-blue font-weight-bold"><p pNoDataFeeds>Loading Feeds</p></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t  \t\t\t</div>\n\t\t\t\t  \t\t</div>\n\t\t\t\t  \t</div>\n\t\t\t\t  \t<div class="load-more-block" id="divLoadMoreFeeds">\n\t\t\t\t\t\t<div class="more-box examples">\n\t\t\t\t\t\t\t<div class="" data-title=".dot-flashing">\n\t\t\t\t\t\t\t\t<div class="stage">\n\t\t\t\t\t\t\t\t\t<div class="dot-flashing"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t  \t</div>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class="col-lg-4 col-md-4 rhs_panel_desktop">\n\n\t\t\t\t<div id="EEPHomeUserProfileWPContainer">\n\t\t\t\t\t<div id="EEPHomeUserProfileWP">\n\t\t\t\t\t\t<div class="main-box col-md-12 col-lg-12 no-padding overflowHidden">\n\t\t\t\t\t\t\t<div class="profile-info">\n\t\t\t\t\t\t\t<div class="profile-bg-banner">\n\t\t\t\t\t\t\t<div class="user-img">\n\t\t\t\t\t\t\t\t<img id="imgMyPhoto" src="'+t+'/Style Library/Custom/img/default_profile_img.jpg">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="user-info text-center">\n\t\t\t\t\t\t\t\t<div class="user-name"><h4 id="h4MyName"></h4></div>\n\t\t\t\t\t\t\t\t<div class="user-designation font-italic" id="divMyJobTitle"></div>\n\t\t\t\t\t\t\t\t<div class="country font-italic" id="divMyCountry"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="user-desc pt-0">\n\t\t\t\t\t\t\t<h5 class="font-weight-600">Description</h5>\n\t\t\t\t\t\t\t<div class="box-blue">\n\t\t\t\t\t\t\t\t<p class="truncate-4-line w-100 h-80px mb-0 text-muted" id="pMyDescription">\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="pt-3">\n\t\t\t\t\t\t\t<button class="btn btn-blue" id="btnViewMyProfile">View Profile</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="EEPHomeQuickLinksWPContainer">\n\t\t\t\t\t<div class="main-box col-md-12 col-lg-12 rhs-box pb-3" id="quickData">\n\t\t\t\t\t\t<div class="">\n\t\t\t\t\t\t\t<img src="'+t+'/Style Library/Custom/img/Group 279.svg" class="img-fluid box-icon">\n\t\t\t\t\t\t\t<span class="box-title">Quick Links</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id="EEPHomeQuickLinksWP">\n\t\t\t\t\t\t\t<div class="list mt-3 mCustomScrollbar height-197px">\n\t\t\t\t\t\t\t\t<div class="no-data text-center position-relative">\n\t\t\t\t\t\t\t\t\t<span><i class="far fa-smile-beam"></i></span>\n\t\t\t\t\t\t\t\t\t<span class="no-data-text text-blue font-weight-bold"><p id="pNoDataQuickLinks">Loading Quick Links</p></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="EEPHomeJobJarWPContainer">\n\t\t\t\t\t<div class="main-box col-md-12 col-lg-12 rhs-box pb-3 scroll-to-fix">\n\t\t\t\t\t\t<div class="position-relative">\n\t\t\t\t\t\t\t<img src="'+t+'/Style Library/Custom/img/job-jar-icon.png" class="img-fluid box-icon">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id="EEPHomeJobJarWP">\n\t\t\t\t\t\t\t<div class="list mt-3 mCustomScrollbar height-450px mt-2">\n\t\t\t\t\t\t\t\t<div class="">\n\t\t\t\t\t\t\t\t\t<div class="no-data text-center position-relative">\n\t\t\t\t\t\t\t\t\t\t<span><i class="far fa-smile-beam"></i></span>\n\t\t\t\t\t\t\t\t\t\t<span class="no-data-text text-blue font-weight-bold"><p pNoDataJobJar>Loading Job Jar</p></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t</div>\n    </div>\n\t<div class="floating-icon">\n        <a href="javascript:void(0);" class="three_dots"><i class="fas fa-ellipsis-h"></i></a>\n    </div>\n\n\t</section>\n\t</div>'},Object.defineProperty(n.prototype,"dataVersion",{get:function(){return o.Version.parse("1.0")},enumerable:!0,configurable:!0}),n.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:r.PropertyPaneDescription},groups:[{groupName:r.BasicGroupName,groupFields:[Object(s.PropertyPaneTextField)("description",{label:r.DescriptionFieldLabel})]}]}]}},n.prototype.onInit=function(){return console.log("EepHomeWebPart onInit() called"),t.prototype.onInit.call(this)},n}(a.BaseClientSideWebPart);n.default=l},KLlU:function(t,i){t.exports=n},UWqr:function(t,n){t.exports=i},br4S:function(t,n){t.exports=e}})});