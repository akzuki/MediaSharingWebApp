angular.module('myApp')
    .controller('videoController', function($scope, $sce, AjaxService, MediaService) {

        $scope.limit = 12;

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