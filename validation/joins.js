const validText = require('./valid-text');
const Validator = require('validator');

module.exports = function validateJoinInput(data) {
    let errors = {};

    // CHECK IF DATA IS A VALID STRING_DECODER
    data.joinerId = validText(data.joinerId) ? data.joinerId : '';
    data.eventId = validText(data.eventId) ? data.eventId : '';

    // CHECK IF THE DATA IS EMPTY

    if (Validator.isEmpty(data.joinerId)) {
        errors.joinerId = 'Host Id is required'
    }

    if (Validator.isEmpty(data.eventId)) {
        errors.eventId = 'Event Id is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
