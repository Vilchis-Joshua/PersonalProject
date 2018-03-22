//var picOfDayurl = "https://api.nasa.gov/planetary/apod?api_key=ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo";


//$.ajax({
//    url: picOfDayurl,
//    success: function (result) {
//        if ("copyright" in result) {
//            $("#copyright").text("Image Credits: " + result.copyright);
//        }
//        else {
//            $("#copyright").text("Image Credits: " + "Public Domain");
//        }

//        if (result.media_type == "video") {
//            $("#apod_img_id").css("display", "none");
//            $("#apod_vid_id").attr("src", result.url);
//        }
//        else {
//            $("#apod_vid_id").css("display", "none");
//            $("#apod_img_id").attr("src", result.url);
//        }
//        $("#reqObject").text(picOfDayurl);
//        $("#returnObject").text(JSON.stringify(result, null, 4));
//        $("#apod_explaination").text(result.explanation);
//        $("#apod_title").text(result.title);
//    }
//});


var today = new Date();
var url = "https://api.nasa.gov/planetary/apod?date=";
var apiKey = "&api_key=ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo";
var photoDate = $('#thisDate').val();

$(document).ready(function () {
    $('apodBtn').click(function () {
        $.ajax({
            url: url + photoDate + apiKey,
            succes: function (result) {
                $('#picDescrip').text('working?');
                if (result.media_type == "video") {
                    //Show the video ID
                    $("#main_title").hide();
                    $("#apod_vid_id").show();
                    $("#hideImageLink").hide();
                    $("#hideDescrip").show();
                    $("#hideNFO").show();
                    $("#apod_hdurl").hide();
                    $("#hideTable").show();
                    $("#apod_vid_id").attr("src", result.url);
                    $("#errorMessage").hide();
                    //Hide the image ID
                    $("#apod_img_id").hide();
                }
                //Control what happens with an image
                else {
                    //Show the image ID
                    $("#main_title").hide();
                    $("#apod_img_id").show();
                    $("#hideImageLink").show();
                    $("#apod_hdurl").show();
                    $("#picDescrip").show();
                    $("#hideNFO").show();
                    $("#hideTable").show();
                    $("#apod_img_id").attr("src", result.url);
                    $("#errorMessage").hide();
                    //Hide the video ID
                    $("#apod_vid_id").hide();

                }
                $("#reqObject").text(url);
                $("#returnObject").text(JSON.stringify(result, null, 4));
                var address = '<a href="' + result.hdurl + '">' + hdVarLink + '</a>';
                $('#apod_hdurl').html(address);
                $("#apod_explanation").text(description + result.explanation);
                $("#apod_title").text(result.title);
            }
        })
    })
})


// NASA API ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo