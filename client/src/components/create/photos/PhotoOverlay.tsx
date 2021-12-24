import React from 'react'

const PhotoOverlay = () => {
  return (
    <div className='absolute inset-0 bg-black z-10 rounded-lg   bg-opacity-60 '>
     
      <div className='absolute top-2 right-2'>
        <div className="animate-spin rounded-full h-4 w-4 border-b-4 border-white" />
      </div>

    </div>

  )
}

export default PhotoOverlay
