function post()
{
    var name = $('#nombreUsuario').text();
    var message = $('#cuerpoComentario').val();

    var messageBody = {author: name, body: message};
    var uri = "http://pescadores-colombia-api.herokuapp.com/wall";

    $.ajax({
        url: uri,
        type: "POST",
        data: messageBody,

        success: function (data) {
            alert('Post realizado exitosamente');
            returnToWall();

        },
        error: function (status) {
            alert('Fallo llamado ajax ' + status);
        }
    });
}

function returnToWall() {
    document.location.href = "muro.html";
}


