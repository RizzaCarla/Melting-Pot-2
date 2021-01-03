import { connect } from 'react-redux';
import EventIndex from './3.event_index';
import { getEvents } from '../../actions/event_actions';
import { fetchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser.user,
        events: state.entities.events,
        users: state.entities.users,
    })
}

const mapDispatchToProp = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        getEvents: () => dispatch(getEvents()),
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(EventIndex);