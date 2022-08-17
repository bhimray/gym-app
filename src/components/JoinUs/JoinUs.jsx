import React, {useState} from 'react'
import "./JoinUs.css"
import emailjs from "emailjs-com"
import PhoneInput from 'react-phone-number-input'

const JoinUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_d7l0gks', 'template_ot4vzl9', e.target, 'mrkBTPLCncvi2zhpz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
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
        <form action="" onSubmit={sendEmail} className='email-sub'>
          <input type='email' name='email' className='email' placeholder='provide email address'/>
          <input type="text" name="name" className="name" placeholder="Full name"/>
          <input type="text" name="subject" className="subject" placeholder="Subject"/>
          <input type="tel" id="number" name="number" placeholder="9999999999" pattern="[0-9]{10}" required/>
          <textarea name="description" id="description" cols="30" rows="10" placeholder='For example: I want know more about different plans?'></textarea>
          <button className='btn btn-j'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default JoinUs