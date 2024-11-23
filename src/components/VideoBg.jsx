import React from 'react'
import useMovieId from '../hooks/useMovieId'
import { useSelector } from 'react-redux';

const VideoBg = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie.trailer);

  useMovieId(movieId);

  return (
    <div className='w-full '>
      <iframe
        className='w-full aspect-video'
        src={`https://www.youtube.com/embed/${trailer.key}?si=NOIZN-xCFh4AjLTrautoplay=1&mute=1`} title="YouTube video player"
        frameborder="0" allowfullscreen>

      </iframe>
    </div>
  )
}

export default VideoBg