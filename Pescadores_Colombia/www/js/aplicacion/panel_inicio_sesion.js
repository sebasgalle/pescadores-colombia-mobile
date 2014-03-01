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
				useCachedDialogs : true
			});
		} catch (excep) {
			alert("ERROR GRAVE:\n" + excep);
		}
	});
}

function facebookLogin() {
	//Verificamos estado de logeo con facebook.
	FB.getLoginStatus(function(response) {
		if (response.status == 'connected'){
			FB.api("/me",
				function (response) {
					if (response && !response.error) {
						alert(response.name);
						location.href= "muro.html";
					}
				}
			);

		} else if (response.status == 'not_authorized') {
			alert('unautorized');
		} else {
			//Solicitamos login si no tenemos una sesion abierta.
			FB.login(function(response) {
				if (response.authResponse) {
					location.href= "muro.html";
				} else {
					alert('ERROR.\nSeñor pescador. No se pudo vincular su cuenta de facebook con Pescadores Colombia. Por favor intentelo de nuevo.');
				}
			}, {
				scope : 'scope'
			});
		}
	});
}

