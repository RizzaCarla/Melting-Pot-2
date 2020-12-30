const validText = require('./valid-text');
const  Validator = require('validator')

module.exports = function validateRecipeInput(data) {
  let errors = {};

  //VALID TEXT
  data.authorId = validText(data.authorId) ? data.authorId : '';
  data.name = validText(data.name) ? data.name : '';
  data.story = validText(data.story) ? data.story : '';
  data.cookingTime = validText(data.cookingTime) ? data.cookingTime : '';
  data.difficulty = validText(data.difficulty) ? data.difficulty : '';
  data.category = validText(data.category) ? data.category : '';
  data.numLikes = validText(data.numLikes) ? data.numLikes : '';
  data.photoUrl = validText(data.photoUrl) ? data.photoUrl : '';

  //CHECK IF THE DATA IS EMPTY
  if (data.ingredients.length === 0) {
    errors.ingredients = 'Ingredients are required'
  } else if (data.ingredients.length > 0 && data.ingredients === '') {
    errors.ingredients = 'Invalid input'
  }

  if (data.instructions.length === 0) {
    errors.instructions = 'Instructions are required'
  } else if (data.instructions.length > 0 && data.instructions === '') {
    errors.instructions = 'Invalid input'
  }

  if (Validator.isEmpty(data.authorId)) {
    errors.authorId = 'Author Id is required'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Recipe name is required'
  }

  if (Validator.isEmpty(data.story)) {
    errors.story = 'Recipe story is required'
  }

  if (Validator.isEmpty(data.cookingTime)) {
    errors.cookingTime = 'Cooking Time is required'
  }

  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = 'Difficulty is required'
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category is required'
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
