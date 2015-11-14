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

    // $('#myCarousel').carousel({
    //   interval: 40000000000
    // })

    // $('.carousel .item').each(function(){
    //   var next = $(this).next();
    //   if (!next.length) {
    //     next = $(this).siblings(':first');
    //   }
    //   next.children(':first-child').clone().appendTo($(this));
    //   console.log("below...");
    //   console.log($(this));
      
    //   // for (var i = 0; i < 3; i++) {
    //   //     next = next.next();
    //   //     if(!next.length){
    //   //       next = $(this).siblings(':first');
    //   //     }
    //   //     next.children(':first-child').clone.appendTo($(this));
    //   // };

    //   if (next.next().length>0) {
    //     next.next().children(':first-child').clone().appendTo($(this));
    //   }
    //   else {
    //     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    //   }
    // });

    $(document).ready(function () {
        $('#myCarousel').carousel({
            interval: 10000
        })
        $('.fdi-Carousel .item').each(function () {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            if (next.next().length > 0) {
                next.next().children(':first-child').clone().appendTo($(this));
            }
            else {
                $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            }
        });
    });

    var page=1;
    $('#blog-link').on('click', function(){
        page=2;
        $('#mainNav .navbar-brand').addClass('page2-bg');
        $('.navbar-right').hide();
        $('#page1').fadeOut('slow', function(){
            $('#page2').toggleClass('hide show');
            $('#page2').fadeIn('slow');
        });
    });

    $('.navbar-brand').on('click', function(){
        if(page==2){
            page=1;
            $('#mainNav .navbar-brand').removeClass('page2-bg');
            $('.navbar-right').show();
            $('#page2').fadeOut('slow', function(){
            $('#page2').toggleClass('hide show');
            $('#page1').show().fadeIn('slow');
        });
        }
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

    $('#carousel-example-generic').carousel({
        interval: 300000
    });

})(jQuery); // End of use strict
