'use strict';

angular.module('myApp')
    .controller('AjaxController', function($scope, AjaxService) {

    	

        var request = AjaxService.getAllFiles();
        request.then(function(success) {
            $scope.files = success.data;
        }, function(error) {
            console.log(error);
        });
    });