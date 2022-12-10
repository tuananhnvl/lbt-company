import {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/Slider.css'
import imagesList from './ListImagesProduct'

import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 1,
      rotate : '0deg',
      scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate : '-4deg',
    transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -300 : 300,
      opacity: 1,
      scale: 0.5,
    rotate : '5deg',
    transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}

export default function SliderPartners({nameBrand}) {
  const images = imagesList[nameBrand]
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }

  return (
    <div className='section-slider-img' >
       <button className='prevButton' onClick={prevStep}>
          <FaAngleLeft/>
        </button>
        <button className='nextButton' onClick={nextStep}>
          <FaAngleRight/>
        </button>
      <div className='slideshow-section-slider-img'>
        <AnimatePresence initial={false} custom={direction}>
       
          <motion.img
          
           
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={images[index]}
            alt='slides'
            className='slides'
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
       
      </div>
    </div>
  )
}