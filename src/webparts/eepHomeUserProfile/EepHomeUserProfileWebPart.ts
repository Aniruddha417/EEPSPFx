import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepHomeUserProfileWebPart.module.scss';
import * as strings from 'EepHomeUserProfileWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepHomeUserProfileWebPartProps {
  description: string;
}

export default class EepHomeUserProfileWebPart extends BaseClientSideWebPart<IEepHomeUserProfileWebPartProps> {

  public render(): void {

    console.log("EepHomeUserProfileWebPart render() called");

    const webServerRelativeUrl:string = this.context.pageContext.legacyPageContext['webServerRelativeUrl'];

    this.domElement.innerHTML = `
    <div id="EEPHomeUserProfileWPContainer">
      <div id="EEPHomeUserProfileWP">
        <div class="main-box col-md-12 col-lg-12 no-padding overflowHidden">
            <div class="profile-info">
            <div class="profile-bg-banner">
              <div class="user-img">
                <img id="imgMyPhoto" src="${webServerRelativeUrl}/Style Library/Custom/img/Component 47 – 1@2x.png">
              </div>
              <div class="user-info text-center">
                <div class="user-name"><h4 id="h4MyName"></h4></div>
                <div class="user-designation font-italic" id="divMyJobTitle"></div>
                <div class="country font-italic" id="divMyCountry"></div>
              </div>
            </div>
            <div class="user-desc pt-0">
              <h5 class="font-weight-600">About me</h5>
              <div class="box-blue">
                <p class="truncate-4-line w-100 h-80px mb-0 text-muted" id="pMyDescription">
                </p>
              </div>
              <div class="pt-3">
              <button class="btn btn-blue" id="btnViewMyProfile">View Profile</button>
              </div>
            </div>
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
    
    console.log("EepHomeUserProfileWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
