import Raect from 'react'
import { useEffect, useState } from 'react'
import { SlArrowUp } from 'react-icons/sl'

const BackToTopButton = () => {
  const [ backToTopButton, setBackToTopButton ] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    }
  )}, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
      {backToTopButton && (
        <button onClick={scrollUp} className='fixed bottom-10 lg:bottom-20 right-10 lg:right-20 flex justify-center items-center w-15 lg:w-20 h-15 lg:h-20 bg-custom-light-blue text-3xl font-bold rounded-full text-custom-dark-blue hover:bg-custom-blue transition duration-400 cursor-pointer'><SlArrowUp /></button>
      )}
    </div>
  )
}

export default BackToTopButton