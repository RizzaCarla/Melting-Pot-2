import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.handleRandomRecipe = this.handleRandomRecipe.bind(this);
    this.handleRandomEvent = this.handleRandomEvent.bind(this);
  }

  componentDidMount() {
    this.props.getRecipes();
    this.props.getEvents();
  }
  
  handleRandomRecipe() {
    const randomNumber = Math.floor(Math.random() * (Object.values(this.props.recipes).length + 1))
    const recipeIds = Object.keys(this.props.recipes);
    const randomId = recipeIds[randomNumber]
    return (this.props.recipes[randomId])
  }
  
  handleRandomEvent() {
    const randomNumber = Math.floor(Math.random() * (Object.values(this.props.events).length + 1))
    const eventIds = Object.keys(this.props.events);
    const randomId = eventIds[randomNumber]
    return (this.props.events[randomId])
  }

  render() {

    const randomRecipe = this.handleRandomRecipe();
    const randomEvent = this.handleRandomEvent();
    if (randomRecipe === undefined) {
      return null
    }
    if (randomEvent === undefined) {
      return null
    }
    
    return (
      <div>
        <h1>Melting Pot Homepage</h1>
        <div>
          <h1>Trending Recipes</h1>
          <button>View Full Recipe</button>
          <h1>
            {randomRecipe.name}
          </h1>
        </div>
        <div>
          <h1>Trending Event</h1>
          {/* <Link to={`/recipes/${this.props.recipe._id}`}> */}
            <button>View Full Event</button>
          {/* </Link> */}
          {/* <h2>{this.props.getRecipe("5ff0bee903c12306d787c805").name}</h2> */}
          <h1>
            {randomEvent.name}
          </h1>
        </div>
      </div>
    );
  }
}

export default HomePage;