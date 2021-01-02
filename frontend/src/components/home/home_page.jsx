import React from 'react'

class HomePage extends React.Component {
  handleRandomRecipe() {
  }
  
  handleRandomEvent() {
    Math.random(this.props.getEvents())
  }
  render() {
    const randomRecipeNumber = Math.random(Object.keys(this.props.getRecipes()).length + 1)
    const randomEventNumber = Math.random(Object.keys(this.props.getEvents()).length + 1)
    return (
      <div>
        <h1>Melting Pot Homepage</h1>
        <div>
          <h1>Trending Recipes</h1>
          <button>View Full Recipe</button>
          
          <img></img>
        </div>
        <div>
          <h1>Trending Events</h1>
        </div>
      </div>
    );
  }
}

export default HomePage;