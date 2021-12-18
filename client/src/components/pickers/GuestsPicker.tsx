import React, { ChangeEvent } from 'react'
import { UserIcon } from '@heroicons/react/solid'

import { useContext } from 'react'
import { Context } from '../../context/SearchContext'
import { SearchContext }  from '../../models/Contexsts'

const GuestsPicker:React.FC = () => {

  const { guests, changeGuests } = useContext<SearchContext>(Context)

  return (
    <div className='border-b mb-4 flex items-center w-full'>
      <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>

      <UserIcon className='h-5 ' />

      <input
        type="number" 
        className='w-12 pl-2 outline-none focus:ringt-0 text-red-500' 
        onChange={changeGuests}
        value={guests}
        min={1}

      />

    </div>
  )
}

export default GuestsPicker
