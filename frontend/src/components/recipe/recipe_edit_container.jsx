import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserRecipes, updateRecipe, deleteRecipe } from '../../actions/recipe_actions';
import RecipeEdit from './recipe_edit';

const mapStateToProps = (state, ownProps) => {
    return({
        currentUser: state.session.currentUser.user,
        recipe: state.entities.recipes[ownProps.match.params.recipeId]
    })
}

const mapDispatchToProp = (dispatch) => {
    return({
        getUserRecipes: (authorId) => dispatch(getUserRecipes(authorId)),
        updateRecipe: recipe => dispatch(updateRecipe(recipe)),
        deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(RecipeEdit));