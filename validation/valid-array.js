const validText = require('./valid-text')

const validArray = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (validText(array[i]) === false) {
        return false
      }
    }
    return true
  }
}

module.exports = validArray;