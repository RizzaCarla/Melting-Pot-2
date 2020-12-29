import { connect } from 'react-redux'
import Profile from './profile';
import {fetchUsers} from '../../actions/user_actions';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);