/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

//ng app

var myApp = angular.module("ngApp", ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'V1.html'
        })
        .when('/V2', {
            templateUrl: 'V2.html'
        })
        .otherwise({ redirectTo: '/' })
});

var controllers = {};

controllers.firstCtrl = function ($scope) {
    $scope.heading = "Example Route";

    $scope.customers = [
        { fistName: 'Srikanth', lastName: 'Tiyyaguru' },
        { fistName: 'Mayukh', lastName: 'Tiyyaguru' },
        { fistName: 'Sireesha', lastName: 'Konda' }
    ];
}

myApp.controller(controllers);

