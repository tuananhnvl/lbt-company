import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoLBTCompany from '.././asset/lbt-logo.png'
import { FaTimes, FaGripLines } from 'react-icons/fa'
import gsap, { Power3 } from 'gsap'
import '.././styles/Navbar.css'

import SplitText from ".././utils/Split3.min";
import useOnScreen from ".././Hook/useOnScreen";

import useWindowSize from ".././Hook/useWindowSize";
export default function Navbar() {
  const [isActiveModalMenu, setIsActiveModalMenu] = useState(false);
  const navAllModal = useRef();
  const windowSize = useWindowSize();


  /* const itemLineWidthAll = (Math.floor((windowSize.width).toFixed(10))) / 8
  console.log(itemLineWidthAll)
  const itemLineHeightEach = Math.floor((Math.floor((windowSize.height).toFixed(10))) / itemLineWidthAll)
  console.log(itemLineHeightEach)
  useEffect(() => {
    const listItemGrid = document.querySelector('.navAllModal-display').childNodes
    console.log(listItemGrid)
    const listGridArray = gsap.utils.toArray(listItemGrid)
    console.log(listGridArray)

    for (let i = 0; i < itemLineHeightEach + 2; i++) {
      console.log(listItemGrid[i].childNodes)
      gsap.to(listGridArray[i], {
        height: itemLineWidthAll,
        
      })
    }
    // handle to animation
    for (let i = 0; i < itemLineHeightEach + 2; i++) {
      console.log(listItemGrid[i].childNodes)
      gsap.to(listItemGrid[i].childNodes, {
        duration: 2,
        width: "100%",
        delay: i / 5
      });
    }
  }) */


  useEffect(() => {
    const listItemGrid = document.querySelector('.navAllModal-display').childNodes
    console.log(listItemGrid)
    const listGridArray = gsap.utils.toArray(listItemGrid)
    console.log(listGridArray)
    for (let i = 0; i < 4; i++) {
      gsap.to(listItemGrid[i], {
        duration: 1,
        height: (windowSize.height) / 4,
  
      })
    }
  })




  const openMenuAll = event => {
    console.log('openMenuAll--------')
    setIsActiveModalMenu(true);

    for (let i = 0; i < 4; i++) {
      gsap.to((document.querySelector('.navAllModal-display').childNodes[i]).childNodes, {
        duration: 2,
        width:"100%"
      })
    }
  };

  const closeMenuAll = event => {
    setIsActiveModalMenu(false);
    console.log('closeMenuAll-------------')

  };



  useEffect(() => {
    const split = new SplitText("#itemMenu-text", {
      type: "lines",
      linesClass: "ani--navlinkChildren",
    });
  const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "ani--navlinkParent",
    });
  
    gsap.to('#navbar-logo-foranimation' ,{
      delay: 1,
      duration: 1,
      opacity: 1
    });
    gsap.to(split.lines, {
      delay: 1.5,
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);


  return (
    <div className="nav" data-scroll-section>
      <div className="nav-header">
        <Link to="/"><img id="navbar-logo-foranimation" src={LogoLBTCompany} alt="Logo LBT Company" /></Link>
      </div>
      <div className="nav-btn">
        <button className='btn-open-modal-menu' onClick={openMenuAll}>
          <FaGripLines />
        </button>
      </div>
      <div className={isActiveModalMenu ? 'navAllModal active--navAllModal' : 'navAllModal'} ref={navAllModal}>
        <button className='btn-close-modal-menu' onClick={closeMenuAll}>
          <FaTimes />
        </button>
        <div className='navAllModal-display'>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        {/*   <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div> */}
        </div>
      </div>

      <div className='nav-links'>
        <div><Link to="/" id='itemMenu-text'>Home</Link></div>
        <div><Link to="/aboutus" id='itemMenu-text'>About us</Link></div>
        <div><Link to="/partners" id='itemMenu-text'>Partner - Farm</Link></div>
        {/* <div><Link to="/newfeed">Newfeed</Link></div> */}
        <div><Link to="/contact" id='itemMenu-text'>Contact</Link></div>
      </div>
    </div>
  )
}
