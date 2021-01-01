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
        <img src={this.props.currentUser.photoUrl}></img>
        <br></br>
        {this.props.currentUser.handle}
        <br></br>
        {this.props.currentUser.bio}
        <br></br>
        

        < NavBarContainer />

      </div>
    )
  }
}

export default Profile;