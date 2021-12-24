const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  img: { type: String, required: true },
  location: { type: String, required: true },
  distance: { type: String, required: true }
})

module.exports = mongoose.model('Room', schema)