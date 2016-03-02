'use strict';

/**
 * @ngdoc overview
 * @name webAppApp
 * @description
 * # webAppApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main-page.html',
        controller: 'mainController'
      })
      .when('/image-page', {
        templateUrl: 'views/image-page.html',
        controller: 'imageController'
      })
      .when('/video-page', {
        templateUrl: 'views/video-page.html',
        controller: 'videoController'
      })
      .when('/audio-page', {
        templateUrl: 'views/audio-page.html',
        controller: 'audioController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
