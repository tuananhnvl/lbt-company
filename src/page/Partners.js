import React from 'react'
import '../styles/Partners.css'
import partnerImage01 from '../asset/demo-img/bertonvineyaed-partners.jpg'
import partnerImage01bg from '../asset/demo-img/bertonvineyaed-bg.jpg'
import partnerImage02 from '../asset/demo-img/dominic-partners--full-color.png'
import partnerImage02bg from '../asset/demo-img/dominic-bg.jpg'
import partnerImage03 from '../asset/demo-img/pettavel-partners.png'
import partnerImage04 from '../asset/demo-img/organicwines-partners.jpg'
import partnerImage05 from '../asset/demo-img/ulupna-partners.png'
import partnerImage05bg from '../asset/demo-img/ulupna-bg.jpg'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import GetInTouch from '../component/GetInTouch'
import useLocoScroll from ".././Hook/useLocoScroll";

export default function Partners() {
  console.log('Partners Component Active!')
  useLocoScroll(true)
  return (
    <>
   <div className='main-container-all' id='main-container-all' data-scroll-container>
        <Navbar />
        <div className='grid-wrapper' data-scroll-section>
          <div className='tittle-section-partners'>
            <h2>Our Brands</h2>
            <p>We are proud to represent and distribute such a diverse and impressive portfolio of Australian, New Zealand and International wines. Our team are trained wine industry specialists who maintain extensive contacts within all sectors of the industry including on and off premise, wholesalers and national retail. Wine listing is key to brand growth and development which is why our teams are structured to focus on and target segments that each brand will have an opportunity to grow in.</p>
          </div>
        <div className='itemgrid-left-partners'>
          <div><div><img src={partnerImage01} alt='' /><a href='https://www.bertonvineyards.com.au/'>Explore</a></div></div>
          
        </div>
        <div className='itemgrid-right-partners'>
        <div><div><img src={partnerImage02} alt='' /><a href='https://dominicwines.com/'>Explore</a></div></div>
        </div>
        <div className='itemgrid-left-partners'>
        <div><div><img src={partnerImage03} alt='' /><a href='https://pettavel.net/'>Explore</a></div></div>
        </div>
        <div className='itemgrid-right-partners'>
        <div><div><img src={partnerImage04} alt='' /><a href='https://www.organicwine.com.au/'>Explore</a></div></div>
        </div>
        <div className='itemgrid-left-partners'>
        <div><div><img src={partnerImage05} alt='' /><a href='https://www.ulupnawinery.com.au/'>Explore</a></div></div>
        </div>
        <div className='itemgrid-right-partners'>
        <div><div><img src={partnerImage02} alt='' /><a href='https://dominicwines.com/'>Explore</a></div></div>
        </div>
   
      </div><GetInTouch/>
        <Footer /></div>
     
  
  </>
  )
}
