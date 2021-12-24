import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl' 
import getCenter  from 'geolib/es/getCenter'

import { HomeIcon } from '@heroicons/react/solid'

import {ICoords, IHost} from '../../models/models'
import { LocationMarkerIcon } from '@heroicons/react/solid'

const DetailMap:React.FC<{host: IHost}> = ({host}) => {

  const [selectedLocation, setSelectedLocation] = useState<boolean>(false)

  const [viewport, setViewport] = useState({
    latitude: host.lat,
    longitude: host.long,
    zoom: 8,
    width: '100%',
    height: '100%'
  });

  return (
    
    <ReactMapGL   
      mapStyle='mapbox://styles/mapbox/light-v10'
      mapboxApiAccessToken='pk.eyJ1IjoiYnVpbG9taWwiLCJhIjoiY2t4Yjh2dmh4MGxqMzJwbzd1Nm5qbXQxciJ9.-wncKWy6mAZDLvJ8UmqDig'
      {...viewport}
      onViewportChange={(viewpt: any) => {setViewport(viewpt)}}

    >
      <Marker longitude={+host.long} latitude={+host.lat}   offsetLeft={-20} offsetTop={-10}>
        <div onClick={() => setSelectedLocation(prev => !prev)} className='h-10 w-10 flex items-center justify-center rounded-full bg-[#212121] cursor-pointer  animate-pulse transition-all duration-200' ><HomeIcon className='h-5 text-white' /></div>
      </Marker>

      {
        selectedLocation && (
          <Popup 
            latitude={+host.lat}
            longitude={+host.long} 
            closeOnClick={true}
            closeButton={false}
            onClose={() => setSelectedLocation(false)}
          >
            <p>Точне місце розташування на карті</p>
          </Popup>
        )
      }

  
    </ReactMapGL>
  )
}

export default DetailMap
