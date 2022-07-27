import React from 'react'
import "./Hero.css"
import Header from "./Header/Header"

const Hero = () => {
  return (
    <div className="hero">
      <div className='left'>
        <Header/>
        {/*the best ad*/}
        <div className='the_best_ad'>
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/*the hero text*/}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>
              Ideal Body
            </span>
          </div>
          <div>
            <span>In here you can do the gym work and everything.</span>
          </div>
        </div>
      </div>
      <div className="right">Right Side</div>
    </div>
  );
}

export default Hero;