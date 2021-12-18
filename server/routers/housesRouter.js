
import { Router } from 'express'
import RoomControll from '../controllers/RoomControll.js'

const router = Router()

router.post('/add', RoomControll.addAllRoooms)

router.get('/rooms', RoomControll.getRooms)

router.get('/lives', RoomControll.getLives)

router.get('/places', RoomControll.getPlaces)

export default router
