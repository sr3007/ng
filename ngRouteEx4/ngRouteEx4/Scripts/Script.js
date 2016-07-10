/// <reference path="angular.min.js" />

var app = angular.module("demo", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/Home.html",
                controller: "homeController"
            })
        .when("/courses", {
            templateUrl: "Templates/Courses.html",
            controller: "coursesController"
        })
        .when("/students", {
            templateUrl: "Templates/Students.html",
            controller: "studentsController"
        })

        
    })
.controller("homeController", function ($scope) {
    $scope.message = "Home Page";
})
.controller("coursesController", function ($scope) {
    $scope.courses = ["SharePoint","Java","C#"];
})
.controller("studentsController", function ($scope) {
    $scope.students = ["Student1", "Student2", "Student3"];
})

