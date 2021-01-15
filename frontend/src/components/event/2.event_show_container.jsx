import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getEvents, getEvent, updateEvent, deleteEvent } from '../../actions/event_actions';
import EventShow from './2.event_show';
import { joinSelector2 } from '../../reducers/joins_selectors'
import { createJoin, deleteJoin, getJoins } from '../../actions/join_actions'
import {login} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        event: state.entities.events[ownProps.match.params.eventId],
        eventId: ownProps.match.params.eventId,
        joinedEvent: joinSelector2(state, ownProps.match.params.eventId),
        joins: state.entities.joins,
        events: state.entities.events,
        loggedIn: state.session.isAuthenticated,

    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        getEvents: () => dispatch(getEvents()),
        getEvent: (eventId) => dispatch(getEvent(eventId)),
        updateEvent: (event) => dispatch(updateEvent(event)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        createJoin: ((join) => dispatch(createJoin(join))),
        getJoins: (() => dispatch(getJoins())),
        deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
        login: (user) => dispatch(login(user))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShow));