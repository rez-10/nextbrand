import React from 'react'
import { color } from '../utils/utils'

function USPcard({heading , sunHeading , icon}) {
  return (
           <div className='flex flex-col gap-2 mt-2'>
             <div className={`box max-w-90 py-3 px-6 h-35 transition-all flex flex-col justify-between rounded hover:shadow-[0px_10px_48px_4px_#0466C850] hover:transition-all border-1 ${color.border}`}
             style={{
                background:`#${color.primary}30`,
             }}
             >
               <div>
                 <div className='flex items-center gap-2 justify-between'>
                   <p className='text-2xl transition-all hover:transition-all text-white/80'>{heading}</p>
                   <img src={`${icon}`} alt="vamnm" className='h-5'/>
                 </div>
                 <p className=' font-normal text-[16px] text-white/30 w-70'>{sunHeading}</p>
               </div>
               <p className='transition-all hover:transition-all hover:translate-x-2 w-fit text-blue-600 hover:text-blue-700 cursor-pointer'>know more</p>
             </div>
           </div>
  )
}

export default USPcard