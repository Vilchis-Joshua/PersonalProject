function searchInfo() {
    var search = $('#movieSearch').val();
    //$(document).ready(() => {
    //    $('btn1').click(() => {
    //        console.log('Inside function with val: ' + $('#movieSearch').val())
    //        console.log('Inside function with text: ' + $('#movieSearch').text())

    //    })
    //})
    var apiKey = 'http://www.omdbapi.com/?apikey=[yourkey]&'
    console.log('ApiKey: ' + apiKey);
    console.log('Search: ' + search);
    $.get('http://www.omdbapi.com/');
    findMovie(search);
}

function findMovie(x) {
    console.log('Search # 2' + x);
}