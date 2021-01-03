import React from 'react'

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getRecipes();
    this.props.getEvents();
    this.props.fetchUsers();
  }
  
  handleRandomRecipe() {
    const randomNumber = Math.floor(Math.random() * (Object.values(this.props.recipes).length))
    const recipeIds = Object.keys(this.props.recipes);
    const randomId = recipeIds[randomNumber]
    return (this.props.recipes[randomId])
  }
  
  handleRandomEvent() {
    const randomNumber = Math.floor(Math.random() * (Object.values(this.props.events).length))
    const eventIds = Object.keys(this.props.events);
    const randomId = eventIds[randomNumber]
    return (this.props.events[randomId])
  }

  fetchUserInfoForRecipe(recipeOwnerId) {
    console.log(this.props.users)
    return this.props.users[recipeOwnerId]
  }

  render() {
    
    const randomRecipe = this.handleRandomRecipe();
    if (randomRecipe === undefined) {
      return null
    }
    
    const randomEvent = this.handleRandomEvent();
    if (randomEvent === undefined) {
      return null
    }
    
    const fetchUserInfoForRecipe = this.fetchUserInfoForRecipe(randomRecipe.authorId);
    if (fetchUserInfoForRecipe === undefined) {
      return null
    }
    
    return (
      <div>
        <h1>Melting Pot Homepage</h1>

        <div>
          <h1>Trending Recipes</h1>
          <button>View Full Recipe</button>
          <h1>{randomRecipe.name}</h1>
          <img src={randomRecipe.photoUrl}></img>
          <img src={fetchUserInfoForRecipe.photoUrl}></img>
          <h1>{fetchUserInfoForRecipe.handle}</h1>
        </div>

        <div>
          <h1>Trending Event</h1>
          <button>View Full Event</button>
          <h1>
            {randomEvent.name}
          </h1>
          <img src={randomEvent.photoUrl}></img>
        </div>

      </div>
    );
  }
}

export default HomePage;