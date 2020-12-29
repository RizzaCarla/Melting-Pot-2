const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  authorId: {
    type: Number,
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
    type: Array,
    required: true
  },
  category: {
    type: Array,
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