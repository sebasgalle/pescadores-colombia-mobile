function iniciarVista()
{
    vincularFacebook();
    ingresarInformacionBasica();
    consultarPost();
}

function redireccionaA(pagina){
	location.href = pagina;
	return false;
}

function consultarPost(){

	var uri = "http://pescadores-colombia-api.herokuapp.com/wall";

    $.ajax({
        url: uri,
        type: "GET",
        dataType: "JSON",
        cache: false,

        success: function (data, status) {

            for(var comentario in data){
                var nombre = data[comentario].author;
                var fecha = data[comentario].created_at;
                var cuerpoMensaje = data[comentario].body;

                construirMensaje(nombre,fecha,cuerpoMensaje);
            }
        },


        error: function (status) {
            alert('ERROR!!.\nLa aplicacion fallo al intentar recuperar los comentarios publicados.' + status);
        }
	});
}

function construirMensaje(nombre, fechaComentario, cuerpoMensaje)
{
	var comentario = "<span>"+
		"<div class = \"comentarioMuro\">" +
			"<div class = \"nombreUsuario\">" + nombre + "</div>" +
			"<div class = \"fechaComentario\">" + fechaComentario + "</div>" +
			"<div class = \"cuerpoMensaje\">" + cuerpoMensaje + "</div>" +
	 	"</div>"+
	 "</span>";

	 $('#muro').append(comentario);
}


