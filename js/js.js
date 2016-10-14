jQuery(document).ready(function($) {





    jQuery('.main-menu .menu-toggle').on('click', function(){
        //alert('dfjskdf');
        $(this).toggleClass('active');
        jQuery(this).siblings('#menu-top-menu').toggleClass('active');
    });


    //$(".owl-carousel").each(function(index, el) {
    //    var config = $(this).data();
    //    //config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
    //    //if($(this).hasClass('owl-style2')){
    //    //    config.animateOut="fadeOut";
    //    //    config.animateIn="fadeIn";
    //    //}
    //    $(this).owlCarousel(config);
    //});

    //jQuery(".owl-carousel").owlCarousel();


    jQuery('.owl-carousel').owlCarousel({
        //stagePadding: 50,
        loop:true,
        margin:105,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            },
            1500:{
                items:3
            }
        }
    });
    
    
    
        $('.pgwSlider').pgwSlider();
        
});

//jQuery(document).ready(function($) {
//        
//
//    });