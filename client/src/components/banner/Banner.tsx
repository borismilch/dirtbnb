import React from 'react'

const Banner = () => {
  return (
    <div className='relative flex items-center justify-center h-[700px]'>
      <img src="https://links.papareact.com/0fm" className='object-cover transform  w-full h-full object-bottom ' alt="" />

      <div className='absolute top-[50%] flex-col   w-full flex items-center justify-center'>

       <span className='text-sm md:text-lg font-semibold'> Not sure where to go?</span>

       <button className='text-purple-600 bg-white 
       px-10 shadow-md rounded-full md:py-4 font-bold my-3 hover:shadow-xl 
       transition-all duration-100 active:scale-90 text-sm md:text-base py-3'>Гнучкий пощук</button>
      </div>

    </div>
  )
}

export default Banner
