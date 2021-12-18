import React from 'react'
import { DateRangePicker } from 'react-date-range'
import { observer } from 'mobx-react-lite'

import { Context }  from '../../context/SearchContext'

import { useContext } from 'react'
import { SearchContext } from '../../models/Contexsts'

const DatePicker = () => {

  const {startDate, endDate, changeDate} = useContext<SearchContext> (Context)

  const selectionsRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  return (
    <div className=' flex justify-center'>
      <DateRangePicker
       ranges={[selectionsRange]} 
       minDate={new Date()}
       rangeColors={['#FD5B61']}
       onChange={changeDate}
      />
    </div>
  )
}

export default observer(DatePicker)
