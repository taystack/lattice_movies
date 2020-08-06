import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setCurrentTab,
} from "../actions/MovieActions";
import CastTableRow from "../components/CastTableRow";


export const MovieActorsView = ({
  dispatch,
  cast,
}) => {
  useEffect(() => {
    dispatch(setCurrentTab("actors"));
  }, []);

  const rows = cast.map(actor => {
    return <CastTableRow key={actor.id} actor={actor} />
  });

  return (<div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
    {rows}
  </div>);
};

MovieActorsView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

MovieActorsView.defaultProps = {
  cast: [],
};

export default connect(({ movie }) => ({
  cast: movie.credits.cast,
}))(MovieActorsView);
