import {combineReducers} from "redux";
import usersReducer from './users_reducer';
import recipes from "./recipe_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  recipes
})

export default entitiesReducer