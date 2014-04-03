function vincularRedesSociales(){
	iniciarPermisos();
}

function iniciarPermisos() {
	//Inicio vinculacion con facebook.
	document.addEventListener("deviceready", vincularFacebook(), true);
	//Añadir vinculacion con las demas redes sociales.
}

function vincularFacebook(){
	$(document).ready(function(){
		try {
			FB.init({
				appId : "653232568031668",	//Codigo aplicación en facebook.
				nativeInterface : CDV.FB,	//Interface para Phonegap/Cordova
				useCachedDialogs : false
			});
		} catch (excep) {
			alert("La aplicacion a generado un error. Por favor reinicie la aplicación.\n" + excep);
		}
	});
}

function facebookLogin() {
	//Verificamos estado de logeo con facebook.
	FB.getLoginStatus(function(response) {
		if (response.status == 'connected'){
			// mirar como guardar el token de acceso
			alert('BIENVENIDO\n'+response.name);
			location.href= "muro.html";

		} else {
			//Solicitamos login si no tenemos una sesion abierta.
			FB.login(function(response) {
				if (response.authResponse) {
					alert('BIENVENIDO\n'+response.name);
					location.href= "muro.html";
				} else {
					alert('ERROR!!!\nSeñor pescador.\nNo se pudo vincular su cuenta de facebook con Pescadores Colombia.\n\nPor favor intentelo de nuevo!!');
				}
			}, {
				scope : 'user_about_me, user_photos'
			});
		}
	});
}

