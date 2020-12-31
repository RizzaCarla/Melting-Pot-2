import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from "./1.event_create"

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser.user
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createEvent: (event) => dispatch(createEvent(event))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
