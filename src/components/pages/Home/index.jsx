import React from 'react';
import WLogo from '/w-logo.webp'
import WesllenIcon from '../../../assets/wesllen-cpu-icon.webp';
import Resume from '../../../../Documents/wesllen_resume.pdf';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import BackToTopButton from '../BackToTopButton';

const Home = () => {
  return (
    <div>
      <section role='banner' id='home' className="flex flex-col lg:flex-row lg:justify-around lg:items-center py-20 gap-24 lg:gap-0 lg:py-32 font-bold w-full items-center flex-wrap">
        <div className='flex flex-col gap-4 w-fit items-center lg:items-start'>
          <h3 className='text-2xl lg:text-3xl text-custom-blue'>Hello, World!</h3>
          <h2 className='text-3xl lg:text-5xl text-custom-white'>I'm Wesllen do Carmo</h2>
          <h1 className='text-5xl text-center lg:text-start lg:text-8xl text-custom-light-blue'>Front End <br /> Web Developer</h1>
          <div className='flex flex-col lg:flex-row gap-8 justify-between items-center flex-wrap md:gap-8'>
            <a href='/#contact' className='bg-custom-light-blue border-4 border-custom-light-blue text-custom-dark-blue text-3xl font-bold px-10 py-2 rounded-xl transition duration-400 hover:bg-custom-dark-blue hover:text-custom-light-blue'>
              Contact me
            </a>
            <a href={Resume} download className='border-custom-light-blue border-4 text-3xl text-custom-light-blue font-bold px-6 py-1 rounded-xl hover:bg-custom-light-blue hover:text-custom-dark-blue transition duration-400'>
              Download résumé
            </a>
          </div>
        </div>
        <img
          src={WesllenIcon}
          alt="Wesllen image: A brown man with black glasses, dark brown eyes and coily hair."
          className='w-90 md:w-130 lg:w-150'
        />
      </section>
      <div role='main' className='flex flex-col gap-16 mb-8'>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <footer role='social media links' className='border-t-2 px-8 py-4 border-custom-light-blue flex justify-between'>
        <a href='#home'>
          <img
            src={WLogo}
            alt="To arrow symbols with a 'W' letter in between."
            className='w-30'
          />
        </a>
        <div className='flex gap-8'>
          <a href='https://github.com/WesllenCarmo' target='_blank' aria-label="Click here to enter Wesllen's GitHub profile."><FaGithub className='text-3xl text-custom-white' /></a>
          <a href='https://www.linkedin.com/in/wesllen-araujo0907/' target='_blank' aria-label="Click here to enter Wesllen's LinkedIn profile."><FaLinkedin className='text-3xl text-custom-white' /></a>
          <a href='mailto:wesllenaraujo.developer@gmail.com' target='_blank' aria-label="Click here to email Wesllen."><SiGmail className='text-3xl text-custom-white' /></a>
        </div>
      </footer>
      <BackToTopButton />
    </div>
  );
};

export default Home;
