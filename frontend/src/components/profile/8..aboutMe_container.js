import { connect } from 'react-redux'
import AboutMe from './7.aboutMe'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        user: state.entities.users[state.session.currentUser.user._id]
    };
};



export default connect(mapStateToProps, null)(AboutMe);