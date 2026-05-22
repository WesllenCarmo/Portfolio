import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [ t, i18n ] = useTranslation('global');
  return (
    <section role='region' id='contact' className='flex flex-col gap-16 text-custom-white px-3 lg:px-0'>
      <h2 className='text-custom-light-blue font-bold text-5xl self-center'>{t('contact.title')}</h2>
      <form method='POST' role='form' action="https://formsubmit.co/developer.wesllen@gmail.com" className='bg-custom-blue-modified font-bold text-2xl w-full lg:w-2/3 self-center flex flex-col px-8 py-8 gap-8 rounded-2xl'>
        <h3 className='text-4xl font-bold'>{t('contact.formTitle')}</h3>
        <div className='flex flex-col lg:flex-row w-full justify-between gap-8'>
          <div className='flex flex-col w-full lg:w-1/2 gap-2'>
            <label htmlFor="firstName">{t('contact.name.first')}</label>
            <input type="text" name="firstName" id="firstName" required className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2'/>
            <span className='text-xl opacity-50'>{t('contact.name.firstNameLabel')}</span>
          </div>
          <div className='flex flex-col w-full lg:w-1/2 gap-2'>
            <label htmlFor="lastName">{t('contact.name.last')}</label>
            <input type="text" name="lastName" id="lastName" required className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2'/>
            <span className='text-xl opacity-50'>{t('contact.name.lastNameLabel')}</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">{t('contact.email.text')}</label>
          <input type="email" name="email" id="email" required className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2'/>
          <span className='text-xl opacity-50'>{t('contact.email.label')}</span>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="message">{t('contact.message.text')}</label>
          <textarea name="message" id="message" rows='5' required  className='font-normal bg-custom-white text-custom-dark-blue rounded-md px-2 py-2 resize-none'></textarea>
          <span className='text-xl opacity-50'>{t('contact.message.label')}</span>
        </div>
        <button type="submit" aria-label='Click here to send your message to developer.wesllen@gmail.com' className='text-custom-light-blue border-4 border-custom-light-blue w-fit self-center px-12  lg:px-32 py-4 text-3xl rounded-xl hover:bg-custom-light-blue hover:text-custom-blue-modified transition duration-400 cursor-pointer'>{t('contact.button')}</button>
      </form>
    </section>
  )
}

export default Contact