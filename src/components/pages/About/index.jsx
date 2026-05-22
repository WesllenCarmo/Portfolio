import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [ t, i18n ] = useTranslation('global');
  return (
    <section role='region' id='about' className='flex w-full flex-col items-center gap-16 px-8'>
      <h2 className='text-custom-light-blue text-5xl font-bold'>{t('about.title')}</h2>
      <div className='flex flex-col justify-around gap-16 text-custom-white text-3xl lg:flex-row lg:justify-around'>
        <p className='w-full lg:w-1/3'>{t('about.description1.text')} <span className='text-custom-blue'>{t('about.description1.span')}</span>.</p>
        <p className='w-full lg:w-1/3'>{t('about.description2.text')} <span className='text-custom-blue'>{t('about.description2.span')}</span>.</p>
      </div>
    </section>
  )
}

export default About