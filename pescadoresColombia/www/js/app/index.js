function inicializarVista(){
	cargarSlider();
	iniciarSlider();
}

function cargarSlider(){

	/*Se consume el servicio que devuelve la ubicacion de las imagenes
	  y se contruye la variable listaImagenes. Pendiente la contruccion
	  del servicio.
	*/

	var listaImagenes = "<li><img src=\"../img/pic1.jpg\" /></li>" +
				        "<li><img src=\"../img/pic2.jpg\" /></li>" +
				        "<li><img src=\"../img/pic3.jpg\" /></li>" + 
				        "<li><img src=\"../img/pic4.jpg\" /></li>";

	$('#bxslider').append(listaImagenes);

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