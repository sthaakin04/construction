import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
        <footer className="footer">
		<div className="fcontainer">
            <div className="frow">
            <div className="footer-col">
                    <h2>Global Group of Company</h2>
                    <h3>Construction at its best</h3>
                    <div className="social-links">
                        <a href="#" target="_blank"><i className="fa fa-facebook-f"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                    </div>
                    {/* <p>Opening time:<br/>6 AM - 8 PM</p> */}
                </div>
                <div className="footer-col">
                    <h1>company</h1>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Conditions</a></li>
                        <li><a href="#">Policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h1>get help</h1>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Customer Care</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Payment</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
	</footer> 
    </div>
  )
}
