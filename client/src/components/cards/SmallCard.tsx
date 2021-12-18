import React from 'react'
import { IRoom } from '../../models/models'

const SmallCard:React.FC<{room: IRoom}> = ({room}) => {
  return (
    <div className='flex items-center gap-3  cursor-pointer hover:bg-gray-200 transition-all duration-300 rounded-lg hover:scale-105'>

      <div className='relative w-16 h-16'>
        <img src={room.img} alt="ddd" className='w-full h-full rounded-lg' />
      </div>

      <div>
        <h2 className='font-semibold'>{ room.location }</h2>
        <h3 className='text-gray-500 text-sm'>{ room.distance }</h3>
      </div>

    </div>
  )
}

export default SmallCard

