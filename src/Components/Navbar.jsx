import React from 'react'

function Navbar() {
  return (
    <nav className='nav-bar'>

        <h2 className='logo'>Ak</h2>

        <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='/'>Skills</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
        <a href="/Resume.pdf" download className="btn">Download Resume</a>
        </nav>
  )
}

export default Navbar
