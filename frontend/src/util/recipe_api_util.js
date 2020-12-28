import axios from 'axios';

export const getRecipes = () => {
    return axios.get(`/api/recipes`)
};

export const getUserRecipes = userId => {
    return axios.get(`/api/recipes/user/${userId}`)
}; 

export const getRecipe = recipeId => {
    return axios.get(`/api/recipes/${recipeId}`)
}; // this id refers to the recipes 

export const createRecipe = (recipe) => {
    return axios.post(`/api/recipes`, recipe)
};

export const updateRecipe = (recipe) => {
    return axios.patch(`/api/recipes/${recipe.id}`, recipe)
};

export const deleteRecipe = (id) => {
    return axios.delete(`/api/recipes/${id}`)
};