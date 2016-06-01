(function (angular) {
	'use strict';

	angular.module('chefSocialApp')
		.directive('bookingFlow', function (){
			return {
				templateUrl: 'common/bookingFlow/bookingFlow.html',
				scope: {
					bookedChef: '@',
					chefDisplayName: '@'
				},
				controller: ['$scope', '$timeout',function ($scope, $timeout){

					    // Closing the bookingFlow modal
					    $('.goto-menu-modal').on('click', function(){
					        $(this).closest('.modal').modal('hide');
					    });

					    // Dynamically changing the booked menu image of a chef
					    $('.close-menu-modal').on('click', function(){
					        // Resetting the booking data to when opening the booking flow - step 1
					        bookingData = {};
					        var chef = $scope.bookedChef;
					        var menu = $(this).attr('menu');
					        // Show step-1 and Hide the step 2 and 3 of the booking modal by default
					        $('#' + chef + 'BookingFlowModal .step[step="1"]').show();
					        $('#' + chef + 'BookingFlowModal .step[step="2"], #' + chef + 'BookingFlowModal .step[step="3"]').hide();
					        // Assigning the src of the image dynamically
					        $('#'+chef+'BookingFlowModal .menu-image').attr("src", "img/menu/"+chef+"-booked-menu-"+menu+".jpg");
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
					        bookingData["number_of_people"] = $('#'+ $scope.bookedChef +'BookingFlowModal select[name="number_of_people"]').find(':selected').val();
					        bookingData["month"] = $('#'+ $scope.bookedChef +'BookingFlowModal select[name="month"]').find(':selected').val();
					        bookingData["date"] = $('#'+ $scope.bookedChef +'BookingFlowModal select[name="date"]').find(':selected').val();
					        bookingData["hour"] = $('#'+ $scope.bookedChef +'BookingFlowModal select[name="hour"]').find(':selected').val();
					        bookingData["time"] = $('#'+ $scope.bookedChef +'BookingFlowModal select[name="time"]').find(':selected').val();
					        console.log(bookingData);
					    };

					    var afterTemplateRendered = function (){
					    	var nlform2 = new NLForm( $("#"+$scope.bookedChef+"BookingFlowModal .nl-form").get(0) );
					    };
					    $timeout(afterTemplateRendered, 0);

					    // JS to make the menu modal full screen
					    $(".modal-fullscreen").on('show.bs.modal', function () {
					      setTimeout( function() {
					        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
					      }, 0);
					    });
					    $(".modal-fullscreen").on('hidden.bs.modal', function () {
					      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
					    });

				}]
			};
		});
})(window.angular);