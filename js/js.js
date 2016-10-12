jQuery(document).ready(function($) {


    jQuery('.main-menu .menu-toggle').on('click', function(){
        //alert('dfjskdf');
        $(this).toggleClass('active');
        jQuery(this).siblings('#menu-top-menu').toggleClass('active');
    });
});