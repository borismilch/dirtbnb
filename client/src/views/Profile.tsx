import React, { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/footer/Footer'

import ProfileSidebar from '../components/profile/ProfileSidebar'

import ProfileGreeting from '../components/profile/ProfileGreeting'

import UserGreet from '../components/profile/UserGreet'

import axios from 'axios'

import { createContext } from 'react'
import ChangeProfile from '../components/profile/ChangeProfile'
import { ExtendedUser } from '../models/models'

import { useContext } from 'react'
import { IStore, StoreContext } from '../App'

export const ProfileContext = createContext<{changeChanging: (val: boolean) => void, loading:boolean, changing: boolean, changeProfile: (user: ExtendedUser) => Promise<void> }>({} as any)

const Profile = () => {

  const { auth } = useContext<IStore>(StoreContext)

  const [changing, setChanging] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const changeChanging = (val: boolean) => {
    setChanging(val)
    console.log(val, changing)

  }

  const changeProfile = async (user: ExtendedUser) => {
    setLoading(true)

    const newUser = await axios.post('http://localhost:5000/api/changeuser', {user})
    console.log(user, newUser.data, 'newUser')

    setLoading(false)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='h-[110px]' />

      <ProfileContext.Provider value={{changeChanging, changeProfile, changing, loading}}>
        <main  className='flex w-full flex-col xl:flex-row mx-auto max-w-[638px] xl:max-w-[1030px] py-6 flex-grow'>
          
          <div className=' flex-flex-col' style={{flex: '1 1 35%'}}>
              <ProfileSidebar user={auth.user!} isMine={true} />
          </div>

          <div className='flex flex-col ml-[20px]' style={{flex: '1 1 65%'}}>

            <div className='hidden xl:flex flex-col'>

              <UserGreet />

             { changing ? <ChangeProfile /> : <ProfileGreeting /> }

            </div>
          
          </div>

        </main>
      </ProfileContext.Provider>
   
      <Footer />

    </div>
  )
}

export default Profile
