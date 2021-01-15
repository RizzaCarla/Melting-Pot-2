import {
  RECEIVE_ALL_RECIPES_USING_CATEGORY
} from "../actions/recipe_actions";

const categoryRecipeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({});

  switch (action.type) {
    case RECEIVE_ALL_RECIPES_USING_CATEGORY:
      let r;
      for (r = 0; r < action.recipes.data.length; r++) {
        newState[action.recipes.data[r]._id] = action.recipes.data[r];
      }
      return newState;
    default:
      return state;
  }
};

export default categoryRecipeReducer;