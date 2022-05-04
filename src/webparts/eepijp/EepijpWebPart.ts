import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepijpWebPart.module.scss';
import * as strings from 'EepijpWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepijpWebPartProps {
  description: string;
}

export default class EepijpWebPart extends BaseClientSideWebPart<IEepijpWebPartProps> {

  public render(): void {
    
    console.log("EepijpWebPart render() called");

    this.domElement.innerHTML = `
    <div id="EEPIJPWPContainer">
    <div id="EEPIJPWP">
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
    
    console.log("EepijpWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
