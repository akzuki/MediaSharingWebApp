angular.module('myApp')
    .controller('mainController', function($scope, AjaxService, MediaService) {

        $scope.loggedIn = false;

        $scope.$on('loggedIn', function(evt) {
            console.log(evt);
            $scope.loggedIn = true;
        });

        var request = AjaxService.getAllFiles();
        request.then(function(success) {
                console.log(success.data);
                $scope.files = success.data;
            }, function(error) {
                console.log(error);
            });

        $scope.logOut = function () {
        	console.log('Logged out');
        	$scope.loggedIn = false;
        	MediaService.loggedOut();
        };
    });