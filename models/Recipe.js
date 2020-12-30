const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  authorId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  instructions: {
    type: Array,
    required: true
  },
  comments: {
    type: Array,
    required: false
  },
  cookingTime: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  numLikes: {
    type: Number,
    required: false
  },
  photoUrl: {
    type: String,
    required: false
  }
}, {
    timestamps: true
})

module.exports = Recipe = mongoose.model('Recipe', RecipeSchema)