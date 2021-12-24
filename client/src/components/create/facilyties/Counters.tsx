import React from 'react'

import { useContext } from 'react'
import { IAddHostContext } from '../../../models/models'
import { addHostContext } from '../../../views/AddHost'

import './appear.css'

import Counter from './Counter'

const Counters = () => {

  const { facilities } = useContext<IAddHostContext>(addHostContext)

  return (

    <div className='flex flex-col gap-2 h-screen items-center justify-center appear'>
      {
        Object.keys(facilities).map(key => (
          <Counter key={key} title={ key[0].toUpperCase() + key.slice(1) } field={key} />
        ))
      }
    </div>

  )
}

export default Counters
