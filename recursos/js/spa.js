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
            //link('vistas/series.php', '#contenedor');
            link('vistas/error/notfound.php', '#contenedor');

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
            //link('vistas/peliculas.php', '#contenedor');
            link('vistas/error/notfound.php', '#contenedor');
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
            //link('vistas/perfil.php', '#contenedor');
            link('vistas/error/notfound.php', '#contenedor');
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
    $('#principal_movil').click(function(event) {
            $('#principal_movil').addClass("active");
            $('#series_movil').removeClass("active");
            $('#peliculas_movil').removeClass("active");
            $('#login_movil').removeClass("active");
            $('#perfil_movil').removeClass("active");
            $('#cerrarSesion_movil').removeClass("active");
            $('#registrarse_movil').removeClass("active");
            event.preventDefault();
            link('vistas/principal.php', '#contenedor');
        });

    $('#registrarse_movil').click(function(event) {
            event.preventDefault();
            $('#principal_movil').removeClass("active");
            $('#series_movil').removeClass("active");
            $('#peliculas_movil').removeClass("active");
            $('#login_movil').removeClass("active");
            $('#perfil_movil').removeClass("active");
            $('#cerrarSesion_movil').removeClass("active");
            $('#registrarse_movil').addClass("active");
            link('vistas/registrar.php', '#contenedor');
        });

    $('#login_movil').click(function(event) {
            
            $('#principal_movil').removeClass("active");
            $('#series_movil').removeClass("active");
            $('#peliculas_movil').removeClass("active");
            $('#login_movil').addClass("active");
            $('#perfil_movil').removeClass("active");
            $('#cerrarSesion_movil').removeClass("active");
            $('#registrarse_movil').removeClass("active");
            event.preventDefault();
            link('vistas/login.php', '#contenedor');
        });

    $('#series_movil').click(function(event) {
            $('#principal_movil').removeClass("active");
            $('#series_movil').addClass("active");
            $('#peliculas_movil').removeClass("active");
            $('#login_movil').removeClass("active");
            $('#perfil_movil').removeClass("active");
            $('#cerrarSesion_movil').removeClass("active");
            $('#registrarse_movil').removeClass("active");
            event.preventDefault();
            //link('vistas/series.php', '#contenedor');
            link('vistas/error/notfound.php', '#contenedor');

        });

    $('#peliculas_movil').click(function(event) {
            $('#principal_movil').removeClass("active");
            $('#series_movil').removeClass("active");
            $('#peliculas_movil').addClass("active");
            $('#login_movil').removeClass("active");
            $('#perfil_movil').removeClass("active");
            $('#cerrarSesion_movil').removeClass("active");
            $('#registrarse_movil').removeClass("active");
            event.preventDefault();
            //link('vistas/peliculas.php', '#contenedor');
            link('vistas/error/notfound.php', '#contenedor');
        });
    $('#perfil_movil').click(function(event) {
            $('#principal_movil').removeClass("active");
            $('#series_movil').removeClass("active");
            $('#peliculas_movil').removeClass("active");
            $('#login_movil').removeClass("active");
            $('#perfil_movil').addClass("active");
            $('#cerrarSesion_movil').removeClass("active");
            $('#registrarse_movil').removeClass("active");
            event.preventDefault();
            //link('vistas/perfil.php', '#contenedor');
             link('vistas/error/notfound.php', '#contenedor');
        });

    $('#cerrarSesion_movil').click(function(event) {
            link("libs/facebook/app/logout.php", "#contenedor");
            $('#principal_movil').addClass("active");
            $('#series_movil').removeClass("active");
            $('#peliculas_movil').removeClass("active");
            $('#login_movil').removeClass("active");
            $('#perfil_movil').removeClass("active");
            $('#cerrarSesion_movil').removeClass("active");
            $('#registrarse_movil').removeClass("active");
        });

    $("#formRegister").submit(function(e)
    {
        var postData = $(this).serializeArray();
        var formURL = $(this).attr("action");
        $.ajax(
        {
            url : formURL,
            type: "POST",
            data : postData,
            success:function(data, textStatus, jqXHR) 
            {
                //data: return data from server
            },
            error: function(jqXHR, textStatus, errorThrown) 
            {
                //if fails      
            }
        });
        e.preventDefault(); //STOP default action
        e.unbind(); //unbind. to stop multiple form submit.
    });
 
    $("#formRegister").submit(); //Submit  the FORM
    
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

