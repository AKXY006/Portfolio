import React from "react";
import './Css/Footer.css'
import {FaEnvelope, FaInstagram, FaLinkedin, FaGithub,FaPaperPlane} from "react-icons/fa";

function Footer() {

  return (
    <>
      <footer className="footer">
        <div className="quick-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className="support">
          <h3>Support</h3>
          <ul>
            <li><button className="footer-link-btn">Privacy Policy</button></li>
            <li><button className="footer-link-btn">Terms & Conditions</button></li>
          </ul>
        </div>

        <div className="get-in-touch">
          <h3>Get In Touch</h3>
          <ul>
            <li><a href="mailto:ak144336@gmail.com"><FaEnvelope /><span>Email</span></a></li>
            <li><a href="https://www.instagram.com/i_am_akxy/" target="_blank" rel="noopener noreferrer"><FaInstagram /><span>Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/akshay-kumar-4396a8361/" target="_blank" rel="noopener noreferrer"><FaLinkedin /><span>LinkedIn</span></a></li>
            <li><a href="https://github.com/AKXY006" target="_blank" rel="noopener noreferrer"><FaGithub /><span>GitHub</span></a></li>
          </ul>
        </div>

            <div className="contact-form">
               <h3>Contact Me</h3>
                 <form><input type="text" placeholder="Your Name" required />
                 <input type="email" placeholder="Your Email" required />
                 <textarea rows="4" placeholder="Your Message" required></textarea>
                 <button type="submit" className="send-btn"><FaPaperPlane /> Send</button>
                 </form>
            </div>
      </footer>

      <div className="copyright">
        <p>© 2026 <span>Akshay Kumar</span>. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;