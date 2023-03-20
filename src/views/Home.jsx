import React,{useEffect} from 'react'
import '../styles/Home/home.css'
import '../styles/Home/home.scss'

import Aos  from 'aos'
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
            <h1 data-aos="fade-up" className='title'>Plan Your Trip With Travel  Mx</h1>
            
            <p data-aos="fade-up" data-aos-duration="2500" className='subTitle'>
            Travel to your favorite place in Mexico with the environment!
            </p>
            
            <button data-aos="fade-up" data-aos-duration="3000" className='btn'>
                <a href="#" >Explore Now</a>
            </button>
        </div>
        <div className='homeCard grid' >
          <div /* data-aos="fade-right" data-aos-duration="2000" */ className='locationDiv'>
              <label htmlFor='location'>Location</label>
              <input type="text" placeholder='Dream Destination'/>
          </div>
          <div className='distDiv' /* data-aos="fade-right" data-aos-duration="2500" */>
              <label htmlFor='distance'>Distance</label>
              <input type="text" placeholder='11/Meters'/>
          </div>
          <div className='priceDiv' /* data-aos="fade-right" data-aos-duration="3000" */>
              <label htmlFor='price'>Price</label>
              <input type="text" placeholder='$140-$150'/>
          </div>
          <button className='btn'>
            Search
          </button>
          
        </div>
      </div>
    </section>
  )
}

export default Home