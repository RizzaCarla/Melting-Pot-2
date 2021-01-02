import { connect } from 'react-redux';
import EditEvent from './4.event_edit';
import { getUserEvents, updateEvent, clearErrors, getEvents} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser.user,
        eventId: ownProps.match.params.eventId,
        event: state.entities.events[ownProps.match.params.eventId],
        errors: state.errors.events
    })
}

const mapDispatchToProp = (dispatch) => {
    return ({
        getUserEvents: (userId) => dispatch(getUserEvents(userId)),
        updateEvent: event => dispatch(updateEvent(event)),
        clearErrors: (() => dispatch(clearErrors())),
        getEvents: (() => dispatch(getEvents()))
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(EditEvent);