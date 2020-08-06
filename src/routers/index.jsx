import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { connect } from "react-redux";
import Header from "../components/Header";
import IndexView from "../views/index";
import ApiError from "../views/errorApi";
import MovieRouter from "../routers/MovieRouter";
import ActorRouter from "../routers/ActorRouter";
import { checkIn } from "../actions/AuthActions";


function Router({
  dispatch,
  hasKey,
}) {
  const history = useHistory();

  useEffect(() => {
    dispatch(checkIn());
  });

  useEffect(() => {
    if (!hasKey) history.replace("/apiError");
  }, [hasKey]);

  return (<>
    <Switch>
      <Route exact path="/" component={IndexView} />
      <Route exact path="/apiError" component={ApiError} />
      <Route path="/movie/:movieId" component={MovieRouter} />
      <Route path="/actors/:actorId" component={ActorRouter} />
    </Switch>
  </>
  );
}

export default connect(({ auth }) => ({
  hasKey: auth.key,
}))(Router);
