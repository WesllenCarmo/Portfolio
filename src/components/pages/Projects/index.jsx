import React from 'react'
import TattuuWebPreview from '../../../assets/tattuu-preview.webp'
import WeatherWebPreview from '../../../assets/weather-preview.webp'

const Projects = () => {
  return (
    <section id='projcets'>
      <h2>Projects</h2>
      <div>
        <img src={TattuuWebPreview} alt="Image of Tattuu's website, a page with a tattoer working on someone's arm and a text saying 'customised tattoos'." />
        <div>
          <h3>Tattuu</h3>
          <p>Tattuu is a fictional website made of a tattoo studio with professional photographs. The project was made in order to achieve a better understanding of web design.</p>
          <ul>
            <li>Github repository: <a href='https://github.com/WesllenCarmo/Tattuu'>https://github.com/WesllenCarmo/Tattuu</a></li>
            <li>Deploy: <a href='https://wesllencarmo.github.io/Tattuu/'>https://wesllencarmo.github.io/Tattuu/</a></li>
          </ul>
          <div>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>Figma</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>Responsive Web Design</p>
          </div>
        </div>
      </div>
      <div>
        <img src={WeatherWebPreview} alt="Image of a forecast website, a page with the forecast of a city called 'Serra Talhada'." />
        <div>
          <h3>Tattuu</h3>
          <p>Forecast-DevClub is a website built with React that uses the API OpenWeather in order to provide the forecast for the user's selected city. The project was made during a lesson of <a href='https://www.youtube.com/@canaldevclub'>DevClub Youtube profile</a>.</p>
          <ul>
            <li>Github repository: <a href='https://github.com/WesllenCarmo/forecast-DevClub'>https://github.com/WesllenCarmo/forecast-DevClub</a></li>
          </ul>
          <div>
            <p>React.js</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>Responsive Web Design</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects