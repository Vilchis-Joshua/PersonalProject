function searchInfo() {
    var search = $('#movieSearch').val();
    //$(document).ready(() => {
    //    $('btn1').click(() => {
    //        console.log('Inside function with val: ' + $('#movieSearch').val())
    //        console.log('Inside function with text: ' + $('#movieSearch').text())

    //    })
    //})

    var params = { s: search, apikey: 'http://www.omdbapi.com/?apikey=[a12116e9]&' };
    console.log('Search: ' + search);
    $.get('http://www.omdbapi.com/', params, (search, status) => {
        console.log(status);

        findMovie(search);
    });
}

function findMovie(x) {
    console.log('Search # 2' + x);
}