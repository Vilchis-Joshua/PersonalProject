function startUp() {
    
    if (localStorage.length == 0) {
        var text = 'You have no saved photos yet!';
        document.getElementById('display').innerHTML = text;
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            //var image = document.createElement('img');
            var image = document.createElement('img');
            image.setAttribute('id', ('image ' + 1));
            var saved = localStorage.getItem((i + 1));
            console.log('saved: ' + saved);
            image.src = saved;
            image.setAttribute('width', '250px');
            image.setAttribute('height', '250px');
            console.log(image.src);
            document.getElementById('displaySaved').appendChild(image)
        }
    }
}