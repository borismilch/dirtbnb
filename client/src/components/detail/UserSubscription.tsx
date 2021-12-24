import React from 'react'
import { IHost } from '../../models/models'

const UserSubscription:React.FC<{host: IHost}> = ({host}) => {
  return (
    <div className='flex justify-between w-full py-4 border-b border-gray-300'>

      <div className='flex flex-col'>
        <h2 className='text-2xl text-[#212121] '>Вілла цілком, господар - {host.username}</h2>

       <div className='flex items-center '>
       {
          Object.keys(host.facilities).map(key => (
            <div className='flex items-center'>
              <span className='text-gray-400 text-sm font-semibold'>{key}: {host.facilities[key]}</span>
              <span className='mx-1 text-[#212121]'> · </span>
            </div>
          ))
        }
       </div>

      </div>

      <div>
        <img src={host.userimg} className='w-14 h-14 rounded-[50%] cursor-pointer' alt="hui" />
      </div>
    
    </div>
  )
}

export default UserSubscription
