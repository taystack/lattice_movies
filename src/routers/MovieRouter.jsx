import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { connect } from "react-redux";
import {
  getMovie,
  setMovie,
} from "../actions/MovieActions";
import MovieView from "../views/movie";
import MovieActorsView from "../views/movieActors";
import MovieCrewView from "../views/movieCrew";
import RelatedMovieView from "../views/relatedMovies";
import MovieSplashHeader from "../components/MovieSplashHeader";



export const MovieRouter = ({
  dispatch,
  currentTab,
}) => {
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    dispatch(getMovie(movieId));

    return () => {
      dispatch(setMovie({}));
    };
  }, [movieId]);

  return (<>
    <MovieSplashHeader />
    <Switch>
      {currentTab}
      <Route path="/movie/:movieId/overview" component={MovieView} />
      <Route path="/movie/:movieId/actors" component={MovieActorsView} />
      <Route path="/movie/:movieId/crew" component={MovieCrewView} />
      <Route path="/movie/:movieId/related_films" component={RelatedMovieView} />
      <Route path="/movie/:movieId" component={MovieView} />
    </Switch>
  </>
  );
};

MovieRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

MovieRouter.defaultProps = {
};

export default connect(({ movie }) => ({
  currentTab: movie.currentTab,
}))(MovieRouter);
