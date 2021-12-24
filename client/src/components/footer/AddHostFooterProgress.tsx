import React from 'react'

import { useContext } from 'react'
import { addHostContext } from '../../views/AddHost'

const AddHostFooterProgress = () => {

  const {stage} = useContext(addHostContext)

  return (
    <div className='h-[2px] left-0 absolute bottom-[80px] transition-all flex items-start w-full'>

      <div className={'duration-300 bg-[#212121] h-[2px]'} style={{width:  Math.floor((100 / 8) * stage) + '%' }}>

      </div>

    </div>
  )
}

export default AddHostFooterProgress
