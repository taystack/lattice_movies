This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Lattice Movies
---
## Setup
In order to build this project, it is assumed you have `node`, `yarn` (or `npm`) installed on your machine.

Install the project dependencies:
```bash
yarn
```
Or, if you don't use `yarn`
```bash
npm install
```

## Running the backend

In the project root, create a `.env` file and add this line:
```bash
# .env

API_KEY=<your_tmdb_api_key>
```

See `.env.example` for an example format of how your `.env` file should look.

```bash
yarn run backend # (OR) npm run backend
```

## Running the client

In a separate terminal from the previous step:

```bash
yarn start # (OR) npm start
```

## Tests

For testing the front end:
```bash
yarn test
```
Ideally, there would be a lot more unit tests here. I have run out of time and have neglected composing a mock provider for stubbing the redux store for connected components. Fairly simple, but verbose exercise.

For testing the backend:
```bash
yarn test:backend
```

## Now what?
By now, the `yarn start` script should have spawned a browser addressed to `http://localhost:3000`.

If everything is running properly, you will be making data requests from port 3000 to port 9292 as CORS has been enabled on the Node/Express backend server.




## Architecture Decisions

It would be pertinent at this time to address the architecture of the project. The simple way to handle dishing-out a client is to _only_ serve the client. We can clear up traffic on the data (API) this way.
In order to do this, the data (API) server will exist on a separate server to the client. CORS will be required for this to work. Authentication will be required as well to prevent unauthorized requests. The auth layer is not implemented.


Step 1 - Create a backend server for handling data (API) requests.
  - Node.js Express framework
  - Pure JSON responses

Step 2 - Enable CORS, Authenticate 3rd party requests.
  - 'cors' npm package
  - 'dotenv' npm package to soak-up env vars
  -


Step 3 - Enable client to be served as index.js.min through Webpack transpilation/generation. (Free from Create React App)
