import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { take } from "lodash";


export const StarringList = ({
  dispatch,
  cast,
}) => {
  const history = useHistory();
  const showCast = take(cast, 4).map((member, i) => {
    const handleClick = () => {
      history.push(`/actors/${member.id}`);
    };
    return (<span key={member.id}
      style={{
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {member.name} {i < 3 ? ", " : ""}
    </span>);
  });
  return (
    <div>Cast: {showCast}</div>
  );
};

StarringList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cast: PropTypes.array.isRequired,
};

StarringList.defaultProps = {
  cast: [],
};

export default connect(({ movie }) => ({
  cast: movie.credits.cast,
}))(StarringList);
