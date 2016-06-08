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

					    (function init() {
							$scope.bookingData = {};
							// Setting the default value
							$scope.datesForSelectedMonth = [1];
						}());

						//Listen to your custom event
						window.addEventListener('closingDropDown', function (e) {
							$scope.bookingData[e.detail.field] = e.detail.value;
							if(e.detail.field == "bookingMonth"){
								$scope.datesForSelectedMonth = $scope.chef.availability[e.detail.value];
								_reCreateDropDown();
							}
						});

						var _reCreateDropDown = function() {
							var options = '';
							$scope.datesForSelectedMonth.forEach(function (elem, index){
								if(index == 0){
									options += '<li class="nl-dd-checked">' + elem + '</li>';
								}else{
									options += '<li>' + elem + '</li>';
								}
							});
							$('.bookingDate ul').remove();
							var optionsList = document.createElement( 'ul' );
							optionsList.innerHTML = options;
							$('.bookingDate a').text($scope.datesForSelectedMonth[0]);
							$('.bookingDate').append(optionsList);
						};

					    $scope.closeModal = function ($event){
							// closing the currently opened modal
							angular.element($event.currentTarget).closest('.modal').modal('hide');
						};

						$scope.setSelectedMenu = function (menu){
							$scope.bookingData.menu = JSON.parse(angular.toJson(menu));
						}

						$scope.prepareBookingFlow = function (){
							$('#'+$scope.chef.name+'BookingFlowModal .step[step="1"]').show();
							$('#'+$scope.chef.name+'BookingFlowModal .step[step="2"], #'+$scope.chef.name+'BookingFlowModal .step[step="3"]').hide();
						};

					    // Generic navigation when clicked on navigate buttom to take to corresponding step
					    var setGenericNavigation = function (){
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
						        // show future step with animation + hide current step with animation
						        var futureStep = currentStep.siblings(".step[step='" +  futureStepNumber + "']");
						        currentStep.fadeOut(250, function(){
						            futureStep.fadeIn(250);
						        });
						    });
					    };
					    var afterTemplateRendered = function (){
					    	$scope.nlform = new NLForm( $("#"+$scope.chef.name+"BookingFlowModal .nl-form").get(0) );
					    	// Generic navigation when clicked on navigate buttom to take to corresponding step
						    setGenericNavigation();
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