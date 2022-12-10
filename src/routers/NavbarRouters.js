import { useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from ".././page/Home"
import Aboutus from ".././page/Aboutus"
import Newfeed from ".././page/Newfeed"
import Contact from ".././page/Contact"
import Partners from ".././page/Partners"
import ScrollToTop from '.././Hook/ScrollToTop'
import { AnimatePresence, motion } from "framer-motion"
export default function NavbarRouters() {
  const location = useLocation();
  const pageMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  };
  return (
    <>
      <AnimatePresence mode={'wait'} initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={
            <>
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} style={{ margin: 0 }}>
                <Home />
              </motion.div>
            </>
          }>
          </Route>
          <Route path='/aboutus' element={
            <>
              <ScrollToTop />
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} style={{ margin: 0 }}>
                <Aboutus />
              </motion.div>
            </>
          }>
          </Route>
          <Route path='/partners' element={
            <>
              <ScrollToTop />
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} style={{ margin: 0 }}>
                <Partners />
              </motion.div>
            </>
          }>
          </Route>
          <Route path='/newfeed' element={
            <>
              <ScrollToTop />
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} style={{ margin: 0 }}>
                <Newfeed />
              </motion.div>
            </>
          }>
          </Route>
          <Route path='/contact' element={
            <>
              <ScrollToTop />
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion} style={{ margin: 0 }}>
                <Contact />
              </motion.div>
            </>
          }>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
