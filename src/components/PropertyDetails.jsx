import React from "react";
import "../styles.css";
import twitterX from "/Users/Admin/AgentConnect@/public/images/pngwing.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">
            <span className="agent">Agent</span> Connect
          </h2>
          <p>
            We offer the best service, online and offline inspection, affordable
            percentage, and many more just to make house hunting as convenient
            as possible for you.
          </p>
        </div>

        <div className="footer-links">
          <h3>Important Links</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <p>Connect with us via our social media links</p>
          <div className="social-icons">
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-instagram"></i>
            <img id="twitterX" src={twitterX} />
            <i class="bx bxl-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
