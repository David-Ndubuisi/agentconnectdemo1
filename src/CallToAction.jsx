import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Pixabay from "./images/Pixabay-2618421.png";
import "./styles.css"; // Import the CSS file

const CallToAction = () => {
  return (
    <div className="cta-section">
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to get your new home the easiest way?</h2>
          <p>Get the best house hunting experience you can ever imagine</p>
          <Link to="/signup">
            <button className="cta-button">SIGN UP NOW</button>
          </Link>
        </div>
        <div className="cta-image-container">
          <img src={Pixabay} alt="House" className="cta-image" />
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
