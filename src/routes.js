import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Resume from "./pages/Resume";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/:id" component={Resume} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes