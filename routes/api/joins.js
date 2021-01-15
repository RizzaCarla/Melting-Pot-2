const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const validateJoinInput = require('../../validation/joins');
const Join = require('../../models/Join');


//RETRIEVE ALL JOINS
router.get('/', (req, res) => {
    Join.find()
        .then(joins => res.json(joins))
        .catch(err => res.status(404).json({ joinsNotFound: 'No Joins found' }))
})


//CREATE JOIN
router.post('/new', (req, res) => {
    const { errors, isValid } = validateJoinInput(req.body)

    if (!isValid) {
        return res.status(404).json(errors);
    }

    const newJoin = new Join({
        joinerId: req.body.joinerId,
        eventId: req.body.eventId
    })

    newJoin.save()
        .then(join => res.json(join))
})

//RETRIEVE ONE JOIN BY ID
router.get('/:id', (req, res) => {
    Join.findById(req.params.id)
        .then(join => res.json(join))
        .catch(err => res.status(404).json({ joinNotFound: 'Join with that ID does not exist' }))
})

//EDIT JOINS
router.patch('/edit/:id', (req, res) => {
    mongoose.set('useFindAndModify', false);
    const { errors, isValid } = validateJoinInput(req.body)

    if (!isValid) {
        return res.status(404).json(errors);
    }

    Join.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(join => res.json(join))
})

//DELETE JOIN
router.delete('/:id', (req, res) => {
    Join.findByIdAndDelete(req.params.id)
        .then(join => res.json('Join successfully deleted'))
        .catch(err => res.status(404).json('Join was not successfully deleted'))
})


//RETRIEVE JOINS OF ONE EVENT
router.get('/events/:eventId' , (req,res) => {
    Join.find({"eventId": req.params.eventId})
    .then(joins => {res.json(joins)})
    .catch(err => res.status(404).json({ eventJoinsNotFound: 'This event does not have any participants joining' }))
})

//RETRIEVE JOINS OF ONE USER
router.get('/joiner/:joinerId', (req, res) => {
    Join.find({ "joinerId": req.params.joinerId })
        .then(joins => res.json(joins))
        .catch(err => res.status(404).json({ userJoinsNotFound: 'This user had not joined any events' }))
})



module.exports = router;