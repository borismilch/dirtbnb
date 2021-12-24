const UserModel = require('../models/auth/UserModel')

const findByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({email})

    return user
  } catch { return null }
}

const findById = async (id) => {
  try {
    const user = await UserModel.findById(id)

    return user
  } catch { return null }
}

module.exports = {
  findByEmail, findById
}