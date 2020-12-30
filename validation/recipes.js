const validText = require('./valid-text');
const validArray = require('./valid-array');
const  Validator = require('validator')

module.exports = function validateRecipeInput(data) {
  let errors = {};

  //VALID TEXT
  data.authorId = validText(data.authorId) ? data.authorId : '';
  data.name = validText(data.name) ? data.name : '';
  data.story = validText(data.story) ? data.story : '';
  cookingTime = validText(data.cookingTime) ? data.cookingTime : '';
  difficulty = validText(data.difficulty) ? data.difficulty : '';
  category = validText(data.category) ? data.category : '';
  numLikes = validText(data.numLikes) ? data.numLikes : '';
  
  photoUrl = validText(data.photoUrl) ? data.photoUrl : '';
  
  //VALID ARRAY
  ingredients = validArray(data.ingredients) ? data.ingredients : '';
  instructions = validArray(data.instructions) ? data.instructions : '';
  comments = validArray(data.comments) ? data.comments : '';


  //CHECK IF THE DATA IS EMPTY
  if (Validator.isEmpty(data.authorId)) {
    errors.authorId = 'Author Id is required'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Recipe name is required'
  }

  if (Validator.isEmpty(data.story)) {
    errors.story = 'Recipe story is required'
  }

  if (Validator.isEmpty(data.ingredients)) {
    errors.ingredients = 'Ingredients are required'
  }

  if (Validator.isEmpty(data.instructions)) {
    errors.instructions = 'Instructions are required'
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
  
  // CHECK IF THE DATA IS 

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
