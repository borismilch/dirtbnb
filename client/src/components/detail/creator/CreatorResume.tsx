import React from 'react'
import { IHost } from '../../../models/models'
import UserConfirm from './UserConfirm'
import UserIntro from './UserIntro'


const CreatorResume:React.FC<{host:IHost}> = ({host}) => {
  return (

    <div className='flex flex-col px-4 border-t border-b border-gray-300 py-[40px]'>

      <div className='flex gap-3'>

        <UserIntro host={host} />

      </div>

      <UserConfirm host={host} />

    </div>
   
  )
}

export default CreatorResume
