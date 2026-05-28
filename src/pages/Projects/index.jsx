import React from 'react';
import Project from '../../components/ui/Project';
import TattuuWebPreview from '../../assets/tattuu-preview.webp';
import WeatherWebPreview from '../../assets/weather-preview.webp';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [ t, i18n ] = useTranslation('global');

  return (
    <section role='region' id='projects' className='flex flex-col gap-16 text-custom-white px-8 lg:px-0'>
      <h2 className='text-5xl font-bold text-custom-light-blue self-center'>{t('projects.title')}</h2>
      <Project image={TattuuWebPreview}
        imageLabel={t('projects.project1.imageLabel')}
        title={t('projects.project1.title')}
        description={t('projects.project1.description')} 
        lists={[
          {
            name: t('projects.buttons.repository'),
            url: 'https://github.com/WesllenCarmo/Tattuu'
          },
          {
            name: t('projects.buttons.deploy'),
            url: 'https://wesllencarmo.github.io/Tattuu/'
          }
        ]}
        technologies={[
          t('skills.hardSkills.0'),
          t('skills.hardSkills.1'),
          t('skills.hardSkills.2'),
          t('skills.hardSkills.4'),
          t('skills.tools.tech.0'),
          t('skills.tools.tech.1'),
          t('skills.tools.tech.2'),
        ]}
      />
      <Project
        image={WeatherWebPreview}
        imageLabel={t('projects.project2.imageLabel')}
        title={t('projects.project2.title')}
        description={t('projects.project2.description')} 
        lists={[
          {
            name: t('projects.buttons.repository'),
            url: 'https://github.com/WesllenCarmo/forecast-DevClub'
          },
        ]}
        lists={[
          {
            name: t('projects.buttons.repository'),
            url: 'https://github.com/WesllenCarmo/forecast-DevClub'
          }
        ]}
        technologies={[
          t('skills.hardSkills.0'),
          t('skills.hardSkills.1'),
          t('skills.hardSkills.2'),
          t('skills.hardSkills.3'),
          t('skills.hardSkills.4'),
          t('skills.tools.tech.0'),
          t('skills.tools.tech.1'),
          t('skills.tools.tech.2'),

        ]}
      />
    </section>
  )
}

export default Projects