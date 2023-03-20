import React,{useEffect} from 'react'
import '../styles/pages/Popular/popular.css'
import '../styles/pages/Popular/popular.scss'
import {BsArrowLeftShort, BsArrowRightShort, BsDot} from 'react-icons/bs'

import cuetzalan from '../assets/cuetzalan1.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';


import Aos  from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc:img2,
    destTitle:'Mazunte',
    location:'Oaxaca',
  },
  {
    id:2,
    imgSrc:cuetzalan,
    destTitle:'Cuetzalan del Progreso',
    location:'Puebla',
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Atlixco',
    location:'Puebla',
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Cholula',
    location:'Puebla',
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'Tulum',
    location:'Quintana Roo',
  },
  {
    id:6,
    imgSrc:img1,
    destTitle:'Bacalar',
    location:'Quintana Roo',
  }
] 

const Popular = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  return (
  <section className='popular section container'>
    <div className='secContainer'>
    <div className='secHeader flex'>
      <div className='textDiv'>
        <h2 data-aos="fade-right" className='secTitle'>Popular Destination</h2>
        <p data-aos="fade-right">
        From historic sites to natural spectaculars, come see the best of the world!
        </p>
      </div>

      <div data-aos="fade-left" className='iconsDiv'>
          <BsArrowLeftShort className='icon leftIcon' />
          <BsArrowRightShort className='icon' />
      </div>
    </div>

    <div data-aos="fade-up" className='mainContent grid'>
      {/* <div className='singleDestination'>
        <div className='destImage'>
          <img src={cuetzalan} alt=""/>

          <div className='overlayInfo'>
            <h3>Some text</h3>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
            <BsArrowRightShort className='icon'/>
          </div>
        </div>

        <div className='destFooter'>
          <div className='number'>
            01
          </div>
          <div className='destText flex'>
              <h6>
                Cuetzalan
              </h6>
              <span className='flex'>
                <span className='dot'>
                  <BsDot className="icon"/>
                </span>
                Mx
              </span>
          </div>
        </div>
      </div> */}

      {
        Data.map(({id, imgSrc, destTitle, location}) => {
          return(
            <div key={id} className='singleDestination'>
        <div className='destImage'>
          <img src={imgSrc} alt={destTitle}/>

          <div className='overlayInfo'>
            <h3>{destTitle}</h3>
            <p>
                {location}
            </p>
            <BsArrowRightShort className='icon'/>
          </div>
        </div>

        <div className='destFooter'>
          <div className='number'>
            0{id}
          </div>
          <div className='destText flex'>
              <h6>
                {destTitle}
              </h6>
              <span className='flex'>
                <span className='dot'>
                  <BsDot className="icon"/>
                </span>
                Mx
              </span>
          </div>
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

export default Popular