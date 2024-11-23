import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useMoviesApi from '../hooks/useMoviesApi';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Search from './Search';

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const toggleSearch = useSelector((store) => store.movie.toggleSearch);

  useMoviesApi();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [])
  
  

  return (
      <div>
      <Header />
      <div>
        {toggleSearch ? <Search /> : <>
        
          <MainContainer />
          <MovieContainer/>
        </>}
      
      </div>
    </div>
  )
}

export default Browse