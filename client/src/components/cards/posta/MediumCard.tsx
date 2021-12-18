import React from 'react'
import { IHome } from '../../../models/models'

const MediumCardComponent: React.FC<{room: IHome}> = ({room}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition-all duration-300'>

      <div className='relative h-80 w-80 rounded-xl'>
        <img src={room.img} className='w-full h-full rounded-xl' alt="kkk" />
      </div>

    <h1 className='text-2xl mt-3'>{room.title}</h1>
    </div>
  )
}

export default MediumCardComponent
