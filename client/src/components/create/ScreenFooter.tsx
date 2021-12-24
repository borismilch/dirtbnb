import React from 'react'

import { useContext } from 'react'
import { IAddHostContext } from '../../models/models'
import { addHostContext } from '../../views/AddHost'
 
const ScreenFooter: React.FC<{validationRule: () => boolean}> = ({validationRule}) => {

  const { setStage, stage, createNewHost  } = useContext<IAddHostContext>(addHostContext)

  const incrementStage = async () => {
    setStage((prev: number) => prev + 1)
    if (stage > 6) {
      await createNewHost()
    }
  }

  const decrementStage = () => {
    setStage((prev: number) => prev - 1)
  }

  return (
    <div className='h-[80px] border-t border-gray-300 z-50 left-0 bottom-0 absolute w-full rounded-t-lg flex justify-between items-center px-[30px] bg-white'>

      <button disabled={stage < 2} onClick={decrementStage.bind(null)} className='underline cursor-pointer rounded-md text-[#212121] transition-all duration-200 hover:bg-gray-50'>Назад</button>

      <button onClick={incrementStage.bind(null)}  disabled={!validationRule()} className='blackButton cursor-pointer transition-all duration-200 '>{stage === 7 ? '  Опублікувати' : 'Далі'}</button>
      
    </div>
  )
}

export default ScreenFooter
