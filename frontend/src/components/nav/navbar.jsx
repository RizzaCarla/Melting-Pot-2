import React from 'react'
// import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }


  render() {
    return (
      <div className="NavBar">
        <h1>Main Navbar</h1>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

export default NavBar;