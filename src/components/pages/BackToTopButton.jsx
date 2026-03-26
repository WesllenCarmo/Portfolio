import Raect from 'react'
import { useEffect, useState } from 'react'
import { GoArrowUp } from 'react-icons/go'

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
        <button onClick={scrollUp} className='fixed bottom-20 right-20 flex justify-center items-center w-20 h-20 bg-custom-light-blue text-5xl font-bold rounded-full text-custom-dark-blue hover:bg-custom-blue transition duration-400 cursor-pointer'><GoArrowUp /></button>
      )}
    </div>
  )
}

export default BackToTopButton