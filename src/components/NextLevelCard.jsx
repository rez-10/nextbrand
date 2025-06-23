// import React from 'react'
// import './style/next.css'

// function NextLevelCard({ bgImg }) {
//     return (
//         <div className=' card1 relative'>
//             <div className='card h-100 sm:h-120 min-w-50 max-w-90 px-3 py-6 hover:cursor-pointer' style={{
//                 background: `url('${bgImg}')`,
//                 backgroundPosition: 'center',
//             }}>
//                 <div className='text-left h-full flex flex-col justify-between'>
//                     <h1 className='text-4xl font-bold'>Ontime Product Delivary</h1>
//                     <p className='text-xl font-medium'>we ensure our clients will get the best in time</p>
//                     <p className='text-amber-500'>Know more</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NextLevelCard

import React, { useState } from 'react';
import './style/next.css'; // Keep minimal CSS for non-blur styles, if needed
import { motion } from 'motion/react';
import { transition } from '../utils/utils';

function NextLevelCard({ bgImg }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card1 relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 'min-content', // Adjust to fit your design
        height: '100%',
      }}
    >
      <motion.div
        className="card transition-all hover:scale-95 border-1 rounded-xl border-blue-300/30 shadow-  h-100 sm:h-120 min-w-90 overflow-hidden max-w-200 px-3 py-6 hover:cursor-pointer"
        style={{
          position: 'relative', // Ensure content is above background
          zIndex: 1, // Keep content above blurred background
        }}
        initial={{opacity:0 , y:100 , x:50}}
        whileInView={{opacity:1 , y:0 , x:0}}
        transition={transition}
      >
        {/* Background div for blur effect */}
        <div
          className='min-w-90 max-w-200 h-100 sm:h-120'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            background: `url('${bgImg}')`,
            backgroundPosition: 'center',
            backgroundSize: isHovered ? '100rem' : 'cover', // Retain your zoom effect
            filter: isHovered ? 'blur(50px)' : 'none', // Toggle blur
            transition: 'filter 0.2s ease, background-size 0.4s ease', // Smooth transitions
            zIndex: -1, // Place behind content
          }}

        ></div>
        {/* Content */}
        <div className="text-left h-full flex flex-col justify-between">
          <h1 className="text-4xl font-bold">Ontime Product Delivery</h1>
          <p className="text-xl font-medium text-blue-200/30">
            We ensure our clients get the best in time
          </p>
          <p className="text-amber-500/70">Know more</p>
        </div>
     </motion.div>
    </div >
  );
}

export default NextLevelCard;