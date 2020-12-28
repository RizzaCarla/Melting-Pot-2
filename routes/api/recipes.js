const express = require("express");
const router = express.Router();
const Recipe = require('../../models/Recipe');

//RETRIEVE ALL RECIPES
router.get('/', (req, res) => {
    Recipe.find()
      .then(recipes => res.json(recipes))
      .catch(err => res.status(404).json({ recipesNotFound: 'No recipes found.' }))
})

//RETRIEVE ONE RECIPE BY ID
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
      .then(recipe => res.json(recipe))
      .catch(err => res.status(404).json({ recipeNotFound: 'Recipe with that ID does not exist' }));
});

//RETRIEVE RECIPES OF ONE USER
router.get('user/:userId', (req, res) => {
    Recipe.find({ user: req.params.userId })
      .then(recipes => res.json(recipes))
      .catch(err => res.status(404).json({ userRecipesNotFound: 'This user does not have any recipes'}));
})

router.post('/new'

)

router.patch('/:id'

)

router.delete('/:id'

)