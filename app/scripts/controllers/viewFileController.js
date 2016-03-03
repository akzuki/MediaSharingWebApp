'use strict';

angular.module('myApp')
    .controller('viewFileController', function($scope, $route, $location, $sce, AjaxService, MediaService) {

        var fileId = $route.current.params.fileId;

        $scope.update = function() {
            $scope.getFile();
            $scope.getComment();
        };

        $scope.getFile = function() {
            AjaxService.getFileById(fileId)
                .then(function(success) {
                    console.log(success.data);
                    $scope.item = success.data;
                }, function(error) {
                    console.log(error);
                });
        };

        $scope.getComment = function() {
            AjaxService.getAllCommentsAFile(fileId)
            .then(function(success) {
                console.log(success.data);
                $scope.comments = success.data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.postComment = function() {
            var data = {
                user: MediaService.userData.userId,
                comment: $scope.commentContent
            };
            var postComment = AjaxService.postComment(fileId, data);
            postComment.then(function(success) {
                console.log(success.data);
                $scope.update();
            }, function(error) {
                console.log(error);
            });
        };

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(MediaService.mediaUrl + src);
        };
    });