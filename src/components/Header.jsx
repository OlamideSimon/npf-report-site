import React from 'react'
import { HiPhone } from 'react-icons/hi'
import { RiInstagramFill, RiFacebookFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import logo from './assets/logo.png'

const Header = () => {
  return (
    <>
        <div className='flex text-white bg-[#2b6777] justify-center space-x-10 text-3xl p-8'>
            <RiInstagramFill className='icons' />
            <RiFacebookFill className='icons' />
            <RiYoutubeFill className='icons' />
            <RiTwitterFill className='icons' />
        </div>
        <div className='sm:flex sm:justify-between p-4 text-center space-y-3 items-center'>
            <div className='flex items-center justify-center'>
                <img alt='' src={logo} className='w-11' />
                <p className='uppercase font-bold'>npf crime report site</p>
            </div>
            <div className='flex items-center justify-center text-[#2b6777] space-x-2'>
                <HiPhone />
                <button className='uppercase'>Emergency Numbers</button>
            </div>
        </div>
        <div className='bg-[#2b6777] text-white flex items-center justify-center'>
            <NavLink to='/' className={({isActive}) => isActive ? 'link bg-[#f2f2f2] text-[#2b6777]': 'link'}>
                <p>Home</p>
            </NavLink>
            <NavLink to='about' className={({isActive}) => isActive ? 'link bg-[#f2f2f2] text-[#2b6777]': 'link'}>
                <p>About</p>
            </NavLink>
        </div>
    </>
  )
}

export default Header;