/*VARIABLES LOCALES*/
var urlBannerPromocional = "http://pescadores-colombia-api.spinnerlabs.co/image";

/*FUNCIONES*/
function iniciarVista(){
	cargarSlider();
}

function cargarSlider(){
    $.ajax({
		url: urlBannerPromocional,
		type: "GET",
        dataType: "JSON",

        success: function (data, status) {
			for(imagen in data){
				var url = data[imagen].uri;
				construirListaPromocional(url);
			}

			iniciarSlider();
		},

		error: function (status) {
			$('#bxslider').append("<li><img src=\"../img/logotipos/mensaje_error.png\" /></li>");
			$('#bxslider').append("<li><img src= \"../img/logotipos/logos_01.png\" /></li>");
			iniciarSlider();

			$('#botonIngreso').remove();
			$('#botones').append("<a href=\"../index.html\" class=\"boton\">INTENTAR DE NUEVO</a>"
			);


			return false;
        }
	});

	return false;
}

function construirListaPromocional(url){

	var imagen = "<li><img src=\"" + url + "\" /></li>";
	$('#bxslider').append(imagen);

	return false;
}

function iniciarSlider(){

	$(document).ready(function(){
		$('.bxslider').bxSlider({
			//Propiedades generales
			video: false,
			preloadImages: 'all',
			touchEnabled: false,
			oneToOneTouch: false,
			preventDefaultSwipeX: false,
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
			auto: true,
			pause: 5000,
			autoStart: true,
			autoHover: false,
			autoDelay: 0,
			easing: null,

			//Transiciones del slider
			infiniteLoop: true,
			mode: 'horizontal',
			speed: 1500,

			ticker: false,
			tickerHover: false
		});
	});

	return false;
}
