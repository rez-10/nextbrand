import React from 'react'
import ServicesCard from '../../components/ServicesCard'
import {color} from '../../utils/utils'
import webDevWhite100 from '../../assets/webDevWhite100.png'
import graphic from '../../assets/graphic.png'
import marketing from '../../assets/marketing.png'
import SEO from '../../assets/SEO.png'
import UIUX from '../../assets/UIUX.png'
import database from '../../assets/database.png'
import { motion } from 'motion/react'
import { transition } from '../../utils/utils'

function H3() {
  return (
    <div className='h-[fit] py-20 text-white' style={{
       background:'radial-gradient(circle,rgba(9, 49, 89, 1) 6%, rgba(8, 31, 60, 1) 20%, rgba(6, 0, 10, 1) 37%)',
    }}>
        <motion.h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center font-bold'
        initial={{opacity:0,y:-40}}
        whileInView={{opacity:1,y:0}}
        transition={transition}
        >Services</motion.h1>
        <motion.p className='text-3xl text-center text-white/40 mt-3'
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={transition}
        >"We provide the variety of services for your variety of needs."</motion.p>

        <div className='flex items-center gap-5 mt-10 xl:mt-20 flex-wrap justify-center md:px-10'>
         <ServicesCard
          iconURL={`${webDevWhite100}`}
          bgColor={'#2854C5'}
          textColor={'white'}
          iconBgColor={'#F19E39'}
          title={'Web Development'}
          desciption={'Weaving zesty websites to skyrocket your biz with pizzazz!'}
         />
         <ServicesCard
          iconURL={`${graphic}`}
          bgColor={'#F19E39'}
          textColor={'white'}
          iconBgColor={'#2854C5'}
          title={'Graphics Designing'}
          desciption={'Sprinkling vibrant visuals to ignite your brands growth with flair!'}
         />
         <ServicesCard
          iconURL={`${marketing}`}
          bgColor={'#2854C5'}
          textColor={'white'}
          iconBgColor={'#F19E39'}
          title={'Social media Marketing'}
          desciption={'Igniting biz growth with sizzly social media buzz and charm!'}
         />
         <ServicesCard
          iconURL={`${SEO}`}
          textColor={'white'}
          iconBgColor={'#F19E39'}
          title={'Search Engine Optimization'}
          desciption={'Rocketing your biz to search stardom with snappy SEO magic!'}
         />
         <ServicesCard
          iconURL={`${UIUX}`}
          textColor={'white'}
          iconBgColor={'#F19E39'}
          title={'UI/UX designing'}
          desciption={'Swirling delightful interfaces to dance your growth to new heights!'}
         />
         <ServicesCard
          iconURL={`${database}`}
          textColor={'white'}
          iconBgColor={'#F19E39'}
          title={'Database'}
          desciption={'Forging growth with zippy data wizardry in sleek digital vaults!'}
         />
        </div>
    </div>
  )
}

export default H3