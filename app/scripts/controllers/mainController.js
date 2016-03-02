angular.module('myApp')
    .controller('mainController', function($scope, $sce, AjaxService, MediaService) {

        $scope.loggedIn = false;

        $scope.$on('loggedIn', function(evt) {
            console.log(evt);
            $scope.loggedIn = true;
        });

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

        $scope.logOut = function() {
            console.log('Logged out');
            $scope.loggedIn = false;
            MediaService.loggedOut();
        };

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });