import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie = useSelector((store)=>store.movie?.nowPlayingMovies)
  if (!movie) return;
  const { overview, id, title } = movie[0];
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
          <VideoBg movieId={id}  />
    </div>
  )
}

export default MainContainer