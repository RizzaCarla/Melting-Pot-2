import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Profile from './1.profile'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    user: state.entities.users[ownProps.match.params.userId]

  };
};


export default withRouter(connect(mapStateToProps, null)(Profile));