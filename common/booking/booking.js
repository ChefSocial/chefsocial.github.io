(function (angular) {
	'use strict';

	angular.module('chefSocialApp')
		.directive('booking', function (){
			return {
				templateUrl: 'common/booking/booking.html',
				scope: {
					chef: '='
				},
				controller: ['$rootScope', '$scope', '$timeout',function ($rootScope, $scope, $timeout){

					var init = function (){
						$scope.images = ["0", "1"];
					}
					init();

					// Closing the booking modal
				    $('.close-menu-modal').on('click', function(){
				        $(this).closest('.modal').modal('hide');
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

				}]
			};
		});
})(window.angular);