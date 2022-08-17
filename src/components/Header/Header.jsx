import React from 'react'
import "./Header.css"
import Logo from "../../assets/knockout-logo.png"
import {Link} from "react-scroll"
const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="Logo" className='logo'/>
        <ul className='header-menu'>
            <li><Link to="header">Home</Link></li>
            <li><Link to="programs" 
            span={true}
            smooth={true}>Programs</Link></li>
            <li><Link to="reasons" 
            span={true}
            smooth={true}>Reasons</Link></li>
            <li><Link to="plan-container"
            span={true}
            smooth={true}>Subscription</Link></li>
            <li><Link to="Testimonials" 
            span={true}
            smooth={true}>Feedback</Link></li>
            <li><Link to="pageFooter"
             span={true}
            smooth={true}>Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default Header