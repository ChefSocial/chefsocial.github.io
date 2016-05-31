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
        // Resetting the booking data to when opening the booking flow - step 1
        bookingData = {};
        var chef = $(this).closest('.modal').attr('chef');
        var menu = $(this).attr('menu');
        bookingData["booked_chef"] = chef;
        // Show step-1 and Hide the step 2 and 3 of the booking modal by default
        $('#' + chef + 'BookingModal .step[step="1"]').show();
        $('#' + chef + 'BookingModal .step[step="2"], #' + chef + 'BookingModal .step[step="3"]').hide();
        // Assigning the src of the image dynamically
        $('#'+chef+'BookingModal .menu-image').attr("src", "img/menu/"+chef+"-booked-menu-"+menu+".jpg");
    });

    // Generic navigation when clicked on navigate buttom to take to corresponding step
    $('.menu-booking-modal .navigate').on('click', function(){
        // getting the action to got to next or previous
        var action = $(this).attr("action");
        var currentStep = $(this).closest('.step');
        var currentStepNumber = currentStep.attr('step');
        if(action == "next"){
            var futureStepNumber = parseInt(currentStepNumber) + 1;
        }else{
            var futureStepNumber = parseInt(currentStepNumber) - 1;
        }
        switch(currentStepNumber){
            case "1":
                captureStep1Data();
                break;
            case "2":
                captureStep2Data();
                break;
        };
        // show future step with animation + hide current step with animation
        var futureStep = currentStep.siblings(".step[step='" +  futureStepNumber + "']");
        currentStep.fadeOut(250, function(){
            futureStep.fadeIn(250);
        });
    });

    // Capturing User Entered Data
    var bookingData = {};
    var captureStep1Data = function (){
        bookingData["number_of_people"] = $('#'+ bookingData["booked_chef"] +'BookingModal select[name="number_of_people"]').find(':selected').val();
        bookingData["month"] = $('#'+ bookingData["booked_chef"] +'BookingModal select[name="month"]').find(':selected').val();
        bookingData["date"] = $('#'+ bookingData["booked_chef"] +'BookingModal select[name="date"]').find(':selected').val();
        bookingData["hour"] = $('#'+ bookingData["booked_chef"] +'BookingModal select[name="hour"]').find(':selected').val();
        bookingData["time"] = $('#'+ bookingData["booked_chef"] +'BookingModal select[name="time"]').find(':selected').val();
        console.log(bookingData);
    };
    var captureStep2Data = function (){
        bookingData["phone_number"] = $('#'+ bookingData["booked_chef"] +'BookingModal .address-form input[name="phone_number"]').val();
        bookingData["customer_name"] = $('#'+ bookingData["booked_chef"] +'BookingModal .address-form input[name="name"]').val();        
        bookingData["address"] = {
            "address": $('#'+ bookingData["booked_chef"] +'BookingModal .address-form input[name="address"]').val(),
            "city": $('#'+ bookingData["booked_chef"] +'BookingModal .address-form input[name="city"]').val(),
            "postal_code": $('#'+ bookingData["booked_chef"] +'BookingModal .address-form input[name="postal_code"]').val()
        };
        console.log(bookingData);
    };

})(jQuery); // End of use strict
