import React from 'react'

import { IPlace } from '../../models/models'

import InfoCard from './InfoCard'

const SearchList: React.FC<{rooms: IPlace[]}> = ({rooms}) => {

  return (
    <div className='flex flex-col gap-[20px]'>
      {
        rooms.map(room => (
          <InfoCard  place={room} key={room.long} />
        ))
      }
    </div>
  )
}

export default SearchList
