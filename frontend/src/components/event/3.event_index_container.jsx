import { connect } from 'react-redux';
import EventIndex from './3.event_index';
import { createJoin, deleteJoin, getJoins, getEventJoins} from '../../actions/join_actions'
import { getEvents, getUserEvents, updateEvent, } from '../../actions/event_actions';
import { fetchUsers} from '../../actions/user_actions'
import { countSelector } from '../../reducers/joins_selectors'

const mapStateToProps = (state) => {
    
    return ({
        currentUser: state.session.currentUser,
        events: state.entities.events,
        users: state.entities.users,
        // user: state.entities.users[state.session.currentUser.user._id],
        auth: state.session.currentUser,
        joins: state.entities.joins,
        count: countSelector(state),
        loggedIn: state.session.isAuthenticated
        
    })
}

const mapDispatchToProp = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        getEvents: () => dispatch(getEvents()),
        getUserEvents: ((userId) => dispatch(getUserEvents(userId))),
        updateEvent: ((event) => dispatch(updateEvent(event))),
        createJoin: ((join) => dispatch(createJoin(join))),
        deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
        getJoins: (() => dispatch(getJoins())),
        getEventJoins: ((eventId) => dispatch(getEventJoins(eventId)))
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(EventIndex);