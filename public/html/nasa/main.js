var picOfDayurl = "https://api.nasa.gov/planetary/apod?api_key=ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo";


$.ajax({
    url: picOfDayurl,
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
        $("#reqObject").text(picOfDayurl);
        $("#returnObject").text(JSON.stringify(result, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
    }
});


var asteroidsUrl = "https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo"
$(document).ready(function () {
    $('asteroidsBtn').click(function () {
        $.ajax({
            url: asteroidsUrl,
            success: function (results) {
                $('#asteroids').attr('src', result.url);
            }
        })
    })
})
// NASA API ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo