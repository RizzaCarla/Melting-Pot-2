import { connect } from 'react-redux';
import { getRecipe, updateRecipe, deleteRecipe } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {
    return({
        recipeId: ownProps.recipeId,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        getRecipe: (recipeId) => dispatch(getRecipe(recipeId)),
        updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
        deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);