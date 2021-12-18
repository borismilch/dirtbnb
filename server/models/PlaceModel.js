import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  img: { type: String, required: true },
  location: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  star: { type:  String, required: true },
  price: { type: String, required: true },
  total: { type: String, required: true },
  long: { type: String, required: true },
  lat: { type: String, required: true },

})

export default mongoose.model('Place', schema)