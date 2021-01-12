import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getRecipes, getRecipe, getUserRecipes, updateRecipe, deleteRecipe } from '../../actions/recipe_actions';
import { fetchUsers } from "../../actions/user_actions";
import { getAllLikes, getRecipeLikes, createLike, deleteLike, clearLikes } from "../../actions/like_actions"
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {
    const recipe = state.entities.recipes[ownProps.match.params.recipeId]
    return({
        currentUser: state.session.currentUser,
        recipe: recipe,
        authors: state.entities.users,
        recipeId: ownProps.match.params.recipeId,
        likes: Object.keys(state.entities.likes)
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        getRecipes: () => dispatch(getRecipes()),
        getRecipe: (recipeId) => dispatch(getRecipe(recipeId)),
        getUserRecipes: (authorId) => dispatch(getUserRecipes(authorId)),
        updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
        deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId)),
        fetchUsers: () => dispatch(fetchUsers()),
        getRecipeLikes: (recipeId) => dispatch(getRecipeLikes(recipeId)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        getAllLikes: () => dispatch(getAllLikes()),
        clearLikes: () => dispatch(clearLikes())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeShow));