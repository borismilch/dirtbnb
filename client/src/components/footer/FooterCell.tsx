import React from 'react'

const FooterCell: React.FC<{footertem: {title: string, items: string[]}}> = ({footertem}) => {
  return (
    <div className='flex flex-col gap-2'>
      <h4 className='text-lg font-semibold mb-1'>{footertem.title}</h4>

      <>
        {
          footertem.items.map(t => (
            <span className='text-gray-500 truncate' key={t + (Math.random() + '')}>{t}</span>
          ))
        }
      </>

    </div>
  )
}

export default FooterCell
