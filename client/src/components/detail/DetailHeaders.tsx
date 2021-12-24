import React from 'react'
import { IHost } from '../../models/models'

import { StarIcon } from '@heroicons/react/solid'

import { ShareIcon, HeartIcon } from '@heroicons/react/outline'

const DetailHeaders: React.FC<{host: IHost}> = ({host}) => {

  return (
    <div className='flex flex-col py-2 mt-16 w-full '>
      <h1 className='text-2xl font-semibold text-[#212121]'>Вілла {host.title} from  {host.username}</h1>

      <div className='flex items-center justify-between'>

        <div className='flex items-center gap-2'>
          <StarIcon className='text-yellow-400 h-5' />

          <span className='text-sm text-[#212121] font-semibold'>5,00</span>

          { host.coments && ( <p className='text-sm font-bold underline'>{host.coments.length} comments</p> ) }

          <p className='text-gray-800 underline font-semibold'>{host.location}</p>
        </div>

          <div className='flex items-center'>

            <button className='flex gap-2 items-center  p-2 hover:bg-gray-50 transition-all duration-200'>
              <ShareIcon className='h-4' />
              <span className='text-[#212121] underline font-semibold'>Поділитись</span>
            </button>

            <button className='flex gap-2 items-center p-2 hover:bg-gray-50 transition-all duration-200'>
              <HeartIcon className='h-4' />
              <span className='text-[#212121] underline font-semibold'>Зберегти</span>
            </button>


          </div>

      </div>
    </div>
  )
}

export default DetailHeaders
