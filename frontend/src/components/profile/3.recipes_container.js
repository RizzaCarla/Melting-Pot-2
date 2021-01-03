import { connect } from 'react-redux'
import { getUserRecipes, getRecipes, clearRecipes } from '../../actions/recipe_actions'
import Recipes from './3.recipes'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        recipes: state.entities.recipes,
        recipesPosted: state.entities.users.recipesPosted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserRecipes: ((userId) => dispatch(getUserRecipes(userId))),
        clearRecipes: (()=> dispatch(clearRecipes()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);