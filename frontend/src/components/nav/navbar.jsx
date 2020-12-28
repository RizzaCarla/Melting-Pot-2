import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if(this.props.loggedIn) {
      return(
        <button onClick={this.logoutUser}>Logout</button>
      )
    } else {
      return(
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="NavBar">
        <Link to="/">Home</Link>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;