import React from 'react'
import logo from '../assets/images/agileLogo.png'
function Header() {
  return (
    <div className='w-full py-7 flex justify-between items-center' >
        <div className='h-[70px] '>
           <img src={logo} className='w-full h-full' />
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-8 uppercase items-center'>
            <li>Home</li>
            <li>Book Office</li>
            <li>Who are We</li>
            <li>Contact</li>
            <li className='p-3 bg-[#6A71F1] text-[#fff] rounded-md capitalize'>Book Office</li>
          </ul>
        </div>
    </div>
  )
}

export default Header