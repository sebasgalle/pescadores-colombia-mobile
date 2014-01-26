function vincularRedesSociales(){
	alert('Iniciando permisos.');		
	iniciarPermisos();
	alert('Permisos finalizados.');
}

function iniciarPermisos() {
	document.addEventListener("deviceready", vincularFacebook(), true);
}
		
function vincularFacebook(){

	$(document).ready(function(){
	try {
		alert('iniciando facebook');
			FB.init({
				appId : "653232568031668",	//Codigo aplicación en facebook.
				nativeInterface : CDV.FB,	//Interface para Phonegap/Cordova
				useCachedDialogs : true
			});

		alert('Facebook iniciado');
		} catch (excep) {
			alert("Error:\n" + excep);
		}
	});
}

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
	
	var pagina="vistaMuro.html";
	location.href=pagina;

}

function facebookLogout(){
	FB.logout(function(response){
		alert('CERRANDO SESION.');
	});
}

