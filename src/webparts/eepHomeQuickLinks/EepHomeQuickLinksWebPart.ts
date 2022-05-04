import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepHomeQuickLinksWebPart.module.scss';
import * as strings from 'EepHomeQuickLinksWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepHomeQuickLinksWebPartProps {
  description: string;
}

export default class EepHomeQuickLinksWebPart extends BaseClientSideWebPart<IEepHomeQuickLinksWebPartProps> {

  public render(): void {

    console.log("EepHomeQuickLinksWebPart render() called");

    const webServerRelativeUrl:string = this.context.pageContext.legacyPageContext['webServerRelativeUrl'];

    this.domElement.innerHTML = `
    <div id="EEPHomeQuickLinksWPContainer">
      <div class="main-box col-md-12 col-lg-12 rhs-box pb-3" id="quickData">
        <div class="">
          <img src="${webServerRelativeUrl}/Style Library/Custom/img/Group 279.svg" class="img-fluid box-icon">
          <span class="box-title">Quick Links</span>
        </div>
      </div>
      <div id="EEPHomeQuickLinksWP">
        <div class="min-height">
          <div class="no-data text-center">
            <span><i class="far fa-smile-beam "></i></span>
            <span class="no-data-text text-blue font-weight-bold"><p>Loading Quick Links</p></span>
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
    
    console.log("EepHomeQuickLinksWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
