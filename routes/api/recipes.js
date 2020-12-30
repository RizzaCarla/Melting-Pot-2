const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require("../../models/User");
const mongoose = require("mongoose");

//RETRIEVE ALL RECIPES
router.get('/', (req, res) => {
  Recipe.find()
  .then(recipes => {
    if (recipes) {
      return res.json(recipes)
    } else {
      return res.status(404).json({ recipesNotFound: 'No recipes found.' })
    }
  })
})

// CREATE NEW RECIPE
router.post('/new', (req, res) => {
  const newRecipe = new Recipe({
    authorId: req.body.authorId,
    name: req.body.name,
    story: req.body.story,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    comments: req.body.comments,
    cookingTime: req.body.cookingTime,
    difficulty: req.body.difficulty,
    category: req.body.category,
    numLikes: req.body.numLikes,
    photoUrl: req.body.photoUrl
  })
  
  newRecipe.save().then(recipe => {
    if (recipe) {
      return res.json(recipe)
    } else {
      return res.status(404).json('Recipe was not successfully created')
    }
  })
});

//RETRIEVE ONE RECIPE BY ID
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
  .then(recipe => {
    if (recipe) {
      return res.json(recipe)
    } else {
      return res.status(404).json({ recipeNotFound: 'Recipe with that ID does not exist' });
    }
  })
});

//RETRIEVE RECIPES OF ONE USER
router.get('user/:userId', (req, res) => {
  Recipe.find({ user: req.params.userId })
  .then(recipes => {
    if (recipes) {
      return res.json(recipes)
    } else {
      return res.status(404).json({ userRecipesNotFound: 'This user does not have any recipes'});
    }
  })
})

//DELETE RECIPE
router.delete('/:id', (req, res) => {
  Recipe.findOneAndDelete(req.params.id)
  .then((recipe) => {
    if (!recipe) {
      return res.json('Recipe successfully deleted')
    } else {
      return res.status(400).json('Recipe was not successfully deleted')
    }
  })
})

//EDIT A RECIPE
router.patch('/edit/:id', (req, res) => {
  mongoose.set('useFindAndModify', false);
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((recipe) => {
    return res.json(recipe)
  })
  .catch(err => res.json(err))
})

module.exports = router;
//MAKE SURE TO HAVE REGULAR ROUTES ABOVE ROUTES WITH WILDCARDS OTHER WISE YOU GET THIS BUG: UnhandledPromiseRejectionWarning: CastError: Cast to ObjectId failed for value