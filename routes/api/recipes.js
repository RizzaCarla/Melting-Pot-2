const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

router.get(
  '/', 
  (req, res) => {
    Recipe.find()
      .then(recipes => res.json(recipes))
      .catch(err => res.status(404).json({ noRecipesFound: 'No recipes found.'}))
})

router.get(
  '/:id',
  (req, res) => {
    Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json({ recipeNotFound: 'Recipe with that ID does not exist'}));
});