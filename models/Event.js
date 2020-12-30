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
    tyep: String,
    required: true
  }
})