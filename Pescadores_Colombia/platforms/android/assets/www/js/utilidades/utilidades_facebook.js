function ingresarInformacionBasica(){
	var foto_perfil;

	//Verificamos estado de logeo con facebook.
	FB.getLoginStatus(function(response) {
		if (response.status == 'connected'){

			FB.api('/me', function (response){
				$('#nombreUsuario').text(response.name);

			FB.api('/me/albums', function (response) {
				for(album in response.data) {
					// Find the Profile Picture album
					if (response.data[album].name == "Profile Pictures") {
						// Get a list of all photos in that album.
						FB.api(response.data[album].id + "/photos", function(response) {
							//The image link
							foto_perfil = response.data[0].images[0].source;
							$('#fotoUsuario').attr('src', foto_perfil);
						});
				    }
				}
			});

			});
		}else{
			alert('NO ESTOY CONECTADO');
		}
	});
}

function vincularFacebook(){
        try {
            FB.init({
                appId : "653232568031668",  //Codigo aplicación en facebook.
                xfbml :true,
                nativeInterface : CDV.FB,   //Interface para Phonegap/Cordova
                useCachedDialogs : true
            });
        } catch (excep) {
            alert("La aplicacion a generado un error. Por favor reinicie la aplicación." + excep);
            location.href = 'panel_inicio_sesion.html';
            return false;
        }
}

function cerrarSesion(){
	FB.logout(function(response) {
		alert('Hasta Pronto.');
        location.href = '../index.html';
	});
}




