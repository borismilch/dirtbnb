import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import { useContext } from 'react'
import { IStore, StoreContext } from '../../App'

const HeaderSelect = observer(() => {

  const history = useHistory()

  const { auth } = useContext<IStore>(StoreContext)

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

  const logoutUser =  () => {
     logout()
  }

  const pushHistory = () => {
    history.push('/profile')
  }

  const expermentalLogin = async () => {
    await loginWithRedirect()
    if (isAuthenticated) {
     if( user?.email) { user.email_verified = true }
      auth.setUser(user!)
    }
  }

  useEffect(() => {
    console.log(isAuthenticated, user)

  }, [isLoading])

  if (auth.isUser) return (
    <div className='flex flex-col text-left rounded-2xl py-3 bg-white shadow-2xl'>

    <div onClick={pushHistory.bind(null)} className='dropItem text-gray-600 font-semibold'>
      Profile
    </div>

    <button onClick={logoutUser} className='dropItem text-left  text-gray-600 font-semibold '>
      Logout
    </button>

    <button onClick={() => history.push('/add_host')} className='dropItem text-left mb-3 border-b text-gray-600 font-semibold border-gray-200'>
      Become a host
    </button>

    <div className='dropItem'>
        About us 
      </div>

      <div className='dropItem'>
        Our company 
      </div>

      <div className='dropItem'>
        Aitbnb
      </div>

  </div>
  )

  return (
    <div className='flex flex-col text-left rounded-2xl py-3 bg-white shadow-2xl'>

      <div onClick={expermentalLogin} className='dropItem text-gray-600 font-semibold'>
        Sign up 
      </div>

      <div className='dropItem mb-2 pb-4 border-b border-gray-200'>
        Login
      </div>

      <div className='dropItem'>
        About us 
      </div>

      <div className='dropItem'>
        Our company 
      </div>

      <div className='dropItem'>
        Aitbnb
      </div>

    </div>
  )
})

export default HeaderSelect
