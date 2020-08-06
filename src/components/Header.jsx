import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setUserFilter,
} from "../actions/MovieActions";


export const Header = ({
  dispatch,
  filter,
  placeholder,
}) => {
  const handleFilterChange = event => {
    dispatch(setUserFilter(event.target.value));
  };

  return (<div style={{ display: "flex", padding: 20, }}>
    <input
      style={{
        padding: 10,
        flexGrow: 1,
        outline: "none",
        borderRadius: 0,
        border: "none",
      }}
      id="HeaderInput"
      className="HeaderSearch"
      onChange={handleFilterChange}
      value={filter}
      placeholder={placeholder}
    />
  </div>);
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filter: PropTypes.string,
  placeholder: PropTypes.string,
};

Header.defaultProps = {
  filter: "",
  placeholder: "Search movies…",
};

export default connect(({ movie }) => ({
  filter: movie.filter,
}))(Header);
