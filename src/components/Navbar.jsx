import { useState } from "react";
import { Link } from "react-router-dom";
import landingLogo from "../images/LOGO.png";
import "../responsive.css";
import Hero from "./hero";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={landingLogo} alt="Logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">For Sale</a>
            </li>
            <li>
              <a href="#">To Rent</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Authentication Buttons */}
        <div className={`auth-buttons ${isOpen ? "active" : ""}`}>
          <Link to="/login" className="login">
            Log in
          </Link>
          <Link to="/signup" className="signup">
            Sign up
          </Link>
        </div>
      </nav>

      <Hero />
    </div>
  );
};

export default Navbar;
