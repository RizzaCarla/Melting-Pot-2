import { RECEIVE_ALL_RECIPES, RECEIVE_USER_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE , CLEAR_RECIPE} from "../actions/recipe_actions";

const recipeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            let i;
            for (i = 0; i < action.recipes.data.length; i++) {
                newState[action.recipes.data[i]._id] = action.recipes.data[i];
            }
            return newState;
        case RECEIVE_USER_RECIPES:
            let j;
            for (j = 0; j < action.recipes.data.length; j++) {
                newState[action.recipes.data[j]._id] = action.recipes.data[j];
            }
            // newState.user = action.recipes.data;
            return newState;
        case RECEIVE_RECIPE:
            return Object.assign(newState, { [action.recipe.data._id]: action.recipe.data });
        case REMOVE_RECIPE:
            delete newState[action.recipeId];
            return newState;
        case CLEAR_RECIPE:
            return {};
        default:
            return state;
    }
};

export default recipeReducer;