import React from 'react'
import p2a1 from '../../assets/p2a1.jpg'
import p2a2 from '../../assets/p2a2.jpg'
import p2a3 from '../../assets/p2a3.jpg'
import spiral from '../../assets/spiral.jpg'
import pink from '../../assets/pink.jpg'
import hand from '../../assets/hand.jpg'
import NextLevelCard from '../../components/NextLevelCard'
import { motion } from 'motion/react'
import { transition } from '../../utils/utils'

function H2() {
  return (
    <div className='h-fit mt-5 sm:p-5 bg-black text-white'>
      <motion.h1 className='text-3xl font-bold min-w-80 max-w-200 px-5 m-auto text-center sm:mt-5 sm:text-5xl lg:text-6xl'
      initial={{opacity:0 , y:-100}}
      whileInView={{opacity:1 , y:0}}
      transition={transition}
      >We can take your Business to the <span className='text-blue-600 font-bold'>Next Level</span></motion.h1>

      <div className='flex flex-col items-center gap-2 sm:flex-row mt-10 p-2 justify-around'>
        <NextLevelCard
          
        />
        <NextLevelCard 
         
        />
        <NextLevelCard
         
        />
      </div>


    </div>

  )
}

export default H2