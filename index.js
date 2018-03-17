var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));
const connectionString = 'postgres://postgres:hello@localhost:5433/NodeProject';
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(app.get('port'), () => console.log('listening to: ' + app.get('port')));