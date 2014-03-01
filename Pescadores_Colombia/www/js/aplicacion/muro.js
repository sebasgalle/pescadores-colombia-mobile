function redireccionaA(pagina){
	location.href = pagina;
	return false;
}

function consultarPost(){
	var uri = "http://pescadores-colombia-api.herokuapp.com/wall";

    $.ajax({
    	url: uri,
    	type: "GET",
        dataType: "json",

        success: function (data, status) {

        	for(comentario in data){
                alert('pase: ' + comentario);
        		var nombre = data[comentario].author;
        		var fecha = data[comentario].created_at;
        		var cuerpoMensaje = data[comentario].body;

        		construirMensaje(nombre,fecha,cuerpoMensaje);
        	}
        },

        error: function (status) {
            alert('Fallo llamado ajax' + status);

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

function consultarDatosUsuario(){
  alert('consiultando');
}


