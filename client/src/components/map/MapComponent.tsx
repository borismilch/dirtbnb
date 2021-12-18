import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl' 
import getCenter  from 'geolib/es/getCenter'

import {ICoords, IPlace} from '../../models/models'
import { LocationMarkerIcon } from '@heroicons/react/solid'

const MapComponent:React.FC<{searchResults: IPlace[]}> = ({searchResults}) => {
  const coords = searchResults.map(res => ({ longitude: res.long, latitude: res.lat }))

  const center = getCenter(coords) as ICoords
  const [selectedLocation, setSelectedLocation] = useState<ICoords>({} as ICoords)

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
    width: '100%',
    height: '100%'
  });

  return (
    
    <ReactMapGL   
      mapStyle='mapbox://styles/mapbox/light-v10'
      mapboxApiAccessToken='pk.eyJ1IjoiYnVpbG9taWwiLCJhIjoiY2t4Yjh2dmh4MGxqMzJwbzd1Nm5qbXQxciJ9.-wncKWy6mAZDLvJ8UmqDig'
      {...viewport}
      onViewportChange={(viewpt: any) => setViewport(viewpt)}

    >
     { searchResults.map ((res: IPlace) => (
       <div key={res.long.toString()}>
        <Marker longitude={+res.long} latitude={+res.lat}   offsetLeft={-20} offsetTop={-10}>
          <LocationMarkerIcon onClick={() => setSelectedLocation({longitude: +res.long, latitude: +res.lat})} className='h-5 text-red-500 cursor-pointer  animate-bounce transition-all duration-200' />
        </Marker>

        {
          selectedLocation.longitude === +res.long && (
            <Popup 
              latitude={+res.lat}
              longitude={+res.long} 
              closeOnClick={true}
              closeButton={false}
              onClose={() => setSelectedLocation({} as ICoords)}
            >
              <p>{res.title}</p>
            </Popup>
          )
        }

       </div>
     )) } 
    </ReactMapGL>
  )
}

export default MapComponent
