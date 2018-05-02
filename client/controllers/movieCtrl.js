'use strict';

angular.module("MovieWatchlist").controller("MovieCtrl", function($scope, MovieFactory) {

  $scope.searchForMovies = () => {
    MovieFactory.searchAPIMovies($scope.keyword)
      .then( movies => {
        const movieList = movies.data.map( movie => {
          if (movie.poster === "N/A")
            movie.poster = "/images/no-poster.jpg";
          return movie;
        })
        $scope.movieList = movieList;
      });
  };
});
