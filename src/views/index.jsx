import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPopularMovies,
} from "../actions/MovieActions";
import Header from "../components/Header";
import PopularMoviesTable from "../components/PopularMoviesTable";


export const IndexView = ({
  dispatch,
  key,
}) => {
  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (<>
    <Header />
    <PopularMoviesTable />
  </>);
};

IndexView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

IndexView.defaultProps = {
};

export default connect(() => ({
  /* Map state to props object:
  /* foo: state.foo */
}))(IndexView);
