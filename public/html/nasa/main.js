var url = "https://api.nasa.gov/planetary/apod?date=";
var apiKey = "&api_key=ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo";
var d;
var picLink;
var index = 1;

$(document).ready(function () {
    $('#apodBtn').click(function () {
        //var date = new Date();
        //document.getElementById('apod_img_id').style.visibility = 'hidden';
        $('#apod_img_id').show();
        //document.getElementById('thisDate').value;
        d = new Date(document.getElementById('thisDate').value);
        var dd = d.getDate();
        var mm = d.getMonth() + 1; //January is 0!
        var yyyy = d.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        d = yyyy + '-' + mm + '-' + dd;
        $.ajax({
            url: url + d + apiKey,
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
                $("#picDescrip").text(result.explanation);
                $("#main_title").text(result.title);
                $("returnObject").hide();
                picLink = result.url;
                console.log(picLink);
            }
        });
    })

    $('#savePic').click(function () {
        //if (localStorage.length == 0) {
        //    var key = 1;
        //    localStorage.setItem(key, picLink)
        //} else {
        //    var z;
        //}

        console.log('localstorage length: ' + localStorage.length);
        if (localStorage.length == 0) {
            index = 1;
            localStorage.setItem(index, picLink);
            index++;
        } else {
            for (var i = 0; i < localStorage.length; i++) {
                var image = localStorage.getItem(i);
                if (image === picLink) {
                    alert('You already have this image saved!');
                } else {
                    localStorage.setItem(index, picLink);
                    index++;
                }
            }
        }

    })

    $('#apod_img_id').hide();
})


//$(document).ready(function () {
//    $('apodBtn').click(function () {
//        $('#picDescrip').text('working?');

//        $.ajax({
//            url: url + photoDate + apiKey,
//            succes: function (result) {
//                if (result.media_type == "video") {
//                    //Show the video ID
//                    $("#main_title").hide();
//                    $("#apod_vid_id").show();
//                    $("#hideImageLink").hide();
//                    $("#hideDescrip").show();
//                    $("#hideNFO").show();
//                    $("#apod_hdurl").hide();
//                    $("#hideTable").show();
//                    $("#apod_vid_id").attr("src", result.url);
//                    $("#errorMessage").hide();
//                    //Hide the image ID
//                    $("#apod_img_id").hide();
//                }
//                //Control what happens with an image
//                else {
//                    //Show the image ID
//                    $("#main_title").hide();
//                    $("#apod_img_id").show();
//                    $("#hideImageLink").show();
//                    $("#apod_hdurl").show();
//                    $("#picDescrip").show();
//                    $("#hideNFO").show();
//                    $("#hideTable").show();
//                    $("#apod_img_id").attr("src", result.url);
//                    $("#errorMessage").hide();
//                    //Hide the video ID
//                    $("#apod_vid_id").hide();

//                }
//                $("#reqObject").text(url);
//                $("#returnObject").text(JSON.stringify(result, null, 4));
//                var address = '<a href="' + result.hdurl + '">' + hdVarLink + '</a>';
//                $('#apod_hdurl').html(address);
//                $("#apod_explanation").text(description + result.explanation);
//                $("#apod_title").text(result.title);
//            }
//        })
//    })
//})


// NASA API ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo