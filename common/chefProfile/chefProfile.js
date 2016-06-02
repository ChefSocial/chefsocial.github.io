(function (angular) {
    'use strict';

    angular.module('chefSocialApp')
        .directive('chefProfile', function (){
            return {
                templateUrl: 'common/chefProfile/chefProfile.html',
                scope: {
                    chefName: '@'
                },
                controller: ['$rootScope', '$scope', '$timeout',function ($rootScope, $scope, $timeout){

                    var init = function (){
                        $scope.data = {
                            'honey': {
                                'name': 'honey',
                                'displayName': 'Chef Honey'
                            },
                            'tabrez': {
                                'name': 'tabrez',
                                'displayName': 'Chef Tabrez'
                            },
                            'sher': {
                                'name': 'sher',
                                'displayName': 'Chef Sher'
                            }
                        };
                    };
                    init();
                    
                    $scope.chef = $scope.data[$scope.chefName];

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