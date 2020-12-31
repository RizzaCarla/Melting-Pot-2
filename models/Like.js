const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
  likerId: {
    type: String,
    required: true
  },
  recipeId: {
    type: String,
    required: true
  }
})

module.exports = Like = mongoose.model('Like', LikeSchema);