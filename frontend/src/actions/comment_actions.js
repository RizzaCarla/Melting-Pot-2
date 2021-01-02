import * as CommentApiutil from "../util/comment_api.utils";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_RECIPE_COMMENTS = "RECEIVE_RECIPE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

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


