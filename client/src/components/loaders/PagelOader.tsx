import React from 'react'

const PagelOader = () => {
  return (
    <div className='flex gap-7 flex-col '>
    <div className="flex justify-between flex-1 gap-5 sm:p-2">
      <div className="flex flex-1 flex-col gap-3">
     
        <div className="bg-gray-200 w-full w-max-md animate-pulse h-6 rounded-2xl" />
        <div className="bg-gray-200 w-full w-max-md animate-pulse h-3 rounded-2xl" />

      </div>
      <div className="mt-auto flex gap-3 justify-between">
        <div  className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" />
        
        <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" />
      </div>
    </div>

    <div className='grid grid-cols-4 grid-rows-2 w-full h-[495px] gap-5 rounded-2xl overflow-hidden'>

      <div className='col-span-2 row-span-2  animate-pulse bg-gray-200 animate-pulse w-full h-full ' />

      <div className='animate-pulse bg-gray-200 animate-pulse w-full h-full' />

      <div className='animate-pulse bg-gray-200 animate-pulse w-full h-full' />

      <div className='animate-pulse bg-gray-200 animate-pulse w-full h-full' />

      <div className='animate-pulse bg-gray-200 animate-pulse w-full h-full' />

    </div>

    <div className='flex gap-3'>

      <div className='flex flex-col w-full gap-4'>
        <div className='animate-pulse bg-gray-200  h-3 animate-pulse w-full ' />

        <div className='animate-pulse bg-gray-200  h-3 animate-pulse w-full ' />
      </div>

      <div className="rounded-full mx-4 bg-gray-200 w-[40px] h-[40px]"></div>

    </div>

</div>
  )
}

export default PagelOader
