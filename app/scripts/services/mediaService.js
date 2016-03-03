'use strict';

angular.module('myApp')
    .service('MediaService', function() {
        var mediaVariables = {
            mediaUrl: 'http://util.mw.metropolia.fi/uploads/',
            userData: {},
            fileId: {}
        };

        mediaVariables.loggedIn = function(key, value) {
            mediaVariables[key] = value;
        };

        mediaVariables.loggedOut = function() {
            mediaVariables.userData = {};
        };

        mediaVariables.setVariables = function(key, value) {
            mediaVariables[key] = value;
        };

        return mediaVariables;
    });