$(document).ready(function(){
    var apikey = "478c334c"

    $("#movieForm").submit(function(event){
        event.preventDefault()
        var result = "";
        var movie = $("#movie").val()
        var url = "http://www.omdbapi.com/?apikey=478c334c";

        $.ajax({
            method:'GET',
            url:url+"&t="+movie,
            success:function(data){
                console.log(data);

                result = `
                
                <img style="float: left;" src="${data.Poster}"/>
                <h1 style="float: left;" class="ml-2">${data.Title} (${data.Year})</h1>
                <p style="float: left;"class="ml-2">${data.Genre}</p>
                <p style="float: left;"class="ml-2">${data.Plot}</p>
                `;

                $("#result").html(result);
            }
        })
    })
})