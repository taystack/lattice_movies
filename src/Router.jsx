import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import IndexView from "./views/index";
import ApiError from "./views/errorApi";
import MovieRouter from "./routers/MovieRouter";
import ActorRouter from "./routers/ActorRouter";


function Router() {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexView} />
        <Route exact path="/apiError" component={ApiError} />
        <Route path="/movie/:movieId" component={MovieRouter} />
        <Route path="/actors/:actorId" component={ActorRouter} />
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default Router;
