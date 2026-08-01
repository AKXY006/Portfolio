import { Link } from 'react-router-dom'
import {FaEnvelope,FaInstagram,FaLinkedin,FaGithub,} from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='footer'>

    <div className="quick-links">
      <h3>Quick Links</h3>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/skills">Skills</Link></li>
        </ul>
    </div> 

    <div className="support">
      <h3>Support</h3>
        <ul>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
        </ul>
    </div>

    <div className="get-in-touch">
      <h3>Get In Touch</h3>
        <ul>
            <li><a href="mailto:ak144336@gmail.com"><FaEnvelope />  Gmail</a></li>
            <li><a href="https://www.instagram.com/i_am_akxy/"><FaInstagram />  Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/akshay-kumar-4396a8361/"><FaLinkedin/>  LinkedIn</a></li>
            <li><a href="https://github.com/AKXY006"><FaGithub/>  GitHub</a></li>
        </ul>
    </div>
    </div>

    <div className="copyright">
        <p>
          Copyright © 2026-2036 | All Rights Reserved.
          <span> Made by Akshay Kumar</span>
        </p>
      </div>
      </>
    
  )
}

export default Footer
