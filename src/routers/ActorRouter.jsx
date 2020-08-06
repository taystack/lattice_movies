import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { connect } from "react-redux";
import {
  getActor,
  setActor,
} from "../actions/ActorActions";
import ActorView from "../views/actor";



export const ActorRouter = ({
  dispatch,
}) => {
  const params = useParams();
  const actorId = params.actorId;

  useEffect(() => {
    dispatch(getActor(actorId));

    return () => {
      dispatch(setActor({}));
    };
  }, [actorId]);

  return (
    <Switch>
      <Route path="/actors/:actorId" component={ActorView} />
    </Switch>
  );
};

ActorRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

ActorRouter.defaultProps = {
};

export default connect((state) => ({
}))(ActorRouter);
