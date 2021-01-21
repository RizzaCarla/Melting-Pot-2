import { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions';
import HomePageModalLogin from './home_page_modal_login';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: (() => dispatch(clearErrors())),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageModalLogin);