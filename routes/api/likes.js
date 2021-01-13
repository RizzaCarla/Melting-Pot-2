const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const validateLikeInput = require('../../validation/likes');
const Like = require('../../models/Like');

//CREATE LIKE
router.post('/new', (req, res) => {
  const { errors, isValid } = validateLikeInput(req.body)

  if (!isValid) {
    return res.status(404).json(errors);
  }

  const newLike = new Like ({ 
    likerId: req.body.likerId,
    recipeId: req.body.recipeId
  })

  newLike.save()
    .then(like => res.json(like))
})

//UPDATE LIKES
router.patch('/edit/:id', (req, res) => {
  mongoose.set('useFindAndModify', false);
  const { errors, isValid } = validateLikeInput(req.body)

  if (!isValid) {
    return res.status(404).json(errors);
  }

  Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(like => res.json(like))
})

// RETRIEVE ALL LIKES (Added by Kevin)
router.get('/', (req, res) => {
  Like.find()
    .then(likes => res.json(likes))
    .catch(err => res.status(404).json({ likesNotFound: "No likes found" }))
})

// RETRIEVE LIKES OF ONE RECIPE (Added by Kevin)
router.get(`/recipe/:recipeId`, (req, res) => {
  Like.find({ "recipeId": req.params.recipeId })
    .then(likes => {res.json(likes)})
    .catch(err => res.status(404).json({ recipeLikesNotFound: 'This recipe does not have any likes' }));
})

// DELETE LIKE (Added by Kevin)
router.delete('/:id', (req, res) => {
  Like.findByIdAndDelete(req.params.id)
    .then((like) => res.json("Like successfully deleted"))
    .catch(err => res.status(400).json("Like was not successfully deleted"))
})

module.exports = router;