import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepUserProfileWebPart.module.scss';
import * as strings from 'EepUserProfileWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepUserProfileWebPartProps {
  description: string;
}

export default class EepUserProfileWebPart extends BaseClientSideWebPart<IEepUserProfileWebPartProps> {

  public render(): void {

    console.log("EepUserProfileWebPart render() called");

    this.domElement.innerHTML = `
    <div id="EEPUserProfileWPContainer">
    <div id="EEPUserProfileWP">
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
    
    console.log("EepUserProfileWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
