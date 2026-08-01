import React, { useState } from 'react';
import './Css/navbar.css'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id='home'>
    <nav className='nav-bar'>

        <h2 className='logo'>Ak</h2>
             <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
             
             <ul className={menuOpen ? "nav-links active" : "nav-links"}>

            <li><a href='#home' onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href='#about'  onClick={()=> setMenuOpen(false)}>About</a></li>
            <li><a href='#skills' onClick={()=> setMenuOpen(false)}>Skills</a></li>
            <li><a href='#projects' onClick={()=> setMenuOpen(false)}>Projects</a></li>
            <li><a href='#services' onClick={()=> setMenuOpen(false)}>Services</a></li>
            <li><a href='#contact' onClick={()=> setMenuOpen(false)}>Contact</a></li>
        </ul>
        <a href="/Resume.pdf" download className="btn">Download Resume</a>
        </nav>
        </div>
  )
}

export default Navbar
