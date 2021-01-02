import React from 'react'
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
        
        <div><img src={this.props.currentUser.photoUrl}></img></div>
        <div>{this.props.currentUser.handle}</div>
        <div>{this.props.currentUser.bio}</div>
        <div>< NavBarContainer /></div>

      </div>
    )
  }
}

export default Profile;