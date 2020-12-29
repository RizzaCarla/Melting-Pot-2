import { RECEIVE_ALL_RECIPES, RECEIVE_USER_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE } from "../actions/recipe_actions";

const recipeReducer = ( state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            let i;
            for(i = 0; i < action.recipes.data.length; i++) {
                newState[action.recipes.data[i]._id] = action.recipes.data[i];
            }
            return newState;
        case RECEIVE_USER_RECIPES:
            newState.user = action.recipes.data;
            return newState;
        case RECEIVE_RECIPE: 
            return newState;
        case REMOVE_RECIPE:
            delete newState.user[action.recipeId];
            return newState;
        default:
            return state;
    }
};

export default recipeReducer;