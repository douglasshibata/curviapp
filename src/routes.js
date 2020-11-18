import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes