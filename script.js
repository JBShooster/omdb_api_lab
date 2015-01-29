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
        var li = $("<li></li>").text(movie.Title);
        $results.append(li);
      });
    }
    $("ol").on("click","li", function(e){ 
      console.log( " this:",this);
      console.log( " parent:",$(this).parent());
      newMovie = $(this).text();
      var url= "http://www.omdbapi.com/?t=" + newMovie;
    $.getJSON(url, function(data){
      var source = $('#movie-template').html();
      var template = Handlebars.compile(source);
      var html = template({movieData: data});
      $(".container").html(html);
  });


});
	}
  });
}


});






