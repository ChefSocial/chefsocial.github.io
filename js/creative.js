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
        console.log("clicked");
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

})(jQuery); // End of use strict
