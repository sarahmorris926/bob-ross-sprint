'use strict';

angular.module("MovieWatchlist").controller("MovieCtrl", function($scope, MovieFactory) {

  $scope.searchForMovies = () => {
    MovieFactory.searchAPIMovies($scope.keyword)
      .then( movies => {
        console.log("movies?", movies.data);
        $scope.movieList = movies.data;
      });
  };

});
