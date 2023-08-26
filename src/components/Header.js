import React from 'react'
import logo from '../assets/images/agileLogo.png'
function Header() {
  return (
    <div className='w-full px-10 bg-gray-100 py-6 flex justify-between items-center' >
        <div className='h-[70px] '>
           <img src={logo} className='w-full h-full' />
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-8 uppercase items-center'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li className='p-3 bg-blue-600 text-[#fff] rounded-md capitalize'>Home</li>
          </ul>
        </div>
    </div>
  )
}

export default Header