import React, { useState } from "react";
import {Link} from 'react-scroll'
import './Navbar.css'
import menu from '../../assets/menu.png'
import contact from '../../assets/contact.png'
const Navbar = () => {
  // Scroll function to scroll to the section
const[showMenu,setMenu]=useState(false) 

  return (
    <nav className="navbar">
      <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Education</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Contact</Link>

      </div>
      <div className="desktopMenuBtnWrapper">

      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
      }}>
        <img src={contact} alt="" className="desktopMenuImg" />Contact Me
      </button>
      </div>

      <img src={menu} alt="Logo" className='mobMenu' onClick={()=>{setMenu(!showMenu)}} />
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Education</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Contact</Link>
      </div>

    </nav>
  );
};

export default Navbar;
