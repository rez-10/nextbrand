import React from 'react'
import { NavLink } from 'react-router'
import { motion } from 'motion/react'
import close from '../assets/close.png'
import ham from '../assets/ham.png'
import { useState } from 'react'


function Navbar() {

  const transition = {
    duration: 1,
  }
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <motion.header className='flex justify-between text-white/70 px-7 py-7 backdrop-blur-2xl'
      initial={{ opacity: 0, y: "-5rem" }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={transition}
    >
      <div className="logo text-xl font-bold" style={{ fontFamily: '"Orbitron", sans-serif' }}>next brand</div>
      {
        show ? <img src={close} alt="close" onClick={toggleShow} className='sm:hidden'/> : <img src={ham} alt="ham" onClick={toggleShow} className='sm:hidden'/> 
      }
      {console.log(show)}
      <div className={` -translate-x-7 overflow-hidden transition-all duration-1000 absolute top-[10vh] h-[50vh] w-full sm:hidden`}>
        <div className={` ${ show ?'':'translate-x-125'} transition-all duration-800 flex flex-col justify-center items-center bg-black text-3xl gap-10 h-full`}>
          <NavLink to={''}>Home</NavLink>
          <NavLink to={'about'}>About</NavLink>
          <NavLink to={'services'}>Services</NavLink>
          <NavLink to={'testimonials'}>Testimonials</NavLink>
          <button className='border-1 px-10 py-2 rounded border-blue-400/50 cursor-pointer bg-blue-300/20 text-amber-400/90'>contact</button>
        </div>
      </div>
      <nav className='hidden  sm:flex w-[25rem] justify-between'>
        <NavLink to={''}>Home</NavLink>
        <NavLink to={'about'}>About</NavLink>
        <NavLink to={'services'}>Services</NavLink>
        <NavLink to={'testimonials'}>Testimonials</NavLink>
      </nav>
      <button className=' sm:block hidden border-2 px-3 py-1 border-blue-100/30 cursor-pointer hover:scale-x-105 transition-all hover:transition-all hover:border-blue-400/40 hover:text-amber-300 rounded-xl font-medium'>contact</button>
    </motion.header>

  )
}

export default Navbar

