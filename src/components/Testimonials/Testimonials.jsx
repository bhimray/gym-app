import React from 'react'
import { useState } from 'react'
import "./Testimonials.css"
import { LoremIpsum } from 'react-lorem-ipsum'
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const dataIndex= testimonialsData.length
    console.log(dataIndex)
    console.log(selected)
  return (
    <div>
        <div className="Testimonials">
            <div className="testimonials-l">
                <div className='testimony-header'>
                    <span className='stroke-text'>What they</span>
                    <span> say about us</span>
                </div>
                <span>{testimonialsData[selected].review}</span>
                <div className="speaker">
                    <span>{testimonialsData[selected].name}</span>
                    <span> -- {testimonialsData[selected].status}</span>
                </div>
            </div>
            <div className="testimonials-r">
                <div className="arrow">
                    <img src={leftArrow} alt="" onClick={()=>{selected===0 ? setSelected(dataIndex-1): setSelected(prev=>prev-1)}}/>
                    <img src={rightArrow} alt="" onClick={()=>{selected===dataIndex-1 ? setSelected(dataIndex-dataIndex): setSelected(prev=>prev+1)}}/>
                </div>
                <div></div>
                <div></div>
                 <img src={testimonialsData[selected].image} alt="speaker image"/>
            </div>
        </div>

    </div>
  )
}

export default Testimonials