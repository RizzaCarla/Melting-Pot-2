const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  hostId: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: false
  }
})

module.exports = Event = mongoose.model('Event', EventSchema);