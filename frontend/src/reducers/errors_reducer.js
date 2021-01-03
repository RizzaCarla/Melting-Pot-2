import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import EventErrorsReducer from './events_errors_reducer';
import RecipeErrorsReducer from "./recipes_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  events: EventErrorsReducer,
  recipes: RecipeErrorsReducer
});