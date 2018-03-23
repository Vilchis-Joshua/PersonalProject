function startUp() {
    if (localStorage.length == 0) {
        var text = 'You have no saved photos yet!';
        document.getElementById('display').innerHTML = text;
    }
}