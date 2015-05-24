function detalleTemporada(Tvid, SeasonNumber, num) {
    tmdb.call("/tv/" + Tvid + "/season/" + SeasonNumber, {}, function(e) {
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
            $('#posterTV').find("img").attr("src", tmdb.images_uri + "/w342" + e.poster_path);
            $('#tituloTV').find("h2").text(e.name);
            for (var i = 0; i < e.seasons.length; i++) {
                $('#seasons').append($('<a></a>').addClass("col-xs-offset-3 col-xs-9").attr("href", "").append('Temporada' + (i + 1)));
                $('#accordion').append($('<div></div>').addClass("panel panel-default").attr("id", "default" + i).append($('<div></div>').addClass('panel-heading').append($("<h4></h4>").addClass("panel-title").append($("<a></a>").attr("data-toggle", "collapse").attr("data-parent", "#accordion").attr("href", "#collapse" + i).attr("aria-expanded", "false").attr("class", "collapsed").append("Temporada" + " " + (i + 1))))).append($("<div></div>").attr("id", "collapse" + i).addClass("panel-collapse collapse in").append($("<div></div>").addClass("panel-body"))));
                setTimeout(detalleTemporada(id, e.seasons[i].season_number, i), 500);
            }
            console.log(e);
            $('#sipnosisTV').find("p").append(e.overview);
        }, 100);
    }, function(e) {
        console.log("Error: " + e)
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
        $('#posterMovie').find("img").attr("src", tmdb.images_uri + "/w342" + e.poster_path);
        $('#tituloMovie').find("h2").text(e.title + " (" + e.original_title + ")");
        // console.log(e);
        $('#sipnosisMovie').find("p").append(e.overview);
    }, function(e) {
        console.log("Error: " + e)
    });
    tmdb.call("/movie/" + id + "/credits", {
        "language": "es"
    }, function(e) {
        console.log("elenco");
        console.log(e);
        $('#accordion').append($('<div></div>').addClass("panel panel-default").attr("id", "default" + i).append($('<div></div>').addClass('panel-heading').append($("<h4></h4>").addClass("panel-title").append($("<a></a>").attr("data-toggle", "collapse").attr("data-parent", "#accordion").attr("href", "#collapse" + i).attr("aria-expanded", "false").attr("class", "collapsed").append("Elenco")))).append($("<div></div>").attr("id", "collapse" + i).addClass("panel-collapse collapse in").append($("<div></div>").addClass("panel-body"))));
        for (var i = 0; i < 7; i++) {
            $('#collapseundefined').find("div").append($("<p></p>").append("<a>" + e.cast[i].name + "</a>").append().append(" como " + e.cast[i].character));
        }
    }, function(e) {
        console.log("Error: " + e)
    });
    return false;
}