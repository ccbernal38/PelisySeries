$(document).ready(function() 
{
    $('#principal').click(function(event) {
            $('#principal').addClass("active");
            $('#series').removeClass("active");
            $('#peliculas').removeClass("active");
            $('#login').removeClass("active");
            $('#perfil').removeClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').removeClass("active");
            event.preventDefault();
            link('index.php/welcome/index', '#contenedor');
        });

    $('#registrarse').click(function(event) {
            event.preventDefault();
            $('#principal').removeClass("active");
            $('#series').removeClass("active");
            $('#peliculas').removeClass("active");
            $('#login').removeClass("active");
            $('#perfil').removeClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').addClass("active");
            link('index.php/welcome/registro', '#contenedor');
        });

    $('#login').click(function(event) {
            
            $('#principal').removeClass("active");
            $('#series').removeClass("active");
            $('#peliculas').removeClass("active");
            $('#login').addClass("active");
            $('#perfil').removeClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').removeClass("active");
            event.preventDefault();
            link('index.php/welcome/inicioSesion', '#contenedor');
        });

    $('#series').click(function(event) {
            $('#principal').removeClass("active");
            $('#series').addClass("active");
            $('#peliculas').removeClass("active");
            $('#login').removeClass("active");
            $('#perfil').removeClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').removeClass("active");
            event.preventDefault();
            link('index.php/welcome/infoseries', '#contenedor');

        });

    $('#peliculas').click(function(event) {
            $('#principal').removeClass("active");
            $('#series').removeClass("active");
            $('#peliculas').addClass("active");
            $('#login').removeClass("active");
            $('#perfil').removeClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').removeClass("active");
            event.preventDefault();
            link('index.php/welcome/infoPeliculas', '#contenedor');
        });
    $('#perfil').click(function(event) {
            $('#principal').removeClass("active");
            $('#series').removeClass("active");
            $('#peliculas').removeClass("active");
            $('#login').removeClass("active");
            $('#perfil').addClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').removeClass("active");
            event.preventDefault();
            link('index.php/welcome/perfil', '#contenedor');
        });

    $('#cerrarSesion').click(function(event) {
            event.preventDefault();
            link('index.php/welcome/cerrarSesion', '#contenedor');
            $('#principal').addClass("active");
            $('#series').removeClass("active");
            $('#peliculas').removeClass("active");
            $('#login').removeClass("active");
            $('#perfil').removeClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').removeClass("active");
        });
});

function link(url, update) {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        async: true,
        success: function(respuesta)
        {
            $(update).html(respuesta);            
        }
    });

}