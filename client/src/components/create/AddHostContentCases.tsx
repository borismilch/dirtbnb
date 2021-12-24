import React, { useState } from 'react'
import { useContext } from 'react'
import { IAddHostContext, IPlace } from '../../models/models'
import { addHostContext } from '../../views/AddHost'

import PhotoPisker from './photos/PhotoPisker'

import AddMapComponent from '../map/AddMapComponent'

import AddCostForm from './addName/AddCostForm'

import AddNameForm from './addName/AddNameForm'

import SelectPleasures from './pser/SelectPleasures'

import Counters from './facilyties/Counters'

import AddSubscriptionForm from './addName/AddSubscriptionForm'

import Loader from '../loaders/Loader'

const AddHostContentCases = () => {
  const [rooms] = useState<IPlace[]>([] as IPlace[])

  const {stage} = useContext<IAddHostContext>(addHostContext)

  const renderComponent = () => {
    switch(stage) {
      case 1: return (<AddMapComponent searchResults={rooms} />)

      case 2: return ( <Counters/> )

      case 3: return ( <SelectPleasures /> )

      case 4: return ( <PhotoPisker /> )

      case 5: return ( <AddNameForm /> )

      case 6: return ( <AddSubscriptionForm /> )

      case 7: return ( <AddCostForm /> )

      default: return (<Loader />)
    }
  }

  return (
    <>
      {renderComponent()}
    </>
  )
}

export default AddHostContentCases
