var most_view_movie;
var all_movie_pages = 1;;
var most_view_tv;
var all_tv_pages = 1;
page_movie = 1;
page_tv = 1;
categoria_movie = "all";
categoria_tv = "all";
$(document).ready(function(event) {
    $('#logo').click(function(event) {
        $('#principal').addClass("active");
        $('#series').removeClass("active");
        $('#peliculas').removeClass("active");
        $('#login').removeClass("active");
        $('#perfil').removeClass("active");
        $('#cerrarSesion').removeClass("active");
        $('#registrarse').removeClass("active");
        $('#principal_movil').addClass("active");
        $('#series_movil').removeClass("active");
        $('#peliculas_movil').removeClass("active");
        $('#login_movil').removeClass("active");
        $('#perfil_movil').removeClass("active");
        $('#cerrarSesion_movil').removeClass("active");
        $('#registrarse_movil').removeClass("active");
        $('#collapsed').collapse('hide');
        event.preventDefault();
        link('vistas/principal.php', '#contenedor');
    });
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
        $('#principal').removeClass("active");
        $('#series').removeClass("active");
        $('#peliculas').removeClass("active");
        $('#login').removeClass("active");
        $('#perfil').removeClass("active");
        $('#cerrarSesion').removeClass("active");
        $('#registrarse').addClass("active");
        event.preventDefault();
        link('vistas/registrar.php', '#contenedor');
        actualizarBotones();
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
        actualizarInicioSesion();
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
        categoriasSeries();
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
        categoriasPeliculas();
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
        $('#collapsed').collapse('hide');
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
        actualizarBotones();
        $('#collapsed').collapse('hide');
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
        $('#collapsed').collapse('hide');
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
        link('vistas/series.php', '#contenedor');
        $('#collapsed').collapse('hide');
        categoriasSeries();
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
        link('vistas/peliculas.php', '#contenedor');
        $('#collapsed').collapse('hide');
        categoriasPeliculas();
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
        $('#collapsed').collapse('hide');
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
        $('#collapsed').collapse('hide');
    });
    $('#vermas_movies').click(function(event) {
        event.preventDefault();
        link('vistas/peliculas.php', "#contenedor");
        $('#principal_movil').addClass("active");
        $('#series_movil').removeClass("active");
        $('#peliculas_movil').removeClass("active");
        $('#login_movil').removeClass("active");
        $('#perfil_movil').removeClass("active");
        $('#cerrarSesion_movil').removeClass("active");
        $('#registrarse_movil').removeClass("active");
    });
    $('#vermas_tv').click(function(event) {
        event.preventDefault();
        link('vistas/series.php', "#contenedor");
        $('#principal_movil').addClass("active");
        $('#series_movil').removeClass("active");
        $('#peliculas_movil').removeClass("active");
        $('#login_movil').removeClass("active");
        $('#perfil_movil').removeClass("active");
        $('#cerrarSesion_movil').removeClass("active");
        $('#registrarse_movil').removeClass("active");
    });
    $('#vermas_movies').click(function(event) {
        event.preventDefault();
        $('#peliculas').click();
        categoriasPeliculas();
        return false;
    });
    $('#vermas_tv').click(function(event) {
        event.preventDefault();
        $('#series').click();
        categoriasSeries();
        return false;
    });

    function categoriasPeliculas() {
        //Cargar categorias, 
        //pelicula mas vista 
        //numeracion paginacion
        tmdb.call("/genre/movie/list", {
            "language": "es"
        }, function(e) {
            var generos = e['genres'];
            for (var i = 0; i < generos.length; i++) {
                $('#catMovies').append($("<a></a>").attr("id", generos[i].id).attr("href", "").addClass("list-group-item").text(generos[i].name));
            };
            $('#catMovies a').attr("onclick", 'moviesByGenres(this.id,' + page_movie + ')');
            pages = e.total_pages;
            $('#movieTop a').attr("id", most_view_movie.id);
            $('#movieTop a').attr("href", "");
            $('#movieTop').find("a").attr("onclick", "detalleTv" + "(" + most_view_movie.id + ")");
            $('#movieTop').find("img").attr("src", tmdb.images_uri + tmdb.size + most_view_movie.poster_path);
            $('#movieTop').find("img").attr("class", "img-responsive");
            $('#movieTop a div').find("h4").text(most_view_movie.title);
            //cargar peliculas
            var componente = "";
            var j = 0;
            for (var i = 1; i < 16; i++) {
                $('#pagination_movie').append($('<li></li>').attr("id","pag"+i+"movie").append($('<a></a>').attr("onclick", 'moviesByGenres("' + categoria_movie + '",' + i + ')').attr("href", "").text(i)));
            }
            for (var i = 0; i < all_movies.results.length; i++) {
                if (i % 4 == 0) {
                    componente += '<div class="' + "row" + '">';
                }
                j++;
                componente += '<div class="' + 'col-md-3 col-xs-3 bottom-buffer' + '"><a id="' + all_movies.results[i].id + '" href="" onclick="detallePelicula(this.id)"><img class="' + "img-responsive  shadow_movie" + '" src="' + tmdb.images_uri + tmdb.size + all_movies.results[i].poster_path + '"><div class="' + 'carousel-caption' + '"><h3></h3></div></a></div>';
                if (j == 4) {
                    componente += '</div>';
                    j = 0;
                }
            }
            $('#content_movie').html(componente);
            for (var i = 1; i < 16; i++) {
                $('#pagination_movie2').append($('<li></li>').attr("id","pag"+i+"movie2").append($('<a></a>').attr("onclick", 'moviesByGenres("' + categoria_movie + '",' + i + ')').attr("href", "").text(i)));
            }
        }, function(e) {
            console.log(e);
        });
       
    }

    function categoriasSeries() {
        //Cargar categorias, 
        //series mas vista 
        //numeracion paginacion
        tmdb.call("/genre/tv/list", {
            "language": "es"
        }, function(e) {
            var generos = e['genres'];
            for (var i = 0; i < generos.length; i++) {
                $('#catSeries').append($("<a></a>").attr("id", generos[i].id).attr("href", "").addClass("list-group-item").text(generos[i].name));
            };
            $('#catSeries a').attr("onclick", 'seriesByGenres(this.id.' + page_tv + ')');
            pages = e.total_pages;
            $('#serieTop a').attr("id", most_view_tv.id);
            $('#serieTop a').attr("href", "");
            $('#serieTop').find("a").attr("onclick", "detalleTv" + "(" + most_view_tv.id + ")");
            $('#serieTop').find("img").attr("src", tmdb.images_uri + tmdb.size + most_view_tv.poster_path);
            $('#serieTop').find("img").attr("class", "img-responsive");
            $('#serieTop a div').find("h4").text(most_view_movie.title);
            //cargar peliculas
            var componente = "";
            var j = 0;
            for (var i = 1; i < 16; i++) {
                $('#pagination_tv').append($('<li></li>').attr("id","pag"+i+"tv").append($('<a></a>').attr("onclick", 'seriesByGenres("' + categoria_tv + '",' + i + ')').attr("href", "").text(i)));
            }
            for (var i = 0; i < all_tv.results.length; i++) {
                if (i % 4 == 0) {
                    componente += '<div class="' + "row" + '">';
                }
                j++;
                componente += '<div class="' + 'col-md-3 col-xs-3 bottom-buffer' + '"><a id="' + all_tv.results[i].id + '" href="" onclick="detalleTv(this.id)"><img class="' + "img-responsive  shadow_movie" + '" src="' + tmdb.images_uri + tmdb.size + all_tv.results[i].poster_path + '"><div class="' + 'carousel-caption' + '"><h3></h3></div></a></div>';
                if (j == 4) {
                    componente += '</div>';
                    j = 0;
                }
            }
            $('#content_serie').html(componente);
            for (var i = 1; i < 16; i++) {
                $('#pagination_tv2').append($('<li></li>').attr("id","pag"+i+"tv2").append($('<a></a>').attr("onclick", 'seriesByGenres("' + categoria_tv + '",' + i + ')').attr("href", "").text(i)));
            }
        }, function(e) {
            console.log(e);
        });
        
    }

    function actualizarBotones() {
        setTimeout(function() {
            $('#btn-registro').click(function() {
                $.ajax({
                    type: 'POST',
                    data: {
                        nombre: $('#name').val(),
                        lastname: $('#lastname').val(),
                        email: $('#email').val(),
                        username: $('#username').val(),
                        pass: $('#pwd').val(),
                        pass2: $('#pwd2').val()
                    },
                    url: 'home/registro',
                    dataType: 'JSON',
                    beforeSend: function() {
                        $('#result').html("Los datos se estan procesando. Espere por favor......");
                    },
                    success: function(response) {
                        if (response.estado == "error") {
                            $('#result').html(response.mensaje);
                            $('#result').removeClass("alert alert-success").addClass("alert alert-danger");
                        } else if (response.estado == "exitoso") {
                            $('#result').html(response.mensaje);
                            $('#result').removeClass("alert alert-danger").addClass("alert alert-success");
                        }
                    },
                    error: function(msg) {
                        $('#boton_enviar').attr('disabled', false);
                    }
                });
                return false;
            });
        }, 500);
    }

    function actualizarInicioSesion() {
        setTimeout(function() {
            $('#btn_login').click(function() {
                $.ajax({
                    type: 'POST',
                    data: {
                        username: $('#username_login').val(),
                        pass: $('#password_login').val(),
                    },
                    url: 'home/login',
                    dataType: 'JSON',
                    beforeSend: function() {
                        $('#result_login').html("Un momento por favor");
                    },
                    success: function(response) {
                        console.log(response);
                    },
                    error: function(msg) {}
                });
                return false;
            });
        }, 500);
    }
});

function link(url, update) {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        success: function(respuesta) {
            $(update).html(respuesta);
        }
    });
}
$('.carousel').carousel({
    interval: 4000
})