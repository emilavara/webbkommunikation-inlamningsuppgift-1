$(document).ready(function(){
    $("#movieForm").submit(function(event){
        event.preventDefault();
        var result = "";
        var movie = $("#movie").val();
        var url = "https://www.omdbapi.com/?apikey=478c334c";

        $.ajax({
            method:'GET',
            url:url+"&t="+movie,
            success:function(data){
                console.log(data);

                result = `
                <img class="poster" src="${data.Poster}" height="444px" width="300px">
                <h1 class="title">${data.Title}</h1>
                <p class="genre-year">(${data.Year}) | ${data.Genre} | ${data.Runtime}</p>
                <br>
                <p class="plot">${data.Plot}</p>
                <br>
                <span class="stars"><span>Stars &mdash;</span> ${data.Actors}</span> <br>
                <span class="writers"><span>Writers &mdash;</span> ${data.Writer}</span> <br>
                <span class="director"><span>Director &mdash;</span> ${data.Director} </span> <br>
                <!-- <a class="imdb-link"><img src="/img/imdb.jpg" height="40px"></a>  -->
                `
                ;

                $("#result").html(result);
            }
        })
    })
})