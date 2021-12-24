import React from 'react'

import { MinusIcon, PlusIcon } from '@heroicons/react/solid'

import { useContext } from 'react'
import { addHostContext } from '../../../views/AddHost'
import { IAddHostContext } from '../../../models/models'

const Counter:React.FC<{title: string, field: string}> = ({title, field}) => {

  const {setFacilities, facilities} = useContext<IAddHostContext>(addHostContext)

  const changeAddHandler = () => {
    setFacilities({...facilities, [field]: facilities[field] + 1  })
  }

  const changeDecrementHandler = () => {
    setFacilities({...facilities, [field]: facilities[field] - 1  })
  }

  return (
    <div className='flex items-center  border-gray-300 w-full max-w-lg justify-between p-4'>
      <h1 className='text-3xl'>{title}</h1>

      <div className='flex items-center w-[100px] justify-between'>

        <button disabled={!facilities[field]} onClick={changeDecrementHandler.bind(null)} className='counterButton'>
          <MinusIcon className='h-4' />
        </button>

          <span className='text-[#212121]'>{facilities[field]}</span>

        <button onClick={changeAddHandler.bind(null)} className='counterButton'>
          <PlusIcon className='h-4' />
        </button>

      </div>

    </div>
  )
}

export default Counter
