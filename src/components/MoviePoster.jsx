import React from "react";
import PropTypes from "prop-types";

function MoviePoster({
  path,
  style,
}) {
  if (!path) return <img src="https://via.placeholder.com/500X750" style={style} />;
  const imgSrc = `https://image.tmdb.org/t/p/w500${path}`;
  return (
    <img src={imgSrc} alt="Loading…" style={style} />
  );
};

MoviePoster.propTypes = {};

export default MoviePoster;
