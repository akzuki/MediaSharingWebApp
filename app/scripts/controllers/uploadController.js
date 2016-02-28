angular.module('myApp')
    .controller('uploadController', function($scope, AjaxService, MediaService) {

        $scope.setMediaFile = function(element) {
            $scope.mimeType = element.files[0].type;
            $scope.type = element.files[0].type.split('/')[0];
        };
        
        $scope.uploadFile = function (){
            var fd = new FormData(document.getElementById('uploadForm'));
            fd.append('user', MediaService.userData.userId);
            fd.append('type', $scope.type);
            fd.append('mime-type', $scope.mimeType);
            var request = AjaxService.uploadFile(fd);
            request.then(function(success) {
                console.log(success.data);
            }, function(error) {
                console.log(error);
            });
        };
    });