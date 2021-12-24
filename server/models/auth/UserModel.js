const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  picture: { type: String, required: true },
  email: String,
  email_verified:Boolean,
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  
  sub: { type: String, required: true },
  
  updated_at: String,
  bio: String,
  job: String,
  location: String,  
  
})

module.exports = mongoose.model('User', schema)