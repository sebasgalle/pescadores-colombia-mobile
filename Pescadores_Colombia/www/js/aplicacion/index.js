function iniciarAplicacion(ruta){
	document.addEventListener("deviceready", redireccionar(ruta), true);
}

function redireccionar(ruta){
	$( document ).ready(function() {
		location.href = ruta;
	});
}
