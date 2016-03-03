'use strict';

angular.module('myApp')
    .controller('dataController', function($scope, $location, $sce, AjaxService, MediaService) {

        $scope.limit = 8;

        $scope.getFiles = function() {
            $scope.getImages();
            $scope.getAudios();
            $scope.getVideos();
        };

        $scope.getImages = function() {
            var requestImage = AjaxService.searchByType('image');
            requestImage.then(function(success) {
                console.log(success.data);
                $scope.images = success.data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.getVideos = function() {
            var requestVideo = AjaxService.searchByType('video');
            requestVideo.then(function(success) {
                console.log(success.data);
                $scope.videos = success.data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.getAudios = function() {
            var requestAudio = AjaxService.searchByType('audio');
            requestAudio.then(function(success) {
                console.log(success.data);
                $scope.audios = success.data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.viewFile = function(args) {
            MediaService.setVariables('fileId', args);
            console.log(MediaService.fileId);
            $location.path('/viewFile/'+args);
        };



        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });