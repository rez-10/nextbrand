import React from 'react'
import { color } from '../../utils/utils'
import van from '../../assets/clockwhite.png'
import USPcard from '../../components/USPcard'
import landingAsset from '../../assets/earth.jpg'
import { motion, scale } from 'motion/react'
import { transition } from '../../utils/utils'

function H1() {

  return (
    <motion.div className='h-[102vh] text-white font-medium' style={{
      background: `url('${landingAsset}')`,
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat'
      // background: 'radial-gradient(circle, rgba(12, 55, 99, 1) 0%, rgba(6, 0, 10, 1) 100%)',
    }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={transition}
    >
      <div className='translate-y-[12vh] p-4 md:p-10 md:text-center'>
        <div>
          <motion.h1 className='text-6xl font-bold sm:text-7xl lg:text-8xl lg:font-extrabold' style={{
            fontFamily: '"Orbitron", sans-serif',
          }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            Create, Connect, Thrive Powered by </motion.h1>
          <motion.p className='font-medium min-w-80 text-blue-100/30 mt-5 sm:text-xl lg:text-2xl'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
          >Ignite Your Growth with Custom Digital Strategies.</motion.p>
        </div>
        <motion.button className={` border-1 border-white/30 hover:border-blue-400/30 hover:text-amber-400 cursor-pointer text-white/40 font-bold w-full mt-5 lg:mt-25 hover:backdrop-blur-2xl px-6 py-3 rounded-xl sm:w-120 sm:text-xl`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
        >enquire</ motion.button>

      </div>
    </motion.div>
  )
}

export default H1