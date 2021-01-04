import { connect } from 'react-redux';
import { createRecipe, clearErrors } from '../../actions/recipe_actions';
import { withRouter } from 'react-router';
import RecipeForm from "./recipe_form";

const mapStateToProps = (state) => {
    return({
        currentUser: state.session.currentUser.user,
        ingredients: [],
        instructions: [],
        errors: state.errors.recipes
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createRecipe: (recipe) => dispatch(createRecipe(recipe)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
