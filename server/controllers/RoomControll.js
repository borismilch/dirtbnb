
const RoomModel = require('../models/RoomModel.js')
const LiveModel = require('../models/LiveModel.js')
const PlaceModel = require('../models/PlaceModel.js')

class RoomController {

  async addHost (req, res) {
    const { host } = req.body

    const newHost = await PlaceModel.create(host)

    return res.status(200).json(newHost)
  }

  async getRooms (req, res) {
    const items = await RoomModel.find()

    return res.status(200).json(items)
  }

  async getLives (req, res) {
    const items = await LiveModel.find()

    return res.status(200).json(items)
  }

  async getPlaces (req, res) {
    const items  = await PlaceModel.find()

    return res.status(200).json(items)
  }

  async getSingleItem (req, res) {
    const { id } = req.params
    const bdItem = await PlaceModel.findById(id)

    console.log(bdItem)

    return res.status(200).json(bdItem)
  }

  async getSingelUser (req,res) {
    const { id } = req.body
  }

} 

module.exports = new RoomController()