import { connect } from 'react-redux'
import { getEvents, getUserEvents } from '../../actions/event_actions'
import Events from './5.events'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        events: state.entities.events,
        user: state.entities.users[state.session.currentUser.user._id]


        // eventsHosted: state.entities.users.eventsHosted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (() => dispatch(getEvents())),
        getUserEvents: ((userId) => dispatch(getUserEvents(userId)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);