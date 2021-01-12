import { RECEIVE_ALL_LIKES, RECEIVE_RECIPE_LIKES, RECEIVE_LIKE, REMOVE_LIKE, CLEAR_LIKES } from "../actions/like_actions";

const likeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            let j;
            for (j = 0; j < action.likes.data.length; j++) {
                newState[action.likes.data[j]._id] = action.likes.data[j];
            }
            return newState;
        case RECEIVE_RECIPE_LIKES:
            let i;
            for(i = 0; i < action.likes.data.length; i++) {
                newState[action.likes.data[i]._id] = action.likes.data[i];
            }
            return newState;
        case RECEIVE_LIKE:
            return Object.assign(newState, { [action.like.data._id]: action.like.data });
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        case CLEAR_LIKES:
            return {};
        default:
            return state;
    }
}

export default likeReducer;