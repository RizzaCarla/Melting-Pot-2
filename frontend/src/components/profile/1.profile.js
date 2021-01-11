import React from 'react'
import NavBarContainer from './2.navbar_container'
import "./1.profile.css"

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchUsers()
  }
  render() {
    return (
      <div className="profile-container">

        <div className="profile-pic-container">
          <div className="profile-pic-div"><img className="profile-picture" src={this.props.currentUser.photoUrl}></img></div>
        </div>

        <div className="profile-handle">{this.props.currentUser.handle}</div>
        <div className="profile-bio">{this.props.currentUser.bio}</div>
        <div className="navbar-profile">< NavBarContainer /></div>

      </div>
    )
  }
}

export default Profile;