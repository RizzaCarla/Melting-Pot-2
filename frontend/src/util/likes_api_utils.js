import axios from 'axios';

export const getRecipeLikes = recipeId => {
    return axios.get(`/api/likes/recipe/${recipeId}`)
}

export const createLike = like => {
    return axios.post(`/api/likes/new`, like)
};

export const deleteLike = (likeId) => {
    return axios.delete(`/api/likes/${likeId}`)
}


