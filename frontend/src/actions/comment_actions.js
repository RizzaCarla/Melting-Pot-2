import * as CommentApiutil from "../util/comment_api.utils";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_RECIPE_COMMENTS = "RECEIVE_RECIPE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// Regular action creators

export const receiveAllComments = (comments) => {
    return({
        type: RECEIVE_ALL_COMMENTS,
        comments
    });
};

export const receiveRecipeComments = (comments) => {
    return({
        type: RECEIVE_RECIPE_COMMENTS,
        comments
    });
};

export const receiveComment = (comment) => {
    return({
        type: RECEIVE_COMMENT,
        comment
    });
};

export const removeComment = (commentId) => {
    return({
        type: REMOVE_COMMENT,
        commentId
    });
};

// Thunk action reactors

export const getComments = () => dispatch => {
    return CommentApiutil.getComments()
        .then(comments => dispatch(receiveAllComments(comments)))
        .catch((err) => console.log(err))
};

export const getRecipeComments = (recipeId) => dispatch => {
    return CommentApiutil.getRecipeComments(recipeId)
        .then(comments => dispatch(receiveRecipeComments(comments)))
        .catch((err) => console.log(err))
};

export const createComment = (comment) => dispatch => {
    return CommentApiutil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .catch((err) => console.log(err))
};

export const updateComment = (comment) => dispatch => {
    return CommentApiutil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .catch((err) => console.log(err))
};

export const deleteComment = (commentId) => dispatch => {
    return CommentApiutil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
        .catch((err) => console.log(err))
};
