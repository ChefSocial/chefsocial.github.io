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
                                'displayName': 'Chef Honey',
                                'profileImageUrl': 'img/chefs/chef-honey-islam.jpg',
                                'numberOfMenus': 2,
                                'menus': [
                                {
                                    'name': 'Menu1 Name',
                                    'imageUrl': 'img/menu/honey-menu-1.png'
                                },
                                {
                                    'name': 'Menu2 Name',
                                    'imageUrl': 'img/menu/honey-menu-2.png'
                                }],
                                'bio1': 'Hailing from the foothills of the great Himalayas, Chef Honey brings to you innovative and healthy brunches and dinners inspired by the freestyle cooking techniques of Jamie Oliver.',
                                'bio2': 'Have Chef Honey whip up an amazing brunch tomorrow morning!'
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