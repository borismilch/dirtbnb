import React from 'react'
import { IHost } from '../../../models/models'

import { useHistory } from 'react-router-dom'

const UserIntro: React.FC<{host:IHost}> = ({host}) => {

  const history = useHistory()

  const pushHistory = () => {
    history.push({
      pathname: '/prof/' + host.userid,
      state: { id: host.userid }
    })
  }

  return (

    <div className='flex gap-3 items-center'>
      <img onClick={pushHistory.bind(null)} src={host.userimg} className='w-16 h-16 rounded-full' alt="" />

      <div className='flex flex-col h-full mt-2'>
        <h1 className='text-[#212121] text-xl font-semibold'>Господар: {host.username}</h1>

        <p className='text-gray-300 text-sm'>На Airbnb з грудень 2021</p>
      </div>

   </div>
  )
}

export default UserIntro
