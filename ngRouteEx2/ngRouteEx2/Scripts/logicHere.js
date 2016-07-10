/// <reference path="angular-route.js" />
/// <reference path="angular.js" />

//app
var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'html/FirstName.html'
    })
    .when('/LN', {
        templateUrl: 'html/LastName.html'
    })
    .when('/N', {
        templateUrl: 'html/FullName.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

//controllers
var controllers = {};

controllers.firstCtrl = function ($scope) {
    $scope.message = "ng Controller";

    $scope.customers = [
        { firstName: 'Srikanth', lastName: 'Tiyyaguru' },
        { firstName: 'Mayukh', lastName: 'Tiyyaguru' },
        { firstName: 'Sireesha', lastName: 'Konda' }
    ];
}

app.controller(controllers);


