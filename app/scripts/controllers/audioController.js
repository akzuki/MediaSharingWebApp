angular.module('myApp')
    .controller('audioController', function($scope, $sce, AjaxService, MediaService) {

        $scope.limit = 12;

        var requestAudio = AjaxService.searchByType('audio');
        requestAudio.then(function(success) {
            console.log(success.data);
            $scope.audios = success.data;
        }, function(error) {
            console.log(error);
        });

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });