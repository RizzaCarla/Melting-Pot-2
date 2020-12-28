import * as RecipeApiUtil from "../util/recipe_api_util";

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_USER_RECIPES = "RECEIVE_USER_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

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
    return({
        type: REMOVE_RECIPE,
        recipeId
    })
}

