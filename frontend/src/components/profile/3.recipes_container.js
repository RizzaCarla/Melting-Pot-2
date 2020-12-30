import { connect } from 'react-redux'
import { getUserRecipes } from '../../actions/recipe_actions'
import Recipes from './3.recipes'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        recipes: state.entities.recipes

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserRecipes: ((userId) => dispatch(getUserRecipes(userId)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);