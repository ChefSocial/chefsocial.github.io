(function (angular) {
    'use strict';

    angular.module('chefSocialApp')
        .directive('chefProfile', function (){
            return {
                templateUrl: 'common/chefProfile/chefProfile.html',
                scope: {
                    chefName: '@',
                    position: '@'
                },
                controller: ['$rootScope', '$scope', '$timeout',function ($rootScope, $scope, $timeout){

                    var init = function (){
                        $scope.data = {
                            'honey': {
                                'name': 'honey',
                                'displayName': 'Chef Honey',
                                'profileImageUrl': 'img/chefs/chef-honey-islam.jpg',
                                'capacity': [2,3,4,5,6,7,8,9,10,11,12,13,14],
                                'availableMonths': ['July', 'August'],
                                'availability': {
                                    'July': [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                                    'August': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
                                },
                                'bio1': 'Hailing from the foothills of the great Himalayas, Chef Honey brings to you innovative and healthy brunches and dinners inspired by the freestyle cooking techniques of Jamie Oliver.',
                                'bio2': 'Have Chef Honey whip up an amazing brunch tomorrow morning!',
                                'numberOfMenus': 2,
                                'menus': [
                                {
                                    'name': 'Cheesy Indulgence',
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
                                    'name': 'Classic Italian',
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
                                }]
                            },
                            'tabrez': {
                                'name': 'tabrez',
                                'displayName': 'Chef Tabrez',
                                'profileImageUrl': 'img/chefs/chef-tabrez.jpg',
                                'capacity': [2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                                'availableMonths': ['June', 'July', 'August'],
                                'availability': {
                                    'June': [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                                    'July': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                                    'August': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
                                },
                                'bio1': 'He specializes in Mughalai cuisine and adds a unique flavour to all his dishes by his self-prepared "secret" spices. He has come up with a mouth-watering blend of Indian and Mughlai cuisine. Have the Jodhaa Akbar experience at your home today!',
                                'bio2': '',
                                'numberOfMenus': 6,
                                'menus': [
                                {
                                    'name': 'Tabrez Menu 1',
                                    'imageUrl': 'img/menu/tabrez-menu-1.jpg',
                                    'bookedImageUrl': 'img/menu/tabrez-booked-menu-1.jpg',
                                    'pricePerPerson': {
                                        '2': 1400,
                                        '3': 1350,
                                        '4': 1300,
                                        '5': 1250,
                                        '6': 1200,
                                        '7': 1150,
                                        '8': 1100,
                                        '9': 1050,
                                        '10': 1000,
                                        '11': 950,
                                        '12': 900,
                                        '13': 850,
                                        '14': 850,
                                        '15': 800
                                    }
                                },
                                {
                                    'name': 'Tabrez Menu 2',
                                    'imageUrl': 'img/menu/tabrez-menu-2.jpg',
                                    'bookedImageUrl': 'img/menu/tabrez-booked-menu-2.jpg',
                                    'pricePerPerson': {
                                        '2': 1400,
                                        '3': 1350,
                                        '4': 1300,
                                        '5': 1250,
                                        '6': 1200,
                                        '7': 1150,
                                        '8': 1100,
                                        '9': 1050,
                                        '10': 1000,
                                        '11': 950,
                                        '12': 900,
                                        '13': 850,
                                        '14': 850,
                                        '15': 800
                                    }
                                },
                                {
                                    'name': 'Tabrez Menu 3',
                                    'imageUrl': 'img/menu/tabrez-menu-3.jpg',
                                    'bookedImageUrl': 'img/menu/tabrez-booked-menu-3.jpg',
                                    'pricePerPerson': {
                                        '2': 1400,
                                        '3': 1350,
                                        '4': 1300,
                                        '5': 1250,
                                        '6': 1200,
                                        '7': 1150,
                                        '8': 1100,
                                        '9': 1050,
                                        '10': 1000,
                                        '11': 950,
                                        '12': 900,
                                        '13': 850,
                                        '14': 850,
                                        '15': 800
                                    }
                                },
                                {
                                    'name': 'Tabrez Menu 4',
                                    'imageUrl': 'img/menu/tabrez-menu-4.jpg',
                                    'bookedImageUrl': 'img/menu/tabrez-booked-menu-4.jpg',
                                    'pricePerPerson': {
                                        '2': 1400,
                                        '3': 1350,
                                        '4': 1300,
                                        '5': 1250,
                                        '6': 1200,
                                        '7': 1150,
                                        '8': 1100,
                                        '9': 1050,
                                        '10': 1000,
                                        '11': 950,
                                        '12': 900,
                                        '13': 850,
                                        '14': 850,
                                        '15': 800
                                    }
                                },
                                {
                                    'name': 'Tabrez Menu 5',
                                    'imageUrl': 'img/menu/tabrez-menu-5.jpg',
                                    'bookedImageUrl': 'img/menu/tabrez-booked-menu-5.jpg',
                                    'pricePerPerson': {
                                        '2': 1400,
                                        '3': 1350,
                                        '4': 1300,
                                        '5': 1250,
                                        '6': 1200,
                                        '7': 1150,
                                        '8': 1100,
                                        '9': 1050,
                                        '10': 1000,
                                        '11': 950,
                                        '12': 900,
                                        '13': 850,
                                        '14': 850,
                                        '15': 800
                                    }
                                },
                                {
                                    'name': 'Tabrez Menu 6',
                                    'imageUrl': 'img/menu/tabrez-menu-6.jpg',
                                    'bookedImageUrl': 'img/menu/tabrez-booked-menu-6.jpg',
                                    'pricePerPerson': {
                                        '2': 1400,
                                        '3': 1350,
                                        '4': 1300,
                                        '5': 1250,
                                        '6': 1200,
                                        '7': 1150,
                                        '8': 1100,
                                        '9': 1050,
                                        '10': 1000,
                                        '11': 950,
                                        '12': 900,
                                        '13': 850,
                                        '14': 850,
                                        '15': 800
                                    }
                                }]
                            },
                            'sher': {
                                'name': 'sher',
                                'displayName': 'Chef Sher',
                                'profileImageUrl': 'img/chefs/chef-sher-dewan.jpeg',
                                'capacity': [2,3,4,5,6,7,8,9,10,11,12,13],
                                'availableMonths': ['June', 'July', 'August'],
                                'availability': {
                                    'June': [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                                    'July': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                                    'August': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
                                },
                                'bio1': 'Chef Sher is a professional Chef De Cuisine, a chocolatier, beer and wine sommelier from Bruges, a coastal city in Belgium.',
                                'bio2': 'Bangalore is fortunate to have its first authentic Belgian chocolaterie run by a Belgian. Get Sher to hand craft you some chocolates today!',
                                'numberOfMenus': 1,
                                'menus': [{
                                    'name': 'Chocolate Platter',
                                    'imageUrl': 'img/menu/sher-menu-1.jpg',
                                    'bookedImageUrl': 'img/menu/sher-booked-menu-1.jpg',
                                    'pricePerPerson': {
                                        '2': 3500,
                                        '3': 2500,
                                        '4': 1800,
                                        '5': 1600,
                                        '6': 1400,
                                        '7': 1200,
                                        '8': 1100,
                                        '9': 1000,
                                        '10': 920,
                                        '11': 850,
                                        '12': 800,
                                        '13': 750
                                    }
                                }]
                            }
                        };
                    };
                    init();
                    // setting the default booking data for the selected chef
                    $scope.data[$scope.chefName].defaultBookingData = {
                        'bookingChef': $scope.data[$scope.chefName].name,
                        'bookingMenu': $scope.data[$scope.chefName].menus[0],
                        'bookingCapacity': $scope.data[$scope.chefName].capacity[0],
                        'bookingMonth': $scope.data[$scope.chefName].availableMonths[0],
                        'bookingDate': $scope.data[$scope.chefName].availability[$scope.data[$scope.chefName].availableMonths[0]][0],
                        'bookingHour': 8,
                        'bookingTime': 'pm',
                        'bookingCost': $scope.data[$scope.chefName].capacity[0] * $scope.data[$scope.chefName].menus[0].pricePerPerson[$scope.data[$scope.chefName].capacity[0]]
                    };
                    $scope.chef = $scope.data[$scope.chefName];
                    // JS to make the menu modal full screen
                    // $(".modal-transparent").on('show.bs.modal', function () {
                    //   setTimeout( function() {
                    //     $(".modal-backdrop").addClass("modal-backdrop-transparent");
                    //   }, 0);
                    // });
                    // $(".modal-transparent").on('hidden.bs.modal', function () {
                    //   $(".modal-backdrop").addClass("modal-backdrop-transparent");
                    // });
                    $(".modal-fullscreen").on('show.bs.modal', function () {
                      setTimeout( function() {
                        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
                      }, 0);
                    });
                    // $(".modal-fullscreen").on('hidden.bs.modal', function () {
                    //   $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
                    // });                   

                }]
            };
        });
})(window.angular);