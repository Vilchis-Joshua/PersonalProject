function startUp() {
    
    if (localStorage.length == 0) {
        var text = 'You have no saved photos yet!';
        document.getElementById('display').innerHTML = text;
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            //var image = document.createElement('img');
            var image = $('img');
            var text = localStorage.getItem(i);
            image.attr('id', text);
            $("#displaySaved").append(image);
        }
    }
}