import React from "react"
import DeckIcon from '@mui/icons-material/Deck'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from "@mui/icons-material/Twitter"
import LinkedIn from "@mui/icons-material/LinkedIn"
import "./Footer.css"

const Footer = () => { 
    return(
        <footer className="pageFooter">
            <div className="lock">
                <div className="pageFooter--wrapper">
                    <div className="pageFooter--left">
                        <a className="pageFooter--left-logo" href="/">
                            <img src="https://www.chron.com/img/logos/black/logo.svg">
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
                                <span class="full">Return to </span>
                                 Top
                            </a>
                        </div>
                        <div className="pageFooter--right-links">
                            <div>
                                <ul className="wrapper" role="presentation">
                                    <li>
                                        <div class="title" role="headeing" aria-level="2">About</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="/privacy_policy" role="listitem">Privacy Notice</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Californica privacy rights</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Interest Based</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Terms of use</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Our Company</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="title" role="headeing" aria-level="2">About</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="/privacy_policy" role="listitem">Privacy Notice</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Californica privacy rights</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Interest Based</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Terms of use</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Our Company</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="title" role="heading" aria-level="2">About</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="/privacy_policy" role="listitem">Privacy Notice</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Californica privacy rights</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Interest Based</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Terms of use</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Our Company</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="pageFooter--branding-log">
                    <DeckIcon/>
                    <span className="pageFooter--branding-copyright"> @ copyright to DNC</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer