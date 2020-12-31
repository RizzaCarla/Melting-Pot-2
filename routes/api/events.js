const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const validateEventInput = require('../../validation/events');
const Event = require('../../models/Event');

//RETRIEVE ALL EVENTS
router.get('/', (req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ eventsNotFound: 'No Events found'}))
})

//CREATE A NEW EVENT
router.post('/new', (req, res) => {
  const { errors, isValid } = validateEventInput(req.body)
  const newEvent = new Event({
    hostId: req.body.hostId,
    location: req.body.location,
    description: req.body.description,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    photoUrl: req.body.photoUrl
  })

  if (!isValid) {
    return res.status(400).json(errors);
  }

  newEvent.save()
    .then(event => res.json(event))
})

//RETRIEVE ONE EVENT BY ID
router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ eventsNotFound: 'Event with that ID does not exist'}))
})

router.patch('/edit/:id', (req, res) => {
  mongoose.set('useFindAndModify', false)
  const { errors, isValid } = validateEventInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(event => res.json(event))
})

router.delete('/:id', (req, res) => {
  Event.findOneAndDelete(req.params.id)
    .then(event => res.json('Event successfully deleted'))
    .catch(err => res.status(404).json('Event was not successfully deleted'))
})

module.exports = router;