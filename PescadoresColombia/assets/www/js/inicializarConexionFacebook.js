function iniciarPermisos() {
	document.addEventListener("deviceready", cargado, true);
}
		
var cargado = function(){
	try {
			FB.init({
				appId : "653232568031668", //Codigo aplicación en facebook.
				nativeInterface : CDV.FB,
				useCachedDialogs : false
			});
		} catch (excep) {
			alert("FATAL: Ha ocurrido un error grave.");
		}
};

function login() {
	FB.login(function(response) {
		if (response.authResponse) {
			alert('SESION INICIADA: BIENVENIDO.');
		} else {
			alert('NO SE PUDO INICIAR SESION.');
		}
	}, {
		scope : "email"
	});
};