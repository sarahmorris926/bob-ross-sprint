'use strict';

angular.module("MovieWatchlist", ["ngRoute"]).config($routeProvider => {
  $routeProvider
    .when("/test", {
      templateUrl: "partials/test.html",
      controller: "TestCtrl"
    })
    .when("/movies", {
      templateUrl: "partials/movies.html",
      controller: "MovieCtrl"
    })
    .when("/", {
      templateUrl: "partials/auth-form.html",
      controller: "AuthCtrl"
    })
    .otherwise("/");
});
