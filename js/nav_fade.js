$(function(){

    // display:flex; 쓰면 display:none 중복으로 사용 불가
    // 자바스크립트에서 따로 hide로 숨겨주고 시작해야함
    $('.w5c_content_2').hide();
    $('.w5c_content_3').hide();
    $('.w5c_content_4').hide();
    $('.w5c_content_5').hide();
    $('.menu_nav1').addClass('red');

    $('.menu_nav1').click(function(){
        $('.menu_nav1').addClass('red');
        $('.menu_nav2').removeClass('red');
        $('.menu_nav3').removeClass('red');
        $('.menu_nav4').removeClass('red');
        $('.menu_nav5').removeClass('red');
        $('.w5c_content_1').fadeIn();
        $('.w5c_content_2').hide();
        $('.w5c_content_3').hide();
        $('.w5c_content_4').hide();
        $('.w5c_content_5').hide();
    });

    $('.menu_nav2').click(function(){
        $('.menu_nav2').addClass('red');
        $('.menu_nav1').removeClass('red');
        $('.menu_nav3').removeClass('red');
        $('.menu_nav4').removeClass('red');
        $('.menu_nav5').removeClass('red');
        $('.w5c_content_2').fadeIn();
        $('.w5c_content_1').hide();
        $('.w5c_content_3').hide();
        $('.w5c_content_4').hide();
        $('.w5c_content_5').hide();
    });

    $('.menu_nav3').click(function(){
        $('.menu_nav3').addClass('red');
        $('.menu_nav1').removeClass('red');
        $('.menu_nav2').removeClass('red');
        $('.menu_nav4').removeClass('red');
        $('.menu_nav5').removeClass('red');
        $('.w5c_content_3').fadeIn();
        $('.w5c_content_1').hide();
        $('.w5c_content_2').hide();
        $('.w5c_content_4').hide();
        $('.w5c_content_5').hide();
    });

    $('.menu_nav4').click(function(){
        $('.menu_nav4').addClass('red');
        $('.menu_nav1').removeClass('red');
        $('.menu_nav2').removeClass('red');
        $('.menu_nav3').removeClass('red');
        $('.menu_nav5').removeClass('red');
        $('.w5c_content_4').fadeIn();
        $('.w5c_content_1').hide();
        $('.w5c_content_2').hide();
        $('.w5c_content_3').hide();
        $('.w5c_content_5').hide();
    });

    $('.menu_nav5').click(function(){
        $('.menu_nav5').addClass('red');
        $('.menu_nav1').removeClass('red');
        $('.menu_nav2').removeClass('red');
        $('.menu_nav3').removeClass('red');
        $('.menu_nav4').removeClass('red');
        $('.w5c_content_5').fadeIn();
        $('.w5c_content_1').hide();
        $('.w5c_content_2').hide();
        $('.w5c_content_3').hide();
        $('.w5c_content_4').hide();
    });
});