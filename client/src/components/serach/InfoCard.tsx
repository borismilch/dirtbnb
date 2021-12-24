import React, { useState } from 'react'
import { IHost } from '../../models/models'

import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

import { useHistory } from 'react-router-dom'

import CardSkeleton from '../loaders/CardSkeleton'

const InfoCard:React.FC<{host: IHost}> = ({host}) => {

  const [loaded, setLoaded] = useState<boolean>(false)

  const history = useHistory()

  const pushHistory = () => {
    history.push({
      pathname: '/detail/' + host._id,
      state: {
        hostId: host._id
      }
    })
  }

  return (
    <>

    {!loaded &&  <CardSkeleton />}
    
    <div className={'cardInfo ' + (!loaded && 'opacity-0 absolute')}>

      <div className='relative md:h-52 md:w-80 flex-shrink-0'>
        <img onLoad={() => setLoaded(true)} onClick={pushHistory.bind(null)} src={host.img}  loading='lazy' className='w-full h-full object-cover max-h-[300px]' alt="" />
      </div>

      <div className='flex flex-col flex-grow  pl-5'>
        <div className='flex justify-between items-center flex-grow'>

          <div className='flex flex-col truncate'>

            <p className='font-semibold pt-4 md:pt-0 truncate'>{host.title}</p>

            <h4 className='text-xl font-semibold md:mt-3 md:mb-5 truncate'>{host.location}</h4>

            <p className='pt-2 text-xs text-gray-500 flex-grow truncate max-w-lg'>{host.description}</p>

          </div>

          <HeartIcon className='h-8 mr-4 rounded-full cursor-pointer absolute top-3 right-2 p-1 hover:bg-gray-100 transition-all duration-200' />
        </div>

        <div className='flex justify-between items-end p-4 pl-0'>
          <div className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            <p className='text-xs font-semibold'>{host.star}</p>
          </div>

          <div className='text-right' >
            <p className='font-bold'> {host.price}$ / Nigth</p>
            <p className='text-xs text-gray-400 '>{host.total}/total</p>
          </div>
        </div>

      </div>
      
     
    </div>

    </>
  )
}

export default InfoCard
