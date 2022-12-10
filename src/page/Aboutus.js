import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import LogoLBTCompany from '.././asset/lbt-logo.png'
import '../styles/Aboutus.css'
import useLocoScroll from ".././Hook/useLocoScroll";
import img20 from '../asset/demo-img/20.jpg'
import Navbar from ".././component/Navbar";
import Footer from ".././component/Footer";
import GetInTouch from ".././component/GetInTouch";
function Aboutus() {

    useLocoScroll(true);

  

  return (
    <>
      <div className='main-container-all' id='main-container-all' data-scroll-container>
        <Navbar />
        <div className='grid-wrapper'  data-scroll-section>
          <div className='itemgrid-left-aboutus' style={{background:`url(${img20})`,backgroundSize: 'auto 120%'}}>
            <div>
            <img src={LogoLBTCompany} alt='' />
              </div>
          </div>
          <div className='itemgrid-right-aboutus'>

            <h2>Who We Are</h2>
            <p>The Wine Distribution Co was started by a group of wine professionals with a vision to bring great drinking wines from family-owned vineyards, young winemakers and established estates to Singapore’s food and beverage scene. All our wines are chosen for their quality, provenance and drinkability with a focus on good winemaking, varietal integrity and passion. We’re the new kids on the block shaking up the market with a fresh approach but we are well-resourced and driven to create the best wine distribution company in Singapore. We are in the business of supplying you with wine, we want you to succeed, we want you to sell more wine, we are The Wine Distribution Co.</p>
            <h2>Why Us?</h2>
            <p>Years of experience, months of research and lots of wine tasting have led us to our first portfolio – a concise expression of what we feel represents regionality, terroir and a fantastic line up of wines.</p>
            <h2>Our Commitment</h2>
            <p>We are committed to service, integrity and providing a focused concised wine offering that is backed by support training and flexibility to meet our client’s needs.</p>
            <h2>Working with Wineries</h2>
            <p>We are proud to work with our wineries and winemakers – each one has a unique story and all of them are a showcase of nature, excellent viniculture and wine making skill.</p>
            <h2>Our Team</h2>
            <p>Our Team is ready to serve our clients and support them. TWDC is a trade “on premise only” distributor and our wines will be featured in hotels, restaurants, bars and in premium retailers across the island..</p>
          </div>
        </div>
        <GetInTouch/>
        <Footer />
      </div>


    </>
  )
}
export default Aboutus;
