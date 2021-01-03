import { connect } from 'react-redux'
import Friends from './6.friends'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        events: state.entities.events,
        users: state.entities.users,

    };
};



export default connect(mapStateToProps, null)(Friends);