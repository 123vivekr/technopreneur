import React from 'react'
import './TopSection.css';
import logo from '../../../Assets/logo.png';
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter }from 'react-icons/fa';
import upWaves from '../../../Assets/topsection-wave.png';

const TopSection = () => {
    return ( 
        <div>
        <div id="home" className="top-container">
            <div>
                <img src= {logo} alt="LOGO" className="logo"/>
            </div>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <div className="rocket-date">                
                <div className="combine">
                    <div className="social_media">
                    <a href="https://www.instagram.com/iedcmec/?hl=en" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaInstagram />
                    </a>
                    <a href="https://in.linkedin.com/company/iedcmec" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaLinkedin/>
                    </a>
                    <a href="https://twitter.com/iedc_mec" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaTwitter/>
                    </a>                
                </div>
          </div>
            </div>
        </div>
        <img src={upWaves} style={{ position:"absolute", bottom:0}} className="wave-d" alt="wavedown"/>
        </div>
    )
}

export default TopSection
