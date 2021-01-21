import { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions';
import HomePageModalLogin from './home_page_modal_login';
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {

    let redirectLink = '/'
     if(ownProps.location.state !== undefined){
        redirectLink = ownProps.location.state.redirectLink
    }
    return {
        errors: state.errors.session,
        redirectLink: redirectLink,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePageModalLogin));