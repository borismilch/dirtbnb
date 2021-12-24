const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')

const initializePassport = (passport, getUserByEmail, getUserById)  => {

  const authenteficateUser = async (email, password, done) => {
    const user = await getUserByEmail(email)

    if (user === null) {
      return done(null, false, {message: 'No user founded with email'})
    }
  
    try {
      if (bcrypt.compare(password, user.password  )) {
        return done(null, user)
      } else { return done (null, false, { message: 'Wrong password' }) }
    } catch (e) { done(e) }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenteficateUser))
  passport.serializeUser((user, done) => done(null, user._id))
  passport.deserializeUser((user, done) => {
    done(null, getUserById(user._id))
  })
}

module.exports = initializePassport