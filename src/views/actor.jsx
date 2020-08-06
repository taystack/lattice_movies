import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getActor,
  setActor,
} from "../actions/ActorActions";
import MoviePoster from "../components/MoviePoster";
import IMDBIcon from "../components/IMDBIcon";


export const ActorView = ({
  dispatch,
  actor,
}) => {
  const {
    id,
    name,
    biography,
    profile_path,
    birthday,
    place_of_birth,
    deathday,
    imdb_id,
  } = actor;
  if (!id) return "Loading…";
  const bDay = new Date(birthday).toLocaleDateString();
  const dDay = deathday ? `Died: ${new Date(deathday).toLocaleDateString()}` : "";
  return (<>
    <div style={{ display: "flex", maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MoviePoster path={profile_path} style={{ maxHeight: 400, width: "auto" }} />
        Born: {bDay}
        <br />
        {place_of_birth}
        <br />
        {dDay}
      </div>
      <div style={{ marginLeft: 20 }}>
        <h1>{name} {imdb_id.length > 0 && <IMDBIcon to={imdb_id} type="name" />}</h1>
        {biography}
      </div>
    </div>
  </>);
};

ActorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

ActorView.defaultProps = {
};

export default connect(({ actor }) => ({
  actor: actor.actor,
}))(ActorView);
