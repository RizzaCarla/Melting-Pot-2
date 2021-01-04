import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_RECIPE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
    CLEAR_COMMENTS
} from "../actions/comment_actions";

const commentReducer = (state = {}, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            let i;
            for(i = 0; i < action.comments.data.length; i++) {
                newState[action.comments.data[i]._id] = action.comments.data[i];
            }
            return newState;
        case RECEIVE_RECIPE_COMMENTS:
            // debugger;
            let j;
            for(j = 0; j < action.comments.data.length; j++) {
                newState[action.comments.data[j]._id] = action.comments.data[j];
            }
            return newState;
        case RECEIVE_COMMENT: 
            return Object.assign(newState, {[action.comment.data._id]: action.comment.data});
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;
        case CLEAR_COMMENTS:
            return {}
        default:
            return state;
    }
};

export default commentReducer;