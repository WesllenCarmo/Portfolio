import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col gap-16 text-custom-white'>
      <h2 className='text-custom-light-blue font-bold text-5xl self-center'>Contact</h2>
      <form method='POST' action="https://formsubmit.co/wesllenaraujo.developer@gmail.com" className='bg-custom-blue-modified font-bold text-2xl w-2/3 self-center flex flex-col px-8 py-8 gap-8 rounded-2xl'>
        <h3 className='text-4xl font-bold'>Get in touch</h3>
        <div className='flex w-full justify-between gap-8'>
          <div className='flex flex-col w-1/2 gap-2'>
            <label htmlFor="firstName">First name:</label>
            <input type="text" name="firstName" id="firstName" required className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2'/>
            <span className='text-xl opacity-50'>Enter your first name.</span>
          </div>
          <div className='flex flex-col w-1/2 gap-2'>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="lastName" id="lastName" required className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2'/>
            <span className='text-xl opacity-50'>Enter your last name.</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" id="email" required className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2'/>
          <span className='text-xl opacity-50'>Enter your email address.</span>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" rows='5' required  className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2 resize-none'></textarea>
          <span className='text-xl opacity-50'>Enter your message.</span>
        </div>
        <button type="submit" className='text-custom-light-blue border-4 border-custom-light-blue w-fit self-center px-32 py-4 text-3xl rounded-xl hover:bg-custom-light-blue hover:text-custom-blue-modified transition duration-400 cursor-pointer'>Send message</button>
      </form>
    </section>
  )
}

export default Contact