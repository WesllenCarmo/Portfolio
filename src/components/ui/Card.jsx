import React from 'react'

const Card = ( {title, skills} ) => {
  return (
    <div className='w-100 rounded-2xl border-2 border-custom-blue flex flex-col px-8 py-4 gap-8 shadow-xl shadow-custom-light-blue'>
          <h3 className='text-4xl text-custom-blue self-center font-bold'>{title}</h3>
          <div className='text-2xl flex flex-wrap gap-8'>
            {skills.map((skill, index) => (
              <p key={index} className='border-2 border-custom-blue px-4 py-1 rounded-xl'>{skill}</p>
            ))}
          </div>
        </div>
  )
}

export default Card