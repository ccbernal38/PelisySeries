$(document).ready(principal());
var listImg = ["", "", "", "", ""];
var imageIndex = 1;
var all_movies;
var all_tv;

function principal() 
{

//------------------------
//SLIDER
//------------------------
    tmdb.call("/discover/movie", {
        "page": 1,
        "language": "es",
        "sort_by": "popularity.desc",
        "year": 2015,
        include_adult: false
    }, function(e) {
    	all_movies = e;
    	all_movie_pages = e.total_pages;
        $('#slide1').find("img").attr("src", tmdb.images_uri + "/w780" + e.results[2].backdrop_path);
        $('#slide1').find("img").attr("alt", e.results[2].title);
        $('#slide1').find("img").addClass("img-responsive");
        $('#slide1').find("a").attr("onclick", "detallePelicula" + "(" + e.results[2].id + ")");
        $('#slide1').find("a").attr("style", "color: white");
        $("#slide1").find("h3").text(e.results[2].title);
        for (var i = 0; i < 8; i++) 
        {
            if (i == 0) {
                most_view_movie = e.results[i];
            }
            if (!e.results[i + 3].backdrop_path != null) {
                //listImg[i] = tmdb.images_uri + "/w780" + e.results[i + 3].backdrop_path;
                listImg[i] = e.results[i + 3];
            }
            var slide = '#slide'+(i+1);
            $(slide).find('img').attr("src", tmdb.images_uri + "/w780" + e.results[i].backdrop_path);
            $(slide).find('img').attr("alt", e.results[i].title);
            $(slide).find("a").attr("onclick", "detallePelicula" + "(" + e.results[i].id + ")");
            $(slide).find("a").attr("style", "color: white");
            $(slide).find("p").text(e.results[i].title);
            $(slide).find("h3").text(e.results[i].original_title);
            $(slide).find("img").addClass("img-responsive");


        };  
//------------------------  
//PELICULAS DESTACADAS
//------------------------

        j = 1;
        for (var i = 0; j < 4; i++) {
            $("#pelis" + j).find("a").attr("id", e.results[i].id);
            
            $("#pelis" + j).find("a").attr("onclick", "detallePelicula" + "(this.id)");
            $("#pelis" + j).find("img").attr("src", tmdb.images_uri + tmdb.size + e.results[i].poster_path);
            $("#pelis" + j).find("img").attr("class", "img-responsive");
            $("#pelis" + j).find("img").addClass("shadow_movie");
            $("#pelis" + j).find("p").text(e.results[i].title);
            j++;
        };    
    }, function(e) {
        console.log("Error: " + e)
    });

//------------------------------------------------------------------------------

//------------------------
//POSTER
//------------------------
    tmdb.call("/discover/tv", {
        "language": "es",
        "sort_by": "popularity.desc",
        include_adult: false
    }, function(e) {
    	all_tv = e;
        all_tv_pages = e.total_pages;
        j = 1;
        for (var i = 1; j < 9; i++) {
            if (e.results[i].backdrop_path != null) {
                $("#fav" + j).find("a").attr("id", e.results[i].id);
                $("#fav" + j).find("a").attr("href", "");
                $("#fav"+j).find("a").attr("onclick","detalleTv"+"("+e.results[i].id+")");
                $("#fav" + j).find("img").attr("src", tmdb.images_uri + tmdb.size + e.results[i].backdrop_path);
                $("#fav" + j).find("img").attr("class", "img-responsive");
                $("#fav" + j).find("img").addClass("shadow_tv");
                $("#fav" + j).find("h3").text(e.results[i].original_name);
                j++;
            }
        };
//------------------------
//SERIES DESTACADAS
//------------------------
        j = 1;
        for (var i = 0; j < 4; i++) {
            $("#serie" + j).find("a").attr("id", e.results[i].id);
            $("#serie" + j).find("a").attr("onclick", "detalleTv" + "(this.id)");
            $("#serie" + j).find("a").attr("href", "");
            $("#serie" + j).find("img").attr("src", tmdb.images_uri + tmdb.size + e.results[i].poster_path);
            $("#serie" + j).find("img").attr("class", "img-responsive");
            $("#serie" + j).find("img").addClass("shadow_tv");
            $("#serie" + j).find("p").text(e.results[i].original_name);
            j++;
        };
    }, function(e) {
        console.log("Error: " + e)
    });
}