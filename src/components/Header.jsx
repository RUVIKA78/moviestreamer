import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import axios from 'axios';
import { setUser } from '../store/userslice';
import { setToggleSearch } from '../store/movieslice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Header = () => {
  const user = useSelector((store) => store.app.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
const toggleSearch=useSelector((store)=>store.movie.toggleSearch)
  const logoutHandler = async () => {
    try {
      const response = await axios.get(`${API_END_POINT}/logout`)

      if (response.data.success) {
        toast.success(response.data.message)
      }
      dispatch(setUser(user));

      navigate('/');

    } catch (error) {
      console.log(error);

    }
  }

  const searchHandler =  () => {
    dispatch(setToggleSearch());
  }

  return (
    <div className='flex absolute items-center px-6 justify-between w-full bg-gradient-to-b from-black'>
      <img className='w-56 z-10' src="./netflixlogo.png" alt="logo" />

      {
        user && (
          <div className='flex items-center z-10 text-white '>
            <FaUserCircle />

            <h1>{user.email}</h1>
            <div className='ml-4 '>
              <Button type='submit' onClick={logoutHandler} name="Logout" />
              <Button name={toggleSearch ? "Home" : "Search"} onClick={searchHandler}/>
            </div>

          </div>
        )
      }


    </div>
  )
}

export default Header