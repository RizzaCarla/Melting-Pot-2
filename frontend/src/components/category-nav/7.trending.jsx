import React from 'react'
import { Link } from 'react-router-dom';
import './7.trending.css';
import HomePageEventContainer from './home_page_event_container'

class Trending extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { randomRecipe: [] }
  //   this.handleRandomRecipe = this.handleRandomRecipe.bind(this);
  // }

  componentDidMount() {
    // console.log('you are currently getting recipes')
    this.props.getRecipes();
    this.props.getEvents();
    this.props.fetchUsers();
  }

  handleRandomRecipe() {
    const randomNumber = Math.floor(Math.random() * (Object.values(this.props.recipes).length))
    const recipeIds = Object.keys(this.props.recipes);
    const randomId = recipeIds[randomNumber]
    // const randomRecipe = this.state.randomRecipe.slice()
    // randomRecipe.push(this.props.recipes[randomId])
    // this.setState({ ['randomRecipe']: randomRecipe })
    return (this.props.recipes[randomId])
  }

  handleRandomEvent() {
    const randomNumber = Math.floor(Math.random() * (Object.values(this.props.events).length))
    const eventIds = Object.keys(this.props.events);
    const randomId = eventIds[randomNumber]
    return (this.props.events[randomId])
  }

  fetchUserInfoForRecipe(recipeOwnerId) {
    return this.props.users[recipeOwnerId]
  }

  handleViewEventButton(randomEventId) {
    if (this.props.currentUser !== {}) {
      return (
        <Link to={`/events/${randomEventId}`}>
          <button className='home-page-button-event'>View Full Event</button>
        </Link>
      )
    } else if (this.props.currentUser === {}) {
      return (
        <Link to={'/login'}>
          <button className='home-page-button-event'>View Full Event</button>
        </Link>
      )
    }
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

    const handleViewEventButton = this.handleViewEventButton(randomEvent._id);
 
    return (
      <div className='home-page-container'>
        <div className='trending-recipes'>
          <div className='home-page-header-recipe'>
            <h1>Trending Recipes</h1>
            <Link to={`/recipes/${randomRecipe._id}`}>
              <button className='home-page-button-recipe'>View Full Recipe</button>
            </Link>
            <hr></hr>
          </div>

          <div className='home-page-middle-container'>
            <h1 className='recipe-name'>{randomRecipe.name}</h1>
            <img src={randomRecipe.photoUrl} className='home-page-recipe-images'></img>
          </div>

          <div className='home-page-recipe-bottom-container'>
            <div className='home-page-recipe-bottom-author'>
              <img src={fetchUserInfoForRecipe.photoUrl} className='home-page-author-image'></img>
              <h1>{fetchUserInfoForRecipe.handle}</h1>
            </div>
            <div className='home-page-recipe-bottom-description'>
              <p>"{randomRecipe.story}"</p>
            </div>
          </div>
        </div>

        <div className='trending-events'>
          <div className='home-page-header-recipe'>
            <h1>Upcoming Events</h1>
            <Link to={`/events/${randomEvent._id}`}>
              <button className='home-page-button-recipe'>View Full Event</button>
            </Link>
            <hr></hr>
          </div>
            < HomePageEventContainer event={randomEvent}/>
        </div>
      </div>
    );
  }
}

export default Trending;