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

//======================================  Week09   ===================================
app.get('/getRate', (req, res) => {
    calculateRate(req, res);
}
);

function calculateRate(req, res) {
    var path = url.parse(req.url, true);

    var lt = path.query.lettertype;
    lt = lt.toLowerCase();

    var result = 0;
    var weight = path.query.weight;

    if (lt === 'stamped') {
        //console.log(opOne + opTwo);
        if (Number(weight) <= 1 && Number(weight) > 0) {
            result += 0.50;
        } else if (Number(weight) <= 2 && Number(weight) > 1) {
            result += 0.71;
        } else if (Number(weight) <= 3 && Number(weight) > 2) {
            result += 0.92;
        } else {
            result += 1.13;
        }
    } else if (lt === 'metered') {
        //console.log(opOne - opTwo);
        if (Number(weight) <= 1 && Number(weight) > 0) {
            result += 0.47;
        } else if (Number(weight) <= 2 && Number(weight) > 1) {
            result += 0.68;
        } else if (Number(weight) <= 3 && Number(weight) > 2) {
            result += 0.89;
        } else {
            result += 1.10;
        }
    } else if (lt === 'flats') {
        //console.log(opOne * opTwo);
        if (Number(weight) <= 1 && Number(weight) > 0) {
            result += 1.00;
        } else if (Number(weight) <= 2 && Number(weight) > 1) {
            result += 1.21;
        } else if (Number(weight) <= 3 && Number(weight) > 2) {
            result += 1.42;
        } else if (Number(weight) <= 4 && Number(weight) > 3) {
            result += 1.63;
        } else if (Number(weight) <= 5 && Number(weight) > 4) {
            result += 1.84;
        } else if (Number(weight) <= 6 && Number(weight) > 5) {
            result += 2.05;
        } else if (Number(weight) <= 7 && Number(weight) > 6) {
            result += 2.26;
        } else if (Number(weight) <= 8 && Number(weight) > 7) {
            result += 2.47;
        } else if (Number(weight) <= 9 && Number(weight) > 8) {
            result += 2.68;
        } else if (Number(weight) <= 10 && Number(weight) > 9) {
            result += 2.89;
        } else if (Number(weight) <= 11 && Number(weight) > 10) {
            result += 3.10;
        } else if (Number(weight) <= 12 && Number(weight) > 11) {
            result += 3.31;
        } else {
            result += 3.52;
        }
    } else {
        //console.log(opOne / opTwo);
        if (Number(weight) <= 1 && Number(weight) > 0) {
            result += 3.50;
        } else if (Number(weight) <= 2 && Number(weight) > 1) {
            result += 3.50;
        } else if (Number(weight) <= 3 && Number(weight) > 2) {
            result += 3.50;
        } else if (Number(weight) <= 4 && Number(weight) > 3) {
            result += 3.50;
        } else if (Number(weight) <= 5 && Number(weight) > 4) {
            result += 3.75;
        } else if (Number(weight) <= 6 && Number(weight) > 5) {
            result += 3.75;
        } else if (Number(weight) <= 7 && Number(weight) > 6) {
            result += 3.75;
        } else if (Number(weight) <= 8 && Number(weight) > 7) {
            result += 3.75;
        } else if (Number(weight) <= 9 && Number(weight) > 8) {
            result += 4.10;
        } else if (Number(weight) <= 10 && Number(weight) > 9) {
            result += 4.45;
        } else if (Number(weight) <= 11 && Number(weight) > 10) {
            result += 4.80;
        } else if (Number(weight) <= 12 && Number(weight) > 11) {
            result += 5.15;
        } else {
            result += 5.50;
        }
    }

    var d = { lettertype: lt, weight: weight, result: result };
    res.render('pages/results', d);
}



var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";


$.ajax({
    url: url,
    success: function (result) {
        if ("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
            $("#copyright").text("Image Credits: " + "Public Domain");
        }

        if (result.media_type == "video") {
            $("#apod_img_id").css("display", "none");
            $("#apod_vid_id").attr("src", result.url);
        }
        else {
            $("#apod_vid_id").css("display", "none");
            $("#apod_img_id").attr("src", result.url);
        }
        $("#reqObject").text(url);
        $("#returnObject").text(JSON.stringify(result, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
    }
});


app.listen(app.get('port'), () => console.log('listening to: ' + app.get('port')));

// NASA API ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo