import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MoviePoster from "./MoviePoster";
import StarringList from "./StarringList";
import IMDBIcon from "./IMDBIcon";


export const MovieSplashHeader = ({
  dispatch,
  movie,
  currentTab,
}) => {
  const {
    title,
    id,
    release_date,
    belongs_to_collection,
    tagline,
    backdrop_path,
    poster_path,
    runtime,
    imdb_id,
  } = movie;
  const releaseDate = new Date(release_date).getFullYear();

  const history = useHistory();

  const tabs = ["overview", "actors", "crew", "related_films"].map((tab) => {
    const handleClick = () => {
      history.replace(`/movie/${id}/${tab}`);
    };
    return (<div key={tab} style={{
      marginRight: 20,
      paddingBottom: 5,
      paddingTop: 20,
      cursor: "pointer",
      fontSize: 12,
      textTransform: "uppercase",
      borderBottom: `2px solid ${currentTab === tab ? "#9999e2" : "transparent"}`,
    }} onClick={handleClick}>{tab.split("_").join(" ")}</div>);
  });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", }}>
        <MoviePoster
          path={backdrop_path}
          style={{ position: "absolute", top: 0, width: "100vw", maxWidth: 1000, zIndex: -1, filter: "blur(0px)", margin: "0 auto" }}
        />
      </div>
      <div style={{ position: "relative", marginTop: "20vh", padding: 20, background: "rgba(0,0,0,0.75)", paddingBottom: 0, }}>
        <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto" }}>
          <div>
            <MoviePoster path={poster_path} style={{ height: "50vh", }} />
          </div>
          <div style={{ marginLeft: 20 }}>
            <h1>{title}
              &nbsp;<span className="narrow">({releaseDate})</span>
              &nbsp;<span className="narrow">{runtime} min.</span>
              <IMDBIcon to={imdb_id} style={{ marginLeft: 20 }} />
            </h1>
            <br />
            <StarringList />
          </div>
        </div>
        <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto" }}>
          {tabs}
        </div>
      </div>
    </div>
  );
};

MovieSplashHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

MovieSplashHeader.defaultProps = {
};

export default connect(({ movie }) => ({
  movie: movie.movie,
  currentTab: movie.currentTab,
}))(MovieSplashHeader);
