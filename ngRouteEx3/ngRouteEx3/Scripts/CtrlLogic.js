/// <reference path="angular-route.js" />
/// <reference path="angular.js" />

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'FirstName.html'
    })
    .when('/LN', {
        templateUrl: 'LastName.html'
    })
    .otherwise({ redirectTo: '/' });
});

