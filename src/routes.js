import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import NoMatch from "./pages/NoMatch";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={InitialPage} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
