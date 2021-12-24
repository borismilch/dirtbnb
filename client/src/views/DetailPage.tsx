import React, { ChangeEvent } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import { useEffect, useState } from 'react'

import UserSubscription from '../components/detail/UserSubscription'

import DetailGallery from '../components/detail/DetailGalleru'

import PayForm from '../components/detail/payment/PayForm'

import PagelOader from '../components/loaders/PagelOader'

import { IHost } from '../models/models'

import Header from '../components/Header'
import Footer from '../components/footer/Footer'
import DetailHeaders from '../components/detail/DetailHeaders'
import Features from '../components/detail/Features'

import {createContext} from 'react'
import { SearchContext } from '../models/Contexsts'
import DatePickerDetail from '../components/pickers/DatePickerDetail'

import DetailMap from '../components/map/DetailMap'

import { ChevronRightIcon } from '@heroicons/react/outline'
import CreatorResume from '../components/detail/creator/CreatorResume'

export const DetailContext = createContext<SearchContext>({} as SearchContext)

const DetailPage = () => {

  const [loaded, setLoaded] = useState<boolean>(false)

  const [current, setCurrent] = useState<IHost>({} as IHost)
  const location = useLocation<{hostId: string}>()
  const {hostId} = location.state

  const [startDate, setStarthDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [guests, setGuests] = useState<number>(0)

  const changeGuests = (e: ChangeEvent<HTMLInputElement>) => {
    setGuests(+e.target.value)
  }

  const changeDate = function (ranges: any)  {
    setStarthDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const contextData = { guests, changeGuests, startDate, endDate, changeDate }

  const getCurrentHost = async () => {
    const bdHost =  await axios.get('http://localhost:5000/api/place/' + hostId)

    setCurrent(bdHost.data)
    console.log(current)
  }

  useEffect(() => {
    getCurrentHost()
    console.log(hostId)
  }, [])

  if (!current._id) {
    return (
      <div className='max-w-[1100px] mx-auto'>
        <div className='h-[90px]' />
         <PagelOader />
      </div>
    )
  }

  return (
    <DetailContext.Provider value={contextData}>

    <div className='flex py-[30px] flex-col min-h-screen'>
        <Header />
        <div className='h-[20px]' />
      
        <main className='flex flex-col'>

          <div className='flex-grow max-w-[1100px] w-full mx-auto'>

        

          <DetailHeaders host={current} />
            
            <DetailGallery images={current.otherImages} titleImage={current.img} />
  
            <div className='flex w-full'>
  
              <div className='flex flex-col flex-[0.6]' >
                  <UserSubscription host={current} />
                  <Features host={current} />
  
                  <div className='flex gap-4 py-6 border-b border-gray-300 mb-2'>
                    <DatePickerDetail color={'#FD5B61'} />
  
                    <DatePickerDetail color={'#FD5B61'} />
                  </div>
              </div>
  
              <div className='flex flex-col flex-[0.4]' >
                <div className='sticky top-[100px]'>
                <PayForm host={current} />
                </div>
             
              </div>
  
            </div>

            <div className='flex flex-col my-3 py-6'>

            <h1 className='text-[#212121] text-2xl mb-3 font-semibold'>Де ви будете</h1>

            <div className='w-full rounded-lg overflow-hidden h-[500px] my-2'>
              <DetailMap host={current} />
            </div>

            <div className='flex flex-col gap-3 my-3'>
                <h4 className='text-lg font-semibold'>{current.location}</h4>
                <p className='text-lg'>{current.description}</p>
      
                  <div className='flex items-center gap-2 text-lg'>
                    <span className='cursor-pointer font-semibold underline text-lg text-black'>Показати більше</span>

                    <ChevronRightIcon className='h-4 font-semibold' />
                  </div>

              </div>

            </div>

            <div>
              <CreatorResume host={current} />
            </div>

          

          </div>

        

        </main>

        <Footer />
      </div>

    </DetailContext.Provider >

  )
}

export default DetailPage
