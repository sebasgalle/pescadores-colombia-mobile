/*
---------------------------------------------------------------------------------------------------
									JAVASCRIPT DOCUMENTATION
---------------------------------------------------------------------------------------------------
Description:
This file contains the functions for the initial page. It's created for contain all private functions of the initial view.

Author:
Spinner Lab's Development Team.

*/

// Local Variables
var bannerResources = "http://pescadores-colombia-api.spinnerlabs.co/image";

// Functions
// This function is called when de page is loading. It's in charge of initializing the setting of the ajax called, the slider and the main properties of the page.
function initView(){
	$( document ).ajaxStart(function() {
		//Function in general_utilities.js
		buildLoaderIndicator();
	});

	$( document ).ajaxStop(function() {
		$('#loadingIndicator').remove();
	});

	loadSlider();
}

// This function do the Ajax call to the server of PescadoresColombia for obtain the images that will be load in the slider.
function loadSlider(){

    $.ajax({
		url:			bannerResources,
		type:			"GET",
        dataType:	"JSON",
		cache:		false,
		timeout:		3000,

        success: function (data, status) {
			for(var image in data){
				$('#bxslider').append("<li><img src=\"" + data[image].uri + "\" /></li>");
			}

			initializeSliderProperties();

			$('#login_button').removeClass('fade_button');
			$('#signup_button').removeClass('fade_button');

			$('#login_button').addClass('login_button');
			$('#signup_button').addClass('signup_button');
		},

		error: function (status) {
			$('#bxslider').append("<li><img src=\"../images/logos/error_logo_1.png\" /></li>");
			$('#bxslider').append("<li><img src= \"../images/logos/principal_logo_1.png\" /></li>");

			initializeSliderProperties();

			$('#try_again_button').removeClass('fade_button');
			$('#try_again_button').addClass('login_button');
        }
	});
}

// This function contain the slider's properties initialization. This configuration can be consulted in http://bxslider.com/
function initializeSliderProperties(){
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			//Propiedades generales
			video: false,
			preloadImages: 'all',
			touchEnabled: true,
			oneToOneTouch: true,
			preventDefaultSwipeX: true,
			preventDefaultSwipeY: false,

			//Propiedades visuales
			slideMargin: 0,
			startSlide: 0,
			randomStart: 0,
			slideSelector: '',
			captions: false,
			adaptiveHeight: true,
			adaptiveHeightSpeed: 500,
			responsive: true,
			useCSS: true,

			//Controles
			controls: false,
			autoControls: false,
			autoControlsCombine: false,
			auto: false,
			pause: 5000,
			autoStart: false,
			autoHover: false,
			autoDelay: 0,
			easing: null,

			//Transiciones del slider
			infiniteLoop: true,
			mode: 'horizontal',
			speed: 500,

			ticker: false,
			tickerHover: false
		});
	});
}
