import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/MovieReducer";
import { actorReducer } from "./reducers/ActorReducer";
import { authReducer } from "./reducers/AuthReducer";

const store = createStore(
  combineReducers({
    movie: movieReducer,
    actor: actorReducer,
    auth: authReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);

export default store;
