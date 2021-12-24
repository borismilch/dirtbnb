const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  img: { type: String, required: true },
  location: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  star: { type:  Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true },
  long: { type: Number, required: true },
  lat: { type: Number, required: true },
  otherImages: [ { type: String } ],
  facilities: { beds: Number, guests: Number, bathrooms: Number  },
  plesures: [ { type: String } ],
  createdAt:  { type: Number, required: true },
  userid: { type: String, required: true },
  username: { type: String, required: true },
  userimg: { type: String, required: true },
  comments: [{  userId: String, username: String, rait: Number, userImg: String, message: String }]

})

module.exports = mongoose.model('Place', schema)