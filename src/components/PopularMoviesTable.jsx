import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieTableRow from "./MovieTableRow";


export const PopularMoviesTable = ({
  dispatch,
  movies,
  filter,
  loading,
}) => {
  const rows = movies.map((movie, i) => <MovieTableRow key={movie.id} movie={movie} rank={i + 1} />);

  return (<div style={{ padding: 20, paddingTop: 0, opacity: loading ? 0.5 : 1 }}>
    {/* {(loading && filter.length === 0) && "Loading Popular Movies…"}
    {(loading && filter.length > 0) && "Loading Movies…"} */}
    {movies.length > 0 && rows}
  </div>);
};

PopularMoviesTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

PopularMoviesTable.defaultProps = {
};

export default connect(({ movie: { movies, filter, loadingMovies }}) => ({
  movies,
  loading: loadingMovies,
  filter,
}))(PopularMoviesTable);
