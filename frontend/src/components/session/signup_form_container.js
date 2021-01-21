import { connect } from 'react-redux'
import { login, signup, clearErrors} from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let redirectLink = '/profile'
  if (ownProps.location.state !== undefined) {
    redirectLink = ownProps.location.state.redirectLink
  }

  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    redirectLink: redirectLink
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: (() => dispatch(clearErrors())),
    login: ((user) => dispatch(login(user)))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignupForm));