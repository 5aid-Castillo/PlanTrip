import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si'
import '../../styles/Footer/footer.css'
import '../../styles/Footer/footer.scss'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'>
            <a href="#" className='logo flex' data-aos="fade-up">
              <h1 className='flex'><SiYourtraveldottv className='icon' />Mx</h1>

            </a>
          </div>
          <div className='social flex' data-aos="fade-up">
            <ImFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

        </div>

        
        
        <div className='footerLinks' data-aos="fade-up">
          <span className='linkTitle'>
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        
        <div className='footerLinks' data-aos="fade-up">
          <span className='linkTitle'>
            Contact Us
          </span>
          <span className='phone'> +123 456 7891</span>
          <span className='email'> said557@outlook.es</span>

          {/* <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li> */}

        </div>
      </div>
    </section>
  )
}

export default Footer