var subjects =["deadpool", "picard", "wonder woman gadot"],s;
var limit = '&limit=10';
var apiKey = "&api_key=dc6zaTOxFJmzC";

// search query to be called by ajax function
var queryURL = 
	"https://api.giphy.com/v1/gifs/search?q=" + subjects + apiKey;

//this function creates the buttons when called
function displayButtons() {
	//increment s until it is no longer less than the subjects list
	for(s = 0; s < subjects.length; s++) {
		//create showButtons and append them to the subject-btn
		showButtons = $('<div class="col col-xs-2 col-btn"><button class="btn btn-default btn-gif" data-subject="' 
		+ subjects[s] + '"><span>' + subjects[s] + '</span></button></div>');
		$(".subject-btn").append(showButtons);
	};
};

//api call all day every day
$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function(response){
	console.log(response);
    var gifURL = response.data.image_url;
    var gif = $("<img>").attr("src", gifURL);
    $(".gifContainer").html(gif);

})


//on document ready call the displayButtons function to create subject buttons
$(document).ready(function() {
	displayButtons();
	});