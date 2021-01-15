import React from 'react'
import CategoryNavBarContainer from '../category-nav/1.navbar_container'
import { Link } from 'react-router-dom';
import './home_page.css';
import HomePageEventButtonContainer from './home_page_event_button_container';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getRecipes();
    this.props.getEvents();
    this.props.fetchUsers();
    // this.handleParticipateButton = this.handleParticipateButton.bind(this)

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


  // handleParticipateButton(e) {
  //     e.preventDefault();
  //     if (!this.props.currentUser.user) {
  //       this.props.openModal('LogIn')
  //     } else {
  //       <div>
  //         {this.props.joinedEvent2 ? <button onClick={this.handleDelete} className="unjoin-button">Unjoin</button> :
  //           this.props.currentUser.user._id === this.props.event.hostId ? <label className="hosting-button"><Link className="hosting-text" to={`/events/${this.props.event._id}`}>Hosting</Link></label> :
  //             <button onClick={this.handleJoin} className="participating-button" >Join</button>}
  //       </div>
  //     }
  // }

  render() {
    
    const randomRecipe = this.handleRandomRecipe();
    if (randomRecipe === undefined) {
      return null
    }
    
    const randomEvent = this.handleRandomEvent();
    if (randomEvent === undefined) {
      return null
    }
    console.log(randomEvent._id)
    
    const fetchUserInfoForRecipe = this.fetchUserInfoForRecipe(randomRecipe.authorId);
    if (fetchUserInfoForRecipe === undefined) {
      return null
    }
    
    return (
      <div className='home-page-container'>
        {/* <CategoryNavBarContainer /> */}
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
            <Link to={`/events/${randomEvent._id}`}>
              <button className='home-page-button-event'>View Full Event</button>
            </Link>
            <hr></hr>
          </div>

         
            < HomePageEventButtonContainer event={randomEvent} />
          

         
        </div>

      </div>
    );
  }
}

export default HomePage;