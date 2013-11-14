function iniciarPermisos() {
	document.addEventListener("deviceready", cargado, true);
}
		
var cargado = function(){
	try {
			alert('Ejecutando inicializacion');
			FB.init({
				appId : "653232568031668", //Codigo aplicación en facebook.
				nativeInterface : CDV.FB,
				useCachedDialogs : false
			});
		} catch (excep) {
			alert("FATAL: Ha ocurrido un error grave.");
		}

		alert('FB inicializado.');
};