import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setCurrentTab,
} from "../actions/MovieActions";
import CrewTableRow from "../components/CrewTableRow";


export const MovieCrewView = ({
  dispatch,
  crew,
}) => {

  useEffect(() => {
    dispatch(setCurrentTab("crew"));
  }, []);

  const rows = crew.map(member => {
    return <CrewTableRow key={member.credit_id} member={member} />
  });


  return (<div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
    {rows}
  </div>);
};

MovieCrewView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  crew: PropTypes.array.isRequired,
};

MovieCrewView.defaultProps = {
  crew: [],
};

export default connect(({ movie }) => ({
  crew: movie.credits.crew,
}))(MovieCrewView);
