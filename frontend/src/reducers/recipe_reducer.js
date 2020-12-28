import { RECEIVE_ALL_RECIPES, RECEIVE_USER_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE } from "../actions/recipe_actions";

const recipeReducer = (
    state = { all: {}, user: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            newState.all = action.recipes.data;
            return newState;
        case RECEIVE_USER_RECIPES:
            newState.user = action.recipes.data;
            return newState;
        case RECEIVE_RECIPE:
            newState.new = action.recipe.data;
            return newState;
        case REMOVE_RECIPE:
            delete newState.user[action.recipeId];
            return newState;
        default:
            return state;
    }
};

export default recipeReducer;