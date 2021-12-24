import React from 'react'

import { IPresureItem } from '../../../models/models'

import { useContext } from 'react'
import { addHostContext } from '../../../views/AddHost'

const Presurecard: React.FC<{item: IPresureItem}> = ({item}) => {

  const {plesures, changePlesure } = useContext(addHostContext)

  return (
    <div onClick={changePlesure.bind(null, item.ref)} className={'min-h-[120px] border-gray-300 rounded-lg hover:border-[#212121] transition-all duration-200 border-2  flex flex-col items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer ' + ( plesures[item.ref] && 'bg-gray-200 hover:bg-gray-200 border-black' ) }>

      <item.icon/>
      <p className='text-[#212121] text-center font-semibold text-sm'>{item.title}</p>

    </div>
  )
}

export default Presurecard
