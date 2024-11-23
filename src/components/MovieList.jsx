import React from 'react'
import MovieCard from './MovieCard'
import { baseImageUrl } from '../utils/constant'

const MovieList = ({title, movies}) => {
  
  return (
      <div>
      <h1 className='text-3xl text-white font-medium'>{title}</h1>
      <div>
        {/* <div className='w-screen flex flex-nowrap justify-center overflow-hidden no-scrollbar overflow-x-auto items-center gap-3'> */}
          <div className='flex items-center  min-w-max justify-center overflow-hidden no-scrollbar overflow-x-auto '>
          {
            movies.length > 0 ? (
              movies.map((movie) => {
                return <MovieCard
                  key={movie.id}
                  path={`${baseImageUrl}${movie.poster_path}`}
                />
              }
              )
            ) : (
              <p>no movies available</p>
            )
            
          }
          
        </div>
      </div>
          
    </div>
  )
}

export default MovieList