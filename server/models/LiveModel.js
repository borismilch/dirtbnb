import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  img: { type: String, required: true },

  title: { type: String, required: true }
})

export default mongoose.model('Live', schema)