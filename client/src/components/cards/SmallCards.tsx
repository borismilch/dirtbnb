import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../http'
import { IRoom } from '../../models/models'

import SmallCard from './SmallCard'

const SmallCards = () => {

  const [rooms, setRooms] = useState<IRoom[]>([])

  const getItems = async () => {
    
    const items = await axios.get(API_URL + '/api/rooms')

    setRooms(items.data)

  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>

      <h1 className='text-4xl font-semibold pb-5'>Explore Nearby</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-10'>
        {rooms.map(room => (
         <SmallCard room={room} key={room._id} />
        ))}
      </div>

      
    </>
  )
}

export default SmallCards
