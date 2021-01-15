import { connect } from 'react-redux';
import EventButton from './5.event_button';
import { createJoin, deleteJoin, getJoins, getEventJoins } from '../../actions/join_actions'
import {joinSelector} from '../../reducers/joins_selectors'

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser.user,
        joins: state.entities.joins,
        events: state.entities.events,
        joinedEvent : joinSelector(state, ownProps)
        
    })
}

const mapDispatchToProp = (dispatch) => {
    return ({
        createJoin: ((join) => dispatch(createJoin(join))),
        deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
        getJoins: (() => dispatch(getJoins())),
        getEventJoins: ((eventId) => dispatch(getEventJoins(eventId)))
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(EventButton);