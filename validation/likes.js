const validText = require('./valid-text');
const Validator = require('validator');

module.exports = function validateLikeInput(data) {
  let errors = {};

  // CHECK IF DATA IS A VALID STRING_DECODER
  data.authorId = validText(data.authorId) ? data.authorId : '';
  data.recipeId = validText(data.recipeId) ? data.recipeId : '';

  // CHECK IF THE DATA IS EMPTY

  if (Validator.isEmpty(data.authorId)) {
    errors.authorId = 'Author Id is required'
  }

  if (Validator.isEmpty(data.recipeId)) {
    errors.recipeId = 'Recipe Id is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}