
import {useEffect,useRef} from 'react'
import LocomotiveScroll from 'locomotive-scroll'


const LocomotiveScrollSmooth = ({ children }) => {
  const scrollingContainerRef = useRef();
  
  useEffect(() => {
          
    const scroll = new LocomotiveScroll({
      el: scrollingContainerRef.current,
      smooth: true
  });

 }, []);
  return (
    <div ref={scrollingContainerRef}>
         {children}
    </div>
  )
}
export default LocomotiveScrollSmooth;


