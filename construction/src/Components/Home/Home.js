import React,{useEffect} from 'react'
import './Home.css'
import HomeSlider from '../Homeslider/Homeslider';
export default function Home() {
    useEffect(() => {
        window.addEventListener('scroll',reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');
            // console.log(window.innerHeight);
            // console.log(reveals.length)
            for(var i=0;i<reveals.length;i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                // console.log(revealtop)
                var revealpoint = 150;

                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
                else{
                    reveals[i].classList.remove('active');  
                }
            }
        }
    });
  return (
        <div>
            <HomeSlider/>
            <section>
            <div className="container reveal">
                <h2>Construction</h2>
                <div className="cards">
                    <div className="text-card">
                        <div className="cardcontent">
                            <img src="static/images/cons1.jpg"/>
                            <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                        </div>
                    </div>

                    <div className="text-card">
                        <div className="cardcontent">
                                <img src="static/images/cons1.jpg"/>
                                <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                        </div>
                    </div>
                    <div className="text-card">
                        <div className="cardcontent">
                            <img src="static/images/cons1.jpg"/>
                            <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container reveal">
                <h2>Construction</h2>
                <div className="cards">
                    <div className="text-card">
                        <img src="static/images/cons1.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                    <div className="text-card">
                        <img src="static/images/cons2.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                    <div className="text-card">
                        <img src="static/images/cons3.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container reveal">
                <h2>Construction</h2>
                <div className="cards">
                    <div className="text-card">
                        <img src="static/images/cons1.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                    <div className="text-card">
                        <img src="static/images/cons2.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                    <div className="text-card">
                        <img src="static/images/cons3.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

