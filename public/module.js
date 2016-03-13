'use strict';

angular.module('app', ['ui.router', 'ngStorage'])
.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'homeCtrl'
    })
    .state('hits', {
      url: "/hits/:id?editing",
      templateUrl: "partials/hits.html"
    })
    .state('photos', {
      url: "/photos",
      templateUrl: "partials/photos.html",
      controller: 'photoCtrl'
    })
    .state('members', {
      url: "/members",
      templateUrl: "partials/members.html"
    })
});
