import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage";
import GenerateResume from "./pages/GenerateResume/GenerateResume";
//import LandingPage from "./pages/LandingPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GenerateResume} />
      {/* <Route path="/resume" component={LandingPage} /> */}
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes