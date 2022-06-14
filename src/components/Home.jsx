import React from 'react'
import { crimes } from '../crimeData'
import mopol from './assets/mopol.jpg'
import Card from './Card'

const Home = () => {
  return (
    <div>
        <img src={mopol} alt='' />
        <div className='p-10'>
          <p>
            Crimes in Nigeria are investigated by the Nigerian
            Police. With Nigeria ranking 17th among the least 
            peaceful countries in the world, 
            the Police is willing to make things better for the 
            citizens.
          </p>
          <div className='uppercase italic text-center p-3'>
            <q>The Police is your friend</q>
          </div>
        </div>
        <div className='space-y-2'>
          {crimes.map(({name, image, description}, index) => (
            <Card 
              key={index}
              title={name}
              description={description}
              image={image}
            />
          ))}
        </div>
    </div>
  )
}

export default Home