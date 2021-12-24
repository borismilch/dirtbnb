const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const cookieParser = require('cookie-parser')

env.config()

const cors = require('cors')

const RoomRouter = require('./routers/housesRouter.js')
const authRouter = require('./routers/authRouter')

const passport = require('passport')
const initializePassport = require('./passport/passportConfig.js')

const flash = require('express-flash')
const session = require('express-session')

const { findByEmail, findById } = require('./passport/utils.js')

initializePassport(
  passport,
  findByEmail,
  findById
)

const PORT = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))

app.use(flash())

app.use(session({
  secret: process.env.PASSPORT_SECRET,
  resave: false,
  saveUninitialized: false,

}))



app.use(passport.initialize())
app.use(passport.session({ secret: 'keyboard cat' }))

app.use('/api', RoomRouter)
app.use('/api', authRouter)

app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true 
  })
  
)

app.get('/', (req, res) => {
  return res.json(req.user)
})

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