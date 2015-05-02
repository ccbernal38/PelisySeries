$(document).ready(function() {

$('#principal').click(function(event) {
        event.preventDefault();
        link('index.php/welcome/index', '#contenedor');
    });

$('#registrarse').click(function(event) {
        event.preventDefault();
        link('index.php/welcome/registro', '#contenedor');
    });

$('#login').click(function(event) {
        event.preventDefault();
        link('index.php/welcome/login', '#contenedor');

    });

$('#series').click(function(event) {
        event.preventDefault();

        link('index.php/welcome/infoseries', '#contenedor');

    });

$('#peliculas').click(function(event) {
        event.preventDefault();
        link('index.php/welcome/infoPeliculas', '#contenedor');
    });
$('#cerrarSesion').click(function(event) {
        event.preventDefault();
        link('index.php/welcome/cerrarSesion', '#contenedor');
    });

});

function link(url, update) {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        success: function(respuesta)
        {
            $(update).html(respuesta);
            
        }
    });

}