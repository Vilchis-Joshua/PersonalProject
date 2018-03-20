function searchInfo() {
    var search = $('#movieSearch').val();
    //$(document).ready(() => {
    //    $('btn1').click(() => {
    //        console.log('Inside function with val: ' + $('#movieSearch').val())
    //        console.log('Inside function with text: ' + $('#movieSearch').text())

    //    })
    //})
    console.log('Search: ' + search);

    findMovie(search);
}

function findMovie(x) {
    console.log('Search # 2' + x);
}