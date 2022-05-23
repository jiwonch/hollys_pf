var ct=0;
        var imgs = new Array("img/index/banner_1.jpg", "img/index/banner_2.jpg", "img/index/banner_3.jpg", "img/index/banner_4.jpg", "img/index/banner_5.jpg", "img/index/banner_6.jpg");
        setTimeout(progress, 2000);
        function progress(){
            var ch=document.getElementById('w8_banner');
            ch.src=imgs[ct];
            ct++;
            setTimeout(progress, 2000);
            if(ct>5){
                ct=0;
            }
        }