import React from 'react';
import WLogo from '/w-logo.webp'
import WesllenIcon from '../../../assets/wesllen-cpu-icon.webp';
import Resume from '../../../../Documents/wesllen_araujo_resume.pdf';
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
      <section id='home' className="flex font-bold w-full h-screen justify-between px-52 items-center">
        <div className='flex flex-col gap-4'>
          <h3 className='text-3xl text-custom-blue'>Hello, World!</h3>
          <h2 className='text-5xl text-custom-white'>I'm Wesllen do Carmo</h2>
          <h1 className='text-8xl text-custom-light-blue'>Front End <br /> Web Developer</h1>
          <div className='flex justify-between flex-wrap'>
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
          className='w-1/3'
        />
      </section>
      <div className='flex flex-col gap-16 mb-8'>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <footer className='border-t-2 px-8 py-4 border-custom-light-blue flex justify-between'>
        <a href='#home'>
          <img
            src={WLogo}
            alt="To arrow symbols with a 'W' letter in between."
            className='w-30'
          />
        </a>
        <div className='flex gap-8'>
          <a href='https://github.com/WesllenCarmo' target='_blank'><FaGithub className='text-5xl text-custom-white' /></a>
          <a href='https://www.linkedin.com/in/wesllen-araujo0907/' target='_blank'><FaLinkedin className='text-5xl text-custom-white' /></a>
          <a href='mailto:wesllenaraujo.developer@gmail.com' target='_blank'><SiGmail className='text-5xl text-custom-white' /></a>
        </div>
      </footer>
      <BackToTopButton />
    </div>
  );
};

export default Home;
