import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/home_page";
import NavBarContainer from "./nav/navbar_container";
import ProfileContainer from './profile/1.profile_container';
import EventContainer from './event/1.event_create_container';
import EventShowContainer from './event/2.event_show_container'
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import RecipeFormContainer from "./recipe/recipe_create_container";
import RecipeShowContainer from "./recipe/recipe_show_container";
import RecipeEditContainer from "./recipe/recipe_edit_container";

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <ProtectedRoute exact path="/recipes/new" component={RecipeFormContainer} />
        <ProtectedRoute exact path="/events/new" component={EventContainer} />
        <ProtectedRoute exact path="/event/:eventId" component={EventShowContainer} />
        <Route exact path="/recipes/:recipeId" component={RecipeShowContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/recipes/:recipeId/edit" component={RecipeEditContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={HomePage} />

      </Switch>
    </div>
  )
};

export default App;
