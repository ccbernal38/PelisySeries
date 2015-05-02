$(document).ready(function() {

$('#principal').click(function(event) {
        event.preventDefault();
        link('index', '#contenedor');
    });

$('#registrarse').click(function(event) {
        event.preventDefault();
        link('', '.change');
    });

$('#login').click(function(event) {
        event.preventDefault();
        link('index.php/welcome/login', '#contenedor');
    });

$('#series').click(function(event) {
        event.preventDefault();
        link('welcome/infoseries', '#contenedor');
    });

$('#peliculas').click(function(event) {
        event.preventDefault();
        link('welcome/infopeliculas', '#contenedor');
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