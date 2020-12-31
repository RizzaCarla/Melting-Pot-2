import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getRecipes, getRecipe, getUserRecipes, updateRecipe, deleteRecipe } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {

    return({
        currentUser: state.session.currentUser,
        recipe: state.entities.recipes[ownProps.match.params.recipeId]
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        getRecipes: () => dispatch(getRecipes()),
        getRecipe: (recipeId) => dispatch(getRecipe(recipeId)),
        getUserRecipes: (authorId) => dispatch(getUserRecipes(authorId)),
        updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
        deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);