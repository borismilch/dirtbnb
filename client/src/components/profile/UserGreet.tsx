import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { IStore, StoreContext } from '../../App'


import { ProfileContext } from '../../views/Profile'

const UserGreet = () => {

  const { auth } = useContext<IStore>(StoreContext)
  const { changeChanging, changing } = useContext(ProfileContext)

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-semibold text-gray-800'>Вітаю, мене звати {auth.user?.nickname}</h1>
 
      <span className='text-sm text-gray-400'>З нами з 2022</span>

      <span onClick={() => changeChanging(!changing)} className={'text-[#212121] my-1 mb-5 font-semibold underline cursor-pointer ' + (changing && 'opacity-50') }>Редагувати профіль</span> 
    </div>
  )
}

export default observer(UserGreet)
