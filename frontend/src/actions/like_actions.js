import * as LikeApiUtil from "../util/likes_api_utils";

export const RECEIVE_RECIPE_LIKES = "RECEIVE_RECIPE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

// Regular action creators

export const receiveRecipeLikes = (likes) => {
    return({
        type: RECEIVE_RECIPE_LIKES,
        likes
    });
};

export const receiveLike = (like) => {
    return({
        type: RECEIVE_LIKE,
        like
    });
};

export const removeLike = (likeId) => {
    return({
        type: REMOVE_LIKE,
        likeId
    });
};

// Thunk action creators

export const getRecipeLikes = (recipeId) => dispatch => {
    return LikeApiUtil.getRecipeLikes(recipeId)
        .then(likes => dispatch(receiveRecipeLikes(likes)))
        .catch((err) => console.log(err))
};

export const createLike = (like) => dispatch => {
    return LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
        .catch((err) => console.log(err))
};

export const deleteLike = (likeId) => dispatch => {
    return LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
        .catch((err) => console.log(err))
};