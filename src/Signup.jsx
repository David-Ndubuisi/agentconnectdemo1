import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./styles.css";
import logo from "./images/LOGO.png";
import bubblesBg from "../public/images/Frame 34.png"; // Background bubbles image
import twitterX from "../public/images/pngwing.com.png"; // TwitterX logo
import googleIcon from "../public/images/5847f9cbcef1014c0b5e48c8.png"; // Google logo
import appleIcon from "../public/images/Apple-Logo-500x281.png"; // Apple logo

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Section - Form */}
      <div className="login-form-section">
        <img src={logo} alt="Agent Connect Logo" className="logo2" />
        <h2>Get Started</h2>
        <p>Create an account to continue</p>

        <form className="login-form">
          <label>Fullname</label>
          <input type="email" placeholder="Enter your Fullname" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <div className="password-input">
            <input type="password" placeholder="Enter your password" required />
            <span className="toggle-password">
              <i class="bx bx-low-vision"></i>
            </span>
          </div>

          <div className="options">
            <input type="checkbox" />
            <label>Agree to terms and Conditions</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="sign-in-btn">
            Sign up
          </button>
        </form>

        <div className="or-divider">
          <span>Or sign up with</span>
        </div>

        <div className="social-login2">
          <img src={twitterX} alt="TwitterX" />
          <img src={googleIcon} alt="Google" />
          <img id="apple_logo" src={appleIcon} alt="Apple" />
        </div>

        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/login">
            <a href="#">Sign in</a>
          </Link>
        </p>
      </div>

      {/* Right Section - Background Image */}
      <div
        className="login-image-section"
        style={{ backgroundImage: `url(${bubblesBg})` }}
      ></div>
    </div>
  );
};

export default LoginPage;
