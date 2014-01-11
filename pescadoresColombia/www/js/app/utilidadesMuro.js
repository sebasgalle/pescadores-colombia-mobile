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
		"<div>"+
			"<div class = \"comentario\">" +
				"<div>" + nombre + "</div>" +
				"<div>" + fechaComentario + "</div>" +
				"<div>" + cuerpoMensaje + "</div>" +
	 	"</div>"+
	 "</span>";

	 $('#muro').append(comentario);

	return false;
}