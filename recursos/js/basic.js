$(document).ready(series());

function series()
{
    tmdb.call("/genre/tv/list", 
    {
        "language": "es"
    },
    function(e){
        console.log(e.genres);

        for (var i = 0; i < e.genres.length; i++) 
        {
            $('.generoSeries').append('<li><a href="#" id="'+e.genres[i].id+'">'+e.genres[i].name+'</a></li>'); 
        };    
       
    }, 
    function(e){
        console.log("Error: "+e)
    }
    );
}