function searchInfo() {
    var searchBarInfo = $('#movieSearch').val();
    //$(document).ready(() => {
    //    $('btn1').click(() => {
    //        console.log('Inside function with val: ' + $('#movieSearch').val())
    //        console.log('Inside function with text: ' + $('#movieSearch').text())

    //    })
    //})

    var params = { s: searchBarInfo, apikey: 'a12116e9' };
    console.log('Search: ' + searchBarInfo);
    $.get('https://www.omdbapi.com/', params, (data, status) => {
        console.log(status);

        findMovie(data);
    });
}

function findMovie(data) {
    if (data.Search && data.Search.length > 0) {
        var resultList = $('lists');
        resultList.empty();
    }
}