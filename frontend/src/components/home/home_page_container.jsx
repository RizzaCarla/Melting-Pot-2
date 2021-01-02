import { connect } from 'react-redux';
import { getRecipe, getRecipes } from '../../actions/recipe_actions';
import { getEvent, getEvents } from '../../actions/event_actions';
import HomePage from './home_page';
// import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return ({
    recipes: state.entities.recipes,
    events: state.entities.events
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getRecipes: () => dispatch(getRecipes()),
    getRecipe: (recipeId) => dispatch(getRecipe(recipeId)),
    getEvents: () => dispatch(getEvents()),
    getEvent: (eventId) => dispatch(getEvent(eventId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);