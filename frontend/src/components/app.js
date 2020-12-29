import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import MainPage from "./home/home_page";
import NavBarContainer from "./nav/navbar_container";
import ProfileContainer from './profile/2.profile_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <ProtectedRoute path="/profile" component={ProfileContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route exact path="/" component={MainPage} />

      </Switch>
    </div>
  )
};

export default App;
