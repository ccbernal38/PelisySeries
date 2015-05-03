$(document).ready(principal());
var listImg = ["", "", "", "", ""];
var imageIndex = 1;

function principal(){
	//SLIDER
	tmdb.call("/discover/movie", 
	{
		"page":1,
		"language": "es",
		"sort_by": "popularity.desc",
		"year": 2015,
		include_adult: false
	},
	function(e){
	   	console.log("Success: "+e)
	   	var seccionSlider = document.getElementById("sectionSlide");  	
	   	var imgS = document.createElement("img");
	   	imgS.setAttribute("src", tmdb.images_uri+"/w780"+e.results[3].backdrop_path);
	   	imgS.setAttribute("class", "img-responsive");
	   	imgS.setAttribute("id", "slide");
	   	seccionSlider.appendChild(imgS);

	   	for (var i = 0; i < 5; i++) 
	   	{
	   		if(!e.results[i+3].backdrop_path != null)
	   		{
	   			listImg[i]=tmdb.images_uri+"/w780"+e.results[i+3].backdrop_path;
	   		}	   		
   		};   		
	   	
	}, 
	function(e){
		console.log("Error: "+e)
	}
	);

	//POSTER
	tmdb.call("/discover/tv", 
	{
		"page":1,
		"language": "es",
		"sort_by": "popularity.desc",
		"first_air_date.gte": "2014-01-01",
		include_adult: false
	},
	function(e){
		j=1;
	   	for (var i = 1; j < 9; i++) 
	   	{	   		
	   		if(e.results[i].backdrop_path != null)
	   		{
	   			$("#fav"+j).find("a").attr("id",e.results[i].id);
		   //		$("#fav"+j).find("a").attr("href","infoSeries.php?id="+e.results[i].id);
		   		$("#fav"+j).find("a").attr("onclick","DetalleTv"+"("+""+e.results[i].id+")");
	   			$("#fav"+j).find("img").attr("src", tmdb.images_uri+tmdb.size+e.results[i].backdrop_path );	
	   			$("#fav"+j).find("img").attr("class", "img-responsive" );	
	   			$("#fav"+j).find("h3").text(e.results[i].original_name);
	   			$("#fav"+j).find("p").text(e.results[i].original_name);
	   			j++;
	   			
	   		}	   			   		
   		};	   	
	}, 
	function(e){
		console.log("Error: "+e)
	}
	);


	//PELICULAS DESTACADAS
	tmdb.call("/discover/movie", 
	{
		"page":1,
		"language": "es",
		"sort_by": "popularity.desc",
		include_adult: false
	},
	function(e){
		j=1;
	   	for (var i = 0; j < 4; i++) {
	   		$("#pelis"+j).find("a").attr("id",e.results[i].id);
	   		$("#pelis"+j).find("a").attr("onclick","DetallePeli"+"("+""+e.results[i].id+")");
	   		//$("#pelis"+j).find("a").attr("href","infoSeries.php?id="+e.results[i].id);
   			$("#pelis"+j).find("img").attr("src", tmdb.images_uri+tmdb.size+e.results[i].poster_path);	
   			$("#pelis"+j).find("img").attr("class", "img-responsive" );	
   			$("#pelis"+j).find("h3").text(e.results[i].title);
	   		j++;
   		};
	   	
	}, 
	function(e){
		console.log("Error: "+e)
	}
	);

	//SERIES DESTACADAS
	tmdb.call("/discover/tv", 
	{
		"page":1,
		"language": "es",
		"sort_by": "popularity.desc",
		include_adult: false
	},
	function(e){
	   	console.log(e)
	   	j=1;
	   	for (var i = 0; j < 4; i++) {
	   		$("#serie"+j).find("a").attr("id",e.results[i].id);
	   		$("#pelis"+j).find("a").attr("onclick","DetalleSerie"+"("+""+e.results[i].id+")");
	   		//$("#serie"+j).find("a").attr("href","infoserie.php?id="+e.results[i].id);
   			$("#serie"+j).find("img").attr("src", tmdb.images_uri+tmdb.size+e.results[i].poster_path);	
   			$("#serie"+j).find("img").attr("class", "img-responsive" );	
   			$("#serie"+j).find("h3").text(e.results[i].original_name);
	   		j++;
   		};
	   	
	}, 
	function(e){
		console.log("Error: "+e)
	}
	);

	
}

function DetalleTv(id)
{
	tmdb.call("/find",)
}