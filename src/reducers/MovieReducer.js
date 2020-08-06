import {
  SET_CREDITS,
  SET_FILTER,
  SET_LOADING_MOVIES,
  SET_MOVIE,
  SET_MOVIES,
  SET_CURRENT_TAB,
  SET_SIMILAR_MOVIES,
} from "../actions/MovieActions";


export const movieInitialState = {
  movies: [],
  similarMovies: [],
  loadingMovies: false,
  movie: {},
  credits: {},
  filter: "",
  currentTab: "overview",
};


export function movieReducer(state = movieInitialState, action) {
  let data = {};

  switch (action.type) {
    case SET_MOVIES:
      data = { movies: action.movies };
      break;

    case SET_LOADING_MOVIES:
      data = { loadingMovies: action.loading };
      break;

    case SET_MOVIE:
      data = { movie: action.movie };
      break;

    case SET_FILTER:
      data = { filter: action.filter };
      break;

    case SET_CREDITS:
      data = { credits: action.credits };
      break;

    case SET_CURRENT_TAB:
      data = { currentTab: action.tab };
      break;

    case SET_SIMILAR_MOVIES:
      data = { similarMovies: action.movies };
      break;

    default:
      break;
  }

  return {
    ...state,
    ...data,
  };
}
