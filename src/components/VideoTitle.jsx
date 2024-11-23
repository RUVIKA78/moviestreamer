import React from 'react'
import { CgPlayButtonO } from "react-icons/cg";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title, overview}) => {
  return (
      <div className='absolute w-full h-screen justify-center items-start flex flex-col text-white'>
      <h1 className=' text-7xl font-bold  '>{ title}</h1>
      <p className='text-xl w-[30%] '>{overview}</p>

      <div className='flex text-2xl justify-center items-center gap-2'>
        
        <button className='flex justify-center items-center gap-1'>
          
          Play<CgPlayButtonO/>
        </button>
        <button className='flex justify-center items-center gap-1'>
         
          Watch More <MdInfoOutline/>
        </button>

          </div>

    </div>
  )
}

export default VideoTitle