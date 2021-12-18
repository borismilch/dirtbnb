import React, { ChangeEvent } from 'react'
import HeaderActions from './header/HeaderActions'

import { useHistory } from 'react-router-dom'

import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

import { observer } from 'mobx-react-lite'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DatePicker from './pickers/DatePicker';
import GuestsPicker from './pickers/GuestsPicker';

import { Context } from '../context/SearchContext'
import { IRouterState } from '../models/Contexsts'
 
const Header:React.FC<{placeholder: string}> = ({placeholder}) => {

  const [serch, setSerch] = useState<string>('')
  const [startDate, setStarthDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())

  const history = useHistory()

  const [guests, setGuests] = useState<number>(0)

  const changeGuests = (e: ChangeEvent<HTMLInputElement>) => {
    setGuests(+e.target.value)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSerch(e.target.value)
  }

  const pushHistory = () => {
    history.push('/')
  }

  const pushHistoryToSearch = () => {
    history.push({
      pathname: '/search',
      state: {
        guestCount: guests,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        location: serch
      } as IRouterState
    })
  }

  const changeDate = function (ranges: any)  {
    setStarthDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const contextData = { guests, changeGuests, startDate, endDate, changeDate }

  return (
    <Context.Provider value={contextData}>

      <header className='fixed w-full top-0 z-50 py-[18px] bg-white shadow-md  md:px-20 px-5'>

        <div className='grid grid-cols-3'>

        <div className='relative flex items-center w-24 cursor-pointer h-10'>
          <img
            onClick={pushHistory.bind(null)}
            className='object-contain'
            src="https://links.papareact.com/qd3"
            alt="ddd" 
            />
        </div>

        <div className='flex items-center md:border-2  rounded-full md:shadow-md  py-1 mx-auto max-w-[310px] w-full '>
          <input onChange={changeHandler} value={serch} type="text" className='headerInput'  placeholder={placeholder} />

          <SearchIcon className='searchButton' />
        </div>

        <HeaderActions />

        </div>

        {
        serch && (
          <div className='pt-2 flex flex-col gap-2 max-w-[558px] mx-auto'>
           
            <DatePicker />
            <GuestsPicker />

            <div className='flex'>

              <button onClick={() => setSerch('')} className='headerButton text-gray-700 hover:bg-gray-50'>Cancel</button>

              <button onClick={pushHistoryToSearch.bind(null)} className='headerButton hover:bg-red-50 text-red-500'>Search</button>
            </div>

        </div>
      )
      }

      </header>

    </Context.Provider>
 
  )
}

export default observer(Header)
