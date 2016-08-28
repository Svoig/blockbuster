"use strict";

angular.module("BlockbustR.controllers", [])
    .controller("moviesController", function($scope, movieGetterAPIService) {
        /*$scope.moviesList = [
            {"Title":"Pure Luck","Year":"1991","Rated":"PG","Released":"09 Aug 1991","Runtime":"96 min","Genre":"Comedy, Crime, Mystery","Director":"Nadia Tass","Writer":"Francis Veber (film La Chevre), Herschel Weingrod (screenplay), Timothy Harris (screenplay)","Actors":"Martin Short, Danny Glover, Sheila Kelley, Sam Wanamaker","Plot":"The daughter of a wealthy businessman has disappeared in Mexico, and all the efforts to find her have been unsuccessful. A psychologist, knowing that the girl has an ultra bad luck, ...","Language":"English, Spanish","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAwNjgxMTk3Nl5BMl5BanBnXkFtZTYwODIyOTg5._V1_SX300.jpg","Metascore":"N/A","imdbRating":"5.7","imdbVotes":"5,262","imdbID":"tt0102729","Type":"movie","Response":"True"},
            {"Title":"Ben-Hur","Year":"1959","Rated":"G","Released":"26 Dec 1959","Runtime":"212 min","Genre":"Adventure, Drama, History","Director":"William Wyler","Writer":"Lew Wallace (novel), Karl Tunberg (screenplay)","Actors":"Charlton Heston, Jack Hawkins, Haya Harareet, Stephen Boyd","Plot":"When a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge.","Language":"English","Country":"USA","Awards":"Won 11 Oscars. Another 16 wins & 13 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BNjg2NjA3NDY2OV5BMl5BanBnXkFtZTgwNzE3NTkxMTE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.1","imdbVotes":"159,643","imdbID":"tt0052618","Type":"movie","Response":"True"}
        ];*/
        $scope.moviesList = [];
        
        movieGetterAPIService.getMovie().success(function(res) {
            $scope.moviesList = res;
        });
    })