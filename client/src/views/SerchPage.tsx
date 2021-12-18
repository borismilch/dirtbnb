import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/Header'

import SearchCategories from '../components/serach/SearchCategories'

import { useLocation } from 'react-router-dom'
import { IRouterState } from '../models/Contexsts'
import SearchList from '../components/serach/SearchList'

import axios from 'axios'
import { useState, useEffect } from 'react'


import { format } from 'date-fns'
import MapComponent from '../components/map/MapComponent'
import { IPlace } from '../models/models'

const SearchPage = () => {

  const {state} = useLocation<IRouterState>()

  const [loaded, setLoaded] = useState<boolean>(false)

  const [rooms, setRooms] = useState<IPlace[]>([])

  const setPlaces = async () => {
    const items = await axios.get('http://localhost:5000/api/places')

    setRooms(items.data)

  }

  useEffect(() => {
    setPlaces()
    setLoaded(true)
  }, [])

  const startDateString = format(new Date(state.startDate), 'dd MMMM yy')
  const endDateString = format(new Date(state.endDate), 'dd MMMM yy')

  const range = startDateString +  `-` + endDateString

  return (
    <div className='flex flex-col h-screen'>
      <div className='pt-[110px]' />
      <Header placeholder= { state.location + ' | ' + state.startDate }  />

      <main className='px-[12px] md:px-[30px] flex-1'>

        <section>
          <p className='text-xs truncate  '>300+ stays {range} for {state.guestCount} guests </p>

          <h1 className='text-3xl font-semibold mt-2 mb-4'>Stays in { state.location }</h1>

          <SearchCategories />

          <div className='flex'>
            <SearchList rooms={rooms} />

           { loaded && <div className='hidden lg:inline-flex flex-grow min-w-[600px] ml-3'>
              <MapComponent searchResults={rooms} />
            </div>}
          </div>

        

        </section>

      </main>

      <Footer />
    </div>
  )
}

export default SearchPage
