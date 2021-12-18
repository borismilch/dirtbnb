import express from 'express'
import mongoose from 'mongoose'
import env from 'dotenv'

import cors from 'cors'

import RoomRouter from './routers/housesRouter.js'

env.config()

const PORT = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))

app.use('/api', RoomRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    app.listen(PORT,  () => console.log('server on port' + PORT))

  } catch (e) { console.log(e) }
}

start()