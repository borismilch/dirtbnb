import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { IHome } from '../../../models/models'
import MediumCardComponent from './MediumCard'

const MediumCardList = () => {
  const [rooms, setRooms] = useState<IHome[]>([])

  const getItems = async () => {

    const lives = await axios.get('http://localhost:5000/api/lives')

    setRooms(lives.data)

    console.log(lives.data)

  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <h1 className='text-4xl font-semibold pb-5'>  Live Anywhere</h1>

      <div className='flex gap-6 overflow-x-scroll scrollbar-none'>
          {
            rooms.map(room => (
              <MediumCardComponent key={room._id} room={room} />
            ))
          }
      </div>

    </>
  )
}

export default MediumCardList
