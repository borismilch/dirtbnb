import React from 'react'
import { IHost } from '../../models/models'

import { presios2, presios1 } from '../../utils/bullshit'

const Features: React.FC<{host: IHost}> = ({host}) => {

  const features = [...presios2, ...presios1].filter(p => host.plesures!.includes(p.ref))

  return (
    <div className='flex flex-col py-5 mb-4 border-b border-gray-300'>

    <h1 className='text-2xl font-semibold mb-4 text-[#212121]'>Які тут зручності</h1>

    <div className='grid grid-cols-2'>
        {features.map(feature => (
          <div key={feature.ref} className='flex items-center gap-2 p-2 py-3 cursor-pointer hover:bg-gray-100 rounded-md transition-all duration-200'>
            <feature.icon />
            <span className='text-gray-600 font-extralight'>
              {feature.title}
            </span>
          </div>
        ))}
      </div>

    </div>
   
  )
}

export default Features
