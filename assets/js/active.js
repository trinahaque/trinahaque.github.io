(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        /*---
        * Sticky
        *---------------*/
        $('#mainmenu').sticky({topSpacing:0});
		
		
        /*---
        * One Page Nav Menu
        *---------------*/		
		$('.navbar-nav').onePageNav({
			currentClass : 'active',
			scrollSpeed : 600,
			filter: ':not(.url)'
		});
		
		
        /*---
        * jQuery Smooth Scroll
        *-------------------------*/
		$('.scroll-down, .navbar-nav li a').on('click', function(event) {
 		   $('.navbar-nav li a').parent().removeClass('active');
            var $anchor = $($(this).attr('href')).offset().top - 60;
 		   $(this).parent().addClass('active');
            $('body, html').animate({scrollTop : $anchor}, 600);
 					 event.preventDefault();
            return false;
        });		
        
        
        /*---
        * Bootstrap Mobile Menu Fix
        *-------------------------*/		
        $('#navMenu li a').on('click', function() {
            $('#navMenu').removeClass('in');
        });		
		
        
        /*---
        * Images Loaded & Isotope
        *-------------------------*/		
        $('.grid').imagesLoaded(function() {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });
        });
		
		
        /*---
        * Portfolio Menu
        *-------------------------*/		
        $('.portfolio-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
		
		
        /*---
        * Magnific Popup
        *-------------------------*/	        
        $(".portfolio-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        
        
        /*---
        * Owl Carousel
        *-------------------------*/        
        $(".total-testimonial").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: true,
            touchDrag: true,
        });
		
    });
	
    
	$(window).load(function(){
		
        /*---
        * Preloader
        *-------------------------*/ 
		jQuery(".neon-site-preloader-wrap").fadeOut(500);
		
	});

})(jQuery);