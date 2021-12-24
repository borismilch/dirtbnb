import React from 'react'
import { IHost } from '../../../models/models'

import { StarIcon, ShieldCheckIcon } from '@heroicons/react/solid'

const skils = ['Мови: English, Русский, Українська',
 ' Швидкість відповіді: 100%',
 ' Швидкість відповіді: протягом години']

const UserConfirm: React.FC<{host:IHost}> = ({host}) => {

  return (
    <div className='flex flex-col py-6'>

      <div className='flex gap-6 mb-4'>

        <div className='flex items-center gap-2'>
          <StarIcon className='h-6 text-red-500' />
          <span className='text-[#212121] font-light'>13 відгуків</span>
        </div>

        <div className='flex items-center gap-2'>
          <ShieldCheckIcon className='h-6 text-red-500' />
          <span className='text-[#212121] font-light  '>Верифікований користувач</span>
        </div>

      </div>

      <p className='max-w-[400px]'>My name is Andriy, and I enjoy meeting new people and finding ways to help them have an uplifting experience. I am an architect, my life's mission is to create fantastic spaces for people to make their stay there an unforgettable feel.</p>

      <div className='flex flex-col gap-4 py-3'>

       { skils.map(skill => (
         <span key={skill} className='text-gray-500 font-light'>
            {skill}
         </span>
       ))
       }

       <button className='p-3 border-b border-[#212121] px-5 max-w-sm border hover:bg-gray-100 cursor-pointer transition-all duration-200 font-semibold text-sm rounded-lg'>Зв’язатися з господарем</button>

      </div>
     

    </div>
  )
}

export default UserConfirm
