import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepEmployeeTemplateWebPart.module.scss';
import * as strings from 'EepEmployeeTemplateWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepEmployeeTemplateWebPartProps {
  description: string;
}

export default class EepEmployeeTemplateWebPart extends BaseClientSideWebPart<IEepEmployeeTemplateWebPartProps> {

  public render(): void {

    console.log("EepEmployeeTemplateWebPart render() called");

    this.domElement.innerHTML = `
    <div id="EEPEmployeeTemplateWPContainer">
    <div id="EEPEmployeeTemplateWP">
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
    
    console.log("EepEmployeeTemplateWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
