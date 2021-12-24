import React, { ChangeEvent } from 'react'
import '../facilyties/appear.css'

import { useContext } from 'react'

import { addHostContext } from '../../../views/AddHost'

const AddSubscriptionForm = () => {

  const { hostSub, setHostSub } = useContext(addHostContext)

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHostSub(e.target.value)
  }

  return (
    <div className='h-screen flex items-center justify-center appear'>

      <div className='flex flex-col gap-2 max-w-lg w-full'>
        <h3 className='font-semibold mb-3 text-2xl'>Придумайте опис</h3>

        <textarea placeholder='Це прекрасна оселя...'  value={hostSub} onChange={changeHandler} className='border border-gray-400 p-4 rounded-md text-[#212121] text-xl placeholder-gray-400 cursor-pointer' rows={4} />

        <span className='text-sm text-gray-700 font-semibold'> {hostSub.length}/500 </span>
      </div>
     
    </div>
  )
}

export default AddSubscriptionForm
