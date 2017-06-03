var subjects =["deadpool", "picard", "wonder woman gadot"],s;
var limit = '&limit=10';
var apiKey = "&api_key=dc6zaTOxFJmzC";

var gifDiv =[];


function displayButtons() {

  for (var s = 0; s < subjects.length; s++) {
      var d = $('<button .btn-info>');
      d.addClass('subjects');
      d.attr('data', subjects[s]);
      d.text(subjects[s]);
      d.attr('data-state', $(this).attr('data-state', 'animate'));
      $('#subjectBtn').append(d);
    }

    $("button").on("click",function(){
	$(".gifContainer").empty();
	var search = $(this).attr("data");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + limit + apiKey;

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response){
	console.log(response);

		var results = response.data;

		    for (var i = 0; i < results.length; i++){
		    	gifDiv = $("<div class='gif'>");

		    	var gifImage = $("<img>");
		    	gifImage.attr("src", results[i].images.fixed_height.url);
		    	
		    	gifDiv.prepend(gifImage);

		  	  	$(".gifContainer").prepend(gifDiv);

    		}; // end of for loop
		}); // end of done function
	});// end of on click function
} // end of display function

//on document ready call the displayButtons function to create subject buttons
$(document).ready(function() {
	displayButtons();
	});