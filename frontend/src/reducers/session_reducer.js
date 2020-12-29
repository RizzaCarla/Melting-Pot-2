import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  currentUserId: {}
};

const sessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        currentUserId: action.currentUser.id
      }
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        currentUserId: undefined
      };
    default: 
      return state;
  }
}

export default sessionReducer