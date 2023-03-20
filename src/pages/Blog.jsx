import React,{useEffect} from 'react'
import {  BsArrowRightShort } from 'react-icons/bs';
import '../styles/pages/Blog/blog.css'
import '../styles/pages/Blog/blog.scss';
import cuetzalan from '../assets/cuetzalan.jpg'
import bacalar from '../assets/bacalar.jpg';
import mazunte from '../assets/mazunte.jpg'

import Aos  from 'aos'
import 'aos/dist/aos.css';


const Post = [
  {
    id:1,
    postImage: cuetzalan,  
    title:'Beutiful Cuetzalan, let us travel!',
    desc:'Enjoy the historic place of Cuetzalan and its beautiful streets',
  },
  {
    id:2,
    postImage: bacalar,  
    title:'Beaches and unique landscapes ',
    desc:'Enjoy beaches accompanied by excellent cuisine',
  },
  {
    id:3,
    postImage: mazunte,  
    title:'The beautiful sunsets of mazunte',
    desc:'Enjoy the sunsets on the brach!',
  }
]

const Blog = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  return (
    <section className='blog container section'>
      <div className='secContainer'>
        <h2 className='secTitle' data-aos="fade-up">
          Our Best Blog?
        </h2>
        <p data-aos="fade-up" data-aos-duration="2000">
        A vision of the incredible experience in small places in Mexico.
        </p>
      </div>
      <div  className='mainContainer grid' data-aos="fade-up">
      {
        Post.map(({id,postImage,title, desc}) =>{
          return(

        <div key={id} className='singlePost'>
          <div className='imgDiv'>
            <img src={postImage} alt=""/>
          </div>

          <div className='postDetails'>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>

          <a href="#" className='flex'>
            <BsArrowRightShort className='icon'/>
            Read More
          </a>
        </div>
          );
        })
      }
      </div>
    </section>
  )
}

export default Blog