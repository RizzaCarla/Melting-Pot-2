import axios from 'axios';

export const getRecipes = () => {
    return axios.get(`/api/recipes`)
};

export const getUserRecipes = id => {
    return axios.get(`/api/recipes/user/${id}`)
};

export const getRecipe = id => {
    return axios.get(`/api/recipes/${id}`)
};

export const createRecipe = (recipe) => {
    return axios.post(`/api/recipes`, recipe)
};

export const updateRecipe = (recipe) => {
    return axios.patch(`/api/recipes`, recipe)
};

export const deleteRecipe = (id) => {
    return axios.delete(`/api/recipes/${id}`)
};