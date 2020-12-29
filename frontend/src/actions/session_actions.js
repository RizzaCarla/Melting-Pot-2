import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGNUP = "RECEIVE_USER_SIGNUP";

// When our user is logged out, we will dispatch this action to set isAuthenticated to false
export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveUserSignup = user => ({
  type: RECEIVE_USER_SIGNUP,
  user
})


export const signup = (user) => (dispatch) =>
  APIUtil.signup(user)
    .then((res) => {
      const { token, user } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      // dispatch(receiveUserSignup(user));
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch(receiveErrors(err.response.data));
    });  
  ;


// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
  APIUtil.login(user)
    .then( res => {
      const {token} = res.data;
      localStorage.setItem('jwtToken', token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  dispatch(logoutUser())
};