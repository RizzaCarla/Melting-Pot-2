import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      queryResults: []
    }
    
    this.logoutUser = this.logoutUser.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.queryList = this.queryList.bind(this);
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

  fetchRecipes(query) {
    this.setState({["query"]: query});
    fetch("/api/recipes/search-recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((results) => {
        this.setState({ ["queryResults"]: results.recipe })
        console.log(results.recipe)
      })
      
  }

  queryList() {
    const list = this.state.queryResults.map( (item, i) => {
      return (
        <li>
          <div className="search-item-picture">

          </div>
        </li>

        
      )
    })
    return list;
  }

  render() {
    
    return (
      <div className="NavBar">
        <div className="navbar-left">
          <Link to="/">Home</Link>

          <form action="">
            <input 
              type="text" 
              value={this.state.query}
              placeholder="Search Recipe Names" 
              onChange={(e) => this.fetchRecipes(e.target.value)}
              />
              <ul className="search-results">
                {this.queryList()}
              </ul>
          </form>
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;