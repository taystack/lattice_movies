import { debounce } from "lodash";
import Backend from "../models/Backend";


export const SET_MOVIES = "SET_MOVIES";
export const SET_LOADING_MOVIES = "SET_LOADING_MOVIES";
export const SET_MOVIE = "SET_MOVIE";
export const SET_CREDITS = "SET_CREDITS";
export const SET_FILTER = "SET_FILTER";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";
export const SET_SIMILAR_MOVIES = "SET_SIMILAR_MOVIES";


export const setMovies = movies => ({
  type: SET_MOVIES,
  movies,
});

export const setSimilarMovies = movies => ({
  type: SET_SIMILAR_MOVIES,
  movies,
});

export const setMovie = movie => ({
  type: SET_MOVIE,
  movie,
});

export const setLoadingMovies = loading => ({
  type: SET_LOADING_MOVIES,
  loading,
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
});

export const setCredits = credits => ({
  type: SET_CREDITS,
  credits,
});

export const setCurrentTab = tab => ({
  type: SET_CURRENT_TAB,
  tab,
});

const debounceUserFilterSearch = debounce((dispatch, getState) => {
  const filter = getState().movie.filter;
  if (filter.length) dispatch(getFilteredMovies(filter));
  else dispatch(getPopularMovies());
}, [300]);

export const setUserFilter = filter => {
  return async (dispatch, getState) => {
    dispatch(setLoadingMovies(true));
    dispatch(setFilter(filter));
    debounceUserFilterSearch(dispatch, getState);
  };
};

export const getPopularMovies = (query = {}) => {
  return async (dispatch, getState) => {
    dispatch(setLoadingMovies(true));
    const { results } = await Backend.popular(query);
    dispatch(setMovies(results));
    dispatch(setLoadingMovies(false));
  };
};

export const getFilteredMovies = filter => {
  return async (dispatch, getState) => {
    dispatch(setLoadingMovies(true));
    const f = encodeURIComponent(filter);
    const { results } = await Backend.movies(f);
    dispatch(setMovies(results));
    dispatch(setLoadingMovies(false));
  };
};

export const getSimilarMovies = movieId => {
  return async (dispatch, getState) => {
    const { results } = await Backend.similarMovies(movieId);
    dispatch(setSimilarMovies(results));
  };
};

export const getMovie = movieId => {
  return async (dispatch, getState) => {
    // Bounce-out if we have thid already.
    if (getState().movie.movie.id === parseInt(movieId)) return;
    const movie = await Backend.movie(movieId);
    dispatch(getCredits(movieId));
    dispatch(getSimilarMovies(movieId));
    dispatch(setMovie(movie));
  };
};

export const getCredits = movieId => {
  return async (dispatch, getState) => {
    if (getState().movie.movie.id === parseInt(movieId)) return;
    const credits = await Backend.credits(movieId);
    dispatch(setCredits(credits));
  };
};
