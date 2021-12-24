import React from 'react'
import { IHost } from '../../models/models'

import { StarIcon } from '@heroicons/react/solid'

import { useHistory } from 'react-router-dom'

const PopupCard: React.FC<{host: IHost}> = ({host}) => {

  const history = useHistory()

  const pushistory = () => {
    history.push({
      pathname: '/detail/' + host._id,
      state: {
        hostId: host._id,
        id: host._id
      }
    })
  }

  return (
    <div className='flex relative flex-col z-50 max-w-[280px] rounded-xl overflow-hidden shadow-lg'>

      <button className='font-semibold rounded-md  text-xs text-gray-500  uppercase p-1 hover:bg-gray-100 transition-all duration-200 bg-white top-3 left-2 absolute  shadow-xl border'> SUPERHOST</button>

      <img src={host.img} className='max-w-[280px] w-full  object-cover' alt="jjj" />

      <div className='flex flex-col p-3'>  

        <div className='flex items-center gap-1 text-sm'>

          <StarIcon className='text-red-500 h-6' />

          <span className='text-[#212121]'>  {host.star + ''} </span>

          <span className='text-gray-400'>(25)</span>

         </div>

        <span className='text-[#212121] text-sm py-3 max-w-[80%] truncate'> {host.description} </span>

        <div className='text-sm pb-3'>
          <b>{host.price}$</b> / ніч
        </div>

        <button onClick={pushistory.bind(null)} className='text-sm text-gray-400 font-light border border-gray-300 p-2 rounded hover:bg-gray-100 transition-all duration-200  cursor-pointer'>Більше</button>


      </div>

      
    </div>
  )
}

export default PopupCard
