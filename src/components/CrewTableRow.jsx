import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import MoviePoster from "./MoviePoster";


export const CrewTableRow = ({
  member,
}) => {
  const history = useHistory();
  const { name, id, job, profile_path } = member;

  const handleClick = () => {
    history.push(`/actors/${id}`);
  };

  return (
    <div className="MovieTableRow" id={`Actor-${id}`} style={{
      padding: 20,
      cursor: "pointer",
      display: "flex",
    }} onClick={handleClick}
  >
    <div style={{ minWidth: 40 }}>
      <MoviePoster path={profile_path} style={{ height: 60 }} />
    </div>
    <div style={{ marginLeft: 20 }}>
      <h4 style={{ marginTop: 0, marginBottom: 10 }}>{job}</h4>
      {name}
    </div>
  </div>
  );
};

CrewTableRow.propTypes = {
  member: PropTypes.object.isRequired,
};

export default CrewTableRow;
