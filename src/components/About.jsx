import React from 'react'
import pic from './assets/police.jpg'

const About = () => {
  return (
    <div className='container'>
      <div className='w-full'>
        <img src={pic} alt='' className='w-full' />
      </div>
      <div className='p-10 space-y-6'>
        <h2 className='text-slate-500 text-3xl uppercase'>About Us</h2>
        <p></p>
        <div className='text-sm'>
          <p>
            The Nigeria Police Force is the principal law enforcement and the lead 
            security agency in Nigeria. Designated by the 1999 constitution as the 
            national police of Nigeria with exclusive jurisdiction throughout the 
            country, as at 2016 it has a staff strength of about 371,800.
          </p>
          <br />
          <p>
            Due to the insurgence and security threat in the country, the peace 
            and order of the country has been threaten, the Nigeria police 
            force (NPF) has been working very hard to restore the peace 
            and order of the country.
          </p>
          <br />
          <p>
            This is why this website is built, to help reduce the insurgence in 
            the country, to be able to assist the citizen and the citizen helping
            them to work efficiently by passing across information to them on time,
            to be able to stop those criminal and be able to restore peace and 
            other in the society.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About