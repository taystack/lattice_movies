import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieTitle from "./MovieTitle";
import MoviePoster from "./MoviePoster";


export const MovieTableRow = ({
  dispatch,
  movie,
  rank,
}) => {
  const { overview, id, poster_path } = movie;
  const truncatedOverview = overview.substring(0, 150) + "…";

  const history = useHistory();

  const handleClick = () => {
    history.push(`/movie/${id}`);
  };


  return (<div className="MovieTableRow" id={`Movie-${id}`} style={{
    padding: 20,
    cursor: "pointer",
  }} onClick={handleClick}>
    <div style={{ display: "flex" }}>
      <MoviePoster path={poster_path} style={{ height: 70 }} />
      <div style={{ marginLeft: 20 }}>
        <MovieTitle movie={movie} />
        <div>{truncatedOverview} <span className="blue">read more</span></div>
      </div>
    </div>
  </div>);
};

MovieTableRow.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rank: PropTypes.number,
};

MovieTableRow.defaultProps = {
  rank: 0,
};

export default connect((state) => ({
  /* Map state to props object:
  /* foo: state.foo */
}))(MovieTableRow);
