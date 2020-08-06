import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import MoviePoster from "./MoviePoster";


export const CastTableRow = ({
  actor,
}) => {
  const history = useHistory();
  const { name, id, profile_path, character } = actor;

  const handleClick = () => {
    history.push(`/actors/${id}`);
  };

  return (
    <div className="MovieTableRow" id={`Cast-${id}`} style={{
      padding: 20,
      cursor: "pointer",
      display: "flex",
    }} onClick={handleClick}
  >
    <MoviePoster path={profile_path} style={{ height: 60 }} />
    <div style={{ marginLeft: 20 }}>
      <h4 style={{ marginTop: 0, marginBottom: 10 }}>{character}</h4>
      {name}
    </div>
  </div>
  );
};

CastTableRow.propTypes = {
  actor: PropTypes.object.isRequired,
};

export default CastTableRow;
