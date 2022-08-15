import React from 'react'
import "./JoinUs.css"

const JoinUs = () => {
  return (
    <div className='joinus-container'>
        <div className="joinus-l">
            <hr/>
            <div>
              <span>Become Muscular</span>
              <span className='stroke-text'> with us</span>
              <span>It's time to be complete you</span>
            </div>
        </div>
        <div className="joinus-r">
          <form action="" className='email-sub'>
            <input type='email' name='email' className='email' placeholder='provide email address'/>
            <button className='btn btn-j'>Join Us</button>
          </form>
        </div>
    </div>
  )
}

export default JoinUs