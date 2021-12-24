import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from 'react'

import { useContext } from 'react' 

import { IStore, StoreContext } from '../../App'
import { ProfileContext } from '../../views/Profile'

const ChangeProfile: React.FC= () => {

  const {changeChanging, changeProfile, loading} = useContext(ProfileContext)
  const { auth } = useContext<IStore>(StoreContext)

  const [form, setForm] = useState({ job: '', bio: '', location: '' })

  const changeForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const submitHandler = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    await changeProfile({...auth.user, ...form})
  }

  useEffect(() => {
    const userObj = { job: auth.user?.job || '', bio: auth.user?.bio || '', location: auth.user?.job || ''  }
    setForm(userObj)
  }, [auth.user])

  return (
      
    <div className="bg-white rounded  border-t border-b border-gray-300 p-4 px-0 md:py-8 mb-6">
        <form onSubmit={submitHandler.bind(null)} className="lg:col-span-2">

          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
              <label htmlFor="full_name" className='text-gray-700 font-semibold'>Write about yourself</label>
              <textarea onChange={changeForm} value={form.bio} rows={5} name="bio" id="full_name" className=" border mt-1 p-3 rounded px-4 w-full border-gray-400 focus:border-black outline-none focus:ring-0" />

            </div>

            <div className="md:col-span-5">
              <label htmlFor="email" className='text-gray-700 font-semibold'>Your Job</label>
              <input  onChange={changeForm} type="text" name="job" value={form.job} id="email" className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:border-black outline-none focus:ring-0"  placeholder="email@domain.com" />
            </div>

            <div className="md:col-span-5">
              <label htmlFor='address' className='text-gray-700 font-semibold'>Current Location</label>
              <input  onChange={changeForm} type="text" name="location" value={form.location} id="address" className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:border-black outline-none focus:ring-0"  placeholder="" />
            </div>

            <div className="md:col-span-5 mt-3 flex items-center justify-between">

              <button onClick={() => changeChanging(false)} className='rounded-md p-3 text-red-500 transition-all duration-200 cursor-pointer hover:bg-red-50 font-semibold uppercase '>
                cancel
              </button>

              <div className="inline-flex items-end">
                <button  disabled={loading}  className="blackButton disabled:opacity-50" type='submit'>Change Profile</button>
              </div>
            </div>

          </div>
        </form>
      </div>
     
  )
}

export default ChangeProfile
