import {combineReducers} from "redux";
import usersReducer from './users_reducer';
import photosReducer from './photo_reducer';
import recipes from "./recipe_reducer";
import eventsReducer from './events_reducer';
import comments from "./comment_reducer";
import joinsReducer from "./joins_reducer"
import likes from "./like_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  recipes,
  events: eventsReducer,
  comments,
  joins: joinsReducer,
  likes
})

export default entitiesReducer