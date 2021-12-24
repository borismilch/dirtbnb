import React, { ChangeEvent } from 'react'

const Input: React.FC<{label: string, name: string, value: string, onChange: (e:ChangeEvent<HTMLInputElement>) => void}> = ({label, name, value, onChange}) => {
  return (

    <div className="relative z-0 w-full mb-5">
    <input
      type="text"
      name={name}
      placeholder=" "
      onChange={onChange}
      value={value}
      required
      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
    />
    <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter {label}</label>
    <span className="text-sm text-red-600 hidden" id="error">Name is {label}</span>
  </div>

  )
}

export default Input
