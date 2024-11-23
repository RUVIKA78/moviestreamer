import React from 'react'

const Button = ({type, name, onClick}) => {
  return (
      <button type={type} onClick={onClick} className='bg-red-600 text-white font-medium px-10 py-2 rounded-[5px] '>{ name}</button>
  )
}

export default Button