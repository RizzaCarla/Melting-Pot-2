import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  // currentUser: state.session.currentUser.user
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, {logout})(NavBar);