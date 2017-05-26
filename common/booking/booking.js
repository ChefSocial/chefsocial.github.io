(function (angular) {
	'use strict';

	angular.module('chefSocialApp')
		.directive('booking', function (){
			return {
				templateUrl: 'common/booking/booking.html',
				scope: {
					
				},
				controller: ['$rootScope', '$scope', '$timeout',function ($rootScope, $scope, $timeout){

					

				}]
			};
		});
})(window.angular);