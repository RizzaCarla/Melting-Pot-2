import { connect } from 'react-redux'
import Vegetables from './2.vegetables'
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

export default connect(mapStateToProps, mapDispatchToProps)(Vegetables);