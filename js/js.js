jQuery(document).ready(function($) {





    jQuery('.main-menu .menu-toggle').on('click', function(){
        $(this).toggleClass('active');
        jQuery(this).siblings('#menu-top-menu').toggleClass('active');
    });

    $(".register-button").each(function(){
        $(this).click(function(){
            $('#register-popup').addClass('active');
        });
    });

    //$(".register-button").each().on

    $('.fell .item .img').on('click', function(){
       $(this).parent('.owl-item').addClass('show-content');
        console.log($(this).parent('.owl-item'));
       //$(this).parent('.owl-item').siblings().removeClass('show-content');
    });

    $('.fell .item').each(function(){
        $(this).click(function(){
            $(this).addClass('show-content');
            $(this).siblings().removeClass('show-content');
        });
    });

    $('#register-popup .close').on('click', function(){
        $('#register-popup').removeClass('active');
    });

    $(".owl-carousel").each(function() {
        if($(this).hasClass('student')){
            $(this).owlCarousel({
                //dotsContainer: '.dotsCont',
                dots:false,
                loop:true,
                nav:true,
                margin:80,
                autoplay:true,
                autoplayHoverPause:true,
                navText:['<span class="prev">prev</span>', '<span class="next">next</span>'],
                items:3
            });
        }

        if($(this).hasClass('set-dot')){
            $(this).owlCarousel({
                dotsContainer: '.dots-data',
                nav:true,
                margin:0,
                loop:true,
                items:1
            });
        }

        if($(this).hasClass('fell')){
            $(this).owlCarousel({
                nav:true,
                margin:100,
                loop:true,
                items:4
            });
        }
    });

    //data-dots="false"
    //data-loop="true"
    //data-nav = "true"
    //data-margin = "80"
    //data-autoplayTimeout="1000"
    //data-autoplay="true"
    //data-autoplayHoverPause = "true"
    //data-responsive='{"0":{"items":1},"480":{"items":2},"640":{"items":3}, "991":{"items":3},"1200":{"items":3}}'

    //$('.owl-carousel2').unslider({
    //    dots: true
    //});

    //owl = $('.owl-carousel').owlCarousel();
    //owl.owlCarousel({
    ////var config = owl.data();
    //dotsContainer: '#carousel-custom-dots';
    ////owl(config);
    //});

    
        $('.pgwSlider-01').pgwSlider();
        $('.pgwSlideshow').pgwSlideshow();
        
});
