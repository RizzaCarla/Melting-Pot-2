import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

const sessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        currentUser: action.currentUser
      }
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        currentUser: undefined
      };
    default: 
      return state;
  }
}

export default sessionReducer