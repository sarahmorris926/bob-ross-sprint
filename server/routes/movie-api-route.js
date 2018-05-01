"use strict";

const { Router } = require("express");
const router = Router();
const { searchMovieAPI } = require("../controllers/movieAPICtrl");


router.get("/movies", searchMovieAPI);

module.exports = router;
