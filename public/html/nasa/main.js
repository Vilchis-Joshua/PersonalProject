var url = "https://api.nasa.gov/planetary/apod?date=";
var apiKey = "&api_key=ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo";
var d;
var picLink;
var index;

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
        if (picLink != null) {
            var isSaved = 0;
            if (localStorage.length == 0) {
                index = 0;
            }

            for (var i = 0; i < localStorage.length; i++) {
                var x = localStorage.getItem(i);
                if (x === picLink) {
                    isSaved = 1;
                }
            }

            if (isSaved == 1) {
                return;
            } else {
                console.log(index);
                localStorage.setItem(index, picLink);
                index++;
            }
        }
    })

    $('#apod_img_id').hide();
})


// NASA API ssJOmcyAlMslRMBklollwmpbUSmejdcgJlsemAzo