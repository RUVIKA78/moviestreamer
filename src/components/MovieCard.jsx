import React from 'react'

const MovieCard = ({path}) => {
  return (
      <div className='flex relative h-64 w-52 justify-center items-center '>
          <img className='object-contain w-full h-full ' src={path} alt="banner" />
    </div>
  )
}

export default MovieCard