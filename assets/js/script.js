$( document ).ready(function() {
$(".button1").on("click", function () {
    

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=0YZMaAe5LpBkSAjwLAJQQGizh4U3cGGd&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
        })
    .then(function(response) {
        console.log(response);
        console.log(queryURL);

        var  search= $(this).attr("inputAddress1");
        console.log(search);
        var recordNums="#Number";
        console.log(recordNums);
        var startYear="inputAddress2";
        console.log(startYear);
        var endYear="inputAddress3";
        console.log(endYear);
});
});
});