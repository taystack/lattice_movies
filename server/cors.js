const cors = require('cors');

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';


// Dunk our app through this method to enable basic CORS on it
module.exports = app => {
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });


  // Activate cors for the frontend to access.
  // Authentication is not being used here.
  const corsConfig = {
    credentials: true,
    origin: [ALLOWED_ORIGIN],
  };

  app.use(cors(corsConfig));
};
