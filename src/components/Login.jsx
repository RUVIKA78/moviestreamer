import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import { API_END_POINT } from '../utils/constant';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../store/userslice';

const Login = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading=useSelector(store=>store.app.isLoading)
  const loginHandler = () => {
    setLogin(!login);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    const user = { email, password };
    try {
      const endpoint = login ? '/login' : '/signup';
      const response = await axios.post(`${API_END_POINT}${endpoint}`, user, 
        {
          header: {
            "Content-Type":"application/json",
          }, 
          withCredentials:true,
        }
      );
      // console.log(response);
      
      if (response.data.success) {
        toast.success(response.data.msg);
      }
      
      dispatch(setUser(response.data.existUser));
      
      
      setLogin(true);
      navigate('/browse');


    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    finally {
      dispatch(setLoading(false));
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <div className='w-full h-screen z-11 absolute flex justify-center items-center'>
        <div className='absolute'>
          <img src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg" alt="banner" />
        </div>

        <form onSubmit={submitHandler} className='absolute bg-black flex justify-center items-center z-10 flex-col p-16'>
          <h1 className='text-3xl text-white font-semibold'>{login ? "Login" : "Signup"}</h1>
          <div className='flex flex-col gap-2'>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              type="text" 
              name="email" 
              placeholder='Email or mobile number' 
            />
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              type="password" 
              name="password" 
              placeholder='Password' 
            />
          </div>
          <p className='text-white'>
            {login ? "New to Netflix?" : "Already have an account?"}
            <span className='cursor-pointer pl-2' onClick={loginHandler}>
              {login ? "Sign Up" : "Login"} 
            </span>
          </p>

          <Button type='submit' name="Submit" >
            {`${isLoading ? "Loading":login }`}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
