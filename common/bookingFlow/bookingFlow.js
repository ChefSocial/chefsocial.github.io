(function (angular) {
	'use strict';

	angular.module('chefSocialApp')
		.directive('bookingFlow', function (){
			return {
				templateUrl: 'common/bookingFlow/bookingFlow.html',
				scope: {
					chef: '='					
				},
				controller: ['$scope', '$timeout', '$http',function ($scope, $timeout, $http){

					    (function init() {
							$scope.bookingData = $scope.chef.defaultBookingData;
							// Setting the default value
							$scope.datesForSelectedMonth = [1];
						}());

						window.addEventListener('closingDropDown', function (e) {
							$scope.$apply(function (){
								$scope.bookingData[e.detail.field] = e.detail.value;
								if(e.detail.field == "bookingMonth"){
									$scope.datesForSelectedMonth = $scope.chef.availability[e.detail.value];
									_reCreateDropDown();
								}
								if(e.detail.field == "bookingCapacity"){
									$scope.bookingData.bookingCost = $scope.bookingData.bookingMenu.pricePerPerson[e.detail.value] * e.detail.value;
								}
							});
						});

						$scope.sendMail = function (){
							// akashdevaraju@gmail.com, shivamleo@gmail.com
							var emailData = {
							  "From": "hello@chef.social",
							  "To": "hello@chef.social",
							  "Cc": "rox.rachit@gmail.com",
							  "Subject": "New Booking",
							  "Tag": "ChefSocial Booking",
							  "HtmlBody": "<h2>Hello Guys, we've got a new booking :)</h2><br> <h3>Let's Do This!!</h3>",
							  "TextBody": "This is the Text Body",
							  "ReplyTo": "hello@chef.social",
							  // "Headers": [
							  //   {
							  //     "Name": "CUSTOM-HEADER",
							  //     "Value": "value"
							  //   }
							  // ],
							  "TrackOpens": true,
							};
							$http({
								method: 'POST',
								url: 'https://api.postmarkapp.com/email',
								headers: {
									'Access-Control-Allow-Origin': '*',
									'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
									'Access-Control-Allow-Headers': 'Content-Type, Content-Length, X-Requested-With, X-Postmark-Server-Token',
									'Content-Type': 'application/json',
									'Accept': 'application/json',
									'X-Postmark-Server-Token': '5a88cdda-12d6-4e62-a5e6-e10d718d0a2f'
								},
								data: emailData
							})
							.then(
								function (data){
									console.log(data);
								}, 
								function (data){
									console.log(data);
								}
							);
							console.log('ending...');
							
						};

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
							angular.element($event.currentTarget).closest('.modal').modal('hide');
						};

						$scope.setBookingData = function (menu){
							$scope.bookingData.bookingMenu = JSON.parse(angular.toJson(menu));
							$scope.bookingData.bookingCost = $scope.bookingData.bookingMenu.pricePerPerson[$scope.bookingData.bookingCapacity] * $scope.bookingData.bookingCapacity;
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
						        console.log($scope.bookingData);
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