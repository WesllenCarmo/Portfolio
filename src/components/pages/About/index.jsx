import React from 'react'

const About = () => {
  return (
    <section role='general information' id='about' className='flex w-full flex-col items-center gap-16 px-8'>
      <h2 className='text-custom-light-blue text-5xl font-bold'>About Me</h2>
      <div className='flex flex-col justify-around gap-16 text-custom-white text-3xl lg:flex-row lg:justify-around'>
        <p className='w-full lg:w-1/3'>I'm a Front End Web Developer and also a Computer Network Technician who is passionate about <span className='text-custom-blue'>understanding & building system</span>.</p>
        <p className='w-full lg:w-1/3'>Besides, I'm an exchange student of PGM (Programa Ganhe o Mundo), which is responsible for taking me to Vancouver (Canada) in order to improve my <span className='text-custom-blue'>English skills</span>.</p>
      </div>
    </section>
  )
}

export default About