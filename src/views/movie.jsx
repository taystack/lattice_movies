import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getMovie,
  setMovie,
  setCurrentTab,
} from "../actions/MovieActions";
import MoviePoster from "../components/MoviePoster";
import MovieSplashHeader from "../components/MovieSplashHeader";


export const MovieView = ({
  dispatch,
  movie,
}) => {
  const {
    id,
    overview,
  } = movie;
  const history = useHistory();

  useEffect(() => {
    dispatch(setCurrentTab("overview"));
  }, []);

  const handleBack = () => {
    history.replace("/");
  };

  return (<div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
    <div>
      {overview}
    </div>
  </div>);
};

MovieView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

MovieView.defaultProps = {
};

export default connect(({ movie }) => ({
  movie: movie.movie,
}))(MovieView);
