import { connect } from 'react-redux';
import { getRecipe } from '../../actions/recipe_actions';
import { getEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router';
import HomePage from './home_page';

const mapStateToProps = state => {
  return ({
    recipes: state.entities.recipes[ownProps.match.params.recipeId]
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    getRecipes: () => dispatch(getRecipes()),
    getRecipe: (recipeId) => dispatch(getRecipe(recipeId)),
    getEvents: () => dispatch(getEvents()),
    getEvent: (eventId) => dispatch(getEvent(eventId))
  })
}

export default connect(mapStateToProps)(mapDispatchToProps)(HomePage);