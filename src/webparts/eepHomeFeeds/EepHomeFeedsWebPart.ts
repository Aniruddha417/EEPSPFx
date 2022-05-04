import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepHomeFeedsWebPart.module.scss';
import * as strings from 'EepHomeFeedsWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepHomeFeedsWebPartProps {
  description: string;
}

export default class EepHomeFeedsWebPart extends BaseClientSideWebPart<IEepHomeFeedsWebPartProps> {

  public render(): void {

    console.log("EepHomeFeedsWebPart render() called");

    this.domElement.innerHTML = `
    <div id="EEPHomeFeedsWPContainer">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <select class="btn float-right page-filter">
              <option value="">Global</option>
              <option value="">Function</option>
            </select>
          </div>
        </div>
        <div id="divFeedsScroll">
          <div id="EEPHomeFeedsWP">
            <div class="min-height">
              <div class="no-data text-center">
                <span><i class="far fa-smile-beam "></i></span>
                <span class="no-data-text text-blue font-weight-bold"><p>Loading Feeds</p></span>
              </div>
            </div>
          </div>
          <div class="load-more-block" id="divLoadMoreFeeds">
            <div class="more-box">
              <div class="spinner-grow text-blue spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-blue spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-blue spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
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
    
    console.log("EepHomeFeedsWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}
}
