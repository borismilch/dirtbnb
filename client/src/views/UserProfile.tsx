import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/footer/Footer'

import ProfileSidebar from '../components/profile/ProfileSidebar'

import ProfileGreeting from '../components/profile/ProfileGreeting'

import UserGreet from '../components/profile/UserGreet'

import axios from 'axios'

import { useLocation } from 'react-router-dom'

import { createContext } from 'react'
import { ExtendedUser } from '../models/models'

export const ProfileContext = createContext<{loading:boolean, changing: boolean}>({} as any)

const Profile = () => {
  const [changing, setChanging] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const [user, setUser] = useState<ExtendedUser>({} as ExtendedUser)

  const location = useLocation<{id: string}>()

  const { id } = location.state

  const getUser = async () => {
    const dbUser = (await axios.get('http://localhost:5000/api/users/' + id)).data

    console.log(user, 'UserPage')

    setUser(dbUser)
  }

  useEffect(() => {
    getUser()
  }, [])

  if (user._id) {
      return (
        <p>Loading...</p>
      )
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='h-[110px]' />

      <ProfileContext.Provider value={{changing, loading}}>
        <main  className='flex w-full flex-col xl:flex-row mx-auto max-w-[638px] xl:max-w-[1030px] py-6 flex-grow'>
          
          <div className=' flex-flex-col' style={{flex: '1 1 35%'}}>
              <ProfileSidebar user={user} isMine={false} />
          </div>

          <div className='flex flex-col ml-[20px]' style={{flex: '1 1 65%'}}>

            <div className='hidden xl:flex flex-col'>

              <UserGreet />

             <ProfileGreeting /> 

            </div>
          
          </div>

        </main>
      </ProfileContext.Provider>
   
      <Footer />

    </div>
  )
}

export default Profile
