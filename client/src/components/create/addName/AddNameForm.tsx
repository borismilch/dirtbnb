import React, { ChangeEvent } from 'react'
import '../facilyties/appear.css'

import { useContext } from 'react'

import { addHostContext } from '../../../views/AddHost'

const AddNameForm = () => {

  const { hostName, setHostName } = useContext(addHostContext)

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHostName(e.target.value)
  }

  return (
    <div className='h-screen flex items-center justify-center appear'>

      <div className='flex flex-col gap-2 max-w-lg w-full'>
        <h3 className='font-semibold mb-3 text-2xl'>Придумайте назву</h3>

        <textarea placeholder='Enter name of the host...'  value={hostName} onChange={changeHandler} className='border border-gray-400 p-4 rounded-md text-[#212121] text-3xl placeholder-gray-400 font-semibold  cursor-pointer' rows={5} />

        <span className='text-sm text-gray-700 font-semibold'> {hostName.length}/50 </span>
      </div>
     
    </div>
  )
}

export default AddNameForm
