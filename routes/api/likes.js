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

module.exports = router;