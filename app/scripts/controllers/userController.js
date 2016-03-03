'use strict';

angular.module('myApp')
    .controller('userController', function($scope, AjaxService, MediaService) {


        $scope.logIn = function() {
            var data = {
                username: $scope.loginUsername,
                password: $scope.loginPassword
            };
            var request = AjaxService.logIn(data);
            request.then(function(success) {
                console.log(success.data);
                if (success.data.userId != null) {
                    MediaService.loggedIn('userData', success.data);
                    console.log('UserID is: ' + MediaService.userData.userId);
                }
            }, function(error) {
                console.log(error);
            });
        };

        $scope.register = function() {
            var data = {
                username: $scope.registerUsername,
                password: $scope.registerPassword,
                email: $scope.registerEmail
            };
            var request = AjaxService.register(data);
            request.then(function(success) {
                console.log(success.data);
            }, function(error) {
                console.log(error);
            });
        };

        $scope.checkUsername = function() {
        	var data = {
        		username: $scope.registerUsername
        	};
            var request = AjaxService.checkUsername(data);
            request.then(function(success) {
                console.log(success.data);
                if (success.data.userFound == true)	{
                	alert('Username already existed!!!');
                }
            }, function(error) {
                console.log(error);
            });
        };

    });