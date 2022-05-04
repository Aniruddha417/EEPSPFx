import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepHomePostFeedWebPart.module.scss';
import * as strings from 'EepHomePostFeedWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepHomePostFeedWebPartProps {
  description: string;
}

export default class EepHomePostFeedWebPart extends BaseClientSideWebPart<IEepHomePostFeedWebPartProps> {

  public render(): void {

    console.log("EepHomePostFeedWebPart render() called");

    this.domElement.innerHTML = `
    <div id="EEPHomePostFeedWPContainer">
      <div id="EEPHomePostFeedWP">
        <div class="main-box main-box-blue-strip col-md-12 col-lg-12">
          <textarea id="mT" class="textarea-scrollbar scrollbar-outer form-control box-blue" placeholder="My thoughts...." rows="3"></textarea>
          <div class="mt-3 clearfix">
            <ul class="browse_controls float-left">
                <li>
                    <span class="btn btn-grey-bordered btn-file" id="wT"><i class="fas fa-pencil-alt"></i> Write</span>
                </li>
                <li>
                    <span class="btn btn-grey-bordered btn-file"><i class="far fa-image"></i> Image <input type="file" accept="image/*"></span>
                </li>
                <li>
                    <span class="btn btn-grey-bordered btn-file"><i class="far fa-play-circle"></i> Video <input type="file" accept="video/*"></span>
                </li>
                <li>
                    <span class="btn btn-grey-bordered btn-file"><i class="far fa-file-alt"></i> Document <input type="file" accept=".xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf"></span>
                </li>
                <li>
                    <button type="button" class="btn btn-grey-bordered" data-toggle="modal" data-target="#exampleModalRecognition"><i class="fas fa-award"></i> Recognition </button>
                </li>
            </ul>
            <button class="btn btn-blue float-right"><i class="fas fa-paper-plane text-white"></i> Send</button>
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
    
    console.log("EepHomePostFeedWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}
}
