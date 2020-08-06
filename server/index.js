require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 9292;
const applyTMDBEndpoints = require("./tmdb");
const applyCORS = require("./cors");

console.log("USING TMDB API KEY:", process.env.API_KEY);

// CORS mutation
applyCORS(app);
// 3rd party endpoints for TMDB
applyTMDBEndpoints(app);

const server = app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

app.get('/', (req, res) => {
  res.status(200).json({});
});

module.exports = server;
