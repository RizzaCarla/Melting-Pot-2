const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');
const User = require("../../models/User");
// const { ObjectId } = require('mongodb');

//MAKE SURE TO HAVE REGULAR ROUTES ABOVE ROUTES WITH WILDCARDS OTHER WISE YOU GET THIS BUG: UnhandledPromiseRejectionWarning: CastError: Cast to ObjectId failed for value

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


// router.put('/edit/:id', (req, res) => {
//     // Recipe.findByIdAndUpdate(req.body.id)
//     Recipe.update({ _id: req.params.id }, req.body)
//     .then(recipe => {
      // recipe.authorId = req.body.authorId,
      // recipe.name = req.body.name,
      // recipe.story = req.body.story,
      // recipe.ingredients = req.body.ingredients,
      // recipe.instructions = req.body.instructions,
      // recipe.comments = req.body.comments,
      // recipe.cookingTime = req.body.cookingTime,
      // recipe.difficulty = req.body.difficulty,
      // recipe.category = req.body.category,
      // recipe.numLikes = req.body.numLikes,
      // recipe.photoUrl = req.body.photoUrl
      
      // recipe.save()
      // .then((recipe) => {
        // if (recipe) {
    //       return res.json(recipe)
    //     } else {
    //       return res.status(400).json('Recipe was not successfully updated')
    //     }
    //   })
    // })
  // })

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

module.exports = router;