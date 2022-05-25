// 햄버거 메뉴 열리고 닫힘

$(document).ready(function () {
    $(".hamberger").click(function () {
        $(".hamberger").toggleClass("active");
        $("#header_nav").toggleClass("nav_hide");
    });

    $("#header_nav ul li a").click(function(){
        $(".hamberger").toggleClass("active");
        $("#header_nav").toggleClass("nav_hide");
    });
})