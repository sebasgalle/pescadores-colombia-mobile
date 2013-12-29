

function iniciarPermisos() {
	document.addEventListener("deviceready", cargado, true);
}
		
var cargado = function(){
	try {
		alert('iniciando facebook');
			FB.init({
				appId : "653232568031668",	//Codigo aplicación en facebook.
				nativeInterface : CDV.FB,	//Interface para Phonegap/Cordova
				useCachedDialogs : false
			});
		} catch (excep) {
			alert("FATAL: Ha ocurrido un error grave.");
		}
};

function facebookLogin() {
	alert('Iniciando logueo en facebook.');
	FB.login(function(response) {
		if (response.authResponse) {
			alert('SESION INICIADA: BIENVENIDO.');
		} else {
			alert('NO SE PUDO INICIAR SESION.');
		}
	}, {
		scope : "email"
	});
	alert('Terminando logueo en facebook.');
	alert('Llamando proxima vista.');

	var pagina="vistaMuro.html";
	location.href=pagina;
}

function facebookLogout(){
	FB.logout(function(response){
		alert('CERRANDO SESION.');
	});
}

function mensajeDesarrollo(){
	alert("Esta funcion estará lista proximamente.");
}

