import React from 'react'

import { StarIcon } from '@heroicons/react/solid'

import './style.scss'
import { IHost } from '../../../models/models'

const PayForm: React.FC<{host: IHost}> = ({host}) => {
  return (
    <main className='mx-[16px] w-[360px] ml-auto'>
    <section className="order-container w-full ">

      <div className="flex items-center justify-between mb-2">
        <p><span className="cost"> {'$' + host.price}</span> / night</p>
        <p className='flex items-center gap-1 font-semibold text-sm'>4.38 <StarIcon className='h-4 text-red-500' /> <p className='text-sm font-semibold underline'>16 comments</p> </p>
      </div>
  
      <div className="order-data">

        <div className="date-picker">
          <div className="date-input">
            <label>check in</label>
            <input placeholder="Tue Sep 07 2021"></input>
          </div>

          <div className="date-input">
            <label>check out</label>
            <input placeholder="Tue Sep 07 2021"></input>
          </div>
        </div>
  
        <div className="guest-input">
          <label>guests</label>
          <input placeholder="2"></input>
        </div>
      </div>
  
      <div className="btn-container">

        <div className="content">
          <button className=" bg-red-500 bg-gradient-to-r from-red-500 to-pink-600 w-full h-full rounded-xl  cursor-pointer transition-all duration-200">
            <span>Check availability</span>
          </button>
        </div>

      </div>

    </section>
    <p className="footer">Report this listing</p>
  </main>
  )
}

export default PayForm
