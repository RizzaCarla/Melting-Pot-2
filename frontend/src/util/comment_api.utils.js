import axios from 'axios';

export const getComments = () => {
    return axios.get(`/api/comments`)
};

export const getRecipeComments = recipeId => {
    return axios.get(`/api/recipes/${recipeId}`)
};

export const createComment = (comment) => {
    return axios.post(`/api/comments/new`, comment)
};

export const updateComment = (comment) => {
    return axios.patch(`/api/recipes/edit/${comment._id}`, comment)
};

export const deleteComment = (commentId) => {
    return axios.delete(`/api/comments/${commentId}`)
}
