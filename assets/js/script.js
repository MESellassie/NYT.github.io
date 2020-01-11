// $("button").on("click", function () {
//     var  search= $(this).attr("");
//     var recordNums=
//     var startYear=
//     var endYear=

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=0YZMaAe5LpBkSAjwLAJQQGizh4U3cGGd";

    $.ajax({
        url: queryURL,
        method: "GET"
        })
    .then(function(response) {
        console.log(response)
    });
