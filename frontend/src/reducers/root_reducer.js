import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import recipes from './recipe_reducer' 


const RootReducer = combineReducers({
  session,
  errors,
  recipes,
});

export default RootReducer;