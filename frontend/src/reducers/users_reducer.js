import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_USERS:
      return action.users.data
    case RECEIVE_USER:
      console.log(action)
      return Object.assign({}, oldState, {[action.user.data._id]: action.user.data})
    default: 
      return oldState;
  }
}

export default usersReducer;