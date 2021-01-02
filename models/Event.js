const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
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
    type: Date,
    required: false
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
    required: true
  },
  photoId: {
    type: String,
    required: true
  },
  
  usersJoined: [{ type: Schema.Types.ObjectId, ref: 'events', required: false }],
})


module.exports = Event = mongoose.model('Event', EventSchema);