$(document).ready(function() {



$('#principal').click(function(event) {
        event.preventDefault();
        link('index', '.change');
    });

$('#registrarse').click(function(event) {
        event.preventDefault();
        link('registro', '.change');
    });

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