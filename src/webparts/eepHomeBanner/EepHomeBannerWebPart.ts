import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepHomeBannerWebPart.module.scss';
import * as strings from 'EepHomeBannerWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepHomeBannerWebPartProps {
  description: string;
}

export default class EepHomeBannerWebPart extends BaseClientSideWebPart<IEepHomeBannerWebPartProps> {

  public render(): void {

    console.log("EepHomeBannerWebPart render() called");

    const webServerRelativeUrl:string = this.context.pageContext.legacyPageContext['webServerRelativeUrl'];

    this.domElement.innerHTML = `
    <div id="EEPHomeBannerWPContainer">
      <div id="EEPHomeBannerWP">
        <div class="main-box col-md-12 col-lg-12 no-padding">
          <div class="carousel slide hslider" data-ride="carousel" id="carouselExampleIndicators">
            <ol class="carousel-indicators">
              <li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
            </ol>
            <div class="carousel-inner" id="divSlider">
              <div class="carousel-item active">
                <img class='d-block w-100' src='${webServerRelativeUrl}/Style Library/Custom/img/Mask Group 7.png'>
                <p class="banner-text">NO BANNER</p>
              </div>
            </div>
            <a class="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button">
              <span aria-hidden="true" class="carousel-control-prev-icon"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button">
              <span aria-hidden="true" class="carousel-control-next-icon"></span>
              <span class="sr-only">Next</span>
            </a>
          </div> 
        </div>
      </div>
    </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

  protected onInit(): Promise<void> {
    
    console.log("EepHomeBannerWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
