const http = require('http');
const request  = require('request');

const host = "https://api.themoviedb.org/3";

function buildEndpoint(path, query = "") {
  const ep = `${host}${path}?api_key=${process.env.API_KEY}${query}`;
  console.log("REQUESTING ENDPOINT", ep);
  return ep;
}

module.exports = app => {
  app.get("/popular", async (req, res) => {
    const path = "/movie/popular";
    const ep = buildEndpoint(path);

    try {
      request(ep, (error, response, body) => {
        res.status(200).json(JSON.parse(body));
      });
    } catch(e) {
      res.status(401);
    }
  });

  app.get("/movie/:id", async (req, res) => {
    const path = `/movie/${req.params.id}`;
    const ep = buildEndpoint(path);

    try {
      request(ep, (error, response, body) => {
        res.status(200).json(JSON.parse(body));
      });
    } catch(e) {
      res.status(401);
    }
  });

  app.get("/person/:id", async (req, res) => {
    const path = `/person/${req.params.id}`;
    const ep = buildEndpoint(path);

    try {
      request(ep, (error, response, body) => {
        res.status(200).json(JSON.parse(body));
      });
    } catch(e) {
      res.status(401);
    }
  });

  app.get("/movie/:id/credits", async (req, res) => {
    const path = `/movie/${req.params.id}/credits`;
    const ep = buildEndpoint(path);

    try {
      request(ep, (error, response, body) => {
        res.status(200).json(JSON.parse(body));
      });
    } catch(e) {
      res.status(401);
    }
  });

  app.get("/movie/:id/similar", async (req, res) => {
    const path = `/movie/${req.params.id}/similar`;
    const ep = buildEndpoint(path);

    try {
      request(ep, (error, response, body) => {
        res.status(200).json(JSON.parse(body));
      });
    } catch(e) {
      res.status(401);
    }
  });

  app.get("/search_movies/:query", (req, res) => {
    const path = "/search/movie";
    const ep = buildEndpoint(path, `&query=${req.params.query}`);

    try {
      request(ep, (error, response, body) => {
        res.status(200).json(JSON.parse(body));
      });
    } catch(e) {
      res.status(401);
    }
  });

  app.get("/check_in", (req, res) => {
    res.status(200).json(process.env.API_KEY ? true : false);
  });
}
