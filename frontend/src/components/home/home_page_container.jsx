import { connect } from 'react-redux';
import { getRecipe } from '../../actions/recipe_actions';
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
  })
}

export default connect(mapStateToProps)(mapDispatchToProps)(HomePage);