window.tmdb = {
	"api_key": "9244b9fe50c97472e75c8deddde5d994",
	"base_uri": "http://api.themoviedb.org/3",
	"images_uri": "http://image.tmdb.org/t/p",
	"timeout": 2000,
	"size": "/w300",

	call: function(url, params, success, error){
		var params_str ="api_key="+tmdb.api_key;
		for (var key in params) {
			if (params.hasOwnProperty(key)) {
				params_str+="&"+key+"="+encodeURIComponent(params[key]);
			}
		}
		var xhr = new XMLHttpRequest();
		xhr.timeout = tmdb.timeout;
		xhr.ontimeout = function () {
			throw("Request timed out: " + url +" "+ params_str);
		};
		xhr.open("GET", tmdb.base_uri + url + "?" + params_str, true);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.responseType = "text";
		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200){
					if (typeof success == "function") {
						success(JSON.parse(this.response));	
					}else{
						throw('No success callback, but the request gave results')
					}
				}else{
					if (typeof error == "function") {
						error(JSON.parse(this.response));
					}else{
						throw('No error callback')
					}
				}
			}
		};
		xhr.send();
	}
}
var listImg = ["", "", "", "", ""];
var imageIndex = 1;




function principal()
{
	


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
	   	imgS.setAttribute("class", "slideImage");
	   	imgS.setAttribute("id", "slide");
	   	seccionSlider.appendChild(imgS);

	   	for (var i = 0; i < 5; i++) {
	   		listImg[i]=tmdb.images_uri+"/w780"+e.results[i+3].backdrop_path;
	   		
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
	   	for (var i = 1; i < 5; i++) 
	   	{
	   		$("#fav"+i).find("a").attr("id",e.results[i].id);
	   		$("#fav"+i).find("a").attr("href","infoSeries.php?id="+e.results[i].id);
	   		$("#fav"+i).find("img").attr("src", tmdb.images_uri+tmdb.size+e.results[i].backdrop_path );
	   		$("#fav"+i).find("h3").text(e.results[i].original_name);
	   		$("#fav"+i).find("p").text(e.results[i].original_name);
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
	   	for (var i = 0; i < 3; i++) {
	   		var a = document.createElement("a");
	   		a.setAttribute("href","#");
   			var img = document.createElement("img"); 	
   			img.setAttribute("id", e.results[i].id);
   			img.setAttribute("src",tmdb.images_uri+tmdb.size+e.results[i].poster_path);
   			img.setAttribute("class", "imgPoster");
   			a.appendChild(img);
   			seccion.appendChild(a);
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
	   	console.log("Success: "+e)
	   	var seccion = document.getElementById('series');   	
	   	for (var i = 0; i < 3; i++) {
	   		var a = document.createElement("a");
	   		a.setAttribute("href","#");
   			var img = document.createElement("img"); 	
   			img.setAttribute("src",tmdb.images_uri+tmdb.size+e.results[i].poster_path);
   			img.setAttribute("class", "imgPoster");
   			a.appendChild(img);
   			seccion.appendChild(a);
   		};
	   	
	}, 
	function(e){
		console.log("Error: "+e)
	}
	);

	
}

function mouseInImage(img){
	
	
	tmdb.call("/tv/"+img.id,
	{
		"language": "es"
	},
	function(e){
	   	var a = document.getElementById("4");
   		var label = document.createElement("label");
		label.appendChild(document.createTextNode(e.name));
		console.log(label);
		a.appendChild(label);
   		
	   	
	}, 
	function(e){
		console.log(e)
	}

	);

	

}

function mouseOutImage(img){
	console.log(img.id);

}

var imagenes = ""; 
function changeImage()
{
	var imagen = document.getElementById('slide');
	imagenes = imagen;
	imagen.setAttribute( "src", listImg[imageIndex]);
	imageIndex++;
	if(imageIndex >= listImg.length)
	{
		imageIndex = 0;
	}
}

var intervalo =  setInterval(changeImage, 4000);
imagen.onClic = function(){
	clearInterval(intervalo);
};
