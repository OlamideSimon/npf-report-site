import React from 'react'

const Card = ({title, description, image}) => {
  return (
    <div className='flex h-60'>
        <div className='bg-[#2b6777] flex-1 p-10 text-white'>
            <p className='text-2xl capitalize'>{title}</p>
            <p>{description}</p>
        </div>
        <div className='bg-[#c8d8e4] p-10 flex-1 flex justify-center'>
            <img src={image} alt='' draggable={false} className='' />
        </div>
    </div>
  )
}

export default Card