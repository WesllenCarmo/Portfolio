import React from 'react'
import WesllenIcon from '../../../assets/wesllen-cpu-icon.webp'
import Resume from '../../../../Documents/wesllen_araujo_resume.pdf'

const Home = () => {
  return (
    <div>
      <img
      src={WesllenIcon}
      alt='Wesllen image: A brown man with black glasses, dark brown eyes and coily hair.'
      />
      <div>
        <h3>Hello, World!</h3>
        <h2>I'm Wesllen do Carmo</h2>
        <h1>Front End Web Developer</h1>
        <div>
          <button>Contact me</button>
          <a href={Resume} download>Download résumé</a>
        </div>
      </div>
    </div>
  )
}

export default Home