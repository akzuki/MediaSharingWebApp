angular.module('myApp')
    .controller('dataController', function($scope, $sce, AjaxService, MediaService) {


        // var request = AjaxService.getAllFiles();
        // request.then(function(success) {
        //     console.log(success.data);
        //     $scope.files = success.data;
        // }, function(error) {
        //     console.log(error);
        // });

        $scope.limit = 8;

        var requestImage = AjaxService.searchByType('image');
        requestImage.then(function(success) {
            console.log(success.data);
            $scope.images = success.data;
        }, function(error) {
            console.log(error);
        });

        var requestAudio = AjaxService.searchByType('audio');
        requestAudio.then(function(success) {
            console.log(success.data);
            $scope.audios = success.data;
        }, function(error) {
            console.log(error);
        });

        var requestVideo = AjaxService.searchByType('video');
        requestVideo.then(function(success) {
            console.log(success.data);
            $scope.videos = success.data;
        }, function(error) {
            console.log(error);
        });

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });