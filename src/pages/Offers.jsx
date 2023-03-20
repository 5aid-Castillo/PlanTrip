import React,{useEffect} from 'react'
import '../styles/pages/Offers/offers.css'
import '../styles/pages/Offers/offers.scss'
import {MdKingBed, MdBathtub, MdLocationOn } from 'react-icons/md';
import {FaWifi} from 'react-icons/fa';
import {MdAirportShuttle} from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs';
import img from '../assets/img6.jpg';
import img2 from '../assets/img7.jpg';

import Aos  from 'aos'
import 'aos/dist/aos.css';

const Offer = [
{
  id:1,
  imgSrc:img,
  destTitle:'Palenque',
  location:'Chiapas',
  price:'$150.99'
},{
  id:2,
  imgSrc:img2,
  destTitle:'Chiapa de Corzo',
  location:'Chiapas',
  price:'$180.50'
}];

const Offers = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  return (
    <section className='offer container section'>
        <div className='secContainer'>
          <div className='secIntro'>
            <h2 className='secTitle' data-aos="fade-up">
              Special Offers
            </h2>
            <p data-aos="fade-up">
            From historical sites to natural spectacles, come see the best of Mexico.
            </p>
          </div>
          <div className='mainContent grid' data-aos="fade-up">
            {
              Offer.map(({id,imgSrc, destTitle,location, price}) => {
                return(

            <div key={id} className='singleOffer'>
              <div className='destImage'>
                <img src={imgSrc} alt={destTitle}/>
                <span className='discount'>
                  30% off
                </span>
              </div>
              
              <div className='offerBody'>
                <div className='price flex'>
                  <h4>{price}</h4>
                  <span className='status'>
                    For Rent
                  </span>
                </div>

                <div className='amenities flex'>
                  <div className='singleAmenity flex'>
                    <MdKingBed className='icon' />
                    <small>2 Beds</small>
                  </div>
                  
                  <div className='singleAmenity flex'>
                    <MdBathtub className='icon' />
                    <small>1 Bath</small>
                  </div>

                  <div className='singleAmenity flex'>
                    <FaWifi className='icon' />
                    <small>Wi-Fi</small>
                  </div>
                  
                  <div className='singleAmenity flex'>
                    <MdAirportShuttle className='icon' />
                    <small>Shuttle</small>
                  </div>
                </div>
                

                <div className='location flex'>
                  <MdLocationOn className='icon'/>
                  <small>{destTitle}, {location}</small>
                </div>
                <button className='btn flex'>
                  View Details
                  <BsArrowRightShort className='icon' />
                </button>
              </div>
            </div>
                )
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Offers