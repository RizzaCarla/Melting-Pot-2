import { connect } from 'react-redux'
import Poultry from './4.poultry'
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

export default connect(mapStateToProps, mapDispatchToProps)(Poultry);