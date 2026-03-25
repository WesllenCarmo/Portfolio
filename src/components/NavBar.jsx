import React from 'react'
import { Link } from 'react-router-dom'
import WLogo from '/w-logo.webp'


const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>
          <img src={WLogo} alt="To arrow symbols with a 'W' letter in between." />
        </Link>
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/#about'>About me</Link>
        <Link to='/#skills'>Skills</Link>
        <Link to='/#projects'>Projects</Link>
        <Link to='/#contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar