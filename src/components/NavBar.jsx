import React from 'react'
import { Link } from 'react-router-dom'
import WLogo from '/w-logo.webp'


const NavBar = () => {
  return (
    <nav className='flex justify-between w-full bg-custom-dark-blue text-custom-white items-center py-4 px-16'>
      <div>
        <Link to='/'>
          <img
          src={WLogo}
          alt="To arrow symbols with a 'W' letter in between."
          className='w-30'
          />
        </Link>
      </div>
      <div className='flex gap-16 text-2xl'>
        <Link to='/' className='hover:text-custom-blue transition duration-300'>Home</Link>
        <Link to='/#about' className='hover:text-custom-blue transition duration-300'>About me</Link>
        <Link to='/#skills' className='hover:text-custom-blue transition duration-300'>Skills</Link>
        <Link to='/#projects' className='hover:text-custom-blue transition duration-300'>Projects</Link>
        <Link to='/#contact' className='hover:text-custom-blue transition duration-300'>Contact</Link>
      </div>
      
    </nav>
    
  )
}

export default NavBar