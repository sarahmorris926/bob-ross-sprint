'use strict';

angular.module("MovieWatchlist").controller("MovieCtrl", function($scope, MovieFactory) {

  MovieFactory.searchAPIMovies("batman")
    .then( movies => {
      console.log("movies?", movies.data);
      $scope.movieList = movies.data;
    });

});
