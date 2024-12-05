import React from 'react';
import './About.css';
import Profile_img from '../../assets/ProfileImage.jpg';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src="" alt="" />
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={Profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate Software Developer with 1 year of experience in creating modern, user-friendly web applications.
                            I specialize in building responsive, efficient, and scalable solutions using technologies like HTML, CSS, JavaScript, and React.js.</p>
                        <p>Over the past year, I have honed my skills in HTML, CSS, JavaScript, and React.js, delivering responsive and dynamic web solutions.
                            I take pride in writing clean, reusable code and collaborating with teams to create impactful projects.</p>
                        <p>I’m always eager to learn and take on new challenges. My vision is to grow as a professional, explore
                            emerging technologies, and create applications that leave a positive impact.</p>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    )
}

export default About