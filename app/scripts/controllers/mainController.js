'use strict';

angular.module('myApp')
    .controller('mainController', function($scope, $location, $sce, AjaxService, MediaService) {

        $scope.loggedIn = false;

        // $scope.$on('loggedIn', function(evt) {
        //     console.log(evt);
        //     $scope.loggedIn = true;
        // });

        $scope.logOut = function() {
            console.log('Logged out');
            $scope.loggedIn = false;
            MediaService.loggedOut();
        };

        $scope.viewImages = function () {
        	$location.path('/image-page');
        };

        $scope.viewVideos = function () {
        	$location.path('/video-page');
        };

        $scope.viewAudios = function () {
        	$location.path('/audio-page');
        };

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });