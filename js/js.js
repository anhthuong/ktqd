jQuery(document).ready(function($) {





    jQuery('.main-menu .menu-toggle').on('click', function(){
        //alert('dfjskdf');
        $(this).toggleClass('active');
        jQuery(this).siblings('#menu-top-menu').toggleClass('active');
    });


    $(".owl-carousel").each(function(index, el) {
        var config = $(this).data();
        //config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
        //if($(this).hasClass('set-dot')){
        //    //config.animateOut="fadeOut";
        //    config.dotsContainer = ".owl-dots";
        //}
        $(this).owlCarousel(config);
    });

    $('.owl-carousel2').unslider({
        dots: true
    });

    //owl = $('.owl-carousel').owlCarousel();
    //owl.owlCarousel({
    ////var config = owl.data();
    //dotsContainer: '#carousel-custom-dots';
    ////owl(config);
    //});
    //
    //$('.owl-dot').click(function () {
    //    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    //});

    //jQuery(".owl-carousel").owlCarousel();


    //jQuery('.owl-carousel').owlCarousel({
    //    //stagePadding: 50,
    //    loop:true,
    //    margin:80,
    //    nav:true,
    //    responsive:{
    //        0:{
    //            items:1
    //        },
    //        600:{
    //            items:1
    //        },
    //        1000:{
    //            items:1
    //        },
    //        1500:{
    //            items:1
    //        }
    //    }
    //});
    //jQuery('.owl-carousel23').owlCarousel({
    //    dots:true,
    //    loop:true,
    //    margin:0,
    //    responsive:{
    //        0:{
    //            items:1
    //        },
    //        600:{
    //            items:1
    //        },
    //        1000:{
    //            items:1
    //        },
    //        1500:{
    //            items:1
    //        }
    //    }
    //});
    
    
        $('.pgwSlider-01').pgwSlider();
        $('.pgwSlideshow').pgwSlideshow();
        
});

//jQuery(document).ready(function($) {
//        
//
//    });