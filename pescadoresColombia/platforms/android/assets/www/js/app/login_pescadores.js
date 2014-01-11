function vincularRedesSociales(){
	alert('Iniciando permisos.');
	document.addEventListener("deviceready", cargado, true);
	alert('Permisos finalizados.');
}

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

		alert('Facebook iniciado');
		} catch (excep) {
			alert("FATAL: Ha ocurrido un error grave.");
		}
};

function facebookLogin() {
	alert('Presione logueo con facebook.');
	
	FB.login(function(response) {
		alert('Entrando al login.');
		if (response.authResponse) {
			alert('SESION INICIADA: BIENVENIDO.');
		} else {
			alert('NO SE PUDO INICIAR SESION.');
		}
	}, {
		scope : "email"
	});
	/*var pagina="vistaMuro.html";
	location.href=pagina;*/

}

function facebookLogout(){
	FB.logout(function(response){
		alert('CERRANDO SESION.');
	});
}

function mensajeDesarrollo(){
	alert("Esta funcion estará lista proximamente.");
}

