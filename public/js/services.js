"use strict";
angular.module("BlockbustR.services", [])
    .factory('movieGetterAPIService', function($http) {
        const api = {
            getMovie: function() {
                return $http(
                    {
                        method: 'JSONP',
                        url: "https://blockbuster-svoig.c9users.io/getmovies?callback=JSON_CALLBACK"
                    });
            }  
        };
        
        return api;
})