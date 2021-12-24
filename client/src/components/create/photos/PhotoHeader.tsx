import React from 'react'

import { UploadIcon } from '@heroicons/react/outline'

const PhotoHeader = () => {
  return (
    <div className='w-full flex justify-between '>
      <h1 className=' text-3xl text-[#212121]'>Додайте щонайменше 5 фотографій</h1>

      <button className='flex gap-2 p-1 items-center border-[#212121] rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-200 '>
        <UploadIcon className='h-4 ' />
        <span className='text-sm'>Завантажити</span>
      </button>
    </div>
  )
}

export default PhotoHeader
