import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProfileShow from './3.profile_show'

const mapStateToProps = (state, ownProps) => {
    return {

    };
};


export default withRouter(connect(mapStateToProps, null)(ProfileShow));