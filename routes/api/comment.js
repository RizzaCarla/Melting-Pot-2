const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const validateCommentInput = require('../../validation/comments');
const Comment = require('../../models/Comment');

// RETRIEVE ALL COMMENTS
router.get('/', (req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ commentsNotFound: "No comments found"}))
})

// CREATE NEW COMMENT
router.post('/new', (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body)
  const newComment = new Comment({
    authorId: req.body.authorId,
    recipeId: req.body.recipeId,
    body: req.body.body
  })
  
  if (!isValid) {
    return res.status(400).json(errors)
  }
  
  newComment.save()
  .then(comment => res.json(comment))
})

// RETRIEVE COMMENTS BY RECIPEID
router.get('/:recipeId', (req, res) => {
  Comment.find({ "recipeId": req.params.recipeId })
    .then(comments => {res.json(comments)})
    .catch(err => res.status(404).json({ recipesCommentsNotFound: 'This recipe has no comments' }));
})

// RETRIEVE ONE COMMENT
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(404).json({ commentNotFound: "No comment found"}))
})

// UPDATE COMMENT
router.patch('/edit/:id', (req, res) => {
  mongoose.set('useFindAndModify', false)
  const { errors, isValid } = validateCommentInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(comment => res.json(comment))
})

// DELETE COMMENT
router.delete('/:id', (req, res) => {
  Comment.findOneAndDelete(req.params.id)
    .then(comment => res.json('Comment successfully deleted'))
    .catch(err => res.status(404).json("Comment was not successfully deleted"))
})

module.exports = router;