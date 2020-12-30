import { connect } from 'react-redux'
import Friends from './6.friends'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user

    };
};



export default connect(mapStateToProps, null)(Friends);