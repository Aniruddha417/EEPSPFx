import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'InjectCssjsAppCustomizerApplicationCustomizerStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

const LOG_SOURCE: string = 'InjectCssjsAppCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IInjectCssjsAppCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class InjectCssjsAppCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IInjectCssjsAppCustomizerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    console.log("InjectCssjsAppCustomizerApplicationCustomizer onInit() called");

    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    //Shortcut Icon - Favicon
    let faviconurl: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/img/gep_fav.jpg";
     if (faviconurl) {
         var link = document.querySelector("link[rel*='icon']") as HTMLElement || document.createElement('link') as HTMLElement;
         link.setAttribute('type', 'image/x-icon');
         link.setAttribute('rel', 'shortcut icon');
         link.setAttribute('href', faviconurl);
         document.getElementsByTagName('head')[0].appendChild(link);
    }

    //Body Tag
    const body: any = document.getElementsByTagName("body")[0] || document.documentElement;

    //This is how you can access the page context info
     //Fetch properties from legacyPageContext
     //this.context.pageContext.legacyPageContext;

     //siteAbsoluteUrl 
     const siteAbsoluteUrl:string = this.context.pageContext.legacyPageContext['siteAbsoluteUrl'];
     var siteAbsoluteUrlDiv = <HTMLDivElement>(document.createElement('div'));
     siteAbsoluteUrlDiv.id="div_siteAbsoluteUrl";
     siteAbsoluteUrlDiv.innerText=siteAbsoluteUrl;
     siteAbsoluteUrlDiv.style.display="none";
     body.appendChild(siteAbsoluteUrlDiv);

     //siteServerRelativeUrl 
     const siteServerRelativeUrl:string = this.context.pageContext.legacyPageContext['siteServerRelativeUrl'];
     var siteServerRelativeUrlDiv = <HTMLDivElement>(document.createElement('div'));
     siteServerRelativeUrlDiv.id="div_siteServerRelativeUrl";
     siteServerRelativeUrlDiv.innerText=siteServerRelativeUrl;
     siteServerRelativeUrlDiv.style.display="none";
     body.appendChild(siteServerRelativeUrlDiv);

     //systemUserKey
     const systemUserKey:string = this.context.pageContext.legacyPageContext['systemUserKey'];
     var systemUserKeyDiv = <HTMLDivElement>(document.createElement('div'));
     systemUserKeyDiv.id="div_systemUserKey";
     systemUserKeyDiv.innerText=systemUserKey;
     systemUserKeyDiv.style.display="none";
     body.appendChild(systemUserKeyDiv);

     //userDisplayName
     const userDisplayName:string = this.context.pageContext.legacyPageContext['userDisplayName'];
     var userDisplayNameDiv = <HTMLDivElement>(document.createElement('div'));
     userDisplayNameDiv.id="div_userDisplayName";
     userDisplayNameDiv.innerText=userDisplayName;
     userDisplayNameDiv.style.display="none";
     body.appendChild(userDisplayNameDiv);

     //userEmail
     const userEmail:string = this.context.pageContext.legacyPageContext['userEmail'];
     var userEmailDiv = <HTMLDivElement>(document.createElement('div'));
     userEmailDiv.id="div_userEmail";
     userEmailDiv.innerText=userEmail;
     userEmailDiv.style.display="none";
     body.appendChild(userEmailDiv);

     //userId
     const userId:string = this.context.pageContext.legacyPageContext['userId'];
     var userIdDiv = <HTMLDivElement>(document.createElement('div'));
     userIdDiv.id="div_userId";
     userIdDiv.innerText=userId;
     userIdDiv.style.display="none";
     body.appendChild(userIdDiv);

     //userLoginName
     const userLoginName:string = this.context.pageContext.legacyPageContext['userLoginName'];
     var userLoginNameDiv = <HTMLDivElement>(document.createElement('div'));
     userLoginNameDiv.id="div_userLoginName";
     userLoginNameDiv.innerText=userLoginName;
     userLoginNameDiv.style.display="none";
     body.appendChild(userLoginNameDiv);

     //webAbsoluteUrl
     const webAbsoluteUrl:string = this.context.pageContext.legacyPageContext['webAbsoluteUrl'];
     var webAbsoluteUrlDiv = <HTMLDivElement>(document.createElement('div'));
     webAbsoluteUrlDiv.id="div_webAbsoluteUrl";
     webAbsoluteUrlDiv.innerText=webAbsoluteUrl;
     webAbsoluteUrlDiv.style.display="none";
     body.appendChild(webAbsoluteUrlDiv);

     //webServerRelativeUrl
     const webServerRelativeUrl:string = this.context.pageContext.legacyPageContext['webServerRelativeUrl'];
     var webServerRelativeUrlDiv = <HTMLDivElement>(document.createElement('div'));
     webServerRelativeUrlDiv.id="div_webServerRelativeUrl";
     webServerRelativeUrlDiv.innerText=webServerRelativeUrl;
     webServerRelativeUrlDiv.style.display="none";
     body.appendChild(webServerRelativeUrlDiv);

    //Add Loader
    // var loaderDiv = <HTMLDivElement>(document.createElement('div'));
    // loaderDiv.className="loader";
    // loaderDiv.innerHTML = `<div class="spinner-border" role="status"></div>`;                  
    // body.appendChild(loaderDiv);

    //Load Common CSS
    const _CSSUrl_O365Custom: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/O365_Custom.css";
    const _CSSUrl_BootstrapMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/bootstrap.min.css";
    // const _CSSUrl_FormElement: string = this.context.pageContext.web.absoluteUrl+
    // "/Style%20Library/Custom/css/form-element.css";
    const _CSSUrl_Style: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/style.css";
    const _CSSUrl_Theme: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/theme.css";
    const _CSSUrl_Responsive: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/responsive.css";  
    const _CSSUrl_OwlCarouselMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/owl.carousel.min.css";
    const _CSSUrl_OwlThemeMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/owl.theme.min.css";
    const _CSSUrl_JqueryMcCstomScroll: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/jquery.mCustomScrollbar.css";
    const _CSSUrl_AllMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/all.min.css";
    const _CSSUrl_FontAwesomeMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/fontawesome.min.css";
    const _CSSUrl_BootstrapDatepicker3Min: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/bootstrap-datepicker3.min.css";
    const _CSSUrl_JqueryTagEditor: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/jquery.tag-editor.css";
    const _CSSUrl_JqueryUIMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/jquery-ui.min.css";
    const _CSSUrl_JqueryDataTableMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/jquery.dataTables.min.css";
    const _CSSUrl_EmojiOneArea: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/emojionearea.min.css";
    const _CSSUrl_BootstrapSelectMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/bootstrap-select.min.css";
    const _CSSUrl_EasyTree: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/ui.easytree.css";
    const _CSSUrl_Select2Min: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/select2.min.css";
    const _CSSUrl_AtWho: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/atwho.css";
    const _CSSUrl_FontAwesome: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/font-awesome.css";
    const _CSSUrl_ResponsiveDataTable: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/responsive.dataTables.min.css";
    const _CSSUrl_CustomCSSBundle: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/CustomCSSBundle.css";
    const _CSSUrl_CustomCSSBundle2: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/css/CustomCSSBundle1.css";
    
    // SPComponentLoader.loadCss(_CSSUrl_O365Custom);
    // SPComponentLoader.loadCss(_CSSUrl_BootstrapMin);
    // //SPComponentLoader.loadCss(_CSSUrl_FormElement);
    // // SPComponentLoader.loadCss(_CSSUrl_Style);
    // // SPComponentLoader.loadCss(_CSSUrl_Theme);
    // // SPComponentLoader.loadCss(_CSSUrl_Responsive);
    // SPComponentLoader.loadCss(_CSSUrl_OwlCarouselMin);
    // SPComponentLoader.loadCss(_CSSUrl_OwlThemeMin);
    // SPComponentLoader.loadCss(_CSSUrl_JqueryMcCstomScroll);
    // SPComponentLoader.loadCss(_CSSUrl_AllMin);
    // //SPComponentLoader.loadCss(_CSSUrl_FontAwesomeMin);
    // SPComponentLoader.loadCss(_CSSUrl_FontAwesome);
    // SPComponentLoader.loadCss(_CSSUrl_BootstrapDatepicker3Min);
    // SPComponentLoader.loadCss(_CSSUrl_JqueryTagEditor);
    // SPComponentLoader.loadCss(_CSSUrl_JqueryUIMin);
    // SPComponentLoader.loadCss(_CSSUrl_JqueryDataTableMin);
    // SPComponentLoader.loadCss(_CSSUrl_ResponsiveDataTable);
    // SPComponentLoader.loadCss(_CSSUrl_EmojiOneArea);
    // SPComponentLoader.loadCss(_CSSUrl_BootstrapSelectMin);
    // SPComponentLoader.loadCss(_CSSUrl_EasyTree);
    // SPComponentLoader.loadCss(_CSSUrl_Select2Min);
    // SPComponentLoader.loadCss(_CSSUrl_AtWho);
    // SPComponentLoader.loadCss(_CSSUrl_Theme);
    // SPComponentLoader.loadCss(_CSSUrl_Style);
    // SPComponentLoader.loadCss(_CSSUrl_Responsive);

    //After Bundling
	  SPComponentLoader.loadCss(_CSSUrl_O365Custom);
	  SPComponentLoader.loadCss(_CSSUrl_BootstrapMin);
    SPComponentLoader.loadCss(_CSSUrl_CustomCSSBundle);
    //SPComponentLoader.loadCss(_CSSUrl_CustomCSSBundle2);


      SPComponentLoader.loadCss(_CSSUrl_Theme);
      SPComponentLoader.loadCss(_CSSUrl_Style);
      SPComponentLoader.loadCss(_CSSUrl_Responsive);
	  
	
	  


     //Load Common JS
     const _JSUrl_Jquery: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery-3.6.0.min.js";
    const _JSUrl_JqueryUI: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery-ui.min.js";
    const _JSUrl_Popper: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/popper.js";
    const _JSUrl_BootstrapMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/bootstrap.min.js";
    const _JSUrl_BootstrapBundleMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/bootstrap.bundle.min.js";
    const _JSUrl_OwlCarouselMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/owl.carousel.min.js";
    const _JSUrl_JqueryMCustomScroll: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery.mCustomScrollbar.concat.min.js";
    const _JSUrl_AllMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/all.min.js";
    const _JSUrl_FontAwesomeMin: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/fontawesome.min.js";
    const _JSUrl_BootstrapDatepicker:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/bootstrap-datepicker.js";
    const _JSUrl_JqueryTagEditor: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery.tag-editor.min.js";
    const _JSUrl_Asidebar:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/asidebar.jquery.js";
    const _JSUrl_JqueryDatatableMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery.dataTables.min.js";
    const _JSUrl_DatatableResponsiveMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/dataTables.responsive.min.js";
    const _JSUrl_ProDigiEasyTree:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/prodigi.easytree.js";
    const _JSUrl_BootstrapSelectMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/bootstrap-select.min.js";
    const _JSUrl_ScrollToFix:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/scrolltofix.js";
    const _JSUrl_EmojiOneAreaMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/emojionearea.min.js";  
    const _JSUrl_TinyMce:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/tinymce.min.js";
    const _JSUrl_Select2Min:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/select2.min.js";
     const _JSUrl_MomentMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/moment.min.js";  
    const _JSUrl_BootboxMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/bootbox.min.js";
    const _JSUrl_GEPCore: string = this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/Gep-core.js";
    const _JSUrl_JqueryCookieMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery.cookie.min.js";
    const _JSUrl_IntraMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/custom/Intra.min.js";
    const _JSUrl_Configuration:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/custom/Configuration.js";
    const _JSUrl_LazyLoadCommon:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/custom/LazyLoadCommon.js";
    const _JSUrl_JqueryCaret:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery.caret.js";
    const _JSUrl_AtWho:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/jquery.atwho.js";
    const _JSUrl_JqueryCanvas:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/canvasjs/jquery.canvasjs.min.js";
    const _JSUrl_Canvas:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/canvasjs/canvasjs.min.js";
    const _JSUrl_Chart:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/Chart.min.js";
    const _JSUrl_InputFile:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/input-file.js";
    const _JSUrl_Boot4Alert:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/boot4alert.js";
    
    const _JSUrl_JqueryJSBundleMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/JqueryJSBundle.min.js";
	const _JSUrl_Custom1JsBundleMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/Custom1JsBundle.min.js";
    const _JSUrl_Custom2JsBundleMin:string=this.context.pageContext.web.absoluteUrl+
    "/Style%20Library/Custom/js/Custom2JsBundle.min.js";


    
	SPComponentLoader.loadScript(_JSUrl_JqueryJSBundleMin).then(($: any) =>{
    SPComponentLoader.loadScript(_JSUrl_Popper).then(($: any) =>{
      SPComponentLoader.loadScript(_JSUrl_BootstrapBundleMin).then(($: any) =>{

    SPComponentLoader.loadScript(_JSUrl_Custom1JsBundleMin).then(($: any) =>{
      
      SPComponentLoader.loadScript(_JSUrl_JqueryMCustomScroll);
      
      SPComponentLoader.loadScript(_JSUrl_Custom2JsBundleMin).then(($: any) =>{
        
        SPComponentLoader.loadScript(_JSUrl_JqueryDatatableMin);
        SPComponentLoader.loadScript(_JSUrl_DatatableResponsiveMin);
        SPComponentLoader.loadScript(_JSUrl_BootstrapSelectMin);
        SPComponentLoader.loadScript(_JSUrl_EmojiOneAreaMin);
        SPComponentLoader.loadScript(_JSUrl_Select2Min);
        SPComponentLoader.loadScript(_JSUrl_MomentMin);
        SPComponentLoader.loadScript(_JSUrl_JqueryCookieMin);
        SPComponentLoader.loadScript(_JSUrl_JqueryCaret);
        SPComponentLoader.loadScript(_JSUrl_AtWho);
        
        SPComponentLoader.loadScript(_JSUrl_Chart);
    
        SPComponentLoader.loadScript(_JSUrl_IntraMin);
        SPComponentLoader.loadScript(_JSUrl_Configuration).then(($: any) =>{  

        SPComponentLoader.loadScript(_JSUrl_LazyLoadCommon).then(($: any) =>{ 
  
          var childDiv = <HTMLDivElement>(document.createElement('div'));
          childDiv.id="divAppExtRender";
          document.getElementsByTagName("body")[0].appendChild(childDiv);
  
          this.context.application.navigatedEvent.add(this, () => {
  
            console.log("navigatedEvent Called");
  
            let scriptTag: HTMLScriptElement = document.createElement("script");
            scriptTag.text = `CallLazyLoadCommon();`;
            scriptTag.type = "text/javascript";
            document.getElementById("divAppExtRender").innerHTML = "";
            document.getElementById("divAppExtRender").appendChild(scriptTag);
  
          });//End navigatedEvent 
  
        });//End _JSUrl_LazyLoadCommon

    });//End _JSUrl_Configuration
    
    });//Custom2JSBundle End
    
    });//Custom1JSBundle End
        

      });//End _JSUrl_BootstrapMin

    });//End _JSUrl_Popper

   });//End _JSUrl_Jquery


    //  SPComponentLoader.loadScript(_JSUrl_Jquery).then(($: any) =>{
    //   SPComponentLoader.loadScript(_JSUrl_JqueryUI);
    //   SPComponentLoader.loadScript(_JSUrl_Popper).then(($: any) =>{
    //     SPComponentLoader.loadScript(_JSUrl_BootstrapBundleMin).then(($: any) =>{

    //       SPComponentLoader.loadScript(_JSUrl_OwlCarouselMin);
    //       SPComponentLoader.loadScript(_JSUrl_JqueryMCustomScroll);
    //       SPComponentLoader.loadScript(_JSUrl_AllMin);
    //       SPComponentLoader.loadScript(_JSUrl_FontAwesomeMin);
    //       SPComponentLoader.loadScript(_JSUrl_BootstrapDatepicker);
    //       SPComponentLoader.loadScript(_JSUrl_JqueryTagEditor);
    //       SPComponentLoader.loadScript(_JSUrl_Asidebar); 
    //       SPComponentLoader.loadScript(_JSUrl_JqueryDatatableMin);
    //       SPComponentLoader.loadScript(_JSUrl_DatatableResponsiveMin);
    //       SPComponentLoader.loadScript(_JSUrl_ProDigiEasyTree);
    //       SPComponentLoader.loadScript(_JSUrl_BootstrapSelectMin);
    //       SPComponentLoader.loadScript(_JSUrl_ScrollToFix);
    //       SPComponentLoader.loadScript(_JSUrl_EmojiOneAreaMin);
    //       SPComponentLoader.loadScript(_JSUrl_TinyMce);
    //       SPComponentLoader.loadScript(_JSUrl_Select2Min);
    //       SPComponentLoader.loadScript(_JSUrl_MomentMin);
    //       //SPComponentLoader.loadScript(_JSUrl_BootboxMin);
    //       SPComponentLoader.loadScript(_JSUrl_GEPCore);
    //       SPComponentLoader.loadScript(_JSUrl_JqueryCookieMin);
    //       SPComponentLoader.loadScript(_JSUrl_JqueryCaret);
    //       SPComponentLoader.loadScript(_JSUrl_AtWho);
    //       // SPComponentLoader.loadScript(_JSUrl_JqueryCanvas);
    //       // SPComponentLoader.loadScript(_JSUrl_Canvas);
    //       SPComponentLoader.loadScript(_JSUrl_Chart);
    //       //SPComponentLoader.loadScript(_JSUrl_InputFile);
    //       SPComponentLoader.loadScript(_JSUrl_Boot4Alert);

    //       SPComponentLoader.loadScript(_JSUrl_IntraMin);
    //       SPComponentLoader.loadScript(_JSUrl_Configuration).then(($: any) =>{  

    //         SPComponentLoader.loadScript(_JSUrl_LazyLoadCommon).then(($: any) =>{ 

    //               var childDiv = <HTMLDivElement>(document.createElement('div'));
    //               childDiv.id="divAppExtRender";
    //               document.getElementsByTagName("body")[0].appendChild(childDiv);

    //               this.context.application.navigatedEvent.add(this, () => {

    //                 console.log("navigatedEvent Called");

    //                 let scriptTag: HTMLScriptElement = document.createElement("script");
    //                 scriptTag.text = `CallLazyLoadCommon();`;
    //                 scriptTag.type = "text/javascript";
    //                 document.getElementById("divAppExtRender").innerHTML = "";
    //                 document.getElementById("divAppExtRender").appendChild(scriptTag);

    //               });//End navigatedEvent 

    //          });//End _JSUrl_LazyLoadCommon

    //       });//End _JSUrl_Configuration

    //     });//End _JSUrl_BootstrapMin

    //   });//End _JSUrl_Popper

    //  });//End _JSUrl_Jquery

    return Promise.resolve();
  }
}
