import React from 'react'
import "./Reasons.css"
import Addidas from "../../assets/adidas.png"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nike  from "../../assets/nike.png"
import tick from "../../assets/tick.png"



const Reasons = () => {
  return (
    <div>
        <div className='Reasons' id="reasons">
            <div className="left-s">
                <img src={image1} alt="image1"/>
                <img src={image2} alt="image2"/>
                <img src={image3} alt="image3"/>
                <img src={image4} alt="image4"/>
            </div>
            <div className="right-s">
                <div className="someReasons">
                    Some Reasons
                </div>
                <div className='why'>
                    <span className='stroke-text'>Why </span>
                    <span> Choose Us?</span>
                </div>
                <div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>Provide coaching service from expert</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Train smarter and better</span>
                    </div>
                    <div>
                        <img src={tick}  alt="" />
                        <span>Free for 1 week for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Well equiped for all exercise</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons