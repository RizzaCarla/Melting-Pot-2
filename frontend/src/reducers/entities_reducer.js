import {combineReducers} from "redux";
import usersReducer from './users_reducer';
import photosReducer from './photo_reducer';
import recipes from "./recipe_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  recipes
})

export default entitiesReducer