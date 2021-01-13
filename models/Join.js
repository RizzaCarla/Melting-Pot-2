const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JoinSchema = new Schema({
    joinerId: {
        type: String,
        required: true
    },
    eventId: {
        type: String,
        required: true
    }
})

module.exports = Join = mongoose.model('Join', JoinSchema);