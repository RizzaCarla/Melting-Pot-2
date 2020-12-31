import { connect } from 'react-redux'
import {fetchUsers} from '../../actions/user_actions'
import { withRouter } from 'react-router-dom'
import Profile from './1.profile'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (() => dispatch(fetchUsers()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);