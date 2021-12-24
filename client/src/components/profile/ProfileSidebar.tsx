import React, { useState } from 'react'

import { useContext, useRef } from 'react'
import { IStore, StoreContext } from '../../App'

import { CheckIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { observer } from 'mobx-react-lite'

import ProfileGreeting from './ProfileGreeting'
import UserGreet from './UserGreet'

import { ProfileContext } from '../../views/Profile'
import ChangeProfile from './ChangeProfile'
import { ExtendedUser } from '../../models/models'

const ProfileSidebar: React.FC<{isMine: boolean, user: ExtendedUser}> = ({isMine, user}) => {
  
  const { auth } = useContext<IStore>(StoreContext)

  const { changing, changeProfile } = useContext(ProfileContext)

  const [img, setImg] = useState<string>(user?.picture!)

  const [saved, setSaved] = useState<boolean>(true) 

  const inputRef = useRef<HTMLInputElement>(null)

  const fileChangeHandler = async () => {
    setSaved(false)
    const file = inputRef.current!.files![0]
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (e: ProgressEvent<FileReader>) => {
      setImg(e.target!.result + '')
    }

  }

  const changeProfileImage  = async () => {
    const picture  = await auth.addFileToStore(img + '')
    await changeProfile({...user, picture, _id:''})
    setSaved(true)

  }

  return (
    <div className='flex flex-col p-5 border-b xl:max-w-[308px] bg-white border gap-4 border-gray-300 rounded-xl'>

      <div className='items-center justify-between xl:justify-center text-center flex xl:flex-col'>

        <div className='flex flex-col xl:hidden text-left'>
          <UserGreet />
          <ProfileGreeting />
        </div>
        
      <div className='flex flex-col items-center justify-center'>
      <div className='xl:h-[128px] h-[90px] w-[90px] xl:w-[128px] rounded-[50%] border border-transparent xl:mx-auto'>
          <img src={ img? img : auth.user?.picture } className='rounded-[50%] w-full h-full object-cover' alt="ll" />  
        </div>
        
        <input ref={inputRef} onChange={fileChangeHandler} type="file" hidden />

        { isMine  && <span onClick={() => inputRef.current!.click()} className='text-center underline cursor-pointer w-[100px] text-gray-900'>Оновити фотографію</span>}
      </div>
       
      </div>

      <div className='flex xl:hidden'>
       {  changing && isMine && <ChangeProfile />}
      </div>
     
      <ShieldCheckIcon className='h-7 w-7' />

      <div className='flex flex-col border-b mb-1 pb-4 border-gray-200'>
        <h1 className='font-bold text-lg text-[#212121]'>Підтвердження особи</h1>

        <span className='text-gray-800 my-2 mb-4 leading-5'>
        Значок верифікованого користувача покаже іншим, що це насправді ви.
        </span>

        <button className='sidebar-button'>
          Отримав значок
        </button>
        
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='text-xl font-semibold text-[#212121]'> <span className='text-[#212121]'>{auth.user?.name}</span>: {auth.user?.email_verified ? 'підтверджено' : 'не підтверджено ' } </h1>
        
        <div className='flex gap-3'>
          <CheckIcon className='h-6' />

          <p className='text-gray-600'>Номер телефону</p>
        </div>
      </div>


      
    </div>
  )
}

export default observer(ProfileSidebar)
