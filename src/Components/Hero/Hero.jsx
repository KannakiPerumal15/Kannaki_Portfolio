import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Profile_img from '../../assets/Profile.png';
import Resume from '../../assets/Kannaki_Perumal_Resume.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Profile_img} alt="" />
        <h1><span>I'm Kannaki Perumal,</span> Full stack developer</h1>
        <p>I am a full stack developer with 1 year of experience.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
            <div className="hero-resume">
                <a href={Resume} download="Kannaki_Perumal_Resume.pdf" className="resume-link">
                    My Resume
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero