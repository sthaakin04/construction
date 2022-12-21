import React from 'react';
import './Contact.css';
export default function Contact() {
  return (
    <div className='concontainer'>
        <div className='contact-box'>
            <div className='contactleft'></div>
            <div className='right'>
                <h2>Contact Us</h2>
                <input type="text" className="field" placeholder="Your name"/>
                <input type="email" className="field" placeholder="Your Email"/>
                <input type="text" className="field" placeholder="Your Phone"/>
                <textarea className="field area" placeholder="Message"></textarea>
                <button className='btn btn-primary'>Send</button>              
            </div>   
        </div>     
    </div>
  )
}
