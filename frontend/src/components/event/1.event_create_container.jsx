import { connect } from 'react-redux';
import { createEvent, clearErrors} from '../../actions/event_actions';
import EventForm from "./1.event_create"

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser.user,
        errors: state.errors.events
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createEvent: (event) => dispatch(createEvent(event)),
        clearErrors: (() => dispatch(clearErrors()))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
