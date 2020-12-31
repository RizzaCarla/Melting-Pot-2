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
        <button className="logout-btn" onClick={this.logoutUser}>Logout</button>
      )
    } else {
      return(
        <div className="navbar-right">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="NavBar">
        <div className="navbar-left">
          <Link to="/">Home</Link>
          <form action="">
            {/* <input type="text"
                  value=""
                  placeholder="look for a recipe"/> */}
          </form>
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;