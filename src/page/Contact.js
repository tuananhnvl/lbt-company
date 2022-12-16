
import Navbar from '../component/Navbar'
import GetInTouch from ".././component/GetInTouch"

import useLocoScroll from ".././Hook/useLocoScroll"

export default function Contact() {
  useLocoScroll(true)
  return (
    <> 
    <div className='main-container-all' id='main-container-all' data-scroll-container>
      <Navbar />
      <GetInTouch />
 
    </div>

    </>
  )
}
