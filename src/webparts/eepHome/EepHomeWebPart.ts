import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './EepHomeWebPart.module.scss';
import * as strings from 'EepHomeWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IEepHomeWebPartProps {
  description: string;
}

export default class EepHomeWebPart extends BaseClientSideWebPart<IEepHomeWebPartProps> {

  public render(): void {

    console.log("EepHomeWebPart render() called");

    const webServerRelativeUrl:string = this.context.pageContext.legacyPageContext['webServerRelativeUrl'];
	const userDisplayName:string = this.context.pageContext.legacyPageContext['userDisplayName'];

    this.domElement.innerHTML = `
	<div class="min-height">
<section class="main_content">
	<div class="container">
        <div class="row">

            <div class="col-lg-8 col-md-8 lhs_panel">

				<div id="EEPHomeBannerWPContainer">
				<div id="EEPHomeBannerWP">
				<div class="main-box col-md-12 col-lg-12 no-padding">
					<div class="carousel slide hslider" data-ride="carousel" id="carouselExampleIndicators">
					<ol class="carousel-indicators">
						<li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
					</ol>
					<div class="carousel-inner" id="divSlider">
						<div class="carousel-item active">
						<a href="javascript:void(0);">
						<img class='d-block w-100' src='${webServerRelativeUrl}/Style Library/Custom/img/no_banner_gep.jpg'>
						<p class="banner-text">NO BANNER</p>
						</a>
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
				</div>

				<div id="EEPHomePostFeedWPContainer">
				 <div id="EEPHomePostFeedWP">
				 	<div class="main-box main-box-blue-strip col-md-12 col-lg-12">
				 		<span id="Error_MainDescriptionPost" class="text-danger"></span>
				 		<span id="Error_MentionUserData" class="text-danger"></span>
				 		<div id="wrt"  contenteditable="true" class="form-control box-blue h-100px" data-text="Start a post">
				 		</div>
				 	<div class="mt-3 clearfix">
					  <ul class="browse_controls float-left">
						  <li>
							  <span class="btn btn-grey-bordered btn-file mr-2" id="wT"><i class="fas fa-pencil-alt"></i> Write</span>
						  </li>
						  <li>
							  <span class="btn btn-grey-bordered btn-file mr-2" id="imgspan"><i class="far fa-image"></i> Image <input type="file" onchange="FileOnChangeEvent(this);" id="flImageType" multiple="multiple" accept="image/*"></span>
						  </li>
						  <li>
							  <span class="btn btn-grey-bordered btn-file mr-2" id="videospan"><i class="far fa-play-circle"></i> Video <input type="file" onchange="FileOnChangeEvent(this);" id="flVideoType"  multiple="multiple" accept="video/*"></span>
						  </li>
						  <li>
							  <span class="btn btn-grey-bordered btn-file mr-2" id="docspan"><i class="far fa-file-alt"></i> Document <input type="file" id="flFileType" onchange="FileOnChangeEvent(this);"  multiple="multiple" accept=".xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf"></span>
						  </li>
						  <li>
							  <button type="button" class="btn btn-grey-bordered mr-2" id="recobtnspan" onclick="GetRecoDataHtml();" data-toggle="modal" data-target="#exampleModalRecognition"><i class="fas fa-award"></i> Praise </button>
						  </li>
					  </ul>
					  <button id="PostSubmitFeeds" type="button" class="btn btn-blue float-right mr-2" onclick=SubmitPost("Post");><i class="fas fa-paper-plane text-white"></i> Send</button>
				 	</div>
				 	<div id="FileStorage" class="FileStorage">
				 	</div>
				 	<div>
					 
				 	</div>
			 		</div>
				 </div>
				 </div>

				<div id="EEPHomeFeedsWPContainer">
					<div class="row mt-2">
						<div class="col-lg-12 col-md-12 mt-4">
						<button class="btn btn-blue" id="btnGlobalFeeds">Global</button>
						<button class="btn btn-grey-bordered ml-2" id="btnFunctionFeeds">Function</button>
						</div>
					</div>
				  	<div id="divFeedsScroll">
				  		<div id="EEPHomeFeedsWP">
							<div class="col-lg-12 col-md-12 col-sm-12 p-0 section-box">
								<div class="no-data text-center position-relative">
									<span><i class="far fa-smile-beam"></i></span>
									<span class="no-data-text text-blue font-weight-bold"><p id="pNoDataFeeds">Loading Feeds</p></span>
								</div>
				  			</div>
				  		</div>
				  	</div>
				  	<div class="load-more-block" id="divLoadMoreFeeds" style="display:none;">
						<div class="more-box examples">
							<div class="" data-title=".dot-flashing">
								<div class="stage">
									<div class="dot-flashing"></div>
								</div>
							</div>
						</div>
				  	</div>
				  </div>
				  
			</div>

			<div class="col-lg-4 col-md-4 rhs_panel_desktop">

				<div id="EEPHomeUserProfileWPContainer">
					<div id="EEPHomeUserProfileWP">
						<div class="main-box col-md-12 col-lg-12 no-padding overflowHidden">
							<div class="profile-info">
							<div class="profile-bg-banner">
							<div class="user-img">
								<img id="imgMyPhoto" src="${webServerRelativeUrl}/Style Library/Custom/img/default_profile_img.jpg">
							</div>
							<div class="user-info text-center">
								<div class="user-name"><h4 id="h4MyName">${userDisplayName}</h4></div>
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
				</div>

				<div id="EEPHomeQuickLinksWPContainer">
					<div class="main-box col-md-12 col-lg-12 rhs-box pb-3" id="quickData">
						<div class="">
							<img src="${webServerRelativeUrl}/Style Library/Custom/img/Group 279.svg" class="img-fluid box-icon">
							<span class="box-title">Quick Links</span>
						</div>
						<div id="EEPHomeQuickLinksWP">
							<div class="list mt-3 mCustomScrollbar height-197px">
								<div class="no-data text-center position-relative">
									<span><i class="far fa-smile-beam"></i></span>
									<span class="no-data-text text-blue font-weight-bold"><p id="pNoDataQuickLinks">Loading Quick Links</p></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="EEPHomeJobJarWPContainer">
					<div class="main-box col-md-12 col-lg-12 rhs-box pb-3 scroll-to-fix">
						<div class="position-relative">
							<img src="${webServerRelativeUrl}/Style Library/Custom/img/job-jar-icon.png" class="img-fluid box-icon">
						</div>
						<div>
						</div>
						<div id="EEPHomeJobJarWP">
							<div class="list mt-3 mCustomScrollbar height-450px mt-2">
								<div class="">
									<div class="no-data text-center position-relative">
										<span><i class="far fa-smile-beam"></i></span>
										<span class="no-data-text text-blue font-weight-bold"><p pNoDataJobJar>Loading Job Jar</p></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
    </div>
	<div class="floating-icon">
	<a href="javascript:void(0);" class="three_dots"><i class="fas fa-ellipsis-h"></i></a>
	</div>
	
</section>
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
    
    console.log("EepHomeWebPart onInit() called");

    // SPComponentLoader.loadScript(this.context.pageContext.web.absoluteUrl + 
    //   "/Style%20Library/Custom/js/custom/ProdigiContactUs.js");
  
  return super.onInit();
}

}
