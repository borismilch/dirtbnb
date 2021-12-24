import React from 'react'
import { IPresureItem } from '../../../models/models'
import Presurecard from './Presurecard'

import '../facilyties/appear.css'


const PresureList:React.FC<{ title: string, items: IPresureItem[]}> = ({title, items}) => {
  return (
    <div className='px-5 flex flex-col gap-4'>

      <h1 className='xltext-2xl text-lg font-bold text-[#212121]'>{title}</h1>

      <div className='grid gap-3 appear grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[580px]'>
        {
          items.map(item => ( <Presurecard item={item} key={item.title} /> ))
        }
      </div>
      
    </div>
  )
}

export default PresureList
