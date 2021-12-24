import React from 'react'
import GalleryIcon from '../../../assets/GalleryIcon'

import { useContext } from 'react'

import { useRef, useState } from 'react'  

import { addHostContext } from '../../../views/AddHost'

import { StoreContext } from '../../../App'

import PhotoOverlay from './PhotoOverlay'
import { PencilAltIcon } from '@heroicons/react/solid'

const TitleImageFallback:React.FC= () => {

  const { setTitleImage, titleImage } = useContext(addHostContext)
  const [img, setImg] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const { auth } = useContext(StoreContext)

  const fileinputRef = useRef<HTMLInputElement>(null)

  const fileChangeHandler = async () => {
  
    const file = fileinputRef.current!.files![0]
    const reader = new FileReader()

    console.log(file)

    reader.readAsDataURL(file)

    reader.onload = async (e: ProgressEvent<FileReader>) => {

      setImg(e.target!.result + '')

      setLoading(true)

      const imageURL = await auth.addImageToStore(e.target!.result + '', Date.now().toString() + Math.random().toString())

      setLoading(false)

      console.log(imageURL)

      setTitleImage(imageURL)
    }

  }

  return (
    <div onClick={() => fileinputRef.current?.click()} className='fileplaceholder max-w-[fit-content] mx-auto'>

      { loading && <PhotoOverlay /> }

    { !img ? (<div className='max-w-md  mx-auto'>
      <input ref={fileinputRef} type='file' hidden onChange={fileChangeHandler} />

      <div className='flex flex-col items-center justify-center gap-4 '>
        <GalleryIcon />
        <p className='font-semibold text-center max-w-[80%] mx-auto text-2xl'>Додайте щонайменше 5 фотографій</p>

        <p className='text-sm underline cursor-pointer absolute bottom-10 text-gray-700 '>Завантажити зі свого пристрою</p>
      </div>
     </div>) : (<div className='w-full h-full'>
       <img src={img} className='object-cover w-full h-full rounded-lg' alt="" />

        { !loading && 
      
          <div onClick={() => fileinputRef.current?.click()} className='miniOverlay z-10'>
           <PencilAltIcon className='h-6 text-white cursor-pointer' />
          </div>}

        </div>)
      }
    
    </div>
  )
}

export default TitleImageFallback
