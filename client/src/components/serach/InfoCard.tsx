import React from 'react'
import { IPlace } from '../../models/models'

import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

const InfoCard:React.FC<{place: IPlace}> = ({place}) => {
  return (
    <div className='flex flex-col md:flex-row rounded-2xl shadow hover:shadow-lg first:border-t  transition-all duration-50000 hover:opacity-80 cursor-pointer overflow-hidden'>

      <div className='relative md:h-52 md:w-80 flex-shrink-0'>
        <img src={place.img}  loading='lazy' className='w-full h-full object-cover max-h-[300px]' alt="" />
      </div>

      <div className='flex flex-col flex-grow  pl-5'>
        <div className='flex justify-between items-center flex-grow'>

          <div className='flex flex-col truncate'>

            <p className='font-semibold pt-4 md:pt-0 truncate'>{place.title}</p>

            <h4 className='text-xl font-semibold md:mt-3 md:mb-5 truncate'>{place.location}</h4>

            <p className='pt-2 text-xs text-gray-500 flex-grow truncate'>{place.description}</p>

          </div>

          <HeartIcon className='h-8 mr-4 rounded-full cursor-pointer -mt-4 p-1 hover:bg-gray-100 transition-all duration-200' />
        </div>

        <div className='flex justify-between items-end p-4 pl-0'>
          <div className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            <p className='text-xs font-semibold'>{place.star}</p>
          </div>

          <div className='text-right' >
            <p className='font-semibold'> {place.price}</p>
            <p className='text-xs font-light'>{place.total}</p>
          </div>
        </div>

      </div>
      
     
    </div>
  )
}

export default InfoCard
