import React from 'react'

const LrgeCard:React.FC<{image: string, title: string, description: string, buttonText: string}> = ({title, image, description, buttonText}) => {
  return (
    <div className='relative py-16 cursor-pointer'>

      <div className='relative h-96 min-w-[300px] w-full rounded-3xl'>
        <img src={image} alt="d" className='w-full h-full object-cover rounded-3xl' />
      </div>

      <div className='absolute top-32 left-12 '>
        <h3 className='text-4xl mb-3 w-64'>{title}</h3>
        <p>{description}</p>

        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
      </div>
    </div>
  )
}

export default LrgeCard
