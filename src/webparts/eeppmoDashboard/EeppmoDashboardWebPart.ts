import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EeppmoDashboardWebPart.module.scss';
import * as strings from 'EeppmoDashboardWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEeppmoDashboardWebPartProps {
  description: string;
}

export default class EeppmoDashboardWebPart extends BaseClientSideWebPart<IEeppmoDashboardWebPartProps> {

  public render(): void {

    console.log("EeppmoDashboardWebPart render() called");

    this.domElement.innerHTML = `
    <div id="EEPPMODashboardWPContainer">
    <div id="EEPPMODashboardWP">
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
    
    console.log("EeppmoDashboardWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
