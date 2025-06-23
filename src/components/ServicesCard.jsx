import React from 'react'
import tiltedArrow from '../assets/tiltedArrow.png'
import { motion } from 'motion/react'
import { transition } from '../utils/utils'
function ServicesCard({ bgColor, textColor, iconURL, iconBgColor, title, desciption, border }) {
    return (
        <motion.div className={`p-5 flex flex-col justify-around backdrop-blur-4xl rounded h-60 min-w-60 max-w-100 border-l-1 border-b-2 border-white/30 hover:translate-3d transition-all hover:transition-all hover:-translate-y-2 hover:translate-x-2 hover:scale-95 cursor-pointer `} style={{
            background: bgColor,
            color: textColor,
        }}
        initial={{opacity:0 ,y:50}}
        whileInView={{opacity:1, y:0}}
        transition={transition}
        viewport={{
          amount:0.5,
        }}
        >
            <div className='flex flex-col'>
                <img src={`${iconURL}`} alt="" className='h-10 p-1 w-10 rounded-full' style={{
                    background: iconBgColor,
                }} />
                <motion.h1 className='text-3xl font-bold mt-2'
                initial={{opacity:0 , y:10}}
                whileInView={{opacity:1 , y:0}}
                transition={{
                    duration:0.9
                }}
                >{title}</motion.h1>
            </div>

            <p className='text-blue-50/50 font-medium'>{desciption}</p>
            <div className='flex justify-end'>
                <img src={`${tiltedArrow}`} alt="" className='h-6 w-6 p-1 rounded-full transition-all cursor-pointer rotate-45 hover:rotate-0 hover:h-7 hover:w-7 hover:transition-all' style={{
                    background: iconBgColor,
                }} />
            </div>
        </motion.div>
    )
}

export default ServicesCard