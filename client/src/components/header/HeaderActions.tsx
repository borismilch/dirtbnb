import React from 'react'
import { GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid'

const HeaderActions = () => {
  return (
    <div className='flex items-center gap-4 justify-end text-gray-500'>
      <h1 className='hidden lg:inline cursor-pointer hover:underline'>Become a host</h1>
      <GlobeAltIcon className='h-6 w-6' />

     <div className='flex gap-3 items-center rounded-full border p-2 border-gray-400'>
       <MenuIcon className='h-6 w-6' />
       <UserCircleIcon style={{borderRadius: '50%'}} className='h-6' />
     </div>

    </div>
  )
}

export default HeaderActions
