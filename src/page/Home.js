import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import cn from "classnames";
import SplitText from ".././utils/Split3.min";
import useOnScreen from ".././Hook/useOnScreen";
import useLocoScroll from ".././Hook/useLocoScroll";

import ".././styles/Home.css"
import gsap, { Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img02 from '../asset/demo-img/02.jpg'
import img15 from '../asset/demo-img/15.png'
import img12 from '../asset/demo-img/12.png'
import img17 from '../asset/demo-img/17.png'

import Navbar from ".././component/Navbar";
import Footer from ".././component/Footer";
import SliderPartners from ".././component/SliderPartners";
import GetInTouch from ".././component/GetInTouch";

import partnerImage01 from '../asset/demo-img/bertonvineyaed-partners.jpg'
import partnerImage01bg from '../asset/demo-img/bertonvineyaed-bg.jpg'
import partnerImage02 from '../asset/demo-img/dominic-partners--full-color.png'
import partnerImage02bg from '../asset/demo-img/dominic-bg.jpg'
import partnerImage03 from '../asset/demo-img/pettavel-partners.png'
import partnerImage04 from '../asset/demo-img/organicwines-partners.jpg'
import partnerImage05 from '../asset/demo-img/ulupna-partners.png'
import partnerImage05bg from '../asset/demo-img/ulupna-bg.jpg'


gsap.registerPlugin(ScrollTrigger);

function Home() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  // Run FC after loader end (preloader = false )
  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }

    AnimationDom()

  }, [preloader]);


  const [timer, setTimer] = useState(0);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }


  //Animation
  function AnimationDom() {
    gsap.to("#text01BannerChildren,#text02BannerChildren", {
      delay: 2, // trừ cho <Navbar/> action
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2"
    });
    gsap.to("#image01BannerChildren",{
      delay: 2, // trừ cho <Navbar/> action
      duration: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      webkitClipPath:'inset(0% 0% 0% 0%)',
      ease: "power2"
    })

  }



  /*
     // PARTNERS SECTION
     /* gsap.utils.toArray(".text-skew").forEach(sectiontextSkew => {
       gsap.to(sectiontextSkew.children, {
         top: "-30px",
         duration: 1,
 
         scrollTrigger: {
           trigger: (sectiontextSkew.parentNode).querySelector('.partner-itemgird'),
           start: "top 500px",
           end: "top 400px",
           scrub: 1,
           // markers: true,
         }
       })
     })
  */


  /* 
      gsap.utils.toArray(".partner-itemgird--item").forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          animation: gsap.to(section,
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.7,
              ease: Power3.ease,
  
            }),
  
          start: "top 80%",
          end: "top 10%",
          // markers: true,
          scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
  
        })
      }); */



  /* 
          }, 500);
          return () => clearTimeout(timer);
    }, [])
  
   */

  return (
    <>
      {preloader ? (
        <div className='loader-wrapper'>LBT Imports Pty Ltd</div>
      ) : (

        <div className='main-container-all' id='main-container-all' data-scroll-container
          ref={ref}>
          <Navbar />
          <div className='grid-wrapper wraper-welcome-section' data-scroll-section >
            <div className='item-grid-content' id="noname-22">
              <img id="image01BannerChildren" src={img15} alt=''/>
            </div>
            <div className='item-grid-content-text custom01'>
              <p id="text01BannerChildren">LBT Imports Pty Ltd is a Melbourne based wine exporter, wholesaler and agent</p>
            </div>
            <div className='item-grid-content-text custom02'>
              <p id="text02BannerChildren">Drawing on many years in fine wine business, founder Long Tran was convinced of the increasing popularity of Australian wines and established LBT Imports in 2019 to focus on introducing quality Australian wines to Vietnam, which is a new and upcoming market with lots of potentials.
              </p>
            </div>
          </div>
        
          <div className='grid-wrapper wraper-mission-section' data-scroll-section>
            <div className='mission-section' style={{ backgroundImage: `url(${img12})`, backgroundSize: "cover" }}>
              <div className='mission-section-content'>
                Our mission is to continue our growth and provide our clients with a diverse range of excellent quality products and to assist small to medium boutique wineries export branded wine
              </div>
            </div>
            <div className='text-skew skew-misson-text'>
              <h3 data-scroll>Mission</h3>
            </div>
          </div>


          <div className='grid-wrapper wraper-missionPrimary-section' data-scroll-section>
            <div className='missionPrimary-section' style={{ backgroundImage: `url(${img02})`, backgroundSize: "cover" }}>
              <div className='missionPrimary-section-content'>
              In partnership with our suppliers to which we are their exclusive exporter and distributor, we seek to expand our exportation services and become a leading player in the Asian markets especially new young market with huge potentials such as that of Vietnam.

              </div>
            </div>
{/*             <div className='text-skew skew-missionPrimary-text'>
              <h3 data-scroll>Mission</h3>
            </div> */}
          </div>


          <div className='grid-wrapper wraper-partner-section' data-scroll-section>
          <h1 className='innershadowtext' id='innershadowtext'>LBT</h1>
            <div className='partner-itemgird' style={{ backgroundImage: `url(${partnerImage01bg})`, backgroundSize: "cover" }}>

              <div className='partner-itemgird--item' id="img-partner-product">
                <img src={img17} alt='' data-scroll />
              </div>
              <div className='partner-itemgird--logo'>
                <img src={partnerImage01} alt='' />
              </div>
              <div className='partner-itemgird--detailcompany'>
                <h3>Berton Vineyard</h3>
                <p>Pettavel boasts historic roots dating back to 1842 when David Pettavel, the fourth generation of Swiss, pioneered professional viticulture in Victoria, Australia. Now with three vineyards under the brand, Pettavel has become a well-known brand as one of Australia's leading national banquet wine suppliers.</p>
                <Link to='./partners' >Explore more!</Link>
              </div>
            </div>

            <div className='text-skew skew-name-partners'>
              <h3 data-scroll>Berton&nbsp;Vineyard</h3>
            </div>
          </div>
          <div className='grid-wrapper wraper-partner-section' data-scroll-section>
            <div className='partner-itemgird' style={{ backgroundImage: `url(${partnerImage02bg})`, backgroundSize: "cover" }}>

              <div className='partner-itemgird--item' id="img-partner-product">
                <img src={img17} alt='' data-scroll />
              </div>
              <div className='partner-itemgird--logo'>
                <img src={partnerImage02} alt='' />
              </div>
              <div className='partner-itemgird--detailcompany'>
                <h3>Dominic Wines</h3>

                <p>Dominic Wines products – drawing on fruit from the company’s Riverland vineyards and complemented by grapes from 42 dedicated growers across South Australia – can be found in the UK, across Europe and in Canada and China.</p>
                <Link to='./partners' >Explore more!</Link>
              </div>
            </div>
            <div className='text-skew skew-name-partners'>
              <h3 data-scroll>Dominic&nbsp;Wines</h3>
            </div>
            
          </div>
      
          <div className='grid-wrapper wraper-partner-section' data-scroll-section>
            <div className='partner-itemgird' style={{ backgroundImage: `url(${partnerImage05bg})`, backgroundSize: "cover" }}>

              <div className='partner-itemgird--item' id="img-partner-product">
                <img src={img17} alt='' data-scroll />
              </div>
              <div className='partner-itemgird--logo'>
                <img src={partnerImage05} alt='' />
              </div>
              <div className='partner-itemgird--detailcompany'>
                <h3>Ulupna Wines</h3>

                <p>Ulupna wines are SINGLE VINEYARD WINES produced with reverent respect of the environment, terroir, wine-making tradition, ancestry, present and future patrons, directed to rejoice at the contemplation of good life.

                  The Name Ulupna locates the vineyard, winery and cellar door. The name identifies the local Aboriginal clan of the Yorta Yorta tribe, and was also, historically, the name of the wider region that is Ulupna. Possessing a number of meanings, Ulupna most commonly translates as ‘strong women’.</p>
                  <Link to='./partners' >Explore more!</Link>
              </div>
            </div>
            <div className='text-skew skew-name-partners'>
              <h3 data-scroll>Ulupna&nbsp;Wines</h3>
            </div>
          </div>
          
          <SliderPartners/>
          <GetInTouch/>
          <Footer />
        </div>
      )}



    </>
  )
}
export default Home;
