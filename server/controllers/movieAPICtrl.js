'use strict';

const movieApi = require("imdb-api");

module.exports.searchMovieAPI = (req, res, next) => {
  movieApi
    .search(
      { title: req.query.keyword },
      { apiKey: require("../key").key }
    )
    .then(movieData => {
      res.status(200).json(movieData.results);
    });
};
