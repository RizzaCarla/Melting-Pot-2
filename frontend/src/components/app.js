import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/home_page";
import NavBarContainer from "./nav/navbar_container";
import ProfileContainer from './profile/2.profile_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import RecipeFormContainer from "./recipe/recipe_create_container";

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <ProtectedRoute exact path="/recipes/new" component={RecipeFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={HomePage} />

      </Switch>
    </div>
  )
};

export default App;
