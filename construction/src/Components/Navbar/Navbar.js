import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';

export default function Navbar() {
    const menu=(e) => {
        let menu = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');
        
        menu.onclick = () => {
          menu.classList.toggle('bx-x');
          navbar.classList.toggle('open');
        }
      }
  return (
    <div>
      <header>
            {/* <Link to='#' className='logo'><img src="static/images/logo.png"/><span>Logo</span></Link> */}
            <a href='#' className='logo'><img src="static/images/logotest.png"/></a>
            <ul className='navbar'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className='main'>
                <div className='bx bx-menu' id="menu-icon" onClick={menu}></div>
            </div>
        </header>
    </div>
  )
}
