import { useState } from "react";
import { Link } from "react-router-dom";
import landingLogo from "../images/LOGO.png";
import "../responsive.css";
import Hero from "./hero";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev); // Flip login state
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={landingLogo} alt="Logo" />
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className={`auth-buttons ${isOpen ? "active" : ""}`}>
          {isLoggedIn ? (
            <Link to="/profile" className="signup">
              <i className="bx bx-user"></i>
            </Link>
          ) : (
            <>
              <Link to="/login" className="login">
                Log in
              </Link>
              <Link to="/signup" className="signup">
                Sign up
              </Link>
            </>
          )}

          {/* 🔄 Toggle Button */}
          <button onClick={toggleLogin} className="toggle-btn">
            Toggle
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
