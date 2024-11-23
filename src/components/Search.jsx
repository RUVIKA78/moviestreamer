import React from 'react'
import Button from './Button'

const Search = () => {
  return (
      <div className=' w-full min-h-screen flex justify-center items-center'>
          <form action="">
              <div className=' flex w-[100%] justify-between shadow-lg shadow-slate-700 border-2 border-gray-600  bg-black p-7'>
              <input className='rounded-3xl outline-none border-2 px-2 py-1 w-full ' type="text" placeholder='search movies, tv shows' />
              <Button name="Search"/>
         </div>
          </form>
    </div>
  )
}

export default Search