const UserModel = require('../models/auth/UserModel')
const bcrypt = require('bcrypt')

class AuthController {

  async getUsers (req, res) {
    const items = await UserModel.find()

    return res.status(200).json(items)
  }

  async getUser(req, res) {

    const { id } = req.params

    const user = await UserModel.findById(id)
  }

  async checkUser (req, res) {
    const {user} = req.body

    const candidate = await UserModel.findOne({email: user.email})

    if (candidate) {
      return res.json(candidate)
    }

    else {
      const newUser = await UserModel.create(user)

      return res.json(newUser)
    }

  }

  async updateUser (req, res) {
    const { user } = req.body

    console.log(user)

    await UserModel.findOneAndUpdate({email: user.email}, {...user})

    return res.json({user})
    
  }
  

} 

module.exports = new AuthController()