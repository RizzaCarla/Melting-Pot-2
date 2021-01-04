import * as RecipeApiUtil from "../util/recipe_api_util";

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_USER_RECIPES = "RECEIVE_USER_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";
export const CLEAR_RECIPE_ERRORS = "CLEAR_RECIPE_ERRORS";
export const CLEAR_RECIPE = "CLEAR_RECIPE";

// Regular action creators

export const receiveAllRecipes = (recipes) => {
    return ({
        type: RECEIVE_ALL_RECIPES,
        recipes
    });
};

export const receiveUserRecipes = (recipes) => {
    return ({
        type: RECEIVE_USER_RECIPES,
        recipes
    });
};

export const receiveRecipe = (recipe) => {
    return ({
        type: RECEIVE_RECIPE,
        recipe
    });
};

export const removeRecipe = (recipeId) => {
    return ({
        type: REMOVE_RECIPE,
        recipeId
    })
}

export const receiveErrors = errors => ({
    type: RECEIVE_RECIPE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_RECIPE_ERRORS
})

export const clearRecipes = () => ({
    type: CLEAR_RECIPE
})

// Thunk action creators

export const getRecipes = () => dispatch => {
    return RecipeApiUtil.getRecipes()
        .then(recipes => dispatch(receiveAllRecipes(recipes)))
        .catch((err) => console.log(err))
};

export const getUserRecipes = (userId) => dispatch => {
    return RecipeApiUtil.getUserRecipes(userId)
        .then(recipes => dispatch(receiveUserRecipes(recipes)))
        .catch((err) => console.log(err))
};

export const getRecipe = (recipeId) => dispatch => {
    return RecipeApiUtil.getRecipe(recipeId)
        .then(recipe => dispatch(receiveRecipe(recipe)))
        .catch((err) => console.log(err))
};

// export const createRecipe = (recipe) => dispatch => {
//     return RecipeApiUtil.createRecipe(recipe)
//         .then(recipe => dispatch(receiveRecipe(recipe)))
//         .catch((err) => console.log(err))
// };

export const createRecipe = (recipe) => dispatch => {
    return RecipeApiUtil.createRecipe(recipe)
        .then(recipe => dispatch(receiveRecipe(recipe)))
        .catch((err) => dispatch(receiveErrors(err.response.data)))
};

export const updateRecipe = (recipe) => dispatch => {
    return RecipeApiUtil.updateRecipe(recipe)
        .then(recipe => dispatch(receiveRecipe(recipe)))
        .catch((err) => console.log(err))
};

export const deleteRecipe = (recipeId) => dispatch => {
    return RecipeApiUtil.deleteRecipe(recipeId)
        .then(() => dispatch(removeRecipe(recipeId)))
        .catch((err) => console.log(err))
};