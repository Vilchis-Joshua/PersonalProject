function searchInfo() {
    var searchBarInfo = $('#movieSearch').val();
    //$(document).ready(() => {
    //    $('btn1').click(() => {
    //        console.log('Inside function with val: ' + $('#movieSearch').val())
    //        console.log('Inside function with text: ' + $('#movieSearch').text())

    //    })
    //})

    var params = { s: searchBarInfo, apikey: 'a12116e9' };
    console.log('Search: ' + search);
    $.get('https://www.omdbapi.com/', params, (searchBarInfo, status) => {
        console.log(status);

        findMovie(searchBarInfo);
    });
}

function findMovie(x) {
    console.log('Search # 2' + x);
}