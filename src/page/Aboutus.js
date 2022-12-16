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
        <div className='grid-wrapper section-aboutus' data-scroll-section>
          <div className='itemgrid-left-aboutus' style={{ background: `url(${img20})`, backgroundSize: 'auto 120%' }}>
            <div>
              <img src={LogoLBTCompany} alt='' />
            </div>
          </div>
          <div className='itemgrid-right-aboutus'>

            <h2>WHO WE ARE</h2>
            <p>LBT Imports Pty Ltd is a Melbourne-based wine exporter, wholesaler, and agent.

              Drawing on many years in fine wine business, we was convinced of the increasing popularity of Australian wines and established LBT Imports in 2019 to focus on introducing quality Australian wines to Asian Pacific including Indonesia, Thailand, Campodia, Viet Nam, Malaysia, Philippines, China, Japan, Taiwan and Korea, which is a new and upcoming market with lots of potential.
            </p>

            <h2>OUR MISSION</h2>
            <p>Our mission is to continue our growth and provide our clients with a diverse range of excellent quality products and to assist small to medium-boutique wineries export branded wine. We are always on the lookout for partners that are eager to enter into new and existing markets.</p>
            <h2>OUR VISION</h2>
            <p>We always establish long-term working relationships with our partners and invest our time and energy into launching their products in the market. We value both sides working together in a combined effort, which will promote success in sales and establish brand recognition within the Asian markets.</p>
            <h2>OUR OBJECTIVES & VALUES</h2>
            <p>We believe good collaborations and communication between supplier and exporter as well as importer and client are crucial for success in our markets.
              In partnership with our suppliers to which we are their exclusive exporter and distributor, we seek to expand our exportation services and become a leading player in the Asian markets, especially new young markets with huge potential such as that of Vietnam.
            </p>
          </div>
        </div>
        <GetInTouch />
        <Footer />
      </div>


    </>
  )
}
export default Aboutus;
