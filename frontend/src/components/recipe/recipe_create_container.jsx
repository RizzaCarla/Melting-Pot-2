import { connect } from 'react-redux';
import { createRecipe } from '../../actions/recipe_actions';
import { withRouter } from 'react-router';
import RecipeForm from "./recipe_form";

const mapStateToProps = (state) => {
    return({
        currentUser: state.session.currentUser.user,
        ingredients: [],
        instructions: [],
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createRecipe: (recipe) => dispatch(createRecipe(recipe)),
        
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
