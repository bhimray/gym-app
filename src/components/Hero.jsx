import React from 'react'
import "./Hero.css"
import Header from "./Header/Header"

import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import heart from "../assets/heart.png"
import Calories from "../assets/calories.png"
import { motion } from "framer-motion"
import {Link} from "react-scroll"
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className='left'>
        <Header/>
        {/*the best ad*/}
        <div className='the_best_ad'>
          <motion.div
          initial={{left:"238px"}}
          whileInView={{left:"9px"}}
          transition={{type:"spring", duration:2.5}}
          ></motion.div>
          <span>the best fitness club in Doon</span>
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
            <span>In here you can break and build your muscles</span>
          </div>
        </div>

        {/*figures */}
        <div className='figures'>
          <div>
            <span>+2</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+500</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*hero button */}
        <div className="hero-buttons">
          <buttons className="btn">
            <Link 
            to="joinus-container"
            span={true}
            smooth={true}
            >Get started</Link>
          </buttons>
          <buttons className="btn">
          <Link 
            to="programs"
            span={true}
            smooth={true}
            >Learn More</Link>
          </buttons>
        </div>
      </div>
      <div className="right">
        <button className="btn">
        <Link 
            to="joinus-container"
            span={true}
            smooth={true}
            >Join Now</Link>
        </button>
        <motion.div
        initial={{x:100}}
        whileInView={{x:0}}
        transition={{type:"spring", duration:2}}
        className='heart-rate'>
          <img src={heart} alt="heart"/>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero image */}
        <img src={hero_image} alt="hero_image" className='hero_image'/>
        <motion.img 
        initial={{x:100}}
        whileInView={{x:0}}
        transition={{type:"tween", duration:2}}
        src= {hero_image_back} alt="back_image" className='hero_image_back'/>

        {/* calories */}
        <div className='calories'>
          <img src = {Calories} alt = "calories"/>
          <div>
            <span>Calories burned</span>
            <span>220 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;