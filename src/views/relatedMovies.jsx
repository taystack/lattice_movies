import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieTableRow from "../components/MovieTableRow";
import {
  setCurrentTab,
} from "../actions/MovieActions";


export const RelatedMovieView = ({
  dispatch,
  movies,
}) => {
  useEffect(() => {
    dispatch(setCurrentTab("related_films"));
  }, []);

  const rows = movies.map(movie => {
    return <MovieTableRow key={movie.id} movie={movie} />
  });

  return (<div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
    {rows}
  </div>);
};

RelatedMovieView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(({ movie }) => ({
  movies: movie.similarMovies,
}))(RelatedMovieView);
