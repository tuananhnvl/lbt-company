import { useEffect, useRef } from "react";
import './SmoothScroll.css'
import useWindowSize from "./useWindowSize";

const SmoothScroll = ({ children }) => {

  // 1.
  const windowSize = useWindowSize();
  //2.

  const scrollingContainerRef = useRef();
 
  
  // 3.
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  };


  // 4.
  useEffect(() => {
    setBodyHeight();
  
   // console.log(scrollingContainerRef.current)
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
     // console.log(document.body.style.height)
    
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  function roundthapphan(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  const smoothScrollingHandler = () => {
    
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
   
    scrollingContainerRef.current.style.transform = `translateY(-${Math.round( data.previous * 10 ) / 10}px)`;
   // console.log(Math.round( data.previous * 10 ))
    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
