(function() {

  'use strict';
 angular
   .module('myApp', ['ui.router'])
   .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('user', {
          url: "/user/:user/:password",
          templateUrl: "views/index.html",
          controller: "DashBoardController",
        })
        .state('index', {
          url: "/",
          templateUrl: "views/login.html"
        })
        .state('description', {
          url: "/description",
          templateUrl: "views/description.html"
        })
    });

})();
