import React from 'react'
import {footer as footerItems} from '../../utils/shit'
import FooterCell from './FooterCell'

const Footer = () => {
  return (
    <div className='flex p-10 bg-gray-100'>

      <div className='max-w-5xl mx-auto gap-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          footerItems.map(t => (
            <FooterCell footertem={t} key={t.title} />
          ))
        }
      </div>

    </div>
  )
}

export default Footer
