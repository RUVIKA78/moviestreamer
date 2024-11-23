import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const MovieContainer = () => {
  const movie = useSelector((store)=>store.movie)
  // if (!movie) return;

  return (
    <div className='bg-black'>
      <MovieList title="Now Playing Movies" movies={movie.nowPlayingMovies || []} />
      <MovieList title="Popular Movies" movies={movie.popularMovies || []} />
      <MovieList title="Top Rated Movies" movies={movie.topRatedMovies || []} />
      <MovieList title="Upcoming Movies" movies={movie.upcomingMovies || []} />

    </div>
  )
  
}

export default MovieContainer