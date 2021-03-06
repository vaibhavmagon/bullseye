'use strict';
var milestonesApp = angular.module('milestonesApp', ['ngResource','lbServices','ngRoute','ui.bootstrap','ngDragDrop','xeditable','dndLists']);

milestonesApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider,$httpProvider) {
    $routeProvider
        .when("/", {redirectTo: "/dashBoard"}) //login
        .when("/dashBoard", {templateUrl: "client/dashboard/partials/dashboard.html", controller: "DashBoardCtrl"})
        .when("/login", {templateUrl: "client/login/partials/login.html", controller: "LoginCtrl"})
        .otherwise('/');
}]);


