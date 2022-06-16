import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Card = ({title, image}) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    height: '500px',
    backgroundSize: 'cover'
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  return (
    <div className='h-[500px] bg-contain' style={style}>
      <div className='bg-[#2b6777] relative h-full w-full bg-opacity-40 font-extrabold text-xl '>
          <motion.div 
            variants={container}
            initial='hidden'
            animate='show'
            transition={{ease: 'easeInOut', delay: 1, duration: 3}}
            className='absolute bottom-3 text-white space-y-5 p-3'
          >
            <motion.p className='uppercase text-5xl'>{title}</motion.p>
            <Link to={`/${title}`}>
              <motion.button className='border-2 border-white p-2'>Make a report</motion.button>
            </Link>
          </motion.div>
      </div>
    </div>
  )
}

export default Card