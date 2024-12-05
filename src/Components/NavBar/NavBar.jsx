import React, { useRef, useState } from 'react';
import './NavBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import MenuOpen from '../../assets/MenuOpen.png';
import MenuClose from '../../assets/MenuClose.png';

const NavBar = () => {

  const [menu, setMenu ] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <h3>Kannaki</h3>
        <img src={MenuOpen} onClick={openMenu} alt="" className='nav-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={MenuClose} onClick={closeMenu} alt="" className="nav-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={30} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={() => setMenu("experience")}>Experience</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={10} href='#skills'><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={10} href='#projects'><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={10} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default NavBar