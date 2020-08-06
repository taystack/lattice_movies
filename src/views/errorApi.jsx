import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPopularMovies,
} from "../actions/MovieActions";
import Header from "../components/Header";
import PopularMoviesTable from "../components/PopularMoviesTable";


export const ErrorApi = ({
  dispatch,
}) => {
  return (<div>
    You need to create a <code>.env</code> file in the root of the project. No API key present.
    <br />
    See <code>README.md</code>, and <code>.env.example</code> for direction on setting up your TMDB API key.
    <br />
    You will have to restart your backend server, and clear your browser cache.
  </div>);
};

ErrorApi.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

ErrorApi.defaultProps = {
};

export default connect()(ErrorApi);
