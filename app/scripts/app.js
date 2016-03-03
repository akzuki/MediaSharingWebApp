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
        controller: 'dataController'
      })
      .when('/image-page', {
        templateUrl: 'views/image-page.html',
        controller: 'dataController'
      })
      .when('/video-page', {
        templateUrl: 'views/video-page.html',
        controller: 'dataController'
      })
      .when('/audio-page', {
        templateUrl: 'views/audio-page.html',
        controller: 'dataController'
      })
      .when('/viewFile/:fileId', {
        templateUrl: 'views/single-item.html',
        controller: 'viewFileController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
