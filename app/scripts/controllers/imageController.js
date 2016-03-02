angular.module('myApp')
    .controller('imageController', function($scope, $sce, AjaxService, MediaService) {

        $scope.limit = 20;

        var requestImage = AjaxService.searchByType('image');
        requestImage.then(function(success) {
            console.log(success.data);
            $scope.images = success.data;
        }, function(error) {
            console.log(error);
        });

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });