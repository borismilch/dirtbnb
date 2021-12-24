import React, { useRef, useState } from 'react'
import PhotoIcon from '../../../assets/pseale/PhotoIcon'

import { useContext } from 'react'
import { addHostContext } from '../../../views/AddHost'

import { StoreContext } from '../../../App'
import PhotoOverlay from './PhotoOverlay'

import { PencilAltIcon } from '@heroicons/react/solid'

const PhotoFallback:React.FC<{idx: number}>= ({idx}) => {

  const { addImage } = useContext(addHostContext)

  const fileinputRef = useRef<HTMLInputElement>(null)

  const { auth } = useContext(StoreContext)

  const [img, setImg] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const fileChangeHandler = async () => {
  
    const file = fileinputRef.current!.files![0]
    const reader = new FileReader()

    console.log(file)

    reader.readAsDataURL(file)

    reader.onload = async (e: ProgressEvent<FileReader>) => {

      setImg(e.target!.result + '')

      setLoading(true)

      const imageURL = await auth.addImageToStore(e.target!.result + '', Date.now().toString() + Math.random().toString())

      addImage(idx, imageURL)

      setLoading(false)

      console.log(imageURL)

    }

  }

  return (
    <div onClick={() => fileinputRef.current?.click()}  className={'fileplaceholder min-h-[160px] rounded-rounded-lg cursor-pointer ' + (img && ' max-w-[fit-content]')}>

    <input ref={fileinputRef} type='file' hidden onChange={fileChangeHandler} />

    { loading && <PhotoOverlay /> }

     { !img ? 
      (<div className='flex flex-col items-center justify-center gap-4 '>
        <div className='className'>
          <PhotoIcon />
        </div>

      </div>) 
      :( 
       <div className='relative'>

        { !loading && <div className='miniOverlay'>
          <PencilAltIcon onClick={() => fileinputRef.current?.click()} className='h-6 text-white cursor-pointer' />
        </div>}

          <img src={img} className='object-cover  w-full h-full rounded-lg ' alt="" />
        </div> 
       )
     }
    
    </div>
  )
}

export default PhotoFallback
