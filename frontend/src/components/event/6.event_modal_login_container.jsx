import { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions';
import EventModalLogin from './6.event_modal_login';
import { withRouter } from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.currentUser,
        isAuthenticated: state.session.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: (() => dispatch(clearErrors())),
        closeModal: () => dispatch(closeModal())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventModalLogin));


