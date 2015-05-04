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
            link('vistas/principal.php', '#contenedor');
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
            link('vistas/registrar.php', '#contenedor');
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
            link('vistas/login.php', '#contenedor');
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
            link('vistas/series.php', '#contenedor');

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
            link('vistas/peliculas.php', '#contenedor');
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
            link('vistas/perfil.php', '#contenedor');
        });

    $('#cerrarSesion').click(function(event) {
            link("libs/facebook/app/logout.php", "#contenedor");
            $('#principal').addClass("active");
            $('#series').removeClass("active");
            $('#peliculas').removeClass("active");
            $('#login').removeClass("active");
            $('#perfil').removeClass("active");
            $('#cerrarSesion').removeClass("active");
            $('#registrarse').removeClass("active");
        });
    $('#fav1').click(function(event) {
           try{
           
            
        }catch(e){
            console.log(e);
        }
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