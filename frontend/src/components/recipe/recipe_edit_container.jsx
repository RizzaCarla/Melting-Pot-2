import { connect } from 'react-redux';
import { getUserRecipes, updateRecipe } from '../../actions/recipe_actions';
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
        updateRecipe: recipe => dispatch(updateRecipe(recipe))
    })
}

export default connect(mapStateToProps, mapDispatchToProp)(RecipeEdit);