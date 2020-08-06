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
  useEffect(() => {
  }, []);

  return (<div>
    You need to create a `.env` file in the root of the project. No API key present.
  </div>);
};

ErrorApi.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

ErrorApi.defaultProps = {
};

export default connect()(ErrorApi);
