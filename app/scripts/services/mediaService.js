'use strict';

angular.module('myApp')
    .service('MediaService', function ($rootScope) {
        var mediaVariables = {
            mediaUrl: 'http://util.mw.metropolia.fi/uploads/',
            userData: {}
        };  
     
        mediaVariables.loggedIn = function (key, value){
            mediaVariables[key] = value;
            $rootScope.$broadcast('loggedIn', 'Logged in successfully');
        };

        mediaVariables.loggedOut = function (){
            mediaVariables.userData = {};
        };
    
        return mediaVariables;
    });