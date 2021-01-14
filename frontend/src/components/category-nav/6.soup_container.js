import { connect } from 'react-redux'
import Soup from './6.soup'
import { getRecipeUsingCategory } from '../../actions/recipe_actions'

const mapStateToProps = (state) => {
  return {
    categoryRecipes: state.entities.categoryRecipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipeUsingCategory: (categoryName) => dispatch(getRecipeUsingCategory(categoryName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Soup);