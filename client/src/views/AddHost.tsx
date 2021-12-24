import React, { useEffect } from 'react'

import CreateHeader from '../components/create/CreateHeader'
import Screen from '../components/create/Screen'

import axios from 'axios'

import AddHostContentCases from '../components/create/AddHostContentCases'
import ScreenFooter from '../components/create/ScreenFooter'

import { useHistory } from 'react-router-dom'

import { useState, createContext } from 'react' 
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { ICoords, IFacilities, IPeasures, IHost } from '../models/models'

import { useContext } from 'react'
import { IStore, StoreContext } from '../App'

import { IAddHostContext } from '../models/models'
import AddHostFooterProgress from '../components/footer/AddHostFooterProgress'
import { observer } from 'mobx-react-lite'

export const addHostContext = createContext<IAddHostContext>({} as any)

const AddHost = () => {

  const history = useHistory()

  const {auth} = useContext<IStore>(StoreContext)



  const [coords, setCoords] = useState<ICoords>({latitude: 0, longitude: 0})
  const [facilities,  setFacilities] = useState<IFacilities>({ beds: 1, guests: 4,  bathrooms: 1 })

  const [stage, setStage] = useState<number>(1)

  const [plesures, setPlesures] = useState<IPeasures>({})

  const changePlesure = (key: string) => {
    const pls = plesures

    if (pls[key]) { delete pls[key] }
    else { pls[key] = key }

    setPlesures({...pls})
  }

  const [titleImage, setTitleImage] = useState<string>('')
  const [otherImages, setOtherImages] = useState<string[]>(['', '', '', ''])

  const addImage = (idx: number, img: string) => {
    setOtherImages(otherImages.map((image, index) => (index === idx) ? img : image  ))

    const filledImages = otherImages.filter(image => image)

    if (filledImages.length === otherImages.length) { setOtherImages([...otherImages, '']) }

  }

  const [hostName, setHostName] = useState<string>('')
  const [hostSub, setHostSub] = useState<string>('')

  const [costPerNight, setCostPerNight] = useState<number>(0)

  const validationRule = (): boolean => {
    switch (stage) {

      case 1: return !!coords.latitude

      case 2: return true

      case 3: return !!Object.keys(plesures).length

      case 4: return !!(titleImage && (otherImages.length >= 4))

      case 5: return !!hostName

      case 6: return !!hostSub

      case 7: return !!costPerNight

      default: return false 
    }
  }

  const createNewHost = async () => {

    const newHost: IHost = { lat: coords.latitude, long:coords.longitude , facilities, plesures: Object.values(plesures), img:titleImage, otherImages, title: hostName, description: hostSub, 
      createdAt: Date.now(), location: 'Selo Vidrichka', star: 0, price: costPerNight, total: costPerNight * 7, 
      username: auth.user!.nickname + '', userid: auth.user!._id + '',
      userimg: auth.user!.picture + ''
    }

    const dbHost: IHost =  ( await axios.post('http://localhost:5000/api/add', { host: newHost })).data

      history.push({
        pathname: '/detail/' + dbHost._id,
        state: {
          hostId: dbHost._id
        }
      })
  }


  return (
    <div className='flex h-screen flex-col xl:flex-row'>

      <addHostContext.Provider value={{coords, setCoords, setFacilities, facilities, setStage, stage, plesures, changePlesure, titleImage, setTitleImage, otherImages, addImage, hostName, setHostName, hostSub, setHostSub, costPerNight, setCostPerNight, createNewHost}}>
        <div className='xl:max-w-[50%] xl:h-screen'>
          <Screen title='Де розташоване ваше помешкання?' />
        </div>

        <div className='flex flex-grow h-screen relative' >

          <div className='relative flex-grow'>
          <CreateHeader />

     
            <AddHostContentCases />
        

          <div className='absolute -translate-x-5 -translate-y-7 top-1/2 left-1/2'>
            { stage === 1 && <div>
              <LocationMarkerIcon className='h-10 text-pink-600 animate-bounce' />
             </div>}
          </div>

          <AddHostFooterProgress />

          <ScreenFooter validationRule={validationRule} />
          </div>

        </div>
      </addHostContext.Provider>
    

    </div>
  )
}

export default observer(AddHost)
