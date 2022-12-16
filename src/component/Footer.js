import React from 'react'
import '.././styles/Footer.css'
import lbtLogo from '.././asset/lbt-logo.png'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer grid-wrapper'  data-scroll-section>
        <div  className='footer-logo'>
            <img src={lbtLogo} alt=''/>
            <div>
              <p>LBT Distributor of Australian & International Wine</p>
              <p>ACN 635 911 983 / ABN 43 635 911 983</p>
              <p>58 Auburn Avenue, Sunshine North, VIC 3020, Australia</p>
              <p>© 2020 LBT Wines Services</p>
              <div>
                <p>Email: lbtimportsservices@gmail.com</p>
                <p>Telephone/Tax: +61 400 526 893</p>
              </div>
            </div>
            
        </div>
      
        <div className='footer-menu'>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/aboutus">About us</Link></div>
          <div><Link to="/partners">Partner - Farm</Link></div>
          {/* <div><Link to="/newfeed">Newfeed</Link></div> */}
          <div><Link to="/contact">Contact</Link></div>
        </div>
        <div className='footer-iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.601616722888!2d144.8387288157424!3d-37.752489379763546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65e580893cb3f%3A0x6cc2b558c1c2d51f!2s58%20Auburn%20Ave%2C%20Sunshine%20North%20VIC%203020%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1670524854882!5m2!1svi!2s"loading="lazy"></iframe>
        </div>
    </div>
  )
}
