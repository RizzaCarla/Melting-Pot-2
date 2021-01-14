import React from 'react'
import { Link } from 'react-router-dom';
import './trending.css';

class Trending extends React.Component {

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
    // if (handleViewEventButton === undefined) {
    //   return null
    // }

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
            <img src={fetchUserInfoForRecipe.photoUrl} className='home-page-author-image'></img>
            <div className='home-page-recipe-bottom-description'>
              <h1>{fetchUserInfoForRecipe.handle}</h1>
              <p>"{randomRecipe.story}"</p>
            </div>
          </div>
        </div>

        <div className='trending-events'>
          <div className='home-page-header-event'>
            <h1>Trending Event</h1>
            <div>{handleViewEventButton}</div>
            <hr></hr>
          </div>

          <div className='home-page-event-details-box'>
            <img src={randomEvent.photoUrl} className="home-page-event-images"></img>
            <div className='home-page-event-details'>
              <h1 className='home-page-event-name'>{randomEvent.name}</h1>
              {/* <div className="date-index"> Date:&nbsp;<span id="event-index-info">{Object.values(event.date).slice(0, 10)}</span></div>  */}
              <h1>Date:&nbsp;<span id="event-info">{randomEvent.date.slice(0, 10)}</span></h1>
              <h1>Start Time:&nbsp;<span id="event-info">{randomEvent.startTime}</span></h1>
              <h1>End Time:&nbsp;<span id="event-info">{randomEvent.endTime}</span></h1>
              <h1># of Participants:&nbsp;<span id="event-info">{randomEvent.usersJoined.length}</span></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;