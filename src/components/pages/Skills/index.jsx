import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='text-custom-blue flex flex-col gap-16 px-8'>
      <h2 className='text-custom-light-blue text-5xl font-bold self-center'>Skills</h2>
      <div className='flex w-full justify-around flex-wrap gap-8'>
        <div className='w-100 rounded-2xl border-2 border-custom-blue flex flex-col px-8 py-4 gap-8'>
          <h4 className='text-4xl text-custom-blue self-center font-bold'>Soft skills</h4>
          <div className='text-2xl flex flex-wrap gap-8'>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Organisation</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Logical thinking</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Communication</p>
          </div>
        </div>
        <div className='w-100 rounded-2xl border-2 border-custom-blue flex flex-col px-8 py-4 gap-8'>
          <h4 className='text-4xl text-custom-blue self-center font-bold'>Hard skills</h4>
          <div className='text-2xl flex flex-wrap gap-8'>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>HTML5</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>CSS3</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>JavaScript</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>React.js</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Responsive Web Design</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Tailwind CSS</p>
          </div>
        </div>
        <div className='w-100 rounded-2xl border-2 border-custom-blue flex flex-col px-8 py-4 gap-8'>
          <h4 className='text-4xl text-custom-blue self-center font-bold'>Tools & Version Control</h4>
          <div className='text-2xl flex flex-wrap gap-8'>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Figma</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Git</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills