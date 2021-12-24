import React from 'react'

import { useContext } from 'react'
import { addHostContext } from '../../views/AddHost'


const CreateHeader = () => {

  const {stage} = useContext(addHostContext)

  return (
    <div className='w-full absolute  top-[15px] lg:top-[30px] z-50 flex justify-center gap-4'>

      <button className={stage === 1 ? 'add_header_button' : 'add_header_button--white'}>Ask superHost</button>

      <button className={( stage === 1 ? 'add_header_button' : 'add_header_button--white' )}>Довідка</button>

      <button className={( stage === 1 ? 'add_header_button' : 'add_header_button--white' )}>Save and Exit</button>
    </div>
  )
}

export default CreateHeader
