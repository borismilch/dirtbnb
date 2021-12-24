const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  img: { type: String, required: true },

  title: { type: String, required: true }
})

module.exports = mongoose.model('Live', schema)