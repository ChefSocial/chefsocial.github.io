/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();


    // ============================= CUSTOM JS =============================

    $('#download-btn').on('click', function (){
        // $('.download-app-row').fadeOut('slow');
        // $('.subscription-form').toggleClass('hide show');
        // $('.subscription-form').fadeIn('slow');
        $('.download-app-row').fadeOut('slow', function(){
            $('.subscription-form').toggleClass('hide show');
            $('.subscription-form').fadeIn('slow');
        });
    });

    // JS to make the menu modal full screen
    $(".modal-transparent").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-transparent");
      }, 0);
    });
    $(".modal-transparent").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-transparent");
    });

    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });

    // $('#carousel-example-generic').carousel({
    //     interval: 10000
    // });

    $('.testimonial-wrapper .image').on('click', function(){
        var imageId = $(this).attr('imageId');
        // make all other image siblings inactive
        $('.testimonial-wrapper .image').removeClass('active');
        // make that image active
        $('.testimonial-wrapper #img' + imageId).addClass('active');
        // hide other image description
        $('.testimonial-wrapper .description').hide();
        // show that image description
        $('.testimonial-wrapper #desc' + imageId).fadeIn(2000);   
    });

    // Closing the menu modal and opening the booking modal
    $('.close-menu-modal').on('click', function(){
        $(this).closest('.modal').modal('hide');
    });
    $('.goto-menu-modal').on('click', function(){
        $(this).closest('.modal').modal('hide');
    });

    // Dynamically changing the booked menu image of a chef
    $('.close-menu-modal').on('click', function(){
        var chef = $(this).closest('.modal').attr('chef');
        var menu = $(this).attr('menu');
        $('#'+chef+'BookingModal .menu-image').attr("src", "img/menu/"+chef+"-booked-menu-"+menu+".jpg");
    });

})(jQuery); // End of use strict
