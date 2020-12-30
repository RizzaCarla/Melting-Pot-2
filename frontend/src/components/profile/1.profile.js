import React from 'react'
// import ProfileShowContainer from './4.profile_show_container'
import NavBarContainer from './2.navbar_container'

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchUsers()
  }
  render() {
    return (
      <div>
        {/* {this.props.currentUser.profileUrl} */}
        <br></br>
        {this.props.currentUser.handle}
        <br></br>
        {this.props.currentUser.bio}
        <br></br>
        
        {/* < ProfileShowContainer /> */}
        < NavBarContainer />

      </div>
    )
  }
}

export default Profile;