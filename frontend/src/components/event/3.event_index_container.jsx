import { connect } from 'react-redux';
import EventIndex from './3.event_index';
import { getEvents, getUserEvents, updateEvent } from '../../actions/event_actions';
import { fetchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser.user,
        events: state.entities.events,
        users: state.entities.users,
        user: state.entities.users[state.session.currentUser.user._id],
    

    })
}

const mapDispatchToProp = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        getEvents: () => dispatch(getEvents()),
        getUserEvents: ((userId) => dispatch(getUserEvents(userId))),
        updateEvent: ((event) => dispatch(updateEvent(event)))

    })
}

export default connect(mapStateToProps, mapDispatchToProp)(EventIndex);