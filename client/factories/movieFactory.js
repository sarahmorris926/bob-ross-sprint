'use strict';

angular.module("MovieWatchlist").factory("MovieFactory", ($http) => {

  return {
    searchAPIMovies(keyword){
      return $http.get(`/movies?keyword=${keyword}`);
    },

    postToWatchlist(movie){
      return $http.post(a route, angular.toJson(movie));
    }
  };

});