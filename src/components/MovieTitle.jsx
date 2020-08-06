import React from "react";
import PropTypes from "prop-types";

function MovieTitle({
  size,
  movie,
  rank,
}) {
  const { title, release_date } = movie;
  if (!title) return "Loading Movie…"
  const releaseDate = new Date(release_date).getFullYear();
  return (
    <h3 style={{ margin: 0, marginBottom: 10 }}>
      {rank > 0 && <span className="small">{rank}</span>} {title} <span className="small">({releaseDate})</span>
    </h3>
  );
};

MovieTitle.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    releaseDate: PropTypes.string,
  }),
  rank: PropTypes.number,
};

MovieTitle.defaultProps = {
  rank: 0,
  movie: {},
};

export default MovieTitle;
