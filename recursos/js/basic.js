function detalleTemporada(Tvid, SeasonNumber, num) {
    tmdb.call("/tv/" + Tvid + "/season/" + SeasonNumber, {}, function(e) {
        console.log(e);
        $('#collapse' + num).parent().find("a").text(e.name);
        $('#collapse' + num).find("div").append(e.overview);
        $('#collapse' + num).append($('<table></table>').addClass('table').attr('id', 'table' + num).append($('<tr></tr>').append($('<th></th>').append('Nombre')).append($('<th></th>').append('Fecha lanzamiento')).append($('<th></th>').append('Puntuación promedio'))));
        for (var i = 0; i < e.episodes.length; i++) {
            $('#table' + num).append($('<tr></tr>').append($('<td></td>').append(e.episodes[i].name)).append($('<td></td>').append(e.episodes[i].air_date)).append($('<td></td>').append(e.episodes[i].vote_average)));
        }
    }, function(e) {
        console.log("Error: " + e)
    });
    return false;
}

function detalleTv(id) {
    event.preventDefault();
    tmdb.call("/tv/" + id, {
        "language": "es"
    }, function(e) {
        link('vistas/infoseries.php', '#contenedor');
        setTimeout(function() {
            $('#posterTV').find("img").attr("src", tmdb.images_uri + "/w500" + e.poster_path);
            $('#tituloTV').find("h2").text(e.name);
            for (var i = 0; i < e.seasons.length; i++) {
                $('#seasons').append($('<a></a>').addClass("col-xs-offset-3 col-xs-9").attr("href", "").append('Temporada' + (i + 1)));
                $('#accordion').append($('<div></div>').addClass("panel panel-default").attr("id", "default" + i).append($('<div></div>').addClass('panel-heading').append($("<h4></h4>").addClass("panel-title").append($("<a></a>").attr("data-toggle", "collapse").attr("data-parent", "#accordion").attr("href", "#collapse" + i).attr("aria-expanded", "false").attr("class", "collapsed").append("Temporada" + " " + (i + 1))))).append($("<div></div>").attr("id", "collapse" + i).addClass("panel-collapse collapse in").append($("<div></div>").addClass("panel-body"))));
                setTimeout(detalleTemporada(id, e.seasons[i].season_number, i), 500);
            }
            console.log(e);
            $('#sipnosisTV').find("p").append(e.overview);
            $('#idSerie').val(id);
        }, 100);
    }, function(e) {
        console.log("Error: " + e);
    });
    return false;
}

function detallePelicula(id) {
    event.preventDefault();
    link('vistas/infoPeliculas.php', '#contenedor');
    tmdb.call("/movie/" + id, {
        "language": "es"
    }, function(e) {
        console.log(e);
        $('#posterMovie').find("img").attr("src", tmdb.images_uri + "/w500" + e.poster_path);
        $('#tituloMovie').find("h2").text(e.title + " (" + e.original_title + ")");
        // console.log(e);
        $('#sipnosisMovie').find("p").append(e.overview);
        $('#idPelicula').val(id);
    }, function(e) {
        console.log("Error: " + e);
    });
    tmdb.call("/movie/" + id + "/credits", {}, function(e) {
        console.log("elenco");
        console.log(e);
        $('#accordion').append($('<div></div>').addClass("panel panel-default").attr("id", "default" + i).append($('<div></div>').addClass('panel-heading').append($("<h4></h4>").addClass("panel-title").append($("<a></a>").attr("data-toggle", "collapse").attr("data-parent", "#accordion").attr("href", "#collapse" + i).attr("aria-expanded", "false").attr("class", "collapsed").append("Elenco")))).append($("<div></div>").attr("id", "collapse" + i).addClass("panel-collapse collapse in").append($("<div></div>").addClass("panel-body"))));
        for (var i = 0; i < 7; i++) {
            $('#collapseundefined').find("div").append($("<p></p>").append("<a>" + e.cast[i].name + "</a>").append().append(" como " + e.cast[i].character));
        }
    }, function(e) {
        console.log("Error: " + e);
    });
    return false;
}

function moviesByGenres(genre, page_movie) {
    event.preventDefault();
    categoria_movie = genre;
    for (var i = 0; i < 16; i++) {
        $('#pag'+i+'movie').removeClass("active");    
        $('#pag'+i+'movie2').removeClass("active");
    };    
    var id = '#pag'+page_movie+'movie';
    $(id).addClass("active");
    $(id+'2').addClass("active");
    if (categoria_tv == "all") {
        tmdb.call("/discover/movie", {
            "page": page_movie,
            "language": "es",
            "sort_by": "popularity.desc",
            "year": 2015
        }, function(e) {
            var componente = "";
            j = 0;
            for (var i = 0; i < e.results.length; i++) {
                if (i % 4 == 0) {
                    componente += '<div class="' + "row" + '">';
                }
                j++;
                componente += '<div class="' + 'col-md-3 col-xs-3 bottom-buffer' + '"><a id="' + e.results[i].id + '" href="" onclick="detallePelicula(this.id)"><img class="' + "img-responsive  shadow_movie" + '" src="' + tmdb.images_uri + "/w300" + e.results[i].poster_path + '"><div class="' + 'carousel-caption' + '"><h3></h3></div></a></div>';
                if (j == 4) {
                    componente += '</div>';
                    j = 0;
                }
            }
            $('#content_movie').html(componente);
        }, function(e) {
            console.log(e);
        });
    }
    else
    {
         tmdb.call("/discover/movie", {
            "page": page_movie,
            "language": "es",
            "sort_by": "popularity.desc",
            "year": 2015,
            "with_genres": genre
        }, function(e) {
            var componente = "";
            j = 0;
            for (var i = 0; i < e.results.length; i++) {
                if (i % 4 == 0) {
                    componente += '<div class="' + "row" + '">';
                }
                j++;
                componente += '<div class="' + 'col-md-3 col-xs-3 bottom-buffer' + '"><a id="' + e.results[i].id + '" href="" onclick="detallePelicula(this.id)"><img class="' + "img-responsive  shadow_movie" + '" src="' + tmdb.images_uri + "/w300" + e.results[i].poster_path + '"><div class="' + 'carousel-caption' + '"><h3></h3></div></a></div>';
                if (j == 4) {
                    componente += '</div>';
                    j = 0;
                }
            }
            $('#content_movie').html(componente);
        }, function(e) {
            console.log(e);
        });
    }


}

function seriesByGenres(genre, page_tv) {
    event.preventDefault();
    categoria_tv = genre;
    for (var i = 0; i < 16; i++) {
        $('#pag'+i+'tv').removeClass("active");    
        $('#pag'+i+'tv2').removeClass("active");
    };    
    var id = '#pag'+page_tv+'tv';
    $(id).addClass("active");
    $(id+'2').addClass("active");
    if(categoria_tv == "all")
    {
        tmdb.call("/discover/tv", {
        "page": page_tv,
        "language": "es",
        "sort_by": "popularity.desc",
        "year": 2015
        }, function(e) {
            var componente = "";
            j = 0;
            for (var i = 0; i < e.results.length; i++) {
                if (i % 4 == 0) {
                    componente += '<div class="' + "row" + '">';
                }
                j++;
                componente += '<div class="' + 'col-md-3 col-xs-3 bottom-buffer' + '"><a id="' + e.results[i].id + '" href="" onclick="detalleTv(this.id)"><img class="' + "img-responsive  shadow_movie" + '" src="' + tmdb.images_uri + "/w300" + e.results[i].poster_path + '"><div class="' + 'carousel-caption' + '"><h3></h3></div></a></div>';
                if (j == 4) {
                    componente += '</div>';
                    j = 0;
                }
            }
            $('#content_serie').html(componente);
        }, function(e) {
            console.log(e);
        });
    }
    else
    {
        tmdb.call("/discover/tv", {
        "page": page_tv,
        "language": "es",
        "sort_by": "popularity.desc",
        "year": 2015,
        "with_genres": genre
        }, function(e) {
            var componente = "";
            j = 0;
            for (var i = 0; i < e.results.length; i++) {
                if (i % 4 == 0) {
                    componente += '<div class="' + "row" + '">';
                }
                j++;
                componente += '<div class="' + 'col-md-3 col-xs-3 bottom-buffer' + '"><a id="' + e.results[i].id + '" href="" onclick="detalleTv(this.id)"><img class="' + "img-responsive  shadow_movie" + '" src="' + tmdb.images_uri + "/w300" + e.results[i].poster_path + '"><div class="' + 'carousel-caption' + '"><h3></h3></div></a></div>';
                if (j == 4) {
                    componente += '</div>';
                    j = 0;
                }
            }
            $('#content_serie').html(componente);
        }, function(e) {
            console.log(e);
        });
    }
    
}

function favoriteSeries(series)
{
    
    event.preventDefault();
    link('vistas/listaFavoritos.php','#contenedor');
    var aux=0;
    for (var i = 0 ;  i <series.length; i++) {
        tmdb.call("/tv/" + series[i].id, {
        "language": "es"
    }, function(e) {
        console.log(i);
       
            $('#activeRow').append($('<div></div>').addClass('col-sm-3').append($('<a></a>').addClass('thumbnail')

                .append($('<img id='+i+'>').addClass('img-responsive').attr('src',tmdb.images_uri + "/w780" + e.poster_path))
                ).attr('onClick','detalleTv('+e.id+')'));

            
        
                                        
        

    });

    }
}