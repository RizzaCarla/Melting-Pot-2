const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PhotoSchema = new Schema({
  document_id: {type: Number, default: 0},
  description: {type: String},
  fileLink: {type: String},
  s3_key: {type: String}
},{
  timestamps: true
})

module.exports = Photo = mongoose.model('Photo', PhotoSchema);