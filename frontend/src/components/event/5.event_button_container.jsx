import { connect } from 'react-redux';
import EventButton from './5.event_button';
import { createJoin, deleteJoin, getJoins, getEventJoins } from '../../actions/join_actions'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser.user,
        joins: state.entities.joins 
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