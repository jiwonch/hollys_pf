$(function(){
    $("#video_icon").click(function(){
        $("#video_popup").fadeIn();
        $("#close_btn").fadeIn();
    });

    $("#close_btn").click(function(){
        $("#video_popup").fadeOut();
        $("#close_btn").fadeOut();
    });
});