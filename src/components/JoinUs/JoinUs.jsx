import React from 'react'
import "./JoinUs.css"

const JoinUs = () => {
  return (
    <div className='joinus-container'>
        <div className="joinus-l">
            <span>Become</span>
            <span className='stroke-text'>Muscular</span>
            <span>with us</span>
            <span>It's time to be complete you</span>
        </div>
        <div className="joinus-r">
            <input type='email' name='email' className='email' placeholder='email address'/>
        </div>
    </div>
  )
}

export default JoinUs