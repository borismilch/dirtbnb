import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  img: { type: String, required: true },
  location: { type: String, required: true },
  distance: { type: String, required: true }
})

export default mongoose.model('Room', schema)