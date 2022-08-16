import React, {Fragment} from 'react'
import "./Plan.css"
import {plansData} from "../../data/plansData"
import Tick from "../../assets/tick.png"

const Plan = () => {
  return (
    <div className="plan-container">
        <div className="plan-header">
            <span className='stroke-text'>Ready to start</span>
            <span> Your Journey</span>
            <span className='stroke-text'> with us</span>
        </div>
        <div className='plan-card'>
            {plansData.map((data, i)=>(
                <Fragment>
                    <div className='plan-details' key={i}>
                        {data.icon}
                        <span>{data.name}</span>
                        <span>Rs. {data.price}</span>
                        <span className='features'>
                            {data.features.map((feature, i)=>(
                            <Fragment>
                                <div>
                                    <img src={Tick} alt=""/>
                                    <span key={i}>{feature}</span>
                                </div>
                            </Fragment>
                        ))}
                        </span>
                        <span>see more details...</span>
                        <button className='btn'>Join Now</button>
                    </div>
                </Fragment>
            ))}
        </div>
    </div>
  )
}

export default Plan