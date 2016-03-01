'use strict';

angular.module('myApp')
    .factory('AjaxService', function($http, $httpParamSerializer) {
        var urlBase = 'http://util.mw.metropolia.fi/ImageRekt/api/v2/';
        var ajaxFunctions = {};

        // Get all the files from server
        ajaxFunctions.getAllFiles = function() {
            return $http.get(urlBase + 'files/latest/200')
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };

        // Upload file
        ajaxFunctions.uploadFile = function(args) {
            return $http.post(urlBase + 'upload', args, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        };

        //Log in function

        ajaxFunctions.logIn = function(args) {
            return $http.post(urlBase + 'login', $httpParamSerializer(args), {
                //                transformRequest: angular.identity,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        // Register function
        ajaxFunctions.register = function(args) {
            return $http.post(urlBase + 'register', $httpParamSerializer(args), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };


        // Check if username exists
        ajaxFunctions.checkUsername = function(args) {
            return $http.post(urlBase + 'user/exists', $httpParamSerializer(args), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };


        // Get a file by ID
        ajaxFunctions.getFileByID = function(args) {
            return $http.get(urlBase + 'file/' + args)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };

        //        Search by UserID
        ajaxFunctions.searchByUserId = function(args) {
            return $http.get(urlBase + 'files/user/' + args)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };

        //        Search by type (audio/video/image)

        ajaxFunctions.searchByType = function(args) {
            return $http.get(urlBase + 'files/type/' + args)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };

        //        Search by title

        ajaxFunctions.searchByTitle = function(args) {
            return $http.post(urlBase + 'files/search/title', $httpParamSerializer(args), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        //        Search by description

        ajaxFunctions.searchByDesc = function(args) {
            return $http.post(urlBase + 'files/search/desc', $httpParamSerializer(args), {
                //                transformRequest: angular.identity,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        };

        //        Like function

        ajaxFunctions.likeAFile = function(args1, args2) {
            return $http.get(urlBase + 'like/' + args1 + '/' + args2)
                .success(function(data) {
                    //                    searchResult.add(data);
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };

        //        Unlike function

        ajaxFunctions.unlikeAFile = function(args1, args2) {
            return $http.get(urlBase+ 'unlike/' + args1 + '/' + args2)
                .success(function(data) {
                    //                    searchResult.add(data);
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };

        //Get all comments

        ajaxFunctions.getAllComments = function() {
            return $http.get(urlBase + 'comments')
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };

        //Get comments of a file    
        ajaxFunctions.getAllCommentsAFile = function(args) {
            return $http.get(urlBase + 'comments/file/' + args)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        };


        return ajaxFunctions;
    });