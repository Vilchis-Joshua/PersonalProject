function searchInfo() {
    var search = $('#movieSearch').val();
    var x = $(document).ready(() => {
        $('btn1').click(() => {
            console.log('Inside function with val: ' + $('#movieSearch').val())
            console.log('Inside function with text: ' + $('#movieSearch').text())

        })
    })
    console.log('Search: ' + x);
}