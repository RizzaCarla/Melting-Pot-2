import { connect } from 'react-redux'
import { getEvents, getUserEvents } from '../../actions/event_actions'
import { fetchUsers } from '../../actions/user_actions'
import Events from './5.events'
import { countSelector, eventSelector} from '../../reducers/joins_selectors'
import { getJoins, getUserJoins } from '../../actions/join_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        events: state.entities.events,
        user: state.entities.users[state.session.currentUser.user._id],
        users: state.entities.users,
        count: countSelector(state),
        eventJoined: eventSelector(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: (() => dispatch(getEvents())),
        getUserEvents: ((userId) => dispatch(getUserEvents(userId))),
        fetchUsers: () => dispatch(fetchUsers()),
        getJoins: () => dispatch(getJoins()),
        getUserJoins: (userId) => dispatch(getUserJoins(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);