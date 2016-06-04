(function (angular) {
	'use strict';

	angular.module('chefSocialApp')
		.directive('bookingFlow', function (){
			return {
				templateUrl: 'common/bookingFlow/bookingFlow.html',
				scope: {
					chef: '='					
				},
				controller: ['$scope', '$timeout',function ($scope, $timeout){

					    $scope.bookingData = {};
					    $scope.closeModal = function ($event){
							// closing the currently opened modal
							angular.element($event.currentTarget).closest('.modal').modal('hide');
						};

						$scope.setSelectedMenu = function (menu){
							$scope.bookingData.menu = JSON.parse(angular.toJson(menu));
						}

						$scope.prepareBookingFlow = function (){

						};

				   		// Capturing User Entered Data
					    var bookingData = {};
				        var captureStep1Data = function (){
					        bookingData["number_of_people"] = $('#'+ $scope.chef.name +'BookingFlowModal select[name="number_of_people"]').find(':selected').val();
					        bookingData["month"] = $('#'+ $scope.chef.name +'BookingFlowModal select[name="month"]').find(':selected').val();
					        bookingData["date"] = $('#'+ $scope.chef.name +'BookingFlowModal select[name="date"]').find(':selected').val();
					        bookingData["hour"] = $('#'+ $scope.chef.name +'BookingFlowModal select[name="hour"]').find(':selected').val();
					        bookingData["time"] = $('#'+ $scope.chef.name +'BookingFlowModal select[name="time"]').find(':selected').val();
					        console.log(bookingData);
					    };

					    var afterTemplateRendered = function (){
					    	var nlform2 = new NLForm( $("#"+$scope.chef.name+"BookingFlowModal .nl-form").get(0) );
					    	// Generic navigation when clicked on navigate buttom to take to corresponding step
						    $('#'+$scope.chef.name+'BookingFlowModal.menu-booking-modal .navigate').on('click', function(){
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
					    };
					    $timeout(afterTemplateRendered, 0);

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

				}]
			};
		});
})(window.angular);