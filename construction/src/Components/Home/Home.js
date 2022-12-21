import React,{useEffect} from 'react'
import './Home.css'
export default function Home() {
    useEffect(() => {
        window.addEventListener('scroll',reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');
            // console.log(window.innerHeight);
            for(var i=0;i<reveals.length;i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                // console.log(revealtop)
                var revealpoint = 150;

                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                    if(i===1){
                        reveals[i].classList.remove('active');
                        reveals[i].classList.add('actives');
                    }
                }
                else{
                    reveals[i].classList.remove('active');
                    reveals[i].classList.remove('actives');
                }
            }
        }
    });
  return (
    <div>
        <section>
        <div class="container reveal">
            <h2>Construction</h2>
            <div class="cards">
                <div class="text-card">
                    <div class="cardcontent">
                        <img src="static/images/cons1.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                </div>

                <div class="text-card">
                    <div class="cardcontent">
                            <img src="static/images/cons1.jpg"/>
                            <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                </div>
                <div class="text-card">
                    <div class="cardcontent">
                        <img src="static/images/cons1.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                </div>
                <div class="text-card">
                    <div class="cardcontent">
                        <img src="static/images/cons1.jpg"/>
                        <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container reveal">
            <h2>Construction</h2>
            <div class="cards">
                <div class="text-card">
                    <img src="static/images/cons1.jpg"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
                <div class="text-card">
                    <img src="static/images/cons2.jpg"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
                <div class="text-card">
                    <img src="static/images/cons3.jpg"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
                <div class="text-card">
                    <img src="static/images/cons4.webp"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container reveal">
            <h2>Construction</h2>
            <div class="cards">
                <div class="text-card">
                    <img src="static/images/cons1.jpg"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
                <div class="text-card">
                    <img src="static/images/cons2.jpg"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
                <div class="text-card">
                    <img src="static/images/cons3.jpg"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
                <div class="text-card">
                    <img src="static/images/cons4.webp"/>
                    <p>Construction is good for health. Without construction we cannot develop country. Construction plays a vital role in everyone's life.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
