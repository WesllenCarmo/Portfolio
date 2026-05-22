import React from 'react';
import TattuuWebPreview from '../../../assets/tattuu-preview.webp';
import WeatherWebPreview from '../../../assets/weather-preview.webp';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [ t, i18n ] = useTranslation('global');

  return (
    <section role='region' id='projects' className='flex flex-col gap-16 text-custom-white px-8 lg:px-0'>
      <h2 className='text-5xl font-bold text-custom-light-blue self-center'>{t('projects.title')}</h2>
      <div className='flex w-full justify-center gap-12 lg:gap-24 flex-col lg:flex-row'>
        <img
          src={TattuuWebPreview}
          alt={t('projects.project1.imageLabel')}
          className='w-9/10 lg:w-200 shadow-xl shadow-custom-light-blue self-center lg:self-auto'
        />
        <div className='flex flex-col w-full lg:w-2/5 gap-6'>
          <h2 className='text-4xl text-custom-blue font-bold'>Tattuu</h2>
          <p className='text-2xl'>{t('projects.project1.description')}</p>
          <ul className='list-disc ml-8 text-2xl flex flex-col gap-4'>
            <li>{t('projects.buttons.repository')} <a href='https://github.com/WesllenCarmo/Tattuu' className='break-all text-xl lg:text-2xl underline hover:text-custom-blue transition duration-400'>https://github.com/WesllenCarmo/Tattuu</a></li>
            <li>{t('projects.buttons.deploy')} <a href='https://wesllencarmo.github.io/Tattuu/' className='break-all text-xl lg:text-2xl underline hover:text-custom-blue transition duration-400'>https://wesllencarmo.github.io/Tattuu/</a></li>
          </ul>
          <div className='text-2xl flex flex-wrap gap-6 text-custom-blue'>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>HTML5</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>CSS3</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>JavaScript</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Figma</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Git</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>GitHub</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>{t('skills.hardSkills.0')}</p>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center gap-12 lg:gap-24 flex-col lg:flex-row'>
        <img
          src={WeatherWebPreview}
          alt={t('projects.project2.imageLabel')}
          className='w-9/10 lg:w-200 shadow-xl shadow-custom-light-blue self-center lg:self-auto'
        />
        <div className='flex flex-col w-full lg:w-2/5 gap-6'>
          <h2 className='text-4xl text-custom-blue font-bold'>Forecast-DevClub</h2>
          <p className='text-2xl'>{t('projects.project2.description')}</p>
          <ul className='list-disc ml-8 text-2xl flex flex-col'>
            <li>{t('projects.buttons.repository')} <a href='https://github.com/WesllenCarmo/forecast-DevClub' className='break-all underline hover:text-custom-blue transition duration-400'>https://github.com/WesllenCarmo/forecast-DevClub</a></li>
          </ul>
          <div className='text-2xl flex flex-wrap gap-6 text-custom-blue'>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>ReactJS</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>HTML5</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>CSS3</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>JavaScript</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>Git</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>GitHub</p>
            <p className='border-2 border-custom-blue px-4 py-1 rounded-xl'>{t('skills.hardSkills.0')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects