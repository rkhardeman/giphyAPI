var subjects =["Deadpool", "Thor", "Wonder Woman (Gadot)"],s;
var limit = "&limit=10";
var apiKey = "&api_key=dc6zaTOxFJmzC";

var gifDiv =[];


function displayButtons() {

  for (var s = 0; s < subjects.length; s++) {
      var d = $("<button .btn-info>");
      d.addClass("subjects");
      d.attr("data", subjects[s]);
      d.text(subjects[s]);
      d.attr("data-state", $(this).attr("data-state", "animate"));
      $("#subjectBtn").append(d);
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
		    	gifImage.attr("src", results[i].images.fixed_height_still.url);
		    	gifImage.attr("data-still", results[i].images.fixed_height_still.url);
		    	gifImage.attr("data-animate", results[i].images.fixed_height.url);
		    	gifImage.attr("data-state", "still");
		    	
		    	gifDiv.prepend(gifImage);

		  	  	$(".gifContainer").prepend(gifDiv);

		  	  	$("img").on('click', function(){
				      
				      var state = $(this).attr("data-state");

				      if (state === 'still') {
				        $(this).attr('src', $(this).data('animate'));
				        $(this).attr('data-state', 'animate');
				      } else {
				        $(this).attr('src', $(this).data('still'));
				        $(this).attr('data-state', 'still');
				      }
				    });// end of img on click

    		}; // end of for loop
		}); // end of ajax/done
	});// end of on click event
} // end of display buttons


//on document ready call the displayButtons function to create subject buttons
$(document).ready(function() {
	displayButtons();
	});