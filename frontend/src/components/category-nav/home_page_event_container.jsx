import { connect } from 'react-redux';
import { getEvent, getEvents } from '../../actions/event_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import HomePageEvent from './home_page_event';
import { closeModal, openModal } from '../../actions/modal_actions'
import { countSelector } from '../../reducers/joins_selectors'
import { createJoin, deleteJoin, getJoins, getEventJoins } from '../../actions/join_actions'
import { joinSelector } from '../../reducers/joins_selectors'

const mapStateToProps = (state,ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        events: state.entities.events,
        users: state.entities.users,
        count: countSelector(state),
        joins: state.entities.joins,
        joinedEvent: joinSelector(state , ownProps),
        auth: state.session.isAuthenticated

    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getEvents: () => dispatch(getEvents()),
        getEvent: (eventId) => dispatch(getEvent(eventId)),
        fetchUsers: () => dispatch(fetchUsers()),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        createJoin: ((join) => dispatch(createJoin(join))),
        deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
        getJoins: (() => dispatch(getJoins())),
        getEventJoins: ((eventId) => dispatch(getEventJoins(eventId)))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageEvent);