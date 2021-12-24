import React from 'react'

import {AirbnbIcon} from '../../assets/'

import { useHistory } from 'react-router-dom'


const Screen:React.FC<{title: string}> = ({title}) => {

  const history = useHistory()

  const pushHistory = () => {
    history.push('/')
  }

  return (
    <div className='flex items-center py-5  bg-gradient-to-b from-pink-700 via-pink-700 to-purple-800 xl:h-screen justify-center w-full'>

      <div onClick={pushHistory.bind(null)} className='xl:absolute xl:top-3 xl:left-5 cursor-pointer'>
        <AirbnbIcon />
      </div>

      <h1 className='mx-[5%] text-lg xl:text-5xl text-white font-semibold '>
      {title}
      </h1>
    </div>
  )
}

export default Screen
