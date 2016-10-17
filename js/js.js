jQuery(document).ready(function($) {





    jQuery('.main-menu .menu-toggle').on('click', function(){
        $(this).toggleClass('active');
        jQuery(this).siblings('#menu-top-menu').toggleClass('active');
    });

    $(".register-button").each(function(){
        $(this).click(function(){
            $('#register-popup').addClass('active');
            $('.form-contact-action form').clone().appendTo('#register-popup .get-content');
        });
    });



    $('#register-popup .close').on('click', function(){
        $('#register-popup').removeClass('active');
        $('#register-popup .get-content form').remove();
    });

    $(".owl-carousel").each(function() {
        if($(this).hasClass('student')){
            $(this).owlCarousel({
                dots:false,
                loop:true,
                nav:true,
                margin:80,
                autoplay:true,
                autoplayHoverPause:true,
                navText:['<span class="prev"><i class="fa fa-chevron-left"></i></span>', '<span class="next"><i class="fa fa-chevron-right"></i></span>'],
                items:3
            });
        }

        if($(this).hasClass('set-dot')){
            $(this).owlCarousel({
                dotsContainer: '.dots-data',
                nav:true,
                navText:['<span class="prev"><i class="fa fa-angle-left"></i></span>', '<span class="next"><i class="fa fa-angle-right"></i></span>'],
                margin:0,
                loop:true,
                items:1
            });
        }

        if($(this).hasClass('fell')){
            $(this).owlCarousel({
                nav:true,
                margin:100,
                navText:['<span class="prev"><i class="fa fa-angle-left"></i></span>', '<span class="next"><i class="fa fa-angle-right"></i></span>'],
                loop:true,
                items:4
            });
        }
    });

    //
    //$('.fell .owl-item').each(function(){
    //    $(this).click(function(){
    //        $(this).addClass('show-content');
    //        $(this).siblings().removeClass('show-content');
    //    });
    //});

var a = $('.fell .item').length;
    console.log(a);
    $('.fell .item').each(function(){
        var tmp = $(this);
        $(this).find('.img').click(function(){
            $(this).parent().addClass('show-content enable');
            $('.fell .item').each(function(){
                if($(this) != tmp){
                    $(this).removeClass('show-content');
                }
            });
        });
    });


        $('.pgwSlider-01').pgwSlider();
        $('.pgwSlideshow').pgwSlideshow();
        
});
