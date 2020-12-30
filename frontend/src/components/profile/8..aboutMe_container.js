import { connect } from 'react-redux'
import AboutMe from './7.aboutMe'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user

    };
};



export default connect(mapStateToProps, null)(AboutMe);