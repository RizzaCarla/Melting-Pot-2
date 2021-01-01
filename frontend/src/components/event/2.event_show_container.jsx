import { connect } from 'react-redux';
import { getEvents, getEvent, updateEvent, deleteEvent } from '../../actions/event_actions';
import EventShow from './2.event_show';

const mapStateToProps = (state, ownProps) => {
    return ({
        event: state.entities.events[ownProps.match.params.eventId]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        getEvents: () => dispatch(getEvents()),
        getEvent: (eventId) => dispatch(getEvent(eventId)),
        updateEvent: (event) => dispatch(updateEvent(event)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);