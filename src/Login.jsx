import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./styles.css";
import logo from "./images/LOGO.png"; // Adjust the path as needed
import bubblesBg from "../public/images/Frame 34.png"; // Background bubbles image
import twitterX from "../public/images/pngwing.com.png"; // TwitterX logo
import googleIcon from "../public/images/5847f9cbcef1014c0b5e48c8.png"; // Google logo
import appleIcon from "../public/images/Apple-Logo-500x281.png"; // Apple logo

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Section - Form */}
      <div className="login-form-section">
        <img src={logo} alt="Agent Connect Logo" className="logo" />
        <h2>Welcome back!</h2>
        <p>Please enter your details</p>

        <form className="login-form">
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
            <label>Remember me for 30 days</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>
        </form>

        <div className="or-divider">
          <span>Or sign in with</span>
        </div>

        <div className="social-login">
          <img src={twitterX} alt="TwitterX" />
          <img src={googleIcon} alt="Google" />
          <img id="apple_logo" src={appleIcon} alt="Apple" />
        </div>

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/signup">
            <a href="#">Sign up</a>
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
