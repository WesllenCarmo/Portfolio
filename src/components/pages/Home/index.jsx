import React from 'react';
import WesllenIcon from '../../../assets/wesllen-cpu-icon.webp';
import Resume from '../../../../Documents/wesllen_araujo_resume.pdf';
import About from '../About';
import Skills from '../Skills';

const Home = () => {
  return (
    <div>
      <div className="flex font-bold w-full h-screen justify-between px-52 items-center">
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
      </div>
      <div className='flex flex-col gap-16'>
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
