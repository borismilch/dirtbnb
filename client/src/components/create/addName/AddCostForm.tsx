import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import React, { ChangeEvent } from 'react'

import { useContext } from 'react';
import { addHostContext } from '../../../views/AddHost';

import '../facilyties/appear.css'

const AddCostForm = () => {

  const { costPerNight, setCostPerNight } = useContext(addHostContext)

  const manipulateCostPreNight = (val: number) => {
    setCostPerNight(prev => prev + val)
  }

  return (
    <div className='h-screen flex items-center justify-center appear'>

      <div className='flex flex-col gap-2 max-w-lg w-full'>

        <h3 className='font-semibold mb-3 text-3xl'>Ціна за ніч</h3>

        <div className='flex items-center gap-4 '>

        <button disabled={costPerNight < 1} onClick={manipulateCostPreNight.bind(null, -1)} className='counterButton'>
          <MinusIcon className='h-4' />
        </button>

        <div className='border flex items-center flex-grow justify-center h-[160px] text-center  border-gray-300 rounded-md text-8xl font-bold ' > { '$' + costPerNight}</div>


        <button disabled={costPerNight > 11000} onClick={manipulateCostPreNight.bind(null, 1)} className='counterButton'>
          <PlusIcon className='h-4' />
        </button>

        </div>


      </div>

    </div>
  )
}

export default AddCostForm
