import React from 'react'

import PhotoFallback from './PhotoFallback'

import '../facilyties/appear.css'

import { useContext } from 'react'
import { addHostContext } from '../../../views/AddHost'

import TitleImageFallback from './TitleImageFallback'

const PhotoPisker = () => {

  const {titleImage, otherImages, addImage} = useContext(addHostContext)

  return (
    <div className='add_content_container appear pb-[40px] mt-[16%] mx-auto overflow-y-auto h-screen w-full'>

      <div className='max-h-[500px] relative h-full'>
      { <TitleImageFallback /> }        
      </div>

    { titleImage && 
     <div className='grid grid-cols-1 gap-4 md:grid-cols-2 items-center '>
        { otherImages.map((_, idx) =>  <PhotoFallback idx={idx} />) }
      </div>
    }

    </div>
  )
}

export default PhotoPisker
