import React from 'react'

import { IStore, StoreContext } from '../../App'

import { StarIcon } from '@heroicons/react/solid'
import { observer } from 'mobx-react-lite'
import YourComments from './YourComments'

import { useContext } from 'react'
import { ProfileContext } from '../../views/Profile'

import { HomeIcon, BriefcaseIcon } from '@heroicons/react/solid'


const ProfileGreeting:React.FC = () => {

  const { auth } = useContext<IStore>(StoreContext)
  const { changing } = useContext(ProfileContext)

  return (
    <div className='flex flex-col gap-2 mb-4'>

      <div  className='flex flex-col gap-6'>

       {!!auth.user?.bio && <div className='flex flex-col'>
            <h3 className='text-xl font-semibold mb-2'>Відомості</h3>

            <span>
              {auth.user.bio}
            </span>
        </div>}

        { !!auth.user?.location && <div className='flex items-center gap-2'>
          <HomeIcon className='h-6' />

          <span>Мешкає у {auth.user.location}</span>

        </div>}

       { !!auth.user?.job && <div className='flex items-center gap-2'>
          <BriefcaseIcon className='h-6' />

          <span>Робота: {auth.user.job}</span>

        </div>}

      </div>

      <div className='flex gap-2 my-2 items-center'>
        <StarIcon className='h-6' />
        <h4 className='text-xl font-bold text-gray-700'>0 відгуків</h4>
      </div>

     { !changing &&  <YourComments />}
      
    </div>
  )
}

export default observer(ProfileGreeting)
