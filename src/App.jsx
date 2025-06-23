import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

function App() {
  return (
    <>
     <div className='relative'>
      <div className='sticky top-0 z-1'><Navbar /></div>
      <div className='bg-black -translate-y-[10vh]'><Outlet></Outlet></div>
      <div className='-mt-22'>
        <Footer></Footer>
      </div>
     </div>
    </>
  )
}

export default App