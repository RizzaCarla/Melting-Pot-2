import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';
import {RECEIVE_USER_SIGNUP} from '../actions/session_actions';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_USERS:
      let i;
      let nextState = Object.assign({}, oldState)
      for(i = 0; i < action.users.data.length; i++) {
        nextState[action.users.data[i]._id] = action.users.data[i]
      }
      return nextState;
    // case RECEIVE_USER_SIGNUP:
    //   return Object.assign({}, oldState, {[action.user._id]: action.user})
    case RECEIVE_USER:
      return Object.assign({}, oldState, {[action.user.data._id]: action.user.data})
    default: 
      return oldState;
  }
}

export default usersReducer;