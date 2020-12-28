import { connect } from 'react-redux'
import Profile from './1.profile';

const mapStateToProps = (state) => {
  return {
    photoUrl: this.state.photoUrl,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);