$(document).ready(function() {

$("form").on("submit", function(e){
  	e.preventDefault();
  	var movieId = $('#movieId').val();
  	getUserMovie(movieId);
  });

function getUserMovie(movie){
  $.ajax({
	url: "http://www.omdbapi.com/?s=" + movie,
  data:{},
  type: 'GET', 
  dataType: 'json',
	success: function(data) {
    var $results = $("#list").empty();
		console.log(data);
		if (data.Error){
      $results.html("No results found.");
    } else {
      data.Search.forEach(function (movie){
        var li = $("<li></li>").text(movie.Title + " " + movie.Year);
        $results.append(li);
      });
    }
    // var posterUrl = "http://www.omdbapi.com/?t=" + movie.Title;
    // $.getJSON(posterUrl, function(data){
      
    // })

    // $("<img>").attr("src", 'http://www.omdbapi.com/?t=' + movie);
    // $('body').on("click", 'li', function(movie){
    //   $('body').append(poster);
    // });
	}
  });
}

});