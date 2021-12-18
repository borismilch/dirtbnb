
import RoomModel from '../models/RoomModel.js'
import LiveModel from '../models/LiveModel.js'
import PlaceModel from '../models/PlaceModel.js'

class RoomController {

  async addAllRoooms (req, res) {
    const { items } = req.body

    console.log(req.body)

    items.forEach(async item => {
      await PlaceModel.create(item)
      console.log(item)
    })

    return res.status(200).json([])
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

} 

export default new RoomController()