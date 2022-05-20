var currentScrollTop = 0;
            $(document).ready(function(){
                scrollController();
                $(window).scroll(function(){
                    scrollController();
                });
            });

            function scrollController(){
                currentScrollTop = $(window).scrollTop();
                if(currentScrollTop>100){
                    $("#cm_header").addClass("fixed");
                    $(".btn_find_store").addClass("navred");
                } else{
                    $("#cm_header").removeClass("fixed")
                    $(".btn_find_store").removeClass("navred");
                }
            }