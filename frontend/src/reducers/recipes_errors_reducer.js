
import { RECEIVE_RECIPE_ERRORS, CLEAR_RECIPE_ERRORS } from '../actions/recipe_actions';

const _nullErrors = [];

const RecipeErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RECIPE_ERRORS:
            return action.errors
        case CLEAR_RECIPE_ERRORS:
            return [];
        default:
            return state
    }
}

export default RecipeErrorsReducer;