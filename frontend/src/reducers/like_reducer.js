import { RECEIVE_RECIPE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_RECIPE_LIKES:
            let i;
            for(i = 0; i < action.recipes.data.length; i++) {
                newState[action.likes.data[i].likerId] = action.likes.data[i];
            }
            return newState;
        case RECEIVE_LIKE:
            return Object.assign(newState, { [action.like.data._id]: action.recipe.data });
        case REMOVE_RECIPE:
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
}

export default likeReducer;