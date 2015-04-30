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

function mouseOutImage(img){
	console.log(img.id);

}

var imagenes = ""; 
function changeImage()
{
	if(document.getElementById('slide')){
		var imagen = document.getElementById('slide');
		imagenes = imagen;
		imagen.setAttribute( "src", listImg[imageIndex]);
		imageIndex++;
		if(imageIndex >= listImg.length)
		{
			imageIndex = 0;
		}
	}
	
}

var intervalo =  setInterval(changeImage, 4000);
imagen.onClic = function(){
	clearInterval(intervalo);
};
