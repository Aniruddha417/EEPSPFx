import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepHomeJobJarWebPart.module.scss';
import * as strings from 'EepHomeJobJarWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepHomeJobJarWebPartProps {
  description: string;
}

export default class EepHomeJobJarWebPart extends BaseClientSideWebPart<IEepHomeJobJarWebPartProps> {

  public render(): void {

    console.log("EepHomeJobJarWebPart render() called");

    const webServerRelativeUrl:string = this.context.pageContext.legacyPageContext['webServerRelativeUrl'];

    this.domElement.innerHTML = `
    <div id="EEPHomeJobJarWPContainer">
      <div class="main-box col-md-12 col-lg-12 rhs-box pb-3 scroll-to-fix">
        <div class="">
          <img src="${webServerRelativeUrl}/Style Library/Custom/img/Group 280.svg" class="img-fluid box-icon">
          <span class="box-title">Job Jar</span>
        </div>
      </div>
      <div id="EEPHomeJobJarWP">
        <div class="min-height">
          <div class="no-data text-center">
            <span><i class="far fa-smile-beam "></i></span>
            <span class="no-data-text text-blue font-weight-bold"><p>Loading Job Jar</p></span>
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
    
    console.log("EepHomeJobJarWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}
}
