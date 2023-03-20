import React,{useState} from 'react'
import '../../styles/Navbar/navbar.css'
import '../../styles/Navbar/navbar.scss'
import { SiYourtraveldottv} from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNav = () =>{
      setActive('navBar activeNavbar')
    }
    const closeNav = ()=> {
      setActive('navBar');
    }

    const [transparent, setTransparent] = useState('header');
    const addBg = () =>{
      if(window.scrollY >= 10){
        setTransparent('header activeHeader');

      }else{
        setTransparent('header');
      }
    }
    window.addEventListener('scroll', addBg)
    return (
      <section className='navBarSection'>
          <header className={transparent }>
            <div className='logoDiv'>
              <a href="#" className='logo'>
                <h1 className='flex'><SiYourtraveldottv  className='icon'/>Mx</h1>
              </a>
            </div>
            <div className={active }>
              <ul className='navList flex'>
                <li className='navItem'>
                  <a href="#" className='navLink'>Home</a>
                </li>
                <li className='navItem'>
                  <a href="#" className='navLink'>Products</a>
                </li>
                <li className='navItem'>
                  <a href="#" className='navLink'>Resource</a>
                </li>
                <li className='navItem'>
                  <a href="#" className='navLink'>Contact</a>
                </li>
                <li className='navItem'>
                  <a href="#" className='navLink'>Blog</a>
                </li>
                <div className='headerBtn flex'>
                  <button className='btn loginBtn'>
                    <a>Login</a>
                  </button>
                  <button className='btn signBtn'>
                    <a>Sign Up</a>
                  </button>
                </div>
              </ul>
              <div onClick={closeNav} className='closeNavbar icon'>
                  <AiFillCloseCircle />
              </div>
            </div>
            <div onClick={showNav} className='toggleNavbar'>
                <TbGridDots className='icon'/>
            </div>
          </header>
      </section>
  )
}

export default Navbar