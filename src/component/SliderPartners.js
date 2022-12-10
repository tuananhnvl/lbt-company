import {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/Slider.css'
import img01 from '../asset/demo-img/01.jpg'
import img02 from '../asset/demo-img/02.jpg'
import img05 from '../asset/demo-img/05.jpg'
import img09 from '../asset/demo-img/09.jpg'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
const images = [
    img01,img02,img05,img09
]

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}

export default function SliderPartners() {
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
    <div className='grid-wrapper section-slider-img' data-scroll-section>
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