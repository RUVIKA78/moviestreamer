import React from 'react'
import Body from './components/Body'
import {BrowserRouter,Route,Routes } from "react-router-dom"
import Login from './components/Login'
import {Toaster} from "react-hot-toast"
import Browse from './components/Browse'

const App = () => {
  return (
    <div>
      
      <Body />
      <Toaster/>
      <BrowserRouter>
        <Routes>
                  {/* <Route path="/login" element={<Login/> } /> */}
                  <Route path="/" element={<Login/> } />
                  <Route path="/browse" element={<Browse/> } />
        </Routes>
      </BrowserRouter>

</div>
  )
}

export default App