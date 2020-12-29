const validText = require('./valid-text');
const  Validator = require('validator')

module.exports = function validateRecipeInput(data) {
  let errors = {};

  data.authorId = req.body.authorId,
  data.name = req.body.name ,
  data.story = req.body.story ,
  ingredients = req.body.ingredients ,
  instructions = req.body.instructions ,
  comments = req.body.comments ,
  cookingTime = req.body.cookingTime ,
  difficulty = req.body.difficulty ,
  category = req.body.category ,
  numLikes = req.body.numLikes ,
  photoUrl = req.body.photoUrl 
}
