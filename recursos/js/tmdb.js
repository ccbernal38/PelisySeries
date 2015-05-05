window.tmdb = {
	"api_key": "9244b9fe50c97472e75c8deddde5d994",
	"base_uri": "http://api.themoviedb.org/3",
	"images_uri": "http://image.tmdb.org/t/p",
	"timeout": 2000,
	"size": "/w780",

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
var imagenes = ""; 
function changeImage()
{
	if($("#slide")){
		$("#slide").attr("src", listImg[imageIndex]);
		imageIndex++;
		if(imageIndex >= listImg.length)
		{
			imageIndex = 0;
		}
	}
}

var intervalo =  setInterval(changeImage, 4000);
var season;
function DetalleTv(id)
{ 
	event.preventDefault();
    link('vistas/infoseries.php', '#contenedor');
    tmdb.call("/tv/"+id, 
	{
		"page":1,
		"language": "es"
	},
	function(e){
		
        $('#posterTV').find("img").attr("src",tmdb.images_uri+"/w342"+e.poster_path);
        $('#tituloTV').find("h2").text(e.name);
       // console.log(e);
        for (var i = 0 ; i <e.seasons.length ; i++) {

        	
        	

        	$('#seasons').append($('<a></a>').addClass("col-xs-offset-3 col-xs-9").attr("href","").append('Temporada'+(i+1)));
        	
        	$('#accordion').append($('<div></div>').addClass("panel panel-default").attr("id","default"+i).append($('<div></div>').addClass('panel-heading')
        	.append($("<h4></h4>").addClass("panel-title").append($("<a></a>").attr("data-toggle","collapse").attr("data-parent","#accordion").
        	attr("href","#collapse"+i).append("Temporada"+" "+(i+1)))
        			)).append($("<div></div>").attr("id","collapse"+i).addClass("panel-collapse collapse in")
        	.append($("<div></div>").addClass("panel-body"))
        	));
        	detalleTemporada(id,e.seasons[i].season_number,i);
        }
        $('#sipnosisTV').find("p").append(e.overview);

       

	}, 
	function(e){
		console.log("Error: "+e)
	}
	);
}

function detalleTemporada(Tvid,SeasonNumber,num)
{
	tmdb.call("/tv/"+Tvid+"/season/"+SeasonNumber, 
	{
		"language": "es"
	},
	function(e){
		console.log(e);
		$('#collapse'+num).find("div").append(e.overview);
		$('#collapse'+num).append($('<table></table>').addClass('table').attr('id','table'+num).append($('<tr></tr>').
			append($('<th></th>').append('Nombre')).append($('<th></th>').append('Fecha lanzamiento'))
			.append($('<th></th>').append('Puntuación promedio'))));

		for (var i = 0; i < e.episodes.length; i++) {
			$('#table'+num).append($('<tr></tr>').
			append($('<td></td>').append(e.episodes[i].name)).append($('<td></td>').append(e.episodes[i].air_date))
			.append($('<td></td>').append(e.episodes[i].vote_average)));

		}

	}, 
	function(e){
		console.log("Error: "+e)
	}
	);
}

function spa(vista)
{
    
}