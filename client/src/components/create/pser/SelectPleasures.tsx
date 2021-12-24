import React from 'react'

import { presios1, presios2 } from '../../../utils/bullshit'

import PresureList from './PresureList'


const SelectPleasures = () => { 

  return (
    <div className='add_content_container'>
      <div className=' flex flex-col pt-10  justify-center'>
        <PresureList title='Маєте якісь особливі зручності?' items={presios1} />
      </div>

      <div className=' flex flex-col pt-10 overflow-y-autojustify-center'>
      <PresureList title='Ше зручності?' items={presios2} />

      </div>


    </div>
  )
}

export default SelectPleasures
