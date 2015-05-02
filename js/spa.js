$(document).ready(function() {

$('#principal').click(function(event) {
        event.preventDefault();
        link('index', '#contenedor');
    });

$('#registrarse').click(function(event) {
        event.preventDefault();
        link('registro', '#contenedor');
    });

$('#login').click(function(event) {
        event.preventDefault();
        link('login.php', '#contenedor');
    });

$('#series').click(function(event) {
        event.preventDefault();
        link('infoseries', '#contenedor');
    });

$('#peliculas').click(function(event) {
        event.preventDefault();
        link('login.php', '#contenedor');
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