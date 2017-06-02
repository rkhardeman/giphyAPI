var queryURL = 
	"http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho";


function(){}

$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function(response){
	console.log(response);
    var gifURL = response.data.image_url;
    var gif = $("<img>").attr("src", gifURL);
    $("#gifContainer").html(gif);

})

