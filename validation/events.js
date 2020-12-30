const validText = require('./valid-text');
const Validator = require('validator');

module.exports = function validateEventInput(data) {
  let errors = {};

  // CHECK IF DATA IS A VALID STRING
  data.hostId = validText(data.hostId) ? data.hostId : '';
  data.location = validText(data.location) ? data.location : '';
  data.description = validText(data.description) ? data.description : '';
  data.date = validText(data.date) ? data.date : '';
  data.startTime = validText(data.startTime) ? data.startTime : '';
  data.endTime = validText(data.endTime) ? data.endTime : '';

  // CHECK IF THE DATA IS EMPTY

  if (Validator.isEmpty(data.hostId)) {
    errors.hostId = 'Host Id is required'
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location is required'
  }
  
  if (Validator.isEmpty(data.description)) {
    errors.description = ' is required'
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = 'Date is required'
  }

  if (Validator.isEmpty(data.startTime)) {
    errors.startTime = 'Start Time is required'
  }

  if (Validator.isEmpty(data.endTime)) {
    errors.endTime = 'End Time is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}