import React from "react"
import DeckIcon from '@mui/icons-material/Deck'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from "@mui/icons-material/Twitter"
import LinkedIn from "@mui/icons-material/LinkedIn"
import "./Footer.css"
import knockoutletter from "../../assets/knockoutletter.png"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {Link} from "react-scroll"

const Footer = () => { 
    return(
        <footer className="pageFooter">
            <div className="lock">
                <div className="pageFooter--wrapper">
                    <div className="pageFooter--left">
                        <a className="pageFooter--left-logo" href="/">
                            <img src={knockoutletter}>
                            </img>
                        </a>
                        <ul className="pageFooter--left-social">
                            <li className="facebook"><Facebook/></li>
                            <li className="twitter"><Twitter/></li>
                            <li className="instagram"><Instagram/></li>
                            <li className="linkedin"><LinkedIn/></li>
                            
                        </ul>
                    </div>
                    <div className="pageFooter--right">
                        <div className="pageFooter--right-topLine">
                            <a href="/"className="return">
                                <Link to="header" span={true} smooth={true} class="full">Return to Top</Link>
                            </a>
                        </div>
                        <div className="pageFooter--right-links">
                            <div>
                                <ul className="wrapper" role="presentation">

                                    <li>
                                        <div class="title" role="headeing" aria-level="2">Contact Us</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="" role="listitem">Address: Shiniwala, Dehradun,</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Uttrakhand- 248197</a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="title" role="headeing" aria-level="2">Call Us</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="" role="listitem">Mobile No.:</a>
                                            </li>
                                            <li>
                                                <a role="listitem">+91 9999999999</a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="pageFooter--branding-log">
                    <FitnessCenterIcon/>
                    <span className="pageFooter--branding-copyright"> @ copyright to KNOCKOUT FITNESS</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer