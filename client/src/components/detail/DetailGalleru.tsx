import React from 'react'


const DetailGalleru: React.FC<{images: string[], titleImage: string}> = ({images, titleImage}) => {
  return (
    <div className='grid grid-rows-2 grid-cols-4 gap-3 rounded-xl my-[10px] overflow-hidden'>

      <div className='col-span-2 row-span-2 relative'>
        <div className='imageOverlay' />
          <img src={titleImage} className='w-full h-full object-cover ' alt="" />
      </div>

      <>
       {
        images.filter(img => img).map(img => (
          <div className='relative h-[240px]'>
            <div className='imageOverlay' />
              <img src={img} className='w-full h-full object-cover ' alt="" />
         </div> ))
       }
      </>

    </div>
  )
}

export default DetailGalleru
