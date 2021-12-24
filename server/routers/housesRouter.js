
const { Router } = require('express')
const  RoomControll = require('../controllers/RoomControll.js')

const router = Router()

router.post('/add', RoomControll.addHost)

router.get('/rooms', RoomControll.getRooms)

router.get('/lives', RoomControll.getLives)

router.get('/places', RoomControll.getPlaces)

router.get('/place/:id', RoomControll.getSingleItem)

router.get('/users/:id', RoomControll.getSingelUser)

module.exports = router
