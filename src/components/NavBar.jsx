import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WLogo from '/w-logo.webp'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {

  const [ isSmallScreen, setIsSmallScreen ] = useState(window.innerWidth < 850)
  const [ isOpen, setIsOpen ] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 850)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const links = [
    { label: 'Home', to: '/', type: 'link' },
    { label: 'About me', to: '/#about', type: 'anchor' },
    { label: 'Skills', to: '/#skills', type: 'anchor' },
    { label: 'Projects', to: '/#projects', type: 'anchor' },
    { label: 'Contact', to: '/#contact', type: 'anchor' }
  ]

  const handleNavClick = (to) => {
    setIsOpen(false)
    const id = to.split('#')[1]
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
  <nav role='navigation' className='flex flex-col w-full border-b-2 border-custom-light-blue text-custom-white py-4 px-16'>
    {isSmallScreen ? (
      <>
        {/* Top bar: logo + hamburger */}
        <div className='flex w-full justify-between items-center'>
          <Link to='/'>
            <img
              src={WLogo}
              alt="To arrow symbols with a 'W' letter in between."
              className='w-30'
            />
          </Link>
          <button aria-label="Click here to toggle the navigation menu's button." onClick={() => setIsOpen(!isOpen)} className='text-custom-light-blue text-7xl hover:text-custom-blue cursor-pointer transition duration-400'>
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Dropdown menu items */}
        {isOpen && (
          <div className='flex flex-col items-center gap-6 py-6 text-2xl'>
            {links.map(({ label, to, type }) =>
              type === 'link'
                ? <Link key={label} to={to} onClick={() => setIsOpen(false)} className='hover:text-custom-blue transition duration-400'>{label}</Link>
                : <a key={label} href={to} onClick={() => handleNavClick(to)} className='hover:text-custom-blue transition duration-400'>{label}</a>
            )}
          </div>
        )}
      </>
    ) : (
      <div className='flex w-full justify-between items-center'>
        <Link to='/'>
          <img
            src={WLogo}
            alt="To arrow symbols with a 'W' letter in between."
            className='w-30'
          />
        </Link>
        <div className='flex gap-10 text-2xl'>
          {links.map(({ label, to, type }) =>
            type === 'link'
              ? <Link key={label} to={to} className='hover:text-custom-blue transition duration-400'>{label}</Link>
              : <a key={label} href={to} className='hover:text-custom-blue transition duration-400'>{label}</a>
          )}
        </div>
      </div>
    )}
  </nav>
)
}

export default NavBar