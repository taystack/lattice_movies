import React, { useEffect } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import IndexRouter from "./routers/index";


function Router() {
  return (<>
    <BrowserRouter>
      <IndexRouter />
    </BrowserRouter>
  </>
  );
}

export default Router;
