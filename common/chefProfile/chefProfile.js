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
                                    'imageUrl': 'img/menu/honey-menu-1.png',
                                    'bookedImageUrl': 'img/menu/honey-booked-menu-1.jpg',
                                    'pricePerPerson': {
                                        '2': 1200,
                                        '3': 1100,
                                        '4': 1050,
                                        '5': 1000,
                                        '6': 950,
                                        '7': 900,
                                        '8': 850,
                                        '9': 800,
                                        '10': 750,
                                        '11': 700,
                                        '12': 650,
                                        '13': 650,
                                        '14': 600
                                    }
                                },
                                {
                                    'name': 'Menu2 Name',
                                    'imageUrl': 'img/menu/honey-menu-2.png',
                                    'bookedImageUrl': 'img/menu/honey-booked-menu-2.jpg',
                                    'pricePerPerson': {
                                        '2': 1200,
                                        '3': 1100,
                                        '4': 1050,
                                        '5': 1000,
                                        '6': 950,
                                        '7': 900,
                                        '8': 850,
                                        '9': 800,
                                        '10': 750,
                                        '11': 700,
                                        '12': 650,
                                        '13': 650,
                                        '14': 600
                                    }
                                }],
                                'capacity': [2,3,4,5,6,7,8,9,10,11,12,13,14],
                                'availableMonths': ['June', 'July', 'August'],
                                'availability': {
                                    'June': [1,2,3,4,5,6,7,8,9,10,15,18,21,22,23,24,29,30],
                                    'July': [2,3,4,5,6,7,8,9,10,15,18,21,22,23,24,29,30],
                                    'August': [3,4,5,6,7,8,9,10,15,18,21,22,23,24,29,30]
                                },
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
                    // setting the default booking data for the selected chef
                    $scope.data[$scope.chefName].defaultBookingData = {
                        'bookingChef': $scope.data[$scope.chefName].name,
                        'menu': $scope.data[$scope.chefName].menus[0],
                        'bookingCapacity': $scope.data[$scope.chefName].capacity[0],
                        'bookingMonth': $scope.data[$scope.chefName].availableMonths[0],
                        'bookingDate': $scope.data[$scope.chefName].availability[$scope.data[$scope.chefName].availableMonths[0]][0],
                        'bookingHour': 2,
                        'bookingTime': 'pm'
                    };
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